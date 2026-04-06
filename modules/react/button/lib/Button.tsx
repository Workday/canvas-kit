import {BaseButton, ButtonContainerProps} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface ButtonProps extends Omit<ButtonContainerProps, 'ref'> {
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   *
   * @default 'start'
   */
  iconPosition?: 'start' | 'end';
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

export const Button = createComponent('button')({
  displayName: 'Button',
  Component: (
    {
      children,
      icon,
      colors,
      iconPosition,
      shouldMirrorIcon,
      shouldMirrorIconInRTL,
      size = 'medium',
      ...elemProps
    }: ButtonProps,
    ref,
    Element
  ) => {
    const baseIconPosition = iconPosition
      ? iconPosition
      : icon
      ? children
        ? 'start'
        : 'only'
      : undefined;

    return (
      <BaseButton
        as={Element}
        ref={ref}
        size={size}
        icon={icon}
        colors={colors}
        iconPosition={baseIconPosition}
        {...elemProps}
      >
        {icon && baseIconPosition === 'start' && (
          <BaseButton.Icon
            size={size}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            shouldMirrorIconInRTL={shouldMirrorIconInRTL}
          />
        )}
        {children && <BaseButton.Label>{children}</BaseButton.Label>}

        {icon && baseIconPosition && ['only', 'end'].includes(baseIconPosition) && (
          <BaseButton.Icon
            size={size}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
            shouldMirrorIconInRTL={shouldMirrorIconInRTL}
          />
        )}
      </BaseButton>
    );
  },
});
