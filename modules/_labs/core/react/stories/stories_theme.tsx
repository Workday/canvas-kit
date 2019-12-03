/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {CanvasTheme, CanvasThemePalette, useTheme} from '../index';
import README from '../lib/theming/README.md';
import {H1, colors, type, spacing, borderRadius} from '@workday/canvas-kit-react-core';

const Palettes = styled('div')({
  display: 'flex',
  margin: -20,
  flexWrap: 'wrap',
});
const Palette = styled('ul')({
  listStyle: 'none',
  margin: 20,
  padding: 0,
  borderRadius: borderRadius.l,
  overflow: 'hidden',
  width: 250,
  alignSelf: 'flex-start',
});
const Swatch = styled('li')(
  {
    ...type.body,
    padding: `0 ${spacing.m}`,
    height: spacing.xl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  (props: any) => ({
    background: props.bg,
    span: {
      color: props.contrast,
    },
  })
);
const PaletteTitle = styled(Swatch)(
  {
    ...type.h3,
    height: spacing.xxl,
    paddingBottom: spacing.s,
    alignItems: 'flex-end',
    textTransform: 'capitalize',
  },
  (props: any) => ({
    span: {
      color: props.contrast,
    },
  })
);

const createSwatch = (name: string, color: string, contrast: string, Component = Swatch) => {
  return (
    <Component bg={color} contrast={contrast} key={`${name}-${color}`}>
      {name}
      {contrast && <span>{name}</span>}
    </Component>
  );
};

type Palette = keyof CanvasTheme['palette'];
type Swatch = keyof CanvasThemePalette;

const ThemeDemo = (props: any) => {
  const theme = useTheme() as CanvasTheme;
  return (
    <div>
      <H1>Default Canvas Theme</H1>
      <Palettes>
        {Object.keys(theme.palette).map(name => {
          const palette = theme.palette[name as Palette] as CanvasThemePalette;
          const bg = (palette.main && palette.main) || colors.soap200;
          const contrast = palette.contrast;

          return (
            <Palette key={name}>
              {createSwatch(name, bg, contrast, PaletteTitle)}
              {Object.keys(palette).map(key => {
                if (key === 'contrast') {
                  return;
                }
                return createSwatch(key, palette[key as Swatch], contrast);
              })}
            </Palette>
          );
        })}
      </Palettes>
    </div>
  );
};

storiesOf('Labs/Core/React', module)
  .addDecorator(withReadme(README))
  .add('Theme', () => {
    return <ThemeDemo />;
  });
