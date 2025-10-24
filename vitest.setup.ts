import { ResizeObserver } from "@juggle/resize-observer";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, expect } from "vitest";

import {
  resetUniqueIdCount,
  setUniqueSeed,
} from "@workday/canvas-kit-react/common";

import { verifyComponent } from "./jest/verifyComponent";

expect.extend(matchers);

// add convenience variables to the global context
(global as any).verifyComponent = verifyComponent;

// Not necessary for our tests, but demonstrate how to have stable ids for jest snapshots
beforeEach(() => {
  setUniqueSeed("a");
  resetUniqueIdCount();
  // jsdom doesn't have a ResizeObserver. Use a polyfill: https://github.com/jsdom/jsdom/issues/3368
  global.ResizeObserver = ResizeObserver;
  (global as any).scrollIntoView = () => {};
});

afterEach(() => {
  cleanup();
});
