import * as React from 'react';

import {ErrorType, createComponent, useUniqueId} from '@workday/canvas-kit-react/common';
import {CSProps} from '@workday/canvas-kit-styling';

import {SwitchBackground} from './SwitchBackground';
import {SwitchCircle} from './SwitchCircle';
import {SwitchContainer} from './SwitchContainer';
import {SwitchIcon} from './SwitchIcon';
import {SwitchInput} from './SwitchInput';

export interface SwitchProps extends CSProps {
  /**
   * If true, set the Switch to the on state.
   * @default false
   */
  checked?: boolean;
  /**
   * If true, set the Switch to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The HTML `id` of the underlying checkbox input element.
   * @default A uniquely generated id
   */
  id?: string;
  /**
   * The function called when the Switch state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value of the Switch.
   */
  value?: string;
  /**
   * The type of error associated with the Switch (if applicable).
   */
  error?: ErrorType;
}

export const Switch = createComponent('input')({
  displayName: 'Switch',
  Component: (
    {checked = false, id, disabled = false, onChange, value, ...elemProps}: SwitchProps,
    ref,
    Element
  ) => {
    const inputId = useUniqueId(id);
    return (
      <SwitchContainer>
        <SwitchInput
          as={Element}
          checked={checked}
          disabled={disabled}
          id={inputId}
          ref={ref}
          onChange={onChange}
          role="switch"
          type="checkbox"
          value={value}
          {...elemProps}
        />
        <SwitchBackground>
          <SwitchCircle checked={checked} />
          <SwitchIcon checked={checked} />
        </SwitchBackground>
      </SwitchContainer>
    );
  },
  subComponents: {
    ErrorType,
  },
});
