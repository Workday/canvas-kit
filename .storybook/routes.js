// List of routes The key is the Canvas Site URL The value is the first Storybook example ID. This
// prevents odd scrolling. This file is used by the `webpack-loader-redirect-mdx-to-github` loader
// and will rewrite the URL to point to the correct URL for the story. The Storybook key will be
// rewritten to something like `?path=/docs/${id}`
const routes = {
  '/getting-started/introduction/': 'welcome-getting-started--page',
  '/assets/accent-icons/': 'tokens-icon-react--accent-icon',
  '/assets/applet-icons/': 'tokens-icon-react--applet-icon',
  '/assets/system-icons/': 'tokens-icon-react--system-icon',
  '/assets/applet-icons/': 'tokens-icon-react--applet-icon',
  '/tokens/color/': 'tokens-tokens-react--colors',
  '/tokens/depth/': 'tokens-tokens-react--depth',
  '/tokens/space/': 'tokens-tokens-react--space',
  '/tokens/type/': 'tokens-tokens-react--type',
  '/components/buttons/button/': 'components-buttons-button-react--primary',
  '/components/buttons/action-bar/': 'components-buttons-action-bar-react--basic',
  '/components/buttons/icon-button/': 'components-buttons-button-react-icon-button--circle',
  '/components/containers/card/': 'components-containers-card-react--basic',
  '/components/containers/side-panel/': 'preview-side-panel-react--basic',
  '/components/containers/table/': 'components-containers-table-react--basic',
  '/components/layout/box/': 'labs-common-box--as',
  '/components/layout/flex/': 'labs-layout-flex--usage',
  '/components/layout/stack/': 'labs-layout-stack--basic-stack',
  '/components/inputs/select/': 'preview-select-react-top-label--default',
  '/components/inputs/checkbox/': 'components-inputs-checkbox-react--basic',
  '/components/inputs/form-field/': 'components-inputs-form-field-react--basic',
  '/components/inputs/color-input/': 'components-inputs-color-picker-color-input-react--basic',
  '/components/inputs/text-input/': 'components-inputs-text-input-react--basic',
  '/components/inputs/radio/': 'components-inputs-radio-react--basic',
  '/components/inputs/switch/': 'components-inputs-switch-react--basic',
  '/components/indicators/banner/': 'components-indicators-banner-react--basic',
  '/components/indicators/loading-animation/':
    'components-indicators-loading-animation-react--basic',
  '/components/indicators/skeleton/': 'components-indicators-skeleton-react--basic',
  '/components/indicators/status-indicator/': 'components-indicators-status-indicator-react--basic',
  '/components/inputs/text-area/': 'components-inputs-textarea-react--basic',
  '/components/navigation/breadcrumbs/': 'preview-breadcrumbs-react--basic',
  '/components/navigation/header/': 'components-navigation-page-header-react--product-page-header',
  '/components/navigation/page-header/': 'labs-header-react--global-header',
  '/components/navigation/pagination/': 'components-navigation-pagination-react--step-controls',
  '/components/navigation/tabs/': 'components-containers-tabs-react--simple',
  '/components/popups/toast/': 'components-popups-toast-react--with-popper',
  '/components/popups/menu/': 'preview-menu-react--basic',
  '/components/popups/modal/': 'components-popups-modal-react--basic',
  '/components/popups/popup/': 'components-popups-popup-react--basic',
  '/components/popups/tooltip/': 'components-popups-tooltip-react--default-story',
  '/getting-started/for-developers/contributing/': 'welcome-contributing--page',
  '/getting-started/for-developers/resources/api-pattern-guidelines/':
    'welcome-dev-docs-api-pattern-guidelines--page',
  '/getting-started/for-developers/resources/compound-components/':
    'welcome-dev-docs-compound-components--page',
  '/getting-started/for-developers/resources/creating-compound-components/':
    'welcome-dev-docs-creating-compound-components--page',
  '/getting-started/for-developers/resources/testing/': 'welcome-dev-docs-testing--page',
  '/getting-started/for-developers/resources/4.0-migration-guide/':
    'welcome-migration-guides-v4-0--page',
  '/getting-started/for-developers/resources/5.0-migration-guide/':
    'welcome-migration-guides-v5-0--page',
};

module.exports = routes;
