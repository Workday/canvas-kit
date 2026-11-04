import React from 'react';
import {FieldErrors, Resolver, useForm} from 'react-hook-form';
import {SchemaOf, ValidationError, object, string} from 'yup';

import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {ErrorType, useUniqueId} from '@workday/canvas-kit-react/common';
import {
  FormField,
  useFormFieldInput,
  useFormFieldModel,
} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {visibleIcon, visibleStrikethroughIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  gap: system.gap.md,
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const useYupValidationResolver = <T extends {}>(validationSchema: SchemaOf<T>): Resolver<T> => {
  return React.useCallback<Resolver<T>>(
    async data => {
      try {
        await validationSchema.validate(data, {abortEarly: false});
        return {values: data, errors: {}};
      } catch (error) {
        // Yup throws a `ValidationError` for failed validation. Anything else is a real error.
        if (!ValidationError.isError(error)) {
          throw error;
        }

        const errors = error.inner.reduce<Record<string, {type: string; message: string}>>(
          (allErrors, currentError) => ({
            ...allErrors,
            [currentError.path ?? '']: {
              type: currentError.type ?? 'validation',
              message: currentError.message,
            },
          }),
          {}
        );

        return {values: {}, errors: errors as FieldErrors<T>};
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
  const formRef = React.useRef<HTMLFormElement>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [submitAttempt, setSubmitAttempt] = React.useState(0);
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
    resolver: useYupValidationResolver<LoginSchema>(validationSchema),
    mode: 'onTouched',
    shouldFocusError: true,
  });

  const onSubmit = handleSubmit(
    values => {
      setShowPassword(false);
      // Send data to server
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 0);
    },
    () => {
      // Count failed submits so we can move focus after FormField paints `aria-invalid`.
      setSubmitAttempt(count => count + 1);
    }
  );

  React.useEffect(() => {
    if (submitAttempt === 0) {
      return;
    }

    const firstInvalidField = formRef.current?.querySelector<HTMLElement>(
      '[aria-invalid="true"]:not([aria-hidden="true"]):not([tabindex="-1"])'
    );
    firstInvalidField?.focus();
  }, [submitAttempt, errors]);

  const passwordId = useUniqueId();
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const {ref: passwordCallbackRef, ...passwordRegistration} = register('password');
  const combinePasswordRef = (ref: HTMLInputElement | null) => {
    passwordCallbackRef(ref);
    passwordRef.current = ref;
  };
  // `InputGroup` renders the input, so hoist the model to keep the label, hint, and error wiring.
  const passwordModel = useFormFieldModel({
    id: passwordId,
    isRequired: true,
    error: errors.password ? 'error' : undefined,
  });
  const passwordInputProps = useFormFieldInput(passwordModel);
  return (
    <form ref={formRef} onSubmit={onSubmit} action="." noValidate={true}>
      <Flex cs={styles}>
        <FormField
          orientation="vertical"
          isRequired={true}
          error={!!errors.role ? 'error' : undefined}
        >
          <Select items={options} getTextValue={item => item.label}>
            <FormField.Label>What is your role?</FormField.Label>
            <FormField.Input as={Select.Input} {...register('role')} cs={{width: px2rem(280)}} />
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
        <FormField model={passwordModel} orientation="vertical">
          <FormField.Label>Password</FormField.Label>
          <FormField.Field as={InputGroup}>
            <InputGroup.Input
              {...passwordInputProps}
              {...passwordRegistration}
              error={errors.password ? ErrorType.Error : undefined}
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              spellCheck={false}
              ref={combinePasswordRef}
            />
            <InputGroup.InnerEnd>
              <Tooltip title={showPassword ? 'Hide Password' : 'Show Password'}>
                <TertiaryButton
                  type="button"
                  size="small"
                  icon={showPassword ? visibleStrikethroughIcon : visibleIcon}
                  aria-controls={`input-${passwordId}`}
                  onClick={() => {
                    setShowPassword(state => !state);
                    passwordRef.current?.focus();
                  }}
                />
              </Tooltip>
            </InputGroup.InnerEnd>
          </FormField.Field>
          <FormField.Hint>{errors.password?.message || passwordHint}</FormField.Hint>
        </FormField>

        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Flex>
    </form>
  );
};
