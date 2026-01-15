import React from 'react';
import {useCursorListModel} from './useCursorListModel';

import {isElementRTL} from '@workday/canvas-kit-react/common';

export const orientationKeyMap = {
  horizontal: {
    ArrowLeft: 'goToPrevious',
    Left: 'goToPrevious',
    ArrowRight: 'goToNext',
    Right: 'goToNext',
    Home: 'goToFirst',
    End: 'goToLast',
    PageDown: 'goToNextPage',
    PageUp: 'goToPreviousPage',
  },
  vertical: {
    ArrowUp: 'goToPrevious',
    Up: 'goToPrevious',
    ArrowDown: 'goToNext',
    Down: 'goToNext',
    Home: 'goToFirst',
    End: 'goToLast',
    PageDown: 'goToNextPage',
    PageUp: 'goToPreviousPage',
  },
} as const;

const rightToLeftMap = {
  ArrowLeft: 'ArrowRight',
  Left: 'Right',
  ArrowRight: 'ArrowLeft',
  Right: 'Left',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  Home: 'Home',
  End: 'End',
  PageDown: 'PageDown',
  PageUp: 'PageUp',
} as const;

const gridKeyMap = {
  ...orientationKeyMap.horizontal,
  Home: 'goToFirstOfRow',
  End: 'goToLastOfRow',
  ArrowUp: 'goToPreviousRow',
  Up: 'goToPreviousRow',
  ArrowDown: 'goToNextRow',
  Down: 'goToNextRow',
} as const;

const ctrlKeyMap = {
  Home: 'goToFirst',
  End: 'goToLast',
} as const;

const hasOwnKey = <T extends object>(obj: T, key: any): key is keyof T => obj.hasOwnProperty(key);

export function keyboardEventToCursorEvents(
  event: React.KeyboardEvent,
  model: ReturnType<typeof useCursorListModel>
): boolean {
  // Test ctrl key first
  if (event.ctrlKey) {
    for (const key in ctrlKeyMap) {
      if (hasOwnKey(ctrlKeyMap, key)) {
        if (event.key === key) {
          model.events[ctrlKeyMap[key]]?.();
          return true;
        }
      }
    }
  }
  // Try regular keys
  const map = model.state.columnCount > 0 ? gridKeyMap : orientationKeyMap[model.state.orientation];
  const isRTL = isElementRTL(event.currentTarget);
  for (const key in map) {
    if (hasOwnKey(map, key)) {
      if (isRTL ? event.key === rightToLeftMap[key] : event.key === key) {
        const eventName =
          model.state.columnCount > 0
            ? gridKeyMap[key]
            : orientationKeyMap[model.state.orientation][key];
        if (model.events[eventName]) {
          model.events[eventName]?.();
          return true;
        }
      }
    }
  }
  return false;
}
