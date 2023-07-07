import React from 'react';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {inputColors, colors} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelContext} from './RadioLabel';
import {Text} from '@workday/canvas-kit-react/text';

export const RadioText = createSubcomponent('span')({
  displayName: 'RadioButton.Text',
  modelHook: useRadioModel,
})(({children, ...elemProps}: ExtractProps<typeof Text>, Element) => {
  const {disabled, variant} = React.useContext(RadioLabelContext);
  const inverse = variant === 'inverse';
  return (
    <Text
      as={Element}
      style={{
        cursor: !disabled ? 'pointer' : undefined,
        opacity: disabled && inverse ? '.4' : '1',
        color: inverse
          ? colors.frenchVanilla100
          : disabled
          ? inputColors.disabled.text
          : elemProps.color,
      }}
      typeLevel="subtext.large"
      {...elemProps}
    >
      {children}
    </Text>
  );
});
