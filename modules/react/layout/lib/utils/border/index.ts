import {buildStylePropFn} from '../buildStyleFns';
import {BorderColorStyleProps, borderColorFns} from './color';
import {BorderLineStyleProps, borderLineStyleFns} from './lineStyle';
import {BorderRadiusStyleProps, borderRadiusFns} from './radius';
import {BorderShorthandStyleProps, borderShorthandFns} from './shorthand';
import {BorderWidthStyleProps, borderWidthFns} from './width';

export type BorderStyleProps = BorderColorStyleProps &
  BorderLineStyleProps &
  BorderRadiusStyleProps &
  BorderShorthandStyleProps &
  BorderWidthStyleProps;

/**
 * A style prop function that takes component props and returns border styles. Some props, such as borderRadius and borderColor, are connected to our design tokens.
 * If no `BorderStyleProps` are found, it returns an empty object.
 *
 * @example
 * ```tsx
 * const BorderExample = () => (
 *   <Box
 *    border="solid 1px"
 *    borderColor="soap500"
 *    borderRadius="l"
 *   >
 *     Hello, border styles!
 *   </Box>
 * );
 *```
 */
export const border = buildStylePropFn<BorderStyleProps>({
  ...borderColorFns,
  ...borderLineStyleFns,
  ...borderRadiusFns,
  ...borderShorthandFns,
  ...borderWidthFns,
});
