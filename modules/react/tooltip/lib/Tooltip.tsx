import * as React from 'react';
import innerText from 'react-innertext';

import {
  getTransformFromPlacement,
  Placement,
  Popper,
  defaultFallbackPlacements,
} from '@workday/canvas-kit-react/popup';
import {createComponent, mergeCallback} from '@workday/canvas-kit-react/common';

import {TooltipContainer} from './TooltipContainer';
import {useTooltip} from './useTooltip';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * This should be a string in most cases. HTML is supported, but only text is understood
   * by assistive technology. This is true for both `label` and `describe` modes.
   *
   * **Note:** If you use `description` type and want to pass `jsx`, it **must* be inline and **not** a component to ensure the inner text is properly translated.
   *
   * ```jsx
   * // The text will be understood as: You must accept terms and conditions
   * <Tooltip type="description" title={<span>You<i>must</i> accept terms and conditions</span>}/>
   *
   * // This will render a string including the html and will not be properly understood by voice over.
   * const MyComponent = () => <span>You<i>must</i> accept terms and conditions</span>
   * <Tooltip type="description" title={MyComponent/>
   * ```
   */
  title: React.ReactNode;
  /**
   * The target (anchor element) for the Tooltip.
   *
   * **Note:** This **must** be a single Element, StyledComponent, or any other component that
   * forwards extra props to an Element. Tooltip works running `React.cloneElement` on the children
   * and adds extra properties like aria attributes and event handlers. This is currently a
   * limitation of the Tooltip component. Functionality will not work if this condition isn't met.
   */
  children: React.ReactElement<any>;
  /**
   * Sets the placement preference used by PopperJS.
   * @default 'top'
   */
  placement?: Placement;
  /**
   * Define fallback placements by providing a list of {@link Placement} in array (in order of preference).
   * The default preference is following the order of `top`, `right`, `bottom`, and `left`. Once the initial
   * and opposite placements are not available, the fallback placements will be in use. Use an empty array to
   * disable the fallback placements.
   */
  fallbackPlacements?: Placement[];
  /**
   * Determines the tooltip type for accessibility.
   *
   * - `label`: Sets the accessible name for the wrapped element. Use for icons or if tooltip
   *   `title` prop is the same as the text content of the wrapped element. E.g. TertiaryButtons that render an icon or
   *   Ellipsis tooltips.
   * - **Deprecated: `describe` is deprecated, please use `description`**.`describe`: Sets `aria-describedby` of the wrapped element. Use if the tooltip has additional
   *   information about the target.
   * - `muted`: No effort is made to make the tooltip accessible to screen readers. Use if the
   *   tooltip contents are not useful to a screen reader or if you have handled accessibility of
   *   the tooltip yourself.
   *
   * **Note**: Assistive technology may ignore `describe` techniques based on verbosity settings.
   * Consider an alternate way to inform a user of additional important information.
   * @default 'label'
   */
  type?: 'label' | 'describe' | 'muted' | 'description';
  /**
   * Amount of time (in ms) to delay before showing the tooltip
   */
  showDelay?: number;
  /**
   * Amount of time (in ms) to delay before hiding the tooltip
   */
  hideDelay?: number;
}

function mergeCallbacks<T extends {[key: string]: any}>(
  elemProps: {[key: string]: any},
  componentProps: T,
  keys: (keyof T)[] = Object.keys(componentProps)
) {
  return (keys as string[]).reduce((mergedProps, key) => {
    if (typeof elemProps[key] === 'function') {
      mergedProps[key] = mergeCallback(componentProps[key], elemProps[key]);
    } else {
      mergedProps[key] = componentProps[key];
    }
    return mergedProps;
  }, {} as {[key: string]: any});
}

export const Tooltip = createComponent('div')({
  displayName: 'Tooltip',
  Component({
    type = 'label',
    placement = 'top',
    title,
    children,
    showDelay = 300,
    hideDelay = 100,
    fallbackPlacements = defaultFallbackPlacements,
    ...elemProps
  }: TooltipProps) {
    const titleText = innerText(title);
    const {targetProps, popperProps, tooltipProps} = useTooltip({
      type,
      titleText,
      showDelay,
      hideDelay,
    });

    return (
      <React.Fragment>
        {React.cloneElement(children, {
          ...targetProps,
          ...mergeCallbacks(children.props, targetProps),
          ...(/^(muted|describe)$/.test(type) && children.props['aria-label']
            ? {'aria-label': children.props['aria-label']}
            : {}),
        })}
        <Popper placement={placement} fallbackPlacements={fallbackPlacements} {...popperProps}>
          {({placement}) => {
            const transformOrigin = getTransformFromPlacement(placement);
            return (
              <TooltipContainer transformOrigin={transformOrigin} {...elemProps} {...tooltipProps}>
                {title}
              </TooltipContainer>
            );
          }}
        </Popper>
      </React.Fragment>
    );
  },
});
