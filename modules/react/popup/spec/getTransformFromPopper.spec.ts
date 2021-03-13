import {getTransformFromPlacement} from '../lib/getTransformFromPlacement';
import each from 'lodash/each';
import {Placement} from '@popperjs/core';

describe('getTransformFromPlacement', () => {
  const io = {
    bottom: {
      vertical: 'top',
      horizontal: 'center',
    },
    'bottom-end': {
      vertical: 'top',
      horizontal: 'left',
    },
    'bottom-start': {
      vertical: 'top',
      horizontal: 'right',
    },
    left: {
      vertical: 'center',
      horizontal: 'right',
    },
    'left-end': {
      vertical: 'top',
      horizontal: 'right',
    },
    'left-start': {
      vertical: 'bottom',
      horizontal: 'right',
    },
    right: {
      vertical: 'center',
      horizontal: 'left',
    },
    'right-end': {
      vertical: 'top',
      horizontal: 'left',
    },
    'right-start': {
      vertical: 'bottom',
      horizontal: 'left',
    },
    top: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    'top-end': {
      vertical: 'bottom',
      horizontal: 'left',
    },
    'top-start': {
      vertical: 'bottom',
      horizontal: 'right',
    },
  } as const;

  each(io, (expected, placement) => {
    it(`given a placement of '${placement}' should return vertical of '${expected.vertical}' and horizontal of '${expected.horizontal}'`, () => {
      expect(getTransformFromPlacement(placement as Placement)).toEqual(expected);
    });
  });
});
