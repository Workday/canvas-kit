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
          <BaseButton.Icon size={size} icon={icon} shouldMirrorIcon={shouldMirrorIcon} />
        )}
        {children && <BaseButton.Label>{children}</BaseButton.Label>}

        {icon && baseIconPosition && ['only', 'end'].includes(baseIconPosition) && (
          <BaseButton.Icon size={size} icon={icon} shouldMirrorIcon={shouldMirrorIcon} />
        )}
      </BaseButton>
    );
  },
});
