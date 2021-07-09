import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Box} from '@workday/canvas-kit-labs-react/common';

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
    setPizzaChecked(anyToppingChecked);
    setPizzaIndeterminate(anyToppingChecked && anyToppingUnchecked);
  };

  return (
    <>
      <Checkbox
        checked={pizzaChecked}
        indeterminate={pizzaIndeterminate}
        label="Supreme Pizza Toppings"
        onChange={handlePizzaChange}
      />
      <Box marginLeft="l" marginTop="xxs">
        {toppings.map((topping, index) => (
          <Checkbox
            checked={topping.checked}
            key={topping.name}
            label={topping.name}
            onChange={event => handleToppingChange(event, index)}
          />
        ))}
      </Box>
    </>
  );
};
