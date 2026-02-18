import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Hyperlink.mdx';
import {ExternalLink as ExternalLinkExample} from './examples/ExternalHyperlink';
import {ExternalLinkInverse as ExternalLinkInverseExample} from './examples/ExternalHyperlinkInverse';
import {ExternalLinkRTL as ExternalLinkRTLExample} from './examples/ExternalHyperlinkRTL';
import {Link as LinkExample} from './examples/Hyperlink';
import {InBodyText as InBodyTextExample} from './examples/HyperlinkInBodyText';
import {LinkInverse as LinkInverseExample} from './examples/HyperlinkInverse';
import {StandaloneLink as StandaloneLinkExample} from './examples/StandaloneHyperlink';

export default {
  title: 'Components/Hyperlink',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
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
export const ExternalLinkRTL: StoryObj = {
  render: ExternalLinkRTLExample,
};
export const StandaloneLink: StoryObj = {
  render: StandaloneLinkExample,
};
export const InBodyText: StoryObj = {
  render: InBodyTextExample,
};
