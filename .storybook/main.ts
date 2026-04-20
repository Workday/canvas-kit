import mdx from '@mdx-js/rollup';
import {StorybookConfig} from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import ts from 'typescript';
import {mergeConfig} from 'vite';

// Drop the `/index.ts` if using the published package
import {styleTransformer} from '@workday/canvas-kit-styling-transform';
import {ExportedSymbol, Value} from '@workday/canvas-kit-docs/docgen/docTypes';

import {version} from '../lerna.json' assert {type: 'json'};
import stylingConfig from '../styling.config';
import { vitePluginInlineSpecifications } from './vite-plugin-inline-specifications';
import { vitePluginRedirectMDXToGithub } from './vite-plugin-redirect-mdx-to-github';
import { vitePluginWholeSource } from './vite-plugin-whole-source';
import { vitePluginTypescriptWithTransformers } from '@workday/canvas-kit-styling-transform';
import { getDocParser } from '@workday/canvas-kit-docs/docgen/createDocProgram';

// const modulesPath = path.resolve(__dirname, '../modules');
const processDocs = process.env.SKIP_DOCGEN !== 'true';

const docsMap = new Map<string, ExportedSymbol<Value>[]>();

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
  viteFinal(config) {
    return mergeConfig(
      {
        plugins: [
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
          vitePluginTypescriptWithTransformers({
            include: /modules\/.+\.tsx?/,
            exclude: /examples|stories|spec|codemod|docs/,
            transformers: [
              processDocs
                ? program => {
                    const docParser = getDocParser(program);
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
              program => styleTransformer(program, {...stylingConfig, extractCSS: false}),
            ],
            postTransform(code, id) {
              let newCode = code.replace('%VERSION%', version);
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
