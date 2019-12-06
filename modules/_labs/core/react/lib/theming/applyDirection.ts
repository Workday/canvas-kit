import * as React from 'react';
import {ContentDirection} from './types';

/**
 * Recursively set direction on all child components
 */
function recursiveMap(
  direction: ContentDirection | undefined,
  children: React.ReactNode
): React.ReactElement<any> | React.ReactNode {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      return React.cloneElement(child, {
        children: applyDirection(direction, child.props.children),
        direction: direction,
      });
    }

    return React.cloneElement(child as React.ReactElement, {
      direction: direction,
    });
  });
}

/**
 * This is used to apply `dir={direction}` to the top level element
 */
function applyDirection(
  direction: ContentDirection | undefined,
  child: React.ReactNode
): React.ReactElement<any> | React.ReactNode {
  if (!direction || !React.isValidElement(child)) {
    return child;
  }

  return React.cloneElement(child, {
    children: recursiveMap(direction, child.props.children),
    direction: direction,
    dir: direction,
  });
}

export default applyDirection;
