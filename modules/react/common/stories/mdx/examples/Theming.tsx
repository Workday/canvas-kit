import {createStyles} from '@workday/canvas-kit-styling';
import {brand, base, system} from '@workday/canvas-tokens-web';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const customTheme = createStyles({
  [brand.primary.base]: base.green600,
  [brand.primary.dark]: base.green700,
  [brand.primary.darkest]: base.green800,
  [brand.common.focusOutline]: base.green600,
  [system.color.fg.strong]: base.indigo900,
  [system.color.border.container]: base.indigo300,
});

const App = () => {
  return (
    <Card>
      <Card.Heading>Theming</Card.Heading>
      <Card.Body>
        <PrimaryButton>Theming</PrimaryButton>
        <input />
      </Card.Body>
    </Card>
  );
};

export const Theming = () => {
  return (
    <CanvasProvider className={customTheme}>
      <App />
    </CanvasProvider>
  );
};
