import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {checkCircleIcon, copyIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react';

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

  const onCopy = () => {
    setCopied(true);
    // @ts-ignore
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div {...cardStencil({opened: isCodeDisplayed})}>
      <Card data-part="example-block" className="sb-unstyled">
        <Card.Body>
          {React.createElement(code)}
          {code && (
            <TertiaryButton
              size="extraSmall"
              onClick={() => setCodeDisplayed(!isCodeDisplayed)}
              data-part="code-toggle-btn"
            >
              {!isCodeDisplayed ? 'Show Code' : 'Hide Code'}
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
          <Tooltip title="Copy Source">
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
