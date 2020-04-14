/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {Tabs, TabList, Tab, TabPanel, TabPanels} from '../index';
import README from '../README.md';

storiesOf('Labs/Tabs', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Tabs>
        <TabList>
          <Tab index={0}>Tab</Tab>
          <Tab index={1}>Tab Medium</Tab>
          <Tab index={2}>Tab Really Long</Tab>
          <Tab index={3}>Tab Really Really Long</Tab>
          <Tab index={4}>Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel key="1" index={0}>
            Hi this is tab content
          </TabPanel>
          <TabPanel key="2" index={1}>
            Hi this is medium tab content
          </TabPanel>
          <TabPanel key="3" index={2}>
            Hi this is really long tab content
          </TabPanel>
          <TabPanel key="4" index={3}>
            Hi this is really really long tab content
          </TabPanel>
          <TabPanel key="5" index={4}>
            Hi this is tab content
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ));
