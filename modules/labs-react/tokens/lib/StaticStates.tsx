import * as React from 'react';
import {
  useTheme,
  CanvasProvider,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';

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
