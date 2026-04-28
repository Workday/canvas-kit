import {FlexProps} from '@workday/canvas-kit-react/layout';
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
      gap: system.legacy.gap.xl,
      alignItems: undefined,
    };
  } else {
    layoutProps = {
      flexDirection: 'column',
      gap: system.legacy.gap.xs,
      alignItems: 'flex-start',
    };
  }

  return layoutProps;
};
