import {ErrorType, Themeable, createContainer} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {RadioButton} from './RadioButton';
import {RadioLabel} from './RadioLabel';
import {useRadioModel} from './hooks/useRadioModel';

export interface RadioGroupProps extends Themeable, CSProps, FlexProps {
  /**
   * The type of error associated with the RadioGroup (if applicable).
   */
  error?: ErrorType;
}

/**
 * Styles for RadioGroup
 */
const radioGroupStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: system.shape.md,
    gap: system.gap.sm,
    padding: `${px2rem(10)} ${base.size150} ${system.padding.xs}`,
    margin: `0 ${calc.negate(base.size150)}`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${system.color.brand.border.critical}`,
        backgroundColor: system.color.brand.surface.critical.default,
      },
      caution: {
        backgroundColor: system.color.brand.surface.caution.default,
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${system.color.brand.focus.caution.inner}, inset 0 0 0 ${px2rem(3)} ${system.color.brand.border.caution}`,
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
export const RadioGroup = createContainer('div')({
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
  return <Element {...mergeStyles(elemProps, radioGroupStencil({error}))}>{children}</Element>;
});
