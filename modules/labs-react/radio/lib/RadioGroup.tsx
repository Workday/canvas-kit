import React from 'react';
import {
  createContainer,
  Themeable,
  ErrorType,
  getErrorColors,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioLabel} from './RadioLabel';
import {Radio} from './Radio';

// export interface RadioGroupProps extends Themeable, GrowthBehavior {
//   /**
//    * The Radio button children of the RadioGroup (must be at least two).
//    */
//   children: React.ReactElement<RadioLabelProps>[];
//   /**
//    * The common `name` passed to all Radio button children of the RadioGroup. This enables you to avoid specifying the `name` for each child.
//    */
//   name?: string;
//   /**
//    * The type of error associated with the RadioGroup (if applicable).
//    */
//   error?: ErrorType;
//   /**
//    * The initial selected value of the RadioGroup. If a string is provided, the Radio button with the corresponding value will be selected. If a number is provided, the Radio button with the corresponding index will be selected.
//    * @default 0
//    */
//   initialValue?: string | number;
// }

// const Container = styled('div')<Pick<RadioGroupProps, 'error' | 'grow' | 'theme'>>(
//   {
//     display: 'inline-block',
//     boxSizing: 'border-box',
//     borderRadius: borderRadius.m,
//     padding: `${space.xxxs} ${space.xs}`,
//     margin: `-${space.xxxs} -${space.xs}`,
//     '& > div': {
//       margin: `${space.xxs} ${space.zero}`,
//       '&:first-of-type': {
//         marginTop: space.xxxs,
//       },
//       '&:last-child': {
//         marginBottom: space.xxxs,
//       },
//     },
//   },
//   ({grow}) => grow && {width: '100%'},
//   ({error, theme}) => {
//     const errorColors = getErrorColors(error, theme);
//     return {
//       transition: '100ms box-shadow',
//       boxShadow:
//         errorColors.outer !== errorColors.inner
//           ? `inset 0 0 0 1px ${errorColors.outer}, inset 0 0 0 3px ${errorColors.inner}`
//           : `inset 0 0 0 2px ${errorColors.inner}`,
//     };
//   }
// );

// export const RadioGroup = createContainer('div')({
//   displayName: 'RadioGroup',
//   modelHook: useRadioModel,
//   subComponents: {
//     Button: RadioButton,
//     Input: StyledRadioInput,
//     Label: RadioText,
//   },
// })<RadioGroupProps>(({children, ...elemProps}, Element, model) => {
//   return (
//     <Container as={Element} name={model.state.name} {...elemProps}>
//       {children}
//     </Container>
//   );
// });

export interface RadioGroupProps2 extends Themeable, ExtractProps<typeof Flex, never> {
  /**
   * The type of error associated with the RadioGroup (if applicable).
   */
  error?: ErrorType;
}

export const RadioGroup2 = createContainer(Flex)({
  displayName: 'RadioGroup',
  modelHook: useRadioModel,
  subComponents: {
    RadioLabel: RadioLabel,
    Radio: Radio,
  },
})<RadioGroupProps2>(({children, error, theme, ...elemProps}, Element, model) => {
  const errorColors = getErrorColors(error, theme);
  return (
    <Flex
      as={Element}
      boxSizing="border-box"
      flexDirection="column"
      borderRadius="m"
      paddingY="xxxs"
      paddingX="xs"
      gap="xxs"
      marginY="xxxs"
      transition="100ms box-shadow"
      style={{
        boxShadow:
          errorColors.outer !== errorColors.inner
            ? `inset 0 0 0 1px ${errorColors.outer}, inset 0 0 0 3px ${errorColors.inner}`
            : `inset 0 0 0 2px ${errorColors.inner}`,
      }}
      // name={name}
      {...elemProps}
    >
      {children}
    </Flex>
  );
});
