import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

const informationHighlightBodyStencil = createStencil({
  parts: {
    body: 'information-highlight-body',
  },
  base: () => {
    return {
      ...system.legacy.type.subtext.lg,
      color: system.color.fg.muted.default,
      marginBlockEnd: system.legacy.gap.md,
    };
  },
  modifiers: {
    ctaPlacement: {
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
        informationHighlightBodyStencil({ctaPlacement: model.state.ctaPlacement})
      )}
    />
  );
});
