import {Meta} from '@storybook/react';

import mdxDoc from './Select.mdx';

export {Default} from './examples/Top Label/Default';
export {DefaultWithCustomOptions} from './examples/Top Label/DefaultWithCustomOptions';
export {DefaultWithSimpleOptions} from './examples/Top Label/DefaultWithSimpleOptions';
export {Scrollable} from './examples/Top Label/Scrollable';
export {Disabled} from './examples/Top Label/Disabled';
export {Alert} from './examples/Top Label/Alert';
export {Error} from './examples/Top Label/Error';
export {Grow} from './examples/Top Label/Grow';

// Left Label Examples
export {DefaultLeft} from './examples/Left Label/DefaultLeft';
export {DefaultWithCustomOptionsLeft} from './examples/Left Label/DefaultWithCustomOptionsLeft';
export {DefaultWithSimpleOptionsLeft} from './examples/Left Label/DefaultWithSimpleOptionsLeft';
export {ScrollableLeft} from './examples/Left Label/ScrollableLeft';
export {DisabledLeft} from './examples/Left Label/DisabledLeft';
export {AlertLeft} from './examples/Left Label/AlertLeft';
export {ErrorLeft} from './examples/Left Label/ErrorLeft';
export {GrowLeft} from './examples/Left Label/GrowLeft';

export default {
  title: 'Preview/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
