import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightHeadingStencil = createStencil({
  base: () => {
    return {
      ...system.legacy.type.subtext.lg,
      fontWeight: system.fontWeight.medium,
      color: system.color.fg.strong,
      gridColumn: '2',
      margin: 0,
      marginBlockEnd: system.legacy.gap.xs,
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
        data-part="information-highlight-heading"
        {...handleCsProp(elemProps, informationHighlightHeadingStencil())}
      />
    );
  },
});
