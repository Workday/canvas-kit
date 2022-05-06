import {TextStyles} from './types';

const textProps = {
  textAlign: 'textAlign',
  textDecoration: 'textDecoration',
  textTransform: 'textTransform',
  textShadow: 'textShadow',
};

export function textStyles<P extends TextStyles>(props: P) {
  return Object.keys(props).reduce((acc, prop) => {
    if (prop in textProps) {
      return {
        ...acc,
        [prop]: props[prop as keyof TextStyles],
      };
    }

    return acc;
  }, {});
}
