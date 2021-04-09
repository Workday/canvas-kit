import * as React from 'react';
import {InputProvider} from '@workday/canvas-kit-react/tokens';

export default (storyFn: () => React.ReactNode) => <InputProvider>{storyFn()}</InputProvider>;
