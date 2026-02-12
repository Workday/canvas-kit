import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';

import {Demo} from './Demo';
import {system} from '@workday/canvas-tokens-web';

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
