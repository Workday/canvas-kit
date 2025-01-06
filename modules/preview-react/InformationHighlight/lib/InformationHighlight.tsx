import * as React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {InformationHighlightHeading} from './parts/Heading';
import {Body} from './parts/Body';
import {Icon} from './parts/Icon';
import {Button} from './parts/Button';
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
  },
  modifiers: {
    informational: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.blueberry400)}`,
        backgroundColor: base.soap100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: base.blueberry400,
          [systemIconStencil.vars.color]: base.blueberry400,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.blueberry400)}`,
        backgroundColor: base.blueberry100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: base.frenchVanilla100,
          [systemIconStencil.vars.color]: base.blueberry400,
          [systemIconStencil.vars.backgroundColor]: base.blueberry400,
        },
      },
    },
    caution: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cantaloupe400)}`,
        backgroundColor: base.soap100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: base.blackPepper400,
          [systemIconStencil.vars.color]: base.blackPepper400,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cantaloupe400)}`,
        backgroundColor: base.sourLemon100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: base.frenchVanilla100,
          [systemIconStencil.vars.color]: base.blackPepper400,
          [systemIconStencil.vars.backgroundColor]: base.blackPepper400,
        },
      },
    },
    critical: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cinnamon400)}`,
        backgroundColor: base.soap100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: base.cinnamon500,
          [systemIconStencil.vars.color]: base.cinnamon500,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cinnamon400)}`,
        backgroundColor: base.peach100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: base.frenchVanilla100,
          [systemIconStencil.vars.color]: base.cinnamon500,
          [systemIconStencil.vars.backgroundColor]: base.cinnamon500,
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
    Button: Button,
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
