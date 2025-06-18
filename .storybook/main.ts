import mdx from '@mdx-js/rollup';
import {StorybookConfig} from '@storybook/react-vite';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import remarkGfm from 'remark-gfm';
import ts from 'typescript';
import {ViteDevServer, createFilter, mergeConfig} from 'vite';

import {createWatchDocProgram} from '@workday/canvas-kit-docs/docgen/createDocProgram';
import {ExportedSymbol, Value} from '@workday/canvas-kit-docs/docgen/docTypes';
import styleTransformer from '@workday/canvas-kit-styling-transform';

import styleTransformerConfig from '../styling.config';
import {vitePluginInlineSpecifications} from './vite-plugin-inline-specifications';
import {vitePluginRedirectMDXToGithub} from './vite-plugin-redirect-mdx-to-github';
// import typescriptPlugin from '@rollup/plugin-typescript';
import {typescriptPlugin} from './vite-plugin-typescript-with-transformers';
import {vitePluginWholeSource} from './vite-plugin-whole-source';

const processDocs = process.env.SKIP_DOCGEN !== 'true';

const docsMap = new Map<string, ExportedSymbol<Value>[]>();
let docsFlushed = false;

function toSymbolArray(input: Map<string, ExportedSymbol<Value>[]>): ExportedSymbol<Value>[] {
  return [...input].flatMap(([key, value]) => value);
}

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  stories: ['../modules/**/mdx/**/*.mdx', '../modules/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disabled because actions is SLOW
      },
    },
    '@storybook/addon-storysource',
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
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  typescript: {
    check: false,
    reactDocgen: false, // we'll handle this ourselves
  },

  viteFinal(config, options) {
    console.log('type', options.configType);
    let server: ViteDevServer;
    let symbols: ExportedSymbol[] = [];
    const createDocProgram = createWatchDocProgram();

    return mergeConfig(
      {
        plugins: [
          {
            name: 'vite-plugin-dev-server',
            configureServer(_server) {
              server = _server;
            },
          },
          vitePluginInlineSpecifications(),
          vitePluginRedirectMDXToGithub(),
          {
            enforce: 'pre',
            ...mdx({
              include: '*.md',
              providerImportSource: '@mdx-js/react',
              remarkPlugins: [remarkGfm],
            }),
          },
          vitePluginWholeSource(),
          // Only embed all docs in production builds
          processDocs && options.configType === 'PRODUCTION'
            ? {
                name: 'vite-plugin-doc-injection',
                sequential: true,
                transform(code, id) {
                  if (/modules\/docs\/lib\/docs\.json/.test(id)) {
                    console.log('docs.json', toSymbolArray(docsMap).length);
                    docsFlushed = true;
                    return `export default ${JSON.stringify(toSymbolArray(docsMap), null, '  ')};`;
                  }
                },
              }
            : undefined,
          processDocs
            ? typescriptPlugin({
                include: /modules\/.+\.tsx?/,
                exclude: /examples|stories|spec|codemod|docs/,
                transformers: [
                  program => {
                    const docParser = createDocProgram(program);
                    return _context => {
                      return node => {
                        const fileName = node.getSourceFile().fileName;
                        const symbols = docParser.getExportedSymbols(node);
                        docsMap.set(fileName, symbols);

                        if (server) {
                          if (docsFlushed) {
                            server.ws.send('docs:update', symbols);
                          }
                        }
                        return node;
                      };
                    };
                  },
                  program => {
                    return styleTransformer(program, {
                      ...styleTransformerConfig,
                      extractCSS: false,
                    });
                  },
                ],
                postTransform(code, id) {
                  if (docsMap.get(id) && options.configType === 'DEVELOPMENT') {
                    return code + `\nwindow.__updateDocs?.(${JSON.stringify(docsMap.get(id))});`;
                  }
                },
              })
            : undefined,
        ],
      },
      config
    );
  },
};

export default config;
