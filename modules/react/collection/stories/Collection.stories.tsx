import {Meta} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';

import {ListBox} from '@workday/canvas-kit-react/collection';
import mdxDoc from './Collection.mdx';

import {Basic as BasicExample} from './examples/Basic';
import {StringChildren as StringChildrenExample} from './examples/StringChildren';
import {DynamicItemsStrings as DynamicItemsStringsExample} from './examples/DynamicItemsStrings';
import {DynamicItemsObjects as DynamicItemsObjectsExample} from './examples/DynamicItemsObjects';
import {Virtualization as VirtualizationExample} from './examples/Virtualization';
import {DataLoader as DataLoaderExample} from './examples/DataLoader';
import {BasicVirtual as BasicVirtualExample} from './examples/BasicVirtual';
import {IdentifiedItems as IdentifiedItemsExample} from './examples/IdentifiedItems';
import {RovingFocus as RovingFocusExample} from './examples/RovingFocus';
import {Selection as SelectionExample} from './examples/Selection';
import {MultiSelection as MultiSelectionExample} from './examples/MultiSelection';
import {BasicGrid as BasicGridExample} from './examples/BasicGrid';
import {WrappingGrid as WrappingGridExample} from './examples/WrappingGrid';

export default {
  title: 'Features/Collections',
  component: ListBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
      },
    },
  },
} as Meta;

export const Basic = {
  render: BasicExample,
};

export const StringChildren = {
  render: StringChildrenExample,
};

export const DynamicItemsStrings = {
  render: DynamicItemsStringsExample,
};

export const DynamicItemsObjects = {
  render: DynamicItemsObjectsExample,
};

export const Virtualization = {
  render: VirtualizationExample,
};

export const DataLoader = {
  render: DataLoaderExample,
};

// export const BasicVirtual = {
//   render: BasicVirtualExample,
// };

export const IdentifiedItems = {
  render: IdentifiedItemsExample,
};

export const RovingFocus = {
  render: RovingFocusExample,
};

export const Selection = {
  render: SelectionExample,
};

export const MultiSelection = {
  render: MultiSelectionExample,
};

export const BasicGrid = {
  render: BasicGridExample,
};

export const WrappingGrid = {
  render: WrappingGridExample,
};
