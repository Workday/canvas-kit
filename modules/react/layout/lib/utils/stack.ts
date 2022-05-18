import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {space as spaceTokens, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

const selector = '& > *:not(style) ~ *:not(style)';

export type StackSpacing = CanvasSpaceKeys | number | (string & {});

export type StackStyleProps = {
  /** sets space values between child elements (bidirectional support) */
  spacing: StackSpacing;
  /**
   * sets the direction for the stack
   * @default "row"
   * */
  flexDirection?: StackDirection;
  /**
   * when `true` wraps each child element in a `Stack.Item`
   * @default false
   * */
  shouldWrapChildren?: boolean;
};

const column = (value: StackSpacing) => ({
  marginTop: spaceTokens[value as CanvasSpaceKeys] || value,
});

const columnReverse = (value: StackSpacing) => ({
  marginBottom: spaceTokens[value as CanvasSpaceKeys] || value,
});

const row = (value: StackSpacing, isRTL = false) => {
  const attr = isRTL ? 'marginRight' : 'marginLeft';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const rowReverse = (value: StackSpacing, isRTL = false) => {
  const attr = isRTL ? 'marginLeft' : 'marginRight';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const stackDirectionProps = {
  column,
  'column-reverse': columnReverse,
  row,
  'row-reverse': rowReverse,
};

export function stack<P extends StackStyleProps & {theme?: PartialEmotionCanvasTheme}>(props: P) {
  let styles = {};
  const {flexDirection = 'row', spacing} = props;
  if (flexDirection === 'column' || flexDirection === 'column-reverse') {
    const stackFn = stackDirectionProps[flexDirection];
    styles = stackFn(spacing);
  }

  if (flexDirection === 'row' || flexDirection === 'row-reverse') {
    // stack will always be used within the context of a component, but eslint doesn't know that
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {canvas} = useTheme(props.theme);
    const stackFn = stackDirectionProps[flexDirection];
    const isRTL = canvas.direction === ContentDirection.RTL;
    styles = stackFn(spacing, isRTL);
  }

  return {
    [selector]: styles,
  };
}
