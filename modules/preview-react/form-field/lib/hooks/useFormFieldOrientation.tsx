import {SystemPropValues, FlexProps} from '@workday/canvas-kit-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';

/**
 * Adds the necessary layout props to a `FormField` component.
 */
export const useFormFieldOrientation = (orientation: 'horizontal' | 'vertical') => {
  let layoutProps: {
    flexDirection: FlexProps['flexDirection'];
    alignItems: FlexProps['alignItems'];
    spacing: SystemPropValues['space'];
  };

  if (orientation === 'horizontal') {
    layoutProps = {
      flexDirection: 'row',
      spacing: space.l,
      alignItems: 'center',
    };
  } else {
    layoutProps = {
      flexDirection: 'column',
      spacing: space.xxxs,
      alignItems: 'flex-start',
    };
  }

  return layoutProps;
};
