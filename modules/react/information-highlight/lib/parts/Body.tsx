import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      ...system.legacy.type.subtext.lg,
      color: system.color.fg.muted.default,
      gridColumn: '2',
      marginBlockEnd: system.legacy.gap.md,
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
        data-part="information-highlight-body"
        {...handleCsProp(elemProps, informationHighlightBodyStencil())}
      />
    );
  },
});
