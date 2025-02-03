import {Meta} from '@storybook/react';

import mdxDoc from './Tabs.mdx';

export {Basic} from './examples/Basic';
export {NamedTabs} from './examples/NamedTabs';
export {RightToLeft} from './examples/RightToLeft';
export {OverflowTabs} from './examples/OverflowTabs';
export {DisabledTab} from './examples/DisabledTab';
export {Icons} from './examples/Icons';
export {SinglePanel} from './examples/SinglePanel';
export {AlternativeTabStop} from './examples/AlternativeTabStop';
export {HoistedModel} from './examples/HoistedModel';
export {DynamicTabs} from './examples/DynamicTabs';

export default {
  title: 'Components/Containers/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
