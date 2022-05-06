import {type, CanvasTypeProperties} from '@workday/canvas-kit-react/tokens';
import {FontStyles} from './types';

type FontSizes = CanvasTypeProperties['fontSizes'];
type FontWeights = CanvasTypeProperties['fontWeights'];
type FontFamilies = CanvasTypeProperties['fontFamilies'];

export type FontSizesKeys = keyof FontSizes;
export type FontWeightsKeys = keyof FontWeights;
export type FontFamiliesKeys = keyof FontFamilies;

interface FontBodyProps {
  fontFamily: FontFamilies;
  fontSize: FontSizes;
  fontWeight: FontWeights;
}

const fontBody: FontBodyProps = {
  fontFamily: type.properties.fontFamilies,
  fontSize: type.properties.fontSizes,
  fontWeight: type.properties.fontWeights,
};

export function fontStyles<P extends FontStyles>(props: P) {
  const styles = Object.keys(props).reduce((acc: Record<string, string | number>, prop: string) => {
    if (prop in fontBody) {
      const propBody = fontBody[prop as keyof FontBodyProps] || {};
      const selector = props[prop as keyof FontBodyProps] as keyof typeof propBody;

      acc[prop] = propBody[selector] || selector;
    }

    return acc;
  }, {});

  return styles;
}
