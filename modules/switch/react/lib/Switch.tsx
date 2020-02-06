import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import uuid from 'uuid/v4';
import {ErrorType, focusRing, mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import {borderRadius, colors, inputColors, depth, spacing} from '@workday/canvas-kit-react-core';

export interface SwitchProps extends Themeable, React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * If true, set the Switch to the on state.
   * @default false
   */
  checked: boolean;
  /**
   * If true, set the Switch to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The HTML `id` of the underlying checkbox input element.
   */
  id?: string;
  /**
   * The function called when the Switch state changes.
   */
  onChange?: (e: React.SyntheticEvent) => void;
  /**
   * The value of the Switch.
   */
  value?: string;
  /**
   * The ref to the underlying checkbox input element. Use this to imperatively switch or focus the Switch.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * The type of error associated with the Switch (if applicable).
   */
  error?: ErrorType;
}

const circleSize = spacing.xs;
const switchWidth = spacing.l;
const switchHeight = spacing.s;
const switchTapArea = spacing.l;
const translateLength = spacing.s;

const SwitchContainer = styled('div')({
  position: 'relative',
  height: spacing.m,
  width: switchTapArea,
});

const SwitchInput = styled('input')<SwitchProps>(
  {
    position: 'absolute',
    height: spacing.m,
    width: switchTapArea,
    margin: 0,
    marginLeft: spacing.xxxs,
    borderRadius: borderRadius.circle,
    opacity: 0,
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
    marginTop: spacing.xxxs,
    width: switchWidth,
    height: switchHeight,
    borderRadius: borderRadius.circle,
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
  borderRadius: borderRadius.circle,
  ...depth[1],
  backgroundColor: colors.frenchVanilla100,
  transform: checked ? `translateX(${translateLength})` : 'translateX(0)',
  transition: 'transform 150ms ease',
  pointerEvents: 'none',
}));

export default class Switch extends React.Component<SwitchProps> {
  static ErrorType = ErrorType;

  public static defaultProps = {
    checked: false,
  };

  private id = uuid();

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {checked, disabled, id = this.id, inputRef, onChange, value, ...elemProps} = this.props;

    return (
      <SwitchContainer>
        <SwitchInput
          checked={checked}
          disabled={disabled}
          id={id}
          ref={inputRef}
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
