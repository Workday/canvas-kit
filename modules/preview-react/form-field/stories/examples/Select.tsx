import * as React from 'react';
import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-preview-react/form-field';
import {Select} from '@workday/canvas-kit-preview-react/select';

export const WithSelect = () => {
  const [selected, setSelected] = React.useState(wineList[0].value);
  // Hoist the FormField model so we can pass it to `useFormFieldInput`
  const model = useFormFieldModel({isRequired: true});
  // Get all the FormField-related input props to pass to `Select`
  const formFieldInputProps = useFormFieldInput(model);

  return (
    <FormField orientation="vertical" model={model}>
      <FormField.Label>Choose a wine</FormField.Label>
      <Select
        options={wineList}
        value={selected}
        onChange={event => setSelected(event.currentTarget.value)}
        {...formFieldInputProps}
      />
      <FormField.Hint>When in doubt, go with the Chianti.</FormField.Hint>
    </FormField>
  );
};

export const wineList = [
  {label: 'Beaujolais', value: 'beaujolais'},
  {label: 'Bordeaux', value: 'bordeaux'},
  {label: 'Cabernet Sauvignon', value: 'cabernet sauvignon'},
  {label: 'Champagne', value: 'champagne'},
  {label: 'Chardonnay', value: 'chardonnay'},
  {label: 'Chianti', value: 'chianti'},
  {label: 'Malbec', value: 'malbec'},
  {label: 'Merlot', value: 'merlot'},
  {label: 'Pinot Grigio', value: 'pinot grigio'},
  {label: 'Pinot Gris', value: 'pinot gris'},
  {label: 'Pinot Noir', value: 'pinot noir'},
  {label: 'Primitivo', value: 'primitivo'},
  {label: 'Prosecco', value: 'prosecco'},
  {label: 'Riesling', value: 'riesling'},
  {label: 'Rioja', value: 'rioja'},
  {label: 'Rosé', value: 'rosé'},
  {label: 'Sauvignon Blanc', value: 'sauvignon blanc'},
  {label: 'Syrah', value: 'syrah'},
  {label: 'Zinfandel', value: 'zinfandel'},
];
