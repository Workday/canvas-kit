import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const informationHighlightHeadingStencil = createStencil({
  base: () => {
    return {
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.bold,
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      lineHeight: cssVar(system.lineHeight.body.sm, system.lineHeight.body.small),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      fontSize: cssVar(system.fontSize.body.sm, system.fontSize.body.small),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      letterSpacing: cssVar(system.letterSpacing.body.sm, base.letterSpacing200),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.default, system.color.text.strong),
      gridColumn: '2',
      margin: 0,
    };
  },
});

export interface InformationHighlightHeadingProps
  extends Partial<ExtractProps<typeof Heading, never>> {}

export const InformationHighlightHeading = createComponent('h3')({
  displayName: 'Heading',
  Component: ({size = 'small', ...elemProps}: InformationHighlightHeadingProps, ref, Element) => {
    return (
      <Heading
        as={Element}
        ref={ref}
        size={size}
        {...handleCsProp(elemProps, informationHighlightHeadingStencil())}
      />
    );
  },
});
