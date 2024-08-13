import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

import {system} from '@workday/canvas-tokens-web';

import {MultiSelect} from './MultiSelect';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

const items = ['Cheese', 'Pepperoni', 'Olives'];

export const App = () => {
  return (
    <CanvasProvider>
      <>
        <main className={mainContentStyles}>
          <p>Welcome to Canvas Kit v11 Starter!!</p>
          <MultiSelect items={items}>
            <FormField orientation="horizontal">
              <FormField.Label>Toppings</FormField.Label>
              <FormField.Input as={MultiSelect.Input} placeholder="Search" />
              <MultiSelect.Popper>
                <MultiSelect.Card>
                  <MultiSelect.List>
                    {item => <MultiSelect.Item>{item}</MultiSelect.Item>}
                  </MultiSelect.List>
                </MultiSelect.Card>
              </MultiSelect.Popper>
            </FormField>
          </MultiSelect>
        </main>
      </>
    </CanvasProvider>
  );
};
