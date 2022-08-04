import * as React from 'react';
import {Breadcrumbs, useBreadcrumbsModel} from '../..';
import {HStack} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export interface Breadcrumb {
  id: number;
  link: string;
  text: string;
}

export const Collapsed = () => {
  const [items] = React.useState<Breadcrumb[]>([
    {id: 1, text: 'First Link', link: '#'},
    {id: 2, text: 'Second Link', link: '#'},
    {id: 3, text: 'Third Link', link: '#'},
    {id: 4, text: 'Fourth Link', link: '#'},
    {id: 5, text: 'Fifth Link', link: '#'},
    {id: 6, text: 'Sixth Link', link: '#'},
    {id: 7, text: 'Seventh Link', link: '#'},
  ]);

  const model = useBreadcrumbsModel({items});
  const [containerWidth, setContainerWidth] = React.useState('100%');

  return (
    <div style={{width: containerWidth}}>
      <Breadcrumbs model={model}>
        <Breadcrumbs.List>
          {item => <Breadcrumbs.Item>{item.text}</Breadcrumbs.Item>}
        </Breadcrumbs.List>
        <Breadcrumbs.Menu.Popper>
          <Breadcrumbs.Menu.Card maxWidth={300} maxHeight={200}>
            <Breadcrumbs.Menu.List>
              {(item: Breadcrumb) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
            </Breadcrumbs.Menu.List>
          </Breadcrumbs.Menu.Card>
        </Breadcrumbs.Menu.Popper>
      </Breadcrumbs>
      <hr />
      <h4>Change tab container size</h4>
      <HStack spacing="xs">
        <SecondaryButton onClick={() => setContainerWidth('100%')}>100%</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('500px')}>500px</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('235px')}>235px</SecondaryButton>
        <SecondaryButton onClick={() => setContainerWidth('150px')}>150px</SecondaryButton>
      </HStack>
    </div>
  );
};
