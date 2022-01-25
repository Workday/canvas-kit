import {CSSObject} from '@emotion/react';

// default max-width for truncating text
const DEFAULT_MAX_WIDTH = 350;

export const truncateStyles = (maxWidth: number = DEFAULT_MAX_WIDTH): CSSObject => ({
  display: 'inline-block',
  maxWidth,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
