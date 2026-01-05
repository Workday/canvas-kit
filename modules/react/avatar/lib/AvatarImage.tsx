import {createComponent} from '@workday/canvas-kit-react/common';

import {handleCsProp, createStencil, CSProps} from '@workday/canvas-kit-styling';

export interface AvatarImageProps extends CSProps {}

export const avatarImageStencil = createStencil({
  base: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});

export const AvatarImage = createComponent('img')({
  displayName: 'AvatarImage',
  Component: ({...elemProps}: AvatarImageProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, avatarImageStencil())} />;
  },
});
