import React from 'react';
import {createContainer, createModelHook, ExtractProps} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-labs-react/table';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from '@tanstack/react-table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const data: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns: ColumnDef<Person, any>[] = [
  columnHelper.accessor('firstName', {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('progress', {}),
];
interface TanTableProps extends ExtractProps<typeof Table> {}

/**
 * Compound Component Model Hook
 */
const useTanTableModel = createModelHook({
  defaultConfig: {
    data: [] as Person[],
    columns: [] as ColumnDef<Person, any>[],
  },
})(config => {
  const table = useReactTable({
    data: config.data,
    columns: config.columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return {state: {table}, events: {}};
});

/**
 * Main Component
 */
const TanTable = createContainer(Table)({
  displayName: 'TanTable',
  subComponents: {
    Head: Table.Head,
    Body: Table.Body,
    Tr: Table.Head.Tr,
    Th: Table.Head.Tr.Th,
    Td: Table.Head.Tr.Td,
  },
  modelHook: useTanTableModel,
})<TanTableProps>(({children, ...elemProps}) => {
  return <Table {...elemProps}>{children}</Table>;
});

/**
 * Usage
 */
export const TanstackTable = () => {
  const tableModel = useTanTableModel({
    data,
    columns,
  });
  return (
    <TanTable model={tableModel}>
      <TanTable.Head>
        {tableModel.state.table.getHeaderGroups().map(headerGroup => (
          <TanTable.Tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TanTable.Th background="blueberry400" color="frenchVanilla100" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TanTable.Th>
            ))}
          </TanTable.Tr>
        ))}
      </TanTable.Head>
      <TanTable.Body>
        {tableModel.state.table.getRowModel().rows.map(row => (
          <TanTable.Tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <TanTable.Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TanTable.Td>
            ))}
          </TanTable.Tr>
        ))}
      </TanTable.Body>
    </TanTable>
  );
};
