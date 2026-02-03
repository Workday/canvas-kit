import * as React from 'react';
import {
  useTheme,
  CanvasProvider,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
  StyleRewriteFn,
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
      theme?: PartialEmotionCanvasTheme;
      className?: React.HTMLAttributes<HTMLElement>['className'];
    } & React.HTMLAttributes<HTMLElement>
  >
> = ({children, theme, className, ...elemProps}) => {
  const localTheme: EmotionCanvasTheme & {_styleRewriteFn?: StyleRewriteFn} = useTheme(theme);
  localTheme._styleRewriteFn = convertToStaticStates;
  console.log('className', className);
  return (
    <CanvasProvider theme={localTheme} className={className} {...elemProps}>
      {children}
    </CanvasProvider>
  );
};
