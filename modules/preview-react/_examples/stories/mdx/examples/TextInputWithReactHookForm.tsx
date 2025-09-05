import React from 'react';

import {useForm, FieldErrorsImpl} from 'react-hook-form';
import {object, SchemaOf, string} from 'yup';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TertiaryButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {Select} from '@workday/canvas-kit-react/select';
import {FormField} from '@workday/canvas-kit-react/form-field';
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
          //@ts-ignore
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
  role: string;
}

const passwordMinimum = 8;
const passwordHint = `Password should be of minimum ${passwordMinimum} characters length`;
const emailRequired = 'Email is required';
const passwordRequired = 'Password is required';
const roleRequired = 'Role is required';

const validationSchema: SchemaOf<LoginSchema> = object({
  email: string().email('Enter a valid email').required(emailRequired),
  password: string().min(passwordMinimum, passwordHint).required(passwordRequired),
  role: string().required(roleRequired),
});

const options = [
  {id: '1', label: 'Developer'},
  {id: '2', label: 'Designer'},
  {id: '3', label: 'Product Manager'},
];

export const TextInputWithReactHookForm = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<LoginSchema>({
    defaultValues: {
      email: 'example@baz.com',
      password: 'foobarbaz',
      role: '',
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
    <form onSubmit={onSubmit} action="." noValidate={true}>
      <Flex gap="xs" flexDirection="column" alignItems="flex-start">
        <FormField
          orientation="vertical"
          isRequired={true}
          error={!!errors.role ? 'error' : undefined}
        >
          <Select items={options} getTextValue={item => item.label}>
            <FormField.Label>What is your role?</FormField.Label>
            <FormField.Input as={Select.Input} {...register('role')} width="280px" />
            <Select.Popper>
              <Select.Card>
                <Select.List maxHeight={200}>
                  {item => {
                    return <Select.Item>{item.label}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>{errors.role?.message}</FormField.Hint>
          </Select>
        </FormField>
        <FormField
          orientation="vertical"
          isRequired={true}
          error={!!errors.email ? 'error' : undefined}
        >
          <FormField.Label>Email</FormField.Label>
          <FormField.Field>
            <FormField.Input
              as={TextInput}
              {...register('email')}
              autoComplete="username"
              placeholder="yourName@example.com"
            />
          </FormField.Field>
          <FormField.Hint>{errors.email?.message}</FormField.Hint>
        </FormField>
        <FormField
          orientation="vertical"
          id={passwordId}
          isRequired={true}
          error={!!errors.password ? 'error' : undefined}
        >
          <FormField.Label>Password</FormField.Label>
          <Flex gap="xxs">
            <FormField.Field>
              <FormField.Input
                as={TextInput}
                {...passwordRegistration}
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                spellCheck={false}
                ref={combinePasswordRef}
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
          <FormField.Hint>{errors.password?.message || passwordHint}</FormField.Hint>
        </FormField>

        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Flex>
    </form>
  );
};
