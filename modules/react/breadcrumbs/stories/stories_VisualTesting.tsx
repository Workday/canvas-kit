import React from 'react';

import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export default withSnapshotsEnabled({
  title: 'Testing/React/Navigation/Breadcrumbs',
  component: Breadcrumbs,
});

export const DefaultStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Without truncation', props: {}},
          {label: 'With Truncated items', props: {isTruncated: true}},
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => {
          return (
            <Breadcrumbs aria-label="Breadcrumbs">
              <Breadcrumbs.List>
                <Breadcrumbs.Item>
                  <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                  <Breadcrumbs.Link href="#" maxWidth={props.isTruncated ? 100 : undefined}>
                    Breakfast Menus
                  </Breadcrumbs.Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.CurrentItem maxWidth={props.isTruncated ? 100 : undefined}>
                  House Specialty Pies
                </Breadcrumbs.CurrentItem>
              </Breadcrumbs.List>
            </Breadcrumbs>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const WithOverflowMenu = () => {
  interface Breadcrumb {
    id: string;
    link?: string;
    text: string;
  }

  const [items] = React.useState<Breadcrumb[]>([
    {id: '1', text: 'Home', link: '/'},
    {id: '2', text: 'Second Link', link: '#'},
    {id: '3', text: 'Third Link', link: '#'},
    {id: '4', text: 'Fourth Link', link: '#'},
    {id: '5', text: 'Fifth Link', link: '#'},
    {id: '6', text: 'Sixth Link', link: '#'},
    {id: '7', text: 'Current'},
  ]);

  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Lowest level', props: {maxWidth: 150}},
          {label: '2 items displayed', props: {maxWidth: 250}},
          {label: '3 items displayed', props: {maxWidth: 350}},
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => {
          return (
            <Breadcrumbs items={items} aria-label="Breadcrumbs">
              <Breadcrumbs.List
                maxWidth={props.maxWidth}
                overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}
              >
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
                      <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>
                    )}
                  </Breadcrumbs.Menu.List>
                </Breadcrumbs.Menu.Card>
              </Breadcrumbs.Menu.Popper>
            </Breadcrumbs>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};

export const RTLStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: 'Without truncation', props: {}},
          {label: 'With Truncated items', props: {isTruncated: true}},
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {props => {
          return (
            <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
              <Breadcrumbs aria-label="Breadcrumbs">
                <Breadcrumbs.List>
                  <Breadcrumbs.Item>
                    <Breadcrumbs.Link href="#">תנ״ך</Breadcrumbs.Link>
                  </Breadcrumbs.Item>
                  <Breadcrumbs.Item>
                    <Breadcrumbs.Link href="#" maxWidth={props.isTruncated ? 100 : undefined}>
                      משלי
                    </Breadcrumbs.Link>
                  </Breadcrumbs.Item>
                  <Breadcrumbs.CurrentItem maxWidth={props.isTruncated ? 100 : undefined}>
                    בני תורתי אל־תשכח ומצותי יצר לבך׃
                  </Breadcrumbs.CurrentItem>
                </Breadcrumbs.List>
              </Breadcrumbs>
            </CanvasProvider>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
