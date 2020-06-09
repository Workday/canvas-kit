import {TransformOrigin} from '@workday/canvas-kit-react-common';
import {Placement} from '@popperjs/core';

export const getTransformFromPlacement = (placement: Placement): TransformOrigin => {
  const [first, second] = placement.split('-');

  const vertical =
    first === 'top'
      ? 'bottom'
      : first === 'bottom'
      ? 'top'
      : second === 'end'
      ? 'top'
      : second === 'start'
      ? 'bottom'
      : 'center';

  const horizontal =
    first === 'left'
      ? 'right'
      : first === 'right'
      ? 'left'
      : second === 'end'
      ? 'left'
      : second === 'start'
      ? 'right'
      : 'center';

  return {
    vertical,
    horizontal,
  };
};
