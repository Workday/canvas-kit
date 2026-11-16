import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

const informationHighlightBodyStencil = createStencil({
  parts: {
    body: 'information-highlight-body',
  },
  vars: {
    marginEnd: '',
  },
  base: ({marginEnd}) => {
    return {
      ...system.legacy.type.subtext.lg,
      color: system.color.fg.muted.default,
      [marginEnd]: system.legacy.gap.md,
      marginBlockEnd: marginEnd,
      // The margin separates Body from content below it (e.g. Link). When Body is the last
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
      end: {
        marginBlockEnd: 0,
      },
    },
  },
});

export const Body = createSubcomponent('div')({
  displayName: 'Body',
  modelHook: useInformationHighlightModel,
})(({...elemProps}: ExtractProps<typeof Text, never>, Element, model) => {
  return (
    <Text
      as={Element}
      {...informationHighlightBodyStencil.parts.body}
      {...handleCsProp(
        elemProps,
        informationHighlightBodyStencil({actionPlacement: model.state.actionPlacement})
      )}
    />
  );
});
