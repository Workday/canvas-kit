/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {spacing} from '@workday/canvas-kit-react-core';

import {Tabs} from '@workday/canvas-kit-labs-react-tabs';

import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import {useTabModel} from '../lib/useTabModel';

export default {
  title: 'Labs|Tabs/React',
  component: Tabs,
  decorators: [withReadme(README)],
};

// const items = [
//   {
//     title: 'First Tab',
//     contents: 'Contents of First Tab',
//     disabled: true,
//   },
//   {
//     title: 'Second Tab',
//     contents: 'Contents of Second Tab',
//   },
//   {
//     title: 'Third Tab',
//     contents: 'Contents of Third Tab',
//   },
// ];

// const ComposedTabs = (props: {items: any[]}) => (
//   <Tabs>
//     <Tabs.List>
//       {items.map(tab => {
//         return <Tabs.Item disabled={tab.disabled}>{tab.title}</Tabs.Item>;
//       })}
//     </Tabs.List>
//     <div css={{marginTop: spacing.m}}>
//       {items.map(tab => {
//         return <Tabs.Panel>{tab.contents}</Tabs.Panel>;
//       })}
//     </div>
//   </Tabs>
// );

// export const Simple = () => <ComposedTabs items={items} />;

const MyComponent = ({
  children,
  onClick,
  ...elemProps
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) => (
  <article onClick={onClick} {...elemProps}>
    {children}
  </article>
);

export const Simple = () => {
  return(
  <Tabs
    onClick={event => {
      console.log(event);
    }}
  >
    <Tabs.List>
      <Tabs.Item as={'article'} aria-label="foobar" onClick={event => event}>
        First Tab
      </Tabs.Item>
      <Tabs.Item>Second Tab</Tabs.Item>
      <Tabs.Item>Third Tab</Tabs.Item>
      <Tabs.Item>Fourth Tab</Tabs.Item>
      <Tabs.Item>Fifth Tab</Tabs.Item>
    </Tabs.List>
    <div css={{marginTop: spacing.m}}>
      <Tabs.Panel>Contents of First Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Fifth Tab</Tabs.Panel>
    </div>
  </Tabs>
)};

export const NamedKeys = () => {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    console.log('ref', ref.current);
  });

  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item name="first" ref={ref}>
          First Tab
        </Tabs.Item>
        <Tabs.Item name="second">Second Tab</Tabs.Item>
        <Tabs.Item name="third">Third Tab</Tabs.Item>
        <Tabs.Item name="fourth">Fourth Tab</Tabs.Item>
        <Tabs.Item name="fifth">Fifth Tab</Tabs.Item>
      </Tabs.List>
      <div css={{marginTop: spacing.m}}>
        <Tabs.Panel name="first">Contents of First Tab</Tabs.Panel>
        <Tabs.Panel name="second">Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel name="third">Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel name="fourth">Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel name="fifth">Contents of Fifth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

export const DisabledTab = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Item>First Tab</Tabs.Item>
      <Tabs.Item disabled>Second Tab</Tabs.Item>
      <Tabs.Item>Third Tab</Tabs.Item>
    </Tabs.List>
    <div css={{marginTop: spacing.m}}>
      <Tabs.Panel>Contents of First Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
    </div>
  </Tabs>
);

export const SinglePanel = () => {
  const [currentTab, setCurrentTab] = React.useState('second');

  const message = (
    <p>
      This example shows how to use a single tab panel. You must manually set the{' '}
      <code>hidden</code>, <code>aria-controls</code>, and <code>id</code> attributes of Tab item
      and Tab panel components
    </p>
  );

  const contents = {
    first: <div>Contents of First Tab {message}</div>,
    second: <div>Contents of Second Tab {message}</div>,
    third: <div>Contents of Third Tab {message}</div>,
  } as const;

  return (
    <Tabs
      initialTab={currentTab}
      shouldActivateTab={({data, state}) => true}
      onActivateTab={({data}) => setCurrentTab(data.tab)}
    >
      <Tabs.List>
        <Tabs.Item name="first" aria-controls="mytab-panel">
          First Tab
        </Tabs.Item>
        <Tabs.Item name="second" aria-controls="mytab-panel">
          Second Tab
        </Tabs.Item>
        <Tabs.Item name="third" aria-controls="mytab-panel">
          Third Tab
        </Tabs.Item>
      </Tabs.List>
      <Tabs.Panel css={{marginTop: spacing.m}} hidden={undefined} id="mytab-panel">
        {contents[currentTab]}
      </Tabs.Panel>
    </Tabs>
  );
};

export const SinglePanelModel = () => {
  const [currentTab, setCurrentTab] = React.useState('second');
  const model = useTabModel({
    initialTab: currentTab,
    onActivateTab: ({data}) => setCurrentTab(data.tab),
  });

  const message = (
    <p>
      This example shows how to use a single tab panel. You must manually set the{' '}
      <code>hidden</code>, <code>aria-controls</code>, and <code>id</code> attributes of Tab item
      and Tab panel components
    </p>
  );

  const contents = {
    first: <div>Contents of First Tab {message}</div>,
    second: <div>Contents of Second Tab {message}</div>,
    third: <div>Contents of Third Tab {message}</div>,
  } as const;

  return (
    <Tabs model={model}>
      <Tabs.List>
        <Tabs.Item name="first" aria-controls="mytab-panel">
          First Tab
        </Tabs.Item>
        <Tabs.Item name="second" aria-controls="mytab-panel">
          Second Tab
        </Tabs.Item>
        <Tabs.Item name="third" aria-controls="mytab-panel">
          Third Tab
        </Tabs.Item>
      </Tabs.List>
      <Tabs.Panel css={{marginTop: spacing.m}} hidden={undefined} id="mytab-panel">
        {contents[currentTab]}
      </Tabs.Panel>
    </Tabs>
  );
};

export const AlternativeTabStop = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Item>First Tab</Tabs.Item>
      <Tabs.Item>Second Tab</Tabs.Item>
      <Tabs.Item>Third Tab</Tabs.Item>
    </Tabs.List>
    <div css={{marginTop: spacing.m}}>
      <Tabs.Panel tabIndex={undefined}>
        <button>Focusable button</button>
        <br />
        Contents of First Tab. The tab panel is no longer focusable, but the button is. It may be
        desirable to disable focus on the tab panel and allow focus to flow into the tab panel to
        the first focusable element.
      </Tabs.Panel>
      <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
    </div>
  </Tabs>
);
