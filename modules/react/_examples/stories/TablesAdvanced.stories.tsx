import {ExampleCodeBlock} from '../../../../utils/storybook';
import {Table} from '@workday/canvas-kit-react/table';
import mdxDoc from './TablesAdvanced.mdx';

import {SelectableRows as SelectableRowsExample} from './examples/Table/WithSelectableRows';
import {ExpandableRows as ExpandableRowsExample} from './examples/Table/WithExpandableRows';
import {SortableColumnHeaders as SortableColumnHeadersExample} from './examples/Table/WithSortableColumnHeaders';

export default {
  title: 'Examples/Advanced Tables',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
};

export const SelectableRows = {
  render: SelectableRowsExample,
};
export const ExpandableRows = {
  render: ExpandableRowsExample,
};
export const SortableColumnHeaders = {
  render: SortableColumnHeadersExample,
};
