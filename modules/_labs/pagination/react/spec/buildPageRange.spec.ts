import {buildPageRange} from '../lib/Pagination/buildPageRange';
const context = describe;

describe('buildPageRange', () => {
  context('given the range size is less than the number of pages', () => {
    it('should return a range with the correct size', () => {
      /*
        e.g Given there are 10 pages,
        and the current page is set to 5 with a range size of 5,
        the range should be [2,3,4,5,6,7,8]
      */
      const currentPage = 5;
      const lastPage = 10;
      const rangeSize = 7;
      const pageRange = buildPageRange({currentPage, lastPage, rangeSize});

      expect(pageRange).toEqual([2, 3, 4, 5, 6, 7, 8]);
    });

    it('should prevent the range from going below one', () => {
      /*
        e.g Given there are 10 pages,
        and the current page is set to 2 with a range size of 5,
        the range should start at 1 (not go to -1)
      */
      const currentPage = 2;
      const lastPage = 10;
      const rangeSize = 5;
      const pageRange = buildPageRange({currentPage, lastPage, rangeSize});

      expect(pageRange).toEqual([1, 2, 3, 4, 5]);
    });

    it('should prevent the range from going above the number of pages', () => {
      /*
        e.g Given there are 10 pages,
        and the current page is set to 9 with a range size of 5,
        the range should end at 10 (not go to 11)
      */
      const currentPage = 9;
      const lastPage = 10;
      const rangeSize = 5;
      const pageRange = buildPageRange({currentPage, lastPage, rangeSize});

      expect(pageRange).toEqual([6, 7, 8, 9, 10]);
    });
  });

  context('given the range size is greater than the number of pages', () => {
    it('should constrain the range size to the number of pages', () => {
      /*
        e.g Given there are 3 pages,
        and the current page is set to 2 with a range size of 7,
        the range size should be [2,3,4,5,6,7,8]
      */
      const currentPage = 2;
      const lastPage = 3;
      const rangeSize = 7;
      const pageRange = buildPageRange({currentPage, lastPage, rangeSize});

      expect(pageRange).toEqual([1, 2, 3]);
    });

    it('should prevent the range from going below one', () => {
      /*
        e.g Given there are 3 pages,
        and the range is set to 5,
        and the current page is set to 1,
        the range size should be adjusted to 3
      */
      const currentPage = 1;
      const lastPage = 3;
      const rangeSize = 5;
      const pageRange = buildPageRange({currentPage, lastPage, rangeSize});

      expect(pageRange).toEqual([1, 2, 3]);
    });

    it('should prevent the range from going above the number of pages', () => {
      /*
        e.g Given there are 3 pages,
        and the range is set to 5,
        and the current page is set to 3,
        the range size should be adjusted to 3
      */
      const currentPage = 3;
      const lastPage = 3;
      const rangeSize = 5;
      const pageRange = buildPageRange({currentPage, lastPage, rangeSize});

      expect(pageRange).toEqual([1, 2, 3]);
    });
  });
});
