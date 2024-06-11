import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import React from 'react';

const styles = createStyles({
  boxShadow: system.depth[1],
  borderRadius: system.shape.x1,
  position: 'relative',
});

const buttonStyles = createStyles({
  position: 'absolute',
  right: 0,
  bottom: 0,
});

export const CodeExamplePreview = ({code}: any) => {
  const [isCodeDisplayed, setCodeDisplayed] = React.useState(false);
  console.log(code);
  return (
    <div>
      <Card className={styles}>
        <Card.Body>
          <BaseButton
            size="extraSmall"
            onClick={() => setCodeDisplayed(!isCodeDisplayed)}
            className={buttonStyles}
          >
            {isCodeDisplayed ? 'Show Code' : 'Hide Code'}
          </BaseButton>
        </Card.Body>
      </Card>
    </div>
  );
};
