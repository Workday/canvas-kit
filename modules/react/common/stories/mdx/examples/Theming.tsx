import {createStyles} from '@workday/canvas-kit-styling';
import {brand, base} from '@workday/canvas-tokens-web';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const customTheme = createStyles({
  [brand.primary.base]: base.magenta600,
  [brand.primary.dark]: base.magenta700,
  [brand.primary.darkest]: base.magenta800,
  [brand.common.focusOutline]: base.magenta600,
});

export const Theming = () => {
  return (
    <CanvasProvider className={customTheme}>
      <Card>
        <Card.Heading>Theming</Card.Heading>
        <Card.Body>
          <PrimaryButton>Theming</PrimaryButton>
        </Card.Body>
      </Card>
    </CanvasProvider>
  );
};
