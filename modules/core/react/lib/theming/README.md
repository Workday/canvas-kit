### Custom Theme

Example:

```tsx
import {
  CanvasProvider,
  PartialCanvasTheme,
  createCanvasTheme,
} from '@workday/canvas-kit-react-core';

const theme: PartialCanvasTheme = {
  palette: {
    primary: {
      main: 'orange',
    },
  },
};

<CanvasProvider theme={createCanvasTheme(theme)}>
  {/* Your app with Canvas components */}
</CanvasProvider>;
```
