import * as React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './hooks';
import {PopupCard} from './PopupCard';
import {PopupTarget} from './PopupTarget';
import {PopupPopper} from './PopupPopper';
import {PopupHeading} from './PopupHeading';
import {PopupCloseIcon} from './PopupCloseIcon';
import {PopupCloseButton} from './PopupCloseButton';
import {PopupBody} from './PopupBody';

export interface PopupProps {
  /**
   * The contents of the Popup. Can be `Popup` children or any valid elements.
   */
  children: React.ReactNode;
}

/**
 * This component is a container component that has no semantic element. It provides a React Context
 * model for all Popup subcomponents. If you manually pass a `model` to all subcomponents, this
 * container component isn't needed.
 *
 * ```tsx
 * // using Popup
 * <Popup model={model}>
 *   <Popup.Target /> // no model here
 * </Popup>
 *
 * // using models on subcomponents
 * <>
 *   <Popup.Target model={model} />
 * </>
 * ```
 */
export const Popup = createContainer()({
  displayName: 'Popup',
  modelHook: usePopupModel,
  subComponents: {
    /**
     * A `Popup.Target` is any element that is meant to show the Popup. The default component
     * rendered by this component is a {@link SecondaryButton} element. You can override this by
     * passing the desired component via `as`. Many examples above use `as={DeleteButton}`. If you
     * want to render a {@link TertiaryButton} instead, use `as={TertiaryButton}`. The behavior hook
     * used is called {@link usePopupTarget}.
     *
     * ```tsx
     * const model = usePopupModel();
     *
     * // using this component
     * <Popup.Target>Show Popup</PopupTarget>
     *
     * // using props instead
     * const popupTargetButtonProps = usePopupTarget(model);
     * <SecondaryButton {...popupTargetButtonProps}>Show Popup</SecondaryButton>
     * ```
     *
     * `Popup.Target` doesn't provide any styling by default. All styling comes from the default
     * component used, which is {@link SecondaryButton}. If you don't want any styling, you can do
     * the following:
     *
     * ```tsx
     * <Popup.Target as="button">Open</Popup.Target>
     * ```
     *
     * To add your own styling, you could either add a `css` prop, or make a styled button and pass
     * that styled component via the `as` prop.
     */
    Target: PopupTarget,
    /**
     * A `Popup.Popper` is a {@link Popper} component that is hooked up to the {@link PopupModel}
     * automatically. The behavior hook used is called {@link usePopupPopper}.
     *
     * > **Note:** `Popup.Popper` renders any children to a `div` element created by the
     * > {@link PopupStack}. This element is not controlled by React, so any extra element props
     * > will _not_ be forwarded. The `ref` will point to the `div` element created by the
     * > `PopupStack`, however. If you wish to add extra props to an element, add them to the
     * > {@link PopupCard Popup.Card} instead.
     */
    Popper: PopupPopper,
    /**
     * A `Popup.Card` is a wrapper around the {@link Card} component, but hooked up to a
     * {@link PopupModel}. By default, this element has a `role=dialog` and an `aria-labelledby`.
     * The behavior hook used is called {@link usePopupCard}.
     */
    Card: PopupCard,
    /**
     * A `Popup.CloseIcon` is an icon button that is the `X` in the top of a popup. It will hide a
     * popup when clicked. The behavior hook used is called {@link usePopupCloseButton}.
     */
    CloseIcon: PopupCloseIcon,
    /**
     * A `Popup.Heading` is a wrapper around {@link CardHeading Card.Heading} that connect the
     * heading to a {@link PopupModel}. It will add an `id` to the element that match the
     * `aria-labelledby` that is applied to the `Popup.Card` element for accessibility. The behavior
     * hook used is called {@link usePopupHeading}.
     */
    Heading: PopupHeading,
    /**
     * A `Popup.Body` is a thin wrapper around {@link CardBody Card.Body} and doesn't actually take
     * a model. It adds `body` styling and nothing else.
     */
    Body: PopupBody,
    /**
     * A `Popup.CloseButton` is a button that will hide a popup. By default, this is a
     * {@link SecondaryButton} component, but `as` can be used to render any button element (i.e
     * {@link DeleteButton} or {@link PrimaryButton}). The behavior hook used is called
     * {@link usePopupCloseButton}.
     */
    CloseButton: PopupCloseButton,
  },
})<PopupProps>(({children}: PopupProps) => {
  return <>{children}</>;
});
