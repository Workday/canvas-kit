import * as React from 'react';
import {keyframes} from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';

import {Card} from '@workday/canvas-kit-react/card';
import {IconButton} from '@workday/canvas-kit-react/button';
import {space} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  TransformOrigin,
  getTranslateFromOrigin,
  PickRequired,
  createComponent,
  useUniqueId,
  useDefaultModel,
} from '@workday/canvas-kit-react/common';
import {xIcon} from '@workday/canvas-system-icons-web';
import {BoxProps} from '@workday/canvas-kit-labs-react/common';

import {PopupModel, usePopupModel, PopupModelConfig} from './usePopupModel';
import {PopupCard} from './PopupCard';
import {PopupTarget, usePopupTarget} from './PopupTarget';
import {PopupPopper, usePopupPopper} from './PopupPopper';
import {PopupHeading} from './PopupHeading';
import {PopupCloseIcon} from './PopupCloseIcon';
import {PopupCloseButton} from './PopupCloseButton';

export enum PopupPadding {
  zero = '0px',
  s = '16px',
  l = '32px',
}

export interface PopupPropsOld {
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
   * The `aria-label` for the Popup close button.
   * @default Close
   */
  closeButtonAriaLabel?: string;
  children?: React.ReactNode;
  // temp
  depth?: BoxProps['depth'];
}

const closeIconSpacing = space.xs;
const closeIconSpacingSmall = 10;

const popupAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, space.xxs);

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
})<PickRequired<PopupPropsOld, 'transformOrigin', 'width'>>(
  {
    position: 'relative',
    maxWidth: `calc(100vw - ${space.l})`,
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

const CloseIconContainer = styled('div')<Pick<PopupPropsOld, 'closeIconSize'>>(
  {
    position: 'absolute',
  },
  ({closeIconSize}) => ({
    right: closeIconSize === 'small' ? closeIconSpacingSmall : closeIconSpacing,
    top: closeIconSize === 'small' ? closeIconSpacingSmall : closeIconSpacing,
  })
);

export const PopupOld = createComponent('div')({
  displayName: 'Popup',
  Component: (
    {
      children,
      padding = PopupPadding.l,
      closeIconSize = 'medium',
      closeButtonAriaLabel = 'Close',
      transformOrigin = {
        horizontal: 'center',
        vertical: 'top',
      } as const,
      depth = 2,
      handleClose,
      width,
      heading,
      popupRef,
      ariaLabel,
      ...elemProps
    }: PopupPropsOld,
    ref,
    Element
  ) => {
    const id = useUniqueId();
    const closeButtonRef = React.useRef<any>(null);
    const headingId = getHeadingId(heading, id);

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
              ref={closeButtonRef}
              variant="plain"
              size={closeIconSize}
              onClick={handleClose}
              icon={xIcon}
              aria-label={closeButtonAriaLabel}
            />
          </CloseIconContainer>
        )}
        <Card depth={depth} width="100%" padding={padding}>
          {heading && <Card.Heading id={headingId}>{heading}</Card.Heading>}
          <Card.Body>{children}</Card.Body>
        </Card>
      </Container>
    );
  },
  subComponents: {
    Padding: PopupPadding,
  },
});

// eslint-disable-next-line no-empty-function
const noop = () => {};

// create enough of a model to use `Popup.Card` without a `Popup` container component.
export const PopupModelContext = React.createContext<PopupModel>({
  state: {willReturnFocus: {current: false}},
  events: {show: noop, hide: noop},
} as any);

export interface PopupProps {
  /**
   * The contents of the Popup. Can be `Popup` children or any valid elements.
   */
  children: React.ReactNode;
  /**
   * A PopupModel with optional behavior hooks applied.
   */
  model: PopupModel;
}

export const Popup = createComponent('div')({
  displayName: 'Popup',
  Component: ({children, model, ...config}: PopupProps) => {
    const value = useDefaultModel(model, config, usePopupModel);
    return <PopupModelContext.Provider value={value}>{children}</PopupModelContext.Provider>;
  },
  subComponents: {
    Padding: PopupPadding,
    Heading: PopupHeading,
    Body: Card.Body,
    Card: PopupCard,
    CloseIcon: PopupCloseIcon,
    Target: PopupTarget,
    Popper: PopupPopper,
    CloseButton: PopupCloseButton,
  },
});

/**
 * Convenience hook around popups. Most popups are non-modal dialogs with a single target and toggle
 * when the target button is clicked. Additional popup features like `useCloseOnOutsideClick` need
 * to be added manually.
 */
export const usePopupOld = <T extends HTMLElement = HTMLElement>() => {
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

/**
 *
 * @deprecated
 */
export const usePopup = (config: PopupModelConfig = {}) => {
  const model = usePopupModel(config);
  const popperProps = usePopupPopper(model, {}, null);
  const targetProps = usePopupTarget(model, {}, null);

  return {
    targetProps,
    popperProps,
    closePopup: model.events.hide,
    stackRef: model.state.stackRef,
    model,
  };
};
