import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const listStyles = createStyles({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const nestedListStyles = createStyles({
  listStyle: 'none',
  margin: 0,
  marginInlineStart: system.gap.xl,
  marginBlockStart: system.gap.sm,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.sm,
});

export const Indeterminate = () => {
  const [pizzaChecked, setPizzaChecked] = React.useState(false);
  const [pizzaIndeterminate, setPizzaIndeterminate] = React.useState(false);

  const [toppings, setToppings] = React.useState([
    {name: 'Pepperoni', checked: false},
    {name: 'Sausage', checked: false},
    {name: 'Bell Peppers', checked: false},
    {name: 'Olives', checked: false},
    {name: 'Onions', checked: false},
  ]);

  const handlePizzaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked || (!checked && pizzaIndeterminate)) {
      setPizzaChecked(true);
      setToppings(
        toppings.map(topping => ({
          ...topping,
          checked: true,
        }))
      );
    } else {
      setPizzaChecked(false);
      setToppings(
        toppings.map(topping => ({
          ...topping,
          checked: false,
        }))
      );
    }

    setPizzaIndeterminate(false);
  };

  const handleToppingChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newToppings = toppings.map(topping => ({...topping}));
    newToppings[index].checked = event.target.checked;
    setToppings(newToppings);

    const anyToppingChecked = newToppings.filter(topping => topping.checked).length > 0;
    const anyToppingUnchecked = newToppings.filter(topping => !topping.checked).length > 0;
    const allToppingChecked = !anyToppingUnchecked;
    setPizzaIndeterminate(anyToppingChecked && anyToppingUnchecked);
    setPizzaChecked(allToppingChecked);
  };

  return (
    <ul className={listStyles}>
      <li>
        <Checkbox
          checked={pizzaChecked}
          indeterminate={pizzaIndeterminate}
          label="Supreme Pizza Toppings"
          onChange={handlePizzaChange}
        />
        <ul className={nestedListStyles}>
          {toppings.map((topping, index) => (
            <li key={topping.name}>
              <Checkbox
                checked={topping.checked}
                label={topping.name}
                onChange={event => handleToppingChange(event, index)}
              />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
