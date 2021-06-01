import * as React from 'react';
import {Popup, PopupCardProps} from '@workday/canvas-kit-react/popup';
import {space, colors, type, CanvasColor} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import styled from '@emotion/styled';

export interface ToastProps extends PopupCardProps {
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
    ...type.body2,
  },
  ({onClose}) => ({
    marginRight: onClose ? space.m : undefined,
  })
);

const ToastSystemIcon = styled(SystemIcon)({
  marginRight: space.s,
  alignSelf: 'start',
});

const ActionButton = styled('button')({
  ...type.body2,
  ...type.variant.link,
  display: 'block',
  backgroundColor: 'transparent', // To prevent Safari from rendering grey 'buttonface' as bgcolor
  border: 'none',
  marginTop: space.xxxs,
});

const Message = styled('div')({
  wordBreak: 'break-word',
  wordWrap: 'break-word', // Needed for IE11
});

export default class Toast extends React.Component<ToastProps> {
  public render() {
    const {
      icon = checkIcon as CanvasSystemIcon, // needed for TS2742 - https://github.com/microsoft/TypeScript/issues/29808
      iconColor = colors.greenApple400,
      onClose,
      onActionClick,
      actionText,
      ...elemProps
    } = this.props;

    const isInteractive = onClose || onActionClick;

    return (
      <Popup.Card
        width={toastWidth}
        padding="s"
        role={isInteractive ? 'dialog' : 'status'}
        aria-live={isInteractive ? 'off' : 'polite'}
        aria-atomic={!isInteractive}
        {...elemProps}
      >
        <Popup.CloseIcon aria-label="Close" onClick={onClose} size="small" />
        <Popup.Body>
          <ToastContentContainer onClose={onClose}>
            {icon && <ToastSystemIcon color={iconColor} colorHover={iconColor} icon={icon} />}
            <Message>
              {this.props.children}
              {onActionClick && <ActionButton onClick={onActionClick}>{actionText}</ActionButton>}
            </Message>
          </ToastContentContainer>
        </Popup.Body>
      </Popup.Card>
    );
  }
}
