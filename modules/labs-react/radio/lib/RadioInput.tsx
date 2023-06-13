import React from 'react';
import {
  styled,
  StyledType,
  focusRing,
  mouseFocusBehavior,
  createSubcomponent,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {
  colors,
  inputColors,
  spaceNumbers,
  borderRadius,
  space,
} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelProps, RadioLabelContext} from './RadioLabel';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

const radioBorderRadius = 9;
const radioWidth = 18;
const rippleRadius = (spaceNumbers.l - radioWidth) / 2;
const radioHeight = 18;

const StyledRadioInput = styled(Box.as('input'))<RadioLabelProps & StyledType>(
  {
    '&:focus, &:active': {
      outline: 'transparent',
    },
  },
  ({
    checked,
    disabled,
    variant,
    theme: {
      canvas: {
        palette: {
          primary: themePrimary,
          common: {focusOutline: themeFocusOutline},
        },
      },
    },
  }) => ({
    cursor: disabled ? undefined : 'pointer',
    opacity: disabled && variant === 'inverse' ? '.4' : '1',
    height: '18px',
    width: '18px',
    // Default circle element
    ':after': {
      content: "''",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: disabled ? inputColors.disabled.background : colors.frenchVanilla100,
      borderRadius: '999px',
      boxSizing: 'border-box',
      border: `1px solid`,
      borderColor: disabled
        ? inputColors.disabled.border
        : variant === 'inverse'
        ? colors.soap300
        : inputColors.border,
      height: '18px',

      width: '18px',
      justifyContent: 'center',
      paddingY: '0px',
      paddingX: '2px',
      pointerEvents: 'none',
      position: 'absolute',
      transition: 'border 200ms ease, background 200ms',
      opacity: disabled && variant === 'inverse' ? '.4' : '1',
    },

    '&:checked:after': {
      backgroundColor: variant === 'inverse' ? themePrimary.main : colors.frenchVanilla100,
      border: `5px solid`,
      borderColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
    },

    // '&:hover:after': {
    //   borderColor: disabled
    //     ? inputColors.disabled.border
    //     : variant === 'inverse'
    //     ? colors.soap300
    //     : inputColors.hoverBorder,
    // },

    '&:focus:after, &:focus:hover:after': {
      outline: 'transparent',
      ...focusRing({
        width: variant === 'inverse' ? 2 : 2,
        separation: 0,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : colors.frenchVanilla100,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : colors.blueberry400,
      }),
    },

    '&:focus:checked:after, &:focus:hover:checked:after': {
      outline: 'transparent',
      ...focusRing({
        width: variant === 'inverse' ? 2 : 2,
        separation: 2,
        animate: false,
        innerColor: variant === 'inverse' ? colors.blackPepper400 : colors.frenchVanilla100,
        outerColor: variant === 'inverse' ? colors.frenchVanilla100 : colors.blueberry400,
      }),
    },

    ...mouseFocusBehavior({
      '&:focus:after': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),

        // borderColor: checked
        //   ? variant === 'inverse'
        //     ? colors.soap300
        //     : themePrimary.main
        //   : inputColors.border,
      },
      '&:focus:hover:after, &:focus:active:after': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),
        // backgroundColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
      },
      '&:focus:hover:checked:after, &:focus:active:checked:after': {
        ...focusRing({
          width: 0,
          outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
        }),
        // backgroundColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
      },
    }),

    // '&:hover:checked:after': {
    //   // borderColor: variant === 'inverse' ? colors.soap300 : themePrimary.main,
    // },

    // '&:focus:after': {
    //   ...focusRing({
    //     width: variant === 'inverse' ? 2 : 4,
    //     separation: 2,
    //     animate: false,
    //     innerColor: variant === 'inverse' ? colors.blackPepper400 : undefined,
    //     outerColor: variant === 'inverse' ? colors.frenchVanilla100 : undefined,
    //   }),
    // },

    /**
     * These selectors are targetting various sibling elements (~) here because
     * their styles need to be connected to changes around the input's state
     * (e.g. hover, focus, etc.).
     *
     * We are choosing not to use component selectors from Emotion in this case.
     * The Babel transforms have been problematic in the past.
     */

    // `span:first-of-type` refers to `RadioRipple`, the light grey
    // element that animates around the component on hover

    // `div:first-of-type` refers to the `RadioBackground`, the visual facade of the
    // input (which is visually hidden)
    // '&:hover': {
    //   backgroundColor: checked
    //     ? variant === 'inverse'
    //       ? colors.frenchVanilla100
    //       : themePrimary.main
    //     : disabled
    //     ? inputColors.disabled.background
    //     : 'white',
    //   borderColor: checked
    //     ? variant === 'inverse'
    //       ? colors.soap300
    //       : themePrimary.main
    //     : disabled
    //     ? inputColors.disabled.border
    //     : variant === 'inverse'
    //     ? colors.soap300
    //     : inputColors.hoverBorder,
    //   borderWidth: '1px',
    // },
    // '&:focus, &focus:hover': {
    //   // '& ~ div:first-of-type': {
    //   borderWidth: '2px',
    //   borderColor: variant === 'inverse' ? colors.blackPepper400 : themeFocusOutline,
    //   // boxShadow: 'none',
    //   ...focusRing({
    //     width: variant === 'inverse' ? 2 : 0,
    //     separation: 0,
    //     animate: false,
    //     innerColor: variant === 'inverse' ? colors.blackPepper400 : undefined,
    //     outerColor: variant === 'inverse' ? colors.frenchVanilla100 : undefined,
    //   }),
    //   // },
    // },
    // '&:checked:focus': {
    //   ...focusRing({
    //     separation: 2,
    //     width: 2,
    //     innerColor: variant === 'inverse' ? colors.blackPepper400 : undefined,
    //     outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
    //   }),
    //   borderColor: variant === 'inverse' ? colors.frenchVanilla100 : themePrimary.main,
    //   borderWidth: '2px',
    // },
    // ...mouseFocusBehavior({
    //   '&:focus': {
    //     ...focusRing({
    //       width: 0,
    //       outerColor: variant === 'inverse' ? colors.frenchVanilla100 : themeFocusOutline,
    //     }),
    //     borderWidth: '1px',
    //     borderColor: checked
    //       ? variant === 'inverse'
    //         ? colors.soap300
    //         : themePrimary.main
    //       : inputColors.border,
    //   },
    //   '&:focus:hover, &:focus:active': {
    //     borderColor: checked
    //       ? variant === 'inverse'
    //         ? colors.soap300
    //         : themePrimary.main
    //       : variant === 'inverse'
    //       ? colors.soap300
    //       : inputColors.hoverBorder,
    //   },
    // }),
  })
);

const RadioInputWrapper = styled(Flex)<Pick<RadioLabelProps, 'disabled' | 'variant'>>(
  {
    // Hover Ripple element
    '::before': {
      content: "''",
      borderRadius: borderRadius.circle,
      height: radioHeight,
      transition: 'box-shadow 150ms ease-out',

      width: radioWidth,
      pointerEvents: 'none', //
    },
    '&:hover:before': {
      boxShadow: `0 0 0 ${rippleRadius}px ${colors.soap200}`,
    },
  },
  ({variant}) => ({
    '::before': {
      opacity: variant === 'inverse' ? '0.4' : '1',
    },
  })
);

const RadioBackground = styled(Flex)<RadioLabelProps>(
  {
    // Radio Selected Circle
    '::after': {
      content: "''",
      borderRadius: radioBorderRadius,
      display: 'flex',
      flexDirection: 'column',
      height: space.xxs,
      pointerEvents: 'none',
      transition: 'transform 200ms ease, opacity 200ms ease',
      width: space.xxs,
    },
  },
  ({theme, variant}) => ({
    '::after': {
      backgroundColor:
        variant === 'inverse'
          ? theme.canvas.palette.primary.main
          : theme.canvas.palette.primary.contrast,
    },
  }),
  ({checked}) => ({
    '::after': {
      opacity: checked ? 1 : 0,
      transform: checked ? 'scale(1)' : 'scale(0.5)',
    },
  }),

  ({
    checked,
    disabled,
    variant,
    theme: {
      canvas: {
        palette: {primary: themePrimary},
      },
    },
  }) => ({
    borderColor: checked
      ? variant === 'inverse'
        ? colors.soap300
        : themePrimary.main
      : disabled
      ? inputColors.disabled.border
      : variant === 'inverse'
      ? colors.soap300
      : inputColors.border,
    backgroundColor: checked
      ? variant === 'inverse'
        ? colors.frenchVanilla100
        : themePrimary.main
      : disabled
      ? inputColors.disabled.background
      : 'white',
    opacity: disabled && variant === 'inverse' ? '.4' : '1',
  })
);

const useRadioInput = createElemPropsHook(useRadioModel)(
  (model, ref, elemProps: {value?: string} = {}) => {
    const {disabled, variant} = React.useContext(RadioLabelContext);
    return {
      disabled: disabled,
      variant: variant,
      checked:
        elemProps.value === model.state.value || elemProps.value === model.state.initialValue,
      'aria-checked':
        elemProps.value === model.state.value || elemProps.value === model.state.initialValue,
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        model.onChange(event);
      },
      name: model.state.name,
    };
  }
);
export const RadioInput = createSubcomponent('input')({
  modelHook: useRadioModel,
  elemPropsHook: useRadioInput,
})<RadioLabelProps>(({children, ...elemProps}, Element, model) => {
  return (
    <RadioInputWrapper height="18px" width="18px" flex="0 0 auto" variant={elemProps.variant}>
      <StyledRadioInput
        borderRadius="circle"
        position="absolute"
        // style={{outline: 'transparent'}}
        margin="zero"
        as={Element}
        type="radio"
        {...elemProps}
      />
      {/* <RadioBackground
    //   id="background"
    //   alignItems="center"
    //   backgroundColor="frenchVanilla100"
    //   borderRadius="circle"
    //   boxSizing="border-box"
    //   border="1px solid"
    //   height={'18px'}
    //   width="18px"
    //   justifyContent="center"
    //   paddingY="zero"
    //   paddingX="2px"
    //   pointerEvents="none"
    //   position="absolute"
    //   transition="border 200ms ease, background 200ms"
    //   checked={elemProps.checked}
    //   disabled={elemProps.disabled}
    //   variant={elemProps.variant}
    // ></RadioBackground> */}
    </RadioInputWrapper>
  );
});
