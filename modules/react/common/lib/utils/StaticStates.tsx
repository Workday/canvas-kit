import * as React from 'react';
import {
  useTheme,
  CanvasProvider,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';
import {CSSProperties} from '@workday/canvas-kit-react/tokens';

export const convertToStaticStates = (obj?: CSSProperties): CSSProperties | undefined => {
  if (!obj) {
    return obj;
  }

  return Object.keys(obj).reduce((result, key) => {
    const newKey = key
      .replace(/^:/, '&:') // handle shorthand like ":focus"
      .replace(/,(\s+):/g, ',$1&:') // handle selectors like ":focus, :hover"
      .replace(/:(focus|hover|active)/g, '.$1')
      .replace(
        /\[data\-whatinput=("|')?(mouse|touch|keyboard|pointer)("|')?]/g,
        '[data-whatinput="noop"]'
      );
    const value =
      typeof obj[key] === 'object' ? convertToStaticStates(obj[key] as CSSProperties) : obj[key];
    const newObj = {...result, [newKey]: value};
    return newObj;
  }, {});
};

export const StaticStates: React.FC<{theme?: PartialEmotionCanvasTheme} & React.HTMLAttributes<
  HTMLElement
>> = ({children, theme, ...elemProps}) => {
  const localTheme: EmotionCanvasTheme & {_staticStates?: boolean} = useTheme(theme);
  localTheme._staticStates = true;

  return (
    <CanvasProvider theme={localTheme} {...elemProps}>
      {children}
    </CanvasProvider>
  );
};
