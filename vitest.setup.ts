import {ResizeObserver} from '@juggle/resize-observer';
import '@testing-library/jest-dom/extend-expect';
import * as matchers from '@testing-library/jest-dom/matchers';
import {cleanup} from '@testing-library/react';
import {afterEach, beforeAll, beforeEach, expect} from 'vitest';

import {resetUniqueIdCount, setUniqueSeed} from '@workday/canvas-kit-react/common';

import {verifyComponent} from './jest/verifyComponent';

expect.extend(matchers);

// add convenience variables to the global context
(globalThis as any).verifyComponent = verifyComponent;

// Not necessary for our tests, but demonstrate how to have stable ids for jest snapshots
beforeEach(() => {
  setUniqueSeed('a');
  resetUniqueIdCount();
});

beforeAll(() => {
  // jsdom doesn't have a ResizeObserver. Use a polyfill: https://github.com/jsdom/jsdom/issues/3368
  globalThis.ResizeObserver = ResizeObserver;

  // SSR tests don't have HTMLElement defined, but render() tests do, so we have to conditionally
  // polyfill the HTMLElement
  if (typeof HTMLElement !== 'undefined') {
    // eslint-disable-next-line no-empty-function
    HTMLElement.prototype.scrollIntoView = () => {};
  }
});

afterEach(() => {
  cleanup();
});
