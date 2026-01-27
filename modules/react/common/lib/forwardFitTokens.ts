import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

/**
 * This file is NOT INTENDED to be used by consumers, only internally by Canvas Kit.
 */
export const forwardFitTokens = {
  system: {
    shape: {
      //TODO: in v4 Tokens and v15, we should replace this forward fit token with the actual token value
      sm: cssVar('--cnvs-sys-shape-md', system.shape.x1Half),
    },
  },
} as const;
