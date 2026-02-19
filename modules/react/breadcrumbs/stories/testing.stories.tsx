import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';

import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export default {
  title: 'Testing/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const DefaultStates = {
  render: () => {
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
  },
};

export const WithOverflowMenu = {
  render: () => {
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
  },
};

export const WithOverflowMenuHavingTwoItems = {
  render: () => {
    interface Breadcrumb {
      id: string;
      link?: string;
      text: string;
    }

    const [twoItems] = React.useState<Breadcrumb[]>([
      {id: '1', text: 'Home', link: '/'},
      {id: '2', text: 'Current'},
    ]);

    const [threeItems] = React.useState<Breadcrumb[]>([
      {id: '1', text: 'Home', link: '/'},
      {id: '2', text: 'Second Link', link: '#'},
      {id: '3', text: 'Current'},
    ]);

    return (
      <StaticStates>
        <ComponentStatesTable
          rowProps={[
            {label: 'Overflow with only 2 items total', props: {maxWidth: 150, items: twoItems}},
            {label: 'Overflow with only 3 items total', props: {maxWidth: 250, items: threeItems}},
          ]}
          columnProps={[{label: 'Default', props: {}}]}
        >
          {props => {
            return (
              <Breadcrumbs items={props.items} aria-label="Breadcrumbs">
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
  },
};

export const RTLStates = {
  render: () => {
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
              <CanvasProvider dir="rtl">
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
  },
};
