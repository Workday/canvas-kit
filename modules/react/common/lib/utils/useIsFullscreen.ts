import React from 'react';
import screenfull from 'screenfull';

export const useIsFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const handler = React.useCallback(() => {
    setIsFullscreen(screenfull.isFullscreen);
  }, []);

  React.useEffect(() => {
    screenfull.on('change', handler);

    return () => {
      screenfull.off('change', handler);
    };
  }, [handler]);

  return isFullscreen;
};
