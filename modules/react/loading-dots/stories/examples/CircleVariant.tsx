import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const styleOverrides = {
  parentContainer: createStyles({
    display: 'flex',
    gap: system.space.x4,
  }),
  loadingStyles: createStyles({
    borderRadius: system.shape.round,
    backgroundColor: system.color.bg.overlay,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }),
};

export const CircleVariant = () => {
  return (
    <div className={styleOverrides.parentContainer}>
      <LoadingDots cs={styleOverrides.loadingStyles} backgroundColor={system.color.icon.inverse} />
    </div>
  );
};
