import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.normal,
      lineHeight: system.lineHeight.subtext.lg,
      fontSize: system.fontSize.subtext.lg,
      letterSpacing: system.letterSpacing.subtext.lg,
      color: cssVar(system.color.fg.default, system.color.text.strong),
      gridColumn: '2',
      marginBlockEnd: system.gap.sm,
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
