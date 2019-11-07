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

const DefaultPaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h4>Current Page: {currentPage}</h4>
      <Pagination
        key="1"
        total={50}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
      />
    </Wrapper>
  );
};

const PaginationExample5 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h4>Current Page: {currentPage}</h4>
      <Pagination
        key="2"
        total={1}
        pageSize={100}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
      />
    </Wrapper>
  );
};

const WithCustomLabel = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h4>Current Page: {currentPage}</h4>
      <Pagination
        key="3"
        total={10}
        pageSize={3}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
        showLabel
        dataLabel="candidate"
      />
    </Wrapper>
  );
};

const PaginationExample4 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h4>Current Page: {currentPage}</h4>
      <Pagination
        key="4"
        total={11}
        pageSize={2}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
      />
    </Wrapper>
  );
};

const WithGoToExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h4>Current Page: {currentPage}</h4>
      <Pagination
        key="5"
        dataLabel="user"
        total={100000}
        pageSize={1}
        currentPage={currentPage}
        showLabel
        showGoTo
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
        <DefaultPaginationExample />
        <br />
        <PaginationExample4 />
        <br />
        <PaginationExample5 />
      </div>
    </div>
  ))
  .add('With Go To', () => (
    <div className="story">
      <div>
        <br />
        <WithGoToExample />
      </div>
    </div>
  ))
  .add('With Custom Label', () => (
    <div className="story">
      <div>
        <br />
        <WithCustomLabel />
      </div>
    </div>
  ));
