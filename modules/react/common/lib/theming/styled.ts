import {default as emotionStyled, CreateStyled, Interpolation, CSSObject} from '@emotion/styled';
import {CSSProperties} from '@workday/canvas-kit-react/tokens';

import {useTheme, EmotionCanvasTheme, ContentDirection} from './index';
import rtlCSSJS from 'rtl-css-js';

const noop = (styles: any) => styles;

// Pulled from https://github.com/emotion-js/emotion/blob/master/packages/styled-base/src/utils.js#L6 (not exported)
type Interpolations = Array<any>;
export type StyleRewriteFn = (obj?: CSSProperties) => CSSProperties | undefined;

function styled<Props>(node: any) {
  return (...args: Interpolation<Props>[]) => {
    const newArgs: Interpolations = args.map(
      interpolation => (
        props: Props & {theme: EmotionCanvasTheme & {_styleRewriteFn?: StyleRewriteFn}}
      ) => {
        props.theme = useTheme(props.theme);
        const direction = props.theme.canvas.direction;
        const maybeFlip = direction === ContentDirection.RTL ? rtlCSSJS : noop;
        const maybeConvert = props.theme._styleRewriteFn || noop;
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

export default styled as CreateStyled;
