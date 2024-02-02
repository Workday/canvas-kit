import React from 'react';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelContext} from './RadioLabel';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

const radioTextStyles = createStencil({
  base: {
    ...system.type.subtext.large,
    cursor: 'pointer',
    opacity: '1',
    color: base.blackPepper300,
  },
  modifiers: {
    variant: {
      inverse: {
        color: base.frenchVanilla100,
      },
    },
    disabled: {
      true: {
        cursor: 'none',
        color: base.licorice100,
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: true},
      styles: {color: base.frenchVanilla100, opacity: system.opacity.disabled},
    },
  ],
});

export const RadioText = createSubcomponent('span')({
  displayName: 'RadioButton.Text',
  modelHook: useRadioModel,
})(({children, ...elemProps}: ExtractProps<typeof Text>, Element) => {
  const {variant, disabled} = React.useContext(RadioLabelContext);
  return (
    <Text as={Element} {...mergeStyles(elemProps, radioTextStyles({variant, disabled}))}>
      {children}
    </Text>
  );
});
