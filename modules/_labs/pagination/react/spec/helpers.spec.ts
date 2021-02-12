import {
  getLastPage,
  getRangeMin,
  getRangeMax,
  getVisibleResultsMin,
  getVisibleResultsMax,
} from '../lib/Pagination/common/utils/helpers';
const context = describe;

describe('Pagination helpers', () => {
  context('getLastPage', () => {
    it('should return the last page for the total results', () => {
      const resultCount = 10;
      const totalCount = 128;
      const lastPage = getLastPage(resultCount, totalCount);

      expect(lastPage).toBe(13);
    });
  });

  context('getRangeMin', () => {
    it('should return the first number in the pagination range', () => {
      const range = [1, 2, 3, 4, 5];
      const rangeMin = getRangeMin(range);

      expect(rangeMin).toBe(1);
    });
  });

  context('getRangeMax', () => {
    it('should return the last number in the pagination range', () => {
      const range = [1, 2, 3, 4, 5];
      const rangeMax = getRangeMax(range);

      expect(rangeMax).toBe(5);
    });
  });

  context('getVisibleResultsMin', () => {
    it('should return the first page number for the visible results', () => {
      const resultCount = 5;
      const totalCount = 10;
      const pageMin = getVisibleResultsMin(resultCount, totalCount);

      expect(pageMin).toBe(41);
    });
  });

  context('getVisibleResultsMax', () => {
    context('given the total count is greater than the current page * the result count', () => {
      it('should return the last page number for the visible results', () => {
        const currentPage = 5;
        const resultCount = 10;
        const totalCount = 55;
        const pageMax = getVisibleResultsMax(currentPage, resultCount, totalCount);
        expect(pageMax).toBe(50);
      });
    });

    context('given the total count is less than the current page * the result count', () => {
      it('should return the total count as the last page', () => {
        const currentPage = 5;
        const resultCount = 10;
        const totalCount = 42;
        const pageMax = getVisibleResultsMax(currentPage, resultCount, totalCount);
        expect(pageMax).toBe(totalCount);
      });
    });
  });
});
