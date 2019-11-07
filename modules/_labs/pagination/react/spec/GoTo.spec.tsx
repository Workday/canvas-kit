import {fireEvent, render} from '@testing-library/react';
import * as React from 'react';

import Pagination from '..';

describe('Pagination Go To', () => {
  const enter = {keyCode: 13, key: 'Enter'};

  const setPage = (input: HTMLElement, page: number | string) => {
    fireEvent.change(input, {target: {value: page}});
    fireEvent.keyDown(input, enter);
  };

  test('Setting page in Go To should change page when valid', () => {
    let currentPage = 1;
    const setCurrentPage = (page: number) => (currentPage = page);

    const {getByTestId} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
        showLabel
        showGoTo
        dataLabel="user"
      />
    );

    const goToBox = getByTestId('goToPage');

    setPage(goToBox, 3);
    expect(currentPage).toBe(3);

    setPage(goToBox, 5);
    expect(currentPage).toBe(5);

    setPage(goToBox, 10);
    expect(currentPage).toBe(10);
  });

  test('Setting page in Go To to invalid numbers should not change page', () => {
    let currentPage = 1;
    const setCurrentPage = (page: number) => (currentPage = page);

    const {getByTestId} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
        showLabel
        showGoTo
        dataLabel="user"
      />
    );

    const goToBox = getByTestId('goToPage');

    setPage(goToBox, -1);
    expect(currentPage).toBe(1);

    setPage(goToBox, 11);
    expect(currentPage).toBe(1);

    setPage(goToBox, 100);
    expect(currentPage).toBe(1);

    setPage(goToBox, 'abcd');
    expect(currentPage).toBe(1);
  });
});
