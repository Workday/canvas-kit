import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {space as spaceTokens, CanvasSpace, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';

type SpacePropValues = CanvasSpaceKeys | number | (string & {});

export type SpaceStyleProps = {
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
  /** sets margin-left property (bidirectional support) */
  marginInlineStart?: SpacePropValues;
  /** sets margin-right property (bidirectional support) */
  marginInlineEnd?: SpacePropValues;
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
  /** sets padding-left property (bidirectional support) */
  paddingInlineStart?: SpacePropValues;
  /** sets padding-right property (bidirectional support) */
  paddingInlineEnd?: SpacePropValues;
};

function getSpace(value?: SpacePropValues) {
  if (value && value in spaceTokens) {
    return spaceTokens[value as keyof CanvasSpace];
  }
  return value;
}

export const spaceFns = {
  margin: (value?: SpacePropValues) => ({
    margin: getSpace(value),
  }),
  marginX: (value?: SpacePropValues) => ({
    marginLeft: getSpace(value),
    marginRight: getSpace(value),
  }),
  marginY: (value?: SpacePropValues) => ({
    marginTop: getSpace(value),
    marginBottom: getSpace(value),
  }),
  marginTop: (value?: SpacePropValues) => ({
    marginTop: getSpace(value),
  }),
  marginRight: (value?: SpacePropValues) => ({
    marginRight: getSpace(value),
  }),
  marginBottom: (value?: SpacePropValues) => ({
    marginBottom: getSpace(value),
  }),
  marginLeft: (value?: SpacePropValues) => ({
    marginLeft: getSpace(value),
  }),
  marginInlineStart: (value?: SpacePropValues, isRTL = false) => {
    const key = isRTL ? 'marginRight' : 'marginLeft';
    return {[key]: getSpace(value)};
  },
  marginInlineEnd: (value?: SpacePropValues, isRTL = false) => {
    const key = isRTL ? 'marginLeft' : 'marginRight';
    return {[key]: getSpace(value)};
  },
  padding: (value?: SpacePropValues) => ({
    padding: getSpace(value),
  }),
  paddingX: (value?: SpacePropValues) => ({
    paddingLeft: getSpace(value),
    paddingRight: getSpace(value),
  }),
  paddingY: (value?: SpacePropValues) => ({
    paddingTop: getSpace(value),
    paddingBottom: getSpace(value),
  }),
  paddingTop: (value?: SpacePropValues) => ({
    paddingTop: getSpace(value),
  }),
  paddingRight: (value?: SpacePropValues) => ({
    paddingRight: getSpace(value),
  }),
  paddingBottom: (value?: SpacePropValues) => ({
    paddingBottom: getSpace(value),
  }),
  paddingLeft: (value?: SpacePropValues) => ({
    paddingLeft: getSpace(value),
  }),
  paddingInlineStart: (value?: SpacePropValues, isRTL = false) => {
    const key = isRTL ? 'paddingRight' : 'paddingLeft';
    return {[key]: getSpace(value)};
  },
  paddingInlineEnd: (value?: SpacePropValues, isRTL = false) => {
    const key = isRTL ? 'paddingLeft' : 'paddingRight';
    return {[key]: getSpace(value)};
  },
};

export function getSpaceStyles<P extends SpaceStyleProps>(
  styleProps: P,
  key: keyof SpaceStyleProps,
  isRTL: boolean
) {
  const value = styleProps[key as keyof SpaceStyleProps];
  const styleFn = spaceFns[key as keyof typeof spaceFns];
  return styleFn(value, isRTL);
}

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
export function space<P extends SpaceStyleProps & {theme: PartialEmotionCanvasTheme}>(props: P) {
  const isRTL = props.theme.canvas?.direction === 'rtl';
  let styles = {};

  for (const key in props) {
    if (props.hasOwnProperty(key) && spaceFns.hasOwnProperty(key)) {
      const style = getSpaceStyles(props, key as keyof SpaceStyleProps, isRTL);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
