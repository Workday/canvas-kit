import {Meta} from '@storybook/react';

import mdxDoc from './Button.mdx';

export {CustomStyles} from './examples/CustomStyles';
export {Delete} from './examples/Delete';
export {Primary} from './examples/Primary';
export {PrimaryInverse} from './examples/PrimaryInverse';
export {Secondary} from './examples/Secondary';
export {SecondaryInverse} from './examples/SecondaryInverse';
export {Tertiary} from './examples/Tertiary';
export {TertiaryInverse} from './examples/TertiaryInverse';

export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
