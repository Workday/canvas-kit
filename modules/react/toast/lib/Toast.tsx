import * as React from 'react';

import {Popup} from '@workday/canvas-kit-react/popup';
import {space, colors, type, CanvasColor} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {checkIcon, exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createComponent, ExtractProps, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Hyperlink} from '@workday/canvas-kit-react/button';

export interface ToastProps extends ExtractProps<typeof Popup.Card, never> {
  /**
   * The icon of the Toast.
   * @default checkIcon
   */
  icon?: CanvasSystemIcon;
  /**
   * The color of the Toast icon.
   * @default colors.greenApple400
   */
  iconColor?: CanvasColor | string; // TODO: Fix
  /**
   * The text of the Toast message.
   */
  children: string;
  /**
   * The function called when the Toast is closed.
   */
  onClose?: () => void;
  /**
   * The function called when the Toast action is clicked.
   */
  onActionClick?: () => void;
  /**
   * The text of the Toast action.
   */
  actionText?: string;
}
const toastWidth = 360;

const ToastContentContainer = styled('div')<Pick<ToastProps, 'onClose'>>(
  {
    display: 'flex',
    alignItems: 'center',
    ...type.levels.subtext.large,
  },
  ({onClose}) => ({
    marginRight: onClose ? space.m : undefined,
  })
);

const ToastSystemIcon = styled(SystemIcon)({
  marginRight: space.s,
  alignSelf: 'start',
});

const {color, ...subTextLargeStyles} = type.levels.subtext.large;

const StyledActionButton = styled(Hyperlink)<StyledType>({
  ...subTextLargeStyles,
  display: 'block',
  backgroundColor: 'transparent', // To prevent Safari from rendering grey 'buttonface' as bgcolor
  border: 'none',
  marginTop: space.xxxs,
});

const Message = styled('div')({
  wordBreak: 'break-word',
});

export const Toast = createComponent('div')({
  displayName: 'Toast',
  Component: (
    {
      icon = checkIcon, // needed for TS2742 - https://github.com/microsoft/TypeScript/issues/29808
      iconColor = colors.greenApple400,
      onClose,
      onActionClick,
      actionText,
      children,
      ...elemProps
    }: ToastProps,
    ref,
    Element
  ) => {
    const isInteractive = onClose || onActionClick;
    const isError = iconColor === colors.cinnamon500 && icon === exclamationCircleIcon;

    return (
      <Popup.Card
        ref={ref}
        as={Element}
        width={toastWidth}
        depth={5}
        role={isInteractive ? 'dialog' : isError ? 'alert' : 'status'}
        aria-live={isInteractive ? 'off' : isError ? 'assertive' : 'polite'}
        aria-atomic={!isInteractive}
        padding="xxs"
        {...elemProps}
      >
        {onClose && <Popup.CloseIcon aria-label="Close" onClick={onClose} size="small" />}
        <Popup.Body>
          <ToastContentContainer onClose={onClose}>
            {icon && <ToastSystemIcon color={iconColor} colorHover={iconColor} icon={icon} />}
            <Message>
              {children}
              {onActionClick && (
                <StyledActionButton as="button" onClick={onActionClick}>
                  {actionText}
                </StyledActionButton>
              )}
            </Message>
          </ToastContentContainer>
        </Popup.Body>
      </Popup.Card>
    );
  },
});
