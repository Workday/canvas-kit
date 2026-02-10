import {createContainer} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: `${cssVar(system.gap.sm, system.space.x2)} ${cssVar(system.gap.md, system.space.x4)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.md, system.space.x4),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.sm, system.shape.x1),
    outline: `${px2rem(1)} solid transparent`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderInlineStart: `${cssVar(system.shape.sm, system.space.x1)} solid transparent`,
  },
  modifiers: {
    informational: {
      low: {
        borderInlineStartColor: system.color.border.info.default,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.alt.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
        },
      },
      high: {
        borderInlineStartColor: system.color.border.info.default,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.info.default, system.color.bg.info.softest),
        '& [data-part="information-highlight-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.info.default,
            system.color.icon.info.default
          ),
        },
      },
    },
    caution: {
      low: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderInlineStartColor: cssVar(
          system.color.border.warning,
          system.color.border.caution.default
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.alt.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
        },
      },
      high: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderInlineStartColor: cssVar(
          system.color.border.warning,
          system.color.border.caution.default
        ),
        backgroundColor: cssVar(
          system.color.surface.warning.default,
          system.color.bg.caution.softest
        ),
        '& [data-part="information-highlight-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.warning.default,
            system.color.icon.caution.softer
          ),
        },
      },
    },
    critical: {
      low: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderInlineStartColor: cssVar(
          system.color.border.danger,
          system.color.border.critical.default
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.danger.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.critical.default
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.danger.default,
            system.color.icon.critical.default
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          // The fallback is set to 'transparent' as this will be the same transparent background icon used with v3 tokens
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.fg.danger.default,
            'transparent'
          ),
        },
      },
      high: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderInlineStartColor: cssVar(
          system.color.border.danger,
          system.color.border.critical.default
        ),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.surface.danger.default, system.color.bg.alt.soft),
        '& [data-part="information-highlight-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.fg.inverse,
            system.color.icon.inverse
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(
            system.color.fg.danger.default,
            system.color.icon.critical.default
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
