import * as React from 'react';

import {
  GrowthBehavior,
  useTheme,
  Themeable,
  createComponent,
  cssVar,
  newTheme,
} from '@workday/canvas-kit-react/common';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {
  Button,
  ButtonProps,
  ButtonSizes,
  IconPositions,
} from '@workday/canvas-kit-labs-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {Box} from '@workday/canvas-kit-react/layout';
import {start} from 'repl';

export interface PrimaryButtonProps extends Themeable, GrowthBehavior, ButtonProps {
  /**
   * The variant of the PrimaryButton.
   */
  // variant?: 'inverse';
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   */
  size?: ButtonSizes;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   */
  shouldMirrorIcon?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary Buttons are high emphasis. Use once per screen to draw attention to the highest priority
 * action. Multiple primary buttons make it confusing for the user to understand what action they
 * should take. Not all screens require a Primary Button.
 *
 * Primary Buttons have four sizes: `extraSmall`, `small`, `medium`, and `large`. Icons are
 * supported for every size and can be positioned at the `start` or `end` with the `iconPosition`
 * prop.
 */
// export const ButtonExample = createComponent('button')({
//   displayName: 'ButtonExample',
//   Component: (
//     {
//       size = 'medium',
//       iconPosition = 'start',
//       variant,
//       icon,
//       shouldMirrorIcon = false,
//       children,
//       ...elemProps
//     }: PrimaryButtonProps,
//     ref,
//     Element
//   ) => {
//     const theme = useTheme();
//     return (
//       <Button
//         ref={ref}
//         size={size}
//         as={Element}
//         {...elemProps}
//         colors={{
//           default: {
//             label: cssVar(newTheme.colors.primary.contrast),
//             background: cssVar(newTheme.colors.primary.main),
//           },
//         }}
//       >
//         <Box>Hello</Box>
//       </Button>
//     );
//   },
// });

export const ButtonExample = () => {
  return (
    <Button size="large" icon={plusIcon} iconPosition="end" variant="secondaryInverse">
      Button
    </Button>
  );
};
