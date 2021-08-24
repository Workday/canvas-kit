import * as React from 'react';
import {ContentDirection} from '@workday/canvas-kit-react/common';

export function useDirection(initialDirection = ContentDirection.LTR) {
  const [direction, setDirection] = React.useState(initialDirection);

  return {
    direction,
    toggleDirection() {
      if (direction === ContentDirection.LTR) {
        setDirection(ContentDirection.RTL);
      } else {
        setDirection(ContentDirection.LTR);
      }
    },
    setLTR() {
      setDirection(ContentDirection.LTR);
    },
    setRTL() {
      setDirection(ContentDirection.RTL);
    },
  };
}
