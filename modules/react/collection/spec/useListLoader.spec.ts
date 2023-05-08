import {getPageNumber, getPagesToLoad} from '../lib/useListLoader';

describe('getPageNumber', () => {
  it('should return 1 when the index is 0', () => {
    expect(getPageNumber(0, 0)).toEqual(1);
  });

  it('should return 1 if the index is less than the page size', () => {
    expect(getPageNumber(5, 10)).toEqual(1);
  });

  it('should return 1 if the index is one less than page size', () => {
    expect(getPageNumber(9, 10)).toEqual(1);
  });

  it('should return 2 if the index is the same as page size', () => {
    expect(getPageNumber(10, 10)).toEqual(2);
  });
});

describe('getPagesToLoad', () => {
  it('should load page 1 when no data is loaded and the loading buffer', () => {
    const items = Array(20).fill(undefined);

    const actual = getPagesToLoad(0, 9, 20, items, 3);
    const expected = [1];

    expect(actual).toEqual(expected);
  });

  it('should load page 1 and 2 if the page size is too small for the loading buffer', () => {
    const items = Array(20).fill(undefined);

    const actual = getPagesToLoad(0, 9, 10, items, 3);
    const expected = [1, 2];

    expect(actual).toEqual(expected);
  });

  it('should return page 2 if page 1 is loaded and we are on page 2 and the loading buffer includes page 1', () => {
    const items = Array(10)
      .fill(undefined)
      .concat(Array(10).fill(true));

    const actual = getPagesToLoad(10, 19, 10, items, 3);
    const expected = [1];

    expect(actual).toEqual(expected);
  });

  it('should return page 1 if page 1 is not loaded and we are on page 2 and page 1 ', () => {
    const items = Array(10)
      .fill(undefined)
      .concat(Array(10).fill(true));

    const actual = getPagesToLoad(10, 19, 10, items, 3);
    const expected = [1];

    expect(actual).toEqual(expected);
  });

  it('should not return a page number higher than what is possible when all data is loaded', () => {
    const items = Array(20).fill(true);

    const actual = getPagesToLoad(10, 19, 10, items, 3);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});
