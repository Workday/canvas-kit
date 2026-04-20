import * as React from 'react';

import {
  ErrorType,
  createComponent,
  useLocalRef,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

import {CheckboxCheck} from './CheckboxCheck';
import {CheckboxContainer} from './CheckboxContainer';
import {CheckboxInput, type CheckboxProps} from './CheckboxInput';
import {CheckboxRipple} from './CheckboxRipple';

export const Checkbox = createComponent('input')({
  displayName: 'Checkbox',
  Component: ({id, label = '', ...elemProps}: CheckboxProps, ref, Element) => {
    const {checked = false, disabled, error, indeterminate, variant} = elemProps;
    const inputId = useUniqueId(id);
    const {localRef, elementRef} = useLocalRef(ref);

    React.useEffect(() => {
      if (typeof indeterminate === 'boolean' && localRef.current) {
        localRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, localRef]);

    return (
      <CheckboxContainer label={label} disabled={disabled} id={inputId} variant={variant}>
        <CheckboxInput as={Element} id={inputId} ref={elementRef} {...elemProps} />
        <CheckboxRipple />
        <CheckboxCheck
          variant={variant}
          checked={checked}
          indeterminate={indeterminate}
          error={error}
        />
      </CheckboxContainer>
    );
  },
  subComponents: {
    ErrorType,
  },
});

export {type CheckboxProps};
