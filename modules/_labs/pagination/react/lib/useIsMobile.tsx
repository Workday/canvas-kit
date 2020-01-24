import {useEffect, useState} from 'react';

const useIsMobile = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setMobile(window.innerWidth < 500);
    };
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return mobile;
};

export default useIsMobile;
