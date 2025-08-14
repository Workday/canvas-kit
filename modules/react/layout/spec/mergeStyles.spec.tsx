import React from 'react';

import {jsx} from '@emotion/react';
import styled from '@emotion/styled';
import {render as rtlRender, screen} from '@testing-library/react';

import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

// We need to force Emotion's cache wrapper to use the cache from `@workday/canvas-kit-styling`
// @ts-ignore We want the types to be the same, but I don't care to fix the error
const render: typeof rtlRender = (ui, options) => {
  const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => (
    <CanvasProvider theme={{canvas: {palette: {primary: {main: 'orange'}}}}}>
      {children}
    </CanvasProvider>
  );
  return rtlRender(ui, {wrapper: Wrapper, ...options});
};

describe('mergeStyles', () => {
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
    <div data-testid="base" {...mergeStyles(props, baseStyles)} />
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

  it('should allow style props to override base styles', () => {
    render(<BaseComponent padding={padding.styleProp} />);

    expect(screen.getByTestId('base')).toHaveStyle({padding: padding.styleProp});
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

  it('should prioritize the cs prop over a style props', () => {
    const overrideStyles = createStyles({
      padding: padding.createStyles,
    });

    render(<BaseComponent cs={overrideStyles} padding={padding.styleProp} />);

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
