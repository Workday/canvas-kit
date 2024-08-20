import '@testing-library/jest-dom/extend-expect';
import {verifyComponent} from './verifyComponent';
import {jest} from '@jest/globals';

import {setUniqueSeed, resetUniqueIdCount} from '@workday/canvas-kit-react/common';
import {TextEncoder} from 'util';

// add convenience variables to the global context
(global as any).verifyComponent = verifyComponent;
(global as any).jest = jest;

// Add globals for TextEncoder that was missing
(global as any).TextEncoder = TextEncoder;

// Not necessary for our tests, but demonstrate how to have stable ids for jest snapshots
beforeEach(() => {
  setUniqueSeed('a');
  resetUniqueIdCount();
});
