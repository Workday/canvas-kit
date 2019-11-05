import styled from '@emotion/styled';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import Pagination from '..';
import README from '../README.md';

/// <reference path="../../../../../typings.d.ts" />

const Wrapper = styled('div')({
  display: 'block',
  textAlign: 'center',
});

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h3>Page: {currentPage}</h3>
      <Pagination
        total={50}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
      />
    </Wrapper>
  );
};

const PaginationExample2 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h3>Single Page - Page: {currentPage}</h3>
      <Pagination
        total={1}
        pageSize={100}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
      />
    </Wrapper>
  );
};

const PaginationExample3 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h3>More Than Five Pages - Page: {currentPage}</h3>
      <Pagination
        total={100}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
      />
    </Wrapper>
  );
};

storiesOf('Labs/Pagination', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div>
        <br />
        <PaginationExample />
        <br />
        <PaginationExample2 />
        <br />
        <PaginationExample3 />
      </div>
    </div>
  ));
