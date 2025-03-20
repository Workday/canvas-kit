import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {Popup} from '@workday/canvas-kit-react/popup';
import {ModalOverlay} from './ModalOverlay';
import {ModalCard} from './ModalCard';
import {useModalModel} from './hooks';
import {ModalHeading} from './ModalHeading';
import {ModalOverflowOverlay} from './ModalOverflowOverlay';
import {ModalBody} from './ModalBody';

/**
 * This component is the container component and does not render any semantic elements. It provides
 * a React Context model for the `Modal` subcomponents. If you manually pass a `model` to all
 * subcomponents, this container component isn't needed. If you do not pass a `model`, the `Modal`
 * container component will build a default one using `useModalModel`. `Modal` is a composition of a
 * {@link Popup} component and has a similar structure to `Popup`.
 */
export const Modal = createContainer()({
  displayName: 'Modal',
  modelHook: useModalModel,
  subComponents: {
    /**
     * The `Modal.Target` is any element that is meant to show the Modal. The default component
     * rendered by this component is a {@link SecondaryButton} element. You can override this by
     * passing the desired component via `as`. Many examples above use `as={DeleteButton}`. If you
     * want to render an icon button instead, pass an icon to the the `icon` prop and pass no
     * children to the button. The `Modal.Target` is an alias for {@link PopupTarget Popup.Target}
     * and uses the `usePopupTarget` hook, which provides a `ref` and an `onClick`. The provided
     * `ref` will be used to return focus to this element when the Modal is closed. If the provided
     * component does not forward the `ref` to an element, the fallback is to capture an element in
     * the `onClick`. This can be overridden by providing a `returnFocusRef` to the model.
     */
    Target: Popup.Target,
    /**
     * The `Modal.Overlay` is the component that hooks a Modal up to the {@link PopupStack} as well
     * as the semi-transparent overlay commonly used with modals. Internally, the `Modal.Overlay`
     * component uses two `div` elements to ensure proper rendering of the `Modal` content. The
     * default element is a `div` element and can be changed via the `as` prop.
     */
    Overlay: ModalOverlay,
    /**
     * The `Modal.Card` is wraps a {@link PopupCard Popup.Card} which wraps a {@link Card}. It is
     * the `role="dialog"` element and is uses `useModalCard` behavior hook which sets
     * `aria-modal="false"` and sets the `aria-labelledby` that points to the `id` of the
     * {@link ModalHeading Modal.Heading}. If you don't use a `Modal.Heading`, add an `aria-label`
     * instead. The default element is a `div` and can be changed via the `as` prop.
     */
    Card: ModalCard,
    /**
     * The `Modal.Heading` semantically labels the Modal via adding an `id` that the
     * {@link ModalCard Modal.Card} points to via `aria-labelledby`. If this component is not used,
     * you must add an `aria-label` to the `Modal.Card` to label the Modal for screen reader users.
     * This component uses the `useModalHeading` behavior hook which sets an `id` and also does some
     * focus management logic for situations where there is no
     * {@link ModalCloseIcon Modal.CloseIcon} component used. Please use `Modal.Heading` and don't
     * use your own unless you also use the `useModalHeading` hook in your component. Consult
     * accessibility if you cannot use this component. The default element is an `h2` and can be
     * changed via the `as` prop.
     */
    Heading: ModalHeading,
    /**
     * The `Modal.CloseIcon` is the 'X' icon in the top corner of a Modal. It always requires an
     * `aria-label` which must be translated. It uses the `usePopupCloseIcon` which adds an
     * `onClick` that will close the Modal. The default component rendered is an
     * {@link TertiaryButton} with just an icon that can be changed via the `as`. All props that
     * `TertiaryButton` takes are also available by default.
     */
    CloseIcon: Popup.CloseIcon,
    /**
     * The `Modal.CloseButton` is a convenience component that attaches an `onClick` listener to
     * close the Modal. It uses the `usePopupCloseButton` behavior hook which adds an `onClick` that
     * calls `model.events.hide()`. If you don't use this component, you'll have to add your own
     * `onClick` and you'll have to hoist the model. The default component rendered is a
     * {@link SecondaryButton} and can be changed via the `as` prop. This component doesn't contain
     * any styles and will take on the styles of the component given to it. For example,
     * `as={DeleteButton}` will render a delete button. `as={TertiaryButton}` with no children and
     * an `icon` will render a {@link TertiaryButton} styled icon button. If you give it a base
     * element like `as="button"`, you are responsible for styling the element. You can add your own
     * `onClick` to perform side effects. Your callback will be merged with the `onClick` that
     * closes the Modal.
     */
    CloseButton: Popup.CloseButton,
    Body: ModalBody,
    /**
     * If content is large, scrolling the entire overlay container is an option. Use the
     * `Modal.OverflowOverlay` component instead of the {@link ModalOverlay Modal.Overlay}
     * component. The {@link ModalCard Modal.Card}'s `maxHeight` and `height` will need to be reset
     * to `inherit` to prevent any internal overflow.
     *
     * This component should be used in place of the {@link ModalOverlay Modal.Overlay} component if
     * full body overflow is desired.
     */
    OverflowOverlay: ModalOverflowOverlay,
  },
})<ExtractProps<typeof Dialog, never>>(elemProps => {
  return <>{elemProps.children}</>;
});
