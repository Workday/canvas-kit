import React from 'react';
import {useMount} from './useMount';

const getFromWindow = <T extends any>(property: string, defaultValue: T): T => {
  if (typeof window !== undefined) {
    return (window as any)[property] ?? defaultValue;
  }
  return defaultValue;
};

export const useWindowSize = (): {width: number; height: number} => {
  const [width, setWidth] = React.useState(getFromWindow('innerWidth', 0));
  const [height, setHeight] = React.useState(getFromWindow('innerHeight', 0));

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useMount(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return {width, height};
};
