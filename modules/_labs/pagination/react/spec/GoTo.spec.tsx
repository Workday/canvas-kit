import {fireEvent, render} from '@testing-library/react';
import * as React from 'react';

import Pagination from '..';

describe('Pagination Go To', () => {
  const setPage = (input: HTMLElement, page: number | string) => {
    fireEvent.change(input, {target: {value: page}});
    fireEvent.submit(input);
  };

  test('Setting page in Go To should change page when valid', async () => {
    let currentPage = 1;
    const setCurrentPage = (page: number) => (currentPage = page);
    const goToLabel = 'goToPage';

    const {getByLabelText} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
        showLabel
        showGoTo
        goToLabel={goToLabel}
      />
    );

    const goToBox = getByLabelText(goToLabel);

    setPage(goToBox, 3);
    await expect(currentPage).toBe(3);

    setPage(goToBox, 5);
    await expect(currentPage).toBe(5);

    setPage(goToBox, 10);
    await expect(currentPage).toBe(10);
  });

  test('Setting page in Go To to invalid numbers should not change page', () => {
    let currentPage = 1;
    const setCurrentPage = (page: number) => (currentPage = page);
    const goToLabel = 'goToPage';

    const {getByLabelText} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
        showLabel
        showGoTo
        goToLabel={goToLabel}
      />
    );

    const goToBox = getByLabelText(goToLabel);

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
