import React from 'react';

import {useFormik} from 'formik';
import * as yup from 'yup';

import {TextInput, useTextInputModel} from '@workday/canvas-kit-labs-react/text-input';
import {HStack, VStack} from '@workday/canvas-kit-labs-react/layout';
import {IconButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {visibleIcon, invisibleIcon} from '@workday/canvas-system-icons-web';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const LoginForm = () => {
  const passwordMinimum = 8;
  const passwordHint = `Password should be of minimum ${passwordMinimum} characters length`;
  const emailRequired = 'Email is required';
  const passwordRequired = 'Password is required';

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required(emailRequired),
    password: yup
      .string()
      .min(passwordMinimum, passwordHint)
      .required(passwordRequired),
  });

  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const passwordId = useUniqueId();

  const emailModel = useTextInputModel();
  const passwordModel = useTextInputModel({inputId: passwordId});

  const formik = useFormik({
    initialValues: {
      email: 'example@baz.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      passwordRef.current.type = 'password';

      // Send data to server
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 0);
    },
  });

  React.useEffect(() => {
    if (formik.touched.email && formik.errors.email) {
      emailModel.events.addError();
    } else {
      emailModel.events.removeError();
    }
    if (formik.touched.password && formik.errors.password) {
      passwordModel.events.addError();
    } else {
      passwordModel.events.removeError();
    }
  }, [formik.touched, formik.errors, emailModel.events, passwordModel.events]);

  return (
    <form onSubmit={formik.handleSubmit} action=".">
      <VStack spacing="xs" alignItems="flex-start">
        <TextInput model={emailModel}>
          <TextInput.Label isRequiredLabel={emailRequired}>Email</TextInput.Label>
          <TextInput.Field
            name="email"
            autoComplete="username"
            placeholder="yourName@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <TextInput.Hint>{formik.touched.email && formik.errors.email}</TextInput.Hint>
        </TextInput>
        <TextInput model={passwordModel}>
          <TextInput.Label isRequiredLabel={passwordRequired}>Password</TextInput.Label>
          <HStack spacing="xxs">
            <TextInput.Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              ref={passwordRef}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <IconButton
              type="button"
              icon={showPassword ? invisibleIcon : visibleIcon}
              aria-label={showPassword ? 'Hide Password' : 'Show Password'}
              aria-controls={passwordId}
              onClick={() => {
                setShowPassword(state => !state);
                passwordRef.current.focus();
              }}
            />
          </HStack>
          <TextInput.Hint>
            {(formik.touched.password && formik.errors.password) || passwordHint}
          </TextInput.Hint>
        </TextInput>

        <PrimaryButton type="submit">Submit</PrimaryButton>
      </VStack>
    </form>
  );
};
