import {createComponent} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps, avatarStencil} from '@workday/canvas-kit-react/avatar';
import {system} from '@workday/canvas-tokens-web';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface ExpandableAvatarProps extends AvatarProps {}

export const expandableAvatarStencil = createStencil({
  extends: avatarStencil,
  base: {
    marginInlineEnd: system.space.x2,
    flexShrink: 0,
  },
});

// When the component is created, it needs to be a button element to match AvatarProps.
// Once Avatar becomes a `createComponent` we can default the element type to a `div`
// and the types should be properly extracted
// Setting altText prop to a default empty string for decorative purposes
export const ExpandableAvatar = createComponent('div')({
  displayName: 'Expandable.Avatar',
  Component: ({altText = '', ...elemProps}: ExpandableAvatarProps, ref, Element) => {
    return (
      <Avatar
        as={Element}
        altText={altText}
        ref={ref}
        size="medium"
        {...mergeStyles(elemProps, expandableAvatarStencil())}
      />
    );
  },
});
