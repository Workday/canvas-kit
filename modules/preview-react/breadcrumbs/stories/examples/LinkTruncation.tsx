import * as React from 'react';
import {Breadcrumbs} from '@workday/canvas-kit-preview-react/breadcrumbs';

export const LinkTruncation = () => {
  return (
    <Breadcrumbs.Link href="/small-plates-and-appetizers" maxWidth={150}>
      Small Plates & Appetizers
    </Breadcrumbs.Link>
  );
};
