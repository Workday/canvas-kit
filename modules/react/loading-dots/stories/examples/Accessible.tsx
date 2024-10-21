import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {system} from '@workday/canvas-tokens-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';

const styleOverrides = {
  parentContainer: createStyles({
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

export const Accessible = () => {
  const [loadingState, setLoadingState] = React.useState('idle');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingState === 'loading') {
        setLoadingState('success');
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [loadingState]);

  const handleLoad = () => {
    setLoadingState('loading');
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <SecondaryButton onClick={handleLoad}>Start</SecondaryButton>
      <AriaLiveRegion aria-label="Loading">
        {loadingState === 'loading' && (
          <LoadingDots
            cs={styleOverrides.loadingStyles}
            backgroundColor={system.color.icon.inverse}
            role="img"
            aria-label="Please wait..."
          />
        )}
        {loadingState === 'success' && <AccessibleHide>Complete.</AccessibleHide>}
      </AriaLiveRegion>
    </Flex>
  );
};
