import * as React from 'react';
import {Themeable} from '@workday/canvas-kit-labs-react-core';
import uuid from 'uuid/v4';
import {
  ErrorType,
  focusRing,
  mouseFocusBehavior,
  getErrorColors,
  styled,
} from '@workday/canvas-kit-react-common';
import {borderRadius, colors, depth, spacing} from '@workday/canvas-kit-react-core';

export interface SwitchProps extends Themeable, React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * If true, set the Switch to the on state.
   * @default false
   */
  checked?: boolean;
  /**
   * If true, set the Switch to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The HTML `id` of the underlying checkbox input element.
   * @default A uniquely generated id by uuid()
   */
  id?: string;
  /**
   * The function called when the Switch state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  },
  ({disabled}) => ({
    cursor: disabled ? 'not-allowed' : 'pointer',
  }),
  ({error, theme}) => {
    const errorColors = getErrorColors(error, theme);

    if (errorColors.outer === errorColors.inner) {
      errorColors.outer = 'transparent';
    }

    const styles = {
      '&:focus': {
        outline: 'none',
        '& ~ div:first-of-type': {
          ...focusRing({separation: 2, animate: false}, theme),
        },
      },
      '& ~ div:first-of-type': {
        boxShadow: `
          0 0 0 2px ${colors.frenchVanilla100},
          0 0 0 4px ${errorColors.inner},
          0 0 0 5px ${errorColors.outer}`,
      },
      '&:focus ~ div:first-of-type': {
        ...focusRing({separation: 2, animate: false}, theme),
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
            0 0 0 4px ${errorColors.inner},
            0 0 0 5px ${errorColors.outer}`,
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
  ({checked, disabled, theme}) => {
    if (checked) {
      return {
        backgroundColor: disabled ? theme.palette.primary.light : theme.palette.primary.main,
      };
    } else {
      return {
        backgroundColor: disabled ? colors.soap400 : colors.licorice200,
      };
    }
  }
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

  private id = uuid();

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {
      checked = false,
      id = this.id,
      disabled = false,
      inputRef,
      onChange,
      value,
      ...elemProps
    } = this.props;

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
