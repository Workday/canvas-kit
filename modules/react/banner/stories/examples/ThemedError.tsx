import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

export const ThemedError = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        error: {
          main: base.magenta500,
          dark: base.magenta800,
          contrast: base.magenta25,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <Banner hasError={true}>
        <Banner.Icon />
        <Banner.Label>3 Items</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </CanvasProvider>
  );
};
