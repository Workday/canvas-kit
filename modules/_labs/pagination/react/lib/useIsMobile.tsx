import {useEffect, useState} from 'react';

const useIsMobile = (threshold: number) => {
  const [isMobile, setMobile] = useState(window.innerWidth < threshold);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setMobile(window.innerWidth < threshold);
    };
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
