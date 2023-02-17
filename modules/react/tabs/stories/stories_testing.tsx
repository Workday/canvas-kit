import React from 'react';

import {setupIcon} from '@workday/canvas-system-icons-web';
import {PartialEmotionCanvasTheme, ContentDirection} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../utils/storybook';

import {Tabs} from '@workday/canvas-kit-react/tabs';

import {Basic} from './examples/Basic';
import {RightToLeft} from './examples/RightToLeft';
import {Box} from '@workday/canvas-kit-react/layout';

const fontDelay = 150; // best guess for the font delay to prevent incorrect Chromatic regressions

export default {
  title: 'Testing/Containers/Tabs',
  component: Tabs,
  parameters: {
    chromatic: {
      delay: fontDelay,
    },
  },
};

type MyTabItem = {
  id: string;
  text: React.ReactNode;
  contents: string;
};

const TabsExample = ({theme}: {theme?: PartialEmotionCanvasTheme} = {theme: undefined}) => {
  return (
    <StaticStates theme={theme}>
      <Tabs>
        <ComponentStatesTable
          rowProps={[
            {label: 'Default', props: {hasIcon: false}},
            {label: 'Icon', props: {hasIcon: true}},
          ]}
          columnProps={[
            {label: 'Default', props: {'aria-selected': false}},
            {label: 'Selected', props: {'aria-selected': true}},
            {label: 'Focus', props: {className: 'focus'}},
            {label: 'Hover', props: {className: 'hover'}},
            {label: 'Disabled', props: {'aria-disabled': true}},
          ]}
        >
          {({hasIcon, ...props}) =>
            hasIcon ? (
              <Tabs.Item {...props}>
                <Tabs.Item.Icon icon={setupIcon} />
                <Tabs.Item.Text>Icon</Tabs.Item.Text>
              </Tabs.Item>
            ) : (
              <Tabs.Item {...props}>Tab</Tabs.Item>
            )
          }
        </ComponentStatesTable>
      </Tabs>
    </StaticStates>
  );
};

export const TabStates = withSnapshotsEnabled(() => (
  <>
    <h3>Default</h3>
    <TabsExample />
    <h3>Themed</h3>
    <TabsExample theme={{canvas: customColorTheme}} />
    <h3>RTL</h3>
    <TabsExample theme={{canvas: {direction: ContentDirection.RTL}}} />
  </>
));

export const Bidirectionality = withSnapshotsEnabled(() => {
  return (
    <>
      <h3>Left-to-right</h3>
      <div>
        <Basic />
      </div>
      <br />
      <h3>Right-to-left</h3>
      <div>
        <RightToLeft />
      </div>
    </>
  );
});

const OverflowTabs = () => {
  const [items] = React.useState<MyTabItem[]>([
    {id: 'first', text: 'First Tab', contents: 'Contents of First Tab'},
    {id: 'second', text: 'Second Tab', contents: 'Contents of Second Tab'},
    {id: 'third', text: 'Third Tab', contents: 'Contents of Third Tab'},
    {id: 'fourth', text: 'Fourth Tab', contents: 'Contents of Fourth Tab'},
    {id: 'fifth', text: 'Fifth Tab', contents: 'Contents of Fifth Tab'},
    {id: 'sixth', text: 'Sixth Tab', contents: 'Contents of Sixth Tab'},
    {id: 'seventh', text: 'Seventh Tab', contents: 'Contents of Seventh Tab'},
  ]);

  return (
    <Tabs items={items}>
      <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: MyTabItem) => <Tabs.Item>{item.text}</Tabs.Item>}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card maxWidth={300} maxHeight={200}>
          <Tabs.Menu.List>
            {(item: MyTabItem) => <Tabs.Menu.Item>{item.text}</Tabs.Menu.Item>}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <Tabs.Panels>
        {(item: MyTabItem) => <Tabs.Panel marginTop="m">{item.contents}</Tabs.Panel>}
      </Tabs.Panels>
    </Tabs>
  );
};

export const Overflow = withSnapshotsEnabled(() => {
  return <OverflowTabs />;
});
Overflow.parameters.chromatic.viewports = [480, 1200];

export const ContainerWidth = withSnapshotsEnabled(() => {
  return (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {label: '100%', props: {width: '100%'}},
          {label: '500px', props: {width: '500px'}},
          {label: '360px', props: {width: '360px'}},
          {label: '150px', props: {width: '150px'}},
        ]}
        columnProps={[{label: 'Overflow Tabs', props: {}}]}
      >
        {({width}) => (
          <Box width={width}>
            <OverflowTabs />
          </Box>
        )}
      </ComponentStatesTable>
    </StaticStates>
  );
});
