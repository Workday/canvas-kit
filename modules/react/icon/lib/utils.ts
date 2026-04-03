import {CanvasExpressiveIcon} from '@workday/canvas-expressive-icons-web';
import {CanvasIconTypes, CanvasSystemIcon} from '@workday/canvas-system-icons-web';
import {CanvasIcon} from '@workday/design-assets-types';

export function validateIconType(
  icon: CanvasIcon | CanvasSystemIcon | CanvasExpressiveIcon,
  expectedType: CanvasIconTypes
) {
  if (icon.type !== expectedType) {
    throw `${icon.name}: Icon type "${icon.type}" does not match expected type "${expectedType}"`;
  }
}
