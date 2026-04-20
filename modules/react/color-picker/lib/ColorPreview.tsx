import {createComponent} from '@workday/canvas-kit-react/common';
import {TextInputProps} from '@workday/canvas-kit-react/text-input';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {ColorInput} from './ColorInput';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.surface.default, system.color.bg.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
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
