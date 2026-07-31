import {ThemeProvider} from '@emotion/react';
import * as React from 'react';

import {
  CanvasProvider,
  CanvasProviderTheme,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
  StyleRewriteFn,
  isNumericalTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {CSSProperties} from '@workday/canvas-kit-react/tokens';

export const convertToStaticStates: StyleRewriteFn = obj => {
  if (!obj) {
    return obj;
  }

  return Object.keys(obj).reduce((result, key) => {
    const newKey = key
      .replace(/^:/, '&:') // handle shorthand like ":focus"
      .replace(/,(\s+):/g, ',$1&:') // handle selectors like ":focus, :hover"
      .replace(/:(focus|hover|active)/g, '.$1');

    // Remove any selectors that use data-whatinput. Leaving them in would cause focus rings to disappear when the user clicks with a mouse.
    if (/data-whatinput/.test(key)) {
      return result;
    }
    const value =
      typeof obj[key] === 'object' ? convertToStaticStates(obj[key] as CSSProperties) : obj[key];
    const newObj = {...result, [newKey]: value};
    return newObj;
  }, {} as CSSProperties);
};

export const StaticStates: React.FC<
  React.PropsWithChildren<
    {
      theme?: CanvasProviderTheme;
      className?: React.HTMLAttributes<HTMLElement>['className'];
    } & React.HTMLAttributes<HTMLElement>
  >
> = ({children, theme, className, ...elemProps}) => {
  const localTheme: EmotionCanvasTheme & {_styleRewriteFn?: StyleRewriteFn} = useTheme(
    theme && !isNumericalTheme(theme) ? (theme as PartialEmotionCanvasTheme) : undefined
  );
  localTheme._styleRewriteFn = convertToStaticStates;

  // Nest ThemeProvider *inside* CanvasProvider so CanvasProvider's own ThemeProvider
  // (used for legacy Emotion theme consumers) does not wipe `_styleRewriteFn`.
  return (
    <CanvasProvider className={className} {...elemProps} theme={theme}>
      <ThemeProvider theme={localTheme}>{children}</ThemeProvider>
    </CanvasProvider>
  );
};
