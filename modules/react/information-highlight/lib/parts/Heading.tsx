import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

const informationHighlightHeadingStencil = createStencil({
  base: () => {
    return {
      ...system.legacy.type.subtext.lg,
      fontWeight: system.fontWeight.medium,
      color: system.color.fg.strong,
      margin: 0,
      marginBlockEnd: system.legacy.gap.xs,
    };
  },
  modifiers: {
    ctaPlacement: {
      bottom: {
        gridColumn: '2',
      },
      end: {},
    },
  },
});

export interface InformationHighlightHeadingProps
  extends Partial<ExtractProps<typeof Heading, never>> {}

export const InformationHighlightHeading = createSubcomponent('h3')({
  displayName: 'Heading',
  modelHook: useInformationHighlightModel,
})(({size = 'small', ...elemProps}: InformationHighlightHeadingProps, Element, model) => {
  return (
    <Heading
      as={Element}
      size={size}
      data-part="information-highlight-heading"
      {...handleCsProp(
        elemProps,
        informationHighlightHeadingStencil({ctaPlacement: model.state.ctaPlacement})
      )}
    />
  );
});
