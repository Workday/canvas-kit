import {default as emotionStyled, CreateStyled, Interpolation, CSSObject} from '@emotion/styled';
import {CanvasTheme, ContentDirection} from './types';
import useTheme from './useTheme';
import rtlCSSJS from 'rtl-css-js';

const noop = (styles: any) => styles;

// Pulled from https://github.com/emotion-js/emotion/blob/master/packages/styled-base/src/utils.js#L6 (not exported)
type Interpolations = Array<any>;

function styled<Props>(node: any) {
  return (...args: Interpolation<Props>[]) => {
    const newArgs: Interpolations = args.map(
      interpolation => (props: Props & {theme: CanvasTheme; direction: ContentDirection}) => {
        props.theme = useTheme(props.theme);
        const direction = props.direction || props.theme.direction;

        // TODO: Add support for RTL prop.
        const maybeFlip = direction === ContentDirection.RTL ? rtlCSSJS : noop;

        try {
          if (typeof interpolation === 'function') {
            return maybeFlip(interpolation(props) as CSSObject);
          }
          return maybeFlip(interpolation as CSSObject);
        } catch (e) {
          return interpolation;
        }
      }
    );

    return emotionStyled(node)(newArgs);
  };
}

export default styled as CreateStyled<CanvasTheme>;
