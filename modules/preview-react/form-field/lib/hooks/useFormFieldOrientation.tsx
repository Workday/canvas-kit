import {StackSpacing, StackProps} from '@workday/canvas-kit-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';

/**
 * Adds the necessary layout props to a `FormField` component.
 */
export const useFormFieldOrientation = (orientation: 'horizontal' | 'vertical') => {
  let layoutProps: {
    flexDirection: StackProps['flexDirection'];
    alignItems: StackProps['alignItems'];
    spacing: StackSpacing;
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
