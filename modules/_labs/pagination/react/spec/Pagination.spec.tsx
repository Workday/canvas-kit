import {render} from '@testing-library/react';
import * as React from 'react';

import Pagination from '..';

describe('Pagination Component', () => {
  it(`Test pagination label shows up`, () => {
    const currentPage = 2;

    const {getByTestId} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => null}
        showLabel
      />
    );

    expect(getByTestId('paginationLabel')).toHaveTextContent('11–20 of 100 items');
  });

  it(`Test pagination label can be changed`, () => {
    const currentPage = 2;

    const {getByTestId} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => null}
        showLabel
        dataLabel="user"
      />
    );

    expect(getByTestId('paginationLabel')).toHaveTextContent('11–20 of 100 users');
  });

  it(`Left arrow should be disabled`, () => {
    const currentPage = 1;

    const {getByTestId} = render(
      <Pagination
        total={10}
        pageSize={1}
        currentPage={currentPage}
        onPageChange={p => null}
        showLabel
        dataLabel="user"
      />
    );

    expect(getByTestId('leftPaginationArrow')).toBeDisabled();
  });

  it(`Right arrow should be disabled`, () => {
    const currentPage = 10;

    const {getByTestId} = render(
      <Pagination
        total={10}
        pageSize={1}
        currentPage={currentPage}
        onPageChange={p => null}
        showLabel
        dataLabel="user"
      />
    );

    expect(getByTestId('rightPaginationArrow')).toBeDisabled();
  });
});
