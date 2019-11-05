import {storiesOf} from '@storybook/react';
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import Pagination from '..';
import README from '../README.md';

/// <reference path="../../../../../typings.d.ts" />
const PaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      items={50}
      pageSize={10}
      currentPage={currentPage}
      onPageChange={p => setCurrentPage(p)}
    />
  );
};

const PaginationExample2 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      items={48}
      pageSize={13}
      currentPage={currentPage}
      onPageChange={p => setCurrentPage(p)}
    />
  );
};

const PaginationExample3 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      items={48}
      pageSize={13}
      label={{itemLabel: 'Users'}}
      currentPage={currentPage}
      onPageChange={p => setCurrentPage(p)}
    />
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
