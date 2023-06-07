import React from 'react';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {inputColors, colors} from '@workday/canvas-kit-react/tokens';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelContext} from './RadioLabel';
import {Text} from '@workday/canvas-kit-react/text';

// const StyledLabel = styled('label')<{disabled?: boolean; variant?: 'inverse' | undefined}>(
//   {},
//   ({variant}) => (variant === 'inverse' ? {color: colors.frenchVanilla100} : undefined),
//   ({disabled, variant}) =>
//     disabled
//       ? {
//           color: variant === 'inverse' ? colors.frenchVanilla100 : inputColors.disabled.text,
//           opacity: variant === 'inverse' ? '.4' : '1',
//         }
//       : {cursor: 'pointer'}
// );

export const RadioText = createSubcomponent('span')({
  displayName: 'RadioButton.Text',
  modelHook: useRadioModel,
})(({children}, Element, model) => {
  const radioContext = React.useContext(RadioLabelContext);
  console.log('radioContext in text', radioContext);
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

export default RadioText;
