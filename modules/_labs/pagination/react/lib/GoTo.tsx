import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react-core';
import TextInput from '@workday/canvas-kit-react-text-input';
import React from 'react';

const GoToLabel = styled('div')({
  margin: 'auto',
  paddingRight: '8px',
  ...type.body,
  ...type.variant.label,
});

const GoToWrapper = styled('div')({
  display: 'flex',
  paddingLeft: '1px',
});

const InputWrapper = styled('div')({
  minWidth: '10px',
  maxWidth: '45px',
});

const GoTo: React.FC<{
  onSubmit: (page: number, e: React.SyntheticEvent) => void;
  max: number;
}> = props => {
  const {onSubmit, max} = props;
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
  return (
    <>
      <GoToWrapper>
        <GoToLabel>Go To</GoToLabel>
        <InputWrapper>
          <TextInput
            data-testid="goToPage"
            width={53}
            height={32}
            min={1}
            max={max}
            value={value}
            type="number"
            onChange={e => {
              setValue(e.target.value);
            }}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                const page = validatePage(value);
                if (page) {
                  onSubmit(page, e);
                }
              }
            }}
          />
        </InputWrapper>
      </GoToWrapper>
    </>
  );
};

export default GoTo;
