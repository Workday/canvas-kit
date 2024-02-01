import React from 'react';
import {
  createContainer,
  Themeable,
  ErrorType,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {RadioLabel} from './RadioLabel';
import {RadioButton} from './RadioButton';
import {createStencil, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

export interface RadioGroupProps extends Themeable, CSProps, ExtractProps<typeof Flex, never> {
  /**
   * The type of error associated with the RadioGroup (if applicable).
   */
  error?: ErrorType;
}

const radioGroupStyles = createStencil({
  base: {
    boxSizing: 'border-box',
    flexDirection: 'column',
    borderRadius: system.shape.x1,
    gap: system.space.x2,
    padding: `10px ${system.space.x3} ${system.space.x2}`,
    margin: `calc(-1 * ${system.space.x1}) calc(-1 * ${system.space.x3})`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        boxShadow: `inset 0 0 0 2px ${brand.error.base}`,
      },
      alert: {
        boxShadow: `inset 0 0 0 1px ${brand.alert.darkest}, inset 0 0 0 3px ${brand.alert.base}`,
      },
    },
  },
});

/**
 * Use `RadioGroup` to group a collection of `RadioGroup.RadioButton` components under a common `name`.
 *
 * ```tsx
 * <RadioGroup name="pizza-crust" value="thin">
 *   <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
 *   <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
 * </RadioGroup>
 * ```
 */
export const RadioGroup = createContainer(Flex)({
  displayName: 'RadioGroup',
  modelHook: useRadioModel,
  subComponents: {
    /**
     * `RadioGroup.RadioButton` renders an `<input type="radio" />` and its associated `<label>` (using `children` as the label's contents).
     * This component should satisfy most use cases; use `RadioGroup.Label` and its sub components if you require more flexibility.
     *
     * ```tsx
     * <RadioGroup name="pizza-crust" value="thin">
     *   <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
     *   <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
     * </RadioGroup>
     * ```
     */
    RadioButton: RadioButton,
    /**
     * Use `RadioGroup.Label` instead of `RadioGroup.Radio` if you need direct access to the label and the radio input.
     * This will render a `<label>` that wraps an `<input type="radio" />` and a `<span>` for the label text.
     *
     * ```tsx
     * <RadioGroup name"pizza-crust" value="deep-dish">
     *   <RadioGroup.Label>
     *     <RadioGroup.Label.Input value="deep-dish" />
     *     <RadioGroup.Label.Text>Deep dish</RadioGroup.Label.Text>
     *   </RadioGroup.Label>
     * </RadioGroup>
     * ```
     */
    Label: RadioLabel,
  },
})<RadioGroupProps>(({children, error, theme, ...elemProps}, Element) => {
  return (
    <Flex as={Element} {...handleCsProp(elemProps, radioGroupStyles({error}))}>
      {children}
    </Flex>
  );
});
