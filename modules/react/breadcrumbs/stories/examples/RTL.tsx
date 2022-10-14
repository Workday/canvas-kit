import * as React from 'react';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';
import {Box} from '@workday/canvas-kit-react/layout';

export interface Breadcrumb {
  id: string;
  link?: string;
  text: string;
}

export const RTLOverflowList = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };

  const [items] = React.useState<Breadcrumb[]>([
    {id: '1', text: 'תנ״ך', link: '/tanakh'},
    {id: '2', text: 'כתובים', link: '/ketuvim'},
    {id: '3', text: 'משלי', link: '/proverbs'},
    {id: '4', text: 'בני תורתי אל־תשכח ומצותי יצר לבך׃', link: '/chapter-3-verse-1'},
    {id: '5', text: 'כי אורך ימים ושנות חיים ושלום יוסיפו לך׃', link: '/chapter-3-verse-2'},
    {id: '7', text: 'ומצא־חן ושכל־טוב בעיני אלהים ואדם׃'},
  ]);

  return (
    <CanvasProvider theme={theme}>
      <Box maxWidth="300px">
        <Breadcrumbs items={items} aria-label="Breadcrumbs">
          <Breadcrumbs.List overflowButtonProps={{'aria-label': 'More links'}}>
            {item =>
              item.link ? (
                <Breadcrumbs.Item>
                  <Breadcrumbs.Link maxWidth={100} href={item.link}>
                    {item.text}
                  </Breadcrumbs.Link>
                </Breadcrumbs.Item>
              ) : (
                <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
              )
            }
          </Breadcrumbs.List>
          <Breadcrumbs.Menu.Popper>
            <Breadcrumbs.Menu.Card maxWidth={300} maxHeight={200}>
              <Breadcrumbs.Menu.List>
                {(item: Breadcrumb) => (
                  <Breadcrumbs.Menu.Item href={item.link}>{item.text}</Breadcrumbs.Menu.Item>
                )}
              </Breadcrumbs.Menu.List>
            </Breadcrumbs.Menu.Card>
          </Breadcrumbs.Menu.Popper>
        </Breadcrumbs>
      </Box>
    </CanvasProvider>
  );
};
