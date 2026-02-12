import {Hyperlink} from '@workday/canvas-kit-react/button';
import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const informationHighlightLinkStencil = createStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.bold,
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
      gridColumn: '2',
      justifySelf: 'start',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.default, system.color.text.strong),
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
