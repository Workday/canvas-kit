import * as React from 'react';
import {
  createComponent,
  ErrorType,
  useUniqueId,
  useLocalRef,
} from '@workday/canvas-kit-react/common';
import {CheckboxRipple} from './CheckboxRipple';
import {CheckboxContainer} from './CheckboxContainer';
import {CheckboxCheck} from './CheckboxCheck';
import {CheckboxInput, CheckboxProps} from './CheckboxInput';

export const Checkbox = createComponent('input')({
  displayName: 'Checkbox',
  Component: ({label = '', id, ...elemProps}: CheckboxProps, ref, Element) => {
    const {disabled, checked = false, indeterminate, variant, error} = elemProps;
    const inputId = useUniqueId(id);
    const {localRef, elementRef} = useLocalRef(ref);
    React.useEffect(() => {
      if (typeof indeterminate === 'boolean' && localRef.current) {
        localRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, localRef]);

    return (
      <CheckboxContainer label={label} disabled={disabled} inputId={inputId} variant={variant}>
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

export {CheckboxProps};
