import React from 'react';

import {createComponent, styled, useDefaultModel} from '@workday/canvas-kit-react/common';

import {usePillModel, PillModel, PillModelConfig} from './usePillModel';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {Box} from '@workday/canvas-kit-react/layout';
import {PillAvatar} from './Pill.Avatar';
import {PillContent} from './Pill.Content';
import {PillCount} from './Pill.Count';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';

export const PillModelContext = React.createContext<PillModel>({} as any);

export interface PillProps extends PillModelConfig {
  model?: PillModel;
  children: React.ReactNode;
}

const StyledPillContainer = styled(Box)({
  border: `1px solid ${colors.licorice200}`,
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: borderRadius.m,
  ...type.levels.body.small,
  fontWeight: 500,
});

export const Pill = createComponent('span')({
  displayName: 'Pill',
  Component: ({children, ...elemProps}: PillProps, ref, Element) => {
    return (
      <OverflowTooltip>
        <StyledPillContainer height={space.m}>{children}</StyledPillContainer>
      </OverflowTooltip>
    );
  },
  subComponents: {
    Avatar: PillAvatar,
    Content: PillContent,
    Count: PillCount,
  },
});
