import * as React from 'react';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export const CurrentItemTruncation = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.CurrentItem maxWidth={100}>Foccacia Genovese</Breadcrumbs.CurrentItem>
    </Breadcrumbs>
  );
};
