import crypto from 'node:crypto';

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
    reactDocgen: false,
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

export default config;
