import React from 'react';

import {xSmallIcon, mailIcon} from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {dispatchInputEvent, styled} from '@workday/canvas-kit-react/common';

// create a prop forwarding component for FormField to forward to
const InputGroupFormFieldForwarder = (props: {}) => {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <InputGroup width={280}>
      <InputGroup.Start pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.Start>
      <InputGroup.Start pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.Start>
      <InputGroup.Input ref={inputRef} onChange={handleChange} {...props} />
      <InputGroup.End pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.End>
      <InputGroup.End>
        <TertiaryButton
          role="presentation"
          icon={xSmallIcon}
          size="small"
          tabIndex={-1}
          transition="opacity 300ms ease"
          style={{opacity: value ? 1 : 1}} // Use style attribute to avoid the cost of Emotion's styling solution that causes the browser to throw away style cache. The difference can be significant for large amount of elements (could be a 80ms difference)
          onMouseDown={event => {
            event.preventDefault(); // prevent a focus change
          }}
          onClick={event => {
            dispatchInputEvent(inputRef.current, '');
          }}
        />
      </InputGroup.End>
    </InputGroup>
  );
};

const InputGroupFormFieldForwarder2 = (props: {}) => {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <InputGroup width={280}>
      <InputGroup.Start pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.Start>
      <InputGroup.Input ref={inputRef} onChange={handleChange} {...props} />
      <InputGroup.End>
        <TertiaryButton
          role="presentation"
          icon={xSmallIcon}
          size="small"
          tabIndex={-1}
          transition="opacity 300ms ease"
          opacity={value ? 1 : 1}
          onMouseDown={event => {
            event.preventDefault(); // prevent a focus change
          }}
          onClick={event => {
            dispatchInputEvent(inputRef.current, '');
          }}
        />
      </InputGroup.End>
    </InputGroup>
  );
};

const CustomButton = styled(TertiaryButton)({
  opacity: 0,
  '[data-has-value] &': {
    opacity: 1,
  },
});

const InputGroupFormFieldForwarder3 = (props: {}) => {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <InputGroup width={280}>
      <InputGroup.Start pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.Start>
      <InputGroup.Input ref={inputRef} onChange={handleChange} {...props} />
      <InputGroup.End data-has-value={value ? true : true}>
        <CustomButton
          role="presentation"
          icon={xSmallIcon}
          size="small"
          tabIndex={-1}
          transition="opacity 300ms ease"
          onMouseDown={event => {
            event.preventDefault(); // prevent a focus change
          }}
          onClick={event => {
            dispatchInputEvent(inputRef.current, '');
          }}
        />
      </InputGroup.End>
    </InputGroup>
  );
};

export const Icons = () => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <FormField label="Email">
        <InputGroupFormFieldForwarder />
      </FormField>
      {show && (
        <FormField label="Email2">
          <InputGroupFormFieldForwarder2 />
        </FormField>
      )}
      <FormField label="Email3">
        <InputGroupFormFieldForwarder3 />
      </FormField>
      <button onClick={() => setShow(false)}>Hide Emotion button</button>
    </>
  );
};
