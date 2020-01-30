import * as React from 'react';
import {
  borderRadius,
  colors,
  spacingNumbers as spacing,
  type,
} from '@workday/canvas-kit-react-core';
import {focusRing, Popper} from '@workday/canvas-kit-react-common';

import Tooltip from '@workday/canvas-kit-react-tooltip';

import styled from '@emotion/styled';

export interface SliderProps {
  max: number;
  min: number;
  step?: number;
  showTextInput?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  id?: string;
  value?: number | string;

  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSliderDragStart?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onSliderDragEnd?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const sliderContainerHeight = spacing.l;
const sliderContainerWidth = 328;
const sliderContainerMinWidth = 200;
const sliderTrackRadius = 100;
const sliderTrackHeight = 5;
const sliderThumbHeight = spacing.s;
const sliderThumbWidth = spacing.s;

const SliderContainer = styled('div')({
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

export const Slider: React.FC<SliderProps> = ({
  id,
  inputRef = React.useRef<HTMLInputElement>(null),
  max,
  min,
  step,
  showTextInput,
  onSliderDragStart,
  onSliderDragEnd,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const sliderPosition = Number(value) / (max - min);

  const sliderWidth =
    inputRef && inputRef.current && inputRef.current.parentElement
      ? inputRef.current.parentElement.clientWidth
      : 0;

  const halfThumbWidth = sliderThumbWidth / 2;
  const pixelPosition = sliderPosition * sliderWidth;
  const distFromCenter = pixelPosition - sliderWidth / 2;
  const ratioDistFromCenter = distFromCenter / sliderWidth / 2;
  const offset = ratioDistFromCenter * halfThumbWidth;

  const popperOptions = {
    modifiers: {
      offset: {
        offset: pixelPosition - offset - sliderWidth / 2,
      },
    },
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setIsOpen(false);
    if (onSliderDragEnd) {
      onSliderDragEnd(e);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setIsOpen(true);
    if (onSliderDragStart) {
      onSliderDragStart(e);
    }
  };

  const handleOnChange = (
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsOpen(true);
    if (onChange) {
      onChange(e);
    }
  };

  const getTooltipValue = (value: number | string | undefined) => {
    if (value === undefined) {
      return value;
    }
    if (Number(value) > max) {
      return max;
    }
    if (Number(value) < min) {
      return min;
    }
    return value;
  };

  return (
    <>
      <Wrapper>
        <Interval>{min}</Interval>
        <SliderContainer>
          <ProgressBarContainer>
            <ProgressBar value={value} max={100} />
          </ProgressBarContainer>
          <SliderInput
            type="range"
            id={id}
            ref={inputRef}
            max={max}
            min={min}
            step={step}
            value={value}
            onChange={handleOnChange}
            onInput={handleOnChange}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={e => setIsOpen(true)}
            onMouseLeave={e => setIsOpen(false)}
            aria-labelledby={'123'}
          />
        </SliderContainer>
        <Interval>{max}</Interval>
        {showTextInput && (
          <InputValueBox type="number" min={min} max={max} value={value} onChange={onChange} />
        )}
      </Wrapper>
      {/* Something is currently incorrect with how popperOptions are being
       * used within Popper -- they are not rerendering the Tooltip on
       * change events as expected.
       */}
      <Popper
        open={isOpen}
        anchorElement={inputRef.current}
        placement={'top'}
        popperOptions={popperOptions}
      >
        <Tooltip id={'123'}>{getTooltipValue(value)}</Tooltip>
      </Popper>
    </>
  );
};
