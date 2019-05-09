/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Table, TableRow} from './index';
import README from './README.md';

storiesOf('Canvas Kit/Table', module)
  .addDecorator(withReadme(README))
  .add('All', () => {
    const columns = ['ID', 'Name', 'Position', 'Location'];
    const data = [
      {
        data: [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
        state: undefined,
      },
      {
        data: [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
        state: TableRow.State.Error,
      },
      {
        data: [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
        state: TableRow.State.InputError,
      },
      {
        data: [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
        state: TableRow.State.Alert,
      },
      {
        data: [5, 'John Hours', 'Product Manager', 'New York, New York'],
        state: TableRow.State.InputAlert,
      },
      {
        data: [6, 'Leslie Lang', 'Software Architect', 'New York, New York'],
        state: TableRow.State.Hover,
      },
      {
        data: [7, 'Mary Pratt', 'Sr. Software Architect', 'New York, New York'],
        state: TableRow.State.Selected,
      },
    ];

    const rows = data.map((row, i) => {
      const cols = row.data.map((c, idx) => <td key={idx}>{c}</td>);

      return (
        <TableRow key={i} state={row.state}>
          {cols}
        </TableRow>
      );
    });

    return (
      <div className="story">
        <h1 className="section-label">Table</h1>
        <Table>
          <thead>
            <TableRow header={true}>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </TableRow>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  });
