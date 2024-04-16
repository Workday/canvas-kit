import React from 'react';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {useRadioModel} from './hooks/useRadioModel';
import {RadioLabelContext} from './RadioLabel';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

const radioTextStencil = createStencil({
  extends: textStencil,
  base: {
    cursor: 'pointer',
  },
  modifiers: {
    variant: {
      inverse: {
        color: system.color.text.inverse,
      },
    },
    disabled: {
      true: {
        cursor: 'none',
        color: system.color.text.disabled,
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: true},
      styles: {
        color: system.color.text.inverse,
        opacity: system.opacity.disabled,
      },
    },
  ],
  // @ts-ignore
  defaultModifiers: {typeLevel: 'subtext.large'},
});

export const RadioText = createSubcomponent('span')({
  displayName: 'RadioButton.Text',
  modelHook: useRadioModel,
})(({children, ...elemProps}: ExtractProps<typeof Text>, Element) => {
  const {variant, disabled} = React.useContext(RadioLabelContext);
  return (
    <Element {...mergeStyles(elemProps, radioTextStencil({variant, disabled}))}>{children}</Element>
  );
});
