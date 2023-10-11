import {expectTypeOf} from 'expect-type';
import {brand, base} from '@workday/canvas-tokens-web';

import {focusRing} from '../lib/styles';

describe('focusRing', () => {
  it('should return the statically extracted types when using default values', () => {
    const actual = focusRing();
    type Expected = {
      boxShadow: `0 0 0 2px var(${typeof base.frenchVanilla100}), 0 0 0 4px var(${typeof brand.common.focusOutline})`;
    };

    expectTypeOf(actual).toEqualTypeOf<Expected>();
  });

  it('should return the statically extracted types when passing variables', () => {
    const actual = focusRing({
      width: 1,
      separation: 1,
      innerColor: 'red',
      outerColor: 'blue',
    });
    type Expected = {
      boxShadow: `0 0 0 1px red, 0 0 0 2px blue`;
    };

    expectTypeOf(actual).toEqualTypeOf<Expected>();
  });
});
