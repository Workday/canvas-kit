import React from 'react';

import {setupIcon} from '@workday/canvas-system-icons-web';
import {PartialEmotionCanvasTheme, ContentDirection} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../utils/storybook';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

import {Basic} from './examples/Basic';
import {RightToLeft} from './examples/RightToLeft';

const fontDelay = 150; // best guess for the font delay to prevent incorrect Chromatic regressions

export default {
  title: 'Testing/React/Containers/Tabs',
  component: Tabs,
  parameters: {
    chromatic: {
      delay: fontDelay,
    },
  },
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
