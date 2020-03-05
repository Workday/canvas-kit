import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react-core';
import TextInput from '@workday/canvas-kit-react-text-input';
import React from 'react';
import uuid from 'uuid/v4';

interface GoToProps {
  /** Will be called when the user submits the form. In this case, it is when the enter key is pressed */
  onSubmit: (page: number) => void;
  /** Max number of pages we could go to */
  max: number;
  /** Label for the "Go To" input */
  label?: string;
}
const StyledLabel = styled('label')({
  margin: 'auto 0',
  paddingRight: '8px',
  ...type.body,
  ...type.variant.label,
});

const GoToWrapper = styled('div')({
  display: 'flex',
  paddingLeft: '12px',
});

const StyledForm = styled('form')({
  minWidth: '10px',
});

const GoTo = ({onSubmit, max, label = 'Go To'}: GoToProps) => {
  const [value, setValue] = React.useState('');
  const [goToId] = React.useState(() => uuid()); // https://codesandbox.io/s/p2ndq

  const validatePage = (text: string) => {
    const textAsInteger = parseInt(text, 10);
    if (textAsInteger < 1) {
      return 0;
    }
    if (textAsInteger > max) {
      return 0;
    }
    return textAsInteger;
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    const page = validatePage(value);
    if (page) {
      onSubmit(page);
    }
  };
  return (
    <GoToWrapper>
      <StyledLabel htmlFor={goToId}>{label}</StyledLabel>
      <StyledForm onSubmit={formSubmit}>
        <TextInput
          width={53}
          height={32}
          min={1}
          max={max}
          value={value}
          id={goToId}
          type="number"
          onChange={e => {
            setValue(e.target.value);
          }}
        />
      </StyledForm>
    </GoToWrapper>
  );
};

export default GoTo;
