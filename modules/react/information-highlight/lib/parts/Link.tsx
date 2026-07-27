import {Hyperlink} from '@workday/canvas-kit-react/button';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

const informationHighlightLinkStencil = createStencil({
  parts: {
    link: 'information-highlight-link',
  },
  base: () => {
    return {
      ...system.legacy.type.subtext.lg,
      color: system.color.fg.default,
    };
  },
  modifiers: {
    ctaPlacement: {
      bottom: {
        gridColumn: '2',
        justifySelf: 'start',
      },
      end: {
        margin: 0,
        maxWidth: '100%',
      },
    },
  },
});

export const Link = createSubcomponent('a')({
  displayName: 'Link',
  modelHook: useInformationHighlightModel,
})(({...elemProps}: ExtractProps<typeof Hyperlink, never>, Element, model) => {
  return (
    <Hyperlink
      as={Element}
      {...informationHighlightLinkStencil.parts.link}
      {...handleCsProp(
        elemProps,
        informationHighlightLinkStencil({ctaPlacement: model.state.ctaPlacement})
      )}
      variant="secondary"
    />
  );
});
