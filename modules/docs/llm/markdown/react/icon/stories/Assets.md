---
source_file: react/icon/stories/Assets.mdx
live_url: https://workday.github.io/canvas-kit/react/icon/stories/Assets
---

<Meta of={IconStories} />

# Assets

Assets are graphics which help communicate meaning or highlight areas of interaction to our users.
These may be presented individually or as part of a group with related information in components and
patterns.

```tsx
import * as React from 'react';
import styled from '@emotion/styled';

import {Flex} from '@workday/canvas-kit-react/layout';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';

import {AccentIcon, AppletIcon, SystemIcon, SystemIconCircle, Graphic} from '../../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const graphicExample: CanvasGraphic = {
  name: 'badgeAchievement',
  type: CanvasIconTypes.Graphic,
  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="wd-graphic wd-graphic-badge-achievement" focusable="false" role="presentation" viewBox="0 0 50 50"><g fill="none" fill-rule="nonzero" class="wd-icon-container"><circle cx="25" cy="25" r="25" fill="#FFC943"/><path fill="#FF7A45" d="M17 12h23l-4.373 7.5L40 27H17z"/><path fill="#656464" d="M15 12h2v31h-2z"/><circle cx="16" cy="11.5" r="1.5" fill="#656464"/></g></svg>',
  filename: 'wd-graphic-badge-achievement.svg',
  category: '',
  tags: [],
};

const styleOverrides = {
  container: createStyles({
    flexDirection: 'row',
    alignItems: 'center',
    gap: system.space.x4,
  }),
  systemIconStyles: createStyles({
    background: system.color.static.red.softer,
  }),
};

export const Overview = () => (
  <Flex cs={styleOverrides.container}>
    <AccentIcon icon={shieldIcon} />
    <AppletIcon icon={benefitsIcon} />
    <SystemIcon icon={activityStreamIcon} cs={styleOverrides.systemIconStyles} />
    <SystemIconCircle icon={activityStreamIcon} />
    <Graphic src={graphicExample} />
  </Flex>
);

```

## Accent Icon List

Accent Icons add clarity, and visual interest, they bring delight to the experience by communicating
the overall tone and meaning of a page.

```tsx
import React from 'react';
import * as CanvasAccenttIcons from '@workday/canvas-accent-icons-web';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const ImportedIcons = Object.keys(CanvasAccenttIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasAccentIcons');

const styleOverrides = {
  parentContainer: createStyles({
    flexDirection: 'column',
    alignItems: 'center',
    gap: system.space.x6,
  }),
  iconGroupContainer: createStyles({
    flexWrap: 'wrap',
  }),
  individualIconContainer: createStyles({
    alignItems: 'center',
    width: `max(${px2rem(320)},20%)`,
    flexDirection: 'row',
    gap: system.space.x3,
    padding: system.space.x3,
  }),
};

export const AccentIconList = () => {
  const [value, setValue] = React.useState('');

  const handleSearch = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <TextInput onKeyDown={e => handleSearch(e)} placeholder="Search for an icon" />
      <Flex cs={styleOverrides.iconGroupContainer}>
        {allIcons
          .filter(icon => {
            if (value === '') {
              return 'No icons found';
            } else if (icon.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
              return icon;
            }
          })
          .map((singleIcon, index) => {
            return (
              <Flex cs={styleOverrides.individualIconContainer} key={index}>
                <Box>
                  <AccentIcon icon={CanvasAccenttIcons[singleIcon]} />
                </Box>
                <Box>{singleIcon}</Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

```

## Applet Icon List

Applet Icons convey entry points, categories of actions, or information sources on the Workday
homepage.

```tsx
import React from 'react';
import * as CanvasAppletIcons from '@workday/canvas-applet-icons-web';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {AppletIcon} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const ImportedIcons = Object.keys(CanvasAppletIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasAppletIcons');

const styleOverrides = {
  parentContainer: createStyles({
    flexDirection: 'column',
    alignItems: 'center',
    gap: system.space.x6,
  }),
  iconGroupContainer: createStyles({
    flexWrap: 'wrap',
  }),
  individualIconContainer: createStyles({
    alignItems: 'center',
    width: `max(${px2rem(320)},20%)`,
    flexDirection: 'row',
    gap: system.space.x3,
    padding: system.space.x3,
  }),
};

export const AppletIconList = () => {
  const [value, setValue] = React.useState('');

  const handleSearch = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <TextInput onKeyDown={e => handleSearch(e)} placeholder="Search for an icon" />
      <Flex cs={styleOverrides.iconGroupContainer}>
        {allIcons
          .filter(icon => {
            if (value === '') {
              return 'No icons found';
            } else if (icon.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
              return icon;
            }
          })
          .map((singleIcon, index) => {
            return (
              <Flex cs={styleOverrides.individualIconContainer} key={index}>
                <Box>
                  <AppletIcon icon={CanvasAppletIcons[singleIcon]} />
                </Box>
                <Box>{singleIcon}</Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

```

## System Icon List

System Icons are symbols used to convey simple actions and functions, they are the most common icons
encountered in products and help communicate metaphors at a glance.

```tsx
import React from 'react';
import * as CanvasIcons from '@workday/canvas-system-icons-web';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const ImportedIcons = Object.keys(CanvasIcons);

const allIcons = ImportedIcons.filter(icon => icon !== 'CanvasSystemIcons');

const styleOverrides = {
  parentContainer: createStyles({
    flexDirection: 'column',
    alignItems: 'center',
    gap: system.space.x6,
  }),
  firstChildContainer: createStyles({
    flexWrap: 'wrap',
  }),
  secondChildContainer: createStyles({
    alignItems: 'center',
    width: `max(320px,20%)`,
    flexDirection: 'row',
    gap: system.space.x3,
    padding: system.space.x3,
  }),
};

export const SystemIconList = () => {
  const [value, setValue] = React.useState('');

  const handleSearch = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <TextInput onKeyDown={e => handleSearch(e)} placeholder="Search for an icon" />
      <Flex cs={styleOverrides.firstChildContainer}>
        {allIcons
          .filter(icon => {
            if (value === '') {
              return 'No icons found';
            } else if (icon.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
              return icon;
            }
          })
          .map((singleIcon, index) => {
            return (
              <Flex cs={styleOverrides.secondChildContainer} key={index}>
                <Box>
                  <SystemIcon icon={CanvasIcons[singleIcon]} />
                </Box>
                <Box>{singleIcon}</Box>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

```
