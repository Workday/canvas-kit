import * as React from 'react';
import {Breadcrumbs, useBreadcrumbsModel} from '@workday/canvas-kit-react/breadcrumbs';
import {Box} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

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
      <Box width={containerWidth} marginBottom="xl">
        <Breadcrumbs model={model} aria-label="Breadcrumbs">
          <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
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
                {(item: Breadcrumb) => (
                  <Breadcrumbs.Menu.Item href={item.link}>{item.text}</Breadcrumbs.Menu.Item>
                )}
              </Breadcrumbs.Menu.List>
            </Breadcrumbs.Menu.Card>
          </Breadcrumbs.Menu.Popper>
        </Breadcrumbs>
      </Box>
      <hr />
      <h4>Change Breadcrumbs container size</h4>
      <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
        <SegmentedControl.List aria-label="container width control" marginBottom="m">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="480px">480px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="250px">250px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="150px">150px</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </div>
  );
};
