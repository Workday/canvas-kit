import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {space as spaceTokens, CanvasSpace, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

type SpacePropValues = CanvasSpaceKeys | number | (string & {});

/** These props automatically adjust for bidirectionality (LTR & RTL) */
export type SpaceLogicalProps = {
  /** sets margin-left (bidirectional support) */
  marginInlineStart?: SpacePropValues;
  /** sets margin-right (bidirectional support) */
  marginInlineEnd?: SpacePropValues;
  /** sets padding-left (bidirectional support) */
  paddingInlineStart?: SpacePropValues;
  /** sets padding-right (bidirectional support) */
  paddingInlineEnd?: SpacePropValues;
};

/** These props do not adjust for bidirectionality (LTR & RTL) */
export type SpaceStandardProps = {
  /** sets margin */
  margin?: SpacePropValues;
  /** sets margin-left and margin-right */
  marginX?: SpacePropValues;
  /** sets margin-top and margin-bottom */
  marginY?: SpacePropValues;
  /** sets margin-top */
  marginTop?: SpacePropValues;
  /** sets margin-right (no bidirectional support) */
  marginRight?: SpacePropValues;
  /** sets margin-bottom */
  marginBottom?: SpacePropValues;
  /** sets margin-left (no bidirectional support) */
  marginLeft?: SpacePropValues;
  /** sets padding */
  padding?: SpacePropValues;
  /** sets padding-left and margin-right */
  paddingX?: SpacePropValues;
  /** sets padding-top and padding-bottom */
  paddingY?: SpacePropValues;
  /** sets padding-top */
  paddingTop?: SpacePropValues;
  /** sets padding-right (no bidirectional support) */
  paddingRight?: SpacePropValues;
  /** sets padding-bottom */
  paddingBottom?: SpacePropValues;
  /** sets padding-left (no bidirectional support) */
  paddingLeft?: SpacePropValues;
};

type SpacePropValue = CanvasSpaceKeys | number | string;

export type SpaceProps = SpaceStandardProps & SpaceLogicalProps;

const margin = (value: SpacePropValue) => {
  return {margin: spaceTokens[value as keyof CanvasSpace] || value};
};

const marginX = (value: SpacePropValue) => {
  return {
    marginLeft: spaceTokens[value as CanvasSpaceKeys] || value,
    marginRight: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginY = (value: SpacePropValue) => {
  return {
    marginTop: spaceTokens[value as CanvasSpaceKeys] || value,
    marginBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginTop = (value: SpacePropValue) => {
  return {
    marginTop: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginRight = (value: SpacePropValue, isRTL = false) => {
  const attr = isRTL ? 'marginLeft' : 'marginRight';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginBottom = (value: SpacePropValue) => {
  return {
    marginBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const marginLeft = (value: SpacePropValue, isRTL = false) => {
  const attr = isRTL ? 'marginRight' : 'marginLeft';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const padding = (value: SpacePropValue) => {
  return {
    padding: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingX = (value: SpacePropValue) => {
  return {
    paddingLeft: spaceTokens[value as CanvasSpaceKeys] || value,
    paddingRight: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingY = (value: SpacePropValue) => {
  return {
    paddingTop: spaceTokens[value as CanvasSpaceKeys] || value,
    paddingBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingTop = (value: SpacePropValue) => {
  return {
    paddingTop: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingRight = (value: SpacePropValue, isRTL = false) => {
  const attr = isRTL ? 'paddingLeft' : 'paddingRight';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingBottom = (value: SpacePropValue) => {
  return {
    paddingBottom: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const paddingLeft = (value: SpacePropValue, isRTL = false) => {
  const attr = isRTL ? 'paddingRight' : 'paddingLeft';
  return {
    [attr]: spaceTokens[value as CanvasSpaceKeys] || value,
  };
};

const logicalSpaceProps = {
  marginInlineStart: marginLeft,
  marginInlineEnd: marginRight,
  paddingInlineStart: paddingLeft,
  paddingInlineEnd: paddingRight,
};

const standardSpaceProps = {
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
 * If no `SpaceProps` are found, it returns an empty object.
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
export function space<P extends SpaceProps & {theme?: PartialEmotionCanvasTheme}>(props: P) {
  // space will always be used within the context of a component, but eslint doesn't know that
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {canvas} = useTheme(props.theme);
  let styles = {};
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      if (key in standardSpaceProps) {
        const value = props[key as keyof SpaceStandardProps] as SpacePropValues;
        const spaceFn = standardSpaceProps[key as keyof SpaceStandardProps];
        const style = spaceFn(value);
        styles = {...styles, ...style};
      }
      if (key in logicalSpaceProps) {
        const value = props[key as keyof SpaceLogicalProps] as SpacePropValues;
        const spaceFn = logicalSpaceProps[key as keyof SpaceLogicalProps];
        const isRTL = canvas.direction === ContentDirection.RTL;
        const style = spaceFn(value, isRTL);
        styles = {...styles, ...style};
      }
    }
  }
  return styles;
}
