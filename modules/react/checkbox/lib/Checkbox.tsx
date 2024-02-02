import * as React from 'react';
import {
  createComponent,
  ErrorType,
  useUniqueId,
  useLocalRef,
} from '@workday/canvas-kit-react/common';

import {cssVar} from '@workday/canvas-kit-styling';
import {base, brand} from '@workday/canvas-tokens-web';
import {CheckboxRipple} from './CheckboxRipple';
import {CheckboxContainer, inputVars} from './CheckboxContainer';
import {CheckboxCheck} from './CheckboxCheck';
import {CheckboxInput, CheckboxProps} from './CheckboxInput';

export const Checkbox = createComponent('input')({
  displayName: 'Checkbox',
  Component: (
    {
      checked = false,
      label = '',
      id,
      disabled,
      indeterminate,
      variant,
      ...elemProps
    }: CheckboxProps,
    ref,
    Element
  ) => {
    const inputId = useUniqueId(id);
    const {localRef, elementRef} = useLocalRef(ref);
    React.useEffect(() => {
      if (typeof indeterminate === 'boolean' && localRef.current) {
        localRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, localRef]);

    return (
      <CheckboxContainer
        label={label}
        disabled={disabled}
        inputId={inputId}
        variant={variant}
        cs={inputVars({
          errorInner: cssVar(brand.error.base, base.cinnamon500),
          errorOuter: 'transparent',
          alertInner: cssVar(brand.alert.base, base.cantaloupe600),
          alertOuter: cssVar(brand.alert.darkest, base.cantaloupe400),
        })}
      >
        <CheckboxInput
          as={Element}
          id={inputId}
          ref={elementRef}
          variant={variant}
          checked={checked}
          disabled={disabled}
          indeterminate={indeterminate}
          {...elemProps}
        />
        <CheckboxRipple />
        <CheckboxCheck variant={variant} checked={checked} indeterminate={indeterminate} />
      </CheckboxContainer>
    );
  },
  subComponents: {
    ErrorType,
  },
});

export {CheckboxProps};
