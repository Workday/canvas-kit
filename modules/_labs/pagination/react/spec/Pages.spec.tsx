import {render} from '@testing-library/react';
import _ from 'lodash';
import React from 'react';

import Pagination from '..';
import {PaginationAriaLabels} from '../lib/PaginationAriaLabels';

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
    setCurrentPage: (p: number) => void,
    ariaLabels?: PaginationAriaLabels
  ) => (
    <Pagination
      total={total}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={setCurrentPage ? p => setCurrentPage(p) : p => null}
      customAriaLabels={ariaLabels}
    />
  );

  const ariaLabels = {
    pageButtonAriaLabel: (page: number, active: boolean) =>
      `paginationButton${active ? 'Active' : page}`,
  };

  _.range(1, 10).forEach(page => {
    it(`Clicking page ${page + 1} brings you to page ${page}`, () => {
      let currentPage = page;

      const setCurrentPage = (page: number) => (currentPage = page);
      const {getByLabelText} = render(
        PaginationComponent(10, 1, currentPage, setCurrentPage, ariaLabels)
      );

      getByLabelText(`paginationButton${page + 1}`).click();
      expect(currentPage).toEqual(page + 1);
    });
  });

  it('Clicking the first page on the last page brings you to first page', () => {
    let currentPage = 10;

    const setCurrentPage = (page: number) => (currentPage = page);
    const {getByLabelText} = render(
      PaginationComponent(10, 1, currentPage, setCurrentPage, ariaLabels)
    );

    getByLabelText('paginationButton1').click();
    expect(currentPage).toEqual(1);
  });

  it('Clicking the last page on the first page brings you to last page', () => {
    let currentPage = 1;

    const setCurrentPage = (page: number) => (currentPage = page);
    const {getByLabelText} = render(
      PaginationComponent(10, 1, currentPage, setCurrentPage, ariaLabels)
    );

    getByLabelText('paginationButton10').click();
    expect(currentPage).toEqual(10);
  });

  _.range(2, 6).forEach(page => {
    it(`Test pagination with ${page} pages`, () => {
      const currentPage = page;
      const pageSize = 10;

      const {queryByLabelText, getByLabelText} = render(
        PaginationComponent(page * pageSize, pageSize, currentPage, () => null, ariaLabels)
      );

      expect(getByLabelText('paginationButtonActive'));
      for (let i = 1; i < page; i++) {
        expect(getByLabelText(`paginationButton${i}`));
      }
      expect(queryByLabelText(`paginationButton${page}`)).toBeNull();
    });
  });

  it('Test pagination with 1 page', () => {
    const currentPage = 1;

    const {queryAllByLabelText, queryByLabelText} = render(
      PaginationComponent(1, 1, currentPage, () => null, ariaLabels)
    );

    expect(queryByLabelText(`paginationButton1`)).toBeNull();
    const allActive = queryAllByLabelText('paginationButtonActive');
    expect(allActive).toHaveLength(1);
  });

  it('Last page should be visible on first page', () => {
    const currentPage = 1;

    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(10, 1, currentPage, () => null, ariaLabels)
    );

    expect(getByLabelText('paginationButton10'));
    expect(queryByLabelText('paginationButton1')).toBeNull();
  });

  it('Last page should be visible on middle page', () => {
    const currentPage = 50;

    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(100, 1, currentPage, () => null, ariaLabels)
    );

    expect(getByLabelText('paginationButton100'));
    expect(queryByLabelText('paginationButton1')).toBeNull();
  });

  it('First page should be visible on last page', () => {
    const currentPage = 10;

    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(10, 1, currentPage, () => null, ariaLabels)
    );

    expect(getByLabelText('paginationButton1'));
    expect(queryByLabelText('paginationButton10')).toBeNull();
  });

  it('First page should be visible 97/100 page', () => {
    const currentPage = 97;

    const {getByLabelText} = render(
      PaginationComponent(100, 1, currentPage, () => null, ariaLabels)
    );

    expect(getByLabelText('paginationButton1'));
  });

  it('First page should not be visible 96/100 page', () => {
    const currentPage = 96;

    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(100, 1, currentPage, () => null, ariaLabels)
    );

    expect(getByLabelText('paginationButton100'));
    expect(queryByLabelText('paginationButton1')).toBeNull();
  });

  it('First page should not be visible 4/100 page', () => {
    const currentPage = 4;

    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(100, 1, currentPage, () => null, ariaLabels)
    );

    expect(getByLabelText('paginationButton100'));
    expect(queryByLabelText('paginationButton1')).toBeNull();
  });

  it('First page should be visible 3/100 page', () => {
    const currentPage = 3;

    const {getByLabelText} = render(
      PaginationComponent(100, 1, currentPage, () => null, ariaLabels)
    );

    expect(getByLabelText('paginationButton1'));
    expect(getByLabelText('paginationButton100'));
  });

  it('Numbers should not shift when three selected', () => {
    const currentPage = 3;

    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(10, 1, currentPage, () => null, ariaLabels)
    );

    for (let i = 1; i < 6; i++) {
      if (i !== 3) {
        expect(getByLabelText(`paginationButton${i}`));
      }
    }
    expect(queryByLabelText('paginationButton3')).toBeNull();
  });

  it('Numbers should shift when middle number clicked', () => {
    const currentPage = 4;

    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(10, 1, currentPage, () => null, ariaLabels)
    );

    expect(queryByLabelText('paginationButton1')).toBeNull();
    for (let i = 2; i < 7; i++) {
      if (i !== 4) {
        expect(getByLabelText(`paginationButton${i}`));
      }
    }
    expect(queryByLabelText('paginationButton4')).toBeNull();
  });

  it('Only two numbers visible on mobile', () => {
    const currentPage = 8;

    window.resizeTo(450, window.innerHeight);
    const {queryByLabelText, getByLabelText} = render(
      PaginationComponent(10, 1, currentPage, () => null, ariaLabels)
    );

    for (let i = 1; i < 10; i++) {
      if (i !== 4) {
        expect(queryByLabelText(`paginationButton${i}`)).toBeNull();
      }
    }
    expect(getByLabelText('paginationButton10'));
  });

  _.range(9, 11).forEach(page => {
    it(`Three numbers visible on last page - currentPage of ${page} - and first page not visible on mobile`, () => {
      window.resizeTo(450, window.innerHeight);

      const {queryByLabelText, getByLabelText} = render(
        PaginationComponent(10, 1, page, () => null, ariaLabels)
      );

      for (let i = 8; i < 10; i++) {
        if (i !== page) {
          expect(getByLabelText(`paginationButton${i}`));
        }
      }
      expect(queryByLabelText('paginationButton1')).toBeNull();
    });
  });
});
