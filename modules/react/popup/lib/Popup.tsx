import * as React from 'react';
import {keyframes} from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import uuid from 'uuid/v4';

import Card from '@workday/canvas-kit-react/card';
import {IconButton} from '@workday/canvas-kit-react/button';
import {CanvasDepthValue, depth as depthValues, spacing} from '@workday/canvas-kit-react/core';
import {
  styled,
  TransformOrigin,
  getTranslateFromOrigin,
  PickRequired,
} from '@workday/canvas-kit-react/common';
import {xIcon} from '@workday/canvas-system-icons-web';

export enum PopupPadding {
  zero = '0px',
  s = '16px',
  l = '32px',
}

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Aria label will override aria-labelledby, it is used if there is no heading or we need custom label for popup
   */
  ariaLabel?: string;
  /**
   * The padding of the Popup. Accepts `zero`, `s`, or `l`.
   * @default PopupPadding.l
   */
  padding?: PopupPadding;
  /**
   * The origin from which the Popup will animate.
   * @default {horizontal: 'center', vertical: 'top'}
   */
  transformOrigin?: TransformOrigin | null;
  /**
   * The size of the Popup close button. Accepts `small` or `medium`.
   * @default 'medium'
   */
  closeIconSize?: 'small' | 'medium';
  /**
   * The ref to the underlying popup container element. Use this to check click targets against when closing the Popup.
   */
  popupRef?: React.Ref<HTMLDivElement>;
  /**
   * The function called when the Popup is closed.
   */
  handleClose?: () => void;
  /**
   * The width of the Popup.
   */
  width?: number | string;
  /**
   * The heading of the Popup.
   */
  heading?: React.ReactNode;
  /**
   * The depth of the Popup. Imported from `@workday/canvas-kit-react/core`.
   * @default depth[2]
   */
  depth?: CanvasDepthValue;
  /**
   * The `aria-label` for the Popup close button.
   * @default Close
   */
  closeButtonAriaLabel?: string;
}

const closeIconSpacing = spacing.xs;
const closeIconSpacingSmall = 10;

const popupAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, spacing.xxs);

  return keyframes`
    0% {
      opacity: 0;
      transform: translate(${translate.x}px, ${translate.y}px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;
};

const Container = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'width',
})<PickRequired<PopupProps, 'transformOrigin', 'width'>>(
  {
    position: 'relative',
    maxWidth: `calc(100vw - ${spacing.l})`,
  },
  ({width}) => width && {width},
  ({transformOrigin}) => {
    if (transformOrigin === null) {
      return {};
    }
    return {
      animation: popupAnimation(transformOrigin),
      animationDuration: '150ms',
      animationTimingFunction: 'ease-out',
      transformOrigin: `${transformOrigin.vertical} ${transformOrigin.horizontal}`,
      // Allow overriding of animation in special cases
      '.wd-no-animation &': {
        animation: 'none',
      },
    };
  }
);

const getHeadingId = (heading: React.ReactNode, id: string) => (heading ? id : undefined);

const getAriaLabel = (
  ariaLabel: string | undefined,
  headingId: string | undefined
): object | undefined => {
  if (ariaLabel) {
    return {['aria-label']: ariaLabel};
  }
  if (headingId) {
    return {['aria-labelledby']: headingId};
  }
  return undefined;
};

const CloseIconContainer = styled('div')<Pick<PopupProps, 'closeIconSize'>>(
  {
    position: 'absolute',
  },
  ({closeIconSize}) => ({
    right: closeIconSize === IconButton.Size.Small ? closeIconSpacingSmall : closeIconSpacing,
    top: closeIconSize === IconButton.Size.Small ? closeIconSpacingSmall : closeIconSpacing,
  })
);

export default class Popup extends React.Component<PopupProps> {
  static Padding = PopupPadding;

  private id = uuid();
  private closeButtonRef = React.createRef<any>();

  public render() {
    const {
      padding = Popup.Padding.l,
      closeIconSize = 'medium',
      closeButtonAriaLabel = 'Close',
      transformOrigin = {
        horizontal: 'center',
        vertical: 'top',
      } as const,
      depth = depthValues[2],
      handleClose,
      width,
      heading,
      popupRef,
      ariaLabel,
      ...elemProps
    } = this.props;
    const headingId = getHeadingId(heading, this.id);
    return (
      <Container
        transformOrigin={transformOrigin}
        width={width}
        role="dialog"
        ref={popupRef}
        {...getAriaLabel(ariaLabel, headingId)}
        {...elemProps}
      >
        {handleClose && (
          <CloseIconContainer closeIconSize={closeIconSize}>
            <IconButton
              data-close="close" // Allows for grabbing focus to the close button rather than relying on the aria label "Close" which will change based on different languages
              buttonRef={this.closeButtonRef}
              variant={IconButton.Variant.Plain}
              size={closeIconSize}
              onClick={handleClose}
              icon={xIcon}
              aria-label={closeButtonAriaLabel}
            />
          </CloseIconContainer>
        )}
        <Card depth={depth} heading={heading} headingId={headingId} width="100%" padding={padding}>
          {this.props.children}
        </Card>
      </Container>
    );
  }
}

/**
 * Convenience hook around popups. Most popups are non-modal dialogs with a single target and toggle
 * when the target button is clicked. Additional popup features like `useCloseOnOutsideClick` need
 * to be added manually.
 */
export const usePopup = <T extends HTMLElement = HTMLElement>() => {
  const [open, setOpen] = React.useState(false);
  const [anchorElement, setAnchorElement] = React.useState<T | null>(null);
  const stackRef = React.useRef<HTMLDivElement>(null);

  const togglePopup = (event: React.MouseEvent<T>) => {
    setAnchorElement(event.currentTarget as T);
    setOpen(!open);
  };

  return {
    targetProps: {
      onClick: togglePopup,
    },
    closePopup() {
      setOpen(false);
    },
    popperProps: {
      open,
      anchorElement,
      ref: stackRef,
    },
    stackRef,
  };
};
