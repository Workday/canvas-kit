// TODO: A semi-shoddy hack to enable syntax highlighting for tsx in storybook-readme.
// Probably should open a PR to put tsx in storybook-readme instead?
// import 'prismjs/components/prism-tsx';

import {addons} from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme,
});
