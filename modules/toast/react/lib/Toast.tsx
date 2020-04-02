import * as React from 'react';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';
import {spacing, colors, type, CanvasColor} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import styled from '@emotion/styled';

export interface ToastProps {
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
  /**
   * The origin from which the Toast will animate.
   * @default {horizontal: 'center', vertical: 'top'}
   */
  transformOrigin?: TransformOrigin;
}
const toastWidth = 360;

const ToastContentContainer = styled('div')<Pick<ToastProps, 'onClose'>>(
  {
    display: 'flex',
    alignItems: 'center',
    ...type.body2,
  },
  ({onClose}) => ({
    marginRight: onClose ? spacing.m : undefined,
  })
);

const ToastSystemIcon = styled(SystemIcon)({
  marginRight: spacing.s,
  alignSelf: 'start',
});

const ActionButton = styled('button')({
  display: 'block',
  backgroundColor: 'transparent', // To prevent Safari from rendering grey 'buttonface' as bgcolor
  border: 'none',
  padding: 0,
  marginTop: spacing.xxxs,
  ...type.body2,
  ...type.variant.link,
});

const Message = styled('div')({
  wordBreak: 'break-word',
  wordWrap: 'break-word',
});

export default class Toast extends React.Component<ToastProps> {
  public render() {
    const {
      icon = checkIcon as CanvasSystemIcon, // needed for TS2742 - https://github.com/microsoft/TypeScript/issues/29808
      iconColor = colors.greenApple400,
      transformOrigin,
      onClose,
      onActionClick,
      actionText,
      ...elemProps
    } = this.props;
    return (
      <Popup
        width={toastWidth}
        transformOrigin={transformOrigin}
        padding={PopupPadding.s}
        handleClose={onClose}
        closeIconSize="small"
        {...elemProps}
      >
        <ToastContentContainer onClose={onClose}>
          {icon && <ToastSystemIcon color={iconColor} colorHover={iconColor} icon={icon} />}
          <Message>
            {this.props.children}
            {onActionClick && <ActionButton onClick={onActionClick}>{actionText}</ActionButton>}
          </Message>
        </ToastContentContainer>
      </Popup>
    );
  }
}
