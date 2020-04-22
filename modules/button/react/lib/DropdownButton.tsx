import * as React from 'react';
import {Themeable} from '@workday/canvas-kit-labs-react-core';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {GrowthBehavior, useTheme} from '@workday/canvas-kit-react-common';
import {DropdownButtonVariant, ButtonIconPosition, ButtonOrAnchorComponent} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelIcon} from './parts';
import {getButtonColors} from './Button';

export interface DropdownButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Themeable,
    GrowthBehavior {
  /**
   * The variant of the Button.
   * @default DropdownButtonVariant.Secondary
   */
  variant?: DropdownButtonVariant;
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'medium' | 'large';
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `a` tag instead of a `button` when defined.
   */
  as?: 'a';
}

const DropdownButton: ButtonOrAnchorComponent<
  DropdownButtonProps,
  typeof DropdownButtonVariant
> = ({
  theme = useTheme(),
  variant = DropdownButtonVariant.Secondary,
  size = 'medium',
  buttonRef,
  children,
  ...elemProps
}: DropdownButtonProps) => (
  <ButtonContainer
    colors={getButtonColors(variant, theme)}
    size={size}
    ref={buttonRef}
    {...elemProps}
  >
    <ButtonLabel>{children}</ButtonLabel>
    <ButtonLabelIcon
      size={size}
      icon={caretDownIcon}
      iconPosition={ButtonIconPosition.Right}
      dropdown={true}
    />
  </ButtonContainer>
);

DropdownButton.Variant = DropdownButtonVariant;
DropdownButton.Size = {
  Medium: 'medium',
  Large: 'large',
} as const;

export default DropdownButton;
