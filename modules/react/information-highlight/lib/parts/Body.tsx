import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightBodyStencil = createStencil({
  vars: {
    marginEnd: '',
  },
  base: ({marginEnd}) => {
    return {
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.normal,
      lineHeight: system.legacy.lineHeight.subtext.lg,
      fontSize: system.legacy.fontSize.subtext.lg,
      letterSpacing: system.legacy.letterSpacing.subtext.lg,
      color: system.color.fg.default,
      gridColumn: '2',
      [marginEnd]: system.legacy.gap.sm,
      marginBlockEnd: marginEnd,
      // The margin separates Body from content below it (e.g. Link). When Body is the last
      // element, there is nothing to separate from, so remove it to avoid extra trailing space.
      // The pseudo-class rule changes a variable instead of `margin-block-end` itself: nested
      // rules are emitted after flat declarations, so overriding the property would also override
      // a consumer's `cs={{marginBlockEnd}}`.
      '&:where(:last-child)': {
        [marginEnd]: 0,
      },
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
