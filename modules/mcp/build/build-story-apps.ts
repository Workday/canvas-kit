import {build, type Plugin} from 'vite';
import react from '@vitejs/plugin-react';
import {viteSingleFile} from 'vite-plugin-singlefile';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import {fileURLToPath} from 'node:url';
import {canvasKitSourceResolver} from './vite-plugins';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONCURRENCY = Math.max(1, os.cpus().length);

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
import type {App as McpApp} from '@modelcontextprotocol/ext-apps';
import {useApp, useHostStyles} from '@modelcontextprotocol/ext-apps/react';
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
import MDXContent from '${mdxRelativePath}';
import {Meta} from '@storybook/blocks';
import {ExampleCodeBlock, SymbolDoc, SymbolDescription, Specifications, InformationHighlight, StorybookStatusIndicator, McpAppProvider} from '@workday/canvas-kit-docs';

const mdxComponents = {Meta, ExampleCodeBlock, SymbolDoc, SymbolDescription, Specifications, InformationHighlight, StorybookStatusIndicator};

const parentApp = (window as any).__MCP_APP_PARENT__ as McpApp | undefined;

function StoryContent({app}: {app: McpApp | null}) {
  useHostStyles(app, app?.getHostContext());

  React.useEffect(() => {
    if (!app) return;
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;
      e.preventDefault();
      let url = href;
      if (href.startsWith('/')) {
        const slug = href.replace(/^\\//,'').replace(/\\/$/,'').replace(/\\//g, '-');
        url = 'https://workday.github.io/canvas-kit/?path=/docs/' + slug + '--docs';
      } else if (!/^https?:\\/\\//.test(href)) {
        url = new URL(href, location.href).href;
      }
      void app.openLink({url});
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [app]);

  return (
    <McpAppProvider value={app}>
      <MDXProvider components={mdxComponents}>
        <MDXContent />
      </MDXProvider>
    </McpAppProvider>
  );
}

function StandaloneApp() {
  const {app} = useApp({
    appInfo: {name: 'Canvas Kit Story', version: '1.0.0'},
    capabilities: {},
  });
  return <StoryContent app={app} />;
}

function App() {
  if (parentApp) {
    return <StoryContent app={parentApp} />;
  }
  return <StandaloneApp />;
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

async function runWithConcurrency<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {
  const results: T[] = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const i = index++;
      results[i] = await tasks[i]();
    }
  }

  await Promise.all(Array.from({length: Math.min(limit, tasks.length)}, () => worker()));
  return results;
}

async function buildStoryApp(
  slug: string,
  story: StoriesConfig['stories'][string],
  repoRoot: string,
  outDir: string,
  stubsDir: string
): Promise<boolean> {
  const mdxAbsPath = path.resolve(repoRoot, story.mdxPath);

  if (!fs.existsSync(mdxAbsPath)) {
    console.warn(`  SKIP ${slug}: MDX not found at ${mdxAbsPath}`);
    return false;
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

    console.log(`  OK ${slug}`);
    return true;
  } catch (error) {
    console.error(`  FAIL ${slug}:`, error instanceof Error ? error.message : error);
    return false;
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

async function buildStoryViewer(outDir: string) {
  const storyViewerHtml = path.join(__dirname, 'story-viewer.html');
  if (!fs.existsSync(storyViewerHtml)) {
    return;
  }

  console.log('Building story-viewer...');
  try {
    await build({
      root: __dirname,
      base: './',
      plugins: [viteSingleFile()],
      build: {
        outDir,
        emptyOutDir: false,
        rollupOptions: {
          input: storyViewerHtml,
          output: {
            entryFileNames: 'story-viewer.js',
          },
        },
        minify: true,
        sourcemap: false,
      },
      logLevel: 'silent',
    });
    console.log('  OK story-viewer');
  } catch (error) {
    console.error('  FAIL story-viewer:', error instanceof Error ? error.message : error);
  }
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
  console.log(`Building ${slugs.length} story apps (concurrency: ${CONCURRENCY})...`);

  const tasks = slugs.map(
    slug => () => buildStoryApp(slug, config.stories[slug], repoRoot, outDir, stubsDir)
  );

  const results = await runWithConcurrency(tasks, CONCURRENCY);
  const built = results.filter(Boolean).length;
  const failed = slugs.length - built;

  console.log(`\nBuild complete: ${built} succeeded, ${failed} failed out of ${slugs.length}`);

  await buildStoryViewer(outDir);
}

buildStoryApps().catch((error: unknown) => {
  console.error('Build failed:', error);
  process.exit(1);
});
