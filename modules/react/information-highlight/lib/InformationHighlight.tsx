import {createContainer} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
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
    gap: `${system.gap.sm} ${system.gap.md}`,
    padding: system.padding.md,
    borderRadius: system.shape.sm,
    outline: `${px2rem(1)} solid transparent`,
    borderInlineStart: `${cssVar(base.size50, system.space.x1)} solid transparent`,
  },
  modifiers: {
    informational: {
      low: {
        borderInlineStartColor: system.color.border.info.default,
        backgroundColor: cssVar(system.color.surface.alt.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
        },
      },
      high: {
        borderInlineStartColor: system.color.border.info.default,
        backgroundColor: cssVar(system.color.surface.info.default, system.color.bg.info.softest),
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
        },
      },
    },
    caution: {
      low: {
        borderInlineStartColor: cssVar(
          system.color.border.warning,
          system.color.border.caution.default
        ),
        backgroundColor: cssVar(system.color.surface.alt.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
        },
      },
      high: {
        borderInlineStartColor: cssVar(
          system.color.border.warning,
          system.color.border.caution.default
        ),
        backgroundColor: cssVar(
          system.color.surface.warning.default,
          system.color.bg.caution.softest
        ),
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
        },
      },
    },
    critical: {
      low: {
        borderInlineStartColor: cssVar(
          system.color.border.danger,
          system.color.border.critical.default
        ),
        backgroundColor: cssVar(system.color.surface.danger.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.critical.default
          ),
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.danger.default,
            system.color.icon.critical.default
          ),
          // The fallback is set to 'transparent' as this will be the same transparent background icon used with v3 tokens
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.danger.default,
            'transparent'
          ),
        },
      },
      high: {
        borderInlineStartColor: cssVar(
          system.color.border.danger,
          system.color.border.critical.default
        ),
        backgroundColor: cssVar(system.color.surface.danger.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.danger.default,
            system.color.icon.critical.default
          ),
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.danger.default,
            system.color.icon.critical.default
          ),
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
