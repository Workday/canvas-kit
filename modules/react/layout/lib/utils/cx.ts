import {StyleProps, baseStylePropFn} from './baseStylePropFn';
import {pseudo} from './pseudo';

export type CxStyleProps = {
  cx?: StyleProps;
};

export function cx<P extends CxStyleProps>(props: P) {
  if (props.cx) {
    const pseudoStyles = pseudo(props.cx);
    const baseStyles = baseStylePropFn(props.cx);
    return {
      ...baseStyles,
      ...pseudoStyles,
    };
  }
  return {};
}
