import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {canvas} from '@workday/canvas-kit-react/tokens';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';

export const Accessible = () => {
  const [loadingState, setLoadingState] = React.useState('idle');
  const loadingStyles = createStyles({
    backgroundColor: canvas.colors.licorice300,
    padding: '1rem',
  });

  React.useEffect(() => {
    if (loadingState === 'loading') {
      setTimeout(() => {
        setLoadingState('success');
      }, 4000);
    }
  }, [loadingState]);

  const handleLoad = () => {
    setLoadingState('loading');
  };

  return (
    <Flex gap={canvas.space.s}>
      <SecondaryButton onClick={handleLoad}>Start</SecondaryButton>
      <AriaLiveRegion aria-label="Loading">
        {loadingState === 'loading' && (
          <LoadingDots className={loadingStyles} role="img" aria-label="Please wait..." />
        )}
        {loadingState === 'success' && <AccessibleHide>Complete.</AccessibleHide>}
      </AriaLiveRegion>
    </Flex>
  );
};
