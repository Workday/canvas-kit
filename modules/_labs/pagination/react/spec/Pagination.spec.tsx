import {render} from '@testing-library/react';
import * as React from 'react';

import Pagination from '..';

describe('Pagination Component', () => {
  it(`Test pagination label shows up`, () => {
    const currentPage = 2;

    const {getByText} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={() => null}
        showLabel
      />
    );

    expect(getByText('11–20 of 100 items'));
  });

  it(`Test pagination label can have a custom data label`, () => {
    const currentPage = 2;

    const {getByText} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={() => null}
        showLabel
        customLabel={(from: number, to: number, items: number, item: string) =>
          `${from.toLocaleString()}\u2013${to.toLocaleString()} of ${items.toLocaleString()} ${
            items > 1 ? 'users' : 'user'
          }`
        }
      />
    );

    expect(getByText('11–20 of 100 users'));
  });

  it(`Left arrow should be disabled`, () => {
    const currentPage = 1;
    const ariaLabel = 'leftPaginationArrow';

    const {getByLabelText} = render(
      <Pagination
        total={10}
        pageSize={1}
        currentPage={currentPage}
        onPageChange={p => null}
        showLabel
        customAriaLabels={{previousPageAriaLabel: ariaLabel}}
      />
    );

    expect(getByLabelText(ariaLabel)).toBeDisabled();
  });

  it(`Right arrow should be disabled`, () => {
    const currentPage = 10;
    const ariaLabel = 'rightPaginationArrow';

    const {getByLabelText} = render(
      <Pagination
        total={10}
        pageSize={1}
        currentPage={currentPage}
        onPageChange={p => null}
        showLabel
        customAriaLabels={{nextPageAriaLabel: ariaLabel}}
      />
    );

    expect(getByLabelText(ariaLabel)).toBeDisabled();
  });

  it(`label should not display`, () => {
    const currentPage = 2;

    const {queryByText} = render(
      <Pagination total={100} pageSize={10} currentPage={currentPage} onPageChange={p => null} />
    );

    expect(queryByText('11–20 of 100 items')).toBeNull();
  });

  it(`GoTo should not display`, () => {
    const currentPage = 2;
    const goToLabel = 'goToPage';

    const {queryByText} = render(
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => null}
        goToLabel={goToLabel}
      />
    );

    expect(queryByText(goToLabel)).toBeNull();
  });
});
