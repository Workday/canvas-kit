import React from 'react';

/* eslint-disable @emotion/no-vanilla */
import {expectTypeOf} from 'expect-type';
import {Properties} from 'csstype';
import {SerializedStyles, ComponentSelector} from '@emotion/serialize';
import {css} from '@emotion/css';
import {jsx, CacheProvider} from '@emotion/react';
import styled from '@emotion/styled';
import {render as rtlRender, screen} from '@testing-library/react';

import {
  createStyles,
  cssVar,
  createVars,
  createModifiers,
  csToProps,
  CS,
  createCompoundModifiers,
  CompoundModifier,
  createStencil,
  handleCsProp,
  keyframes,
  CSProps,
  getCache,
} from '../lib/cs';

const cache = getCache();
// We need to force Emotion's cache wrapper to use the cache from `@emotion/css` for tests to pass
const CacheWrapper = props => <CacheProvider value={cache} {...props} />;
// @ts-ignore We want the types to be the same, but I don't care to fix the error
const render: typeof rtlRender = (ui, options) =>
  rtlRender(ui, {wrapper: CacheWrapper, ...options});

describe('cs', () => {
  describe('createStyles', () => {
    it('should accept an object of CSS Properties', () => {
      type Input = Exclude<
        Parameters<typeof createStyles>[0],
        string | number | boolean | SerializedStyles | undefined | null | ComponentSelector
      >;
      type PositionProperty = Input['position'];
      const temp: PositionProperty = 'absolute';
      createStyles({
        position: 'absolute',
      });
      expectTypeOf<PositionProperty>().toMatchTypeOf<
        (Properties['position'] | (string & {})) | (Properties['position'] | (string & {}))[]
      >();
    });

    it('should convert values that are CSS variables to CSS variable wrapping', () => {
      const styles = createStyles({
        color: '--my-var',
      });

      // find the rule we just created
      for (const sheet of document.styleSheets as StyleSheetList & Iterable<CSSStyleSheet>) {
        for (const rule of sheet.cssRules as CSSRuleList & Iterable<CSSRule>) {
          if (rule.cssText.includes(styles)) {
            expect(rule.cssText).toContain(`.${styles} {color: var(--my-var);}`);
          }
        }
      }
    });

    it('should always add new styles for every "createStyles" call to have style merging that is intuitive', () => {
      const styles1 = createStyles({
        color: 'red',
      });
      const styles2 = createStyles({
        color: 'blue',
      });
      const styles3 = createStyles({
        color: 'red',
      });

      for (const sheet of document.styleSheets as StyleSheetList & Iterable<CSSStyleSheet>) {
        for (const rule of sheet.cssRules as CSSRuleList & Iterable<CSSRule>) {
          if (rule.cssText.includes(styles3)) {
            expect(rule.cssText).toContain(`.${styles3} {color: red;}`);
          }
        }
      }

      const div = document.createElement('div');
      div.className = `${styles2} ${styles3}`;
      document.body.append(div);

      // Test jsdom resolution of style properties
      expect(getComputedStyle(div).color).toEqual('red');
    });

    it('should use the name if name is passed', () => {
      const styles = createStyles({name: 'foo', styles: 'color: red;'});

      expect(styles).toEqual('css-foo');

      for (const sheet of document.styleSheets as StyleSheetList & Iterable<CSSStyleSheet>) {
        for (const rule of sheet.cssRules as CSSRuleList & Iterable<CSSRule>) {
          if (rule.cssText.includes(styles)) {
            expect(rule.cssText).toContain(`.${styles} {color: red;}`);
          }
        }
      }
    });

    it('should return the same className that was provided to provide extending', () => {
      const styles = createStyles('my-class');

      expect(styles).toEqual('my-class');
    });
  });

  describe('cssVar', () => {
    it('should return a css var wrapper around the input', () => {
      const input = '--my-var';
      const expected = cssVar(input);

      expect(expected).toEqual('var(--my-var)');
      expectTypeOf(expected).toEqualTypeOf<`var(--my-var)`>();
    });

    it('should return a css var wrapper that includes a fallback', () => {
      const input = '--my-var';
      const expected = cssVar(input, 'red');

      expect(expected).toEqual('var(--my-var, red)');
      expectTypeOf(expected).toEqualTypeOf<`var(--my-var, red)`>();
    });

    it('should return a css var wrapper that includes a fallback without cssVar wrapping', () => {
      const expected = cssVar('--my-var', '--my-fallback-var');

      expect(expected).toEqual('var(--my-var, var(--my-fallback-var))');
      expectTypeOf(expected).toEqualTypeOf<`var(--my-var, var(--my-fallback-var))`>();
    });
  });

  describe('createVars', () => {
    it('should create an object with a key of the "color"', () => {
      const myVars = createVars('color');

      expect(myVars).toHaveProperty('color', expect.stringMatching(/--color-.+/));
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

      expect(myVars({color: 'red'})).toHaveProperty(myVars.color, 'red');
    });

    it('should return a function that takes in an object with the values and return a style object with wrapped css prop', () => {
      const myVars = createVars('color');
      expect(myVars({color: '--my-var'})).toHaveProperty(myVars.color, 'var(--my-var)');
    });

    it('should type optimized style functions correctly so they can be consumed by other repositories', () => {
      const vars = createVars({id: 'foo', args: ['one']});
      expectTypeOf(vars.one).toMatchTypeOf<'--one-foo'>();
    });

    it('should handle an object configuration', () => {
      const myVars = createVars({
        color: 'red',
      });

      expect(myVars).toHaveProperty('color');
      expect(myVars).toHaveProperty('$$defaults');

      expectTypeOf(myVars.color).toEqualTypeOf<`--${string}`>();
      expectTypeOf(myVars.$$defaults).toEqualTypeOf<Record<string, string>>();
    });

    it('should add a $$defaults object with keys matching the names created for each key', () => {
      const myVars = createVars({
        color: 'red',
      });

      expect(myVars.$$defaults).toHaveProperty(myVars.color, 'red');
    });

    it('should pass the optional ID to each variable name', () => {
      const myVars = createVars(
        {
          color: 'red' as 'red',
        },
        'foo'
      );

      expect(myVars.color).toEqual('--color-foo');

      expectTypeOf(myVars.color).toEqualTypeOf<'--color-foo'>();
    });

    it('should pass the optional ID to each default', () => {
      const myVars = createVars(
        {
          color: 'red' as 'red',
        },
        'foo'
      );

      expect(myVars.$$defaults).toHaveProperty('--color-foo', 'red');

      expectTypeOf(myVars.$$defaults).toEqualTypeOf<{
        '--color-foo': 'red';
      }>();
    });

    it('should handle nested variables', () => {
      const myVars = createVars({
        default: {
          color: 'blue',
        },
        hover: {
          color: 'red',
        },
      });

      expect(myVars).toHaveProperty('default');
      expect(myVars.default).toHaveProperty(
        'color',
        expect.stringMatching(/--default-color-[a-z0-9]+/)
      );
      expect(myVars).toHaveProperty('hover');
      expect(myVars.hover).toHaveProperty(
        'color',
        expect.stringMatching(/--hover-color-[a-z0-9]+/)
      );

      expectTypeOf(myVars).toHaveProperty('default');
      expectTypeOf(myVars.default).toEqualTypeOf<Record<'color', `--${string}`>>();
      expectTypeOf(myVars).toHaveProperty('hover');
      expectTypeOf(myVars.hover).toEqualTypeOf<Record<'color', `--${string}`>>();
    });

    it('should handle nested variables $$defaults', () => {
      const myVars = createVars({
        default: {
          color: 'blue',
          background: 'purple',
        },
        hover: {
          color: 'red',
        },
      });

      expect(myVars).toHaveProperty('$$defaults');
      expect(myVars.$$defaults).toHaveProperty(myVars.default.color, 'blue');
      expect(myVars.$$defaults).toHaveProperty(myVars.default.background, 'purple');
      expect(myVars.$$defaults).toHaveProperty(myVars.hover.color, 'red');

      expectTypeOf(myVars).toHaveProperty('$$defaults');
      expectTypeOf(myVars.$$defaults).toEqualTypeOf<Record<string, string>>();
    });

    it('should use the optional ID with nested variables', () => {
      const myVars = createVars(
        {
          default: {
            color: 'blue',
          },
          hover: {
            color: 'red',
          },
        },
        'foo'
      );
      // BigO2023
      expect(myVars).toHaveProperty('default');
      expect(myVars.default).toHaveProperty('color', expect.stringMatching('--default-color-foo'));
      expect(myVars).toHaveProperty('hover');
      expect(myVars.hover).toHaveProperty('color', expect.stringMatching('--hover-color-foo'));

      expectTypeOf(myVars).toHaveProperty('default');
      expectTypeOf(myVars.default).toEqualTypeOf<{color: '--default-color-foo'}>();
      expectTypeOf(myVars).toHaveProperty('hover');
      expectTypeOf(myVars.hover).toEqualTypeOf<{color: '--hover-color-foo'}>();
    });

    it('should use the optional ID with nested variables in $$defaults', () => {
      const myVars = createVars(
        {
          default: {
            color: 'blue' as 'blue',
            background: 'white' as 'white',
          },
          hover: {
            color: 'red' as 'red',
          },
        },
        'foo'
      );

      expect(myVars).toHaveProperty('$$defaults');
      expect(myVars.$$defaults).toHaveProperty('--default-color-foo', 'blue');
      expect(myVars.$$defaults).toHaveProperty('--default-background-foo', 'white');
      expect(myVars.$$defaults).toHaveProperty('--hover-color-foo', 'red');

      expectTypeOf(myVars).toHaveProperty('$$defaults');
      expectTypeOf(myVars.$$defaults).toEqualTypeOf<{
        '--default-color-foo': 'blue';
        '--default-background-foo': 'white';
        '--hover-color-foo': 'red';
      }>();
    });
  });

  describe('createModifiers', () => {
    // factory function to only run code inside a spec. This prevents a global leak of styles in other tests
    const myModifiersFactory = () =>
      createModifiers({
        size: {
          large: createStyles({fontSize: '1.5rem'}),
          small: createStyles({fontSize: '0.8rem'}),
        },
      });

    it('should return an object with class names for each modifier', () => {
      const myModifiers = myModifiersFactory();
      expect(myModifiers).toHaveProperty('size.large', expect.stringContaining('css'));
      expect(myModifiers).toHaveProperty('size.small', expect.stringContaining('css'));
    });

    it('should return a function that in an object of keys with limited values', () => {
      const myModifiers = myModifiersFactory();
      expect(myModifiers({size: 'large'})).toEqual(myModifiers.size.large);
    });

    it('should return a function with a type that expects optional parameters matching the config object', () => {
      const myModifiers = myModifiersFactory();
      type Input = Parameters<typeof myModifiers>[0];
      expectTypeOf<Input>().toMatchTypeOf<{size?: 'large' | 'small'}>();
    });

    it('should return an object with a type that matches the input object type', () => {
      const myModifiers = myModifiersFactory();
      expectTypeOf(myModifiers.size).toMatchTypeOf<{large: CS; small: CS}>();
    });

    describe('with a "_" modifier key', () => {
      const myModifiersFactory = () =>
        createModifiers({
          size: {
            large: createStyles({fontSize: '1.5rem'}),
            small: createStyles({fontSize: '0.8rem'}),
            _: createStyles({fontSize: 'var(--size)'}),
          },
        });

      it('should not return any classes when "size" is not provided', () => {
        const myModifiers = myModifiersFactory();

        expect(myModifiers({})).toEqual('');
      });

      it('should return the CSS class of the "_" key when no other modifier matches and a matching modifier key is provided', () => {
        const myModifiers = myModifiersFactory();

        expect(myModifiers({size: 'foo' as any})).toEqual(myModifiers.size._);
      });
    });
  });

  describe('createCompoundModifiers', () => {
    const modifierConfig = {
      size: {
        small: 'small',
        large: 'large',
      },
      position: {
        start: 'start',
        end: 'end',
      },
    } as const;
    const modifiers = createModifiers(modifierConfig);
    const compoundModifiers = createCompoundModifiers(modifiers, [
      {
        modifiers: {
          size: 'large',
          position: 'start',
        },
        styles: 'large-start',
      },
      {
        modifiers: {
          size: 'small',
          position: 'end',
        },
        styles: 'small-end',
      },
    ]);

    it('should return an empty string when no modifiers are passed', () => {
      expect(compoundModifiers({})).toEqual('');
    });

    it('should match size:large, position:start and return the correct class name', () => {
      expect(compoundModifiers({size: 'large', position: 'start'})).toEqual('large-start');
    });

    it('should match size:small, position:end and return the correct class name', () => {
      expect(compoundModifiers({size: 'small', position: 'end'})).toEqual('small-end');
    });

    it('should return an empty string when no modifier combination matches a compound modifier', () => {
      expect(compoundModifiers({size: 'large', position: 'end'})).toEqual('');
    });

    it('should type the compound config correctly', () => {
      type Expected = CompoundModifier<typeof modifierConfig>;
      type Actual = {
        modifiers: {
          size?: 'large' | 'small';
          position?: 'start' | 'end';
        };
      };
      expectTypeOf<Expected>().toMatchTypeOf<Actual>();
    });

    it('should have the correct type for the function parameters', () => {
      type Expected = Parameters<typeof compoundModifiers>[0];
      type Actual = {size?: 'large' | 'small'; position?: 'start' | 'end'};
      expectTypeOf<Expected>().toMatchTypeOf<Actual>();
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

      expect(csToProps(input)).toHaveProperty('style', {[myVariables.color]: 'red'});
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
      expect(actual).toHaveProperty('style', {
        [myVariables.color]: 'red',
        [innerVariables.fill]: 'blue',
      });
    });

    it('should handle statically embedded styles', () => {
      const baseClassName = createStyles({padding: 20});
      const inlineStyleOverride = css({padding: 10}); // hash should be the same
      const actual = csToProps([baseClassName, {padding: 10}]);

      expect(actual).not.toHaveProperty('style', {
        padding: 10,
      });
      expect(actual).toHaveProperty('className', expect.stringContaining(inlineStyleOverride));
    });
  });

  describe('createStencil', () => {
    it('should allow the creation of base styles', () => {
      const myStencil = createStencil({
        base: {
          padding: 10,
        },
      });

      render(<div data-testid="test" {...myStencil()} />);

      expect(screen.getByTestId('test')).toHaveStyle({padding: '10px'});
    });

    it('should set the `base` property with the className of the base', () => {
      const myStencil = createStencil({
        base: {
          padding: 10,
        },
      });

      expectTypeOf(myStencil).toHaveProperty('base');
      expectTypeOf(myStencil.base).toEqualTypeOf<string>();

      expect(myStencil).toHaveProperty('base');
      expect(typeof myStencil.base).toEqual('string');
    });

    it('should allow the creation of a modifier and apply it', () => {
      const myStencil = createStencil({
        base: {
          padding: 10,
        },
        modifiers: {
          size: {
            large: {
              padding: 20,
            },
          },
        },
      });

      render(
        <>
          <div data-testid="test1" {...myStencil()} />
          <div data-testid="test2" {...myStencil({size: 'large'})} />
        </>
      );

      expect(screen.getByTestId('test1')).toHaveStyle({padding: '10px'});
      expect(screen.getByTestId('test2')).toHaveStyle({padding: '20px'});

      expect(myStencil({size: 'large'}).className).toContain(myStencil.base);
      expect(myStencil({size: 'large'}).className).toContain(myStencil.modifiers.size.large);

      // type signature of stencil call expression
      type Arg = Parameters<typeof myStencil>[0];
      expectTypeOf<Arg>().toMatchTypeOf<
        | undefined
        | {
            size?: 'large';
          }
      >();
    });

    it('should set the `modifiers` property with the className of the modifier', () => {
      const myStencil = createStencil({
        base: {
          padding: 10,
        },
        modifiers: {
          size: {
            large: {
              padding: 20,
            },
          },
        },
      });

      expectTypeOf(myStencil).toHaveProperty('modifiers');
      expectTypeOf(myStencil.modifiers).toHaveProperty('size');
      expectTypeOf(myStencil.modifiers.size).toHaveProperty('large');
      expectTypeOf(myStencil.modifiers.size.large).toEqualTypeOf<string>();

      expect(myStencil).toHaveProperty('modifiers.size.large');
      expect(typeof myStencil.modifiers.size.large).toEqual('string');
    });

    it('should apply modifiers in the correct order regardless of the order they are defined when calling the stencil', () => {
      const myStencil = createStencil({
        base: {},
        modifiers: {
          size: {
            large: {},
          },
          position: {
            start: {},
          },
        },
      });

      expect(myStencil({position: 'start', size: 'large'}).className).toContain(
        `${myStencil.base} ${myStencil.modifiers.size.large} ${myStencil.modifiers.position.start}`
      );
    });

    it('should add the hash of the modifier to the className to handle parentModifier selectors in compat mode', () => {
      const myStencil = createStencil({
        base: {},
        modifiers: {
          size: {
            large: {},
          },
        },
      });

      const {className} = myStencil({size: 'large'});

      expect(className).toEqual(
        `${myStencil.base} ${
          myStencil.modifiers.size.large
        } ${myStencil.modifiers.size.large.replace('css-', 'm')}`
      );
    });

    it('should default modifiers if no modifier override is passed', () => {
      const myStencil = createStencil({
        base: {
          padding: 10,
        },
        modifiers: {
          size: {
            large: {
              padding: 20,
            },
            small: {
              padding: 5,
            },
          },
        },
        defaultModifiers: {
          size: 'large',
        },
      });

      expect(myStencil().className).toContain(myStencil.modifiers.size.large);
      expect(myStencil().className).not.toContain(myStencil.modifiers.size.small);
    });

    it('should allow the creation of compound modifiers an apply it', () => {
      const myStencil = createStencil({
        base: {
          padding: 10,
        },
        modifiers: {
          size: {
            large: {padding: 20},
            small: {padding: 5},
          },
          position: {
            start: {paddingInlineStart: 5},
            end: {paddingInlineEnd: 5},
          },
        },
        compound: [
          {
            modifiers: {
              size: 'large',
              position: 'start',
            },
            styles: {paddingInlineStart: 10},
          },
          {
            modifiers: {
              size: 'small',
              position: 'end',
            },
            styles: {paddingInlineEnd: 0},
          },
        ],
      });

      render(
        <>
          <div data-testid="test1" {...myStencil({size: 'large'})} />
          <div data-testid="test2" {...myStencil({size: 'large', position: 'start'})} />
        </>
      );

      expect(screen.getByTestId('test1')).toHaveStyle({padding: '20px'});
      expect(screen.getByTestId('test2')).toHaveStyle({
        padding: '20px',
        paddingInlineStart: '10px',
      });

      // 4 class names - base, size, position, size-position
      expect(myStencil({size: 'large', position: 'start'}).className.split(' ')).toHaveLength(6); // 4 + 2 modifier hashes
      const {className} = myStencil({size: 'large', position: 'start'});

      expect(className).toContain(myStencil.base);
      expect(className).toContain(myStencil.modifiers.size.large);
      expect(className).toContain(myStencil.modifiers.position.start);
      // we don't have access to the compound modifier class name
    });

    it('should return access to variables for use in other components', () => {
      const myStencil = createStencil({
        vars: {
          color: 'red',
        },
        base: {},
      });

      expectTypeOf(myStencil).toHaveProperty('vars');
      expectTypeOf(myStencil.vars).toHaveProperty('color');
      expectTypeOf(myStencil.vars.color).toEqualTypeOf<`--${string}`>();

      expect(myStencil).toHaveProperty('vars.color', expect.stringMatching(/--color-[a-z0-9]+/));
    });

    it('should return access to parts for data-part attributes', () => {
      const myStencil = createStencil({
        parts: {
          separator: 'my-separator',
        },
        base: ({separatorPart}) => {
          expectTypeOf(separatorPart).toEqualTypeOf<'[data-part="my-separator"]'>();

          return {};
        },
      });

      expectTypeOf(myStencil).toHaveProperty('parts');
      expectTypeOf(myStencil.parts).toHaveProperty('separator');
      expectTypeOf(myStencil.parts.separator).toEqualTypeOf<{'data-part': 'my-separator'}>();

      expect(myStencil).toHaveProperty(
        'parts.separator[data-part]',
        expect.stringMatching('my-separator')
      );
    });

    it('should coerce a variable input to a type of string', () => {
      const myStencil = createStencil({
        vars: {
          foo: '--base-color' as '--base-color',
        },
        base: {},
      });

      type Options = Exclude<Parameters<typeof myStencil>[0], undefined>;

      expectTypeOf<Options['foo']>().toEqualTypeOf<string | undefined>();

      // make sure we can call the function with a string
      myStencil({
        foo: '--another-color',
      });
    });

    it('should return access to variables with an ID for use in other components', () => {
      const myStencil = createStencil(
        {
          vars: {
            color: 'red',
          },
          base: {},
        },
        'foo'
      );

      expectTypeOf(myStencil).toHaveProperty('vars');
      expectTypeOf(myStencil.vars).toHaveProperty('color');
      expectTypeOf(myStencil.vars.color).toEqualTypeOf<'--color-foo'>();

      expect(myStencil).toHaveProperty('vars.color', expect.stringMatching(/--color-foo/));
    });

    it('should return a function that takes in an object with the values and wrap passed css variables', () => {
      const myStencil = createStencil({
        vars: {
          color: 'red',
        },
        base: {},
      });

      expect(myStencil({color: '--my-var'}).style).toHaveProperty(
        myStencil.vars.color,
        'var(--my-var)'
      );
    });

    it('should handle variables and pass them to the base function', () => {
      const myStencil = createStencil({
        vars: {
          default: {
            color: 'red',
          },
        },
        base: vars => ({
          color: vars.default.color,
        }),
      });

      // `.toHaveStyle` doesn't work with variables and worse, it ALWAYS passes when passed anything
      // other than a parsable color string. https://github.com/testing-library/jest-dom/issues/322
      // We'll resort to iterating over injected styles instead.
      let found = false;
      for (const sheet of document.styleSheets as any as Iterable<CSSStyleSheet>) {
        for (const rule of sheet.cssRules as any as Iterable<CSSRule>) {
          if (rule.cssText.includes(myStencil.base)) {
            expect(rule.cssText).toContain(`${myStencil.vars.default.color}: red;`);
            expect(rule.cssText).toContain(`color: var(${myStencil.vars.default.color})`);
            found = true;
          }
        }
      }
      expect(found).toEqual(true);
      expectTypeOf(myStencil.vars.default.color).toEqualTypeOf<`--${string}`>();
    });

    it('should handle variables and pass them to the modifier function', () => {
      const myStencil = createStencil({
        vars: {
          default: {
            color: 'red',
          },
        },
        base: {},
        modifiers: {
          variant: {
            regular: vars => {
              expectTypeOf(vars).toHaveProperty('default');
              expectTypeOf(vars.default).toHaveProperty('color');
              expectTypeOf(vars.default.color).toEqualTypeOf<`--${string}`>();

              return {
                color: vars.default.color,
              };
            },
          },
        },
      });

      // `.toHaveStyle` doesn't work with variables and worse, it ALWAYS passes when passed anything
      // other than a parsable color string. https://github.com/testing-library/jest-dom/issues/322
      // We'll resort to iterating over injected styles instead.
      let found = false;
      for (const sheet of document.styleSheets as any as Iterable<CSSStyleSheet>) {
        for (const rule of sheet.cssRules as any as Iterable<CSSRule>) {
          if (rule.cssText.includes(myStencil.modifiers.variant.regular)) {
            expect(rule.cssText).toContain(`color: var(${myStencil.vars.default.color})`);
            found = true;
          }
        }
      }
      expect(found).toEqual(true);
    });

    it('should handle variables and pass them to the compound modifier function', () => {
      const myStencil = createStencil({
        vars: {
          color: 'red',
        },
        parts: {
          separator: 'my-separator',
        },
        base: {},
        modifiers: {
          variant: {
            regular: {
              '--variant': 'regular',
            },
          },
          size: {
            large: {
              '--size': 'large',
            },
            small: {
              '--size': 'small',
            },
          },
        },
        compound: [
          {
            modifiers: {
              variant: 'regular',
              size: 'large',
            },
            styles: varsAndParts => {
              expectTypeOf(varsAndParts).toHaveProperty('color');
              expectTypeOf(varsAndParts.color).toEqualTypeOf<`--${string}`>();
              expectTypeOf(varsAndParts).toHaveProperty('separatorPart');
              expectTypeOf(
                varsAndParts.separatorPart
              ).toEqualTypeOf<'[data-part="my-separator"]'>();

              return {
                '--modifiers': 'var(--regular-large)',
                color: varsAndParts.color,
              };
            },
          },
          {
            modifiers: {
              variant: 'regular',
              size: 'small',
            },
            styles: {
              color: 'blue',
            },
          },
        ],
      });

      // `.toHaveStyle` doesn't work with variables and worse, it ALWAYS passes when passed anything
      // other than a parsable color string. https://github.com/testing-library/jest-dom/issues/322
      // We'll resort to iterating over injected styles instead.
      let found = false;
      for (const sheet of document.styleSheets as any as Iterable<CSSStyleSheet>) {
        for (const rule of sheet.cssRules as any as Iterable<CSSRule>) {
          if (rule.cssText.includes('var(--regular-large)')) {
            expect(rule.cssText).toContain(`color: var(${myStencil.vars.color})`);
            found = true;
          }
        }
      }
      expect(found).toEqual(true);
    });

    it('should handle both variables and modifiers sharing the same key', () => {
      const myStencil = createStencil({
        vars: {
          width: '10px',
          height: '10px',
        },
        base({width}) {
          return {width: width};
        },
        modifiers: {
          width: {
            zero: {
              width: '0',
            },
          },
        },
      });

      type Arg = Exclude<Parameters<typeof myStencil>[0], undefined>;
      expectTypeOf<Arg>().toHaveProperty('width');
      expectTypeOf<Arg['width']>().toMatchTypeOf<(string & {}) | 'zero' | undefined>();

      const result = myStencil({width: '70px', height: '10px'});
      expect(result).toHaveProperty('style');
      expect(result.style).toHaveProperty(myStencil.vars.width, '70px');

      // only match the base
      expect(result.className).toEqual(myStencil.base);

      const result2 = myStencil({width: 'zero', height: '10px'});
      expect(result2).toHaveProperty('style');
      expect(result2.style).not.toHaveProperty(myStencil.vars.width, 'zero');

      // match base and width modifier
      expect(result2.className).toContain(`${myStencil.base} ${myStencil.modifiers.width.zero}`);
    });

    it('should infer variables within a modifier style return function', () => {
      const myStencil = createStencil({
        vars: {
          width: '10px',
          height: '10px',
        },
        base: {},
        modifiers: {
          width: {
            zero: ({width}) => {
              expectTypeOf(width).toEqualTypeOf<`--${string}`>();

              return {
                width: width,
              };
            },
          },
        },
      });
    });

    it('should convert "true" modifiers into boolean', () => {
      const myStencil = createStencil({
        vars: {
          foo: 'red',
        },
        base: {},
        modifiers: {
          size: {
            large: {},
          },
          grow: {
            true: {},
            false: {},
          },
        },
        // make sure boolean modifiers are valid in compound config
        compound: [
          {modifiers: {size: 'large', grow: true}, styles: {}},
          {modifiers: {size: 'large', grow: false}, styles: {}},
        ],
      });

      type Args = Exclude<Parameters<typeof myStencil>[0], undefined>;

      expectTypeOf<Args>().toHaveProperty('grow');
      expectTypeOf<Args['grow']>().toEqualTypeOf<boolean | 'true' | 'false' | undefined>();

      // Make sure the function call passes type checks. Even though we tested the type parameter,
      // the actual function call may still fail type checks. We need to make sure type conditionals
      // distribute in the correct order
      myStencil({
        grow: true,
      });
    });

    it('should apply true styles', () => {
      const myStencil = createStencil({
        base: {},
        modifiers: {
          grow: {
            true: {width: '100%'},
            false: {width: '100px'},
          },
        },
      });

      const {className} = myStencil({grow: true});
      expect(className).toContain(myStencil.modifiers.grow.true);
    });

    it('should apply false styles', () => {
      const myStencil = createStencil({
        base: {},
        modifiers: {
          grow: {
            true: {width: '100%'},
            false: {width: '100px'},
          },
        },
      });

      const {className} = myStencil({grow: false});
      expect(className).toContain(myStencil.modifiers.grow.false);
    });

    describe('when extending', () => {
      it('should have both stencil class names', () => {
        const baseStencil = createStencil({
          base: {},
        });

        const extendedStencil = createStencil({
          extends: baseStencil,
          base: {},
        });

        expect(extendedStencil()).toHaveProperty(
          'className',
          expect.stringMatching(/css-[a-z0-9]+ css-[a-z0-9]+/)
        );
      });

      it('should extend modifiers and return modifier class names', () => {
        const baseStencil = createStencil({
          base: {},
          modifiers: {
            size: {
              large: {},
            },
          },
        });

        const extendedStencil = createStencil({
          extends: baseStencil,
          base: {},
          modifiers: {
            extra: {
              true: {},
              false: {},
            },
          },
        });

        expect(extendedStencil.modifiers).toHaveProperty(
          'size.large',
          baseStencil.modifiers.size.large
        );
        expect(extendedStencil.modifiers).toHaveProperty('extra.true');
        extendedStencil({size: 'large'});

        expect(extendedStencil({size: 'large'})).toHaveProperty(
          'className',
          expect.stringContaining(baseStencil.modifiers.size.large)
        );

        // types
        expectTypeOf(extendedStencil).toHaveProperty('modifiers');
        expectTypeOf(extendedStencil.modifiers).toHaveProperty('size');
        expectTypeOf(extendedStencil.modifiers.size).toHaveProperty('large');
        expectTypeOf(extendedStencil.modifiers.size.large).toEqualTypeOf<string>();
        expectTypeOf(extendedStencil.modifiers).toHaveProperty('extra');
        expectTypeOf(extendedStencil.modifiers.extra).toHaveProperty('true');
        expectTypeOf(extendedStencil.modifiers.extra.true).toEqualTypeOf<string>();
        expectTypeOf(extendedStencil.modifiers.extra).toHaveProperty('false');
        expectTypeOf(extendedStencil.modifiers.extra.false).toEqualTypeOf<string>();

        // calling the stencil
        type Args = Exclude<Parameters<typeof extendedStencil>[0], undefined>;
        expectTypeOf<Args>().toEqualTypeOf<{
          size?: 'large';
          extra?: boolean | 'true' | 'false';
        }>();

        // make sure it actually works when calling it. The type test can pass via extracting parameters
        // while the actual function call fails
        extendedStencil({
          extra: true,
        });
        extendedStencil({
          extra: false,
        });
      });

      it('should extend compound modifiers and return all compound modifiers', () => {
        const baseStencil = createStencil({
          vars: {
            color: 'red',
          },
          base: {},
          modifiers: {
            size: {
              large: {},
            },
          },
          compound: [{modifiers: {size: 'large'}, styles: {}}],
        });

        const extendedStencil = createStencil({
          extends: baseStencil,
          vars: {
            background: 'blue',
          },
          base: {},
          modifiers: {
            extra: {
              true: {},
              false: {},
            },
          },
          compound: [
            {modifiers: {size: 'large'}, styles: {}},
            {modifiers: {size: 'large', extra: true}, styles: {}},
            {modifiers: {size: 'large', extra: false}, styles: {}},
          ],
        });

        extendedStencil({color: 'blue', background: 'red'});

        const {className} = extendedStencil({size: 'large'});

        expect(className.split(' ')).toHaveProperty('length', 6); // 1 base + 1 extended + 1 size modifier + 2 compound modifiers + 1 modifier hash

        expect(className).toContain(baseStencil.base);
        extendedStencil.base.split(' ').forEach(c => {
          expect(className).toContain(c);
        });
        expect(className).toContain(baseStencil.modifiers.size.large);

        // calling the stencil
        type Args = Exclude<Parameters<typeof extendedStencil>[0], undefined>;
        expectTypeOf<Args>().toEqualTypeOf<{
          size?: 'large';
          extra?: boolean | 'true' | 'false';
          color?: string;
          background?: string;
        }>();

        // Verify the actual function call does not give an error for boolean even if the type test says it works
        extendedStencil({
          extra: true,
        });
        extendedStencil({
          extra: false,
        });
      });

      it('should apply true modifier styles', () => {
        const baseStencil = createStencil({
          base: {},
          modifiers: {}, // TODO: Remove this requirement
        });

        const extendedStencil = createStencil({
          extends: baseStencil,
          base: {},
          modifiers: {
            grow: {
              true: {width: '100%'},
              false: {width: '100px'},
            },
          },
        });

        const {className} = extendedStencil({grow: true});
        expect(className).toContain(extendedStencil.modifiers.grow.true);
      });

      it('should apply false modifier styles', () => {
        const baseStencil = createStencil({
          base: {},
          modifiers: {}, // TODO: Remove this requirement
        });

        const extendedStencil = createStencil({
          extends: baseStencil,
          base: {},
          modifiers: {
            grow: {
              true: {width: '100%'},
              false: {width: '100px'},
            },
          },
        });

        const {className} = extendedStencil({grow: false});
        expect(className).toContain(extendedStencil.modifiers.grow.false);
      });

      it('should set default modifiers using base modifiers', () => {
        const baseStencil = createStencil({
          base: {},
          modifiers: {
            size: {
              large: {width: '100rem'},
            },
          },
        });

        const extendedStencil = createStencil({
          extends: baseStencil,
          base: {},
          modifiers: {
            extra: {
              true: {},
            },
          },
          defaultModifiers: {size: 'large'},
        });

        // calling the stencil
        type Args = Exclude<Parameters<typeof extendedStencil>[0], undefined>;
        expectTypeOf<Args>().toEqualTypeOf<{
          size?: 'large';
          extra?: boolean | 'true';
        }>();
      });

      it('should extend variables', () => {
        const baseStencil = createStencil({
          vars: {
            color: 'red',
          },
          base: {},
        });

        const extendedStencil = createStencil({
          vars: {
            background: 'blue',
          },
          extends: baseStencil,
          base: {},
        });

        expectTypeOf(extendedStencil.vars.color).toEqualTypeOf<`--${string}`>();
        expect(extendedStencil).toHaveProperty(
          'vars.color',
          expect.stringMatching(/--color-[0-9a-z]+/i)
        );

        expectTypeOf(extendedStencil.vars.background).toEqualTypeOf<`--${string}`>();
        expect(extendedStencil).toHaveProperty(
          'vars.background',
          expect.stringMatching(/--background-[0-9a-z]+/i)
        );
      });

      it('should return access to extended parts for data-part attributes', () => {
        const baseStencil = createStencil({
          parts: {
            separator: 'base-separator',
          },
          base: ({separatorPart}) => {
            expectTypeOf(separatorPart).toEqualTypeOf<'[data-part="base-separator"]'>();

            return {};
          },
        });

        const extendedStencil = createStencil({
          parts: {
            border: 'extended-border',
          },
          extends: baseStencil,
          base: ({separatorPart, borderPart}) => {
            expectTypeOf(separatorPart).toEqualTypeOf<'[data-part="base-separator"]'>();
            expectTypeOf(borderPart).toEqualTypeOf<'[data-part="extended-border"]'>();

            return {};
          },
        });

        // base
        expectTypeOf(extendedStencil).toHaveProperty('parts');
        expectTypeOf(extendedStencil.parts).toHaveProperty('separator');
        expectTypeOf(extendedStencil.parts.separator).toEqualTypeOf<{
          'data-part': 'base-separator';
        }>();
        expect(extendedStencil).toHaveProperty(
          'parts.separator[data-part]',
          expect.stringMatching('base-separator')
        );

        // extended
        expectTypeOf(extendedStencil).toHaveProperty('parts');
        expectTypeOf(extendedStencil.parts).toHaveProperty('border');
        expectTypeOf(extendedStencil.parts.border).toEqualTypeOf<{
          'data-part': 'extended-border';
        }>();
        expect(extendedStencil).toHaveProperty(
          'parts.border[data-part]',
          expect.stringMatching('extended-border')
        );
      });

      it('should extend variables with IDs', () => {
        const baseStencil = createStencil(
          {
            vars: {
              color: 'red',
            },
            base: {},
          },
          'base'
        );

        const extendedStencil = createStencil(
          {
            extends: baseStencil,
            vars: {
              background: 'blue',
            },
            base({color, background}) {
              expectTypeOf(color).toMatchTypeOf<string>();
              expectTypeOf(background).toMatchTypeOf<string>();
              return {};
            },
          },
          'extended'
        );

        expectTypeOf(extendedStencil.vars.color).toEqualTypeOf<'--color-base'>();
        expectTypeOf(extendedStencil.vars.background).toEqualTypeOf<'--background-extended'>();
        expectTypeOf(extendedStencil.vars.$$defaults).toHaveProperty('--color-base');
        expectTypeOf(extendedStencil.vars.$$defaults).toHaveProperty('--background-extended');
        expectTypeOf(extendedStencil.vars.$$defaults['--color-base']).toMatchTypeOf<string>();
        expectTypeOf(
          extendedStencil.vars.$$defaults['--background-extended']
        ).toMatchTypeOf<string>();

        expect(extendedStencil).toHaveProperty('vars.color', '--color-base');

        expect(extendedStencil).toHaveProperty('vars.background', '--background-extended');
      });

      it('should extend, adding class names in the correct order', () => {
        const baseStencil = createStencil(
          {
            base: {
              color: 'red',
            },
            modifiers: {
              size: {
                large: {
                  color: 'pink',
                },
                small: {
                  color: 'lightgreen',
                },
              },
              position: {
                only: {},
                start: {},
              },
            },
            compound: [
              {
                modifiers: {size: 'large', position: 'only'},
                styles: {},
              },
            ],
          },
          'base'
        );

        const extendedStencil = createStencil(
          {
            extends: baseStencil,
            base: {
              color: 'green',
            },
            modifiers: {
              size: {
                large: {},
                small: {},
              },
              foo: {
                bar: {},
              },
            },
            compound: [
              {
                modifiers: {size: 'large', position: 'only'},
                styles: {
                  color: 'var(--extended-compound-icon-only)',
                },
              },
            ],
          },
          'extended'
        );

        expect(extendedStencil.base.split(' ')).toHaveLength(2);
        expect(extendedStencil.base).toMatch(new RegExp(`^${baseStencil.base}`));
        expect(extendedStencil.modifiers.size.large.split(' ')).toHaveLength(2);
        expect(extendedStencil.modifiers.size.large).toMatch(
          new RegExp(`^${baseStencil.modifiers.size.large}`)
        );

        // Expect all base styles, modifiers, and compound modifiers to be included
        const {className} = extendedStencil({size: 'large', position: 'only'});
        expect(className).toContain(baseStencil.base);
        expect(className).toContain(baseStencil.modifiers.size.large);
        expect(className).toContain(baseStencil.modifiers.position.only);

        // baseStencil.base, baseStencil large, baseStencil only position, baseStencil compound, extendedStencil.base, extendedStencil large, extendedStencil compound
        expect(className.split(' ')).toHaveLength(10); // 7 + 3 modifier hashes
      });

      describe('when vars and modifiers share the same key', () => {
        function setup() {
          const baseStencil = createStencil({
            vars: {
              width: '10px',
            },
            base: ({width}) => ({
              width: width,
            }),
            modifiers: {
              width: {
                zero: {
                  width: '0',
                },
              },
            },
          });

          const extendedStencil = createStencil({
            extends: baseStencil,
            vars: {
              height: '',
            },
            base: ({height}) => ({
              height: height,
            }),
            modifiers: {
              height: {
                zero: {},
              },
            },
          });

          return {baseStencil, extendedStencil};
        }

        it('should set up the correct types', () => {
          const {extendedStencil} = setup();

          type Arg = Exclude<Parameters<typeof extendedStencil>[0], undefined>;
          expectTypeOf<Arg>().toHaveProperty('width');
          expectTypeOf<Arg['width']>().toMatchTypeOf<(string & {}) | 'zero' | undefined>();
          expectTypeOf<Arg>().toHaveProperty('height');
          expectTypeOf<Arg['height']>().toMatchTypeOf<(string & {}) | 'zero' | undefined>();
        });

        it('should apply modifiers when a modifier is matched', () => {
          const {extendedStencil} = setup();

          const result = extendedStencil({width: 'zero', height: 'zero'});
          expect(result.className).toContain(extendedStencil.modifiers.width.zero);
          expect(result.className).toContain(extendedStencil.modifiers.height.zero);

          expect(result).toHaveProperty('style');
          expect(result.style).not.toHaveProperty(extendedStencil.vars.width);
          expect(result.style).not.toHaveProperty(extendedStencil.vars.height);
        });

        it('should apply vars when a var is matched', () => {
          const {extendedStencil} = setup();

          const result = extendedStencil({width: '10px', height: '20px'});
          expect(result.className).not.toContain(extendedStencil.modifiers.width.zero);
          expect(result.className).not.toContain(extendedStencil.modifiers.height.zero);

          expect(result).toHaveProperty('style');
          expect(result.style).toHaveProperty(extendedStencil.vars.width, '10px');
          expect(result.style).toHaveProperty(extendedStencil.vars.height, '20px');
        });
      });
    });

    it('should handle parts and pass them to the base function as [data-part=${part-value}]', () => {
      const myStencil = createStencil({
        parts: {
          separator: 'my-separator',
        },
        base: ({separatorPart}) => ({
          [`${separatorPart}`]: {},
        }),
      });

      // `.toHaveStyle` doesn't work with variables and worse, it ALWAYS passes when passed anything
      // other than a parsable color string. https://github.com/testing-library/jest-dom/issues/322
      // We'll resort to iterating over injected styles instead.
      let found = false;
      for (const sheet of document.styleSheets as any as Iterable<CSSStyleSheet>) {
        for (const rule of sheet.cssRules as any as Iterable<CSSRule>) {
          if (rule.cssText.includes(myStencil.base)) {
            if (rule.cssText.includes(myStencil.parts.separator['data-part'])) {
              expect(rule.cssText).toContain(
                `${myStencil.base} [data-part="${myStencil.parts.separator['data-part']}"]`
              );
            }

            found = true;
          }
        }
      }
      expect(found).toEqual(true);
    });
  });
});

describe('handleCsProp', () => {
  const padding = {
    base: '1px',
    styleAttribute: '2px',
    createStyles: '3px',
    styledComponent: '4px',
    cssProp: '5px',
    styleProp: '6px',
  } as const;
  const baseStyles = createStyles({
    padding: padding.base,
  });

  const BaseComponent = (props: any) => (
    <div data-testid="base" {...handleCsProp(props, baseStyles)} />
  );

  it('should apply the base styles', () => {
    render(<BaseComponent />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.base});
  });

  it('should forward the style attribute', () => {
    const returnProps = handleCsProp({style: {position: 'absolute'}});

    expect(returnProps).toHaveProperty('className', '');
    expect(returnProps).toHaveProperty('style', {position: 'absolute'});
  });

  it('should handle deeply nested styles', () => {
    // make sure there's no type error
    handleCsProp({}, {'&:hover': {padding: 10}});
  });

  it('should allow overriding via the style attribute', () => {
    render(<BaseComponent style={{padding: padding.styleAttribute}} />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.styleAttribute});
  });

  it('should allow the cs prop to override base styles', () => {
    const overrideStyles = createStyles({
      padding: padding.createStyles,
    });

    render(<BaseComponent cs={overrideStyles} />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.createStyles});

    // When no style props or runtime styling is detected, styles should not be merged into a single
    // class name, but both class names should be listed
    expect(screen.getByTestId('base')).toHaveClass(baseStyles);
    expect(screen.getByTestId('base')).toHaveClass(overrideStyles);
  });

  it('should allow deeply nested styles in the cs prop', () => {
    interface Props extends CSProps {}

    const MyComponent = (props: Props) => null;

    // no assertion, just make sure there's no type error
    const temp = <MyComponent cs={{'&:hover': {padding: 10}}} />;
  });

  it('should allow the css prop to override base styles', () => {
    render(jsx(BaseComponent, {css: {padding: padding.cssProp}}));

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.cssProp});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should allow a styled component to override base styles', () => {
    const StyledBaseComponent = styled(BaseComponent)({
      padding: padding.styledComponent,
    });

    render(<StyledBaseComponent />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.styledComponent});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should prioritize the cs prop over the css prop', () => {
    const overrideStyles = createStyles({
      padding: padding.createStyles,
    });

    render(jsx(BaseComponent, {css: {padding: padding.cssProp}, cs: overrideStyles}));

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.createStyles});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should prioritize the cs prop over a styled component', () => {
    const StyledBaseComponent = styled(BaseComponent)({
      padding: padding.styledComponent,
    });
    const overrideStyles = createStyles({
      padding: padding.createStyles,
    });

    render(<StyledBaseComponent cs={overrideStyles} />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.createStyles});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should prioritize the cs prop over a styled component and style props', () => {
    const StyledBaseComponent = styled(BaseComponent)({
      padding: padding.styledComponent,
    });
    const overrideStyles = createStyles({
      padding: padding.createStyles,
    });

    render(<StyledBaseComponent cs={overrideStyles} padding={padding.styleProp} />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.createStyles});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should prioritize the cs prop over the css prop, styled component, and style props', () => {
    const StyledBaseComponent = styled(BaseComponent)({
      padding: padding.styledComponent,
    });
    const overrideStyles = createStyles({
      padding: padding.createStyles,
    });

    render(
      jsx(StyledBaseComponent, {
        cs: overrideStyles,
        css: {padding: padding.cssProp},
        padding: padding.styleProp,
      })
    );

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.createStyles});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should prioritize the css prop over a styled component', () => {
    const StyledBaseComponent = styled(BaseComponent)({
      padding: padding.styledComponent,
    });

    render(jsx(StyledBaseComponent, {css: {padding: padding.cssProp}}));

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.cssProp});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should prioritize the css prop over style props', () => {
    render(jsx(BaseComponent, {css: {padding: padding.cssProp}, padding: padding.styleProp}));

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.cssProp});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });

  it('should prioritize a style component over style props', () => {
    const StyledBaseComponent = styled(BaseComponent)({
      padding: padding.styledComponent,
    });

    render(<StyledBaseComponent padding={padding.styleProp} />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.styledComponent});
    expect(screen.getByTestId('base')).not.toHaveClass(baseStyles);
  });
});

describe('keyframes', () => {
  it('should return an animation name', () => {
    const name = keyframes({});

    expect(name).toContain('animation-');
  });

  it('should return a string when name is not preknown', () => {
    const name = keyframes({});

    expectTypeOf(name).toBeString();
  });

  it('should return a string literal when name is not preknown', () => {
    const name = keyframes({
      name: 'foo',
      styles: '',
    });

    expectTypeOf(name).toMatchTypeOf<'foo'>();
  });
});
