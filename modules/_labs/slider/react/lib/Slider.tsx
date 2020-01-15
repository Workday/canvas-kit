import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';

import styled from '@emotion/styled';

export interface SliderProps {
  max: number;
  min: number;
  startValue: number;
  step?: number;
  useInputRange?: boolean;

  onChange?: (newValue: number) => void;
  onStartDrag?: (newValue: number) => void;
  onKeyDown?: (newValue: number) => void;
  onKeyUp?: (newValue: number) => void;
  onEndDrag?: (newValue: number) => void;
}

const Container = styled('div')({
  position: 'relative',
  width: '328px',
  minWidth: '200px',
  height: '32px',
  // margin: '0 !important',
  // zIndex: 1,
});

const Interval = styled('div')({
  fontSize: 'small',
  color: colors.licorice300,
  padding: '8px',
});

const SliderInput = styled('input')({
  // position: 'relative',
  outline: 'none',
  padding: 0,
  margin: 0,
  border: 'none',
  width: '328px',
  minWidth: '200px',
  height: '100%',
  cursor: 'pointer',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  // zIndex: 0,
  background: 'transparent',
  position: 'absolute',
  zIndex: 1,
  // webkit
  '::-webkit-slider-runnable-track': {
    // width: '100%',
    height: '5px',
    borderRadius: '100px',
    // background: colors.soap300,
    background: 'transparent',
    boxSizing: 'border-box',
    color: colors.blueberry400,
  },
  '::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    background: colors.blueberry400,
    boxShadow: `0 8px 16px 0 hsla(82, 97%, 11%, 0.18)`,
    border: 'none',
    outline: 'none',
    borderRadius: '50%',
    height: '16px',
    width: '16px',
    marginTop: '-6px', // alignment fix for chrome
    position: 'relative',
    zIndex: 100,
    '&:focus, &:active': {
      background: colors.blueberry400,
      boxShadow: `0 0 0 2px ${colors.frenchVanilla100}, 0 0 0 4px ${colors.blueberry400}`,
    },
  },
  // firefox
  '::-moz-range-track': {
    // background: colors.soap300,
    background: 'transparent',
    height: '5px',
    // position: 'relative',
    zIndex: -1,
  },
  '::-moz-focus-outer': {
    border: '0',
  },
  '::-moz-range-progress': {
    background: colors.blueberry400,
    borderRadius: '100px',
    height: '5px',
    // position: 'relative',
    zIndex: -1,
  },
  '::-moz-range-thumb': {
    background: colors.blueberry400,
    border: 'none',
    borderRadius: '50%',
    height: '16px',
    width: '16px',
    position: 'absolute',
    zIndex: 50000,
    '&:focus, &:active': {
      background: colors.blueberry400,
      boxShadow: `0 0 0 2px ${colors.frenchVanilla100}, 0 0 0 4px ${colors.blueberry400}`,
    },
  },
  // IE
  '::-ms-thumb': {
    background: colors.blueberry400,
    border: 'none',
    zIndex: 5,
    position: 'relative',
  },
  '::-ms-fill-lower': {
    background: colors.blueberry400,
  },
  ':invalid': {
    boxShadow: 'none',
  },
});

const ProgressBarContainer = styled('div')({
  position: 'absolute',
  height: '5px',
  top: '50%',
  width: '100%',
  transform: 'translateY(-50%)',
  zIndex: -1, // for firefox
});

const ProgressBar = styled('progress')<{value: number; max: number}>({
  appearance: 'none',
  width: '328px',
  minWidth: '200px',
  height: '5px',
  overflow: 'hidden',
  display: 'block',
  border: 'none',
  borderRadius: '100px',
  '::-moz-progress-bar': {
    background: colors.blueberry400,
    borderRadius: '100px',
    // position: 'relative',
    // zIndex: -1,
  },
  '::-webkit-progress-value': {
    background: colors.blueberry400,
    borderRadius: '100px',
    transition: 'none',
    // position: 'relative',
    // zIndex: -1,
  },
  '::-webkit-progress-bar': {
    background: colors.soap300,
    // zIndex: -1,
  },
  '::-ms-fill': {
    border: 'none',
    background: colors.blueberry400,
    borderRadius: '100px',
  },
});

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '0 !important', // delete later, getting from storybook
});

const InputValueBox = styled('input')({
  width: '48px',
  height: '40px',
  border: `1px solid ${colors.licorice100}`,
  borderRadius: '4px',
  fontsize: '14px',
  lineHeight: '20px',
  textIndent: '4px',
});

const valueToPercent = (max: number, min: number, value: number): number => {
  const percent = ((value - min) * 100) / (max - min);
  const minPercent = 0;
  const maxPercent = 100;
  const outMin = 1;
  const outMax = 99;
  return ((percent - minPercent) * (outMax - outMin)) / (maxPercent - minPercent) + outMin;
};

export const Slider: React.FC<SliderProps> = ({
  max,
  min,
  step,
  useInputRange,
  onStartDrag,
  onEndDrag,
  onChange,
  onKeyDown,
  onKeyUp,
  startValue,
}) => {
  const [value, setValue] = React.useState(startValue);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const onSliderDragStart = () => {
    if (onStartDrag) {
      onStartDrag(value);
    }
  };

  const onSliderDragEnd = () => {
    if (onEndDrag) {
      onEndDrag(value);
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
          ref={inputRef}
          aria-valuemax={max}
          max={max}
          aria-valuemin={min}
          min={min}
          step={step}
          aria-valuenow={value}
          value={value}
          onChange={onChangeHandler}
          onMouseDown={onSliderDragStart}
          onKeyDown={onKeyDownHandler}
          onKeyUp={onKeyUpHandler}
          onMouseUp={onSliderDragEnd}
        />
        <ProgressBarContainer>
          <ProgressBar value={valueToPercent(max, min, value)} max={100} />
        </ProgressBarContainer>
      </Container>
      <Interval>{max}</Interval>
      {useInputRange && (
        <InputValueBox type="text" min={min} max={max} value={value} onChange={onChangeHandler} />
      )}
    </Wrapper>
  );
};
