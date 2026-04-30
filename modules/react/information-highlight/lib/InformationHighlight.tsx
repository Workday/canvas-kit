import {createContainer} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from './hooks/useInformationHighlightModel';
import {Body} from './parts/Body';
import {InformationHighlightHeading} from './parts/Heading';
import {Icon} from './parts/Icon';
import {Link} from './parts/Link';

interface InformationHighlightProps extends CSProps {}

export const informationHighlightStencil = createStencil({
  base: {
    display: 'grid',
    gridTemplateColumns: 'min-content',
    gap: `${system.legacy.gap.sm} ${system.legacy.gap.md}`,
    padding: system.legacy.padding.md,
    borderRadius: system.legacy.shape.sm,
    outline: `${px2rem(1)} solid transparent`,
    borderInlineStart: `${base.legacy.size50} solid transparent`,
  },
  modifiers: {
    informational: {
      low: {
        borderInlineStartColor: system.legacy.color.border.info.default,
        backgroundColor: system.legacy.color.surface.alt.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.info.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.info.default,
        },
      },
      high: {
        borderInlineStartColor: system.legacy.color.border.info.default,
        backgroundColor: system.legacy.color.surface.info.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.info.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.info.default,
        },
      },
    },
    caution: {
      low: {
        borderInlineStartColor: system.legacy.color.border.warning,
        backgroundColor: system.legacy.color.surface.alt.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.warning.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.warning.default,
        },
      },
      high: {
        borderInlineStartColor: system.legacy.color.border.warning,
        backgroundColor: system.legacy.color.surface.warning.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.warning.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.warning.default,
        },
      },
    },
    critical: {
      low: {
        borderInlineStartColor: system.legacy.color.border.danger,
        backgroundColor: system.legacy.color.surface.alt.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.danger.default,
          // The fallback is set to 'transparent' as this will be the same transparent background icon used with v3 tokens
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.danger.default,
        },
      },
      high: {
        borderInlineStartColor: system.legacy.color.border.danger,
        backgroundColor: system.legacy.color.surface.danger.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.danger.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.danger.default,
        },
      },
    },
  },
});

export const InformationHighlight = createContainer('section')({
  displayName: 'InformationHighlight',
  modelHook: useInformationHighlightModel,
  subComponents: {
    Icon: Icon,
    Heading: InformationHighlightHeading,
    Body: Body,
    Link: Link,
  },
})(({...elemProps}: InformationHighlightProps, Element, model) => {
  return (
    <Element
      {...handleCsProp(
        elemProps,
        informationHighlightStencil({[model.state.variant]: model.state.emphasis})
      )}
    />
  );
});
