import styled from '@emotion/styled';
import {Meta} from '@storybook/react';

import {
  CanvasProvider,
  CanvasTheme,
  CanvasThemePalette,
  StyledType,
  Themeable,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';

export default {
  title: 'Features/Theming',
} satisfies Meta;

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
    ...type.levels.subtext.large,
    padding: `0 ${space.m}`,
    height: space.xl,
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
const PaletteTitle = styled(Swatch)<StyledType>(
  {
    ...type.levels.body.large,
    height: space.xxl,
    paddingBottom: space.s,
    alignItems: 'flex-end',
    textTransform: 'capitalize',
    fontWeight: type.properties.fontWeights.bold,
  },
  (props: any) => ({
    span: {
      color: props.contrast,
    },
  })
);

const customTheme = {
  canvas: {
    palette: {
      primary: {
        main: colors.greenApple400,
      },
    },
  },
};
const ThemedComponent = styled('h1')<Themeable>(
  ({
    theme: {
      canvas: {
        palette: {primary: themePrimary},
      },
    },
  }) => ({
    ...type.levels.body.large,
    background: themePrimary.main,
    color: themePrimary.contrast,
    borderRadius: borderRadius.m,
    padding: space.xs,
    display: 'inline-block',
    fontWeight: type.properties.fontWeights.bold,
  })
);

const createSwatch = (name: string, color: string, contrast: string, Component: any = Swatch) => {
  return (
    <Component bg={color} contrast={contrast} key={`${name}-${color}`}>
      {name}
      {contrast && <span>{name}</span>}
    </Component>
  );
};

const StyledHeaderDefaultTheme = styled('h1')({
  ...type.levels.heading.medium,
});

const StyledHeaderCustomTheme = styled('h1')({
  ...type.levels.heading.medium,
});

type PaletteKey = keyof CanvasTheme['palette'];
type SwatchKey = keyof CanvasThemePalette;

export const ThemeDemo = () => {
  const theme = useTheme();
  return (
    <div>
      <StyledHeaderDefaultTheme>Default Canvas Theme</StyledHeaderDefaultTheme>
      <Palettes>
        {Object.keys(theme.canvas.palette).map(name => {
          const palette = theme.canvas.palette[name as PaletteKey] as CanvasThemePalette;
          const bg = (palette.main && palette.main) || colors.soap200;
          const contrast = palette.contrast;

          return (
            <Palette key={name}>
              {createSwatch(name, bg, contrast, PaletteTitle)}
              {Object.keys(palette).map(key => {
                if (key === 'contrast') {
                  return;
                }
                return createSwatch(key, palette[key as SwatchKey], contrast);
              })}
            </Palette>
          );
        })}
      </Palettes>
      <hr style={{margin: '80px 0'}} />
      <StyledHeaderCustomTheme>Custom Theme</StyledHeaderCustomTheme>
      <CanvasProvider theme={customTheme}>
        <ThemedComponent>Themed Component</ThemedComponent>
      </CanvasProvider>
    </div>
  );
};
