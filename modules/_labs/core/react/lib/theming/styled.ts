import {default as emotionStyled, CreateStyled, Interpolation, CSSObject} from '@emotion/styled';
import {CanvasTheme, ContentDirection, useTheme} from './';
import rtlCSSJS from 'rtl-css-js';

const noop = (styles: any) => styles;

// Pulled from https://github.com/emotion-js/emotion/blob/master/packages/styled-base/src/utils.js#L6 (not exported)
type Interpolations = Array<any>;

export const convertToStaticStates = (obj?: CSSObject): CSSObject | undefined => {
  if (!obj) {
    return obj;
  }

  return Object.keys(obj).reduce((result, key) => {
    const newKey = key
      .replace(/^:/, '&:') // handle shorthand like ":focus"
      .replace(/,(\s+):/g, ',$1&:') // handle selectors like ":focus, :hover"
      .replace(/:(focus|hover|active)/g, '.$1')
      .replace(/\[data\-whatinput="?(mouse|touch|keyboard|pointer)"?]/g, '[data-whatinput="noop"]');
    const value =
      typeof obj[key] === 'object' ? convertToStaticStates(obj[key] as CSSObject) : obj[key];
    const newObj = {...result, [newKey]: value};
    return newObj;
  }, {});
};

function styled<Props>(node: any) {
  return (...args: Interpolation<Props>[]) => {
    const newArgs: Interpolations = args.map(
      interpolation => (props: Props & {theme: CanvasTheme & {_staticStates?: boolean}}) => {
        props.theme = useTheme(props.theme);
        const direction = props.theme.direction;
        const maybeFlip = direction === ContentDirection.RTL ? rtlCSSJS : noop;
        const maybeConvert = props.theme._staticStates ? convertToStaticStates : noop;

        try {
          if (typeof interpolation === 'function') {
            return maybeFlip(maybeConvert(interpolation(props)) as CSSObject);
          }
          return maybeFlip(maybeConvert(interpolation) as CSSObject);
        } catch (e) {
          return maybeConvert(interpolation);
        }
      }
    );

    return emotionStyled(node)(newArgs);
  };
}

export default styled as CreateStyled<CanvasTheme>;
