import {flex} from './flex';
import {layout} from './layout';
import {space} from './space';

const styleProps = {
  ...flex,
  ...layout,
  ...space,
};

// TODO: Improve this function
export function safelySpreadProps<T extends object>(props: T) {
  let safeProps = {};
  for (const key in props) {
    if (!(key in styleProps)) {
      safeProps = {...safeProps, [key]: props[key as keyof T]};
    }
  }
  return safeProps;
}
