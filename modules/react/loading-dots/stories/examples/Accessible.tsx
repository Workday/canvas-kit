import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {base, system} from '@workday/canvas-tokens-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';

const loadingStyles = createStyles({
  backgroundColor: base.licorice300,
  padding: system.space.x3,
});

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
    <Flex gap={cssVar(system.space.x4)}>
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
