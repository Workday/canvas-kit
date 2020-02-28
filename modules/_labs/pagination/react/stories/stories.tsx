/// <reference path="../../../../../typings.d.ts" />
import styled from '@emotion/styled';
import {boolean, number, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import Pagination from '..';
import README from '../README.md';

const Wrapper = styled('div')({
  display: 'block',
  textAlign: 'center',
});

const getAriaLabels = () => ({
  paginationContainerAriaLabel: text('paginationContainerAriaLabel', 'Pagination'),
  previousPageAriaLabel: text('previousPageAriaLabel', 'Previous Page'),
  nextPageAriaLabel: text('nextPageAriaLabel', 'Next Page'),
});

storiesOf('Labs/Pagination', module)
  .addParameters({
    component: Pagination,
  })
  .addDecorator(withReadme(README))
  .add('Default', () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
      <Wrapper>
        <h4>
          Current Page: <span data-testid="pageNumber">{currentPage}</span>
        </h4>
        <Pagination
          total={number('total', 50) || 50}
          pageSize={number('pageSize', 10) || 10}
          showLabel={boolean('showLabel', false)}
          showGoTo={boolean('showGoTo', false)}
          goToLabel={text('goToLabel', 'Go To')}
          currentPage={currentPage}
          onPageChange={p => setCurrentPage(p)}
          {...getAriaLabels()}
        />
      </Wrapper>
    );
  })
  .add('With Go To', () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
      <Wrapper>
        <h4>Current Page: {currentPage}</h4>
        <Pagination
          total={number('total', 1000) || 1000}
          pageSize={number('pageSize', 10) || 10}
          currentPage={currentPage}
          showLabel={boolean('showLabel', true)}
          showGoTo={boolean('showGoTo', true)}
          goToLabel={text('goToLabel', 'Go To')}
          onPageChange={p => setCurrentPage(p)}
          {...getAriaLabels()}
        />
      </Wrapper>
    );
  })
  .addParameters({
    chromatic: {
      disable: false,
      viewports: [499, 1000],
    },
  })
  .add('With Custom Label', () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
      <Wrapper>
        <h4>Current Page: {currentPage}</h4>
        <Pagination
          total={number('total', 10) || 10}
          pageSize={number('pageSize', 3) || 3}
          currentPage={currentPage}
          onPageChange={p => setCurrentPage(p)}
          showLabel={boolean('showLabel', false)}
          showGoTo={boolean('showGoTo', false)}
          goToLabel={text('goToLabel', 'Go To')}
          customLabel={(from: number, to: number, items: number) =>
            `${from.toLocaleString()}\u2013${to.toLocaleString()} of ${items.toLocaleString()} ${
              items > 1 ? 'candidates' : 'candidate'
            }`
          }
          {...getAriaLabels()}
        />
      </Wrapper>
    );
  });
