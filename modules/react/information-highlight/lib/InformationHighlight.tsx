import {cornerShapeStencil, createContainer} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from './hooks/useInformationHighlightModel';
import {Body} from './parts/Body';
import {InformationHighlightHeading} from './parts/Heading';
import {Icon} from './parts/Icon';
import {Link} from './parts/Link';

interface InformationHighlightProps extends CSProps {}

const defaultVariantStyles = {
  backgroundColor: system.legacy.color.surface.alt.default,
  '& [data-part="information-highlight-icon"]': {
    [systemIconStencil.vars.color]: system.color.fg.default,
  },
};

export const informationHighlightStencil = createStencil({
  extends: cornerShapeStencil,
  base: {
    display: 'grid',
    gridTemplateColumns: 'min-content',
    gap: `0 ${px2rem(12)}`,
    padding: system.legacy.padding.md,
    borderRadius: system.legacy.shape.sm,
    outline: `${px2rem(1)} solid transparent`,
    [cornerShapeStencil.vars.shape]: system.legacy.shape.xxl,
  },
  modifiers: {
    default: {
      low: defaultVariantStyles,
      high: defaultVariantStyles,
    },
    informational: {
      low: {
        backgroundColor: system.legacy.color.surface.alt.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.info.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.info.default,
        },
      },
      high: {
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
        backgroundColor: system.legacy.color.surface.alt.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.warning.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.warning.default,
        },
      },
      high: {
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
        backgroundColor: system.legacy.color.surface.alt.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.danger.default,
          // The fallback is set to 'transparent' as this will be the same transparent background icon used with v3 tokens
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.danger.default,
        },
      },
      high: {
        backgroundColor: system.legacy.color.surface.danger.default,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.legacy.color.fg.danger.default,
          [systemIconStencil.vars.backgroundColor]: system.legacy.color.fg.danger.default,
        },
      },
    },
    ctaPlacement: {
      bottom: {},
      end: {
        gridTemplateColumns: 'min-content minmax(0, 1fr) max-content',
        gridTemplateAreas: `
          "icon heading link"
          "icon body link"
        `,
        '& [data-part="information-highlight-icon"]': {
          gridArea: 'icon',
          alignSelf: 'start',
        },
        '& [data-part="information-highlight-heading"]': {
          gridArea: 'heading',
        },
        '& [data-part="information-highlight-body"]': {
          gridArea: 'body',
        },
        '& [data-part="information-highlight-link"]': {
          gridArea: 'link',
          placeSelf: 'center end',
          whiteSpace: 'nowrap',
          wordBreak: 'normal',
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
        informationHighlightStencil({
          [model.state.variant]: model.state.emphasis,
          ctaPlacement: model.state.ctaPlacement,
        })
      )}
    />
  );
});
