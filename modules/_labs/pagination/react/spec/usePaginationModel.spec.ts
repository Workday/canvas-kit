import {renderHook, act, RenderHookResult} from '@testing-library/react-hooks';
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

      it('should set rangeMin correctly', () => {
        expect(result.current.state.rangeMin).toBe(3);
      });

      it('should set rangeMax correctly', () => {
        expect(result.current.state.rangeMax).toBe(5);
      });
    });
  });

  context('given the model events', () => {
    let renderHookResult = {} as RenderHookResult<
      UsePaginationModelConfig,
      ReturnType<typeof usePaginationModel>
    >;

    beforeEach(() => {
      renderHookResult = renderHook<
        UsePaginationModelConfig,
        ReturnType<typeof usePaginationModel>
      >(() =>
        usePaginationModel({
          initialCurrentPage: 5,
          lastPage: 10,
        })
      );
    });

    it('should set currentPage to the first page on jumpToFirst', () => {
      const {result} = renderHookResult;
      act(() => {
        result.current.events.jumpToFirst();
      });

      expect(result.current.state.currentPage).toBe(1);
    });

    it('should set currentPage to the last page on jumpToLast', () => {
      const {result} = renderHookResult;
      act(() => {
        result.current.events.jumpToLast();
      });
      expect(result.current.state.currentPage).toBe(10);
    });

    it('should set currentPage to the next page on stepToNext', () => {
      const {result} = renderHookResult;
      act(() => {
        result.current.events.stepToNext();
      });
      expect(result.current.state.currentPage).toBe(6);
    });

    it('should set currentPage to the previous page on stepToPrevious', () => {
      const {result} = renderHookResult;
      act(() => {
        result.current.events.stepToPrevious();
      });
      expect(result.current.state.currentPage).toBe(4);
    });

    context('given the goToPage event', () => {
      it('should set currentPage to the given page if it is within the page count', () => {
        const {result} = renderHookResult;
        act(() => {
          result.current.events.goToPage(8);
        });
        expect(result.current.state.currentPage).toBe(8);
      });

      it('should set currentPage to the first page if the given page is below the page count', () => {
        const {result} = renderHookResult;
        act(() => {
          result.current.events.goToPage(0);
        });
        expect(result.current.state.currentPage).toBe(1);
      });

      it('should set currentPage to the last page if the given page is above the page count', () => {
        const {result} = renderHookResult;
        act(() => {
          result.current.events.goToPage(12);
        });
        expect(result.current.state.currentPage).toBe(10);
      });
    });
  });
});
