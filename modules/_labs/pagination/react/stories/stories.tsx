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
  navigationEllipseAriaLabel: text('navigationEllipseAriaLabel', 'Navigation Ellipse'),
});

const DefaultPaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Wrapper>
      <h4>Current Page: {currentPage}</h4>
      <Pagination
        key="1"
        total={number('total', 50) || 50}
        pageSize={number('pageSize', 10) || 10}
        showLabel={boolean('showLabel', false)}
        showGoTo={boolean('showGoTo', false)}
        goToLabel={text('goToLabel', '')}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
        {...getAriaLabels()}
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
        total={number('total', 10) || 10}
        pageSize={number('pageSize', 3) || 3}
        currentPage={currentPage}
        onPageChange={p => setCurrentPage(p)}
        showLabel
        showGoTo={boolean('showGoTo', false)}
        goToLabel={text('goToLabel', '')}
        customLabel={(from: number, to: number, items: number, item: string) =>
          `${from.toLocaleString()}\u2013${to.toLocaleString()} of ${items.toLocaleString()} ${
            items > 1 ? 'candidates' : 'candidate'
          }`
        }
        {...getAriaLabels()}
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
};

storiesOf('Labs/Pagination', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div>
        <br />
        <DefaultPaginationExample />
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
