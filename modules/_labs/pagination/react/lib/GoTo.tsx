import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react-core';
import TextInput from '@workday/canvas-kit-react-text-input';
import React from 'react';
import uuid from 'uuid/v4';

interface GoToProps {
  onSubmit: (page: number) => void;
  max: number;
  goToLabel?: string;
}
const GoToLabel = styled('label')({
  margin: 'auto 0',
  paddingRight: '8px',
  ...type.body,
  ...type.variant.label,
});

const GoToWrapper = styled('div')({
  display: 'flex',
  paddingLeft: '12px',
});

const InputWrapper = styled('form')({
  minWidth: '10px',
});

const GoTo: React.FC<GoToProps> = props => {
  const {onSubmit, max, goToLabel} = props;
  const [value, setValue] = React.useState('');

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

  const goToId = uuid();
  const formSubmit = (e: any) => {
    e.preventDefault();
    const page = validatePage(value);
    if (page) {
      onSubmit(page);
    }
  };
  return (
    <GoToWrapper>
      <GoToLabel htmlFor={goToId}>{goToLabel || 'Go To'}</GoToLabel>
      <InputWrapper onSubmit={formSubmit}>
        <TextInput
          data-testid="goToPage"
          width={53}
          height={32}
          min={1}
          max={max}
          value={value}
          id={goToId}
          type="number"
          onChange={(e: any) => {
            setValue(e.target.value);
          }}
        />
      </InputWrapper>
    </GoToWrapper>
  );
};

export default GoTo;
