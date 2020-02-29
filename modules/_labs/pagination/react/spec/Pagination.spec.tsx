import {render} from '@testing-library/react';
import _ from 'lodash';
import React from 'react';

import Pagination from '..';

const defaultProps = {
  total: 10,
  pageSize: 1,
  currentPage: 1,
  onPageChange: () => {}, // eslint-disable-line no-empty-function
  pageButtonAriaLabel: (page: number, active: boolean) =>
    `paginationButton${active ? 'Active' : page}`,
};

describe('Pagination Pages', () => {
  it('should show the page total', () => {
    const {getByText} = render(<Pagination {...defaultProps} total={10} />);

    expect(getByText('10'));
  });

  it('should show the correct number of pages', () => {
    const {getByText} = render(<Pagination {...defaultProps} total={100} pageSize={10} />);

    expect(getByText('10'));
  });

  it('should pass through the page button aria label', () => {
    const {getByText} = render(
      <Pagination
        {...defaultProps}
        pageButtonAriaLabel={(page, active) => {
          return `${active ? 'Active, ' : ''}MyPage ${page}`;
        }}
      />
    );

    expect(getByText('1')).toHaveAttribute('aria-label', 'Active, MyPage 1');
    expect(getByText('2')).toHaveAttribute('aria-label', 'MyPage 2');
  });

  it('should pass through the current page', () => {
    const {getByText} = render(<Pagination {...defaultProps} currentPage={2} />);

    expect(getByText('2')).toHaveAttribute('aria-label', 'paginationButtonActive');
  });

  it('should show the go to input if showGoTo is true', () => {
    const {getByText} = render(<Pagination {...defaultProps} showGoTo={true} />);

    expect(getByText('Go To'));
  });

  it('should pass through label if showLabel is true', () => {
    const {getByText} = render(
      <Pagination {...defaultProps} total={10} pageSize={1} showLabel={true} />
    );

    expect(getByText(/items/)).toHaveTextContent('1\u20131 of 10 items');
  });

  it('should pass through customLabel if showLabel is true', () => {
    const {getByText} = render(
      <Pagination
        {...defaultProps}
        total={100}
        pageSize={10}
        showLabel={true}
        customLabel={(from, to, total) => `${from} - ${to} of ${total}`}
      />
    );

    expect(getByText(/100/)).toHaveTextContent('1 - 10 of 100');
  });

  it('should pass through goToLabel', () => {
    const {getByText} = render(
      <Pagination {...defaultProps} showGoTo={true} goToLabel="My Goto" />
    );

    expect(getByText('My Goto'));
  });

  it('should pass through paginationContainerLabel', () => {
    const {container} = render(
      <Pagination {...defaultProps} paginationContainerAriaLabel="My Pagination" />
    );

    expect(container.querySelector('nav')).toHaveAttribute('aria-label', 'My Pagination');
  });

  it('should pass through previousPageAriaLabel', () => {
    const {getByLabelText} = render(
      <Pagination {...defaultProps} previousPageAriaLabel="My Previous Page" />
    );

    expect(getByLabelText('My Previous Page'));
  });

  it('should pass through nextPageAriaLabel', () => {
    const {getByLabelText} = render(
      <Pagination {...defaultProps} nextPageAriaLabel="My Next Page" />
    );

    expect(getByLabelText('My Next Page'));
  });

  it('should pass through pageButtonAriaLabel', () => {
    const {getByText} = render(
      <Pagination
        {...defaultProps}
        currentPage={1}
        pageButtonAriaLabel={(page, selected) => (selected ? 'Active' : `Page ${page}`)}
      />
    );

    expect(getByText('1')).toHaveAttribute('aria-label', 'Active');
    expect(getByText('2')).toHaveAttribute('aria-label', 'Page 2');
  });

  it('should pass through additional attributes to the container element', () => {
    const {getByTestId} = render(
      <Pagination {...defaultProps} data-testid="test" data-test="pass" />
    );

    expect(getByTestId('test')).toHaveAttribute('data-test', 'pass');
  });

  _.range(1, 10).forEach(page => {
    it(`Clicking page ${page + 1} brings you to page ${page}`, () => {
      let currentPage = page;

      const setCurrentPage = (page: number) => (currentPage = page);
      const {getByText} = render(
        <Pagination
          total={10}
          pageSize={1}
          currentPage={currentPage}
          onPageChange={p => setCurrentPage(p)}
        />
      );

      getByText(`${page + 1}`).click();
      expect(currentPage).toEqual(page + 1);
    });
  });

  it('Clicking the last page on the first page brings you to last page', () => {
    let currentPage = 1;

    const setCurrentPage = (page: number) => (currentPage = page);
    const {getByText} = render(
      <Pagination
        {...defaultProps}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
      />
    );

    getByText('10').click();
    expect(currentPage).toEqual(10);
  });

  _.range(2, 6).forEach(page => {
    it(`Test pagination with ${page} pages`, () => {
      const currentPage = page;
      const pageSize = 10;

      const {queryByLabelText, getByLabelText} = render(
        <Pagination
          {...defaultProps}
          total={page * pageSize}
          pageSize={10}
          currentPage={currentPage}
        />
      );

      expect(getByLabelText('paginationButtonActive'));
      for (let i = 1; i < page; i++) {
        expect(getByLabelText(`paginationButton${i}`));
      }
      expect(queryByLabelText(`paginationButton${page}`)).toBeNull();
    });
  });

  it('Test pagination with 1 page', () => {
    const {getByText} = render(
      <Pagination {...defaultProps} total={1} pageSize={1} currentPage={1} />
    );

    expect(getByText('1'));
  });

  it('Last page should be visible on first page', () => {
    const {getByText} = render(<Pagination {...defaultProps} currentPage={1} />);

    expect(getByText('10'));
  });

  it('Last page should be visible on middle page', () => {
    const {getByText} = render(<Pagination {...defaultProps} total={100} currentPage={50} />);

    expect(getByText('100'));
  });

  it('First page should be visible on last page', () => {
    const {getByText} = render(<Pagination {...defaultProps} currentPage={10} />);

    expect(getByText('1'));
  });

  it('First page should be visible 97/100 page', () => {
    const {getByText} = render(<Pagination {...defaultProps} total={100} currentPage={97} />);

    expect(getByText('1'));
  });

  it('First page should not be visible 96/100 page', () => {
    const {queryByText, getByText} = render(
      <Pagination {...defaultProps} total={100} currentPage={96} />
    );

    expect(getByText('100'));
    expect(queryByText('1')).toBeNull();
  });

  it('First page should not be visible 4/100 page', () => {
    const {queryByText, getByText} = render(
      <Pagination {...defaultProps} total={100} currentPage={4} />
    );

    expect(getByText('100'));
    expect(queryByText('1')).toBeNull();
  });

  it('First page should be visible 3/100 page', () => {
    const {getByText} = render(<Pagination {...defaultProps} total={100} currentPage={3} />);

    expect(getByText('1'));
    expect(getByText('100'));
  });

  it('Numbers should not shift when three selected', () => {
    const {getByText} = render(<Pagination {...defaultProps} currentPage={3} />);

    expect(getByText('1'));
    expect(getByText('2'));
    expect(getByText('3'));
    expect(getByText('4'));
    expect(getByText('5'));
  });

  it('Numbers should shift when middle number clicked', () => {
    const {queryByText, getByText} = render(<Pagination {...defaultProps} currentPage={4} />);

    expect(queryByText('1')).toBeNull();
    expect(getByText('2'));
    expect(getByText('3'));
    expect(getByText('4'));
    expect(getByText('5'));
    expect(getByText('6'));
  });

  _.range(9, 11).forEach(page => {
    it(`Three numbers visible on last page - currentPage of ${page} - and first page not visible on mobile`, () => {
      const {queryByText, getByText} = render(
        <Pagination {...defaultProps} currentPage={page} width={450} />
      );

      expect(getByText('8'));
      expect(getByText('9'));
      expect(queryByText('1')).toBeNull();
    });
  });
});
