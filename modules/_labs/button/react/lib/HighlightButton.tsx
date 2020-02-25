import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonSize, ButtonColors} from './types';
import {ButtonContainer, ButtonLabel, ButtonLabelData, ButtonLabelIcon} from './parts';

export interface HighlightButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    GrowthBehavior {
  /**
   * The size of the HighlightButton.
   * @default ButtonSize.Medium
   */
  size: ButtonSize.Medium | ButtonSize.Large;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The data label of the HighlightButton.
   */
  dataLabel?: String;
  /**
   * The icon of the HighlightButton.
   */
  icon?: CanvasSystemIcon;
}

const getHighlightButtonColors = (): ButtonColors => ({
  default: {
    background: colors.soap200,
    border: colors.soap200,
    icon: colors.blueberry500,
    label: colors.blueberry500,
  },
  hover: {
    background: colors.soap400,
    border: 'transparent',
    icon: colors.blueberry500,
    label: colors.blueberry500,
  },
  active: {
    background: colors.soap500,
    border: 'transparent',
    icon: colors.blueberry500,
    label: colors.blueberry500,
  },
  focus: {
    background: colors.soap200,
    border: 'transparent',
    icon: colors.blueberry500,
    label: colors.blueberry500,
  },
  disabled: {
    background: colors.soap100,
    border: 'transparent',
    icon: colors.soap600,
    label: colors.licorice100,
  },
});

const HighlightButton = (props: HighlightButtonProps) => {
  const {size, buttonRef, dataLabel, icon, children, ...elemProps} = props;
  return (
    <ButtonContainer colors={getHighlightButtonColors()} size={size} ref={buttonRef} {...elemProps}>
      {icon && <ButtonLabelIcon size={size} icon={icon} />}
      <ButtonLabel>{children}</ButtonLabel>
      {dataLabel && <ButtonLabelData>{dataLabel}</ButtonLabelData>}
    </ButtonContainer>
  );
};

HighlightButton.Size = {
  Medium: ButtonSize.Medium,
  Large: ButtonSize.Large,
};

HighlightButton.defaultProps = {
  size: ButtonSize.Medium,
};

export default HighlightButton;
