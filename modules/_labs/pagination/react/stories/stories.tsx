/// <reference path="../../../../../typings.d.ts" />
import styled from '@emotion/styled';
import {boolean, number, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {ComponentStatesTable} from '../../../../../utils/storybook';

import {Pagination} from '@workday/canvas-kit-labs-react-pagination';
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

storiesOf('Labs|Pagination/React', module)
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
          showLabel={boolean('showLabel', true)}
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

storiesOf('Labs|Pagination/React/Visual Testing', module)
  .addParameters({
    chromatic: {
      disable: false,
    },
  })
  .add('Default', () => {
    const defaults = {
      total: 1000,
      pageSize: 10,
      showLabel: true,
      showGoTo: true,
      currentPage: 1,
      onPageChange: (_: any) => {
        /* don't do anything */
      },
    };
    return (
      <ComponentStatesTable
        rowProps={[
          {label: 'Basic 3 Pages', props: {total: 30, showGoTo: false}},
          {label: 'Basic 7 Pages', props: {total: 70, showGoTo: false}},
          {label: 'First Page', props: {currentPage: 1}},
          {label: 'Middle Page', props: {currentPage: 50}},
          {label: 'Last Page', props: {currentPage: 100}},
        ]}
        columnProps={[
          {
            label: 'Desktop',
            props: {width: 800},
          },
          {
            label: 'Mobile',
            props: {width: 499},
          },
        ]}
      >
        {props => <Pagination {...defaults} {...props} />}
      </ComponentStatesTable>
    );
  });
