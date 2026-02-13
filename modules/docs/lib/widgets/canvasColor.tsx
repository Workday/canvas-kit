import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';

import {CanvasColorValue} from '../../docgen/plugins/customTypes';
import {registerWidget} from '../Value';

registerWidget<CanvasColorValue>('canvasColor', () => {
  return (
    // eslint-disable-next-line no-empty-function
    <ColorPicker style={{width: 170}} colorSet={Object.values(colors)} onColorChange={() => {}} />
  );
});
