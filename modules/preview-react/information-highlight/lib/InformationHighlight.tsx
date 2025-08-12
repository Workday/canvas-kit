import {createContainer} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, CSProps, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    borderInlineStart: `${system.space.x1} solid transparent`,
  },
  modifiers: {
    informational: {
      low: {
        borderInlineStartColor: system.color.border.info.default,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.info.default,
          [systemIconStencil.vars.color]: system.color.icon.info.default,
          [systemIconStencil.vars.backgroundColor]: 'transparent',
        },
      },
      high: {
        borderInlineStartColor: system.color.border.info.default,
        backgroundColor: system.color.bg.info.softest,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: system.color.icon.info.default,
          [systemIconStencil.vars.backgroundColor]: system.color.icon.info.default,
        },
      },
    },
    caution: {
      low: {
        borderInlineStartColor: system.color.border.caution.default,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.strong,
          [systemIconStencil.vars.color]: system.color.icon.strong,
          [systemIconStencil.vars.backgroundColor]: 'transparent',
        },
      },
      high: {
        borderInlineStartColor: system.color.border.caution.default,
        backgroundColor: system.color.bg.caution.softest,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: system.color.icon.caution.softer,
          [systemIconStencil.vars.backgroundColor]: system.color.icon.caution.softer,
        },
      },
    },
    critical: {
      low: {
        borderInlineStartColor: system.color.border.critical.default,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.critical.default,
          [systemIconStencil.vars.color]: system.color.icon.critical.default,
          [systemIconStencil.vars.backgroundColor]: 'transparent',
        },
      },
      high: {
        borderInlineStartColor: system.color.border.critical.default,
        backgroundColor: system.color.bg.critical.softest,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: system.color.icon.critical.default,
          [systemIconStencil.vars.backgroundColor]: system.color.icon.critical.default,
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
