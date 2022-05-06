import {colors} from '@workday/canvas-kit-react/tokens';
import {ColorStyle} from './types';

export function colorStyle<P extends ColorStyle>(props: P) {
  for (const prop in props) {
    if (prop === 'color') {
      const selector = props[prop];
      return {color: selector in colors ? colors[selector] : props[prop]};
    }
  }

  return {};
}
