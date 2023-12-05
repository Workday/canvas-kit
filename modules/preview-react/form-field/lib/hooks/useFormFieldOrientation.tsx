import {FlexProps} from '@workday/canvas-kit-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';

/**
 * Adds the necessary layout props to a `FormField` component.
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
      gap: space.l,
      alignItems: 'center',
    };
  } else {
    layoutProps = {
      flexDirection: 'column',
      gap: space.xxxs,
      alignItems: 'flex-start',
    };
  }

  return layoutProps;
};
