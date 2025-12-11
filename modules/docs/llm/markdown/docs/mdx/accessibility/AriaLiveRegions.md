---
source_file: docs/mdx/accessibility/AriaLiveRegions.mdx
live_url: https://workday.github.io/canvas-kit/docs/mdx/accessibility/AriaLiveRegions
---

<Meta title="Guides/Accessibility/ARIA Live Regions" component={AriaLiveRegion} />

# ARIA Live Regions

These examples are provided to demonstrate a variety of different use cases for the `AriaLiveRegion`
component. For the full experience, get started by first turning on your favorite screen reading
software. On Windows, we recommend the open source
[NVDA (Non-Visual Desktop Access)](https://www.nvaccess.org/download/) software, or
[JAWS (Job Access With Speech)](https://support.freedomscientific.com/Downloads/JAWS) if you have
purchased a license. MacOS and iOS include VoiceOver, which can be turned on in your settings.

Live regions work by designating specific DOM nodes for screen readers to monitor for any content
updates inside the node. When an update occurs, screen readers will announce the update to users in
real time, based on a few rules:

1. `polite` will “politely” wait for users to finish what they are doing before announcing an update
2. `assertive` will interrupt what users are doing (or reading) by immediately announcing an update

### CAUTION: Don't get carried away

Key things to understand about live regions:

1. A live region update will only be announced once. Users are unable to repeat them or re-examine
   them if the announcement was not understood.
2. Users may be able to pause a live region announcement, but they cannot prevent a live region
   announcement from occurring. Sending frequent, repetitive, or simply too much information to a
   live region can be very disruptive to users.
3. Users cannot act on, or navigate to, a live region. Live regions must only contain plain text.
   (No images, links, buttons, or other input.)
4. Support for live regions is limited across platforms, browsers, and screen reader software. Real
   time announcements may not be perfectly reliable.

## Visible Live Regions

Live regions can be applied to dynamic text on the UI. When the dynamic text is updated, screen
readers can describe the text update in live time as it occurs. In the example below, type text into
the input field and activate the "Send Message" button. Listen and observe the screen reader
automatically announce the text update.

```tsx
import React from 'react';

import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem, calc} from '@workday/canvas-kit-styling';

const liveRegionStyle = createStyles({
  border: `${px2rem(1)} solid ${system.color.border.caution.strong}`,
  backgroundColor: system.color.bg.caution.softer,
  padding: system.space.x4,
  display: 'block',
  marginBlockStart: system.space.x4,
  marginBlockEnd: system.space.x4,
  width: calc.multiply(system.space.x16, 7),
});

const flexGapStyles = createStyles({
  gap: system.space.x4,
  alignItems: 'center',
});

let liveRegionStr = 'This is an ARIA Live Region!';

export const VisibleLiveRegion = () => {
  const [message, setMessage] = React.useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    liveRegionStr = message;
    setMessage('');
  }

  return (
    <>
      <AriaLiveRegion>
        <Text cs={liveRegionStyle}>{liveRegionStr}</Text>
      </AriaLiveRegion>
      <Flex
        as="form"
        aria-label="Visible Live Region"
        onSubmit={handleSendMessage}
        cs={flexGapStyles}
      >
        <FormField>
          <FormField.Label>Type your message:</FormField.Label>
          <FormField.Input as={TextInput} onChange={handleChange} value={message} />
        </FormField>
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </Flex>
    </>
  );
};

```

## Hidden Live Regions

Live regions don't need to be visible UI text, they can be used to assist the non-visual listening
experience when moving the keyboard focus to a new element on screen isn't feasible.

```tsx
import React from 'react';

import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

let liveRegionStr = '';

const flexStyles = createStyles({
  gap: system.space.x4,
  alignItems: 'center',
});

export const HiddenLiveRegion = () => {
  const [message, setMessage] = React.useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    liveRegionStr = message;
    setMessage('');
  }

  return (
    <>
      <Flex as="form" aria-label="Hidden Live Region" onSubmit={handleSendMessage} cs={flexStyles}>
        <FormField>
          <FormField.Label>Type your message:</FormField.Label>
          <FormField.Input as={TextInput} onChange={handleChange} value={message} />
        </FormField>
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </Flex>
      <AriaLiveRegion>
        <Text as={AccessibleHide}>{liveRegionStr}</Text>
      </AriaLiveRegion>
    </>
  );
};

```

## Filtering lists with a live status

In this example, a live region is applied to a short UI text describing the number of items shown in
the list. As you type characters into the input, listen for the screen reader to automatically
describe how many items in the list are shown.

```tsx
import React from 'react';

import {AriaLiveRegion} from '@workday/canvas-kit-react/common';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {Flex} from '@workday/canvas-kit-react/layout';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const fruits = [
  'Apples',
  'Oranges',
  'Bananas',
  'Lemons',
  'Limes',
  'Strawberries',
  'Raspberries',
  'Blackberries',
];

const liveRegionStyle = createStyles({
  border: `${px2rem(1)} solid ${system.color.border.caution.strong}`,
  backgroundColor: system.color.bg.caution.softer,
  padding: system.space.x2,
});

const listStyles = createStyles({
  paddingLeft: system.space.zero,
});

const listItemStyles = createStyles({
  listStyle: 'none',
  paddingLeft: system.space.zero,
});

const flexStyles = createStyles({
  gap: system.space.x4,
});

let filteredFruits = fruits;

export const FilterListWithLiveStatus = () => {
  const [filter, setFilter] = React.useState('');
  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    filteredFruits = fruits.filter(i => i.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0);
    setFilter(e.target.value);
  }

  return (
    <>
      <Flex cs={flexStyles}>
        <Heading size="small">Fruits</Heading>
        <AriaLiveRegion>
          <BodyText size="small" cs={liveRegionStyle}>
            {`Showing ${filteredFruits.length} of ${fruits.length}`}
          </BodyText>
        </AriaLiveRegion>
      </Flex>
      <FormField>
        <FormField.Label>Filter Items:</FormField.Label>
        <FormField.Input as={TextInput} value={filter} onChange={handleFilter} />
      </FormField>
      <ul className={listStyles}>
        {filteredFruits.map(i => (
          <BodyText size="small" as="li" cs={listItemStyles} key={i}>
            {i}
          </BodyText>
        ))}
      </ul>
    </>
  );
};

```

## Text input with live inline error

In this example, a live region is applied to the inline error message that will appear below the
text input. Listen for the screen reader to automatically describe the error message as you leave
the input field blank.

**Note:** Use this example with discretion. Using live regions for automatically announcing form
errors to screen reader users can be a nice experience for simple forms with a very limited number
of error conditions. As forms increase in complexity, live regions on each error message can become
increasingly distracting and disruptive to the experience, especially if users are trying to first
understand the information that is required of them to complete the task.

**Note:** The `<AriaLiveRegion>` component is used inside of the `Hint` to ensure the live region
remains in the browser DOM at all times. The `Hint` is only rendered in the DOM when it contains
content, so it will not work reliably as a live region for screen readers using the
`as={AriaLiveRegion}` prop.

```tsx
import React from 'react';
import {AriaLiveRegion, changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const hintStyles = createStyles({
  height: system.space.x6,
});
export const TextInputWithLiveError = () => {
  const errMsg = 'Error: First name is required.';
  const [hasError, setHasError] = React.useState('no');
  const inputRef = React.useRef(null);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    setHasError(e.target.value.trim().length === 0 ? 'error' : 'no');
  const handleSubmit = () => hasError && changeFocus(inputRef.current);

  return (
    <>
      <FormField error={hasError === 'error' ? 'error' : undefined} isRequired={true}>
        <FormField.Label>First Name:</FormField.Label>
        <FormField.Input as={TextInput} onBlur={handleBlur} ref={inputRef} />
        <FormField.Hint cs={hintStyles}>
          <AriaLiveRegion>{hasError === 'error' && errMsg}</AriaLiveRegion>
        </FormField.Hint>
      </FormField>
      <PrimaryButton onClick={handleSubmit}>Continue</PrimaryButton>
    </>
  );
};

```
