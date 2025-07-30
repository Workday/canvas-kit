import {createComponent} from '@workday/canvas-kit-react/common';

import React, {useState} from 'react';

import {handleCsProp, cssVar, createStencil, CSProps} from '@workday/canvas-kit-styling';

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, CSProps {
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'extraExtraLarge';
}

export const avatarImageStencil = createStencil({
  vars: {
    size: '',
  },
  base: ({size}) => ({
    height: cssVar(size, '100%'),
    width: cssVar(size, '100%'),
    objectFit: 'cover',
  }),
});

export const AvatarImage = createComponent('img')({
  displayName: 'AvatarImage',
  Component: ({src, size, ...elemProps}: AvatarImageProps, ref, Element) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const loadImage = () => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    };
    React.useLayoutEffect(() => {
      setImageLoaded(false);
    }, [src]);
    return (
      <Element
        {...handleCsProp(elemProps, avatarImageStencil({size}))}
        onLoad={loadImage}
        src={src}
      />
    );
  },
});
