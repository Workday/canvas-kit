import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {accessibilityIcon, accountsIcon} from '@workday/canvas-system-icons-web';

import {system} from '@workday/canvas-tokens-web';

import {MultiSelect} from './MultiSelect';
import {Menu} from '@workday/canvas-kit-react/menu';
import styled from '@emotion/styled';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

const items = ['Cheese', 'Olives', 'Onions', 'Pepperoni', 'Peppers'];

export const App = () => {
  const [color, setColor] = React.useState('red');
  return (
    <CanvasProvider>
      <>
        <form
          onSubmit={e => {
            console.log('form submitted');
            e.preventDefault();
          }}
        >
          <main className={mainContentStyles}>
            <input value={color} onChange={event => setColor(event.currentTarget.value)} />
            <MultiSelect items={items}>
              <FormField orientation="horizontal">
                <FormField.Label>Toppings</FormField.Label>
                <FormField.Input as={MultiSelect.Input} placeholder="Select Multiple" />
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
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </main>
        </form>
      </>
    </CanvasProvider>
  );
};
