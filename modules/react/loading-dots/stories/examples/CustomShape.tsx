import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
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
    backgroundColor: system.color.bg.contrast.strong,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});

export const CustomShape = () => {
  return (
    <div className={styleOverrides.parentContainer}>
      <LoadingDots variant="inverse" cs={loadingStencil()} />
    </div>
  );
};
