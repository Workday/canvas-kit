"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[7129],{"./modules/react/status-indicator/stories/StatusIndicator.stories.ts":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.MaxWidth=exports.Icon=exports.Emphasis=exports.Basic=void 0;var _StatusIndicator=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./modules/react/status-indicator/stories/StatusIndicator.mdx")),_statusIndicator=__webpack_require__("./modules/react/status-indicator/index.ts"),_Basic=__webpack_require__("./modules/react/status-indicator/stories/examples/Basic.tsx"),_Icon=__webpack_require__("./modules/react/status-indicator/stories/examples/Icon.tsx"),_Emphasis=__webpack_require__("./modules/react/status-indicator/stories/examples/Emphasis.tsx"),_MaxWidth=__webpack_require__("./modules/react/status-indicator/stories/examples/MaxWidth.tsx");exports.default={title:"Components/Indicators/Status Indicator",component:_statusIndicator.StatusIndicator,tags:["autodocs"],parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import {Meta, StoryObj} from \'@storybook/react\';\\n\\nimport mdxDoc from \'./StatusIndicator.mdx\';\\n\\nimport {StatusIndicator} from \'@workday/canvas-kit-react/status-indicator\';\\n\\nimport {Basic as BasicExample} from \'./examples/Basic\';\\nimport {Icon as IconExample} from \'./examples/Icon\';\\nimport {Emphasis as EmphasisExample} from \'./examples/Emphasis\';\\nimport {MaxWidth as MaxWidthExample} from \'./examples/MaxWidth\';\\n\\nexport default {\\n  title: \'Components/Indicators/Status Indicator\',\\n  component: StatusIndicator,\\n  tags: [\'autodocs\'],\\n  parameters: {\\n    docs: {\\n      page: mdxDoc,\\n    },\\n  },\\n} as Meta<typeof StatusIndicator>;\\n\\ntype Story = StoryObj<typeof StatusIndicator>;\\n\\nexport const Basic: Story = {\\n  render: BasicExample,\\n};\\nexport const Icon: Story = {\\n  render: IconExample,\\n};\\nexport const Emphasis: Story = {\\n  render: EmphasisExample,\\n};\\nexport const MaxWidth: Story = {\\n  render: MaxWidthExample,\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "Basic": {\n    "startLoc": {\n      "col": 28,\n      "line": 25\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 27\n    },\n    "startBody": {\n      "col": 28,\n      "line": 25\n    },\n    "endBody": {\n      "col": 1,\n      "line": 27\n    }\n  },\n  "Icon": {\n    "startLoc": {\n      "col": 27,\n      "line": 28\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 30\n    },\n    "startBody": {\n      "col": 27,\n      "line": 28\n    },\n    "endBody": {\n      "col": 1,\n      "line": 30\n    }\n  },\n  "Emphasis": {\n    "startLoc": {\n      "col": 31,\n      "line": 31\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 33\n    },\n    "startBody": {\n      "col": 31,\n      "line": 31\n    },\n    "endBody": {\n      "col": 1,\n      "line": 33\n    }\n  },\n  "MaxWidth": {\n    "startLoc": {\n      "col": 31,\n      "line": 34\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 36\n    },\n    "startBody": {\n      "col": 31,\n      "line": 34\n    },\n    "endBody": {\n      "col": 1,\n      "line": 36\n    }\n  }\n};\n    \nimport {Meta, StoryObj} from \'@storybook/react\';\n\nimport mdxDoc from \'./StatusIndicator.mdx\';\n\nimport {StatusIndicator} from \'@workday/canvas-kit-react/status-indicator\';\n\nimport {Basic as BasicExample} from \'./examples/Basic\';\nimport {Icon as IconExample} from \'./examples/Icon\';\nimport {Emphasis as EmphasisExample} from \'./examples/Emphasis\';\nimport {MaxWidth as MaxWidthExample} from \'./examples/MaxWidth\';\n\nexport default {\n  title: \'Components/Indicators/Status Indicator\',\n  component: StatusIndicator,\n  tags: [\'autodocs\'],\n  parameters: {\n  "storySource": {\n    "source": "import {Meta, StoryObj} from \'@storybook/react\';\\n\\nimport mdxDoc from \'./StatusIndicator.mdx\';\\n\\nimport {StatusIndicator} from \'@workday/canvas-kit-react/status-indicator\';\\n\\nimport {Basic as BasicExample} from \'./examples/Basic\';\\nimport {Icon as IconExample} from \'./examples/Icon\';\\nimport {Emphasis as EmphasisExample} from \'./examples/Emphasis\';\\nimport {MaxWidth as MaxWidthExample} from \'./examples/MaxWidth\';\\n\\nexport default {\\n  title: \'Components/Indicators/Status Indicator\',\\n  component: StatusIndicator,\\n  tags: [\'autodocs\'],\\n  parameters: {\\n    docs: {\\n      page: mdxDoc,\\n    },\\n  },\\n} as Meta<typeof StatusIndicator>;\\n\\ntype Story = StoryObj<typeof StatusIndicator>;\\n\\nexport const Basic: Story = {\\n  render: BasicExample,\\n};\\nexport const Icon: Story = {\\n  render: IconExample,\\n};\\nexport const Emphasis: Story = {\\n  render: EmphasisExample,\\n};\\nexport const MaxWidth: Story = {\\n  render: MaxWidthExample,\\n};\\n",\n    "locationsMap": {\n      "basic": {\n        "startLoc": {\n          "col": 28,\n          "line": 25\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 27\n        },\n        "startBody": {\n          "col": 28,\n          "line": 25\n        },\n        "endBody": {\n          "col": 1,\n          "line": 27\n        }\n      },\n      "icon": {\n        "startLoc": {\n          "col": 27,\n          "line": 28\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 30\n        },\n        "startBody": {\n          "col": 27,\n          "line": 28\n        },\n        "endBody": {\n          "col": 1,\n          "line": 30\n        }\n      },\n      "emphasis": {\n        "startLoc": {\n          "col": 31,\n          "line": 31\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 33\n        },\n        "startBody": {\n          "col": 31,\n          "line": 31\n        },\n        "endBody": {\n          "col": 1,\n          "line": 33\n        }\n      },\n      "max-width": {\n        "startLoc": {\n          "col": 31,\n          "line": 34\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 36\n        },\n        "startBody": {\n          "col": 31,\n          "line": 34\n        },\n        "endBody": {\n          "col": 1,\n          "line": 36\n        }\n      }\n    }\n  }\n,\n    docs: {\n      page: mdxDoc,\n    },\n  },\n} as Meta<typeof StatusIndicator>;\n\ntype Story = StoryObj<typeof StatusIndicator>;\n\nexport const Basic: Story = {\n  render: BasicExample,\n};;\nexport const Icon: Story = {\n  render: IconExample,\n};;\nexport const Emphasis: Story = {\n  render: EmphasisExample,\n};;\nexport const MaxWidth: Story = {\n  render: MaxWidthExample,\n};\n',locationsMap:{basic:{startLoc:{col:28,line:184},endLoc:{col:1,line:186},startBody:{col:28,line:184},endBody:{col:1,line:186}},icon:{startLoc:{col:27,line:187},endLoc:{col:1,line:189},startBody:{col:27,line:187},endBody:{col:1,line:189}},emphasis:{startLoc:{col:31,line:190},endLoc:{col:1,line:192},startBody:{col:31,line:190},endBody:{col:1,line:192}},"max-width":{startLoc:{col:31,line:193},endLoc:{col:1,line:195},startBody:{col:31,line:193},endBody:{col:1,line:195}}}},storySource:{source:"import {Meta, StoryObj} from '@storybook/react';\n\nimport mdxDoc from './StatusIndicator.mdx';\n\nimport {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';\n\nimport {Basic as BasicExample} from './examples/Basic';\nimport {Icon as IconExample} from './examples/Icon';\nimport {Emphasis as EmphasisExample} from './examples/Emphasis';\nimport {MaxWidth as MaxWidthExample} from './examples/MaxWidth';\n\nexport default {\n  title: 'Components/Indicators/Status Indicator',\n  component: StatusIndicator,\n  tags: ['autodocs'],\n  parameters: {\n    docs: {\n      page: mdxDoc,\n    },\n  },\n} as Meta<typeof StatusIndicator>;\n\ntype Story = StoryObj<typeof StatusIndicator>;\n\nexport const Basic: Story = {\n  render: BasicExample,\n};\nexport const Icon: Story = {\n  render: IconExample,\n};\nexport const Emphasis: Story = {\n  render: EmphasisExample,\n};\nexport const MaxWidth: Story = {\n  render: MaxWidthExample,\n};\n",locationsMap:{basic:{startLoc:{col:28,line:25},endLoc:{col:1,line:27},startBody:{col:28,line:25},endBody:{col:1,line:27}},icon:{startLoc:{col:27,line:28},endLoc:{col:1,line:30},startBody:{col:27,line:28},endBody:{col:1,line:30}},emphasis:{startLoc:{col:31,line:31},endLoc:{col:1,line:33},startBody:{col:31,line:31},endBody:{col:1,line:33}},"max-width":{startLoc:{col:31,line:34},endLoc:{col:1,line:36},startBody:{col:31,line:34},endBody:{col:1,line:36}}}},docs:{page:_StatusIndicator.default}}};exports.Basic={render:_Basic.Basic},exports.Icon={render:_Icon.Icon},exports.Emphasis={render:_Emphasis.Emphasis},exports.MaxWidth={render:_MaxWidth.MaxWidth};module.exports.__namedExportsOrder=["MaxWidth","Icon","Emphasis","Basic"]},"./modules/react/status-indicator/stories/StatusIndicator.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./modules/docs/index.ts"),_workday_canvas_kit_preview_react_status_indicator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./modules/preview-react/status-indicator/index.ts"),_examples_Basic__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./modules/react/status-indicator/stories/examples/Basic.tsx"),_examples_Icon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./modules/react/status-indicator/stories/examples/Icon.tsx"),_examples_Emphasis__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./modules/react/status-indicator/stories/examples/Emphasis.tsx"),_examples_MaxWidth__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./modules/react/status-indicator/stories/examples/MaxWidth.tsx"),_StatusIndicator_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./modules/react/status-indicator/stories/StatusIndicator.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return _workday_canvas_kit_preview_react_status_indicator__WEBPACK_IMPORTED_MODULE_5__.StatusIndicator||_missingMdxReference("StatusIndicator",!1),_workday_canvas_kit_preview_react_status_indicator__WEBPACK_IMPORTED_MODULE_5__.StatusIndicator.Label||_missingMdxReference("StatusIndicator.Label",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_StatusIndicator_stories__WEBPACK_IMPORTED_MODULE_6__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"canvas-kit-status-indicator",children:"Canvas Kit Status Indicator"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_preview_react_status_indicator__WEBPACK_IMPORTED_MODULE_5__.StatusIndicator,{variant:"red",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_preview_react_status_indicator__WEBPACK_IMPORTED_MODULE_5__.StatusIndicator.Label,{children:"Deprecated"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator"})," in Main has been deprecated and will be removed in a future major version. Please\nuse\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--basic",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator"})}),"\nin Preview instead."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Status Indicators help the user quickly identify the status of a task, action, or page element."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://design.workday.com/components/indicators/status-indicators",target:"_blank",rel:"nofollow noopener noreferrer",children:"> Workday Design Reference"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-sh",children:"yarn add @workday/canvas-kit-react\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_Basic__WEBPACK_IMPORTED_MODULE_7__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"type"})," prop is required (there is no default value). ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"type"})," accepts the following\nvalues:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Type"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Suggested Purpose"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Type.Gray"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Basic, general status. No action required."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Type.Orange"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Signifies alerts, that a user must take action, or that something requires attention."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Type.Blue"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Signifies an item in progress, an update, or a current status."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Type.Green"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Signifies success, completion, or celebration."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Type.Red"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Signifies an error or issue, or removal or destruction."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Type.Transparent"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"General status and related information intended for use on top of imagery, video, or graphics."})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"emphasis",children:"Emphasis"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Set the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"emphasis"})," prop of the Status Indicator to convey varying levels of emphasis. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"emphasis"}),"\naccepts the following values:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Emphasis.High"})," (Default)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"StatusIndicator.Emphasis.Low"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_Emphasis__WEBPACK_IMPORTED_MODULE_8__.Emphasis}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"High"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Low"})," emphasis levels are identical for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Transparent"})," Status Indicators."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Set the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"icon"})," prop of the Status Indicator to a Canvas System Icon to display that icon beside the\nlabel."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_Icon__WEBPACK_IMPORTED_MODULE_9__.Icon}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"max-width",children:"Max Width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, the maximum width of a Status Indicator is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"200px"}),". When the text in the StatusIndicator\nexceeds the max width, it will be truncated with an ellipsis. This maxWidth can be customized."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Avoid truncation wherever possible by using shorter text in Status Indicators. In the case where\ntruncation is necessary, you should use an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"OverflowTooltip"}),". For the full text to be accessible\nwhen you do this, you should make the tooltip focusable with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tabIndex"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_MaxWidth__WEBPACK_IMPORTED_MODULE_10__.MaxWidth}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.SymbolDoc,{name:"StatusIndicator",fileName:"/react/"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"./modules/react/status-indicator/stories/examples/Basic.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Basic=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_styled=_interopRequireDefault(__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),_statusIndicator=__webpack_require__("./modules/react/status-indicator/index.ts"),_tokens=__webpack_require__("./modules/react/tokens/index.ts");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const StatusIndicators=(0,_styled.default)("div")({"& > *":{margin:_tokens.space.xxs}}),Basic=()=>_react.default.createElement(StatusIndicators,null,_react.default.createElement(_statusIndicator.StatusIndicator,{label:"unpublished",type:_statusIndicator.StatusIndicator.Type.Gray}),_react.default.createElement(_statusIndicator.StatusIndicator,{label:"submitted",type:_statusIndicator.StatusIndicator.Type.Orange}),_react.default.createElement(_statusIndicator.StatusIndicator,{label:"in progress",type:_statusIndicator.StatusIndicator.Type.Blue}),_react.default.createElement(_statusIndicator.StatusIndicator,{label:"published",type:_statusIndicator.StatusIndicator.Type.Green}),_react.default.createElement(_statusIndicator.StatusIndicator,{label:"failed",type:_statusIndicator.StatusIndicator.Type.Red}),_react.default.createElement(_statusIndicator.StatusIndicator,{label:"normal",type:_statusIndicator.StatusIndicator.Type.Transparent}));exports.Basic=Basic,Basic.displayName="Basic",Basic.__RAW__="import React from 'react';\nimport styled from '@emotion/styled';\nimport {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';\nimport {space} from '@workday/canvas-kit-react/tokens';\n\nconst StatusIndicators = styled('div')({\n  '& > *': {\n    margin: space.xxs,\n  },\n});\n\nexport const Basic = () => {\n  return (\n    <StatusIndicators>\n      <StatusIndicator label=\"unpublished\" type={StatusIndicator.Type.Gray} />\n      <StatusIndicator label=\"submitted\" type={StatusIndicator.Type.Orange} />\n      <StatusIndicator label=\"in progress\" type={StatusIndicator.Type.Blue} />\n      <StatusIndicator label=\"published\" type={StatusIndicator.Type.Green} />\n      <StatusIndicator label=\"failed\" type={StatusIndicator.Type.Red} />\n      <StatusIndicator label=\"normal\" type={StatusIndicator.Type.Transparent} />\n    </StatusIndicators>\n  );\n};\n"},"./modules/react/status-indicator/stories/examples/Emphasis.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Emphasis=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_styled=_interopRequireDefault(__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),_statusIndicator=__webpack_require__("./modules/react/status-indicator/index.ts"),_tokens=__webpack_require__("./modules/react/tokens/index.ts");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const StatusIndicators=(0,_styled.default)("div")({"& > *":{margin:_tokens.space.xxs}}),Emphasis=()=>_react.default.createElement(StatusIndicators,null,_react.default.createElement(_statusIndicator.StatusIndicator,{emphasis:_statusIndicator.StatusIndicator.Emphasis.Low,label:"unpublished",type:_statusIndicator.StatusIndicator.Type.Gray}),_react.default.createElement(_statusIndicator.StatusIndicator,{emphasis:_statusIndicator.StatusIndicator.Emphasis.Low,label:"submitted",type:_statusIndicator.StatusIndicator.Type.Orange}),_react.default.createElement(_statusIndicator.StatusIndicator,{emphasis:_statusIndicator.StatusIndicator.Emphasis.Low,label:"in progress",type:_statusIndicator.StatusIndicator.Type.Blue}),_react.default.createElement(_statusIndicator.StatusIndicator,{emphasis:_statusIndicator.StatusIndicator.Emphasis.Low,label:"published",type:_statusIndicator.StatusIndicator.Type.Green}),_react.default.createElement(_statusIndicator.StatusIndicator,{emphasis:_statusIndicator.StatusIndicator.Emphasis.Low,label:"failed",type:_statusIndicator.StatusIndicator.Type.Red}),_react.default.createElement(_statusIndicator.StatusIndicator,{emphasis:_statusIndicator.StatusIndicator.Emphasis.Low,label:"normal",type:_statusIndicator.StatusIndicator.Type.Transparent}));exports.Emphasis=Emphasis,Emphasis.displayName="Emphasis",Emphasis.__RAW__="import React from 'react';\nimport styled from '@emotion/styled';\nimport {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';\nimport {space} from '@workday/canvas-kit-react/tokens';\n\nconst StatusIndicators = styled('div')({\n  '& > *': {\n    margin: space.xxs,\n  },\n});\n\nexport const Emphasis = () => {\n  return (\n    <StatusIndicators>\n      <StatusIndicator\n        emphasis={StatusIndicator.Emphasis.Low}\n        label=\"unpublished\"\n        type={StatusIndicator.Type.Gray}\n      />\n      <StatusIndicator\n        emphasis={StatusIndicator.Emphasis.Low}\n        label=\"submitted\"\n        type={StatusIndicator.Type.Orange}\n      />\n      <StatusIndicator\n        emphasis={StatusIndicator.Emphasis.Low}\n        label=\"in progress\"\n        type={StatusIndicator.Type.Blue}\n      />\n      <StatusIndicator\n        emphasis={StatusIndicator.Emphasis.Low}\n        label=\"published\"\n        type={StatusIndicator.Type.Green}\n      />\n      <StatusIndicator\n        emphasis={StatusIndicator.Emphasis.Low}\n        label=\"failed\"\n        type={StatusIndicator.Type.Red}\n      />\n      <StatusIndicator\n        emphasis={StatusIndicator.Emphasis.Low}\n        label=\"normal\"\n        type={StatusIndicator.Type.Transparent}\n      />\n    </StatusIndicators>\n  );\n};\n"},"./modules/react/status-indicator/stories/examples/Icon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Icon=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_statusIndicator=__webpack_require__("./modules/react/status-indicator/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js");const Icon=()=>_react.default.createElement(_statusIndicator.StatusIndicator,{icon:_canvasSystemIconsWeb.uploadCloudIcon,label:"published",type:_statusIndicator.StatusIndicator.Type.Green});exports.Icon=Icon,Icon.displayName="Icon",Icon.__RAW__="import React from 'react';\nimport {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';\nimport {uploadCloudIcon} from '@workday/canvas-system-icons-web';\n\nexport const Icon = () => {\n  return (\n    <StatusIndicator icon={uploadCloudIcon} label=\"published\" type={StatusIndicator.Type.Green} />\n  );\n};\n"},"./modules/react/status-indicator/stories/examples/MaxWidth.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MaxWidth=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_styled=_interopRequireDefault(__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),_statusIndicator=__webpack_require__("./modules/react/status-indicator/index.ts"),_tooltip=__webpack_require__("./modules/react/tooltip/index.ts"),_tokens=__webpack_require__("./modules/react/tokens/index.ts");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const StatusIndicators=(0,_styled.default)("div")({"& > *":{margin:_tokens.space.xxs}}),MaxWidth=()=>_react.default.createElement(StatusIndicators,null,_react.default.createElement(_statusIndicator.StatusIndicator,{label:"Longer Than Normal Ellipsized Status",type:_statusIndicator.StatusIndicator.Type.Blue,maxWidth:250}),_react.default.createElement(_tooltip.OverflowTooltip,null,_react.default.createElement(_statusIndicator.StatusIndicator,{label:"Overflow Tooltip On Hover/Focus Status",type:_statusIndicator.StatusIndicator.Type.Green,tabIndex:0})));exports.MaxWidth=MaxWidth,MaxWidth.displayName="MaxWidth",MaxWidth.__RAW__="import React from 'react';\nimport styled from '@emotion/styled';\nimport {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';\nimport {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';\nimport {space} from '@workday/canvas-kit-react/tokens';\n\nconst StatusIndicators = styled('div')({\n  '& > *': {\n    margin: space.xxs,\n  },\n});\n\nexport const MaxWidth = () => {\n  return (\n    <StatusIndicators>\n      <StatusIndicator\n        label=\"Longer Than Normal Ellipsized Status\"\n        type={StatusIndicator.Type.Blue}\n        maxWidth={250}\n      />\n      <OverflowTooltip>\n        <StatusIndicator\n          label=\"Overflow Tooltip On Hover/Focus Status\"\n          type={StatusIndicator.Type.Green}\n          tabIndex={0}\n        />\n      </OverflowTooltip>\n    </StatusIndicators>\n  );\n};\n"}}]);