import * as React from 'react';
import {Breadcrumbs} from '@workday/canvas-kit-preview-react/breadcrumbs';

export const CollapsibleList = () => {
  return (
    <Breadcrumbs.Nav aria-label="breadcrumb">
      <Breadcrumbs.CollapsibleList buttonAriaLabel="more links" maxWidth={300}>
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
          <Breadcrumbs.Link href="/small-plates-and-appetizers">
            Small Plates & Appetizers
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentItem>Focaccia Genovese</Breadcrumbs.CurrentItem>
      </Breadcrumbs.CollapsibleList>
    </Breadcrumbs.Nav>
  );
};
