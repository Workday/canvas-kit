import * as React from 'react';
import {
  createComponent,
  StyledType,
  ErrorType,
  focusRing,
  mouseFocusBehavior,
  getErrorColors,
  styled,
  Themeable,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {borderRadius, colors, depth, space} from '@workday/canvas-kit-react/tokens';

export interface SwitchProps extends Themeable {
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
   * The type of error associated with the Switch (if applicable).
   */
  error?: ErrorType;
}

const circleSize = space.xs;
const switchWidth = space.l;
const switchHeight = space.s;
const switchTapArea = space.l;
const translateLength = space.s;

const SwitchContainer = styled('div')({
  position: 'relative',
  height: space.m,
  width: switchTapArea,
});

const SwitchInput = styled('input')<SwitchProps & StyledType>(
  {
    position: 'absolute',
    height: space.m,
    width: switchTapArea,
    margin: 0,
    marginLeft: space.xxxs,
    borderRadius: borderRadius.circle,
    opacity: 0,
    display: 'block',
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
    marginTop: space.xxxs,
    width: switchWidth,
    height: switchHeight,
    borderRadius: borderRadius.circle,
    padding: '0px 2px',
    transition: 'background-color 200ms ease',
  },
  ({
    checked,
    disabled,
    theme: {
      canvas: {
        palette: {primary: themePrimary},
      },
    },
  }) => {
    if (checked) {
      return {
        backgroundColor: disabled ? themePrimary.light : themePrimary.main,
      };
    } else {
      return {
        backgroundColor: disabled ? colors.soap400 : colors.licorice200,
      };
    }
  }
);

const SwitchCircle = styled('div')<Pick<SwitchProps, 'checked' | 'theme'>>(
  {
    width: circleSize,
    height: circleSize,
    borderRadius: borderRadius.circle,
    ...depth[1],
    transition: 'transform 150ms ease',
    pointerEvents: 'none',
  },
  ({theme}) => ({
    backgroundColor: theme.canvas.palette.primary.contrast,
  }),
  ({checked}) => ({
    transform: checked ? `translateX(${translateLength})` : 'translateX(0)',
  })
);

export const Switch = createComponent('input')({
  displayName: 'Switch',
  Component: (
    {checked = false, id, disabled = false, onChange, value, ...elemProps}: SwitchProps,
    ref,
    Element
  ) => {
    const inputId = useUniqueId(id);
    return (
      <SwitchContainer>
        <SwitchInput
          as={Element}
          checked={checked}
          disabled={disabled}
          id={inputId}
          ref={ref}
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
  },
  subComponents: {
    ErrorType,
  },
});

export default Switch;
