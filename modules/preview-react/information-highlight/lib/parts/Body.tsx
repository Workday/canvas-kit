import {createComponent, ExtractProps, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      ...forwardFitTokens.system.type.subtext.lg,
      color: system.color.text.strong,
      gridColumn: '2',
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
