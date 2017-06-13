import 'storybook-readme/register';
// TODO: A semi-shoddy hack to enable syntax highlighting for tsx in storybook-readme.
// Probably should open a PR to put tsx in storybook-readme instead?
import 'prismjs/components/prism-tsx';

import '@storybook/addon-actions/register';
import '@storybook/addon-options/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-knobs/register';
