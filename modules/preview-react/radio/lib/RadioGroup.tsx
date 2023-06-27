import React from 'react';
import {
  createContainer,
  Themeable,
  ErrorType,
  getErrorColors,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioLabel} from './RadioLabel';
import {Radio} from './Radio';

export interface RadioGroupProps extends Themeable, ExtractProps<typeof Flex, never> {
  /**
   * The type of error associated with the RadioGroup (if applicable).
   */
  error?: ErrorType;
}

/**
 * When you have a group of radio inputs, use RadioGroup.
 *
 * **Note:** You must provide a `name`. This ensures that each `input` has a `name` attribute which groups the inputs.
 *
 * ```tsx
 * <RadioGroup name="pizza-crust" value="thin">
 *    <RadioGroup.Radio value="deep-dish">Deep Dish</RadioGroup.Radio>
 *    <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
 * </RadioGroup>
 * ```
 */
export const RadioGroup = createContainer(Flex)({
  displayName: 'RadioGroup',
  modelHook: useRadioModel,
  subComponents: {
    /**
     * This a simplified component that renders a `label` and `input` element with children being the text associated to the radio input.
     * In most cases you will use this component.
     *
     * ```tsx
     * <RadioGroup name="pizza-crust" value="thin">
     *    <RadioGroup.Radio value="deep-dish">Deep Dish</RadioGroup.Radio>
     *    <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
     * </RadioGroup>
     * ```
     */
    Radio: Radio,
    /**
     * Use this if you want more control over styling the text and input.
     * This will render a `label` element that wraps an `input` and `span`.
     *
     * ```tsx
     * <RadioGroup name"pizza-crust"" value="deep-dish">
     *    <RadioGroup.Label>
     *      <RadioGroup.Label.Input checked value="deep-dish" />
     *      <RadioGroup.Label.Text>Deep Dish</RadioGroup.Label.Text>
     *    </RadioGroup.Label>
     * </RadioGroup>
     * ```
     */
    Label: RadioLabel,
  },
})<RadioGroupProps>(({children, error, theme, ...elemProps}, Element, model) => {
  const errorColors = getErrorColors(error, theme);
  return (
    <Flex
      as={Element}
      boxSizing="border-box"
      flexDirection="column"
      borderRadius="m"
      paddingTop="10px"
      paddingBottom="8px"
      paddingX="xs"
      gap="xxs"
      marginY={`-${space.xxxs}`}
      transition="100ms box-shadow"
      marginX={`-${space.xs}`}
      width="fit-content"
      style={{
        boxShadow:
          errorColors.outer !== errorColors.inner
            ? `inset 0 0 0 1px ${errorColors.outer}, inset 0 0 0 3px ${errorColors.inner}`
            : `inset 0 0 0 2px ${errorColors.inner}`,
      }}
      {...elemProps}
    >
      {children}
    </Flex>
  );
});
