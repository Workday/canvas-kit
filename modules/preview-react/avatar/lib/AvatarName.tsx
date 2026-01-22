import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, handleCsProp, createStencil} from '@workday/canvas-kit-styling';
import {getInitialsFromName} from './getInitialsFromName';

export interface AvatarNameProps extends CSProps {
  /**
   * The alt text of the Avatar image. This prop is also used for the initials. The first letter of the first name and the first letter of the second name are chosen for the initials.
   */
  name: string;
  /**
   * If you want full control over the initials, use `preferredInitials` instead.
   */
  preferredInitials?: string;
}

export const avatarNameStencil = createStencil({
  base: {
    textTransform: 'uppercase',
    cursor: 'default',
  },
});

export const AvatarName = createComponent('span')({
  displayName: 'AvatarName',
  Component: ({name, preferredInitials, ...elemProps}: AvatarNameProps, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, avatarNameStencil())}>
        {preferredInitials || getInitialsFromName(name)}
      </Element>
    );
  },
});
