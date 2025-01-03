import * as React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {InformationHighlightHeading} from './parts/Heading';
import {Body} from './parts/Body';
import {Icon} from './parts/Icon';
import {Link} from './parts/Link';
import {useInformationHighlightModel} from './hooks/useInformationHighlightModel';

interface InformationHighlightProps extends CSProps {}

const informationHighlightStencil = createStencil({
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
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.blueberry400)}`,
        backgroundColor: base.blueberry100,
      },
    },
    caution: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cantaloupe400)}`,
        backgroundColor: base.soap100,
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cantaloupe400)}`,
        backgroundColor: base.sourLemon100,
      },
    },
    critical: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cinnamon400)}`,
        backgroundColor: base.soap100,
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cinnamon400)}`,
        backgroundColor: base.peach100,
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
