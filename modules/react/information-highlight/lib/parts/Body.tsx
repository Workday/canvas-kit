import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      color: system.color.text.strong,
      gridColumn: '2',
      marginBlockEnd: system.space.x2,
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
