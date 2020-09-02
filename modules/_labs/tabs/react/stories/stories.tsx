/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {Tabs, TabList, Tab, TabPanel, TabPanels} from '../index';
import README from '../README.md';

export default {
  title: 'Labs|Tabs/React',
  component: Tabs,
  decorators: [withReadme(README)],
};

export const Default = () => (
  <Tabs>
    <TabList>
      <Tab>Tab</Tab>
      <Tab>Tab Medium</Tab>
      <Tab>Tab Really Long</Tab>
      <Tab>Tab Really Really Long</Tab>
      <Tab>Tab</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Hi this is tab content</TabPanel>
      <TabPanel>Hi this is medium tab content</TabPanel>
      <TabPanel>Hi this is really long tab content</TabPanel>
      <TabPanel>Hi this is really really long tab content</TabPanel>
      <TabPanel>Hi this is tab content</TabPanel>
    </TabPanels>
  </Tabs>
);
