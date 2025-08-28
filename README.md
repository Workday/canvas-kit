# Workday Canvas Kit

This project provides a set of components for the Workday Canvas Design System that can be used to
implement user experiences consistent with
[Workday's design principles](https://design.workday.com/).

<a href="./LICENSE">
  <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Workday Canvas Kit is released under the Apache-2.0 license" />
</a>
<a href="https://lerna.js.org">
  <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
</a>
<a href="https://github.com/Workday/canvas-kit/actions/workflows/release.yml">
  <img alt="Release" src="https://github.com/Workday/canvas-kit/actions/workflows/release.yml/badge.svg">
</a>
<a href="./modules/docs/mdx/CONTRIBUTING.mdx">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
</a>

---

## Getting Started

### React

**Dependency Version Support**

The following are supported versions of dependencies.

* React:  >=16.8 < 17
* Typescript: >=5.0 (optional)
* Emotion: ^11.7.0

**Installation**

To get started using Canvas kit React first add or install the module to your existing React project

```sh
yarn add @workday/canvas-kit-react @workday/canvas-tokens-web
```

or

```sh
npm install @workday/canvas-kit-react @workday/canvas-tokens-web
```

> **Note:** If your application does not already provide `Roboto` as a font, you can install
> `@workday/canvas-kit-react-fonts`. The example below shows how to inject the fonts, but you can
> omit this if you're already loading fonts.

**Usage**

To ensure fonts are loaded correctly, update your root `index.js` file.

```jsx
import {createRoot} from 'react-dom/client';
import {injectGlobal} from '@emotion/css';
import {fonts} from '@workday/canvas-kit-react-fonts';
import {system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

import {App} from './App';

injectGlobal({
  ...fonts,
  'html, body': {
    fontFamily: cssVar(system.fontFamily.default),
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
```

The in your `App.js` you can set a global theme.

```jsx
import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';

export const App = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing
  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    canvas: {
      // Switch to `ContentDirection.RTL` to change direction
      direction: ContentDirection.LTR,
    },
  });

  return (
    <CanvasProvider theme={canvasTheme}>
      <>
        <main>
          <p>Get Started With Canvas Kit</p>
        </main>
      </>
    </CanvasProvider>
  );
};
```

## Reporting a Bug

If you spot a bug, inconsistency, or typo, please
[open a bug issue](https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md).
Better yet, submit a pull request to address it.

## Feature Requests

If you have an idea, we would love to hear about it. The best way to suggest a feature is to
[open a feature issue](https://github.com/Workday/canvas-kit/issues/new?labels=feature&template=feature.md).
The Canvas Kit core team will take a look and discuss it with you.

## Contributing

Want to contribute to Canvas Kit React? Please read our
[contributing guidelines](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs)
to find out more and how to get started.

## Maintaining

If you're a Canvas Kit maintainer, please read our
[maintaining docs](https://workday.github.io/canvas-kit/?path=/docs/guides-maintaining--docs) to
learn more about our processes.

## Open Development

All work on the Canvas Kit happens directly on [GitHub](https://github.com/Workday/canvas-kit). Both
core team members and external contributors can send pull requests which go through the same review
process. Any and all issues are public and available for discussion.

## Versioning

Canvas Kit follows [semantic versioning](https://semver.org/) and is enforced automatically by
[conventional commits](https://www.conventionalcommits.org/) (see
["Commit Message Format"](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs#commit-message-format)).

Each module is independently versioned using [Lerna](https://github.com/lerna/lerna).

## Version Support

At any given time, we support three major versions of Canvas Kit: previous, current, and next. Each
of these has different levels of support.

The previous major version is stable for production and will receive patch updates as needed, but
there will be no new features added. Patch releases are automatically deployed upon merge by GitHub
Actions.

The current major version is also stable and receives new features and patch updates. Patch releases
are automatically deployed upon merge by GitHub Actions, and minor releases are manually deployed at
the end of each sprint.

The next major version is typically an unstable environment and has major breaking changes. You are
welcome to pull this version down for local development and experimentation, but we generally
recommend against using it in production until the first stable version has been released.

## Developer Documentation

- [Contributing](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs)
- [Code of Conduct](https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs#code-of-conduct)
- Upgrade Guides:
  - [v4.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v4-0--docs)
  - [v5.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v5-0--docs)
  - [v6.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v6-0--docs)
  - [v7.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v7-0--docs)
  - [v8.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v8-0--docs)
  - [v9.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v9-0--docs)
  - [v10.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v10-0--docs)
  - [v11.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v11-0--docs)
  - [v12.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v12-0--docs)
  - [v13.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v13-0--docs)
  - [v14.0 Upgrade Guide](https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v14-0--docs)
- Code Style / Best Practices:
  - [API & Pattern Guidelines](https://workday.github.io/canvas-kit/?path=/docs/guides-api-pattern-guidelines--docs)
  - [Compound Components](https://workday.github.io/canvas-kit/?path=/docs/guides-compound-components--docs)
  - [Creating Compound Components](https://workday.github.io/canvas-kit/?path=/docs/guides-creating-compound-components--docs)
  - [Testing](https://workday.github.io/canvas-kit/?path=/docs/guides-testing--docs)

## License

The Workday Canvas Kits are licensed under the Apache 2.0 License.

## Supported Browsers

- Microsoft Edge: last 2 versions
- Mozilla Firefox: last 2 versions
- Google Chrome: last 2 versions
- Apple Safari: last 2 versions
- Opera: last 2 versions

## Thank you

Visual Testing by [ChromaticQA](https://www.chromaticqa.com/)

Builds by [Github Actions](https://docs.github.com/en/actions)
