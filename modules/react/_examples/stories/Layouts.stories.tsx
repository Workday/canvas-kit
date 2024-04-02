import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Layouts.mdx';

import {AreaColumnPositioning as AreaColumnPositioningExample} from './examples/layout/AreaColumnPositioning';
import {CustomColumnPositioning as CustomColumnPositioningExamples} from './examples/layout/CustomColumnPositioning';
import {CustomColumnWidth as CustomColumnWidthExamples} from './examples/layout/CustomColumnWidth';
import {FullWidthWith3Columns as FullWidthWith3ColumnsExamples} from './examples/layout/FullWidthWith3Columns';
import {FullWidthWith3Columns2Rows as FullWidthWith3Columns2RowsExamples} from './examples/layout/FullWidthWith3Columns2Rows';
import {Masonry as MasonryExamples} from './examples/layout/Masonry';
import {ResponsiveColumns as ResponsiveColumnsExamples} from './examples/layout/ResponsiveColumns';
import {Tiled2and3Columns as Tiled2and3ColumnsExamples} from './examples/layout/Tiled2and3Columns';
import {Tiled4and2Columns as Tiled4and2ColumnsExamples} from './examples/layout/Tiled4and2Columns';

export default {
  title: 'Examples/Layouts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
};

export const AreaColumnPositioning = {
  render: AreaColumnPositioningExample,
};

export const CustomColumnPositioning = {
  render: CustomColumnPositioningExamples,
};
export const CustomColumnWidth = {
  render: CustomColumnWidthExamples,
};
export const FullWidthWith3Columns = {
  render: FullWidthWith3ColumnsExamples,
};
export const FullWidthWith3Columns2Rows = {
  render: FullWidthWith3Columns2RowsExamples,
};
export const Masonry = {
  render: MasonryExamples,
};
export const ResponsiveColumns = {
  render: ResponsiveColumnsExamples,
};
export const Tiled2and3Columns = {
  render: Tiled2and3ColumnsExamples,
};
export const Tiled4and2Columns = {
  render: Tiled4and2ColumnsExamples,
};
