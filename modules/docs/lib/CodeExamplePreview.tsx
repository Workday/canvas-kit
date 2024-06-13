import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {purebasic} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStencil = createStencil({
  base: {
    '[data-part="example-block"]': {
      boxShadow: system.depth[1],
      borderRadius: system.shape.x1,
      position: 'relative',
    },
    '[data-part="code-block"]': {
      display: 'none',
      marginTop: calc.divide(system.space.x1, 2),
      boxShadow: system.depth[1],
      borderRadius: system.shape.x1,
    },
    '[data-part="code-toggle-btn"]': {
      position: 'absolute',
      right: calc.negate(px2rem(1)),
      bottom: calc.negate(px2rem(1)),
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

export const CodeExamplePreview = ({code}: any) => {
  const [isCodeDisplayed, setCodeDisplayed] = React.useState(false);

  return (
    <div {...cardStencil({opened: isCodeDisplayed})}>
      <Card data-part="example-block">
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
      <Card data-part="code-block">
        <Card.Body>
          {code && (
            <SyntaxHighlighter
              language="typescript"
              style={purebasic}
              customStyle={{
                background: 'transparent',
                fontSize: cssVar(system.fontSize.subtext.large),
                lineHeight: cssVar(system.lineHeight.subtext.large),
              }}
              children={code.__RAW__}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
