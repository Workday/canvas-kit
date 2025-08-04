import {createComponent} from '@workday/canvas-kit-react/common';

import React, {useState} from 'react';

import {handleCsProp, createStencil, CSProps} from '@workday/canvas-kit-styling';

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, CSProps {}

export const avatarImageStencil = createStencil({
  base: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});

export const AvatarImage = createComponent('img')({
  displayName: 'AvatarImage',
  Component: ({src, ...elemProps}: AvatarImageProps, ref, Element) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const loadImage = () => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    };
    React.useLayoutEffect(() => {
      setImageLoaded(false);
    }, [src]);
    console.log('imageLoaded', imageLoaded);
    return (
      <Element onLoad={loadImage} src={src} {...handleCsProp(elemProps, avatarImageStencil())} />
    );
  },
});
