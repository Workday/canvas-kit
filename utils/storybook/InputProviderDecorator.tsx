import * as React from 'react';
import {InputProvider} from '@workday/canvas-kit-react-core';

export default (storyFn: () => React.ReactNode) => <InputProvider>{storyFn()}</InputProvider>;
