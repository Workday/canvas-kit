// List of routes The key is the Canvas Site URL The value is the first Storybook example ID. This
// prevents odd scrolling. This file is used by the `webpack-loader-redirect-mdx-to-github` loader
// and will rewrite the URL to point to the correct URL for the story. The Storybook key will be
// rewritten to something like `?path=/docs/${id}`
const routes = {
  '/assets/accent-icons/': 'tokens-icon--accent-icon',
  '/assets/applet-icons/': 'tokens-icon--applet-icon',
  '/assets/applet-icons/': 'tokens-icon--applet-icon',
  '/assets/system-icons/': 'tokens-icon--system-icon',
  '/components/buttons/action-bar/': 'components-buttons-action-bar--basic',
  '/components/buttons/button/': 'components-buttons--primary',
  '/components/buttons/segmented-control/': 'preview-segmented-control--basic',
  '/components/containers/card/': 'components-containers-card--basic',
  '/components/containers/side-panel/': 'preview-side-panel--basic',
  '/components/containers/table/': 'components-containers-table--basic',
  '/components/containers/tabs/': 'components-containers-tabs--basic',
  '/components/indicators/banner/': 'components-indicators-banner--basic',
  '/components/indicators/loading-dots/': 'components-indicators-loading-dots--basic',
  '/components/indicators/skeleton/': 'components-indicators-skeleton--basic',
  '/components/indicators/status-indicator/': 'components-indicators-status-indicator--basic',
  '/components/inputs/checkbox/': 'components-inputs-checkbox--basic',
  '/components/inputs/color-input/': 'components-inputs-color-picker-color-input--basic',
  '/components/inputs/form-field/': 'components-inputs-form-field--basic',
  '/components/inputs/radio/': 'components-inputs-radio--basic',
  '/components/inputs/select/': 'preview-select-top-label--default',
  '/components/inputs/switch/': 'components-inputs-switch--basic',
  '/components/inputs/text-area/': 'components-inputs-textarea--basic',
  '/components/inputs/text-input/': 'components-inputs-text-input--basic',
  '/components/layout/box/': 'components-layout-box--basic',
  '/components/layout/flex/': 'components-layout-flex--basic',
  '/components/layout/grid/': 'components-layout-grid--basic',
  '/components/navigation/breadcrumbs/': 'components-navigation-breadcrumbs--basic',
  '/components/navigation/pagination/': 'components-navigation-pagination--basic',
  '/components/popups/menu/': 'components-popups-menu--basic',
  '/components/popups/modal/': 'components-popups-modal--basic',
  '/components/popups/popup/': 'components-popups-popup--basic',
  '/components/popups/toast/': 'components-popups-toast--basic',
  '/components/popups/tooltip/': 'components-popups-tooltip--default-story',
  '/components/text/body-text/': 'components-text-body-text--basic',
  '/components/text/heading/': 'components-text-heading--basic',
  '/components/text/label-text/': 'components-text-label-text--basic',
  '/components/text/subtext/': 'components-text-subtext--basic',
  '/components/text/text/': 'components-text-text--basic',
  '/components/text/title/': 'components-text-title--basic',
  '/examples/layout/': 'examples-layouts--area-column-positioning',
  '/getting-started/for-developers/contributing/': 'guides-contributing--page',
  '/getting-started/for-developers/resources/api-pattern-guidelines/':
    'guides-api-pattern-guidelines--page',
  '/getting-started/for-developers/resources/collection-api/': 'features-collections--basic',
  '/getting-started/for-developers/resources/compound-components/':
    'guides-compound-components--page',
  '/getting-started/for-developers/resources/creating-compound-components/':
    'guides-creating-compound-components--page',
  '/getting-started/for-developers/resources/responsive-styling/':
    'features-responsive-styling--responsive-container',
  '/getting-started/for-developers/resources/style-props/':
    'features-style-props--background-example',
  '/getting-started/for-developers/resources/testing/': 'guides-testing--page',
  '/getting-started/introduction/': 'guides-getting-started--page',
  '/tokens/color/': 'tokens--colors',
  '/tokens/depth/': 'tokens--depth',
  '/tokens/space/': 'tokens--space',
  '/tokens/type/': 'tokens--type',
  '/utilities/testing/': 'hooks-and-utilities-testing--basic',
  '/whats-new/upgrade-guides/canvas-kit-v4-upgrade-guide/': 'guides-upgrade-guides-v4-0--page',
  '/whats-new/upgrade-guides/canvas-kit-v5-upgrade-guide/': 'guides-upgrade-guides-v5-0--page',
  '/whats-new/upgrade-guides/canvas-kit-v6-upgrade-guide/': 'guides-upgrade-guides-v6-0--page',
  '/whats-new/upgrade-guides/canvas-kit-v7-upgrade-guide/': 'guides-upgrade-guides-v7-0--page',
  '/whats-new/upgrade-guides/canvas-kit-v8-upgrade-guide/': 'guides-upgrade-guides-v8-0--page',
  '/whats-new/upgrade-guides/canvas-v9-upgrade-guide/': 'guides-upgrade-guides-v9-0--page',
};

module.exports = routes;
