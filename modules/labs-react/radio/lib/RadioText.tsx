import React from 'react';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {inputColors, colors} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelContext} from './RadioLabel';
import {Text} from '@workday/canvas-kit-react/text';

export const RadioText = createSubcomponent('span')({
  displayName: 'RadioButton.Text',
  modelHook: useRadioModel,
})(({children}: ExtractProps<typeof Text, never>, Element, model) => {
  const radioContext = React.useContext(RadioLabelContext);

  return (
    <Text
      as={Element}
      style={{
        cursor: radioContext.disabled ? undefined : 'pointer',
        opacity: radioContext.disabled
          ? radioContext.variant === 'inverse'
            ? '.4'
            : '1'
          : undefined,
        color: radioContext.disabled
          ? radioContext.variant === 'inverse'
            ? colors.frenchVanilla100
            : inputColors.disabled.text
          : radioContext.variant === 'inverse'
          ? colors.frenchVanilla100
          : 'inherit',
      }}
      typeLevel="subtext.large"
    >
      {children}
    </Text>
  );
});
