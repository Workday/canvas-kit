"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[2841],{"./modules/react/text/stories/Heading.stories.ts":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;var _Heading=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./modules/react/text/stories/Heading.mdx")),_text=__webpack_require__("./modules/react/text/index.ts"),_Basic=__webpack_require__("./modules/react/text/stories/examples/Heading/Basic.tsx");exports.default={title:"Components/Text/Heading",component:_text.Heading,tags:["autodocs"],parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import {Meta, StoryObj} from \'@storybook/react\';\\n\\nimport mdxDoc from \'./Heading.mdx\';\\n\\nimport {Heading} from \'@workday/canvas-kit-react/text\';\\n\\nimport {Basic as BasicExample} from \'./examples/Heading/Basic\';\\n\\nexport default {\\n  title: \'Components/Text/Heading\',\\n  component: Heading,\\n  tags: [\'autodocs\'],\\n  parameters: {\\n    docs: {\\n      page: mdxDoc,\\n    },\\n  },\\n} as Meta<typeof Heading>;\\n\\ntype Story = StoryObj<typeof Heading>;\\n\\nexport const Basic: Story = {\\n  render: BasicExample,\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "Basic": {\n    "startLoc": {\n      "col": 28,\n      "line": 22\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 24\n    },\n    "startBody": {\n      "col": 28,\n      "line": 22\n    },\n    "endBody": {\n      "col": 1,\n      "line": 24\n    }\n  }\n};\n    \nimport {Meta, StoryObj} from \'@storybook/react\';\n\nimport mdxDoc from \'./Heading.mdx\';\n\nimport {Heading} from \'@workday/canvas-kit-react/text\';\n\nimport {Basic as BasicExample} from \'./examples/Heading/Basic\';\n\nexport default {\n  title: \'Components/Text/Heading\',\n  component: Heading,\n  tags: [\'autodocs\'],\n  parameters: {\n  "storySource": {\n    "source": "import {Meta, StoryObj} from \'@storybook/react\';\\n\\nimport mdxDoc from \'./Heading.mdx\';\\n\\nimport {Heading} from \'@workday/canvas-kit-react/text\';\\n\\nimport {Basic as BasicExample} from \'./examples/Heading/Basic\';\\n\\nexport default {\\n  title: \'Components/Text/Heading\',\\n  component: Heading,\\n  tags: [\'autodocs\'],\\n  parameters: {\\n    docs: {\\n      page: mdxDoc,\\n    },\\n  },\\n} as Meta<typeof Heading>;\\n\\ntype Story = StoryObj<typeof Heading>;\\n\\nexport const Basic: Story = {\\n  render: BasicExample,\\n};\\n",\n    "locationsMap": {\n      "basic": {\n        "startLoc": {\n          "col": 28,\n          "line": 22\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 24\n        },\n        "startBody": {\n          "col": 28,\n          "line": 22\n        },\n        "endBody": {\n          "col": 1,\n          "line": 24\n        }\n      }\n    }\n  }\n,\n    docs: {\n      page: mdxDoc,\n    },\n  },\n} as Meta<typeof Heading>;\n\ntype Story = StoryObj<typeof Heading>;\n\nexport const Basic: Story = {\n  render: BasicExample,\n};\n',locationsMap:{basic:{startLoc:{col:28,line:73},endLoc:{col:1,line:75},startBody:{col:28,line:73},endBody:{col:1,line:75}}}},storySource:{source:"import {Meta, StoryObj} from '@storybook/react';\n\nimport mdxDoc from './Heading.mdx';\n\nimport {Heading} from '@workday/canvas-kit-react/text';\n\nimport {Basic as BasicExample} from './examples/Heading/Basic';\n\nexport default {\n  title: 'Components/Text/Heading',\n  component: Heading,\n  tags: ['autodocs'],\n  parameters: {\n    docs: {\n      page: mdxDoc,\n    },\n  },\n} as Meta<typeof Heading>;\n\ntype Story = StoryObj<typeof Heading>;\n\nexport const Basic: Story = {\n  render: BasicExample,\n};\n",locationsMap:{basic:{startLoc:{col:28,line:22},endLoc:{col:1,line:24},startBody:{col:28,line:22},endBody:{col:1,line:24}}}},docs:{page:_Heading.default}}};exports.Basic={render:_Basic.Basic};module.exports.__namedExportsOrder=["Basic"]},"./modules/react/text/stories/Heading.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./modules/docs/index.ts"),_Heading_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./modules/react/text/stories/Heading.stories.ts"),_examples_Heading_Basic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./modules/react/text/stories/examples/Heading/Basic.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_Heading_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"canvas-kit-heading",children:"Canvas Kit Heading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Heading"})," provides a simple way to render heading-level text with built-in support for Canvas type\ntokens."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-sh",children:"yarn add @workday/canvas-kit-react\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Heading"})," is a Type Level component (along with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-text-title--basic",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Title"})}),",\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-text-body-text--basic",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BodyText"})}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-text-subtext--basic",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Subtext"})}),") built on top\nof ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-text-text--basic",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Text"})})," which provides a simple way to render heading-level text\naccording to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/tokens--type#type-styles",children:"Canvas type hierarchy"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Heading"})," renders an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<h2>"})," element by default with styles equivalent to\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"type.levels.heading[size]"}),". You may override the rendered element using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"as"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_Heading_Basic__WEBPACK_IMPORTED_MODULE_6__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"custom-styles",children:"Custom Styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Heading supports custom styling via the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"cs"})," prop. For more information, check our\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-how-to-customize-styles--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:'"How To Customize Styles"'}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.SymbolDoc,{name:"Heading",fileName:"/react/text/"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./modules/react/text/stories/examples/Heading/Basic.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Basic=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_text=__webpack_require__("./modules/react/text/index.ts");const Basic=()=>_react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_text.Heading,{as:"h4",size:"large"},"Large Heading Text"),_react.default.createElement(_text.Heading,{as:"h5",size:"medium"},"Medium Heading Text"),_react.default.createElement(_text.Heading,{as:"h6",size:"small"},"Small Heading Text"));exports.Basic=Basic,Basic.__RAW__='import React from \'react\';\nimport {Heading} from \'@workday/canvas-kit-react/text\';\n\nexport const Basic = () => (\n  <>\n    <Heading as="h4" size="large">\n      Large Heading Text\n    </Heading>\n    <Heading as="h5" size="medium">\n      Medium Heading Text\n    </Heading>\n    <Heading as="h6" size="small">\n      Small Heading Text\n    </Heading>\n  </>\n);\n'}}]);