import React from 'react';

import {createStyles, CSProps, DefaultProps} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent, createStyledComponent} from '@workday/canvas-kit-react/common';
import '@workday/canvas-tokens-web/css/system/_variables.css';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  width: 100,
  height: 100,
  backgroundColor: 'gray',
});

const flexStyles = createStyles({
  display: 'flex',
});

interface FlexProps extends DefaultProps {}

const Flex = createComponent('div')({
  displayName: 'Flex',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, [flexStyles])}>
        {children}
      </Element>
    );
  },
});

const myComponentStyles = createStyles({
  padding: '10px',
  backgroundColor: 'orange',
});
const MyComponent = createStyledComponent(Flex)({
  displayName: 'MyComponent',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, [myComponentStyles])}>
        {children}
      </Element>
    );
  },
});

export interface CardProps extends DefaultProps {}

const cardBaseStyles = createStyles({
  boxShadow: system.depth[1],
  padding: system.space.x6,
  borderRadius: system.shape.x2,
});

const Card = createComponent(Flex)({
  displayName: 'MyComponent',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, [cardBaseStyles])}>
        {children}
      </Element>
    );
  },
});

export const CreateStyles = () => {
  return (
    <div>
      <Flex as="p" cs={{flexDirection: 'column'}}>
        Flex Component
      </Flex>
      <MyComponent>Extension of Flex</MyComponent>
      <Card>This is a card build on Flex</Card>
    </div>
  );
};
