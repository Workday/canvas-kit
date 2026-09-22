import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createStencil} from '@workday/canvas-kit-styling';
import {
  checkCircleFillIcon,
  checkboxFillIcon,
  circleIcon,
  squareIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {SelectionGroupMode} from './hooks/useSelectionGroupModel';

export const selectionGroupGlyphStencil = createStencil({
  base: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: system.legacy.size.xxxs,
    height: system.legacy.size.xxxs,
  },
});

export interface SelectionGroupGlyphProps {
  mode: SelectionGroupMode;
  selected: boolean;
}

/**
 * The glyph is always rendered, in both modes and in both selected states, so items never shift
 * width on selection. The shape communicates the mode (circle for single-select, square for
 * multi-select) and the checkmark communicates selection, so selected state is never conveyed by
 * color alone.
 */
const glyphs = {
  single: {selected: checkCircleFillIcon, unselected: circleIcon},
  multiple: {selected: checkboxFillIcon, unselected: squareIcon},
} as const;

export const SelectionGroupGlyph = ({mode, selected}: SelectionGroupGlyphProps) => (
  <span {...selectionGroupGlyphStencil()}>
    <SystemIcon icon={glyphs[mode][selected ? 'selected' : 'unselected']} size="xs" />
  </span>
);
