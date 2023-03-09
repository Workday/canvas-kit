import * as React from 'react';

import {getTransformFromPlacement, Placement, Popper} from '@workday/canvas-kit-react/popup';
import {mergeCallback} from '@workday/canvas-kit-react/common';

import {TooltipContainer, useTooltip} from '@workday/canvas-kit-react/tooltip';

const isOverflowed = (element: Element) => {
  return (element.textContent || '').includes('more');
};

export interface MoreTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The target (anchor element) for the Tooltip.
   *
   * **Note:** This **must** be a single Element, StyledComponent, or any other component that
   * forwards extra props to an Element. Tooltip works running `React.cloneElement` on the children
   * and adds extra properties like aria attributes and event handlers. This is currently a
   * limitation of the Tooltip component. Functionality will not work if this condition isn't met.
   */
  children: React.ReactElement;
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

function getTooltipContents(title: unknown) {
  if (title instanceof Array) {
    if (title.length && title[0].value) {
      return title.map(v => v.value).join(', ');
    }
  }
  return '';
}

export const MoreTooltip = ({
  placement = 'top',
  children,
  title,
  ...elemProps
}: MoreTooltipProps) => {
  const [titleText, setTitleText] = React.useState('');
  const {targetProps, popperProps, tooltipProps} = useTooltip({type: 'describe'});

  const onMouseEnter = (event: React.MouseEvent) => {
    const target = event.currentTarget;
    setTitleText(getTooltipContents(title));
    if (isOverflowed(target)) {
      targetProps.onMouseEnter(event as React.MouseEvent);
    }
  };
  const onFocus = (event: React.FocusEvent) => {
    const target = event.currentTarget;
    setTitleText(getTooltipContents(title));
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
