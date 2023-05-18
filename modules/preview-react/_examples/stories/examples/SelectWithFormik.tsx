import * as React from 'react';
import {useFormik} from 'formik';
import {Select} from '@workday/canvas-kit-preview-react/select';
import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const SelectWithFormik = () => {
  const formik = useFormik({
    initialValues: {
      selectedBook: '',
    },
    onSubmit: values => {
      // Send data to server
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 0);
    },
  });

  const model = useFormFieldModel();
  const formFieldInputProps = useFormFieldInput(model);

  return (
    <form onSubmit={formik.handleSubmit} action=".">
      <Flex gap="xs" flexDirection="column" alignItems="flex-start">
        <FormField orientation="vertical" alignSelf="stretch" alignItems="normal">
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
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Flex>
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
