import {getPages} from '../lib/Pages';

describe('Pages', () => {
  describe('Desktop', () => {
    describe('when current page is 1', () => {
      it('should handle one page', () => {
        expect(getPages(1, 1, false)).toEqual([[1], []]);
      });

      it('should handle 2 pages', () => {
        expect(getPages(2, 1, false)).toEqual([[1, 2], []]);
      });

      it('should handle 3 pages', () => {
        expect(getPages(3, 1, false)).toEqual([[1, 2, 3], []]);
      });

      it('should handle 4 pages', () => {
        expect(getPages(4, 1, false)).toEqual([[1, 2, 3, 4], []]);
      });

      it('should handle 5 pages', () => {
        expect(getPages(5, 1, false)).toEqual([[1, 2, 3, 4, 5], []]);
      });

      it('should handle 6 pages', () => {
        expect(getPages(6, 1, false)).toEqual([[1, 2, 3, 4, 5, 6], []]);
      });

      it('should handle 7 pages', () => {
        expect(getPages(7, 1, false)).toEqual([[1, 2, 3, 4, 5, 6, 7], []]);
      });

      it('should split after 8 pages', () => {
        expect(getPages(8, 1, false)).toEqual([[1, 2, 3, 4, 5], [8]]);
      });
    });

    describe('when page count is 10', () => {
      it('should show first 5 pages when current page is 1', () => {
        expect(getPages(10, 1, false)).toEqual([[1, 2, 3, 4, 5], [10]]);
      });

      it('should show first 5 pages when current page is 2', () => {
        expect(getPages(10, 2, false)).toEqual([[1, 2, 3, 4, 5], [10]]);
      });

      it('should show first 5 pages when current page is 3', () => {
        expect(getPages(10, 3, false)).toEqual([[1, 2, 3, 4, 5], [10]]);
      });

      it('should keep 4th page centered in available pages on left side', () => {
        expect(getPages(10, 4, false)).toEqual([[2, 3, 4, 5, 6], [10]]);
      });

      it('should keep 5th page centered in available pages on left side', () => {
        expect(getPages(10, 5, false)).toEqual([[3, 4, 5, 6, 7], [10]]);
      });

      it('should keep 6th page centered in available pages on left side', () => {
        expect(getPages(10, 6, false)).toEqual([[4, 5, 6, 7, 8], [10]]);
      });

      it('should show first page and the last 5 numbers when the current page is 7 (within 4 pages of the last page)', () => {
        expect(getPages(10, 7, false)).toEqual([[1], [6, 7, 8, 9, 10]]);
      });

      it('should show first page and the last 5 numbers when the current page is 8 (within 4 pages of the last page)', () => {
        expect(getPages(10, 8, false)).toEqual([[1], [6, 7, 8, 9, 10]]);
      });

      it('should show first page and the last 5 numbers when the current page is 8 (within 4 pages of the last page)', () => {
        expect(getPages(10, 8, false)).toEqual([[1], [6, 7, 8, 9, 10]]);
      });

      it('should show first page and the last 5 numbers when the current page is 9 (within 4 pages of the last page)', () => {
        expect(getPages(10, 9, false)).toEqual([[1], [6, 7, 8, 9, 10]]);
      });

      it('should show first page and the last 5 numbers when the current page is 10 (within 4 pages of the last page)', () => {
        expect(getPages(10, 10, false)).toEqual([[1], [6, 7, 8, 9, 10]]);
      });
    });
  });

  describe('mobile', () => {
    describe('when current page is 1', () => {
      it('should show all pages when page count is 1', () => {
        expect(getPages(1, 1, true)).toEqual([[1], []]);
      });

      it('should show all pages when page count is 2', () => {
        expect(getPages(2, 1, true)).toEqual([[1, 2], []]);
      });

      it('should show all pages when page count is 3', () => {
        expect(getPages(3, 1, true)).toEqual([[1, 2, 3], []]);
      });
    });

    describe('when page count is 5', () => {
      it('should show first 5 pages when current page is 1', () => {
        expect(getPages(5, 1, true)).toEqual([[1], [5]]);
      });

      it('should show first 5 pages when current page is 2', () => {
        expect(getPages(5, 2, true)).toEqual([[2], [5]]);
      });

      it('should show first 5 pages when current page is 3', () => {
        expect(getPages(5, 3, true)).toEqual([[3], [5]]);
      });

      it('should keep 4th page centered in available pages on left side', () => {
        expect(getPages(5, 4, true)).toEqual([[3, 4, 5], []]);
      });

      it('should keep 5th page centered in available pages on left side', () => {
        expect(getPages(5, 5, true)).toEqual([[3, 4, 5], []]);
      });
    });
  });
});
