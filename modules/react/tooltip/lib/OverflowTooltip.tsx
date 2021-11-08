import * as React from 'react';

import {getTransformFromPlacement, Placement, Popper} from '@workday/canvas-kit-react/popup';
import {mergeCallback} from '@workday/canvas-kit-react/common';

import {TooltipContainer} from './TooltipContainer';
import {useTooltip} from './useTooltip';

/**
 * Look for an element within the tree for an overflow element (auto, scroll, clip, or hidden).
 * This could be the passed element, or a descendant. If no element is found, `null` is returned.
 */
export const findOverflowElement = (element: Element): Element | null => {
  const style = getComputedStyle(element);
  if (
    style.overflow === 'auto' ||
    style.overflow === 'scroll' ||
    style.overflow === 'clip' ||
    style.overflow === 'hidden'
  ) {
    return element;
  } else if (element.children) {
    // `children` is not defined for SVGElement in IE11
    for (let i = 0; i < element.children.length; i++) {
      const overflowElement = findOverflowElement(element.children[i]);
      if (overflowElement) {
        return overflowElement;
      }
    }
    return null;
  }
  return null;
};

/**
 * Look for an element within the tree for a `text-overflow` CSS property of `ellipsis`.
 * This could be the passed element, or a descendant. If no element is found, `null` is returned.
 */
export const findEllipsisElement = (element: Element): Element | null => {
  const style = getComputedStyle(element);
  if (style.textOverflow === 'ellipsis' || Number(style.webkitLineClamp) > 0) {
    return element;
  } else if (element.children) {
    // `children` is not defined for SVGElement in IE11
    for (let i = 0; i < element.children.length; i++) {
      const overflowElement = findEllipsisElement(element.children[i]);
      if (overflowElement) {
        return overflowElement;
      }
    }
    return null;
  }
  return null;
};

const isOverflowed = (element: Element) => {
  const overflowElement = findEllipsisElement(element) || findOverflowElement(element);

  if (overflowElement) {
    return (
      overflowElement.scrollWidth > overflowElement.clientWidth ||
      overflowElement.scrollHeight > overflowElement.clientHeight
    );
  }
  return false;
};

export interface OverflowTooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
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

export const OverflowTooltip = ({
  placement = 'top',
  children,
  ...elemProps
}: OverflowTooltipProps) => {
  const [titleText, setTitleText] = React.useState('');
  const {targetProps, popperProps, tooltipProps} = useTooltip({type: 'muted'});

  const onMouseEnter = (event: React.MouseEvent) => {
    const target = event.currentTarget;
    setTitleText(target instanceof HTMLElement ? target.innerText : '');
    if (isOverflowed(target)) {
      targetProps.onMouseEnter(event as React.MouseEvent);
    }
  };
  const onFocus = (event: React.FocusEvent) => {
    const target = event.currentTarget;
    setTitleText(target instanceof HTMLElement ? target.innerText : '');
    if (isOverflowed(target)) {
      targetProps.onFocus(event as React.FocusEvent);
    }
  };

  return (
    <React.Fragment>
      {React.cloneElement(children, {
        ...targetProps,
        onMouseEnter,
        onFocus,
        'aria-label': undefined, // we don't need a label, the accessible name will be the content
        ...mergeCallbacks({...targetProps, onMouseEnter, onFocus}, children.props),
      })}
      <Popper placement={placement} {...popperProps}>
        {({placement}) => {
          const transformOrigin = getTransformFromPlacement(placement);
          return (
            <TooltipContainer transformOrigin={transformOrigin} {...tooltipProps} {...elemProps}>
              {titleText}
            </TooltipContainer>
          );
        }}
      </Popper>
    </React.Fragment>
  );
};
