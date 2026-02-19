import {ColorInput} from './ColorInput';
import {createComponent} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {TextInputProps} from '@workday/canvas-kit-react/text-input';

export interface ColorPreviewProps extends TextInputProps {
  /**
   * The value of the ColorPreview.
   */
  value: string;
  /**
   * The HTML `id` of the underlying text input element.
   */
  id?: string;
}

export const colorPreviewStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.default,
    /* TODO: Update to `system.color.border.inverse.default` in v15. */
    borderColor: cssVar(system.color.border.inverse, base.neutral0),
    pointerEvents: 'none',
  },
});

export const ColorPreview = createComponent('input')({
  displayName: 'ColorPreview',
  Component: ({id, value, ...elemProps}: ColorPreviewProps, ref, Element) => (
    <ColorInput
      ref={ref}
      as={Element}
      id={id}
      value={value}
      readOnly={true}
      placeholder=""
      {...handleCsProp(elemProps, colorPreviewStencil())}
    />
  ),
});
