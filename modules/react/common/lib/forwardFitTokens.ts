/**
 * This file is NOT INTENDED to be used by consumers, only internally by Canvas Kit.
 */
export const forwardFitTokens = {
  system: {
    shape: {
      //TODO: in v4 Tokens and v15, we should replace this forward fit token with the actual token value
      sm: '--cnvs-sys-shape-sm', // this should be set to 8px
    },
  },
} as const;
