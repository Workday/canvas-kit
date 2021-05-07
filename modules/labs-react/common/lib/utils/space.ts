import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {space as spaceTokens, CanvasSpace, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

type SpacePropValues = CanvasSpaceKeys | number | (string & {});

/** These props automatically adjust for bidirectionality (LTR & RTL) */
export type SpaceLogicalProps = {
  /** sets margin-left property (bidirectional support) */
  marginInlineStart?: SpacePropValues;
  /** sets margin-right property (bidirectional support) */
  marginInlineEnd?: SpacePropValues;
  /** sets padding-left property (bidirectional support) */
  paddingInlineStart?: SpacePropValues;
  /** sets padding-right property (bidirectional support) */
  paddingInlineEnd?: SpacePropValues;
};

/** These props do not adjust for bidirectionality (LTR & RTL) */
export type SpaceStandardProps = {
  /** sets margin property */
  margin?: SpacePropValues;
  /** sets margin-left and margin-right properties */
  marginX?: SpacePropValues;
  /** sets margin-top and margin-bottom properties */
  marginY?: SpacePropValues;
  /** sets margin-top property */
  marginTop?: SpacePropValues;
  /** sets margin-right property (no bidirectional support) */
  marginRight?: SpacePropValues;
  /** sets margin-bottom property */
  marginBottom?: SpacePropValues;
  /** sets margin-left property (no bidirectional support) */
  marginLeft?: SpacePropValues;
  /** sets padding property */
  padding?: SpacePropValues;
  /** sets padding-left and margin-right properties */
  paddingX?: SpacePropValues;
  /** sets padding-top and padding-bottom properties */
  paddingY?: SpacePropValues;
  /** sets padding-top property */
  paddingTop?: SpacePropValues;
  /** sets padding-right property (no bidirectional support) */
  paddingRight?: SpacePropValues;
  /** sets padding-bottom */
  paddingBottom?: SpacePropValues;
  /** sets padding-left property (no bidirectional support) */
  paddingLeft?: SpacePropValues;
};

export type SpaceStyleProps = SpaceStandardProps & SpaceLogicalProps;

const margin = (value: SpacePropValues) => {
  return {margin: spaceTokens[value as keyof CanvasSpace] || value};
};

const marginX = (value: SpacePropValues) => {
  return {
    marginLeft: spaceTokens[value as CanvasSpaceKeys] || value,
    marginRight: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginY = (value: SpacePropValues) => {
  return {
    marginTop: spaceTokens[value as CanvasSpaceKeys] || value,
    marginBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginTop = (value: SpacePropValues) => {
  return {
    marginTop: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginRight = (value: SpacePropValues, isRTL = false) => {
  const attr = isRTL ? 'marginLeft' : 'marginRight';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginBottom = (value: SpacePropValues) => {
  return {
    marginBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginLeft = (value: SpacePropValues, isRTL = false) => {
  const attr = isRTL ? 'marginRight' : 'marginLeft';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const padding = (value: SpacePropValues) => {
  return {
    padding: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingX = (value: SpacePropValues) => {
  return {
    paddingLeft: spaceTokens[value as CanvasSpaceKeys] || value,
    paddingRight: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingY = (value: SpacePropValues) => {
  return {
    paddingTop: spaceTokens[value as CanvasSpaceKeys] || value,
    paddingBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingTop = (value: SpacePropValues) => {
  return {
    paddingTop: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingRight = (value: SpacePropValues, isRTL = false) => {
  const attr = isRTL ? 'paddingLeft' : 'paddingRight';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingBottom = (value: SpacePropValues) => {
  return {
    paddingBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingLeft = (value: SpacePropValues, isRTL = false) => {
  const attr = isRTL ? 'paddingRight' : 'paddingLeft';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const logicalSpaceStyleProps = {
  marginInlineStart: marginLeft,
  marginInlineEnd: marginRight,
  paddingInlineStart: paddingLeft,
  paddingInlineEnd: paddingRight,
};

const standardSpaceStyleProps = {
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
};

/**
 * A style prop function that takes component props and returns space styles.
 * If no `SpaceStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `space` with low-level, styled components
 * const BoxExample = () => (
 *   <Box padding="xs" margin="m">
 *     Hello, space!
 *   </Box>
 * );
 *
 */
export function space<P extends SpaceStyleProps & {theme?: PartialEmotionCanvasTheme}>(props: P) {
  // space will always be used within the context of a component, but eslint doesn't know that
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {canvas} = useTheme(props.theme);
  let styles = {};
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      if (key in standardSpaceStyleProps) {
        const value = props[key as keyof SpaceStandardProps] as SpacePropValues;
        const spaceFn = standardSpaceStyleProps[key as keyof SpaceStandardProps];
        const style = spaceFn(value);
        styles = {...styles, ...style};
        continue;
      }
      if (key in logicalSpaceStyleProps) {
        const value = props[key as keyof SpaceLogicalProps] as SpacePropValues;
        const spaceFn = logicalSpaceStyleProps[key as keyof SpaceLogicalProps];
        const isRTL = canvas.direction === ContentDirection.RTL;
        const style = spaceFn(value, isRTL);
        styles = {...styles, ...style};
      }
    }
  }
  return styles;
}
