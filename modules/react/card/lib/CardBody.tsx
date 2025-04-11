import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {textStencil} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';

export interface CardBodyProps extends BoxProps {}

// .cnvs-card-body
export const cardBodyStencil = createStencil({
  extends: textStencil,
  base: {},
  defaultModifiers: {typeLevel: 'subtext.large'},
});

export const CardBody = createComponent('div')({
  displayName: 'Card.Body',
  Component: ({children, ...elemProps}: CardBodyProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, cardBodyStencil())}>
        {children}
      </Element>
    );
  },
});
