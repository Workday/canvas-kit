import {renderHook} from '@testing-library/react-hooks';

import {UseGoToFormConfig, useGoToForm} from '../lib/Pagination/GoTo/useGoToForm';
import {usePaginationModel} from '../lib/Pagination/usePaginationModel';

const context = describe;

describe('useGoToForm', () => {
  context('given the config state', () => {
    it('should provide onSubmit in formProps', () => {
      const {result} = renderHook<UseGoToFormConfig, ReturnType<typeof useGoToForm>>(() => {
        const paginationModel = usePaginationModel({lastPage: 10});
        return useGoToForm({model: paginationModel});
      });

      expect(result.current.formProps).toHaveProperty('onSubmit');
    });

    it('should provide the correct input props', () => {
      const {result} = renderHook<UseGoToFormConfig, ReturnType<typeof useGoToForm>>(() => {
        const paginationModel = usePaginationModel({lastPage: 10});
        return useGoToForm({model: paginationModel});
      });

      expect(result.current.inputProps).toHaveProperty('value');
      expect(result.current.inputProps).toHaveProperty('onChange');
    });
  });
});
