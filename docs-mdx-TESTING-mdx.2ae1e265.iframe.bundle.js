/*! For license information please see docs-mdx-TESTING-mdx.2ae1e265.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[6429],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./modules/docs/mdx/TESTING.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",em:"em",h3:"h3",a:"a",h2:"h2"},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Guides/Testing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"testing",children:"Testing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"canvas-kit"})," has 3 levels of testing: unit, functional and visual. Each area has special use-cases\neven though tests at various levels may overlap. Here's a simplified explanation of what each level\nis meant to test:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Unit"}),": This level is meant to test the input/output of units of functionality (e.g. utility\nfunctions or input props of components that output DOM)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Functional"}),": This level is browser-based testing and is where UI behavior and accessibility\nrequirements are specified (e.g. Given a modal example, When clicking on the button, Then the\nmodal should be open). Functional tests are against Storybook Stories."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Visual"}),": This level is where all styling is tested. Some props only have visual effects and it\nis difficult to reason about at any other level. All Storybook stories can be candidates for\nvisual regression based on an opt-in parameter."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'Tests are supposed to be a source of feedback and confidence. To achieve that, a test should be\nclear about intent and failures. Developers tend to ignore passing tests and focus only on failing\ntests. If the intent of the test cannot be determined, it is difficult to fix the test. If the\nfailure isn\'t immediately obvious, too much time is spent fixing the test. Canvas Kit adopts a BDD\n(behavior-driven development) approach of testing. The most common way to think is about behavior is\n"given/when/then". These behaviors are a series of specifications and not necessarily "tests".\nTesting in this repo is not just testing the correctness of our components, but running a series of\nspecifications. Specifications tend to be more granular to give context of what code is expected to\ndo. A "test" simply has to pass. A specification requires meaning.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Bad"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"test('SomeComponent should render correctly', async () => {\n  const {getByTestId} = render(<SomeComponent data-testid=\"test\" text=\"foo\" />);\n\n  const component = getByTestId('test');\n\n  expect(component.textContent).toEqual('foo');\n  expect(component.getAttribute('aria-label')).toEqual('foo');\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:['This is a "test" and not a specification, but a test that asserts multiple outputs. If any of the\nexpectations fail, the CI will output something like\n',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Failed: SomeComponent should render correctly"}),". The message doesn't give any indication of why any\nof the expectations would fail. Furthermore, the failures don't give much indication as to what is\nfailing. Without looking at the code, the failure message of the expectation will say something like\n\"Expected 2 to equal 1\" or \"Expected 'bar' to equal 'foo'\". Often to find out why the test fails,\nthe source code of the test has to be consulted and the test has to be debugged. After that, there\nis no context to why the failure even matters. This test doesn't give much feedback or confidence on\nfailure and thus isn't a very useful test."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Good"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"describe('SomeComponent', () => {\n  it('should render the \"text\" prop as the text', async () => {\n    const {getByTestId} = render(<SomeComponent data-testid=\"test\" text=\"foo\" />);\n\n    const component = getByTestId('test');\n    expect(component).toHaveTextContent('foo');\n  });\n\n  it('should render the \"text\" prop as an aria-label for accessibility', async () => {\n    const {getByTestId} = render(<SomeComponent data-testid=\"test\" text=\"foo\" />);\n\n    const component = getByTestId('test');\n    expect(component).toHaveAttribute('aria-label', 'foo');\n  });\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This series of specifications give more context to the test. It is more code, but it is clearer what\nthe intent of each specification is. If one fails, it will be easier to diagnose what and why. The\nassertions also make use of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"jest-dom"})," which gives more context into ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"how"})," it fails. Instead of a\ngeneric assertion, the CLI will output something like\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'Expected <div data-testid="test" aria-label="bar">bar</div> to have an "aria-label" of "foo" but received "bar"'}),".\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"The specification should tell us which spec failed and the assertion gives insight into how."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selectors",children:"Selectors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Accessible components tend to have ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"role"}),"s and ARIA attributes to help with selection of specific\nelements within a component. React Testing Library comes with some selection helpers based on these\nattributes. CSS class names should not be used for selecting components. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data-testid"})," should be\nused as a last resort and usually is reserved for examples or an application to help disambiguate\ncomponents. Hard-coded ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data-testid"})," should be avoided in component source code, but are fine in\nunit and functional tests provided the test supplies the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data-testid"})," to make the test more\nunderstandable. Additional info can be found\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Canvas Kit uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://jestjs.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Jest"}),",\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://testing-library.com/docs/react-testing-library/intro",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Testing Library"}),", and\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/testing-library/jest-dom",target:"_blank",rel:"nofollow noopener noreferrer",children:"jest-dom"})," which have a nice API for testing React\ncomponents. Unit tests should test inputs and outputs of utility functions or props and output of\ncomponents. For example, if documentation says that a component will pass extra props to a container\ncomponent, there should be a specification that verifies this claim. If a component's documentation\nstates that children will be rendered, a test should verify the children exist within the containing\ncomponent."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Good unit tests avoid too much implementation detail. For example, if a component states it will\nrender the children prop, the documentation and specifications shouldn't state where unless it is\nspecific to the functionality of the component. Tests here should define the API surface area that\nwill be guaranteed. The more implementation details, the more difficult the tests are to maintain."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Bad"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"const {container} = render(\n  <SomeComponent>\n    <div data-testid=\"test\">Test</div>\n  </SomeComponent>\n);\n\nexpect(container.children[0].children[0].textContent).toEqual('Test');\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This test encodes the DOM structure into it. Any changes to the source code will require a change to\nthe test making the test tightly coupled and fragile."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Good"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"const {getByTestId} = render(\n  <SomeComponent data-testid=\"container\">\n    <div data-testid=\"test\">Test</div>\n  </SomeComponent>\n);\n\nconst component = getByTestId('container');\nconst child = getByTestId('test');\n\nexpect(component).toContainElement(child);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This example is more flexible. The component can be refactored with DOM elements added or removed\nand the test will still pass as long as the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"div"})," is a child of the component somewhere (the\nspecification is met). Also this example will have a more useful failure message since\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".toContainElement"})," has the context that it is expecting an element in another element vs a match of\na string."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"snapshot-tests",children:"Snapshot tests"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Canvas Kit does not contain DOM-based snapshot tests and uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#visual-tests",children:"Visual Tests"})," instead.\nDOM snapshots failures are often difficult to parse. Humans tend to be better at noticing and\ndiscerning visual changes than changes to a DOM structure."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If your project uses snapshot tests and Canvas Kit, chances are you'll run into issues with changing\nids and other ARIA attributes. Canvas Kit generates unique ids that are different every time the\npage loads. This can be a problem with snapshot tests. To fix this, you'll need to add special code\nto your test bootstrap file. For example:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import {setUniqueSeed, resetUniqueIdCount} from '@workday/canvas-kit-react/common';\n\nbeforeEach(() => {\n  setUniqueSeed('a'); // set a static seed\n  resetUniqueIdCount(); // reset the id counter before every test\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This will ensure snapshot tests have stable ids for each snapshot. It is still possible to get ids\nchanging if you add an additional component that uses id generation - subsequent ids will be\ndifferent, but this will prevent snapshot tests that don't have any changes from showing diffs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Canvas Kit Styling package uses CSS Variables and multiple class names with unique hashes.\nThe following snapshot serializers handle styling. Setting unique seeds will not effect static style\nhashes because the styles are created before any test code is run. These serializers ignore the\nhashes instead."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:'// Handle `css-{hash}` class names\nconst emotionClassnameRegex = /(css-[a-zA-Z0-9]{1,7})/g;\nexpect.addSnapshotSerializer({\n  test: (val) => typeof val === "string" && emotionClassnameRegex.test(val),\n  print: (val) => {\n    return `"${val.replaceAll(emotionClassnameRegex, "css-xxxxx")}"`;\n  },\n});\n\n// Handle `--myVariableName-{hash}` CSS variables used by Stencils\nconst cssVariableRegex = /(--([a-zA-Z-]+)-[a-zA-Z0-9]{1,7})/g;\nexpect.addSnapshotSerializer({\n  test: (val) => typeof val === "string" && cssVariableRegex.test(val),\n  print: (val) => {\n    return `"${val.replaceAll(cssVariableRegex, "--$2-xxxxx")}"`;\n  },\n});\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"functional-tests",children:"Functional tests"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Canvas Kit uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://cypress.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"})," for browser-based behavior testing (additional info:\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/Workday/canvas-kit/tree/master/cypress/WHY_CYPRESS.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Why Cypress?"}),").\nFunctional tests ensure the code meets functional specifications from a user's perspective. All\nfunctional tests are written against a Storybook Story. Specifications can come from many different\nstakeholders including product management, user research, and accessibility. A functional test\nshould read in the Given/When/Then format and fit in well as acceptance criteria."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example of a usability specification: \"Given the modal example, when a user clicks the 'Delete Item'\nbutton, then the modal opens\"."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example of an accessibility specification: \"Given the modal example, when a user clicks the 'Delete\nItem' button, then the focus should be transferred to the first focusable element in the dialog\""}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'The BDD-style (behavior-driven development) syntax lends well to the nesting of actions performed on\na example (also called "story" borrowed from Storybook nomenclature). The wording used inside the\nBDD blocks should read in plain English and be understandable by non-developers. The implementation\nshould be as readable as possible by non-developers for trust and verification. The intent of the\nwording of the BDD-style syntax is to parse into an outline form and go into documentation as a\nverification of what specifications are covered.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"describe('Given the Default Modal is rendered', () => {\n  beforeEach(() => {\n    // render the default modal example\n  });\n\n  context('when the target button is clicked', () => {\n    beforeEach(() => {\n      // click the target button\n    });\n\n    it('should open the modal', () => {\n      // expect modal to be open\n    });\n  });\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The outline would look like:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Given the Default Modal is rendered","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["when the target button is clicked","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"then it should open the modal"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Tests should rely on ARIA attributes as much as possible for selecting and asserting. Test IDs\nshould be used only to disambiguate DOM elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Read ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Intro to Cypress"}),"\nfor an intro to how Cypress works. The core concept to Cypress is enqueued command chains that\ntypically wrap jQuery collections. Cypress uses jQuery, Mocha, Chai, Sinon, Lodash and Moment. All\nare exposed to the developer of the test."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Let's break that down. Cypress has a jQuery-like chainable API to select and interact with DOM\nnodes. Cypress controls when and how often a command is run to ensure assertions either pass or time\nout. This is most confusing to those who approach Cypress commands as Promises.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Not-Promises",target:"_blank",rel:"nofollow noopener noreferrer",children:"Commands are not Promises"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For example, imagine the following Cypress code:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"cy.get('body').contains('button', 'Delete Item').click();\n\ncy.get('[data-testid=\"MyResult\"]').should('contain', 'Success!');\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The Cypress Command queue will show ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"['get', 'contains', 'click', 'get', 'should']"}),", but it will not\nrun these commands immediately. There is also no need to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".then"})," to wait for any previous\ncondition to be met first. The Cypress run-time will do the following:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Run ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$('body')"})," every 50ms until ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$('body')"})," returns a non-empty jQuery collection."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Run a function that gets all ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"button"})," elements inside of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"body"})," element that have text content\nthat contains 'Delete Item' and that jQuery collection is not empty."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Ensure the previous element is clickable (visible, not covered, has actual width/height), waiting\n50ms to detect animations (waiting for animations to complete), etc. Basically, make sure a user\ncould actually click on it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Run ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$('[data-testid=\"MyResult\"]')"})," every 50ms until it returns a non-empty jQuery collection.\nUsually clicking has side-effects like network requests to the server before the side-effect is\nreflected in the DOM. Since Cypress implicitly retries, this command will ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"eventually"})," return a\nnon-empty jQuery collection and the author doesn't need to explicitly do anything. Note: this\nselector ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"could"}),' return a non-empty jQuery collection instantly, but it might not contain\n"Success!" yet...']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Run internal ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"chai"})," + ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"chai-jquery"})," matchers (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"expect($el).to.contain('Success!')"}),") until an error\nis no longer thrown. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".should"})," will re-run the previous command ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"and"})," the assertion until the\ncondition is met or a timeout occurs. This is the secret sauce to the stability of Cypress tests\ncompared to WebDriver. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".should"})," can also receive a function that will be run until no error is\nthrown. If an error is never thrown, it will only be run once."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Cypress is very easy to get started with, but there isn't enough documentation about how to scale a\ncomplicated suite of Cypress tests."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"component-helpers",children:"Component helpers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Component helpers should be written to help with automation. These component helpers are useful for\na more readable implementation as well as more maintainable test code. Component helpers can also be\nexported by this repository for use in downstream testing (e.g. Cypress tests in applications that\nuse Canvas Kit). Helpers contain implementation details about how components are composed\ninternally. The goal is that if the component's implementation changes, the component helpers should\nbe the only code that needs to change to keep tests passing."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Component helpers come in 3 flavors:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Starter"}),": This helper type starts a Cypress chain. The return type is always\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Cypress.Chainable<JQuery>"})," and usually contains a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"cy.get"})," and the selector usually contains\nsomething that is unique to that component type. For example, the Modal helper uses\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[role=dialog]"})," with an option to disambiguate with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data-testid"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Scoping"}),": Imagine a web application is a collection of boxes that determine how components of\nan application are laid out. A scoping helper takes in a larger box and returns a smaller box,\nfurther reducing the scope. Ideally these helpers contain no Cypress commands (which are\nasynchronous), only jQuery calls (which are synchronous). Synchronous helper functions can be run\nmore than once at the discretion of the Cypress runtime. A good use-case for this type is to\nreplace CSS selectors."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Action"}),": Cypress comes with many baked in action commands such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"click"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"type"}),'. A custom\naction is useful to give a higher level semantic meaning to a series of low-level commands. For\nexample, a Select component might compose a Popup and a virtualized menu. This action may include\nopening the select, finding the popup element, seeing if the desired item is currently visible,\nscrolling the virtualized menu until the desired item is visible and clicking on the item. This\ncode would be repeated for every instance and has implementation knowledge of the component. A\nhigh-level semantic action might be called "select" that wraps up this implementation detail to\nfree up automation and development engineers to think about the test case and not about\nimplementation details.']}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"visual-tests",children:"Visual Tests"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Canvas Kit uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.chromaticqa.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"ChromaticQA"})," for visual tests which are run on\nstories that are opted-in through a special parameter. All the visual states should be represented\nat least one story. This way all of the visual states of a component can be visually regression\ntested without requiring the test to interact with the UI. These states should include loading\nstates, error states, etc. Stories created for visual regression tests should avoid dynamic\nsolutions like ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/storybookjs/storybook/tree/next/addons/knobs",target:"_blank",rel:"nofollow noopener noreferrer",children:"knobs"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To make a story runnable in Chromatic for visual testing, add the following to the story's parameter\nlist:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"// CSF - All stories in file\nexport default withSnapshotsEnabled({\n  // CSF details (title, component, etc.)\n});\n\n// or CSF - Specific story\nexport const MyVisualStory = () => {\n  // story contents\n};\n\nwithSnapshotsEnabled(MyVisualStory);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Not all visual states are application states (E.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"focus"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hover"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"active"})," on a button\nelement). For these pseudo-selectors, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StaticStates"})," wrapper can be used where pseudo-selectors\nare turned into CSS class names instead (E.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:":focus"})," turns into ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".focus"}),") and a class name can be\nadded to the component. Note: this turns off the psuedo-selectors entirely."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The following will render a button where the focus styling is always applied:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'export const States = () => {\n  <StaticStates>\n    <SecondaryButton className="focus">My Button</SecondaryButton>\n  </StaticStates>;\n};\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note:"})," This will only work correctly if the component passes on extra attributes to a container\nthat contains pseudo-selector code (most components do this). If a pseudo-selector is defined on an\nelement inside the container, this won't work."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StaticStates"})," allows for visual styling, like focus rings, to be tested automatically."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Some components may be harder to test statically due to animations or require user interaction\nnormally. For example, Toasts animate in and Tooltips require a user to mouse-over the target\nelement. Components should be written in a way that allows these animations to be disabled."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"summary",children:"Summary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Unit tests should cover APIs exposed to developers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Functional tests should be written as a series of specifications of behavior and accessibility"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Visual tests should cover all visually representable states of components"}),"\n"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);