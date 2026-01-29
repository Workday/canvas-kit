import React from 'react';

import {ExtractProps, Themeable, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {RadioInput} from './RadioInput';
import {RadioText} from './RadioText';
import {useRadioModel} from './hooks/useRadioModel';

interface RadioLabelContextInterface {
  disabled?: boolean | undefined;
  variant?: 'inverse' | undefined;
  value?: string | number;
}
export interface RadioLabelProps
  extends Themeable,
    CSProps,
    ExtractProps<typeof Flex, never>,
    RadioLabelContextInterface {
  /**
   * The Radio input and label children of RadioLabel
   */
  children?: React.ReactNode;
}

const radioLabelStencil = createStencil({
  base: {
    alignItems: 'flex-start',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minHeight: cssVar(system.size.xxs, system.space.x6),
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.sm, system.space.x3),
  },
});

export const RadioLabelContext = React.createContext({} as RadioLabelContextInterface);

export const RadioLabel = createSubcomponent('label')({
  displayName: 'Radio.Label',
  modelHook: useRadioModel,
  subComponents: {
    /**
     * Use `RadioGroup.Label.Input` within a `RadioGroup.Label` to render the input portion of a radio button.
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
    Input: RadioInput,
    /**
     * Use `RadioGroup.Label.Text` within a `RadioGroup.Label` to render the label text portion of a radio button.
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
    Text: RadioText,
  },
})<RadioLabelProps>(({children, variant, disabled, value, ...elemProps}, Element) => {
  return (
    <RadioLabelContext.Provider value={{variant, disabled}}>
      <Flex as={Element} {...mergeStyles(elemProps, radioLabelStencil({variant}))}>
        {children}
      </Flex>
    </RadioLabelContext.Provider>
  );
});
