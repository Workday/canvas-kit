import * as React from 'react';
import {Theme, ThemeProvider} from '@emotion/react';
import {InputProvider} from './InputProvider';
import {
  CanvasTheme,
  defaultCanvasTheme,
  getCanvasTheme,
  PartialEmotionCanvasTheme,
  useCanvasTheme,
  useTheme,
} from './theming';

export interface CanvasProviderProps {
  theme: PartialEmotionCanvasTheme | CanvasTheme;
  children: React.ReactNode;
}

// export class CanvasProvider extends React.Component<
//   CanvasProviderProps & React.HTMLAttributes<HTMLElement>
// > {
//   static defaultProps = {
//     theme: {
//       canvas: defaultCanvasTheme,
//     },
//   };

//   render() {
//     const {children, theme, ...elemProps} = this.props;
//     const canvasTheme = useCanvasTheme();
//     return (
//       <ThemeProvider theme={canvasTheme as Theme}>
//         <InputProvider />
//         <div
//           dir={(theme.canvas && theme.canvas.direction) || defaultCanvasTheme.direction}
//           {...(elemProps as React.HTMLAttributes<HTMLDivElement>)}
//         >
//           {children}
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

export const CanvasProvider: React.FC<CanvasProviderProps> = ({children, theme, ...elemProps}) => {
  // const canvasTheme = useCanvasTheme(theme);
  // console.warn(canvasTheme);
  return (
    <ThemeProvider theme={theme}>
      <InputProvider />
      <div
        dir={(theme.canvas && theme.canvas.direction) || defaultCanvasTheme.direction}
        {...(elemProps as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
