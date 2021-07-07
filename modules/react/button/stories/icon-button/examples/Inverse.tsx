/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {space, colors, borderRadius} from '@workday/canvas-kit-react/tokens';
import {IconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

const blueBackground = {
  backgroundColor: colors.blueberry400,
  borderRadius: borderRadius.m,
  padding: space.xxs,
  display: 'inline-block',
};

export const Inverse = () => (
  <div css={blueBackground}>
    <IconButton icon={activityStreamIcon} aria-label="Activity Stream" variant="inverse" />
  </div>
);
