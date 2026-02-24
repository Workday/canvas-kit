import * as React from 'react';

import {
  createContainer,
  createElemPropsHook,
  createModelHook,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {CSProps, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export interface MenuGroupHeaderProps extends CSProps, FlexProps {
  /**
   * The label text of the {@link MenuGroup Menu.Group}.
   */
  children?: React.ReactNode;
}

export interface MenuGroupProps extends CSProps, FlexProps {
  /**
   * The children of the `Menu.Group`. Should be {@link MenuGroupHeading Menu.Group.Heading} or
   * {@link MenuItem Menu.Item}. If the `title` prop is provided, the `Menu.Group.Heading` is not
   * needed.
   */
  children?: React.ReactNode;
  /**
   * Optional `Menu.Group` title. If a `title` is provided, a `Menu.Group.Heading` will be inserted
   * with this prop being the `children`. If you wish more control over the styling of the
   * `Menu.Group` heading, use the `<Menu.Group.Heading>` component directly and you'll have access
   * to styling:
   *
   * ```tsx
   * // default
   * <Menu.Group title="Group One">
   *   <Menu.Item>Item One</Menu.Item>
   * </Menu.Group>
   *
   * // direct access to the heading
   * <Menu.Group>
   *   <Menu.Group.Heading cs={...}>Group One</Menu.Group.Heading>
   *   <Menu.Item>Item One</Menu.Item>
   * </Menu.Group>
   * ```
   */
  title?: string;
}

const useMenuGroupModel = createModelHook({
  defaultConfig: {
    id: undefined as string | undefined,
  },
  requiredConfig: {},
})(config => {
  const state = {
    id: useUniqueId(config.id),
  };
  const events = {};

  return {
    state,
    events,
  };
});

export const menuGroupHeadingStencil = createStencil({
  base: {
    fontFamily: system.fontFamily.default,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    fontWeight: system.fontWeight.bold,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.md, system.space.x4),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.md, system.space.x4)}`,
  },
});

export const useMenuGroup = createElemPropsHook(useMenuGroupModel)(model => {
  return {
    'data-type': 'group',
    role: 'group',
    'aria-labelledby': model.state.id,
  };
});

export const useMenuGroupHeading = createElemPropsHook(useMenuGroupModel)(model => {
  return {
    id: model.state.id,
  };
});

const MenuGroupHeading = createSubcomponent('div')({
  modelHook: useMenuGroupModel,
  elemPropsHook: useMenuGroupHeading,
})(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip>
      <Element {...mergeStyles(elemProps, menuGroupHeadingStencil())}>{children}</Element>
    </OverflowTooltip>
  );
});

export const MenuGroup = createContainer('div')({
  displayName: 'Menu.Group',
  modelHook: useMenuGroupModel,
  elemPropsHook: useMenuGroup,
  subComponents: {
    Heading: MenuGroupHeading,
  },
})<MenuGroupProps>(({children, title, ...elemProps}, Element) => {
  return (
    <Element {...mergeStyles(elemProps)}>
      {title ? <MenuGroupHeading>{title}</MenuGroupHeading> : null}
      {children}
    </Element>
  );
});
