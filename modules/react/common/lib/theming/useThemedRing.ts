import {CanvasTheme, EmotionCanvasTheme, useTheme} from '@workday/canvas-kit-react/common';
import {brand, system} from '@workday/canvas-tokens-web';
import {CSSProperties, statusColors} from '@workday/canvas-kit-react/tokens';
import {cssVar} from '@workday/canvas-kit-styling';

type paletteSelection = Exclude<keyof EmotionCanvasTheme['canvas']['palette'], 'common'>;
interface ContrastColors {
  outer?: string;
  inner?: string;
}

const getPaletteColorsFromTheme = (
  palette: CanvasTheme,
  fallbackColors?: ContrastColors,
  errorType?: 'error' | 'alert'
): ContrastColors => {
  if (errorType === 'error') {
    return {
      outer: palette.palette.common.errorInner || fallbackColors?.outer,
      inner: fallbackColors?.inner || palette.palette.common.errorInner,
    };
  } else if (errorType === 'alert') {
    return {
      outer: palette.palette.common?.alertOuter || fallbackColors?.outer,
      inner:
        palette.palette.common?.alertInner ||
        fallbackColors?.inner ||
        palette.palette.common.alertInner,
    };
  }

  return {
    outer: fallbackColors?.outer,
    inner: fallbackColors?.inner || palette.palette.common.focusOutline,
  };
};

export function getPaletteColorsForFocusRing(
  type: paletteSelection,
  theme: EmotionCanvasTheme
): ContrastColors {
  const palette = theme.canvas.palette[type];

  switch (type) {
    case 'error': {
      return getPaletteColorsFromTheme(theme.canvas, {outer: brand.common.errorInner}, 'error');
    }
    case 'alert': {
      return getPaletteColorsFromTheme(theme.canvas, {outer: brand.common.alertInner}, 'alert');
    }
    case 'success': {
      return getPaletteColorsFromTheme(theme.canvas, {
        outer: cssVar(brand.success.dark),
        // The theme default for success.main is set to the darkest GreenApple
        // For our default ring, we need to override it so the inner ring is a bit lighter
        inner: palette.main === cssVar(brand.success.base) ? statusColors.success : palette.main,
      });
    }
    default: {
      return getPaletteColorsFromTheme(theme.canvas);
    }
  }
}

/**
 * This is a way to automatically add themed colors to your input and is helpful when showing alerts, success or errors to users.
 * It supports `error`, `alert`, and `success` states. It will try and use the corresponding
 * `main` colors from your `CanvasThemePalette` unless they do not meet accessibility contrast, in
 * which case the outer ring will use the `darkest` color. This hook will also show a `focusOutline`
 * ring when the input is focused. Note: You should not rely on these colors alone to differentiate
 * alerts, but use them in combination with icons or hint text.
 * ```tsx
 * // Add here jsx pragma to use css
 * import {jsx} from '@emotion/react';
 * import React from 'react';
 * import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
 * import {useThemedRing} from '@workday/canvas-kit-react/common';
 *
 * export const MyInput = ({handleChange}) => {
 *  const [value, setValue] = React.useState('invalid@email');
 *  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 *    setValue(event.target.value);
 *  };
 *
 *  const alertStyles = useThemedRing('alert');
 *
 *  return (
 *    <TextInput>
 *     <TextInput.Label>Email</TextInput.Label>
 *      <TextInput.Field css={alertStyles} onChange={handleChange} value={value} />
 *      <TextInput.Hint>Please enter a valid email.</TextInput.Hint>
 *    </TextInput>
 *  );
 * };
 *```
 */
export const useThemedRing = (type: paletteSelection): CSSProperties => {
  const theme = useTheme();

  const paletteColors = getPaletteColorsForFocusRing(type, theme);
  if (!(paletteColors?.outer || paletteColors?.inner)) {
    return {};
  }
  const errorBoxShadow = `inset 0 0 0 ${paletteColors.outer === paletteColors.inner ? 1 : 2}px ${
    paletteColors.inner
  }`;

  return {
    borderColor: paletteColors.outer,
    transition: '100ms box-shadow',
    boxShadow: errorBoxShadow,
    '&:hover, &:disabled': {
      borderColor: paletteColors.outer,
    },
    '&:focus:not([disabled])': {
      borderColor: paletteColors.outer,
      boxShadow: `${errorBoxShadow},
        0 0 0 2px ${cssVar(system.color.border.input.inverse)},
        0 0 0 4px ${
          theme ? theme.canvas.palette.common.focusOutline : cssVar(brand.common.focusOutline)
        }`,
    },
  };
};
