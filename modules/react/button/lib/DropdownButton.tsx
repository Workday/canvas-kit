import * as React from 'react';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {ButtonContainer, ButtonLabel, ButtonLabelIcon} from './parts';
import {getButtonColors} from './Button';

export interface DropdownButtonProps extends Themeable, GrowthBehavior {
  /**
   * The variant of the Button.
   * @default 'secondary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'medium' | 'large';
  children?: React.ReactNode;
}

export const DropdownButton = createComponent('button')({
  displayName: 'DropdownButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      variant = 'secondary',
      size = 'medium',
      children,
      ...elemProps
    }: DropdownButtonProps,
    ref,
    Element
  ) => (
    <ButtonContainer
      ref={ref}
      as={Element}
      colors={getButtonColors(variant, theme)}
      size={size}
      {...elemProps}
    >
      <ButtonLabel>{children}</ButtonLabel>
      <ButtonLabelIcon size={size} icon={caretDownIcon} iconPosition="right" dropdown={true} />
    </ButtonContainer>
  ),
});
