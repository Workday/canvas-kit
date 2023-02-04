//@ts-ignore
import {useMDXComponents} from '@mdx-js/react';
import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';

import {createComponent} from '@workday/canvas-kit-react';

/**
 * Special component that taps into @mdx-js/react components that are used by both Storybook and the
 * Canvas Site. This means our docs can use the same components used in our MDX files without
 * needing to use MDX directly.
 */
export const MDX = createComponent('div')({
  Component({children, ...elemProps}, _ref, Element) {
    const components = useMDXComponents();
    return React.createElement(components[Element], elemProps, children);
  },
});

export const MdxJSToJSX = (props: {children: string}) => {
  const components = useMDXComponents();
  return <MarkdownToJSX options={{overrides: components}}>{props.children}</MarkdownToJSX>;
};
