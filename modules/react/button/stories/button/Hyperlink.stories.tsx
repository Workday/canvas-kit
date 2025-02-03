import {Meta} from '@storybook/react';

import mdxDoc from './Hyperlink.mdx';

export {Link} from './examples/Hyperlink';
export {LinkInverse} from './examples/HyperlinkInverse';
export {ExternalLink} from './examples/ExternalHyperlink';
export {ExternalLinkInverse} from './examples/ExternalHyperlinkInverse';

export default {
  title: 'Components/Hyperlink',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
