import {
  space as spaceTokens,
  CanvasSpace,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
} from '@workday/canvas-kit-react/tokens';

export type SpaceTokenKeys = keyof CanvasSpace;

/** These props automatically adjust for bidirectionality (LTR & RTL) */
export type LogicalSpaceProps = {
  /** sets margin-block styles (equivalent to `marginY`) */
  marginBlock?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets margin-block-start styles (equivalent to `marginTop`) */
  marginBlockStart?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets margin-block-end styles (equivalent to `marginBottom`) */
  marginBlockEnd?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets margin-inline styles (equivalent to `marginX`) */
  marginInline?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets margin-inline-start styles (equivalent to `marginLeft`) */
  marginInlineStart?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets margin-inline-end styles (equivalent to `marginRight`) */
  marginInlineEnd?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets padding-block-start styles (equivalent to `paddingY`) */
  paddingBlock?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets padding-block-start styles (equivalent to `paddingTop`) */
  paddingBlockStart?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets padding-block-end styles (equivalent to `paddingBottom`) */
  paddingBlockEnd?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets padding-inline styles (equivalent to `paddingX`) */
  paddingInline?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets padding-inline-start styles (equivalent to `paddingLeft`) */
  paddingInlineStart?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets padding-inline-end styles (equivalent to `paddingRight`) */
  paddingInlineEnd?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
};

/** These props do not adjust for bidirectionality (LTR & RTL) */
export type StandardSpaceProps = {
  /** sets margin styles (no bidirectional support) */
  margin?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets marginX styles (no bidirectional support) */
  marginX?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets marginY styles (no bidirectional support) */
  marginY?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets marginT styles (no bidirectional support) */
  marginTop?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets marginR styles (no bidirectional support) */
  marginRight?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets marginB styles (no bidirectional support) */
  marginBottom?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets marginL styles (no bidirectional support) */
  marginLeft?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets padding styles (no bidirectional support) */
  padding?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets paddingX styles (no bidirectional support) */
  paddingX?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets paddingY styles (no bidirectional support) */
  paddingY?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets paddingT styles (no bidirectional support) */
  paddingTop?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets paddingR styles (no bidirectional support) */
  paddingRight?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets paddingB styles (no bidirectional support) */
  paddingBottom?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
  /** sets paddingL styles (no bidirectional support) */
  paddingLeft?: SpaceTokenKeys | CanvasSpaceValues | CanvasSpaceNumberValues;
};

export type SpaceProps = StandardSpaceProps;

const spaceProps = {
  // marginBlock: (token: keyof CanvasSpace) => ({
  //   marginBlock: spaceTokens[token],
  // }),
  // marginBlockStart: (token: keyof CanvasSpace) => ({
  //   marginBlockStart: spaceTokens[token],
  // }),
  // marginBlockEnd: (token: keyof CanvasSpace) => ({
  //   marginBlockEnd: spaceTokens[token],
  // }),
  // marginInline: (token: keyof CanvasSpace) => ({
  //   marginInline: spaceTokens[token],
  // }),
  // marginInlineStart: (token: keyof CanvasSpace) => ({
  //   marginInlineStart: spaceTokens[token],
  // }),
  // marginInlineEnd: (token: keyof CanvasSpace) => ({
  //   marginInlineEnd: spaceTokens[token],
  // }),
  // paddingBlock: (token: keyof CanvasSpace) => ({
  //   paddingBlock: spaceTokens[token],
  // }),
  // paddingBlockStart: (token: keyof CanvasSpace) => ({
  //   paddingBlockStart: spaceTokens[token],
  // }),
  // paddingBlockEnd: (token: keyof CanvasSpace) => ({
  //   paddingBlockEnd: spaceTokens[token],
  // }),
  // paddingInline: (token: keyof CanvasSpace) => ({
  //   paddingInline: spaceTokens[token],
  // }),
  // paddingInlineStart: (token: keyof CanvasSpace) => ({
  //   paddingInlineStart: spaceTokens[token],
  // }),
  // paddingInlineEnd: (token: keyof CanvasSpace) => ({
  //   paddingInlineEnd: spaceTokens[token],
  // }),
  margin: (value: keyof CanvasSpace | number) => {
    return {margin: spaceTokens[value as keyof CanvasSpace] || value};
  },
  marginX: (token: keyof CanvasSpace) => ({
    marginLeft: spaceTokens[token],
    marginRight: spaceTokens[token],
  }),
  marginY: (token: keyof CanvasSpace) => ({
    marginTop: spaceTokens[token],
    marginBottom: spaceTokens[token],
  }),
  marginTop: (token: keyof CanvasSpace) => ({
    marginTop: spaceTokens[token],
  }),
  marginRight: (token: keyof CanvasSpace) => ({
    marginRight: spaceTokens[token],
  }),
  marginBottom: (token: keyof CanvasSpace) => ({
    marginB: spaceTokens[token],
  }),
  marginLeft: (token: keyof CanvasSpace) => ({
    marginLeft: spaceTokens[token],
  }),
  padding: (token: keyof CanvasSpace) => ({
    padding: spaceTokens[token],
  }),
  paddingX: (token: keyof CanvasSpace) => ({
    paddingLeft: spaceTokens[token],
    paddingRight: spaceTokens[token],
  }),
  paddingY: (token: keyof CanvasSpace) => ({
    paddingTop: spaceTokens[token],
    paddingBottom: spaceTokens[token],
  }),
  paddingTop: (token: keyof CanvasSpace) => ({
    paddingTop: spaceTokens[token],
  }),
  paddingRight: (token: keyof CanvasSpace) => ({
    paddingRight: spaceTokens[token],
  }),
  paddingBottom: (token: keyof CanvasSpace) => ({
    paddingBottom: spaceTokens[token],
  }),
  paddingLeft: (token: keyof CanvasSpace) => ({
    paddingLelft: spaceTokens[token],
  }),
};

export function space<P extends SpaceProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in spaceProps) {
      const token = props[key as keyof SpaceProps] as SpaceTokenKeys;
      const spaceFn = spaceProps[key as keyof SpaceProps];
      const style = spaceFn(token);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
