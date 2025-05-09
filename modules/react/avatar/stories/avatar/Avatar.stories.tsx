import {Meta} from '@storybook/react';

import mdxDoc from './Avatar.mdx';

export {Basic} from './examples/Basic';
export {Button} from './examples/Button';
export {Size} from './examples/Size';
export {CustomStyles} from './examples/CustomStyles';
export {Image} from './examples/Image';
export {LazyLoad} from './examples/LazyLoad';
export {ObjectFit} from './examples/ObjectFit';
export {Variant} from './examples/Variant';

export default {
  title: 'Components/Indicators/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
