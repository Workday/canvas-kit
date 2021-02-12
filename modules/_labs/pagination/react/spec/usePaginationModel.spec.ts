import {renderHook, act} from '@testing-library/react-hooks';
import {usePaginationModel, UsePaginationModelConfig} from '../lib/Pagination/usePaginationModel';
const context = describe;

describe('usePaginationModel hook', () => {
  context('given the model state', () => {
    context('given a default state', () => {
      const {result} = renderHook<UsePaginationModelConfig, ReturnType<typeof usePaginationModel>>(
        () =>
          usePaginationModel({
            lastPage: 10,
          })
      );

      it('should set currentPage to 1', () => {
        expect(result.current.state.currentPage).toBe(1);
      });

      it('should set rangeSize to 5', () => {
        expect(result.current.state.rangeSize).toBe(5);
      });
    });

    context('given a configured state', () => {
      const {result} = renderHook<UsePaginationModelConfig, ReturnType<typeof usePaginationModel>>(
        () =>
          usePaginationModel({
            initialCurrentPage: 4,
            lastPage: 10,
            rangeSize: 3,
          })
      );

      it('should set currentPage correctly', () => {
        expect(result.current.state.currentPage).toBe(4);
      });
    });
  });

  context('given the model events', () => {
    const buildModel = (
      config = {} as Partial<UsePaginationModelConfig>
    ): ReturnType<typeof usePaginationModel> => {
      const defaultConfig = {
        initialCurrentPage: 5,
        lastPage: 10,
      };
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return usePaginationModel({
        ...defaultConfig,
        ...config,
      });
    };

    it('should set currentPage to the first page on first', () => {
      const {result} = renderHook(() => buildModel());
      act(() => {
        result.current.events.first();
      });

      expect(result.current.state.currentPage).toBe(1);
    });

    it('should set currentPage to the last page on last', () => {
      const {result} = renderHook(() => buildModel());
      act(() => {
        result.current.events.last();
      });
      expect(result.current.state.currentPage).toBe(10);
    });

    it('should set currentPage to the next page on next', () => {
      const {result} = renderHook(() => buildModel());
      act(() => {
        result.current.events.next();
      });
      expect(result.current.state.currentPage).toBe(6);
    });

    it('should set currentPage to the previous page on previous', () => {
      const {result} = renderHook(() => buildModel());
      act(() => {
        result.current.events.previous();
      });
      expect(result.current.state.currentPage).toBe(4);
    });

    it('should call onPageChange with the currentPage when on updates', () => {
      const onPageChange = jest.fn();
      const {result} = renderHook(() => buildModel({onPageChange}));
      act(() => {
        result.current.events.previous();
      });
      expect(onPageChange).toHaveBeenCalledWith(4);
    });

    context('given the goTo event', () => {
      it('should set currentPage to the given page if it is within the page count', () => {
        const {result} = renderHook(() => buildModel());
        act(() => {
          result.current.events.goTo(8);
        });
        expect(result.current.state.currentPage).toBe(8);
      });

      it('should set currentPage to the first page if the given page is below the page count', () => {
        const {result} = renderHook(() => buildModel());
        act(() => {
          result.current.events.goTo(0);
        });
        expect(result.current.state.currentPage).toBe(1);
      });

      it('should set currentPage to the last page if the given page is above the page count', () => {
        const {result} = renderHook(() => buildModel());
        act(() => {
          result.current.events.goTo(12);
        });
        expect(result.current.state.currentPage).toBe(10);
      });
    });
  });
});
