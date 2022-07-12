import React from 'react';
import {BaseButton} from '@workday/canvas-kit-react/button';
import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createComponent, EmotionCanvasTheme, useTheme} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export interface DropdownButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The accessibility label for the button
   */
  'aria-label': string;
  /**
   * The Canvas System Icon for the button
   *
   * @default relatedActionsIcon
   */
  buttonIcon?: CanvasSystemIcon;
  /**
   * The boolean to determine whether the button should be in a 'toggled' state
   */
  toggled: boolean;
}

export const DropdownButton = createComponent('button')({
  displayName: 'DropdownButton',
  Component: (
    {buttonIcon = relatedActionsIcon, toggled, ...elemProps}: DropdownButtonProps,
    ref,
    Element
  ) => {
    const theme = useTheme();
    return (
      <BaseButton
        as={Element}
        ref={ref}
        aria-pressed={undefined} // removing aria-pressed from button and opting for aria-expanded
        aria-expanded={toggled}
        aria-haspopup
        aria-controls="menu"
        size="small"
        height={space.l}
        width={space.l}
        padding={space.zero}
        colors={getDropdownColors(toggled, theme)}
        {...elemProps}
      >
        <BaseButton.Icon icon={buttonIcon} />
      </BaseButton>
    );
  },
});

const getDropdownColors = (toggled: boolean, theme: EmotionCanvasTheme) => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  return {
    default: {
      icon: toggled ? themePrimary.main : colors.blackPepper400,
      label: themePrimary.main,
    },
    hover: {
      background: colors.soap200,
      icon: toggled ? themePrimary.dark : colors.blackPepper500,
      label: themePrimary.dark,
    },
    active: {
      background: colors.soap300,
      icon: toggled ? themePrimary.dark : colors.blackPepper500,
      label: themePrimary.dark,
    },
    focus: {
      icon: toggled ? themePrimary.main : colors.blackPepper500,
      label: themePrimary.main,
    },
    disabled: {
      icon: toggled ? themePrimary.main : colors.blackPepper400,
      label: themePrimary.main,
    },
  };
};
