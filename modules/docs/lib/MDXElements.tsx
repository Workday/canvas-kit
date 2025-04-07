//@ts-ignore
import {useMDXComponents} from '@mdx-js/react';
import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';

import {createComponent} from '@workday/canvas-kit-react';
import {HeadingLevelContext, SymbolDialog} from './widgetUtils';

/**
 * Special component that taps into @mdx-js/react components that are used by both Storybook and the
 * Canvas Site. This means our docs can use the same components used in our MDX files without
 * needing to use MDX directly.
 */
export const MDX = createComponent('div')({
  Component({children, ...elemProps}, _ref, Element) {
    const components = useMDXComponents();

    return React.createElement(components[Element] || Element, elemProps, children);
  },
});

/**
 * Custom component that allows us to convert any `button` in JSDoc that contains a `[data-symbol]`
 * to a `<SymbolDialog>` component.
 */
const Button = (props: any) => {
  const components = useMDXComponents();
  if (props['data-symbol'] !== undefined && props.children) {
    return (
      <code>
        <SymbolDialog
          value={{
            kind: 'symbol',
            name: props.children[0],
            displayName: props['data-symbol'],
            value: props.children[0],
          }}
        />
      </code>
    );
  }
  return React.createElement(components['button'] || 'button', props, props.children);
};

/**
 * Convert [JSDoc link](https://jsdoc.app/tags-inline-link.html) into a `button` element for later
 * processing. This allows us to convert {@link SymbolName Link Text} to a `<SymbolDialog>`!
 */
function convertLinkToSymbolLinks(input: string): string {
  return input.replace(
    /{@link ([a-z0-9.]+)( [a-z0-9.]+)?}/gi,
    (_substr, symbol, text = '') =>
      `<button data-symbol="${text.trim()}" className="token symbol">${symbol}</button>`
  );
}

/**
 * Replace all heading levels in the JSDoc to start at the same heading level as `startingLevel`.
 * This allows JSDoc markdown to seamlessly flow into MDX.
 */
function rewriteHeadingLevels(input: string, startingLevel: number) {
  const firstHeadingMatch = input.match(/(#+ )[A-Za-z]/);

  if (!firstHeadingMatch) {
    return input;
  }

  const firstHeadingLevel = firstHeadingMatch[1];

  return input.replace(
    new RegExp(firstHeadingLevel, 'g'),
    Array.from({length: startingLevel}, () => '#').join('') + ' '
  );
}

/**
 * Custom MDX to JSX parsing
 */
export const MdxJSToJSX = (props: {children: string}) => {
  const components = useMDXComponents();
  const headingLevel = React.useContext(HeadingLevelContext);
  return (
    <MarkdownToJSX options={{overrides: {...components, button: Button}, forceBlock: true}}>
      {rewriteHeadingLevels(convertLinkToSymbolLinks(props.children), headingLevel)}
    </MarkdownToJSX>
  );
};
