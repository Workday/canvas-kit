import * as React from 'react';
import {Breadcrumbs} from '@workday/canvas-kit-preview-react/breadcrumbs';

export const Basic = () => {
  return (
    <Breadcrumbs.Nav aria-label="breadcrumb">
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/menus">Menus</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/lunch">Lunch</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/house-specialty-pies" maxWidth={100}>
            House Specialty Pies
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentItem maxWidth={100}>Canvas Supreme</Breadcrumbs.CurrentItem>
      </Breadcrumbs.List>
    </Breadcrumbs.Nav>
  );
};
