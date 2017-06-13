import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';

export function validateIconType(icon: CanvasIcon, expectedType: CanvasIconTypes) {
  if (icon.type !== expectedType) {
    throw `${icon.name}: Icon type "${icon.type}" does not match expected type "${expectedType}"`;
  }
}
