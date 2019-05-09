import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, depth} from '@workday/canvas-kit-react-core';

export interface ToggleProps extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const circleSize = 12;
const toggleWidth = 32;
const toggleHeight = 16;
const translateLength = toggleWidth - toggleHeight;

const ToggleContainer = styled('div')({
  position: 'relative',
  height: toggleHeight,
  width: toggleWidth,
});

const ToggleInput = styled('input')<ToggleProps>(
  {
    position: 'absolute',
    height: toggleHeight,
    width: toggleWidth,
    margin: 0,
    borderRadius: 999,
    '&:focus, &:active': {
      outline: 'none',
      ...focusRing(2, 2),
    },
  },
  ({disabled}) => ({
    cursor: disabled ? 'not-allowed' : 'pointer',
  })
);

const ToggleBackground = styled('div')<Pick<ToggleProps, 'checked' | 'disabled'>>(
  {
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    width: toggleWidth,
    height: toggleHeight,
    borderRadius: 999,
    padding: '0px 2px',
    transition: 'background-color 200ms ease',
  },
  ({checked, disabled}) => ({
    backgroundColor: disabled ? colors.soap400 : checked ? colors.blueberry500 : colors.licorice200,
  })
);

const ToggleCircle = styled('div')<Pick<ToggleProps, 'checked'>>(({checked}) => ({
  width: circleSize,
  height: circleSize,
  borderRadius: 999,
  ...depth[1],
  backgroundColor: colors.frenchVanilla100,
  transform: checked ? `translateX(${translateLength}px)` : 'translateX(0)',
  transition: 'transform 150ms ease',
  pointerEvents: 'none',
}));

export default class ToggleSwitch extends React.Component<ToggleProps> {
  public static defaultProps = {
    checked: false,
  };

  public render() {
    const {checked, disabled, id, inputRef, onChange, value, ...otherProps} = this.props;

    return (
      <ToggleContainer>
        <ToggleInput
          checked={checked}
          disabled={disabled}
          id={id}
          innerRef={inputRef}
          onChange={onChange}
          role="checkbox"
          tabIndex={0}
          type="checkbox"
          value={value}
          {...otherProps}
        />
        <ToggleBackground checked={checked} disabled={disabled}>
          <ToggleCircle checked={checked} />
        </ToggleBackground>
      </ToggleContainer>
    );
  }
}
