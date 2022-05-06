import {LineStyles} from './types';

const lineProps = {
  lineHeight: 'lineHeight',
  letterSpacing: 'letterSpacing',
  whiteSpace: 'whiteSpace',
  wordBreak: 'wordBreak',
};

export function lineStyles<P extends LineStyles>(props: P) {
  return Object.keys(props).reduce((acc, prop) => {
    if (prop in lineProps) {
      return {
        ...acc,
        [prop]: props[prop as keyof LineStyles],
      };
    }

    return acc;
  }, {});
}
