import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {DialogPopper} from './DialogPopper';
import {DialogCard} from './DialogCard';
import {useDialogModel} from './hooks';

export interface DialogProps {
  /**
   * The contents of the Dialog. Can be `Dialog` children or any valid elements.
   */
  children: React.ReactNode;
}

/**
 * This component is the container component and does not render any semantic elements. It provides
 * a React Context model for the `Dialog` subcomponents. If you manually pass a `model` to all
 * subcomponents, this container component isn't needed. If you do not pass a `model`, the `Dialog`
 * container component will build a default one using `useDialogModel`. `Dialog` is a composition of a
 * {@link Popup} component and has a similar structure to `Popup`.
 */
export const Dialog = createContainer()({
  displayName: 'Dialog',
  modelHook: useDialogModel,
  subComponents: {
    /**
     * A `Dialog.Body` is a thin wrapper around {@link CardBody Card.Body} and doesn't actually take
     * a model. It adds `body` styling and nothing else.
     */
    Body: Popup.Body,
    /**
     * A `Dialog.Card` is a wrapper around the {@link Card} component, but hooked up to a
     * {@link DialogModel}. By default, this element has a `role=dialog`, `aria-labelledby` and an `id`.
     * The behavior hook used is called {@link useDialogCard}.
     */
    Card: DialogCard,
    /**
     * A `Dialog.CloseIcon` is an icon button that is the `X` at the top of a dialog. It will hide a
     * dialog when clicked. The behavior hook used is called {@link usePopupCloseButton}.
     */
    CloseIcon: Popup.CloseIcon,
    /**
     * A `Dialog.Target` is any element that is meant to show the Dialog. The default component
     * rendered by this component is a {@link SecondaryButton} element. You can override this by
     * passing the desired component via `as`. Many examples above use `as={DeleteButton}`. If you
     * want to render a {@link TertiaryButton} instead, use `as={TertiaryButton}`. The behavior hook
     * used is called {@link usePopupTarget}.
     *
     * ```tsx
     * const model = useDialogModel();
     *
     * // using this component
     * <Dialog.Target>Show Dialog</Dialog.Target>
     *
     * // using props instead
     * const dialogTargetButtonProps = useDialogTarget(model);
     * <SecondaryButton {...dialogTargetButtonProps}>Show Dialog</SecondaryButton>
     * ```
     *
     * `Dialog.Target` doesn't provide any styling by default. All styling comes from the default
     * component used, which is {@link SecondaryButton}. If you don't want any styling, you can do
     * the following:
     *
     * ```tsx
     * <Dialog.Target as="button">Open</Dialog.Target>
     * ```
     *
     * To add your own styling, you could either add a `css` prop, or make a styled button and pass
     * that styled component via the `as` prop.
     */
    Target: Popup.Target,
    /**
     * A `Dialog.Heading` is a wrapper around {@link CardHeading Card.Heading} that connect the
     * heading to a {@link DialogModel}. It will add an `id` to the element that match the
     * `aria-labelledby` that is applied to the `Dialog.Card` element for accessibility. The behavior
     * hook used is called {@link usePopupHeading}.
     */
    Heading: Popup.Heading,
    /**
     * A `Dialog.Popper` is a wrapper around {@link PopupPopper Popup.Popper}. The behavior
     * hook used is called {@link useDialogPopper}.
     */

    Popper: DialogPopper,
    /**
     * A `Dialog.CloseButton` is a button that will hide a dialog. By default, this is a
     * {@link SecondaryButton} component, but `as` can be used to render any button element (i.e
     * {@link DeleteButton} or {@link PrimaryButton}). The behavior hook used is called
     * {@link usePopupCloseButton}.
     */
    CloseButton: Popup.CloseButton,
  },
})(({children}: DialogProps) => {
  return <>{children}</>;
});
