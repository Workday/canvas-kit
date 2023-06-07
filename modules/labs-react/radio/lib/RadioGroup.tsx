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

export interface RadioGroupProps extends Themeable, ExtractProps<typeof Flex, never> {
  /**
   * The type of error associated with the RadioGroup (if applicable).
   */
  error?: ErrorType;
}

export const RadioGroup = createContainer(Flex)({
  displayName: 'RadioGroup',
  modelHook: useRadioModel,
  subComponents: {
    Label: RadioLabel,
    Radio: Radio,
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
