import * as React from 'react';
import styled from '@emotion/styled';
import {colors} from '@workday/canvas-kit-react-core';

export interface SliderProps {
  max: number;
  min: number;
  startValue: number;
  step?: number;
  useInputRange?: boolean;

  onChange?: (newValue: number) => void;
  onSliderStartDrag?: (newValue: number) => void;
  onKeyDown?: (newValue: number) => void;
  onKeyUp?: (newValue: number) => void;
  onSliderEndDrag?: (newValue: number) => void;
}

const Container = styled('div')({
  position: 'relative',
  width: '328px',
  height: '32px',
  margin: '0 !important',
});

const Interval = styled('div')({
  fontSize: 'small',
  color: colors.licorice300,
  padding: '8px',
});

const SliderInput = styled('input')({
  position: 'absolute',
  outline: 'none',
  padding: 0,
  margin: 0,
  border: 'none',
  width: '328px',
  zIndex: 1,
  height: '100%',
  cursor: 'pointer',

  // webkit
  '::-webkit-slider-runnable-track': {
    width: '100%',
    height: '8px',
  },
  '::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    background: colors.blueberry400,
    border: 'none',
  },
  // firefox
  '::-moz-range-track': {
    width: '100%',
    height: '4px',
    background: colors.soap300,
    borderRadius: '100px',
    overflow: 'hidden',
    border: 'none',
  },
  '::-moz-focus-outer': {
    border: '0',
  },
  '::-moz-range-progress': {
    background: colors.blueberry400,
    height: '4px',
    borderRadius: '100px',
  },
  '::-moz-range-thumb': {
    background: colors.blueberry400,
    border: 'none',
    borderRadius: '50%',
    height: '16px',
    width: '16px',
  },
  // IE
  '::-ms-thumb': {
    background: colors.blueberry400,
    border: 'none',
  },
});

const ProgressBarContainer = styled('div')({
  position: 'absolute',
  height: '8px',
  top: '50%',
  width: '100%',
  transform: 'translateY(-50%)',
});

const ProgressBar = styled('progress')(
  {},
  {
    width: '100%',
    height: 8,
    overflow: 'hidden',
    display: 'block',
    border: 'none',
    appearance: 'none',
    borderRadius: '100px',
  }
);

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '0 !important', // delete later, getting from storybook
});

const InputValueBox = styled('input')({
  width: '57px',
  height: '40px',
  border: '1px solid ' + colors.licorice100,
  borderRadius: '4px',
  fontsize: '14px',
  lineHeight: '20px',
  textIndent: '4px',
});

export const Slider: React.FC<SliderProps> = ({
  max,
  min,
  step,
  useInputRange,
  onSliderStartDrag,
  onSliderEndDrag,
  onChange,
  onKeyDown,
  onKeyUp,
  startValue,
}) => {
  const [value, setValue] = React.useState(startValue);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const onSliderDragStart = () => {
    if (onSliderStartDrag) {
      onSliderStartDrag(value);
    }
  };

  const onSliderDragEnd = () => {
    if (onSliderEndDrag) {
      onSliderEndDrag(value);
    }
  };

  const onKeyDownHandler = (event: React.ChangeEvent<any>): void => {
    const value = Number(event.target.value);
    setValue(value);
    if (onKeyDown) {
      onKeyDown(value);
    }
  };

  const onKeyUpHandler = (event: React.ChangeEvent<any>) => {
    const value = Number(event.target.value);
    if (onKeyUp) {
      onKeyUp(value);
    }
  };

  return (
    <Wrapper>
      <Interval>{min}</Interval>
      <Container>
        <SliderInput
          type="range"
          max={max}
          min={min}
          step={step}
          value={value}
          onChange={onChangeHandler}
          onMouseDown={onSliderDragStart}
          onKeyDown={onKeyDownHandler}
          onKeyUp={onKeyUpHandler}
          onMouseUp={onSliderDragEnd}
        />
        <ProgressBarContainer>
          <ProgressBar />
        </ProgressBarContainer>
      </Container>
      <Interval>{max}</Interval>
      {useInputRange && (
        <InputValueBox type="text" min={min} max={max} value={value} onChange={onChangeHandler} />
      )}
    </Wrapper>
  );
};
