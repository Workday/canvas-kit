import {space as spaceTokens} from '@workday/canvas-kit-react/tokens';
import {CanvasSystemPropValues, SystemPropValues} from './systemProps';

export type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

const selector = '& > *:not(style) ~ *:not(style)';

export type StackSpacing = SystemPropValues['space'];

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

const getSpace = (value: SystemPropValues['space']) => {
  return spaceTokens[value as CanvasSystemPropValues['space']] || value;
};

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
