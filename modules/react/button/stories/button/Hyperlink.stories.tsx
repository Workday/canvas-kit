import {Meta, StoryObj} from '@storybook/react';
import {Specifications, SymbolDoc} from '@workday/canvas-kit-docs';
import {ExampleCodeBlock} from '../../../../../utils/storybook';

import mdxDoc from './Hyperlink.mdx';

import {Link as LinkExample} from './examples/Hyperlink';
import {LinkInverse as LinkInverseExample} from './examples/HyperlinkInverse';
import {ExternalLink as ExternalLinkExample} from './examples/ExternalHyperlink';
import {ExternalLinkInverse as ExternalLinkInverseExample} from './examples/ExternalHyperlinkInverse';

export default {
  title: 'Components/Hyperlink',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
        Specifications,
        SymbolDoc,
      },
    },
  },
} as Meta;

export const Link: StoryObj = {
  render: LinkExample,
};
export const LinkInverse: StoryObj = {
  render: LinkInverseExample,
};
export const ExternalLink: StoryObj = {
  render: ExternalLinkExample,
};
export const ExternalLinkInverse: StoryObj = {
  render: ExternalLinkInverseExample,
};
