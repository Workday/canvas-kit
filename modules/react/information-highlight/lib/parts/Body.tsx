import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.normal,
      lineHeight: system.legacy.lineHeight.subtext.lg,
      fontSize: system.legacy.fontSize.subtext.lg,
      letterSpacing: system.legacy.letterSpacing.subtext.lg,
      color: system.color.fg.default,
      gridColumn: '2',
      marginBlockEnd: system.legacy.gap.sm,
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
