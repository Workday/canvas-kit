import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
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
      marginTop: system.space.x1,
      boxShadow: system.depth[1],
      borderRadius: system.shape.x1,
    },
    '[data-part="code-toggle-btn"]': {
      [buttonStencil.vars.borderRadius]: system.shape.x1,
      borderTop: `${px2rem(1)} solid ${system.color.border.divider}`,
      borderLeft: `${px2rem(1)} solid ${system.color.border.divider}`,
      '&:hover': {
        [buttonStencil.vars.background]: 'transparent',
      },
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
        },
      },
    },
  },
});

export const CodeExamplePreview = ({code}: any) => {
  const [isCodeDisplayed, setCodeDisplayed] = React.useState(false);
  console.log(code);
  return (
    <div {...cardStencil({opened: isCodeDisplayed})}>
      <Card data-part="example-block">
        <Card.Body>
          {React.createElement(code)}
          <BaseButton
            size="extraSmall"
            onClick={() => setCodeDisplayed(!isCodeDisplayed)}
            data-part="code-toggle-btn"
          >
            {!isCodeDisplayed ? 'Show Code' : 'Hide Code'}
          </BaseButton>
        </Card.Body>
      </Card>
      <Card data-part="code-block">
        <Card.Body>
          <MarkdownToJSX children={`\`\`\`tsx\n${code.__RAW__}\n\`\`\``} />
        </Card.Body>
      </Card>
    </div>
  );
};
