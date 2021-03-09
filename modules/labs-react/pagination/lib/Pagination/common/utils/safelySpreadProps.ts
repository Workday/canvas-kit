import {flex} from './flex';
import {layout} from './layout';
import {space} from './space';

const styleProps = {
  ...flex,
  ...layout,
  ...space,
};

/**
 * Removes style props from props to prevent them from being applied to the HTML element.
 * Returns an object of props that is stripped of all style props.
 * @example
 * const Box = (props) => {
 *   const safeProps = safelySpreadProps(props);
 *   return <div {...safeProps} />
 * }
 *
 */
export function safelySpreadProps<T extends object>(props: T) {
  const safeProps = {} as T;
  for (const key in props) {
    if (!(key in styleProps)) {
      safeProps[key as keyof T] = props[key as keyof T];
    }
  }
  return safeProps;
}
