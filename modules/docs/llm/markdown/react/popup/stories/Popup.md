---
source_file: react/popup/stories/Popup.mdx
live_url: https://workday.github.io/canvas-kit/react/popup/stories/Popup
---

<Meta of={PopupStories} />

# Canvas Kit Popups

A "popup" is a classification for a type of stacked UI element that appears "on top" of statically
positioned content. Tooltips, Modals, Dropdown menus, etc are all examples of "popups". Canvas Kit
has a "stack manager" system for managing these popups. Different types of popups have different
requirements of behavior for UX and accessibility - we can call them behaviors, capabilities, or
traits. Canvas Kit comes with a number of [behavioral hooks](#hooks) in the form of React Hooks.

You should use the most semantic component for your use-case before using `Popup` directly, like
`Modal`, which already has the correct behaviors built-in. If no component already exists that
matches your use case, you can use `Popup` and use our [hooks](#hooks). The `Popup` component comes
with a `Popup.Popper` subcomponent that positions a popup using [PopperJS](https://popper.js.org/)
that registers a popup with the `PopupStack` automatically and sets the popup model's `placement`
property. `Popup.Popper` component and hooks work with the stack management system for correct
rendering and accessibility behavior. If you cannot use `Popup.Popper`, use the
[usePopupStack](#usepoupstack) hook to properly register and deregister the popup at the correct
time. If you cannot use our hooks, consider upgrading your component to use Hooks. If you cannot do
that, you'll have to look up the `PopupStack` package for the direct API and have a look at the
source code for our hooks into the `PopupStack` API.

This package comes with everything you need to build Popup UIs.

[Buttons](/components/buttons/button)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

The `Popup` component is a generic
[Compound Component](/getting-started/for-developers/resources/compound-components/) that is used to
build popup UIs that are not already covered by Canvas Kit.

### Basic Example

The Popup has no pre-defined behaviors built in, therefore the `usePopupModel` must always be used
to create a new `model`. This `model` is then used by all behavior hooks to apply additional popup
behaviors to the compound component group. The following example creates a typical popup around a
target element and adds `useCloseOnOutsideClick`, `useCloseOnEscape`, `useInitialFocus`, and
`useReturnFocus` behaviors. You can read through the [hooks](#hooks) section to learn about all the
popup behaviors. For accessibility, these behaviors should be included most of the time.

```tsx
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  return (
    <Popup model={model}>
      <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
      <Popup.Popper placement="top">
        <Popup.Card width={400}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Delete Item</Popup.Heading>
          <Popup.Body>
            <Box as="p" marginY="zero">
              Are you sure you'd like to delete the item titled 'My Item'?
            </Box>
          </Popup.Body>
          <Flex gap="s" padding="xxs">
            <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Popup.CloseButton>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

```

### Initial Focus

If you want focus to move to a specific element when the popup is opened, set the `initialFocusRef`
of the model. Check with accessibility before doing this. The following example sets the focus on
the "OK" button with an `aria-describedby` pointing to the model's `id` state so screen readers
properly announce the message of the popup when focus is changed to the button. By default, focus
will be placed on the first focusable element when the popup is opened.

```tsx
import React from 'react';

import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  Popup,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export const InitialFocus = () => {
  const initialFocusRef = React.useRef(null);
  const model = usePopupModel({
    initialFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target>Send Message</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card width={400}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Confirmation</Popup.Heading>
          <Popup.Body>
            <Box as="p" marginY="zero" id="popup-message">
              Your message has been sent!
            </Box>
          </Popup.Body>
          <Flex gap="s" padding="xxs">
            <Popup.CloseButton ref={initialFocusRef} aria-describedby="popup-message">
              OK
            </Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

```

### Focus Redirect

Focus management is important to accessibility of popup contents. The following example shows
`useFocusRedirect` being used to manage focus in and out of a Popup. This is very useful for
Dialog-style popups. Since `Popup.Popper` renders contents to the bottom of the document body,
`aria-owns` is used for screen readers that support it. This effectively treats a Popup like it
exists in between the buttons while it is opened. Screen readers will navigate the content as if the
content was not portalled to the bottom of the document body. Focus redirection tries to treat the
Popup as if it were inline to the document. Tabbing out of the Popup will close the Popup and move
focus to the next appropriate element.

> **Note**: Safari does not support `aria-owns`. This means that the contents of the Popup will
> appears out of order to Safari + VoiceOver users. We render popups at the bottom of the
> document.body to ensure proper rendering. You could use `portal=false` on the `Popper` component,
> but that would risk incorrect rendering in all browsers.

```tsx
import * as React from 'react';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
  useFocusRedirect,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export const FocusRedirect = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  const popupId = 'popup-test-id';
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible]);

  return (
    <Popup model={model}>
      <Flex gap="s">
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}} />
        <Popup.Popper>
          <Popup.Card width={400}>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" marginY="zero">
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex gap="s" padding="xxs">
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
              {/* Disabled elements should not be focusable and focus should move to the next focusable element */}
              <Popup.CloseButton disabled>Cancel</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};

```

### Focus Trapping

Focus trapping is similar to the [Focus Redirect](#focus-redirect) example, but will trap focus
inside the popup instead of redirecting focus, it will be trapped inside the Popup. This is most
useful for modal dialogs where the modal must be interacted with before normal interaction can
continue.

> **Note**: Using focus trapping outside a Modal context can give users a different experience
> depending on how they interact with your application. Focus trapping will not prevent mouse users
> from breaking out of a focus trap, nor will it prevent screen reader users from using virtual
> cursors from breaking out. Modals should use additional techniques to truely "trap" focus into the
> Popup to provide a consistent experience for all users.

```tsx
import * as React from 'react';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  useReturnFocus,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export const FocusTrap = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  const popupId = 'popup-test-id';
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible]);

  return (
    <Popup model={model}>
      <Flex gap="s">
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}} />
        <Popup.Popper>
          <Popup.Card width={400}>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" marginY="zero">
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex gap="s" padding="xxs">
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};

```

### Multiple Popups

If you need multiple Popups within the same component, you can create multiple models and pass a
unique model to each Popup. Below is an example of 2 different popups within the same component.
Since each Popup gets its own model, each Popup behaves independently. The same technique can be
used for nested Popups.

```tsx
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';

export const MultiplePopups = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);

  useCloseOnOutsideClick(popup2);
  useCloseOnEscape(popup2);

  return (
    <Flex gap="s">
      <Popup model={popup1}>
        <Popup.Target>Open Popup 1</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p>Contents of Popup 1</p>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={popup2}>
        <Popup.Target>Open Popup 2</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 2">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p>Contents of Popup 2</p>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </Flex>
  );
};

```

### Nested Popups

If you need nested Popups within the same component, you can create multiple models and pass a
unique model to each Popup. Popup comes with a `Popup.CloseButton` that uses a `Button` and adds
props via the `usePopupCloseButton` hook to ensure the popups hides and focus is returned. The `as`
can be used in a powerful way to do this by using `<Popup.CloseButton as={Popup.CloseButton}>` which
will mix in click handlers from both popups. This is not very intuitive, however. You can create
props that merge a click handler for both Popups by using `usePopupCloseButton` directly. The second
parameter is props to be merged which will effectively hide both popups. Focus management is
preserved.

```tsx
import * as React from 'react';

import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
  usePopupCloseButton,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const NestedPopups = () => {
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();

  useCloseOnOutsideClick(popup1);
  useCloseOnEscape(popup1);
  useInitialFocus(popup1);
  useReturnFocus(popup1);

  useCloseOnOutsideClick(popup2);
  useCloseOnEscape(popup2);
  useInitialFocus(popup2);
  useReturnFocus(popup2);

  const closeBothProps = usePopupCloseButton(popup1, usePopupCloseButton(popup2));

  return (
    <>
      <Popup model={popup1}>
        <Popup.Target>Open Popup 1</Popup.Target>
        <Popup.Popper>
          <Popup.Card aria-label="Popup 1">
            <Popup.CloseIcon aria-label="Close" size="small" />
            <Popup.Body>
              <p style={{marginTop: 0, marginBottom: 0}}>Contents of Popup 1</p>
            </Popup.Body>
            <Flex gap="s" padding="xxs">
              <Popup model={popup2}>
                <Popup.Target>Open Popup 2</Popup.Target>
                <Popup.Popper>
                  <Popup.Card aria-label="Popup 2">
                    <Popup.CloseIcon aria-label="Close" size="small" />
                    <Popup.Body>
                      <p style={{marginTop: 0, marginBottom: 0}}>Contents of Popup 2</p>
                    </Popup.Body>
                    <Flex gap="s" padding="xxs">
                      <Popup.CloseButton as={Popup.CloseButton} model={popup1}>
                        Close Both (as)
                      </Popup.CloseButton>
                      <SecondaryButton {...closeBothProps}>Close Both (props)</SecondaryButton>
                    </Flex>
                  </Popup.Card>
                </Popup.Popper>
              </Popup>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};

```

### Custom Target

It is common to have a custom target for your popup. Use the `as` prop to use your custom component.
The `Popup.Target` element will add `onClick` and `ref` to the provided component. Your provided
target component must forward the `onClick` to an element for the Popup to open. The `as` will cause
`Popup.Target` to inherit the interface of your custom target component. This means any props your
target requires, `Popup.Target` now also requires. The example below has a `MyTarget` component that
requires a `label` prop.

> **Note**: If your application needs to programmatically open a Popup without the user interacting
> with the target button first, you'll also need to use `React.forwardRef` in your target component.
> Without this, the Popup will open at the top-left of the window instead of around the target.

```tsx
import React from 'react';

import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

interface MyTargetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const MyTarget = React.forwardRef<HTMLButtonElement, MyTargetProps>(({label, ...props}, ref) => {
  return (
    <button {...props} ref={ref}>
      {label}
    </button>
  );
});

export const CustomTarget = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target as={MyTarget} label="Open" />
      <Popup.Popper>
        <Popup.Card>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Popup</Popup.Heading>
          <Popup.Body>Contents</Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

```

### Full Screen API

By default, popups are created as children of the `document.body` element, but the `PopupStack`
supports the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). When
fullscreen is entered, the `PopupStack` will automatically create a new stacking context for all
future popups. Any existing popups will disappear, but not be removed. They disappear because the
fullscreen API is only showing content within the fullscreen element. There are instances where a
popup may not close when fullscreen is exited:

- The escape key is used to exit fullscreen
- There is a button to exit fullscreen, but the popup doesn't use `useCloseOnOutsideClick`

If fullscreen is exited, popups within the fullscreen stacking context are not removed or
transferred automatically. If you do not handle this case, the popup may not render correctly. This
example shows a popup that closes when fullscreen is entered/exited and another popup that transfers
the popup's stack context when entering/exiting fullscreen.

```tsx
import * as React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  useReturnFocus,
  usePopupModel,
  useCloseOnFullscreenExit,
  useTransferOnFullscreenExit,
  useTransferOnFullscreenEnter,
} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useIsFullscreen} from '@workday/canvas-kit-react/common';
import screenfull from 'screenfull';

const SelfClosePopup = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useCloseOnFullscreenExit(model);

  return (
    <Popup model={model}>
      <Popup.Target>Open Self-close Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card width={400} padding="s">
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Self-close Popup</Popup.Heading>
          <Popup.Body>
            <p>
              When in fullscreen, the escape key will be highjacked by the browser to exit
              fullscreen and <code>useCloseOnEscape</code> hook will not receive the escape key. To
              close when fullscreen is exited, use the <code>useCloseOnFullscreenExit</code> hook.
            </p>
          </Popup.Body>
          <Popup.CloseButton>Close</Popup.CloseButton>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const TransferClosePopup = () => {
  const model = usePopupModel();

  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useTransferOnFullscreenEnter(model);
  useTransferOnFullscreenExit(model);

  return (
    <Popup model={model}>
      <Popup.Target>Open Transfer Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card width={400} padding="s">
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Transfer Popup</Popup.Heading>
          <Popup.Body>
            <p>
              When in fullscreen, the escape key will be highjacked by the browser to exit
              fullscreen and <code>useCloseOnEscape</code> hook will not receive the escape key. To
              close when fullscreen is exited, use the <code>useTransferOnFullscreenExit</code>{' '}
              hook.
            </p>
          </Popup.Body>
          <Popup.CloseButton>Close</Popup.CloseButton>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

export const FullScreen = () => {
  // you could make this a hook depending on which fullscreen library your application uses
  const fullscreenElementRef = React.useRef<HTMLDivElement>();
  const isFullscreen = useIsFullscreen();

  const enterFullScreen = () => {
    screenfull.request(fullscreenElementRef.current);
  };

  const exitFullscreen = () => {
    screenfull.exit();
  };

  return (
    <>
      <SecondaryButton onClick={enterFullScreen}>Open Fullscreen</SecondaryButton>
      <Flex
        ref={fullscreenElementRef}
        alignItems="center"
        justifyContent="center"
        background="white"
      >
        <Flex gap="s">
          <SelfClosePopup />
          <TransferClosePopup />
          {isFullscreen ? (
            <SecondaryButton onClick={exitFullscreen}>Exit fullscreen</SecondaryButton>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
};

```

### Opening an External Window

A popup can open an external window. This isn't supported directly. The `Popup.Popper` subcomponent
is replaced with a custom subcomponent that connects to the Popup model and controls the lifecycle
of the extenal window. Be sure to connect the `unload` event of both the parent `window` and the
external child `window` to the lifecycle of the Popup model to prevent memory leaks or zombie
windows.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {infoIcon} from '@workday/canvas-system-icons-web';

import {
  CanvasProvider,
  ContentDirection,
  createSubcomponent,
  PartialEmotionCanvasTheme,
  useMount,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

export interface ExternalWindowPortalProps {
  /**
   * Child components of WindowPortal
   */
  children: React.ReactNode;
  /**
   * Callback to close the popup
   */
  onWindowClose?: () => void;
  /**
   * Width of the popup window
   */
  width?: number;
  /**
   * Height of the popup window
   */
  height?: number;
  /**
   * The name of the popup window. If another popup opens with the same name, that instance will
   * be reused. Use caution with setting this value
   */
  target?: string;
}

async function copyAssets(sourceDoc: Document, targetDoc: Document) {
  for (const font of (sourceDoc as any).fonts.values()) {
    (targetDoc as any).fonts.add(font);

    font.load();
  }

  await (targetDoc as any).fonts.ready;

  // The current ES lib version doesn't include iterable interfaces, so we cast as an iterable
  for (const styleSheet of sourceDoc.styleSheets as StyleSheetList & Iterable<CSSStyleSheet>) {
    if (styleSheet.cssRules) {
      // text based styles
      const styleEl = targetDoc.createElement('style');
      for (const cssRule of styleSheet.cssRules as CSSRuleList & Iterable<CSSRule>) {
        styleEl.appendChild(targetDoc.createTextNode(cssRule.cssText));
      }
      targetDoc.head.appendChild(styleEl);
    } else if (styleSheet.href) {
      // link based styles
      const linkEl = targetDoc.createElement('link');

      linkEl.rel = 'stylesheet';
      linkEl.href = styleSheet.href;
      targetDoc.head.appendChild(linkEl);
    }
  }
}

const ExternalWindowPortal = ({
  children,
  width = 300,
  height = 500,
  target = '',
  onWindowClose,
}: ExternalWindowPortalProps) => {
  const [portalElement, setPortalElement] = React.useState<HTMLDivElement | null>(null);

  useMount(() => {
    const newWindow = window.open(
      '', // url
      target,
      `width=${width},height=${height},left=100,top=100,popup=true`
    );

    if (newWindow) {
      // copy fonts and styles
      copyAssets(document, newWindow.document);

      const element = newWindow.document.createElement('div');
      newWindow.document.body.appendChild(element);
      setPortalElement(element);
    } else {
      onWindowClose();
    }

    const closeWindow = event => {
      onWindowClose();
    };

    window.addEventListener('unload', closeWindow);
    newWindow?.addEventListener('unload', closeWindow);

    return () => {
      window.removeEventListener('unload', closeWindow);
      newWindow?.removeEventListener('unload', closeWindow);
      newWindow?.close();
    };
  });

  if (!portalElement) {
    return null;
  }

  return ReactDOM.createPortal(<CanvasProvider>{children}</CanvasProvider>, portalElement);
};

const PopupExternalWindow = createSubcomponent()({
  displayName: 'Popup.ExternalWindow',
  modelHook: usePopupModel,
})<ExternalWindowPortalProps>(({children, ...elemProps}, Element, model) => {
  if (model.state.visibility === 'visible') {
    return (
      <ExternalWindowPortal onWindowClose={model.events.hide} {...elemProps}>
        {children}
      </ExternalWindowPortal>
    );
  }

  return null;
});

export const ExternalWindow = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing
  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    canvas: {
      // Switch to `ContentDirection.RTL` to change direction
      direction: ContentDirection.LTR,
    },
  });

  const model = usePopupModel();

  return (
    <CanvasProvider theme={canvasTheme}>
      <>
        <main className={mainContentStyles}>
          <p>Popup that opens a new Operating System Window</p>
          <Popup model={model}>
            <Tooltip title="Open External Window Tooltip">
              <Popup.Target>Open External Window</Popup.Target>
            </Tooltip>
            <PopupExternalWindow>
              <p>External Window Contents! Mouse over the info icon to get a tooltip</p>
              <Flex gap="s">
                <Tooltip title="More information">
                  <SecondaryButton icon={infoIcon} />
                </Tooltip>
                <Popup.CloseButton>Close Window</Popup.CloseButton>
              </Flex>
            </PopupExternalWindow>
          </Popup>
          <p>Popup visibility: {model.state.visibility}</p>
        </main>
      </>
    </CanvasProvider>
  );
};

```

### RTL

The Popup component automatically handles right-to-left rendering.

> **Note:** This example shows an inaccessible open card for demonstration purposes.

```tsx
import React from 'react';

import {SecondaryButton, DeleteButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Popup.Card width={400}>
        <Popup.CloseIcon aria-label="סגור" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>
          <Box as="p" marginY="zero">
            האם ברצונך למחוק פריט זה
          </Box>
        </Popup.Body>
        <Flex gap="s" padding="xxs">
          <DeleteButton>לִמְחוֹק</DeleteButton>
          <SecondaryButton>לְבַטֵל</SecondaryButton>
        </Flex>
      </Popup.Card>
    </CanvasProvider>
  );
};

```

## Component API

<>
  <!-- API Reference for Popper not found -->

  <!-- API Reference for Popup not found -->
</>

## Hooks

<>
  <!-- API Reference for usePopupStack not found -->

{' '}

<!-- API Reference for useAssistiveHideSiblings not found -->

{' '}

<!-- API Reference for useBringToTopOnClick not found -->

{' '}

<!-- API Reference for useCloseOnEscape not found -->

{' '}

<!-- API Reference for useCloseOnOutsideClick not found -->

{' '}

<!-- API Reference for useAlwaysCloseOnOutsideClick not found -->

{' '}

<!-- API Reference for useCloseOnTargetHidden not found -->

{' '}

<!-- API Reference for useDisableBodyScroll not found -->

{' '}

<!-- API Reference for useFocusRedirect not found -->

{' '}

<!-- API Reference for useFocusTrap not found -->

{' '}

<!-- API Reference for useInitialFocus not found -->

{' '}

<!-- API Reference for useReturnFocus not found -->

{' '}

<!-- API Reference for useTransferOnFullscreenEnter not found -->

  <!-- API Reference for useTransferOnFullscreenExit not found -->
</>

## Specifications

### Specifications for Popup

<!-- Component specifications from Popup.spec.ts -->
