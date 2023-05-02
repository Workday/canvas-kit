import React from 'react';

import {xSmallIcon, mailIcon} from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createComponent, dispatchInputEvent} from '@workday/canvas-kit-react/common';

export const Icons = () => {
  return (
    <FormField label="Email">
      <InputGroupFormFieldForwarder />
    </FormField>
  );
};

// create a prop forwarding component for FormField to forward to
const InputGroupFormFieldForwarder = (props: {}) => {
  const inputRef = React.useRef(null);
  const [inputHasValue, setInputHasValue] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputHasValue(!!event.currentTarget.value);
  };

  return (
    <InputGroup width={280}>
      <InputGroup.InnerStart pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.InnerStart>
      <InputGroup.Input ref={inputRef} onChange={handleChange} {...props} />
      <InputGroup.InnerEnd>
        <ClearInputButton inputRef={inputRef} inputHasValue={inputHasValue} />
      </InputGroup.InnerEnd>
    </InputGroup>
  );
};

/**
 * A clear input button. This can be a component later.
 */
const ClearInputButton = createComponent(TertiaryButton)({
  Component(
    {
      inputRef,
      inputHasValue,
      ...elemProps
    }: {inputRef: React.RefObject<HTMLInputElement>; inputHasValue: boolean},
    ref,
    Element
  ) {
    return (
      <Element
        ref={ref}
        // This element does not need to be accessible via screen reader. The user can already clear
        // an input
        role="presentation"
        icon={xSmallIcon}
        // "small" is needed to render correctly within a `TextInput`
        size="small"
        // A clear input button doesn't need focus. There's already keyboard keys to clear an input
        tabIndex={-1}
        transition="opacity 300ms ease"
        // Use style attribute to avoid the cost of Emotion's styling solution that causes the
        // browser to throw away style cache. The difference can be significant for large amount of
        // elements (could be a 80ms difference)
        style={{
          opacity: inputHasValue ? 1 : 0,
          pointerEvents: inputHasValue ? 'auto' : 'none',
        }}
        {...elemProps}
        onMouseDown={event => {
          event.preventDefault(); // prevent a focus change to the button. Focus should stay in the input
        }}
        onClick={_ => {
          dispatchInputEvent(inputRef.current, '');
        }}
      />
    );
  },
});
