import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Image, Graphic} from '@workday/canvas-kit-react/icon';
// import {badgeAchievementGraphic} from '@workday/canvas-graphics-web';

import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';

const styleOverrides = {
  parentContainer: createStyles({
    flexDirection: 'column',
    alignItems: 'center',
    gap: system.space.x6,
  }),
};

const graphicExample: CanvasGraphic = {
  name: 'badgeAchievement',
  type: CanvasIconTypes.Graphic,
  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="wd-graphic wd-graphic-badge-achievement" focusable="false" role="presentation" viewBox="0 0 50 50"><g fill="none" fill-rule="nonzero" class="wd-icon-container"><circle cx="25" cy="25" r="25" fill="#FFC943"/><path fill="#FF7A45" d="M17 12h23l-4.373 7.5L40 27H17z"/><path fill="#656464" d="M15 12h2v31h-2z"/><circle cx="16" cy="11.5" r="1.5" fill="#656464"/></g></svg>',
  filename: 'wd-graphic-badge-achievement.svg',
  category: '',
  tags: [],
};

export const Images = () => {
  return (
    <Flex cs={styleOverrides.parentContainer}>
      <Graphic src={graphicExample} />
      <Graphic
        src={
          'https://wd5.myworkday.com/wday/asset/canvas-graphics-web/5.0.7/wd-graphic-learning-welcome-desktop.svg'
        }
        alt="foo"
      />
      <Image src="https://wd5.myworkday.com/wday/asset/canvas-graphics-web/5.0.7/wd-graphic-learning-welcome-desktop.svg" />
    </Flex>
  );
};
