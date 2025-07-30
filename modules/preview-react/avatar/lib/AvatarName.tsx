import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, handleCsProp, createStencil} from '@workday/canvas-kit-styling';
import {getInitialsFromName} from './getInitialsFromName';

export interface AvatarNameProps extends CSProps {
  name: string;
}

export const avatarNameStencil = createStencil({
  base: {
    textTransform: 'uppercase',
  },
});

export const AvatarName = createComponent('span')({
  displayName: 'AvatarName',
  Component: ({name, ...elemProps}: AvatarNameProps, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, avatarNameStencil())}>
        {getInitialsFromName(name)}
      </Element>
    );
  },
});
