import React from 'react';

/* eslint-disable @emotion/no-vanilla */
import {expectTypeOf} from 'expect-type';
import {Properties} from 'csstype';
import {SerializedStyles} from '@emotion/serialize';
import {css, cache} from '@emotion/css';
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
  handleCsProp,
} from '../lib/cs';
import {setUniqueSeed} from '../lib/uniqueId';

// We need to force Emotion's cache wrapper to use the cache from `@emotion/css` for tests to pass
const CacheWrapper = props => <CacheProvider value={cache} {...props} />;
// @ts-ignore We want the types to be the same, but I don't care to fix the error
const render: typeof rtlRender = (ui, options) =>
  rtlRender(ui, {wrapper: CacheWrapper, ...options});

describe('createStyles', () => {
  beforeEach(() => {
    setUniqueSeed('a');
  });

  describe('createStyles', () => {
    it('should accept an object of CSS Properties', () => {
      type Input = Exclude<
        Parameters<typeof createStyles>[0],
        string | number | boolean | SerializedStyles
      >;
      type PositionProperty = Input['position'];
      const temp: PositionProperty = 'absolute';
      createStyles({
        position: 'absolute',
      });
      expectTypeOf<PositionProperty>().toMatchTypeOf<
        Properties['position'] | Properties['position'][]
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
    });

    it('should return a css var wrapper that includes a fallback', () => {
      const input = '--my-var';
      const expected = cssVar(input, 'red');

      expect(expected).toEqual('var(--my-var, red)');
    });

    it('should return a css var wrapper that includes a fallback without cssVar wrapping', () => {
      const expected = cssVar('--my-var', '--my-fallback-var');

      expect(expected).toEqual('var(--my-var, var(--my-fallback-var))');
    });
  });

  describe('createVars', () => {
    it('should create an object with a key of the "color"', () => {
      const myVars = createVars('color');

      expect(myVars).toHaveProperty('color', expect.stringMatching(/--.+-color/));
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

    it('should type optimized style functions correctly so they can be consumed by other repositories', () => {
      const vars = createVars({id: 'foo', args: ['one']});
      expectTypeOf(vars.one).toMatchTypeOf<'--foo-one'>();
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
