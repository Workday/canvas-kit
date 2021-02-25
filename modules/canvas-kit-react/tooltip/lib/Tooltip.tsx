import * as React from 'react';
import innerText from 'react-innertext';

import {getTransformFromPlacement, Placement, Popper} from '@workday/canvas-kit-react-popup';
import {mergeCallback} from '@workday/canvas-kit-react-common';

import {TooltipContainer} from './TooltipContainer';
import {useTooltip} from './useTooltip';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * This should be a string in most cases. HTML is supported, but only text is understood
   * by assistive technology. This is true for both `label` and `describe` modes.
   */
  title: React.ReactNode;
  /**
   * The target (anchor element) for the Tooltip.
   *
   * **Note:** This **must** be an Element, StyledComponent or any
   * other component that forwards extra props to an Element. Tooltip works running
   * `React.cloneElement` on the children and adds extra properties like aria attributes and event
   * handlers. This is currently a limitation of the Tooltip component. Functionality will not work
   * if this condition isn't met
   */
  children: React.ReactElement<any>;
  /**
   * Sets the placement preference used by PopperJS.
   * @default 'top'
   */
  placement?: Placement;
  /**
   * Determines the tooltip type for accessibility.
   * * `label`: Sets the accessible name for the wrapped element. Use for icons or if tooltip
   * `title` prop is the same as the text content of the wrapped element. E.g. IconButtons or
   * Ellipsis tooltips.
   * * `describe`: Sets `aria-describedby` of the wrapped element. Use if the tooltip has
   * additional information about the target.
   *
   * **Note**: Assistive technology may ignore `describe` techniques based on verbosity settings.
   * Consider an alternate way to inform a user of additional important information.
   * @default 'label'
   */
  type?: 'label' | 'describe';
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

export const Tooltip = ({
  type = 'label',
  placement = 'top',
  title,
  children,
  ...elemProps
}: TooltipProps) => {
  const titleText = innerText(title);
  const {targetProps, popperProps, tooltipProps} = useTooltip({type, titleText});

  return (
    <React.Fragment>
      {React.cloneElement(children, {
        ...targetProps,
        ...mergeCallbacks(children.props, targetProps),
      })}
      <Popper placement={placement} {...popperProps}>
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
};
