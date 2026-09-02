import {cornerShapeStencil, createContainer} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useInformationHighlightModel} from './hooks/useInformationHighlightModel';
import {Body} from './parts/Body';
import {InformationHighlightHeading} from './parts/Heading';
import {Icon} from './parts/Icon';
import {Link} from './parts/Link';

interface InformationHighlightProps extends CSProps {
  children?: React.ReactNode;
}

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
    actionPlacement: {
      bottom: {},
      end: {
        width: '100%',
        minWidth: 0,
        containerType: 'inline-size',
        gridTemplateColumns: 'min-content minmax(0, 1fr)',
        gridTemplateAreas: `
          "icon heading"
          "icon body"
          "icon link"
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
          justifySelf: 'end',
          marginBlockStart: system.legacy.gap.md,
        },
        '@container (min-width: 28rem)': {
          gridTemplateColumns: 'min-content minmax(0, 1fr) minmax(0, max-content)',
          gridTemplateAreas: `
            "icon heading link"
            "icon body link"
          `,
          '& [data-part="information-highlight-link"]': {
            alignSelf: 'center',
            marginBlockStart: 0,
          },
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
})(({children, ...elemProps}: InformationHighlightProps, Element, model) => {
  return (
    <Element
      {...handleCsProp(
        elemProps,
        informationHighlightStencil({
          [model.state.variant]: model.state.emphasis,
          actionPlacement: model.state.actionPlacement,
        })
      )}
    >
      {children}
    </Element>
  );
});
