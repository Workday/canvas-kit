import * as React from 'react';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export const LinkTruncation = () => {
  return (
    <Breadcrumbs.Link href="/#" maxWidth={150}>
      Small Plates & Appetizers
    </Breadcrumbs.Link>
  );
};
