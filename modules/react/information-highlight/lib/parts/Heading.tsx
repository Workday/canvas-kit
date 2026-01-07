import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightHeadingStencil = createStencil({
  base: () => {
    return {
      ...system.type.body.small,
      color: system.color.text.strong,
      gridColumn: '2',
      fontWeight: system.fontWeight.bold,
      marginTop: system.space.zero,
      marginBottom: system.space.zero,
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
