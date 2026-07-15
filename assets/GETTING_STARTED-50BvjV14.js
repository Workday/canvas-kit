import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as o}from"./index-qPwveHR6.js";import"./index-IfJi-UCQ.js";import"./iframe-BY-DvtE3.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Workday Canvas Kit"}),`
`,e.jsxs(n.p,{children:[`This project provides a set of components for the Workday Canvas Design System that can be used to
implement user experiences consistent with
`,e.jsx(n.a,{href:"https://canvas.workdaydesign.com/",children:"Workday's design principles"}),"."]}),`
`,`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Getting Started"}),`
`,e.jsx(n.h3,{children:"React"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Dependency Version Support"})}),`
`,e.jsx(n.p,{children:"The following are supported versions of dependencies."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"React: >=17.0"}),`
`,e.jsx(n.li,{children:"Typescript: >=5.0 (optional)"}),`
`,e.jsx(n.li,{children:"Emotion: ^11.7.0"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Installation"})}),`
`,e.jsx(n.p,{children:"To get started using Canvas kit React first add or install the module to your existing React project"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react @workday/canvas-tokens-web
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @workday/canvas-kit-react @workday/canvas-tokens-web
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," If your application does not already provide ",e.jsx(n.code,{children:"Roboto"}),` as a font, you can install
`,e.jsx(n.code,{children:"@workday/canvas-kit-react-fonts"}),`. The example below shows how to inject the fonts, but you can
omit this if you're already loading fonts.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Usage"})}),`
`,e.jsxs(n.p,{children:["To ensure fonts are loaded correctly, update your root ",e.jsx(n.code,{children:"index.js"})," file."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {createRoot} from 'react-dom/client';
import {injectGlobal} from '@emotion/css';
import {fonts} from '@workday/canvas-kit-react-fonts';
import {system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/component/_variables.css';
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
    ...system.type.body.sm,
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
`})}),`
`,e.jsxs(n.p,{children:["The in your ",e.jsx(n.code,{children:"App.js"})," you can set a global theme."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const App = () => {
  return (
    <CanvasProvider>
      <main>
        <p>Get Started With Canvas Kit</p>
      </main>
    </CanvasProvider>
  );
};
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Don't use the ",e.jsx(n.code,{children:"CanvasProvider"}),` to theme, instead use our CSS tokens from
`,e.jsx(n.code,{children:"@workday/canvas-tokens-web"}),`. For more information, view our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs",children:"Token docs"}),`.
Theming should be global.`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Reporting a Bug"}),`
`,e.jsxs(n.p,{children:[`If you spot a bug, inconsistency, or typo, please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",children:"open a bug issue"}),`.
Better yet, submit a pull request to address it.`]}),`
`,e.jsx(n.h2,{children:"Feature Requests"}),`
`,e.jsxs(n.p,{children:[`If you have an idea, we would love to hear about it. The best way to suggest a feature is to
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=feature&template=feature.md",children:"open a feature issue"}),`.
The Canvas Kit core team will take a look and discuss it with you.`]}),`
`,e.jsx(n.h2,{children:"Contributing"}),`
`,e.jsxs(n.p,{children:[`Want to contribute to Canvas Kit React? Please read our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs",children:"contributing guidelines"}),`
to find out more and how to get started.`]}),`
`,e.jsx(n.h2,{children:"Maintaining"}),`
`,e.jsxs(n.p,{children:[`If you're a Canvas Kit maintainer, please read our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-maintaining--docs",children:"maintaining docs"}),` to
learn more about our processes.`]}),`
`,e.jsx(n.h2,{children:"Open Development"}),`
`,e.jsxs(n.p,{children:["All work on the Canvas Kit happens directly on ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit",children:"GitHub"}),`. Both
core team members and external contributors can send pull requests which go through the same review
process. Any and all issues are public and available for discussion.`]}),`
`,e.jsx(n.h2,{children:"Versioning"}),`
`,e.jsxs(n.p,{children:["Canvas Kit follows ",e.jsx(n.a,{href:"https://semver.org/",children:"semantic versioning"}),` and is enforced automatically by
`,e.jsx(n.a,{href:"https://www.conventionalcommits.org/",children:"conventional commits"}),` (see
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs#commit-message-format",children:'"Commit Message Format"'}),")."]}),`
`,e.jsxs(n.p,{children:["Each module is independently versioned using ",e.jsx(n.a,{href:"https://github.com/lerna/lerna",children:"Lerna"}),"."]}),`
`,e.jsx(n.h2,{children:"Version Support"}),`
`,e.jsx(n.p,{children:`At any given time, we support three major versions of Canvas Kit: previous, current, and next. Each
of these has different levels of support.`}),`
`,e.jsx(n.p,{children:`The previous major version is stable for production and will receive patch updates as needed, but
there will be no new features added. Patch releases are automatically deployed upon merge by GitHub
Actions.`}),`
`,e.jsx(n.p,{children:`The current major version is also stable and receives new features and patch updates. Patch releases
are automatically deployed upon merge by GitHub Actions, and minor releases are manually deployed at
the end of each sprint.`}),`
`,e.jsx(n.p,{children:`The next major version is typically an unstable environment and has major breaking changes. You are
welcome to pull this version down for local development and experimentation, but we generally
recommend against using it in production until the first stable version has been released.`}),`
`,e.jsx(n.h2,{children:"Developer Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs",children:"Contributing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-contributing--docs#code-of-conduct",children:"Code of Conduct"})}),`
`,e.jsxs(n.li,{children:["Upgrade Guides:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v4-0--docs",children:"v4.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v5-0--docs",children:"v5.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v6-0--docs",children:"v6.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v7-0--docs",children:"v7.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v8-0--docs",children:"v8.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v9-0--docs",children:"v9.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v10-0--docs",children:"v10.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v11-0--docs",children:"v11.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v12-0--docs",children:"v12.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v13-0--docs",children:"v13.0 Upgrade Guide"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v14-0-overview--docs",children:"v14.0 Upgrade Guide"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Code Style / Best Practices:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-api-pattern-guidelines--docs",children:"API & Pattern Guidelines"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-compound-components--docs",children:"Compound Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-creating-compound-components--docs",children:"Creating Compound Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-testing--docs",children:"Testing"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{children:"License"}),`
`,e.jsx(n.p,{children:"The Workday Canvas Kits are licensed under the Apache 2.0 License."}),`
`,e.jsx(n.h2,{children:"Supported Browsers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Microsoft Edge: last 2 versions"}),`
`,e.jsx(n.li,{children:"Mozilla Firefox: last 2 versions"}),`
`,e.jsx(n.li,{children:"Google Chrome: last 2 versions"}),`
`,e.jsx(n.li,{children:"Apple Safari: last 2 versions"}),`
`,e.jsx(n.li,{children:"Opera: last 2 versions"}),`
`]}),`
`,e.jsx(n.h2,{children:"Thank you"}),`
`,e.jsxs(n.p,{children:["Visual Testing by ",e.jsx(n.a,{href:"https://www.chromaticqa.com/",children:"ChromaticQA"})]}),`
`,e.jsxs(n.p,{children:["Builds by ",e.jsx(n.a,{href:"https://docs.github.com/en/actions",children:"Github Actions"})]})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}function r(s){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Getting Started"}),`
`,e.jsx(a,{})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r()}export{v as default};
