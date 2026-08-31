import {CSSObject, CreateStyled, Interpolation, default as emotionStyled} from '@emotion/styled';
import rtlCSSJS from 'rtl-css-js';

import {CSSProperties} from '@workday/canvas-kit-react/tokens';

import {ContentDirection, EmotionCanvasTheme, useTheme} from './index';

const noop = (styles: any) => styles;

interface ThemingStyledOptions {
  shouldForwardProp?: (prop: any) => boolean;
}

/**
 * @deprecated ⚠️ `filterOutProps` is deprecated and will be removed in a future major version. Use our `createComponent` and `handleCsProp` helpers to handle props. For more information, view our [Meriging Styles Docs](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-merging-styles--docs#handlecsprop).
 */
export const filterOutProps = (omittedProps: string[]) => {
  return (prop: string) => !omittedProps.includes(prop);
};

// Pulled from https://github.com/emotion-js/emotion/blob/master/packages/styled-base/src/utils.js#L6 (not exported)
type Interpolations = Array<any>;
export type StyleRewriteFn = (obj?: CSSProperties) => CSSProperties | undefined;

function styled<Props>(node: any, options?: ThemingStyledOptions) {
  return (...args: Interpolation<Props>[]) => {
    const newArgs: Interpolations = args.map(
      interpolation =>
        (props: Props & {theme: EmotionCanvasTheme & {_styleRewriteFn?: StyleRewriteFn}}) => {
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

    return emotionStyled(node, options)(newArgs);
  };
}

/**
 * @deprecated ⚠️ `styled` is deprecated and will be removed in a future major version. Please use `createStyles` or `createStencil` instead with [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values). For more information, view our [Styling docs](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs).
 */
export default styled as CreateStyled;
