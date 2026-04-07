import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.normal,
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.default, system.color.text.strong),
      gridColumn: '2',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      marginBlockEnd: cssVar(system.gap.sm, system.space.x2),
    };
  },
});

export const Body = createComponent('div')({
  displayName: 'Body',
  Component: ({...elemProps}: ExtractProps<typeof Text, never>, ref, Element) => {
    return (
      <Text
        as={Element}
        ref={ref}
        {...handleCsProp(elemProps, informationHighlightBodyStencil())}
      />
    );
  },
});
