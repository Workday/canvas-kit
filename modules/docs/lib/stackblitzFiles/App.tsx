import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {Demo} from './Demo';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

export const App = () => {
  return (
    <CanvasProvider>
      <>
        <main className={mainContentStyles}>
          <Demo />
        </main>
      </>
    </CanvasProvider>
  );
};
