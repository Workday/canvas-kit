import React, {useEffect, useState} from 'react';

const useIsMobile = (container?: React.RefObject<HTMLElement>) => {
  const [mobile, setMobile] = useState(false);

  const widthIsMobile = () =>
    container && container.current && container.current.clientWidth
      ? container.current.clientWidth
      : window.innerWidth;

  useEffect(() => {
    setMobile(widthIsMobile() < 500);

    const handleWindowSizeChange = () => {
      setMobile(widthIsMobile() < 500);
    };
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, [container && container.current]);

  return mobile;
};

export default useIsMobile;
