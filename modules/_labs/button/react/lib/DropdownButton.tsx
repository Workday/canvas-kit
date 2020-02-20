import * as React from 'react';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {DropdownButtonVariant, ButtonSize, ButtonIconPosition} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelIcon} from './parts';
import {buttonColors} from './Button';

export interface DropdownButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    GrowthBehavior {
  /**
   * The variant of the Button.
   * @default DropdownButtonVariant.Secondary
   */
  variant: DropdownButtonVariant;
  /**
   * The size of the Button.
   * @default ButtonSize.Medium
   */
  size: ButtonSize.Medium | ButtonSize.Large;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const DropdownButton = (props: DropdownButtonProps) => {
  const {
    variant = DropdownButtonVariant.Secondary,
    size = ButtonSize.Medium,
    buttonRef,
    children,
    ...elemProps
  } = props;
  return (
    <ButtonContainer
      colors={buttonColors[variant]}
      size={size}
      buttonRef={buttonRef}
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
};

DropdownButton.Variant = DropdownButtonVariant;
DropdownButton.Size = {
  Medium: ButtonSize.Medium,
  Large: ButtonSize.Large,
};

export default DropdownButton;
