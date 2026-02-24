import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

const App = () => {
  return (
    <CanvasProvider
      theme={{
        canvas: {
          palette: {
            primary: {
              main: base.green600,
              dark: base.green700,
              darkest: base.green800,
              light: base.green200,
              lighter: base.green50,
              lightest: base.green25,
              contrast: base.neutral0,
            },
          },
        },
      }}
    >
      <Card>
        <Card.Heading>Theming</Card.Heading>
        <Card.Body>
          <PrimaryButton>Theming</PrimaryButton>
          <input />
        </Card.Body>
      </Card>
    </CanvasProvider>
  );
};

export const Theming = () => {
  return (
    <CanvasProvider theme={{canvas: {palette: {primary: {main: base.green600}}}}}>
      <App />
    </CanvasProvider>
  );
};
