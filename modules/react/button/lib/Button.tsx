import * as React from 'react';

import {BaseButton, ButtonContainerProps} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface ButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

export const Button = createComponent('button')({
  displayName: 'Button',
  Component: (
    {
      children,
      icon,
      colors,
      iconPosition = icon ? (children ? 'start' : 'only') : undefined,
      shouldMirrorIcon,
      size = 'medium',
      ...elemProps
    }: ButtonProps,
    ref,
    Element
  ) => {
    return (
      <BaseButton
        as={Element}
        ref={ref}
        size={size}
        icon={icon}
        iconPosition={iconPosition}
        type="button"
        {...elemProps}
      >
        {icon && iconPosition === 'start' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {children && <BaseButton.Label>{children}</BaseButton.Label>}

        {icon && iconPosition === 'only' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {icon && iconPosition === 'end' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </BaseButton>
    );
  },
});
