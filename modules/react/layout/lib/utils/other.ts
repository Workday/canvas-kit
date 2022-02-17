/** style props for miscellaneous CSS properties */
export type OtherStyleProps = {
  animation?: string;
  appearance?: string;
  transform?: string;
  transformOrigin?: string;
  visibility?: string;
  whiteSpace?: string;
  overflowWrap?: string;
  wordBreak?: string;
  textOverflow?: string;
  boxSizing?: string;
  cursor?: string;
  resize?: string;
  transition?: string;
  outline?: string;
};

export const otherProps = {
  animation: 'animation',
  appearance: 'appearance',
  transform: 'transform',
  transformOrigin: 'transformOrigin',
  visibility: 'visibility',
  whiteSpace: 'whiteSpace',
  overflowWrap: 'overflowWrap',
  wordBreak: 'wordBreak',
  textOverflow: 'textOverflow',
  boxSizing: 'boxSizing',
  cursor: 'cursor',
  resize: 'resize',
  transition: 'transition',
  outline: 'outline',
};

export function getOtherStyles<P extends OtherStyleProps>(
  styleProps: P,
  key: keyof OtherStyleProps
) {
  const value = styleProps[key as keyof OtherStyleProps];
  return {[key]: value};
}
/**
 * A style prop function that takes components props and returns styles.
 * If no `OtherStyleProps` are found, it returns an empty object.
 *
 * @example
 * // You'll most likely use `other` with low-level, styled components
 * const BoxExample = () => (
 *   <Box overflowWrap="break-word">
 *     Hello, overflow wrap!
 *   </Box>
 * );
 *
 */
export function other<P extends OtherStyleProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in otherProps) {
      const style = getOtherStyles(props, key as keyof OtherStyleProps);
      styles = {...styles, ...style};
    }
  }
  return styles;
}
