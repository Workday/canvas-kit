import React from 'react';

import {useForm, FieldErrorsImpl} from 'react-hook-form';
import {object, SchemaOf, string} from 'yup';

import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {HStack, VStack} from '@workday/canvas-kit-react/layout';
import {TertiaryButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {visibleIcon, invisibleIcon} from '@workday/canvas-system-icons-web';
import {useUniqueId} from '@workday/canvas-kit-react/common';

type YupValidationResolver = <T extends {}>(
  validationSchema: SchemaOf<T>
) => (data: T) => Promise<{values: T; errors: {}} | {values: {}; errors: FieldErrorsImpl<T>}>;

const useYupValidationResolver: YupValidationResolver = validationSchema => {
  return React.useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {abortEarly: false});
        return {values, errors: {}};
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
};

interface LoginSchema {
  email: string;
  password: string;
}

const passwordMinimum = 8;
const passwordHint = `Password should be of minimum ${passwordMinimum} characters length`;
const emailRequired = 'Email is required';
const passwordRequired = 'Password is required';

const validationSchema: SchemaOf<LoginSchema> = object({
  email: string()
    .email('Enter a valid email')
    .required(emailRequired),
  password: string()
    .min(passwordMinimum, passwordHint)
    .required(passwordRequired),
});

export const TextInputWithReactHookForm = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<LoginSchema>({
    defaultValues: {
      email: 'example@baz.com',
      password: 'foobarbaz',
    },
    resolver: useYupValidationResolver(validationSchema),
    mode: 'onTouched',
  });

  const onSubmit = handleSubmit(values => {
    setShowPassword(false);
    // Send data to server
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 0);
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const passwordId = useUniqueId();
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const {ref: passwordCallbackRef, ...passwordRegistration} = register('password');
  const combinePasswordRef = (ref: HTMLInputElement | null) => {
    passwordCallbackRef(ref);
    passwordRef.current = ref;
  };

  return (
    <form onSubmit={onSubmit} action=".">
      <VStack spacing="xs" alignItems="flex-start">
        <TextInput orientation="vertical" isRequired={true} hasError={!!errors.email}>
          <TextInput.Label>Email</TextInput.Label>
          <TextInput.Field
            {...register('email')}
            autoComplete="username"
            placeholder="yourName@example.com"
          />
          <TextInput.Hint>{errors.email?.message}</TextInput.Hint>
        </TextInput>
        <TextInput
          orientation="vertical"
          id={passwordId}
          isRequired={true}
          hasError={!!errors.password}
        >
          <TextInput.Label>Password</TextInput.Label>
          <HStack spacing="xxs">
            <TextInput.Field
              {...passwordRegistration}
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              spellCheck={false}
              ref={combinePasswordRef}
            />
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
          </HStack>
          <TextInput.Hint>{errors.password?.message || passwordHint}</TextInput.Hint>
        </TextInput>

        <PrimaryButton type="submit">Submit</PrimaryButton>
      </VStack>
    </form>
  );
};
