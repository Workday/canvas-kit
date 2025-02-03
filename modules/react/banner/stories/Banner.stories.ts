import {Meta} from '@storybook/react';

import mdxDoc from './Banner.mdx';

export {ActionText} from './examples/ActionText';
export {Basic} from './examples/Basic';
export {Error} from './examples/Error';
export {IconBanner} from './examples/IconBanner';
export {Sticky} from './examples/Sticky';
export {ThemedAlert} from './examples/ThemedAlert';
export {ThemedError} from './examples/ThemedError';
export {RefForwarding} from './examples/RefForwarding';
export {StickyAnimation} from './examples/StickyAnimation';
export {StickyRTL} from './examples/StickyRTL';

export default {
  title: 'Components/Indicators/Banner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
