import {Meta} from '@storybook/react';

export function withAutodocsEnabled(mdx: string, otherParams?: Meta['parameters']): Meta {
  return {
    tags: ['autodocs'],
    parameters: {
      ...otherParams,
      docs: {
        ...otherParams?.docs,
        page: mdx,
        components: {
          ...otherParams?.docs?.components,
        },
      },
    },
  };
}
