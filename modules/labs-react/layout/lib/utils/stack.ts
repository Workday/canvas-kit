import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {space as spaceTokens, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

const selector = '& > *:not(style) ~ *:not(style)';

type FlexDirectionProps = {
  flexDirection: StackDirection;
  direction?: StackDirection;
};

type DirectionProps = {
  direction: StackDirection;
  flexDirection?: StackDirection;
};

type SpacingValue = CanvasSpaceKeys | number | (string & {});

export type StackProps = {
  spacing: SpacingValue;
  shouldWrapChildren?: boolean;
} & (FlexDirectionProps | DirectionProps);

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
  const {direction = 'row', flexDirection, spacing} = props;
  const stackDirection = flexDirection || direction;
  if (stackDirection === 'column' || stackDirection === 'column-reverse') {
    const stackFn = stackDirectionProps[stackDirection];
    styles = stackFn(spacing);
  }

  if (stackDirection === 'row' || stackDirection === 'row-reverse') {
    // stack will always be used within the context of a component, but eslint doesn't know that
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {canvas} = useTheme(props.theme);
    const stackFn = stackDirectionProps[stackDirection];
    const isRTL = canvas.direction === ContentDirection.RTL;
    styles = stackFn(spacing, isRTL);
  }

  return {
    [selector]: styles,
  };
}
