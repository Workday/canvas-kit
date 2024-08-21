import {TransformerContext} from './types';

export function injectStyles(
  {styles, cache}: TransformerContext,
  fileName: string,
  hash: string,
  styleOutput: string
) {
  if (!cache[hash]) {
    styles[fileName] = styles[fileName] || [];
    styles[fileName].push(styleOutput);
    cache[hash] = styleOutput;
  }
}
