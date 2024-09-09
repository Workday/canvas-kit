import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

import {accessibilityIcon, accountsIcon} from '@workday/canvas-system-icons-web';

import {system} from '@workday/canvas-tokens-web';

import {MultiSelect} from './MultiSelect';
import {Menu} from '../../../menu';

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
                    {item => (
                      <MultiSelect.Item>
                        <Menu.Item.Icon icon={accessibilityIcon} />
                        <Menu.Item.Text>{item}</Menu.Item.Text>
                        <Menu.Item.Icon icon={accountsIcon} />
                      </MultiSelect.Item>
                    )}
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
