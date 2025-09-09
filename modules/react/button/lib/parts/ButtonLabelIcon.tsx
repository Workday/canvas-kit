import {ButtonSizes} from '../types';
import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {px2rem} from '@workday/canvas-kit-styling';

export interface ButtonLabelIconProps extends Partial<SystemIconProps> {
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic. Use this if you want to
   * always mirror the icon regardless of the content direction. If the icon should mirror only when
   * in an right-to-left language, use `shouldMirrorIconInRTL` instead.
   * @default false
   */
  shouldMirrorIcon?: boolean;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic when the content direction
   * is `rtl`. Icons don't have enough context to know if they should be mirrored in all cases.
   * Setting this to `true` indicates the icon should be mirrored in right-to-left languages.
   * @default false
   */
  shouldMirrorIconInRTL?: boolean;
}

const iconSizes: Record<ButtonSizes, number> = {
  extraSmall: 18,
  small: 20,
  medium: 20,
  large: 24,
};

export const ButtonLabelIcon = createComponent('span')({
  Component: (
    {
      icon,
      size = 'medium',
      shouldMirrorIcon = false,
      shouldMirrorIconInRTL = false,
      ...elemProps
    }: ButtonLabelIconProps,
    ref,
    Element
  ) => {
    if (icon === undefined) {
      return null;
    }

    const iconSize = iconSizes[size];

    return (
      <SystemIcon
        ref={ref}
        as={Element}
        size={iconSize}
        icon={icon}
        width={px2rem(iconSize)}
        height={px2rem(iconSize)}
        display="inline-block"
        shouldMirror={shouldMirrorIcon}
        shouldMirrorInRTL={shouldMirrorIconInRTL}
        {...elemProps}
      />
    );
  },
});
