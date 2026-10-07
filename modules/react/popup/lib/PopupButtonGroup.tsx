import * as React from 'react';

import {GrowthBehavior, createSubcomponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {usePopupModel} from './hooks';

export interface PopupButtonGroupProps extends GrowthBehavior, CSProps {
  /**
   * The contents of the PopupButtonGroup. Can be `Button` children or any valid elements.
   */
  children?: React.ReactNode;
  /**
   * The position of elements within the PopupButtonGroup. Can be `start`, `center`, or `end`.
   * @default 'end'
   */
  position?: 'start' | 'center' | 'end';
}

export const popupButtonGroupStencil = createStencil({
  base: {
    display: 'flex',
    gap: system.legacy.gap.sm,
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  modifiers: {
    position: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
    grow: {
      true: {
        '& button': {
          width: '100%',
        },
      },
    },
  },
});

export const PopupButtonGroup = createSubcomponent('div')({
  displayName: 'Popup.ButtonGroup',
  modelHook: usePopupModel,
})(({children, position = 'end', grow, ...elemProps}: PopupButtonGroupProps, Element) => {
  return (
    <Element {...handleCsProp(elemProps, popupButtonGroupStencil({position, grow}))}>
      {children}
    </Element>
  );
});
