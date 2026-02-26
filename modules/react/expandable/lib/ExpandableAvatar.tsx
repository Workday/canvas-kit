import {Avatar, AvatarProps, avatarStencil} from '@workday/canvas-kit-react/avatar';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

export interface ExpandableAvatarProps extends AvatarProps {}

export const expandableAvatarStencil = createStencil({
  extends: avatarStencil,
  base: {
    flexShrink: 0,
  },
});

// When the component is created, it needs to be a button element to match AvatarProps.
// Once Avatar becomes a `createComponent` we can default the element type to a `div`
// and the types should be properly extracted
// Setting isDecorative prop to true by default since avatars in expandable headers are typically decorative
export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: (
    {name = '', isDecorative = true, ...elemProps}: ExpandableAvatarProps,
    ref,
    Element
  ) => {
    return (
      <Avatar
        as={Element}
        name={name}
        isDecorative={isDecorative}
        ref={ref}
        size="extraSmall"
        {...mergeStyles(elemProps, expandableAvatarStencil())}
      />
    );
  },
});
