import {render} from '@testing-library/react';
import _ from 'lodash';
import * as React from 'react';

import Pagination from '..';

describe('Pagination Pages', () => {
  window.resizeTo = function resizeTo(width: number, height: number) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
  };

  const originalWidth = window.innerWidth;

  afterAll(() => {
    window.resizeTo(originalWidth, window.innerHeight);
  });

  const PaginationComponent = (
    total: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage?: (p: number) => void
  ) => (
    <Pagination
      total={total}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={setCurrentPage ? p => setCurrentPage(p) : p => null}
    />
  );

  _.range(1, 10).forEach(page => {
    it(`Clicking page ${page + 1} brings you to page ${page}`, () => {
      let currentPage = page;

      const setCurrentPage = (page: number) => (currentPage = page);
      const {getByTestId} = render(PaginationComponent(10, 1, currentPage, setCurrentPage));

      getByTestId(`paginationButton${page + 1}`).click();
      expect(currentPage).toEqual(page + 1);
    });
  });

  it('Clicking the first page on the last page brings you to first page', () => {
    let currentPage = 10;

    const setCurrentPage = (page: number) => (currentPage = page);
    const {getByTestId} = render(PaginationComponent(10, 1, currentPage, setCurrentPage));

    getByTestId('paginationButton1').click();
    expect(currentPage).toEqual(1);
  });

  it('Clicking the last page on the first page brings you to last page', () => {
    let currentPage = 1;

    const setCurrentPage = (page: number) => (currentPage = page);
    const {getByTestId} = render(PaginationComponent(10, 1, currentPage, setCurrentPage));

    getByTestId('paginationButton10').click();
    expect(currentPage).toEqual(10);
  });

  _.range(2, 6).forEach(page => {
    it(`Test pagination with ${page} pages`, () => {
      const currentPage = page;
      const pageSize = 10;

      const {queryByTestId, getByTestId} = render(
        PaginationComponent(page * pageSize, pageSize, currentPage)
      );

      expect(getByTestId('paginationIconButtonActive'));
      for (let i = 1; i < page; i++) {
        expect(getByTestId(`paginationButton${i}`));
      }
      expect(queryByTestId(`paginationButton${i}`)).toBeNull();
    });
  });

  it('Test pagination with 1 page', () => {
    const currentPage = 1;

    const {queryAllByTestId, queryByTestId} = render(PaginationComponent(1, 1, currentPage));

    expect(queryByTestId(`paginationButton1`)).toBeNull();
    const allActive = queryAllByTestId('paginationIconButtonActive');
    expect(allActive).toHaveLength(1);
  });

  it('Last page should be visible on first page', () => {
    const currentPage = 1;

    const {queryByTestId, getByTestId} = render(PaginationComponent(10, 1, currentPage));

    expect(getByTestId('paginationButton10'));
    expect(queryByTestId('paginationButton1')).toBeNull();
  });

  it('Last page should be visible on middle page', () => {
    const currentPage = 50;

    const {queryByTestId, getByTestId} = render(PaginationComponent(100, 1, currentPage));

    expect(getByTestId('paginationButton100'));
    expect(queryByTestId('paginationButton1')).toBeNull();
  });

  it('First page should be visible on last page', () => {
    const currentPage = 10;

    const {queryByTestId, getByTestId} = render(PaginationComponent(10, 1, currentPage));

    expect(getByTestId('paginationButton1'));
    expect(queryByTestId('paginationButton10')).toBeNull();
  });

  it('First page should be visible 97/100 page', () => {
    const currentPage = 97;

    const {getByTestId} = render(PaginationComponent(100, 1, currentPage));

    expect(getByTestId('paginationButton1'));
  });

  it('First page should not be visible 96/100 page', () => {
    const currentPage = 96;

    const {queryByTestId, getByTestId} = render(PaginationComponent(100, 1, currentPage));

    expect(getByTestId('paginationButton100'));
    expect(queryByTestId('paginationButton1')).toBeNull();
  });

  it('First page should not be visible 4/100 page', () => {
    const currentPage = 4;

    const {queryByTestId, getByTestId} = render(PaginationComponent(100, 1, currentPage));

    expect(getByTestId('paginationButton100'));
    expect(queryByTestId('paginationButton1')).toBeNull();
  });

  it('First page should be visible 3/100 page', () => {
    const currentPage = 3;

    const {getByTestId} = render(PaginationComponent(100, 1, currentPage));

    expect(getByTestId('paginationButton1'));
    expect(getByTestId('paginationButton100'));
  });

  it('Numbers should not shift when three selected', () => {
    const currentPage = 3;

    const {queryByTestId, getByTestId} = render(PaginationComponent(10, 1, currentPage));

    for (let i = 1; i < 6; i++) {
      if (i !== 3) {
        expect(getByTestId(`paginationButton${i}`));
      }
    }
    expect(queryByTestId('paginationButton3')).toBeNull();
  });

  it('Numbers should shift when middle number clicked', () => {
    const currentPage = 4;

    const {queryByTestId, getByTestId} = render(PaginationComponent(10, 1, currentPage));

    expect(queryByTestId('paginationButton1')).toBeNull();
    for (let i = 2; i < 7; i++) {
      if (i !== 4) {
        expect(getByTestId(`paginationButton${i}`));
      }
    }
    expect(queryByTestId('paginationButton4')).toBeNull();
  });

  it('Only two numbers visible on mobile', () => {
    const currentPage = 8;

    window.resizeTo(450, window.innerHeight);
    const {queryByTestId, getByTestId} = render(PaginationComponent(10, 1, currentPage));

    for (let i = 1; i < 10; i++) {
      if (i !== 4) {
        expect(queryByTestId(`paginationButton${i}`)).toBeNull();
      }
    }
    expect(getByTestId('paginationButton10'));
  });

  _.range(9, 11).forEach(page => {
    it(`Three numbers visible on last page - currentPage of ${page} - and first page not visible on mobile`, () => {
      window.resizeTo(450, window.innerHeight);

      const {queryByTestId, getByTestId} = render(PaginationComponent(10, 1, page));

      for (let i = 8; i < 10; i++) {
        if (i !== page) {
          expect(getByTestId(`paginationButton${i}`));
        }
      }
      expect(queryByTestId('paginationButton1')).toBeNull();
    });
  });
});
