import {createContainer} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, handleCsProp, CSProps, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {InformationHighlightHeading} from './parts/Heading';
import {Body} from './parts/Body';
import {Icon} from './parts/Icon';
import {Link} from './parts/Link';
import {useInformationHighlightModel} from './hooks/useInformationHighlightModel';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

interface InformationHighlightProps extends CSProps {}

export const informationHighlightStencil = createStencil({
  base: {
    display: 'grid',
    gridTemplateColumns: 'min-content',
    columnGap: system.space.x4,
    rowGap: system.space.x2,
    padding: system.space.x4,
    borderRadius: system.shape.x1,
    outline: `${px2rem(1)} solid transparent`,
    borderInlineStart: `${cssVar(system.space.x1)} solid transparent`,
  },
  modifiers: {
    informational: {
      low: {
        borderInlineStartColor: system.color.bg.primary.default,
        backgroundColor: system.color.bg.primary.softest,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.primary.default,
          [systemIconStencil.vars.color]: system.color.icon.primary.default,
          [systemIconStencil.vars.backgroundColor]: 'transparent',
        },
      },
      high: {
        borderInlineStartColor: system.color.bg.primary.default,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: system.color.bg.primary.default,
          [systemIconStencil.vars.backgroundColor]: system.color.bg.primary.default,
        },
      },
    },
    caution: {
      low: {
        borderInlineStartColor: brand.common.alertInner,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.strong,
          [systemIconStencil.vars.color]: system.color.fg.strong,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStartColor: brand.common.alertInner,
        backgroundColor: system.color.bg.caution.softest,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: brand.alert.dark,
          [systemIconStencil.vars.backgroundColor]: brand.alert.dark,
        },
      },
    },
    critical: {
      low: {
        borderInlineStartColor: brand.common.errorInner,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.bg.critical.default,
          [systemIconStencil.vars.color]: system.color.bg.critical.default,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStartColor: brand.common.errorInner,
        backgroundColor: system.color.bg.critical.softest,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: brand.error.base,
          [systemIconStencil.vars.backgroundColor]: brand.error.base,
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
