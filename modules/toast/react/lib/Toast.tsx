import * as React from 'react';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';
import {spacing, colors, type, CanvasColor} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import {IconButtonSize} from '@workday/canvas-kit-react-button';
import styled from '@emotion/styled';

export interface ToastProps {
  /**
   *  Pass whatever icon you'd like to display on the left side of the Toast You can import icons from '@workday/canvas-system-icons-web'
   */
  icon: CanvasSystemIcon;
  /**
   * The color of the icon
   */
  iconColor: CanvasColor | string; // TODO: Fix
  children: string;
  /**
   * Callback to handle close of your Toast and any other event when the Toast is closed.
   */
  onClose?: () => void;
  /**
   * Callback to handle an action link.
   */
  onActionClick?: () => void;
  /**
   * The text to display for the link.
   */
  actionText?: string;
  /**
   * Origin from which the toast will animate from.
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
  static defaultProps = {
    icon: checkIcon as CanvasSystemIcon, // needed for TS2742 - https://github.com/microsoft/TypeScript/issues/29808
    iconColor: colors.greenApple400,
  };

  public render() {
    const {
      onClose,
      onActionClick,
      actionText,
      icon,
      iconColor,
      transformOrigin,
      ...elemProps
    } = this.props;
    return (
      <Popup
        width={toastWidth}
        transformOrigin={transformOrigin}
        padding={PopupPadding.s}
        handleClose={onClose}
        closeIconSize={IconButtonSize.Small}
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
