/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';
import {Pagination} from '@workday/canvas-kit-labs-react-pagination';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Pagination',
  component: Pagination,
});

export const PaginationStates = () => {
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
};
