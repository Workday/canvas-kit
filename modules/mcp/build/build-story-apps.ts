import {build, type Plugin} from 'vite';
import react from '@vitejs/plugin-react';
import {viteSingleFile} from 'vite-plugin-singlefile';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import {canvasKitSourceResolver} from './vite-plugins';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface StoriesConfig {
  stories: Record<
    string,
    {
      title: string;
      storybookUrl: string;
      mdxPath: string;
    }
  >;
}

function extractExports(source: string): string[] {
  const exportPattern =
    /export (?:default|const|var|function)(?: class)?(?: function)? ([^:\s<();]*)/;
  return (source.match(new RegExp(exportPattern, 'g')) || [])
    .map(match => match.match(exportPattern)![1] || 'Example')
    .filter(name => name.charAt(0).toUpperCase() === name.charAt(0))
    .filter((value, index, self) => self.indexOf(value) === index);
}

function wholeSourcePlugin(): Plugin {
  return {
    name: 'whole-source-raw',
    enforce: 'pre',
    transform(code, id) {
      if (!/\/examples\/[^/]+\.tsx$/.test(id)) {
        return null;
      }
      const raw = JSON.stringify(code)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');
      const exports = extractExports(code);
      if (exports.length === 0) {
        return null;
      }
      const rewritten = code.includes('export default (')
        ? code.replace('export default (', 'const Example = (') + '\nexport default Example;'
        : code;
      return `${rewritten}\n${exports.map(name => `${name}.__RAW__ = ${raw};`).join('\n')}\n`;
    },
  };
}

function generateEntryHtml(entryFile: string): string {
  const harnessPath = path.join(__dirname, 'harness.html');
  if (!fs.existsSync(harnessPath)) {
    throw new Error(`Harness template not found at ${harnessPath}`);
  }

  let harness = fs.readFileSync(harnessPath, 'utf-8');
  const appScript = `<script type="module" src="./${entryFile}"></script>`;
  harness = harness.replace('</body>', `${appScript}\n</body>`);
  return harness;
}

function generateEntryTsx(mdxRelativePath: string): string {
  return `import React from 'react';
import {createRoot} from 'react-dom/client';
import {MDXProvider} from '@mdx-js/react';
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
import MDXContent from '${mdxRelativePath}';
import {Meta} from '@storybook/blocks';
import {ExampleCodeBlock, SymbolDoc, SymbolDescription, Specifications, InformationHighlight} from '@workday/canvas-kit-docs';

const mdxComponents = {Meta, ExampleCodeBlock, SymbolDoc, SymbolDescription, Specifications, InformationHighlight};

function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <MDXContent />
    </MDXProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

async function buildStoryApps() {
  const configPath = path.resolve(__dirname, '../lib/stories-config.json');
  if (!fs.existsSync(configPath)) {
    console.error('stories-config.json not found. Run discover-stories first.');
    process.exit(1);
  }

  const config: StoriesConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const outDir = path.resolve(__dirname, '../dist/apps');
  const repoRoot = path.resolve(__dirname, '../../..');
  const stubsDir = path.resolve(__dirname, 'storybook-stubs');

  fs.mkdirSync(outDir, {recursive: true});

  const slugs = Object.keys(config.stories);
  console.log(`Building ${slugs.length} story apps...`);

  let built = 0;
  let failed = 0;

  for (const slug of slugs) {
    const story = config.stories[slug];
    const mdxAbsPath = path.resolve(repoRoot, story.mdxPath);

    if (!fs.existsSync(mdxAbsPath)) {
      console.warn(`  SKIP ${slug}: MDX not found at ${mdxAbsPath}`);
      failed++;
      continue;
    }

    const mdxDir = path.dirname(mdxAbsPath);
    const tempEntryPath = path.join(mdxDir, `__mcp_entry_${slug}.tsx`);
    const tempHtmlPath = path.join(mdxDir, `__mcp_index_${slug}.html`);

    const mdxBaseName = path.basename(mdxAbsPath);
    const entryTsx = generateEntryTsx(`./${mdxBaseName}`);
    const entryHtml = generateEntryHtml(`__mcp_entry_${slug}.tsx`);

    fs.writeFileSync(tempEntryPath, entryTsx);
    fs.writeFileSync(tempHtmlPath, entryHtml);

    try {
      await build({
        root: mdxDir,
        base: './',
        plugins: [
          canvasKitSourceResolver(repoRoot),
          wholeSourcePlugin(),
          {
            enforce: 'pre',
            ...mdx({remarkPlugins: [remarkGfm], providerImportSource: '@mdx-js/react'}),
          },
          react({include: /\.(mdx|js|jsx|ts|tsx)$/}),
          viteSingleFile(),
        ],
        resolve: {
          alias: {
            '@workday/canvas-kit-docs': path.join(stubsDir, 'canvas-kit-docs.tsx'),
            '@storybook/blocks': path.join(stubsDir, 'storybook-blocks.tsx'),
            '@storybook/react': path.join(stubsDir, 'storybook-react.tsx'),
          },
        },
        build: {
          outDir,
          emptyOutDir: false,
          rollupOptions: {
            input: tempHtmlPath,
            output: {
              entryFileNames: `${slug}.js`,
              assetFileNames: `${slug}.[ext]`,
            },
          },
          minify: true,
          sourcemap: false,
        },
        logLevel: 'silent',
      });

      const outputHtml = path.join(outDir, `__mcp_index_${slug}.html`);
      const finalHtml = path.join(outDir, `${slug}.html`);
      if (fs.existsSync(outputHtml)) {
        fs.renameSync(outputHtml, finalHtml);
      }

      built++;
      console.log(`  OK ${slug}`);
    } catch (error) {
      failed++;
      console.error(`  FAIL ${slug}:`, error instanceof Error ? error.message : error);
    } finally {
      try {
        fs.unlinkSync(tempEntryPath);
      } catch {
        // Ignore
      }
      try {
        fs.unlinkSync(tempHtmlPath);
      } catch {
        // Ignore
      }
    }
  }

  console.log(`\nBuild complete: ${built} succeeded, ${failed} failed out of ${slugs.length}`);
}

buildStoryApps().catch((error: unknown) => {
  console.error('Build failed:', error);
  process.exit(1);
});
