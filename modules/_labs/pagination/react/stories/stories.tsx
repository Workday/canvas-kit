/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Pagination from '../index';
import README from '../README.md';

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return <Pagination currentPage={currentPage} onPageChange={(e, p) => setCurrentPage(p)} />;
};

const PaginationExample2 = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      items={90}
      pageSize={10}
      currentPage={currentPage}
      onPageChange={(e, p) => setCurrentPage(p)}
    />
  );
};

storiesOf('Labs/Pagination', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <PaginationExample />
      <PaginationExample2 />
    </div>
  ));
