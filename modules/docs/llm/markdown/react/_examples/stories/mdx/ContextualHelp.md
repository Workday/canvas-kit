---
source_file: react/_examples/stories/mdx/ContextualHelp.mdx
live_url: https://workday.github.io/canvas-kit/react/_examples/stories/mdx/ContextualHelp
---

<Meta title="Guides/Accessibility/Examples/Contextual Help" />

## Contextual Help

### Tooltip
A Canvas Kit `Tooltip` can be used to provide additional information about why an element is disabled.
We should not, however, put one directly onto a disabled element because disabled elements do not receive focus
(meaning the tooltip content is not accessible to keyboard users). Instead, we should provide a button next to the disabled
element and apply the `Tooltip` to the button.

**Note: We should avoid passing the `type` prop to the `Tooltip`. The default behavior is to assign an `aria-label` to the button
(which is what we want)**
```tsx
import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import React from 'react';

const outerContainerStyles = createStyles({
  flexDirection: 'column',
});

const buttonContainerStyles = createStyles({
  flexDirection: 'row',
  gap: system.space.x1,
  alignItems: 'center',
});

export function ContextualHelpTooltip() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex className={outerContainerStyles}>
      <FormField isRequired>
        <FormField.Label>Favorite Food</FormField.Label>
        <FormField.Input as={TextInput} onChange={handleChange}></FormField.Input>
      </FormField>
      <Flex className={buttonContainerStyles}>
        <PrimaryButton disabled={!value}>Submit</PrimaryButton>
        <Tooltip title="All fields must be filled before submitting" placement="right">
          <TertiaryButton icon={infoIcon} size="small" aria-label="Info" disabled={!!value} />
        </Tooltip>
      </Flex>
    </Flex>
  );
}

```

### Contextual Help Popup Without Focus Trap
If one would like to provide a bit more content than a `Tooltip` will allow (such as buttons or links) a popup should be used.
In this example, a `Dialog` is used in conjunction with the `useFocusRedirect` hook to display some text and a link. It will
not trap focus; instead, it will close and focus the next element if the user tabs out or clicks away. A `Tooltip` is still
used on the `Dialog.Target` component so that it remains accessible for screen readers.

`Dialog` inserts an invisible `<div>` element right after the button with an `aria-owns` attribute pointing to the
`Dialog.Card`. This allows screen readers to read the popup contents in a logical order with the target. In other words, the
screen reader will announce the `Dialog` right after the open button instead of out of order.

Additionally, we apply `aria-describedby` to our `Dialog.Target` to associate it with the `FormField.Label`.
```tsx
import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {useUniqueId} from '@workday/canvas-kit-react/common';

const containerStyles = createStyles({
  flexDirection: 'row',
  gap: system.space.x2,
});

const labelStyles = createStyles({
  minWidth: 'unset',
  width: '100%',
});

export function ContextualHelpDialogFocusRedirect() {
  const dialogModel = useDialogModel();
  useCloseOnOutsideClick(dialogModel);
  useCloseOnEscape(dialogModel);
  useInitialFocus(dialogModel);
  useFocusRedirect(dialogModel);
  useReturnFocus(dialogModel);

  const labelId = useUniqueId();

  return (
    <Flex>
      <FormField>
        <Flex className={containerStyles}>
          <FormField.Label className={labelStyles} id={labelId}>
            Country
          </FormField.Label>
          <Dialog model={dialogModel}>
            <Tooltip title="More Info">
              <Dialog.Target
                as={TertiaryButton}
                size="small"
                icon={infoIcon}
                aria-describedby={labelId}
              />
            </Tooltip>
            <Dialog.Popper placement="right">
              <Dialog.Card>
                <Dialog.CloseIcon aria-label="Close" />
                <Dialog.Heading paddingTop={system.space.x6}>Information</Dialog.Heading>
                <Dialog.Body>
                  This dialog does not trap focus, so tabbing out of it will cause it to close
                </Dialog.Body>
                <Flex gap={system.space.x4} padding={system.space.x2} marginTop={system.space.x2}>
                  <Hyperlink href="/">Link</Hyperlink>
                </Flex>
              </Dialog.Card>
            </Dialog.Popper>
          </Dialog>
        </Flex>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
}

```

### Contextual Help Dialog With Focus Trap
The `useFocusTrap` hook can be used in contextual help where trapping focus within the `Dialog` is the goal. In this case,
focus will remain in the `Dialog` until it is closed. This example is otherwise identical to the one above.
```tsx
import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {useUniqueId} from '@workday/canvas-kit-react/common';

const containerStyles = createStyles({
  flexDirection: 'row',
  gap: system.space.x2,
});

const labelStyles = createStyles({
  minWidth: 'unset',
  width: '100%',
});

export function ContextualHelpDialogFocusTrap() {
  const dialogModel = usePopupModel();
  useCloseOnOutsideClick(dialogModel);
  useCloseOnEscape(dialogModel);
  useInitialFocus(dialogModel);
  useFocusTrap(dialogModel);
  useReturnFocus(dialogModel);

  const labelId = useUniqueId();

  return (
    <Flex>
      <FormField>
        <Flex className={containerStyles}>
          <FormField.Label className={labelStyles} id={labelId}>
            Name
          </FormField.Label>
          <Dialog model={dialogModel}>
            <Tooltip title="More Info">
              <Dialog.Target
                as={TertiaryButton}
                size="small"
                icon={infoIcon}
                aria-describedby={labelId}
              />
            </Tooltip>
            <Dialog.Popper placement="right">
              <Dialog.Card>
                <Dialog.CloseIcon aria-label="Close" />
                <Dialog.Heading paddingTop={system.space.x6}>Information</Dialog.Heading>
                <Dialog.Body>
                  This dialog traps focus. Focus will only return to the rest of the page when the
                  dialog is closed
                </Dialog.Body>
                <Flex gap={system.space.x4} padding={system.space.x2} marginTop={system.space.x2}>
                  <Hyperlink href="/">Link</Hyperlink>
                </Flex>
              </Dialog.Card>
            </Dialog.Popper>
          </Dialog>
        </Flex>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
}

```