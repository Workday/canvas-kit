import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';

import {Demo} from './Demo';
import {system} from '@workday/canvas-tokens-web';

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
          <Demo />
        </main>
      </>
    </CanvasProvider>
  );
};
