import * as React from 'react';
import styled from 'react-emotion';
import {ErrorType, focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import {colors, inputColors, depth, spacing} from '@workday/canvas-kit-react-core';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  value?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  error?: ErrorType;
}

const circleSize = spacing.xs;
const switchWidth = spacing.l;
const switchHeight = spacing.s;
const switchTapArea = spacing.l;
const translateLength = spacing.s;

const SwitchContainer = styled('div')({
  position: 'relative',
  height: switchTapArea,
  width: switchTapArea,
});

const SwitchInput = styled('input')<SwitchProps>(
  {
    position: 'absolute',
    height: switchTapArea,
    width: switchTapArea,
    margin: 0,
    marginLeft: spacing.xxxs,
    borderRadius: 999,
    '&:focus, &:active': {
      outline: 'none',
      '& ~ div:first-of-type': {
        ...focusRing(2, 2, false),
      },
    },
    ...mouseFocusBehavior({
      '&:focus, &:active': {
        '& ~ div:first-of-type': {
          ...focusRing(0, 0),
          animation: 'none',
        },
      },
    }),
  },
  ({disabled}) => ({
    cursor: disabled ? 'not-allowed' : 'pointer',
  }),
  ({error}) => {
    let errorRingColor;
    let errorRingBorderColor = 'transparent';

    if (error === ErrorType.Error) {
      errorRingColor = inputColors.error.border;
    } else if (error === ErrorType.Alert) {
      errorRingColor = inputColors.warning.border;
      errorRingBorderColor = colors.cantaloupe600;
    } else {
      return;
    }

    const styles = {
      '& ~ div:first-of-type': {
        boxShadow: `
          0 0 0 2px ${colors.frenchVanilla100},
          0 0 0 4px ${errorRingColor},
          0 0 0 5px ${errorRingBorderColor}`,
      },
      '&:focus ~ div:first-of-type': {
        ...focusRing(2, 2, false),
      },
    };
    return {
      ...styles,
      // Error rings take precedence over focus
      ...mouseFocusBehavior({
        ...styles,
        '&:focus ~ div:first-of-type, &:active ~ div:first-of-type': {
          boxShadow: `
            0 0 0 2px ${colors.frenchVanilla100},
            0 0 0 4px ${errorRingColor},
            0 0 0 5px ${errorRingBorderColor}`,
        },
      }),
    };
  }
);

const SwitchBackground = styled('div')<Pick<SwitchProps, 'checked' | 'disabled'>>(
  {
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    marginTop: spacing.xxs,
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
  transform: checked ? `translateX(${translateLength})` : 'translateX(0)',
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
