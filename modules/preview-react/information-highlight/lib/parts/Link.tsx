import {Hyperlink} from '@workday/canvas-kit-react/button';
import {createComponent, ExtractProps, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightLinkStencil = createStencil({
  base: () => {
    return {
      ...forwardFitTokens.system.type.subtext.lg,
      gridColumn: '2',
      justifySelf: 'start',
      color: system.color.text.strong,
      fontWeight: system.fontWeight.bold,
    };
  },
});

export const Link = createComponent('a')({
  displayName: 'Link',
  Component: ({...elemProps}: ExtractProps<typeof Hyperlink, never>, ref, Element) => {
    return (
      <Hyperlink
        as={Element}
        ref={ref}
        {...handleCsProp(elemProps, informationHighlightLinkStencil())}
      />
    );
  },
});
