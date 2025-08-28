import React from 'react';

import {useFormik} from 'formik';
import {object, SchemaOf, string} from 'yup';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TertiaryButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {visibleIcon, invisibleIcon} from '@workday/canvas-system-icons-web';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';

interface LoginSchema {
  email: string;
  password: string;
}

const passwordMinimum = 8;
const passwordHint = `Password should be of minimum ${passwordMinimum} characters length`;
const emailRequired = 'Email is required';
const passwordRequired = 'Password is required';

const validationSchema: SchemaOf<LoginSchema> = object({
  email: string().email('Enter a valid email').required(emailRequired),
  password: string().min(passwordMinimum, passwordHint).required(passwordRequired),
});

export const TextInputWithFormik = () => {
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const passwordId = useUniqueId();

  const formik = useFormik({
    initialValues: {
      email: 'example@baz.com',
      password: 'foobarbaz',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      setShowPassword(false);
      // Send data to server
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 0);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} action=".">
      <Flex gap="xs" flexDirection="column" alignItems="flex-start">
        <FormField
          orientation="vertical"
          isRequired={true}
          error={formik.touched.email && !!formik.errors.email ? 'error' : undefined}
        >
          <FormField.Label>Email</FormField.Label>
          <FormField.Field>
            <FormField.Input
              as={TextInput}
              name="email"
              autoComplete="username"
              placeholder="yourName@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </FormField.Field>
          <FormField.Hint>{formik.touched.email && formik.errors.email}</FormField.Hint>
        </FormField>
        <FormField
          orientation="vertical"
          id={passwordId}
          error={formik.touched.password && !!formik.errors.password ? 'error' : undefined}
          isRequired={true}
        >
          <FormField.Label>Password</FormField.Label>
          <Flex gap="xxs">
            <FormField.Field>
              <FormField.Input
                as={TextInput}
                type={showPassword ? 'text' : 'password'}
                name="password"
                autoComplete="current-password"
                spellCheck={false}
                ref={passwordRef}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </FormField.Field>
            <TertiaryButton
              type="button"
              icon={showPassword ? invisibleIcon : visibleIcon}
              aria-label={showPassword ? 'Hide Password' : 'Show Password'}
              aria-controls={`input-${passwordId}`}
              onClick={() => {
                setShowPassword(state => !state);
                passwordRef.current?.focus();
              }}
            />
          </Flex>
          <FormField.Hint>
            {(formik.touched.password && formik.errors.password) || passwordHint}
          </FormField.Hint>
        </FormField>

        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Flex>
    </form>
  );
};
