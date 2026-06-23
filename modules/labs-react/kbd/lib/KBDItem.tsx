import React from 'react';

import {kbdStencil} from '@workday/canvas-kit-labs-react/kbd';
import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, handleCsProp} from '@workday/canvas-kit-styling';

export interface KBDItemProps extends CSProps {
  /**
   * The content of the key. This should be the label of a single keyboard key (e.g. `Ctrl`, `⌘`,
   * `Enter`).
   */
  children?: React.ReactNode;
}

/**
 * `KBD.Item` renders a single keyboard key as a semantic `kbd` element.
 */
export const KBDItem = createComponent('kbd')({
  displayName: 'KBD.Item',
  Component: ({children, ...elemProps}: KBDItemProps, ref, Element) => {
    return (
      <Element ref={ref} {...kbdStencil.parts.item} {...handleCsProp(elemProps)}>
        {children}
      </Element>
    );
  },
});
