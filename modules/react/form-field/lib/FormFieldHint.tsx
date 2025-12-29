import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {useFormFieldHint, useFormFieldModel} from './hooks';

export const formFieldHintStencil = createStencil({
  extends: textStencil,
  base: {
    margin: system.space.zero,
  },
  modifiers: {
    error: {
      error: {
        color: brand.error.base,
      },
      caution: {
        color: system.color.text.caution.default,
      },
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.medium',
  },
});

export const FormFieldHint = createSubcomponent('p')({
  displayName: 'FormField.Hint',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldHint,
})<ExtractProps<typeof Text, never>>(
  ({children, typeLevel, variant, ...elemProps}, Element, model) => {
    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return (
      <Element
        {...mergeStyles(
          elemProps,
          formFieldHintStencil({typeLevel, variant, error: model.state.error})
        )}
      >
        {children}
      </Element>
    );
  }
);
