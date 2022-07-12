import * as React from 'react';
import {useFormik} from 'formik';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-preview-react/form-field';

export const SelectWithFormik = () => {
  const formik = useFormik({
    initialValues: {
      selectedBook: '',
    },
    onSubmit: data => {
      console.log(data);
    },
  });

  const model = useFormFieldModel();
  const formFieldInputProps = useFormFieldInput(model);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField orientation="vertical" alignItems="stretch">
        <FormField.Label>Choose a book</FormField.Label>
        <Select
          name="selectedBook"
          options={bookList}
          onChange={event => formik.setFieldValue('selectedBook', event.currentTarget.value)}
          value={formik.values.selectedBook}
          grow
          {...formFieldInputProps}
        />
      </FormField>
    </form>
  );
};

const bookList = [
  {label: 'Dessert Person by Claire Saffitz', value: 'dessert person'},
  {label: 'Elements of Pizza by Ken Forkish', value: 'the elements of pizza'},
  {label: 'Flour Water Salt Yeast by Ken Forkish', value: 'flour water salt yeast'},
  {label: 'Mastering Pasta by Marc Verti', value: 'mastering pasta'},
  {label: 'Patisserie by Christophe Felder', value: 'patisserie'},
  {label: 'Tartine by Elisabeth Prueitt & Chad Robertson', value: 'tartine'},
];
