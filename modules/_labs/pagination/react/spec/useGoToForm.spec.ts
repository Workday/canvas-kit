import {useGoToForm, UseGoToFormConfig} from '../lib/Pagination/GoTo/useGoToForm';
import {usePaginationModel} from '../lib/Pagination/usePaginationModel';
import {renderHook} from '@testing-library/react-hooks';
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
