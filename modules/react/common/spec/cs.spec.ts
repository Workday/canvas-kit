import {setUniqueSeed, resetUniqueIdCount} from '@workday/canvas-kit-react/common';
import {cs, cssVar, createVars, createModifiers, csToProps, CS, fallback} from '../lib/cs';
import {expectTypeOf} from 'expect-type';
import {Properties} from 'csstype';

describe.only('cs', () => {
  beforeEach(() => {
    setUniqueSeed('a');
    resetUniqueIdCount();
  });

  describe('cs', () => {
    it('should accept an object of CSS Properties', () => {
      type Input = Exclude<Parameters<typeof cs>[0], string>;
      type PositionProperty = Input['position'];
      expectTypeOf<PositionProperty>().toMatchTypeOf<Properties['position']>();
    });
  });

  describe('cssVar', () => {
    it('should return a css var wrapper around the input', () => {
      const input = '--my-var';
      const expected = cssVar(input);

      expect(expected).toEqual('var(--my-var)');
    });
  });

  describe('fallback', () => {
    it('should return a css var wrapper that includes a fallback', () => {
      const input = '--my-var';
      const expected = fallback(input, 'red');

      expect(expected).toEqual('var(--my-var, red)');
    });
  });

  describe('createVars', () => {
    it('should create an object with a key of the "color"', () => {
      const myVars = createVars('color');

      expect(myVars).toHaveProperty('color', '--a0-color');
    });

    it('should return a type object with keys matching each input', () => {
      const myVars = createVars('color', 'fill');

      expectTypeOf(myVars).toMatchTypeOf<{color: string; fill: string}>();
    });

    it('should return a function type that takes an object of each config and string value', () => {
      const myVars = createVars('color', 'fill');

      type Input = Parameters<typeof myVars>[0];
      expectTypeOf<Input>().toMatchTypeOf<{color?: string; fill?: string}>();
    });

    it('should return a function that takes in an object with the values and return a style object', () => {
      const myVars = createVars('color');

      expect(myVars({color: 'red'})).toHaveProperty('--a0-color', 'red');
    });
  });

  describe('createModifiers', () => {
    const myModifiers = createModifiers({
      size: {
        large: cs({fontSize: '1.5rem'}),
        small: cs({fontSize: '0.8rem'}),
      },
    });

    it('should return an object with class names for each modifier', () => {
      expect(myModifiers).toHaveProperty('size.large', expect.stringContaining('css'));
      expect(myModifiers).toHaveProperty('size.small', expect.stringContaining('css'));
    });

    it('should return a function that in an object of keys with limited values', () => {
      expect(myModifiers({size: 'large'})).toEqual(myModifiers.size.large);
    });

    it('should return a function with a type that expects optional parameters matching the config object', () => {
      type Input = Parameters<typeof myModifiers>[0];
      expectTypeOf<Input>().toMatchTypeOf<{size?: 'large' | 'small'}>();
    });

    it('should return an object with a type that matches the input object type', () => {
      expectTypeOf(myModifiers.size).toMatchTypeOf<{large: CS; small: CS}>();
    });
  });

  describe('csToProps', () => {
    it('should return a className', () => {
      const input = 'foo';

      expect(csToProps(input)).toHaveProperty('className', 'foo');
    });

    it('should return the className of a modifier', () => {
      const myModifiers = createModifiers({
        size: {
          large: 'foo',
          small: 'bar',
        },
      });
      const input = myModifiers({size: 'small'});

      expect(csToProps(input)).toHaveProperty('className', 'bar');
    });

    it('should return the style that sets variables', () => {
      const myVariables = createVars('color');
      const input = myVariables({color: 'red'});

      expect(csToProps(input)).toHaveProperty('style', {'--a0-color': 'red'});
    });

    it('should merge multiple classNames together', () => {
      const input = ['foo', 'bar'];

      expect(csToProps(input)).toHaveProperty('className', 'foo bar');
    });

    it('should handle undefined parameters', () => {
      const input = ['foo', undefined];

      expect(csToProps(input)).toHaveProperty('className', 'foo');
    });

    it('should handle nested csToProps for composition', () => {
      const myVariables = createVars('color');
      const innerVariables = createVars('fill');
      const actual = csToProps([
        'foo',
        myVariables({color: 'red'}),
        csToProps(['bar', innerVariables({fill: 'blue'})]),
      ]);

      expect(actual).toHaveProperty('className', 'foo bar');
      expect(actual).toHaveProperty('style', {'--a0-color': 'red', '--a1-fill': 'blue'});
    });
  });
});
