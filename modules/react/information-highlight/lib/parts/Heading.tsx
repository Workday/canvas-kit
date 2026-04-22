import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const informationHighlightHeadingStencil = createStencil({
  base: () => {
    return {
      fontFamily: system.fontFamily.default,
      fontWeight: system.fontWeight.bold,
      lineHeight: system.lineHeight.body.sm,
      fontSize: system.fontSize.body.sm,
      letterSpacing: system.letterSpacing.body.sm,
      color: system.color.fg.default,
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
