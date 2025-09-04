import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {checkCircleIcon, copyIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import sdk from '@stackblitz/sdk';
import tsconfigFile from '!!raw-loader!./stackblitzFiles/tsconfig.json';
import {packageJSONFile} from './stackblitzFiles/packageJSONFile';
import indexHTMLFile from '!!raw-loader!./stackblitzFiles/index.html';
import mainFile from '!!raw-loader!./stackblitzFiles/main.tsx';
import viteConfigFile from '!!raw-loader!./stackblitzFiles/vite.config.ts';
import eslintrc from '!!raw-loader!./stackblitzFiles/.eslintrc.cjs.txt';
import tsconfigNodeFile from '!!raw-loader!./stackblitzFiles/tsconfig.node.json';
import appFile from '!!raw-loader!./stackblitzFiles/App.tsx';
import viteEnvFile from '!!raw-loader!./stackblitzFiles/vite-env.d.ts';
import {CanvasProvider, defaultBranding} from '@workday/canvas-kit-react/common';

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
    '[data-part="code-toggle-stackblitz-btn-container"]': {
      position: 'absolute',
      right: calc.negate(px2rem(1)),
      bottom: calc.negate(px2rem(1)),
      display: 'flex',
      gap: system.space.x2,
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

  /**
   * `code` returns our examples. We need to rewrite them so that they export `Demo`.
   */
  const handleExampleRewrite = (code: any) => {
    return code
      .replace(/\bexport\s+const\s+(\w+)\s*=/, `export const Demo =`)
      .replace(/export default/, 'export const Demo =');
  };

  const openProjectInStackblitz = () => {
    sdk.openProject(
      {
        files: {
          'src/Demo.tsx': handleExampleRewrite(code.__RAW__),
          'src/vite-env-d.ts': viteEnvFile,
          'src/App.tsx': appFile,
          'tsconfig.node.json': tsconfigNodeFile,
          '.eslintrc.js': eslintrc,
          'vite.config.ts': viteConfigFile,
          'src/main.tsx': mainFile,
          'index.html': indexHTMLFile,
          'tsconfig.json': tsconfigFile,
          'package.json': packageJSONFile,
        },
        template: 'node',
        title: `Demo`,
        description: `This is a Canvas Kit Demo. Edit and play around!`,
      },

      // Options
      {
        newWindow: true,
        openFile: 'src/Demo.tsx',
      }
    );
  };

  return (
    <div {...cardStencil({opened: isCodeDisplayed})}>
      <Card data-part="example-block" className="sb-unstyled">
        <Card.Body>
          <CanvasProvider className={defaultBranding}>
            {React.createElement(code)}
            {code && (
              <div data-part="code-toggle-stackblitz-btn-container">
                <TertiaryButton size="extraSmall" onClick={() => openProjectInStackblitz()}>
                  ⚡️ Edit in Stackblitz
                </TertiaryButton>
                <TertiaryButton
                  size="extraSmall"
                  onClick={() => setCodeDisplayed(!isCodeDisplayed)}
                >
                  {!isCodeDisplayed ? 'Show Code' : 'Hide Code'}
                </TertiaryButton>
              </div>
            )}
          </CanvasProvider>
        </Card.Body>
      </Card>
      <Card data-part="code-block" padding={0}>
        <Card.Body cs={{position: 'relative'}}>
          <CanvasProvider className={defaultBranding}>
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
          </CanvasProvider>
        </Card.Body>
      </Card>
    </div>
  );
};
