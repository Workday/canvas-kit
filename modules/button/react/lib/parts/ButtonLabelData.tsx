import * as React from 'react';
import {styled} from '@workday/canvas-kit-react-common';

export const buttonLabelDataClassName = 'button-label-data';

const Container = styled('span')({
  position: 'relative', // Fixes an IE issue with text within button moving on click
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontWeight: 400,
});

export const ButtonLabelData = (props: any) => (
  <Container className={buttonLabelDataClassName} {...props} />
);
