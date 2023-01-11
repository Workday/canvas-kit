import {space as spaceTokens} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemPropValues, SystemPropValues} from './systemProps';

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod <transform> [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

const selector = '& > *:not(style) ~ *:not(style)';

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod <transform> [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export type StackSpacing = SystemPropValues['space'];

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod <transform> [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export type StackStyleProps = {
  /** sets space values between child elements (bidirectional support)
   * @deprecated
   */
  spacing: StackSpacing;
  /**
   * sets the direction for the stack
   * @default "row"
   * */
  flexDirection?: StackDirection;
  /**
   * when `true` wraps each child element in a `Stack.Item`
   * @deprecated
   * @default false
   * */
  shouldWrapChildren?: boolean;
};

const getSpace = (value: SystemPropValues['space']) => {
  return spaceTokens[value as CanvasSystemPropValues['space']] || value;
};

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod <transform> [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export function stack<P extends StackStyleProps>(props: P) {
  const {flexDirection = 'row', spacing} = props;
  let styles = {};

  if (flexDirection === 'column') {
    styles = {marginTop: getSpace(spacing)};
  }

  if (flexDirection === 'column-reverse') {
    styles = {marginBottom: getSpace(spacing)};
  }

  if (flexDirection === 'row') {
    styles = {marginInlineStart: getSpace(spacing)};
  }

  if (flexDirection === 'row-reverse') {
    styles = {marginInlineEnd: getSpace(spacing)};
  }

  return {
    [selector]: styles,
  };
}
