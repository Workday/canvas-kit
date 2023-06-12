import React from 'react';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {inputColors, colors} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelContext} from './RadioLabel';
import {Text} from '@workday/canvas-kit-react/text';

export const RadioText = createSubcomponent('span')({
  displayName: 'RadioButton.Text',
  modelHook: useRadioModel,
})(({children}: ExtractProps<typeof Text>, Element) => {
  const {disabled, variant} = React.useContext(RadioLabelContext);

  return (
    <Text
      as={Element}
      style={{
        cursor: disabled ? undefined : 'pointer',
        opacity: disabled ? (variant === 'inverse' ? '.4' : '1') : undefined,
        color: disabled
          ? variant === 'inverse'
            ? colors.frenchVanilla100
            : inputColors.disabled.text
          : variant === 'inverse'
          ? colors.frenchVanilla100
          : 'inherit',
      }}
      typeLevel="subtext.large"
    >
      {children}
    </Text>
  );
});
