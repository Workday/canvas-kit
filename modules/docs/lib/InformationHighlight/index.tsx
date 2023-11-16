import * as React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {createModifiers, createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {Base, BaseProps} from './Base';
import {Heading} from './Heading';
import {Body} from './Body';
import {Icon} from './Icon';
import {Link} from './Link';
import {useInformationHighlightModel} from './modelHook';

type Variant = 'emphasis' | 'caution' | 'attention';

interface InformationHighlightProps extends BaseProps {
  variant?: Variant;
}

const containerStyles = createStyles({
  backgroundColor: base.soap100,
  display: 'grid',
  gridTemplateColumns: 'min-content',
  columnGap: system.space.x4,
  rowGap: system.space.x2,
  padding: system.space.x4,
  borderRadius: system.shape.x1,
});

const containerModifiers = createModifiers({
  variant: {
    emphasis: createStyles({
      borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.blueberry400)}`,
    }),
    caution: createStyles({
      borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(
        base.cantaloupe400
      )}`,
    }),
    attention: createStyles({
      borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(base.cinnamon500)}`,
    }),
  },
});

export const InformationHighlight = createContainer('section')({
  displayName: 'InformationHighlight',
  modelHook: useInformationHighlightModel,
  subComponents: {
    Icon: Icon,
    Heading: Heading,
    Body: Body,
    Link: Link,
  },
})((props: InformationHighlightProps, Element, model) => {
  return (
    <Base
      as={Element}
      cs={[containerStyles, containerModifiers({variant: model.state.variant})]}
      {...props}
    />
  );
});
