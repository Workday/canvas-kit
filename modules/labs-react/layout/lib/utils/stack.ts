import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {space as spaceTokens, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

const selector = '& > *:not(style) ~ *:not(style)';

type SpacingValue = CanvasSpaceKeys | number | (string & {});

export type StackProps = {
  spacing: SpacingValue;
  flexDirection?: StackDirection;
  shouldWrapChildren?: boolean;
};

const column = (value: SpacingValue) => ({
  marginTop: spaceTokens[value as CanvasSpaceKeys] || value,
});

const columnReverse = (value: SpacingValue) => ({
  marginBottom: spaceTokens[value as CanvasSpaceKeys] || value,
});

const row = (value: SpacingValue, isRTL = false) => {
  const attr = isRTL ? 'marginRight' : 'marginLeft';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const rowReverse = (value: SpacingValue, isRTL = false) => {
  const attr = isRTL ? 'marginleft' : 'marginRight';
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

export function stack<P extends StackProps & {theme?: PartialEmotionCanvasTheme}>(props: P) {
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
