import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';

import {useComboboxModel} from './useComboboxModel';
import {ComboboxInput} from './ComboboxInput';
import {ComboboxMenu} from './ComboboxMenu';
export interface ComboboxProps {
  /**
   * Children of the Combobox. Should contain a `<Combobox.Input>` and a `<Combobox.Menu>`
   */
  children: React.ReactNode;
}

export const Combobox = createContainer()({
  displayName: 'Combobox',
  modelHook: useComboboxModel,
  subComponents: {
    /**
     * The input of the combobox. This element will have `role="combobox"` applied, along with
     * `aria-haspopup="true"`
     */
    Input: ComboboxInput,
    /**
     * A custom {@link Menu} component that uses `aria-activedescendant` instead of roving tab index
     * to keep the focus on the {@link ComboboxInput Combobox.Input}.
     */
    Menu: ComboboxMenu,
  },
})<ComboboxProps>(({children}, _, model) => {
  return <ComboboxMenu model={model}>{children}</ComboboxMenu>;
});
