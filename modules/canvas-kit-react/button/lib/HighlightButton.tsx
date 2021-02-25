import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {
  GrowthBehavior,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors, ButtonOrAnchorComponent} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelIcon} from './parts';

export interface HighlightButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Themeable,
    GrowthBehavior {
  /**
   * The size of the HighlightButton.
   * @default 'medium'
   */
  size?: 'medium' | 'large';
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The icon of the HighlightButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `a` tag instead of a `button` when defined.
   */
  as?: 'a';
}

const getHighlightButtonColors = ({
  canvas: {
    palette: {primary: themePrimary},
  },
}: EmotionCanvasTheme): ButtonColors => ({
  default: {
    background: colors.soap200,
    border: colors.soap200,
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  hover: {
    background: colors.soap400,
    border: 'transparent',
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  active: {
    background: colors.soap500,
    border: 'transparent',
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  focus: {
    background: colors.soap200,
    border: 'transparent',
    icon: themePrimary.dark,
    label: themePrimary.dark,
  },
  disabled: {
    background: colors.soap100,
    border: 'transparent',
    icon: colors.soap600,
    label: colors.licorice100,
  },
});

const HighlightButton: ButtonOrAnchorComponent<HighlightButtonProps> = ({
  // TODO: Fix useTheme and make it a real hook
  // eslint-disable-next-line react-hooks/rules-of-hooks
  theme = useTheme(),
  size = 'medium',
  buttonRef,
  icon,
  children,
  ...elemProps
}: HighlightButtonProps) => (
  <ButtonContainer
    colors={getHighlightButtonColors(theme)}
    size={size}
    ref={buttonRef}
    {...elemProps}
  >
    {icon && <ButtonLabelIcon size={size} icon={icon} />}
    <ButtonLabel>{children}</ButtonLabel>
  </ButtonContainer>
);

HighlightButton.Size = {
  Medium: 'medium',
  Large: 'large',
} as const;

// @ts-ignore ButtonOrAnchorComponent requires a Variant, but will complain Variable 'Variant' implicitly has an 'any' type. ts(7005)
HighlightButton.Variant = undefined;

export default HighlightButton;
