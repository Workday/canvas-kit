import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {base} from '@workday/canvas-tokens-web';

import {CanvasColorValue} from '../../docgen/plugins/customTypes';
import {registerWidget} from '../Value';

const colors = Object.values(base).filter(color =>
  [
    'amber',
    'azure',
    'blue',
    'coral',
    'green',
    'indigo',
    'magenta',
    'neutral',
    'orange',
    'purple',
    'red',
    'slate',
    'teal',
    'white',
  ].some(family => color.startsWith(family))
);

registerWidget<CanvasColorValue>('canvasColor', () => {
  return (
    // eslint-disable-next-line no-empty-function
    <ColorPicker style={{width: 170}} colorSet={colors} onColorChange={() => {}} />
  );
});
