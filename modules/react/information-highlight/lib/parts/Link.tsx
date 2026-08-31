import {Hyperlink} from '@workday/canvas-kit-react/button';
import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightLinkStencil = createStencil({
  base: () => {
    return {
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.bold,
      lineHeight: system.legacy.lineHeight.subtext.lg,
      fontSize: system.legacy.fontSize.subtext.lg,
      letterSpacing: system.legacy.letterSpacing.subtext.lg,
      gridColumn: '2',
      justifySelf: 'start',
      color: system.color.fg.default,
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
