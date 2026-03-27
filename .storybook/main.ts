import crypto from 'node:crypto';
import {existsSync, readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';

import {StorybookConfig} from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import ts from 'typescript';
import {mergeConfig} from 'vite';

import {
  createConfig,
  styleTransformer,
  vitePluginTypescriptWithTransformers,
} from '@workday/canvas-kit-styling-transform';
import {DocParser} from '@workday/canvas-kit-docs/docgen/docParser.ts';
import type {ExportedSymbol, Value} from '@workday/canvas-kit-docs/docgen/docTypes.ts';
import {componentParser} from '@workday/canvas-kit-docs/docgen/plugins/componentParser.ts';
import {enhancedComponentParser} from '@workday/canvas-kit-docs/docgen/plugins/enhancedComponentParser.ts';
import {modelParser} from '@workday/canvas-kit-docs/docgen/plugins/modelParser.ts';

import pkg from '../lerna.json' with {type: 'json'};
import {vitePluginInlineSpecifications} from './vite-plugin-inline-specifications.ts';
import {vitePluginRedirectMDXToGithub} from './vite-plugin-redirect-mdx-to-github.ts';
import {vitePluginWholeSource} from './vite-plugin-whole-source.ts';

const processDocs = process.env.SKIP_DOCGEN !== 'true';
const docsMap = new Map<string, ExportedSymbol<Value>[]>();

// Inline styling config to avoid importing handleFocusRing which pulls in
// @workday/canvas-kit-react/common (a directory subpath that Node ESM can't resolve).
// focusRing() still works at runtime via Emotion — it's just not statically compiled.
const stylingConfig = createConfig({
  prefix: 'cnvs',
  getPrefix(path) {
    const match = path.match(/.+modules\/(preview|labs)-react\/([^/]+)\/.+/);
    if (match) {
      return `cnvs-${match[1]}`;
    }
    return 'cnvs';
  },
  seed: crypto.createHash('sha256').update(pkg.version).digest('hex').slice(0, 6),
  fallbackFiles: [],
});

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  stories: ['../modules/**/mdx/**/*.mdx', '../modules/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-mcp',
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal(config) {
    return mergeConfig(
      {
        plugins: [
          vitePluginInlineSpecifications(),
          vitePluginRedirectMDXToGithub(),
          vitePluginWholeSource(),
          vitePluginTypescriptWithTransformers({
            include: /modules\/.+\.tsx?/,
            exclude: /examples|stories|spec|codemod|docs/,
            transformers: [
              processDocs
                ? program => {
                    const docParser = new DocParser(program, [
                      enhancedComponentParser,
                      componentParser,
                      modelParser,
                    ] as any);
                    return _context => {
                      return node => {
                        if (ts.isSourceFile(node)) {
                          const fileName = node.fileName;
                          const symbols = docParser.getExportedSymbols(fileName);
                          docsMap.set(fileName, symbols);
                        }
                        return node;
                      };
                    };
                  }
                : undefined,
              program => {
                const transform = styleTransformer(program, {
                  ...stylingConfig,
                  extractCSS: false,
                });
                return context => {
                  const visit = transform(context);
                  return sourceFile => {
                    try {
                      return visit(sourceFile);
                    } catch {
                      return sourceFile;
                    }
                  };
                };
              },
            ],
            postTransform(code, id) {
              let newCode = code.replace('%VERSION%', pkg.version);
              if (docsMap.get(id) && processDocs) {
                return (
                  newCode +
                  `\nconst __docs = ${JSON.stringify(docsMap.get(id))}
if (window.__updateDocs) {
  window.__updateDocs?.(__docs)
} else {
  window.__docs = (window.__docs || []).concat(__docs)
}`
                );
              }
              return newCode;
            },
          }),
        ],
      },
      config
    );
  },
};

const EXAMPLE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

function resolveExampleFile(storyDir: string, importPath: string): string | null {
  const base = resolve(storyDir, importPath);
  for (const ext of EXAMPLE_EXTENSIONS) {
    const fullPath = base + ext;
    if (existsSync(fullPath)) return fullPath;
  }
  if (existsSync(base)) return base;
  return null;
}

function enrichManifestSnippets(existing: Record<string, any>) {
  const components = existing?.components?.components;
  if (!components) return existing;

  for (const component of Object.values(components) as any[]) {
    if (!component.path || !component.stories?.length) continue;

    const storyFilePath = resolve(process.cwd(), component.path);
    const storyDir = dirname(storyFilePath);
    let storySource: string;
    try {
      storySource = readFileSync(storyFilePath, 'utf-8');
    } catch {
      continue;
    }

    const importMap = new Map<string, string>();
    const importRe = /import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g;
    let m;
    while ((m = importRe.exec(storySource)) !== null) {
      const importPath = m[2];
      if (!importPath.includes('/examples/') && !importPath.startsWith('./examples/')) continue;
      for (const spec of m[1].split(',')) {
        const trimmed = spec.trim();
        if (!trimmed) continue;
        const parts = trimmed.split(/\s+as\s+/);
        const localName = (parts[1] || parts[0]).trim();
        const resolved = resolveExampleFile(storyDir, importPath);
        if (resolved) importMap.set(localName, resolved);
      }
    }

    if (importMap.size === 0) continue;

    const renderMap = new Map<string, string>();
    const renderRe = /export\s+(?:const|var|let)\s+(\w+)[^=]*=\s*\{[^}]*?render:\s*(\w+)/gs;
    while ((m = renderRe.exec(storySource)) !== null) {
      renderMap.set(m[1], m[2]);
    }

    for (const story of component.stories) {
      let exportName: string | undefined;
      const snippetMatch = story.snippet?.match(/^const\s+(\w+)\s*=/);
      if (snippetMatch) {
        exportName = snippetMatch[1];
      } else {
        exportName = story.name.replace(/\s+/g, '');
      }

      const renderFnName = renderMap.get(exportName);
      if (!renderFnName) continue;

      const examplePath = importMap.get(renderFnName);
      if (!examplePath) continue;

      try {
        story.snippet = readFileSync(examplePath, 'utf-8').trim();
      } catch {
        // keep original
      }
    }
  }

  return existing;
}

// Storybook's importModule returns mod.default, so named exports from main.ts
// are not visible to the preset system. Attach the hook directly on the config
// object so it survives as part of the preset's "rest" properties.
(config as any).experimental_manifests = enrichManifestSnippets;

export default config;
