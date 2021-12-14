import React from 'react';

import {addons, types} from '@storybook/addons';
import {AddonPanel} from '@storybook/components';
import {useParameter} from '@storybook/api';

const ADDON_ID = 'readmepath';
const PANEL_ID = `${ADDON_ID}/panel`;

const PARAM_KEY = 'ReadmePath';

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const url = `https://github.com/Workday/canvas-kit/blob/master/modules/${value}/README.md`;
  const item = value ? (
    <a href={url} target="_blank">
      README
    </a>
  ) : (
    'No readme found. Try looking at the Docs tab instead.'
  );
  return <p style={{textAlign: 'center'}}>{item}</p>;
};

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Readme',
    render: ({active, key}) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
