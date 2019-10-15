import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react-core';

export default (storyFn: () => React.ReactNode) => <CanvasProvider>{storyFn()}</CanvasProvider>;
