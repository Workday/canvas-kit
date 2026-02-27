import {FlexProps} from '@workday/canvas-kit-react/layout';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

/**
 * Adds the necessary layout props to a `FormField` component.
 *
 * @deprecated
 */
export const useFormFieldOrientation = (orientation: 'horizontal' | 'vertical') => {
  let layoutProps: {
    flexDirection: FlexProps['flexDirection'];
    alignItems: FlexProps['alignItems'];
    gap: FlexProps['gap'];
  };

  if (orientation === 'horizontal') {
    layoutProps = {
      flexDirection: 'row',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      gap: cssVar(system.gap.xl, system.space.x8),
      alignItems: undefined,
    };
  } else {
    layoutProps = {
      flexDirection: 'column',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      gap: cssVar(system.gap.xs, system.space.x1),
      alignItems: 'flex-start',
    };
  }

  return layoutProps;
};
