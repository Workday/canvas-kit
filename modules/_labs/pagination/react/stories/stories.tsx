/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Pagination from '../index';
import README from '../README.md';

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

storiesOf('Labs/Pagination', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div>
        <PaginationExample />
        <PaginationExample2 />
      </div>
    </div>
  ));
