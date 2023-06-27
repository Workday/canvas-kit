import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useForm} from 'react-hook-form';

export const WithReactHookForm = () => {
  const form = useForm({
    defaultValues: {
      value: 'gluten-free',
    },
    mode: 'onChange',
  });

  const {register} = form;

  return (
    <Flex flexDirection="column">
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup name="pizza-crust" width="200px">
          <RadioGroup.Radio {...register('value')} value="deep-dish">
            Deep Dish
          </RadioGroup.Radio>
          <RadioGroup.Radio {...register('value')} value="gluten-free">
            Gluten Free
          </RadioGroup.Radio>
          <RadioGroup.Radio {...register('value')} value="cauliflower">
            Cauliflower
          </RadioGroup.Radio>
          <RadioGroup.Radio {...register('value')} value="custom">
            My favorite pizza crust flavor is butter because it's the best thing to put on bread
          </RadioGroup.Radio>
          <RadioGroup.Radio {...register('value')} value="thin">
            Thin
          </RadioGroup.Radio>
        </RadioGroup>
      </FormField>
      Value selected:{JSON.stringify(form.watch(), null, 2)}
    </Flex>
  );
};
