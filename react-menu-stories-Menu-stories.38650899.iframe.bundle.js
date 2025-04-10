"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[2292],{"./modules/react/menu/stories/Menu.stories.ts":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.SelectableMenu=exports.Icons=exports.Grouping=exports.ContextMenu=exports.Basic=void 0;var _Menu=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./modules/react/menu/stories/Menu.mdx")),_menu=__webpack_require__("./modules/react/menu/index.ts"),_Basic=__webpack_require__("./modules/react/menu/stories/examples/Basic.tsx"),_Grouping=__webpack_require__("./modules/react/menu/stories/examples/Grouping.tsx"),_ContextMenu=__webpack_require__("./modules/react/menu/stories/examples/ContextMenu.tsx"),_Icons=__webpack_require__("./modules/react/menu/stories/examples/Icons.tsx"),_SelectableMenu=__webpack_require__("./modules/react/menu/stories/examples/SelectableMenu.tsx");exports.default={title:"Components/Popups/Menu",component:_menu.Menu,tags:["autodocs"],parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import {Meta, StoryObj} from \'@storybook/react\';\\n\\nimport mdxDoc from \'./Menu.mdx\';\\nimport {Menu} from \'@workday/canvas-kit-react/menu\';\\n\\nimport {Basic as BasicExample} from \'./examples/Basic\';\\nimport {Grouping as GroupingExample} from \'./examples/Grouping\';\\nimport {ContextMenu as ContextMenuExample} from \'./examples/ContextMenu\';\\nimport {Icons as IconsExample} from \'./examples/Icons\';\\nimport {SelectableMenu as SelectableMenuExample} from \'./examples/SelectableMenu\';\\n\\nexport default {\\n  title: \'Components/Popups/Menu\',\\n  component: Menu,\\n  tags: [\'autodocs\'],\\n  parameters: {\\n    docs: {\\n      page: mdxDoc,\\n    },\\n  },\\n} as Meta<typeof Menu>;\\n\\ntype Story = StoryObj<typeof Menu>;\\n\\nexport const Basic: Story = {\\n  render: BasicExample,\\n};\\nexport const Grouping: Story = {\\n  render: GroupingExample,\\n};\\nexport const ContextMenu: Story = {\\n  render: ContextMenuExample,\\n};\\nexport const Icons: Story = {\\n  render: IconsExample,\\n};\\nexport const SelectableMenu: Story = {\\n  render: SelectableMenuExample,\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "Basic": {\n    "startLoc": {\n      "col": 28,\n      "line": 25\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 27\n    },\n    "startBody": {\n      "col": 28,\n      "line": 25\n    },\n    "endBody": {\n      "col": 1,\n      "line": 27\n    }\n  },\n  "Grouping": {\n    "startLoc": {\n      "col": 31,\n      "line": 28\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 30\n    },\n    "startBody": {\n      "col": 31,\n      "line": 28\n    },\n    "endBody": {\n      "col": 1,\n      "line": 30\n    }\n  },\n  "ContextMenu": {\n    "startLoc": {\n      "col": 34,\n      "line": 31\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 33\n    },\n    "startBody": {\n      "col": 34,\n      "line": 31\n    },\n    "endBody": {\n      "col": 1,\n      "line": 33\n    }\n  },\n  "Icons": {\n    "startLoc": {\n      "col": 28,\n      "line": 34\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 36\n    },\n    "startBody": {\n      "col": 28,\n      "line": 34\n    },\n    "endBody": {\n      "col": 1,\n      "line": 36\n    }\n  },\n  "SelectableMenu": {\n    "startLoc": {\n      "col": 37,\n      "line": 37\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 39\n    },\n    "startBody": {\n      "col": 37,\n      "line": 37\n    },\n    "endBody": {\n      "col": 1,\n      "line": 39\n    }\n  }\n};\n    \nimport {Meta, StoryObj} from \'@storybook/react\';\n\nimport mdxDoc from \'./Menu.mdx\';\nimport {Menu} from \'@workday/canvas-kit-react/menu\';\n\nimport {Basic as BasicExample} from \'./examples/Basic\';\nimport {Grouping as GroupingExample} from \'./examples/Grouping\';\nimport {ContextMenu as ContextMenuExample} from \'./examples/ContextMenu\';\nimport {Icons as IconsExample} from \'./examples/Icons\';\nimport {SelectableMenu as SelectableMenuExample} from \'./examples/SelectableMenu\';\n\nexport default {\n  title: \'Components/Popups/Menu\',\n  component: Menu,\n  tags: [\'autodocs\'],\n  parameters: {\n  "storySource": {\n    "source": "import {Meta, StoryObj} from \'@storybook/react\';\\n\\nimport mdxDoc from \'./Menu.mdx\';\\nimport {Menu} from \'@workday/canvas-kit-react/menu\';\\n\\nimport {Basic as BasicExample} from \'./examples/Basic\';\\nimport {Grouping as GroupingExample} from \'./examples/Grouping\';\\nimport {ContextMenu as ContextMenuExample} from \'./examples/ContextMenu\';\\nimport {Icons as IconsExample} from \'./examples/Icons\';\\nimport {SelectableMenu as SelectableMenuExample} from \'./examples/SelectableMenu\';\\n\\nexport default {\\n  title: \'Components/Popups/Menu\',\\n  component: Menu,\\n  tags: [\'autodocs\'],\\n  parameters: {\\n    docs: {\\n      page: mdxDoc,\\n    },\\n  },\\n} as Meta<typeof Menu>;\\n\\ntype Story = StoryObj<typeof Menu>;\\n\\nexport const Basic: Story = {\\n  render: BasicExample,\\n};\\nexport const Grouping: Story = {\\n  render: GroupingExample,\\n};\\nexport const ContextMenu: Story = {\\n  render: ContextMenuExample,\\n};\\nexport const Icons: Story = {\\n  render: IconsExample,\\n};\\nexport const SelectableMenu: Story = {\\n  render: SelectableMenuExample,\\n};\\n",\n    "locationsMap": {\n      "basic": {\n        "startLoc": {\n          "col": 28,\n          "line": 25\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 27\n        },\n        "startBody": {\n          "col": 28,\n          "line": 25\n        },\n        "endBody": {\n          "col": 1,\n          "line": 27\n        }\n      },\n      "grouping": {\n        "startLoc": {\n          "col": 31,\n          "line": 28\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 30\n        },\n        "startBody": {\n          "col": 31,\n          "line": 28\n        },\n        "endBody": {\n          "col": 1,\n          "line": 30\n        }\n      },\n      "context-menu": {\n        "startLoc": {\n          "col": 34,\n          "line": 31\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 33\n        },\n        "startBody": {\n          "col": 34,\n          "line": 31\n        },\n        "endBody": {\n          "col": 1,\n          "line": 33\n        }\n      },\n      "icons": {\n        "startLoc": {\n          "col": 28,\n          "line": 34\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 36\n        },\n        "startBody": {\n          "col": 28,\n          "line": 34\n        },\n        "endBody": {\n          "col": 1,\n          "line": 36\n        }\n      },\n      "selectable-menu": {\n        "startLoc": {\n          "col": 37,\n          "line": 37\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 39\n        },\n        "startBody": {\n          "col": 37,\n          "line": 37\n        },\n        "endBody": {\n          "col": 1,\n          "line": 39\n        }\n      }\n    }\n  }\n,\n    docs: {\n      page: mdxDoc,\n    },\n  },\n} as Meta<typeof Menu>;\n\ntype Story = StoryObj<typeof Menu>;\n\nexport const Basic: Story = {\n  render: BasicExample,\n};;\nexport const Grouping: Story = {\n  render: GroupingExample,\n};;\nexport const ContextMenu: Story = {\n  render: ContextMenuExample,\n};;\nexport const Icons: Story = {\n  render: IconsExample,\n};;\nexport const SelectableMenu: Story = {\n  render: SelectableMenuExample,\n};\n',locationsMap:{basic:{startLoc:{col:28,line:220},endLoc:{col:1,line:222},startBody:{col:28,line:220},endBody:{col:1,line:222}},grouping:{startLoc:{col:31,line:223},endLoc:{col:1,line:225},startBody:{col:31,line:223},endBody:{col:1,line:225}},"context-menu":{startLoc:{col:34,line:226},endLoc:{col:1,line:228},startBody:{col:34,line:226},endBody:{col:1,line:228}},icons:{startLoc:{col:28,line:229},endLoc:{col:1,line:231},startBody:{col:28,line:229},endBody:{col:1,line:231}},"selectable-menu":{startLoc:{col:37,line:232},endLoc:{col:1,line:234},startBody:{col:37,line:232},endBody:{col:1,line:234}}}},storySource:{source:"import {Meta, StoryObj} from '@storybook/react';\n\nimport mdxDoc from './Menu.mdx';\nimport {Menu} from '@workday/canvas-kit-react/menu';\n\nimport {Basic as BasicExample} from './examples/Basic';\nimport {Grouping as GroupingExample} from './examples/Grouping';\nimport {ContextMenu as ContextMenuExample} from './examples/ContextMenu';\nimport {Icons as IconsExample} from './examples/Icons';\nimport {SelectableMenu as SelectableMenuExample} from './examples/SelectableMenu';\n\nexport default {\n  title: 'Components/Popups/Menu',\n  component: Menu,\n  tags: ['autodocs'],\n  parameters: {\n    docs: {\n      page: mdxDoc,\n    },\n  },\n} as Meta<typeof Menu>;\n\ntype Story = StoryObj<typeof Menu>;\n\nexport const Basic: Story = {\n  render: BasicExample,\n};\nexport const Grouping: Story = {\n  render: GroupingExample,\n};\nexport const ContextMenu: Story = {\n  render: ContextMenuExample,\n};\nexport const Icons: Story = {\n  render: IconsExample,\n};\nexport const SelectableMenu: Story = {\n  render: SelectableMenuExample,\n};\n",locationsMap:{basic:{startLoc:{col:28,line:25},endLoc:{col:1,line:27},startBody:{col:28,line:25},endBody:{col:1,line:27}},grouping:{startLoc:{col:31,line:28},endLoc:{col:1,line:30},startBody:{col:31,line:28},endBody:{col:1,line:30}},"context-menu":{startLoc:{col:34,line:31},endLoc:{col:1,line:33},startBody:{col:34,line:31},endBody:{col:1,line:33}},icons:{startLoc:{col:28,line:34},endLoc:{col:1,line:36},startBody:{col:28,line:34},endBody:{col:1,line:36}},"selectable-menu":{startLoc:{col:37,line:37},endLoc:{col:1,line:39},startBody:{col:37,line:37},endBody:{col:1,line:39}}}},docs:{page:_Menu.default}}};exports.Basic={render:_Basic.Basic},exports.Grouping={render:_Grouping.Grouping},exports.ContextMenu={render:_ContextMenu.ContextMenu},exports.Icons={render:_Icons.Icons},exports.SelectableMenu={render:_SelectableMenu.SelectableMenu};module.exports.__namedExportsOrder=["SelectableMenu","Icons","Grouping","ContextMenu","Basic"]},"./modules/react/menu/stories/Menu.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./modules/docs/index.ts"),_examples_Basic__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./modules/react/menu/stories/examples/Basic.tsx"),_examples_ContextMenu__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./modules/react/menu/stories/examples/ContextMenu.tsx"),_examples_Icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./modules/react/menu/stories/examples/Icons.tsx"),_examples_SelectableMenu__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./modules/react/menu/stories/examples/SelectableMenu.tsx"),_examples_Grouping__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./modules/react/menu/stories/examples/Grouping.tsx"),_Menu_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./modules/react/menu/stories/Menu.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",strong:"strong"},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"canvas-kit-menu",children:"Canvas Kit Menu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu"})," displays a list of options when triggered by an action or UI element like an icon or button."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://design.workday.com/components/popups/menus",target:"_blank",rel:"nofollow noopener noreferrer",children:"> Workday Design Reference"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-sh",children:"yarn add @workday/canvas-kit-react\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu"})," is typically triggered by an action such as pressing a button. The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu"})," comes with a\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Target"})," subcomponent and a Popup."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_Basic__WEBPACK_IMPORTED_MODULE_6__.Basic}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu"})," will automatically focus on the cursor item (first item by default). The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu"})," uses a menu\nmodel which composes a list model and a popup model and sets up accessibility features for you."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu"})," follows the\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Actions Menu pattern"}),"\nusing roving tabindex. Below is table of supported keyboard shortcuts and associated actions."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Key"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th,{children:"Action"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Enter"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Space"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Activates the menu item and then closes the menu"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Escape"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Closes the menu"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Up Arrow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Moves focus to the previous menu item – if focus is on first menu item, it moves focus to the last menu item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Down Arrow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Moves focus to the next menu item – if focus is on last menu item, it moves focus to the first menu item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Home"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Moves focus to the first menu item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"End"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td,{children:"Moves focus to the last menu item"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"context-menu",children:"Context Menu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_ContextMenu__WEBPACK_IMPORTED_MODULE_7__.ContextMenu}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"icons",children:"Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Menu supports more complex children, including icons, but the text of the item will no longer be\nknown. In this case, add a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data-text"}),' attribute to inform the collection system what the text of\nthe item is. The text is used for components that filter based on text. For example, a Select\ncomponent will jump to an item based on the keys the user types. If the user types "C", the\ncomponent will jump to the first item that starts with a "C". This functionality requires knowledge\nabout the text of the item.']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_Icons__WEBPACK_IMPORTED_MODULE_8__.Icons}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selectable-menu",children:"Selectable Menu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Item"})," renders a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"role=menuitem"})," element which does not have ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-selected"})," and thus no\nselected state. If you wish your menu to have selectable menu items, use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Option"})," instead of\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Item"}),". The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Option"})," is meant to be used when the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Card"})," has a role of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"listbox"})," and\nis controlled via ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-activedescendant"}),". This example uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Option"})," to should what the\ncheckmark looks like, but the example is not keyboard or screen reader accessible. There are many\nother behaviors that need to be composed into the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Target"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.List"})," components and the\nbehaviors depend on many other things. To see a full example of all these behaviors, look at the\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<Combobox>"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<Select>"})," component source code as examples."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_SelectableMenu__WEBPACK_IMPORTED_MODULE_9__.SelectableMenu}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"grouping",children:"Grouping"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Grouping adds hierarchy and categorization to menu items. Group headers do not represent menu items\nand are not selectable with the keyboard or mouse."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note"}),": Grouping is not supported in virtual rendering. Menus by default have ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"shouldVirtualize"}),"\nset to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"false"}),". Setting to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"true"})," results in unspecified behavior. We use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"react-virtual"})," which\ndoesn't support nested virtualization."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_Grouping__WEBPACK_IMPORTED_MODULE_10__.Grouping}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.SymbolDoc,{name:"Menu",fileName:"/react/"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"specifications",children:"Specifications"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.Specifications,{file:"Menu.spec.ts",name:"Menu"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./modules/react/menu/stories/examples/Basic.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Basic=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_menu=__webpack_require__("./modules/react/menu/index.ts"),_text=__webpack_require__("./modules/react/text/index.ts");const Basic=()=>{const[selected,setSelected]=_react.default.useState("");return _react.default.createElement(_menu.Menu,{onSelect:data=>setSelected(data.id)},_react.default.createElement(_menu.Menu.Target,null,"Open Menu"),_react.default.createElement(_menu.Menu.Popper,null,_react.default.createElement(_menu.Menu.Card,null,_react.default.createElement(_menu.Menu.List,null,_react.default.createElement(_menu.Menu.Item,null,"First Item"),_react.default.createElement(_menu.Menu.Item,null,"Second Item"),_react.default.createElement(_menu.Menu.Divider,null),_react.default.createElement(_menu.Menu.Item,null,"Third Item (with a really, really, really long label)"),_react.default.createElement(_menu.Menu.Item,{"aria-disabled":!0},"Fourth Item")))),_react.default.createElement(_text.BodyText,{size:"small",marginTop:"s"},"Selected: ",_react.default.createElement("span",{"data-testid":"output"},selected)))};exports.Basic=Basic,Basic.displayName="Basic",Basic.__RAW__="import React from 'react';\n\nimport {Menu} from '@workday/canvas-kit-react/menu';\nimport {BodyText} from '@workday/canvas-kit-react/text';\n\nexport const Basic = () => {\n  const [selected, setSelected] = React.useState('');\n  return (\n    <Menu onSelect={data => setSelected(data.id)}>\n      <Menu.Target>Open Menu</Menu.Target>\n      <Menu.Popper>\n        <Menu.Card>\n          <Menu.List>\n            <Menu.Item>First Item</Menu.Item>\n            <Menu.Item>Second Item</Menu.Item>\n            <Menu.Divider />\n            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>\n            <Menu.Item aria-disabled>Fourth Item</Menu.Item>\n          </Menu.List>\n        </Menu.Card>\n      </Menu.Popper>\n      <BodyText size=\"small\" marginTop=\"s\">\n        Selected: <span data-testid=\"output\">{selected}</span>\n      </BodyText>\n    </Menu>\n  );\n};\n"},"./modules/react/menu/stories/examples/ContextMenu.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContextMenu=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_menu=__webpack_require__("./modules/react/menu/index.ts"),_text=__webpack_require__("./modules/react/text/index.ts");const ContextMenu=()=>{const[selected,setSelected]=_react.default.useState("");return _react.default.createElement(_menu.Menu,{onSelect:data=>setSelected(data.id)},_react.default.createElement(_menu.Menu.TargetContext,null,"Right-click to Open Menu"),_react.default.createElement(_menu.Menu.Popper,null,_react.default.createElement(_menu.Menu.Card,null,_react.default.createElement(_menu.Menu.List,null,_react.default.createElement(_menu.Menu.Item,null,"First Item"),_react.default.createElement(_menu.Menu.Item,null,"Second Item"),_react.default.createElement(_menu.Menu.Item,null,"Third Item (with a really, really, really long label)"),_react.default.createElement(_menu.Menu.Item,null,"Fourth Item")))),_react.default.createElement(_text.BodyText,{size:"small",marginTop:"s"},"Selected: ",_react.default.createElement("span",{"data-testid":"output"},selected)))};exports.ContextMenu=ContextMenu,ContextMenu.displayName="ContextMenu",ContextMenu.__RAW__="import React from 'react';\n\nimport {Menu} from '@workday/canvas-kit-react/menu';\nimport {BodyText} from '@workday/canvas-kit-react/text';\n\nexport const ContextMenu = () => {\n  const [selected, setSelected] = React.useState('');\n  return (\n    <Menu onSelect={data => setSelected(data.id)}>\n      <Menu.TargetContext>Right-click to Open Menu</Menu.TargetContext>\n      <Menu.Popper>\n        <Menu.Card>\n          <Menu.List>\n            <Menu.Item>First Item</Menu.Item>\n            <Menu.Item>Second Item</Menu.Item>\n            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>\n            <Menu.Item>Fourth Item</Menu.Item>\n          </Menu.List>\n        </Menu.Card>\n      </Menu.Popper>\n      <BodyText size=\"small\" marginTop=\"s\">\n        Selected: <span data-testid=\"output\">{selected}</span>\n      </BodyText>\n    </Menu>\n  );\n};\n"},"./modules/react/menu/stories/examples/Grouping.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Grouping=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_menu=__webpack_require__("./modules/react/menu/index.ts"),_text=__webpack_require__("./modules/react/text/index.ts");const Grouping=()=>{const[selected,setSelected]=_react.default.useState("");return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_menu.Menu,{onSelect:data=>setSelected(data.id)},_react.default.createElement(_menu.Menu.Target,null,"Open Menu"),_react.default.createElement(_menu.Menu.Popper,null,_react.default.createElement(_menu.Menu.Card,null,_react.default.createElement(_menu.Menu.List,null,_react.default.createElement(_menu.Menu.Group,{title:"First Group"},_react.default.createElement(_menu.Menu.Item,null,"First Item"),_react.default.createElement(_menu.Menu.Item,null,"Second Item")),_react.default.createElement(_menu.Menu.Group,{title:"Second Group"},_react.default.createElement(_menu.Menu.Item,null,"Third Item (with a really, really, really long label)"),_react.default.createElement(_menu.Menu.Item,{"aria-disabled":!0},"Fourth Item"))))),_react.default.createElement(_text.BodyText,{size:"small",marginTop:"s"},"Selected: ",_react.default.createElement("span",{"data-testid":"output"},selected))))};exports.Grouping=Grouping,Grouping.__RAW__='import React from \'react\';\n\nimport {Menu} from \'@workday/canvas-kit-react/menu\';\nimport {BodyText} from \'@workday/canvas-kit-react/text\';\n\nexport const Grouping = () => {\n  const [selected, setSelected] = React.useState(\'\');\n  return (\n    <>\n      <Menu onSelect={data => setSelected(data.id)}>\n        <Menu.Target>Open Menu</Menu.Target>\n        <Menu.Popper>\n          <Menu.Card>\n            <Menu.List>\n              <Menu.Group title="First Group">\n                <Menu.Item>First Item</Menu.Item>\n                <Menu.Item>Second Item</Menu.Item>\n              </Menu.Group>\n              <Menu.Group title="Second Group">\n                <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>\n                <Menu.Item aria-disabled>Fourth Item</Menu.Item>\n              </Menu.Group>\n            </Menu.List>\n          </Menu.Card>\n        </Menu.Popper>\n        <BodyText size="small" marginTop="s">\n          Selected: <span data-testid="output">{selected}</span>\n        </BodyText>\n      </Menu>\n    </>\n  );\n};\n'},"./modules/react/menu/stories/examples/Icons.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Icons=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"),_menu=__webpack_require__("./modules/react/menu/index.ts"),_text=__webpack_require__("./modules/react/text/index.ts");const Icons=()=>{const[selected,setSelected]=_react.default.useState("");return _react.default.createElement(_menu.Menu,{onSelect:data=>setSelected(data.id)},_react.default.createElement(_menu.Menu.Target,null,"Open Menu"),_react.default.createElement(_menu.Menu.Popper,null,_react.default.createElement(_menu.Menu.Card,null,_react.default.createElement(_menu.Menu.List,null,_react.default.createElement(_menu.Menu.Item,{"data-text":"First Item"},_react.default.createElement(_menu.Menu.Item.Icon,{icon:_canvasSystemIconsWeb.uploadCloudIcon}),_react.default.createElement(_menu.Menu.Item.Text,null,"First Item")),_react.default.createElement(_menu.Menu.Item,{"data-text":"Second Item (with a really really really long label)"},_react.default.createElement(_menu.Menu.Item.Icon,{icon:_canvasSystemIconsWeb.setupIcon}),_react.default.createElement(_menu.Menu.Item.Text,null,"Second Item (with a really really really long label)")),_react.default.createElement(_menu.Menu.Item,{"aria-disabled":!0,"data-text":"Third Item"},_react.default.createElement(_menu.Menu.Item.Icon,{icon:_canvasSystemIconsWeb.uploadCloudIcon}),_react.default.createElement(_menu.Menu.Item.Text,null,"Third Item"),_react.default.createElement(_menu.Menu.Item.Icon,{icon:_canvasSystemIconsWeb.taskContactIcon})),_react.default.createElement(_menu.Menu.Item,{"data-text":"User"},_react.default.createElement(_menu.Menu.Item.Icon,{icon:_canvasSystemIconsWeb.userIcon}),_react.default.createElement(_menu.Menu.Item.Text,null)),_react.default.createElement(_menu.Menu.Divider,null),_react.default.createElement(_menu.Menu.Item,{"data-text":"Fifth Item (with divider)"},_react.default.createElement(_menu.Menu.Item.Icon,{icon:_canvasSystemIconsWeb.taskContactIcon}),_react.default.createElement(_menu.Menu.Item.Text,null,"Fifth Item (with divider)"))))),_react.default.createElement(_text.BodyText,{size:"small",marginTop:"s"},"Selected: ",_react.default.createElement("span",{"data-testid":"output"},selected)))};exports.Icons=Icons,Icons.displayName="Icons",Icons.__RAW__='import React from \'react\';\nimport {\n  setupIcon,\n  uploadCloudIcon,\n  userIcon,\n  taskContactIcon,\n} from \'@workday/canvas-system-icons-web\';\nimport {Menu} from \'@workday/canvas-kit-react/menu\';\nimport {BodyText} from \'@workday/canvas-kit-react/text\';\n\nexport const Icons = () => {\n  const [selected, setSelected] = React.useState(\'\');\n  return (\n    <Menu onSelect={data => setSelected(data.id)}>\n      <Menu.Target>Open Menu</Menu.Target>\n      <Menu.Popper>\n        <Menu.Card>\n          <Menu.List>\n            <Menu.Item data-text="First Item">\n              <Menu.Item.Icon icon={uploadCloudIcon} />\n              <Menu.Item.Text>First Item</Menu.Item.Text>\n            </Menu.Item>\n            <Menu.Item data-text="Second Item (with a really really really long label)">\n              <Menu.Item.Icon icon={setupIcon} />\n              <Menu.Item.Text>Second Item (with a really really really long label)</Menu.Item.Text>\n            </Menu.Item>\n            <Menu.Item aria-disabled data-text="Third Item">\n              <Menu.Item.Icon icon={uploadCloudIcon} />\n              <Menu.Item.Text>Third Item</Menu.Item.Text>\n              <Menu.Item.Icon icon={taskContactIcon} />\n            </Menu.Item>\n            <Menu.Item data-text="User">\n              <Menu.Item.Icon icon={userIcon} />\n              <Menu.Item.Text></Menu.Item.Text>\n            </Menu.Item>\n            <Menu.Divider />\n            <Menu.Item data-text="Fifth Item (with divider)">\n              <Menu.Item.Icon icon={taskContactIcon} />\n              <Menu.Item.Text>Fifth Item (with divider)</Menu.Item.Text>\n            </Menu.Item>\n          </Menu.List>\n        </Menu.Card>\n      </Menu.Popper>\n      <BodyText size="small" marginTop="s">\n        Selected: <span data-testid="output">{selected}</span>\n      </BodyText>\n    </Menu>\n  );\n};\n'},"./modules/react/menu/stories/examples/SelectableMenu.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SelectableMenu=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_menu=__webpack_require__("./modules/react/menu/index.ts"),_text=__webpack_require__("./modules/react/text/index.ts");const SelectableMenu=()=>{const[selected,setSelected]=_react.default.useState("");return _react.default.createElement(_menu.Menu,{onSelect:data=>setSelected(data.id)},_react.default.createElement(_menu.Menu.Target,null,"Open Menu"),_react.default.createElement(_menu.Menu.Popper,null,_react.default.createElement(_menu.Menu.Card,{role:"listbox"},_react.default.createElement(_menu.Menu.List,{as:"ul"},_react.default.createElement(_menu.Menu.Option,null,"First Item"),_react.default.createElement(_menu.Menu.Option,null,"Second Item"),_react.default.createElement(_menu.Menu.Divider,null),_react.default.createElement(_menu.Menu.Option,null,"Third Item (with a really, really, really long label)"),_react.default.createElement(_menu.Menu.Option,{"aria-disabled":!0},"Fourth Item")))),_react.default.createElement(_text.BodyText,{size:"small",marginTop:"s"},"Selected: ",_react.default.createElement("span",{"data-testid":"output"},selected)))};exports.SelectableMenu=SelectableMenu,SelectableMenu.displayName="SelectableMenu",SelectableMenu.__RAW__='import React from \'react\';\n\nimport {Menu} from \'@workday/canvas-kit-react/menu\';\nimport {BodyText} from \'@workday/canvas-kit-react/text\';\n\nexport const SelectableMenu = () => {\n  const [selected, setSelected] = React.useState(\'\');\n  return (\n    <Menu onSelect={data => setSelected(data.id)}>\n      <Menu.Target>Open Menu</Menu.Target>\n      <Menu.Popper>\n        <Menu.Card role="listbox">\n          <Menu.List as="ul">\n            <Menu.Option>First Item</Menu.Option>\n            <Menu.Option>Second Item</Menu.Option>\n            <Menu.Divider />\n            <Menu.Option>Third Item (with a really, really, really long label)</Menu.Option>\n            <Menu.Option aria-disabled>Fourth Item</Menu.Option>\n          </Menu.List>\n        </Menu.Card>\n      </Menu.Popper>\n      <BodyText size="small" marginTop="s">\n        Selected: <span data-testid="output">{selected}</span>\n      </BodyText>\n    </Menu>\n  );\n};\n'}}]);