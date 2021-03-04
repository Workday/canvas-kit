import * as React from 'react';

import {PaginationModel} from '../types';

export interface UseGoToFormConfig {
  model: PaginationModel;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useGoToForm = (
  {onSubmit, model}: UseGoToFormConfig = {} as UseGoToFormConfig
) => {
  const [value, setValue] = React.useState<number>();

  React.useEffect(() => {
    if (value !== undefined && model.state.currentPage !== value) {
      setValue(model.state.currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.state.currentPage]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
    model.events.goTo(value || 0);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = parseInt(event.target.value, 10) || 0;
    setValue(formattedValue);
  };

  const formProps = {
    onSubmit: handleSubmit,
  };

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return {
    formProps,
    inputProps,
  };
};
