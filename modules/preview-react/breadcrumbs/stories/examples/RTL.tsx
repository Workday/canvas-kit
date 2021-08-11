import * as React from 'react';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {Breadcrumbs} from '@workday/canvas-kit-preview-react/breadcrumbs';

export const RTLCollapsibleList = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <Breadcrumbs.Nav aria-label="breadcrumb">
        <Breadcrumbs.CollapsibleList buttonAriaLabel="more links" maxWidth={300}>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/tanakh">תנ״ך</Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/ketuvim">כתובים</Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/proverbs">משלי</Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/chapter-3-verse-1">
              בני תורתי אל־תשכח ומצותי יצר לבך׃
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="/chapter-3-verse-2">
              כי ארך ימים ושנות חיים ושלום יוסיפו לך׃
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href="chapter-3-verse-3">
              חסד ואמת אל־יעזבך קשרם על־גרגרותיך כתבם על־לוח לבך׃
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.CurrentItem>ומצא־חן ושכל־טוב בעיני אלהים ואדם׃</Breadcrumbs.CurrentItem>
        </Breadcrumbs.CollapsibleList>
      </Breadcrumbs.Nav>
    </CanvasProvider>
  );
};
