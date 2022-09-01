import * as React from 'react';
import {Breadcrumbs, useBreadcrumbsModel} from '@workday/canvas-kit-react/breadcrumbs';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export interface Breadcrumb {
  id: string;
  link?: string;
  text: string;
}

export const OverflowBreadcrumbs = () => {
  const [items] = React.useState<Breadcrumb[]>([
    {id: '1', text: 'Home', link: '/'},
    {id: '2', text: 'Second Link', link: '#'},
    {id: '3', text: 'Third Link', link: '#'},
    {id: '4', text: 'Fourth Link', link: '#'},
    {id: '5', text: 'Fifth Link', link: '#'},
    {id: '6', text: 'Sixth Link', link: '#'},
    {id: '7', text: 'Current'},
  ]);

  const model = useBreadcrumbsModel({items});
  const [containerWidth, setContainerWidth] = React.useState('350px');

  return (
    <div>
      <Box width={containerWidth}>
        <Breadcrumbs model={model}>
          <Breadcrumbs.List>
            {item =>
              item.link ? (
                <Breadcrumbs.Item>
                  <Breadcrumbs.Link href={item.link}>{item.text}</Breadcrumbs.Link>
                </Breadcrumbs.Item>
              ) : (
                <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
              )
            }
          </Breadcrumbs.List>
          <Breadcrumbs.Menu.Popper>
            <Breadcrumbs.Menu.Card maxWidth={300} maxHeight={200}>
              <Breadcrumbs.Menu.List>
                {(item: Breadcrumb) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
              </Breadcrumbs.Menu.List>
            </Breadcrumbs.Menu.Card>
          </Breadcrumbs.Menu.Popper>
        </Breadcrumbs>
      </Box>
      <hr />
      <h4>Change tab container size</h4>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap="8px">
        <SecondaryButton onClick={() => setContainerWidth('100%')}>100%</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('700px')}>700px</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('550px')}>550px</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('475px')}>475px</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('350px')}>350px</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('235px')}>235px</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('150px')}>150px</SecondaryButton>
      </Grid>
    </div>
  );
};
