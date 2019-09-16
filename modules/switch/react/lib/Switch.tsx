import * as React from 'react';
import styled from 'react-emotion';
import {focusRing} from '@workday/canvas-kit-react-common';
import {colors, depth} from '@workday/canvas-kit-react-core';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const circleSize = 12;
const switchWidth = 32;
const switchHeight = 16;
const translateLength = switchWidth - switchHeight;

const SwitchContainer = styled('div')({
  position: 'relative',
  height: switchHeight,
  width: switchWidth,
});

const SwitchInput = styled('input')<SwitchProps>(
  {
    position: 'absolute',
    height: switchHeight,
    width: switchWidth,
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

const SwitchBackground = styled('div')<Pick<SwitchProps, 'checked' | 'disabled'>>(
  {
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    width: switchWidth,
    height: switchHeight,
    borderRadius: 999,
    padding: '0px 2px',
    transition: 'background-color 200ms ease',
  },
  ({checked, disabled}) => ({
    backgroundColor: disabled ? colors.soap400 : checked ? colors.blueberry500 : colors.licorice200,
  })
);

const SwitchCircle = styled('div')<Pick<SwitchProps, 'checked'>>(({checked}) => ({
  width: circleSize,
  height: circleSize,
  borderRadius: 999,
  ...depth[1],
  backgroundColor: colors.frenchVanilla100,
  transform: checked ? `translateX(${translateLength}px)` : 'translateX(0)',
  transition: 'transform 150ms ease',
  pointerEvents: 'none',
}));

export default class Switch extends React.Component<SwitchProps> {
  public static defaultProps = {
    checked: false,
  };

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {checked, disabled, id, inputRef, onChange, value, ...elemProps} = this.props;

    return (
      <SwitchContainer>
        <SwitchInput
          checked={checked}
          disabled={disabled}
          id={id}
          innerRef={inputRef}
          onChange={onChange}
          role="checkbox"
          tabIndex={0}
          type="checkbox"
          value={value}
          {...elemProps}
        />
        <SwitchBackground checked={checked} disabled={disabled}>
          <SwitchCircle checked={checked} />
        </SwitchBackground>
      </SwitchContainer>
    );
  }
}
