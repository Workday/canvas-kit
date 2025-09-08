import {createRoot} from 'react-dom/client';
import {fonts} from '@workday/canvas-kit-react-fonts';
import {system} from '@workday/canvas-tokens-web';
import {injectGlobal} from '@workday/canvas-kit-styling';
import {App} from './App';

import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

//@ts-ignore
injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: system.fontFamily.default,
    margin: 0,
    minHeight: '100vh',
  },
  '#root, #root < div': {
    minHeight: '100vh',
    ...system.type.body.small,
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
