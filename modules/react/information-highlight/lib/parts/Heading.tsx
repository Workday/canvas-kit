import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

const informationHighlightHeadingStencil = createStencil({
  parts: {
    heading: 'information-highlight-heading',
  },
  vars: {
    marginEnd: '',
  },
  base: ({marginEnd}) => {
    return {
      ...system.legacy.type.subtext.lg,
      fontWeight: system.fontWeight.medium,
      color: system.color.fg.strong,
      margin: 0,
      [marginEnd]: system.legacy.gap.xs,
      marginBlockEnd: marginEnd,
      // The margin separates Heading from content below it (e.g. Body). When Heading is the last
      // element, there is nothing to separate from, so remove it to avoid extra trailing space.
      // The pseudo-class rule changes a variable instead of `margin-block-end` itself: nested
      // rules are emitted after flat declarations, so overriding the property would also override
      // a consumer's `cs={{marginBlockEnd}}`.
      '&:where(:last-child)': {
        [marginEnd]: 0,
      },
    };
  },
  modifiers: {
    actionPlacement: {
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
      {...informationHighlightHeadingStencil.parts.heading}
      {...handleCsProp(
        elemProps,
        informationHighlightHeadingStencil({actionPlacement: model.state.actionPlacement})
      )}
    />
  );
});
