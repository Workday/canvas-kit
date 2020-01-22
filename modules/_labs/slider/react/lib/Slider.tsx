import * as React from 'react';
import {
  borderRadius,
  colors,
  spacingNumbers as spacing,
  type,
} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';

import styled from '@emotion/styled';

export interface SliderProps {
  max: number;
  min: number;
  startValue: number;
  step?: number;
  showTextInput?: boolean;
  id?: string;

  onChange?: (newValue: number) => void;
  onDragStart?: (newValue: number) => void;
  onEndDrag?: (newValue: number) => void;
}

const sliderContainerHeight = spacing.l;
const sliderContainerWidth = 328;
const sliderContainerMinWidth = 200;
const sliderTrackRadius = 100;
const sliderTrackHeight = 5;
const sliderThumbHeight = spacing.s;
const sliderThumbWidth = spacing.s;

const Container = styled('div')({
  position: 'relative',
  width: sliderContainerWidth,
  minWidth: sliderContainerMinWidth,
  height: sliderContainerHeight,
});

const Interval = styled('div')({
  fontSize: 'small',
  color: colors.licorice300,
  padding: spacing.xxs,
});

const SliderInput = styled('input')({
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  position: 'absolute',
  outline: 'none',
  padding: 0,
  margin: 0,
  border: 'none',
  width: sliderContainerWidth,
  minWidth: sliderContainerMinWidth,
  height: '100%',
  cursor: 'pointer',
  background: 'transparent',
  // webkit
  '::-webkit-slider-runnable-track': {
    height: sliderTrackHeight,
    borderRadius: sliderTrackRadius,
    background: 'transparent',
    boxSizing: 'border-box',
    color: colors.blueberry400,
  },
  '::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    background: colors.blueberry400,
    border: 'none',
    outline: 'none',
    borderRadius: borderRadius.circle,
    height: sliderThumbHeight,
    width: sliderThumbWidth,
    marginTop: '-6px', // alignment fix for chrome
    position: 'relative',
    '&:focus, &:active': {
      ...focusRing(2, 2),
    },
  },
  // firefox
  '::-moz-range-track': {
    background: 'transparent',
    height: sliderTrackHeight,
  },
  '::-moz-focus-outer': {
    border: '0',
  },
  '::-moz-range-progress': {
    background: colors.blueberry400,
    borderRadius: sliderTrackRadius,
    height: sliderTrackHeight,
  },
  '::-moz-range-thumb': {
    background: colors.blueberry400,
    border: 'none',
    borderRadius: borderRadius.circle,
    height: sliderThumbHeight,
    width: sliderThumbWidth,
    position: 'absolute',
    '&:focus, &:active': {
      ...focusRing(2, 2),
    },
  },
  // IE
  '::-ms-thumb': {
    background: colors.blueberry400,
    border: 'none',
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
  height: sliderTrackHeight,
  top: '50%',
  width: '100%',
  transform: 'translateY(-50%)',
});

const ProgressBar = styled('progress')({
  appearance: 'none',
  width: sliderContainerWidth,
  minWidth: sliderContainerMinWidth,
  height: sliderTrackHeight,
  overflow: 'hidden',
  display: 'block',
  border: 'none',
  borderRadius: sliderTrackRadius,
  '::-moz-progress-bar': {
    background: colors.blueberry400,
    borderRadius: sliderTrackRadius,
  },
  '::-webkit-progress-value': {
    background: colors.blueberry400,
    borderRadius: sliderTrackRadius,
    transition: 'none',
  },
  '::-webkit-progress-bar': {
    background: colors.soap300,
  },
  '::-ms-fill': {
    border: 'none',
    background: colors.blueberry400,
    borderRadius: sliderTrackRadius,
  },
});

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const InputValueBox = styled('input')({
  ...type.body,
  width: '48px',
  height: spacing.xl,
  border: `1px solid ${colors.licorice100}`,
  borderRadius: borderRadius.m,
  textIndent: spacing.xxxs,
});

/**
 * This function is mainly used to find the percent fill value for the background gradients.
 * Without it, the gradients pass the the dragger on tails ends every so slightly and is slightly visible in some browsers.
 */
const valueToPercent = (max: number, min: number, value: number): number => {
  const percent = ((value - min) * 100) / (max - min);
  const minPercent = 0;
  const maxPercent = 100;
  const outMin = 1;
  const outMax = 99;
  return ((percent - minPercent) * (outMax - outMin)) / (maxPercent - minPercent) + outMin;
};

export const Slider: React.FC<SliderProps> = ({
  id,
  max,
  min,
  step,
  showTextInput,
  onDragStart,
  onEndDrag,
  onChange,
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
    if (onDragStart) {
      onDragStart(value);
    }
  };

  const onSliderDragEnd = () => {
    if (onEndDrag) {
      onEndDrag(value);
    }
  };

  return (
    <Wrapper>
      <Interval>{min}</Interval>
      <Container>
        <ProgressBarContainer>
          <ProgressBar value={valueToPercent(max, min, value)} max={100} />
        </ProgressBarContainer>
        <SliderInput
          id={id}
          type="range"
          ref={inputRef}
          max={max}
          min={min}
          step={step}
          value={value}
          onChange={onChangeHandler}
          onMouseDown={onSliderDragStart}
          onMouseUp={onSliderDragEnd}
        />
      </Container>
      <Interval>{max}</Interval>
      {showTextInput && (
        <InputValueBox type="text" min={min} max={max} value={value} onChange={onChangeHandler} />
      )}
    </Wrapper>
  );
};
