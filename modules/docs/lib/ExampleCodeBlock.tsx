import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {checkCircleIcon, copyIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react';
import sdk from '@stackblitz/sdk';

const cardStencil = createStencil({
  base: {
    '[data-part="example-block"]': {
      boxShadow: system.depth[1],
      borderRadius: system.shape.x1,
      position: 'relative',
    },
    '[data-part="code-block"]': {
      display: 'none',
      boxShadow: system.depth[1],
      borderRadius: system.shape.x1,
    },
    '[data-part="code-toggle-btn"]': {
      position: 'absolute',
      right: calc.negate(px2rem(1)),
      bottom: calc.negate(px2rem(1)),
    },
    '[data-part="copy-btn"]': {
      position: 'absolute',
      bottom: system.space.zero,
      right: system.space.zero,
      borderRadius: system.shape.zero,
      borderTopLeftRadius: system.shape.x1,
    },
  },
  modifiers: {
    opened: {
      true: {
        '[data-part="code-block"]': {
          display: 'block',
          borderTopLeftRadius: system.shape.zero,
          borderTopRightRadius: system.shape.zero,
        },
        '[data-part="example-block"]': {
          borderBottomLeftRadius: system.shape.zero,
          borderBottomRightRadius: system.shape.zero,
        },
      },
    },
  },
});

export const ExampleCodeBlock = ({code}: any) => {
  const [isCodeDisplayed, setCodeDisplayed] = React.useState(false);
  const textInput = React.useRef(null);
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const onCopy = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setCopied(false);
    }, 2000);

    setCopied(true);
    // @ts-ignore
    navigator.clipboard.writeText(textInput.current.textContent);
  };

  // React.useEffect(() => {
  //   if (copied) {
  //     const copyCodeTimeout = setTimeout(() => {
  //       setCopied(false);
  //     }, 2000);

  //     return () => {
  //       clearTimeout(copyCodeTimeout);
  //     };
  //   }
  // }, [copied]);

  const openProjectInStackblitz = () => {
    sdk.openProject(
      {
        files: {
          'src/Demo.tsx': code.__RAW__,
          'src/vite-env-d.ts': `/// <reference types="vite/client" />`,
          'src/App.tsx': `import * as React from 'react';,
          'src/'
import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import { createStyles } from '@workday/canvas-kit-styling';

import { Demo } from './Demo';
import { system } from '@workday/canvas-tokens-web';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

export const App = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing
  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    canvas: {
      direction: ContentDirection.LTR,
    },
  });

  return (
    <CanvasProvider theme={canvasTheme}>
      <>
        <main className={mainContentStyles}>
          <p>Welcome to Canvas Kit v12 Starter!</p>
          <Demo/>
        </main>
      </>
    </CanvasProvider>
  );
};
`,
          'tsconfig.node.json': `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
`,
          '.eslintrc.js': `module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
`,
          'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
`,
          'src/main.tsx': `import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { injectGlobal } from '@emotion/css';
import { fonts } from '@workday/canvas-kit-react-fonts';
import { system } from '@workday/canvas-tokens-web';
import { cssVar } from '@workday/canvas-kit-styling';

import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

import Demo from './Demo';

injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: cssVar(system.fontFamily.default),
    margin: 0,
    minHeight: '100vh',
  },
  '#root, #root < div': {
    minHeight: '100vh',
    ...system.type.body.small,
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Demo />);
`,
          'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

`,
          'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`,
          'package.json': `{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@emotion/css": "11.11.2",
    "@emotion/react": "11.11.4",
    "@types/react": "18.2.60",
    "@types/react-dom": "18.2.19",
    "@workday/canvas-kit-labs-react": "12.0.0",
    "@workday/canvas-kit-preview-react": "12.0.0",
    "@workday/canvas-kit-react": "12.0.0",
    "@workday/canvas-kit-react-fonts": "^12.0.0",
    "@workday/canvas-kit-styling": "12.0.0",
    "@workday/canvas-system-icons-web": "3.0.22",
    "@workday/canvas-tokens-web": "2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.59",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^7.1.0",
    "@typescript-eslint/parser": "^7.1.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.1.4"
  }
}
`,
        },
        template: 'node',
        title: `Foo Bar`,
        description: `This is an example of my first doc!`,
      },

      // Options
      {
        newWindow: true,
      }
    );
  };

  return (
    <div {...cardStencil({opened: isCodeDisplayed})}>
      <Card data-part="example-block" className="sb-unstyled">
        <Card.Body>
          {React.createElement(code)}
          {code && (
            <TertiaryButton
              size="extraSmall"
              onClick={() => openProjectInStackblitz()}
              data-part="code-toggle-btn"
            >
              Edit in Stackblitz
              {/* {!isCodeDisplayed ? 'Show Code' : 'Hide Code'} */}
            </TertiaryButton>
          )}
        </Card.Body>
      </Card>
      <Card data-part="code-block" padding={0}>
        <Card.Body cs={{position: 'relative'}}>
          {code && (
            <div ref={textInput}>
              <SyntaxHighlighter
                className="sb-unstyled"
                language="jsx"
                style={vscDarkPlus}
                customStyle={{
                  fontSize: cssVar(system.fontSize.subtext.large),
                  lineHeight: cssVar(system.lineHeight.subtext.large),
                  margin: '0',
                  padding: `${cssVar(system.space.x8)} ${cssVar(system.space.x10)}`,
                }}
                children={code.__RAW__}
              />
            </div>
          )}
          <Tooltip title={copied ? 'Copied!' : 'Copy Source Code'}>
            <TertiaryButton
              aria-label="Copy Code"
              size="large"
              data-part="copy-btn"
              variant="inverse"
              iconPosition="end"
              icon={copied ? checkCircleIcon : copyIcon}
              onClick={onCopy}
            />
          </Tooltip>
        </Card.Body>
      </Card>
    </div>
  );
};
