import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CanvasColor, colors} from '@workday/canvas-kit-react/tokens';

export function validateIconType(icon: CanvasIcon, expectedType: CanvasIconTypes) {
  if (icon.type !== expectedType) {
    throw `${icon.name}: Icon type "${icon.type}" does not match expected type "${expectedType}"`;
  }
}

export function getColor(value?: CanvasColor | string) {
  if (value! in colors) {
    return colors[value as keyof typeof colors];
  }
  return value;
}
