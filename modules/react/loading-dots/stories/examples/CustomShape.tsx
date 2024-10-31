import React from 'react';
import {LoadingDots, loadingDotsStencil} from '@workday/canvas-kit-react/loading-dots';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, createStencil} from '@workday/canvas-kit-styling';

const styleOverrides = {
  parentContainer: createStyles({
    display: 'flex',
    gap: system.space.x4,
  }),
};

const loadingStencil = createStencil({
  base: {
    borderRadius: system.shape.round,
    backgroundColor: system.color.bg.overlay,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    [loadingDotsStencil.vars.loadingDotColor]: system.color.icon.inverse,
  },
});

export const CustomShape = () => {
  return (
    <div className={styleOverrides.parentContainer}>
      <LoadingDots cs={loadingStencil()} />
    </div>
  );
};
