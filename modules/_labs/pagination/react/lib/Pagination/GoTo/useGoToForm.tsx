import * as React from 'react';
import {useUniqueId} from '@workday/canvas-kit-react-common';

import {PaginationModel} from '../types';

export interface UseGoToFormConfig extends PaginationModel {
  inputId?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useGoToForm = (
  {inputId, onSubmit, state, events}: UseGoToFormConfig = {} as UseGoToFormConfig
) => {
  const [value, setValue] = React.useState<number>();

  React.useEffect(() => {
    if (value !== undefined && state.currentPage !== value) {
      setValue(state.currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentPage]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
    events.goToPage(value || 0);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = parseInt(event.target.value, 10) || 0;
    setValue(formattedValue);
  };

  const uniqueId = useUniqueId(inputId);

  const formProps = {
    onSubmit: handleSubmit,
  };

  const inputProps = {
    id: uniqueId,
    value,
    onChange: handleChange,
  };

  const labelProps = {
    htmlFor: uniqueId,
  };

  return {
    formProps,
    inputProps,
    labelProps,
  };
};
