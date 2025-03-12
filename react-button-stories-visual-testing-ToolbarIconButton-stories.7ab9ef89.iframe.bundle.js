"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[9488],{"./modules/react/button/stories/visual-testing/ToolbarIconButton.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ToolbarIconButtonThemedStates=exports.ToolbarIconButtonStates=exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_storybook=__webpack_require__("./utils/storybook/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"),_button=__webpack_require__("./modules/react/button/index.ts"),_utils=__webpack_require__("./modules/react/button/stories/visual-testing/utils.tsx"),_testing=__webpack_require__("./modules/react/testing/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var _default={title:"Testing/Buttons/Button/Toolbar Icon Button",component:_button.ToolbarIconButton,parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import * as React from \'react\';\\nimport {customColorTheme} from \'../../../../../utils/storybook\';\\nimport {playCircleIcon} from \'@workday/canvas-system-icons-web\';\\nimport {ToolbarIconButton} from \'@workday/canvas-kit-react/button\';\\nimport {Container, stateTableColumnProps} from \'./utils\';\\nimport {PartialEmotionCanvasTheme} from \'@workday/canvas-kit-react/common\';\\nimport {ComponentStatesTable, StaticStates} from \'@workday/canvas-kit-react/testing\';\\n\\nexport default {\\n  title: \'Testing/Buttons/Button/Toolbar Icon Button\',\\n  component: ToolbarIconButton,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nconst columnProps = [\\n  ...stateTableColumnProps,\\n  {label: \'Mirrored Icon \', props: {shouldMirrorIcon: true, disabled: false}},\\n];\\n\\nconst ToolbarIconButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (\\n  <StaticStates theme={props.theme}>\\n    <ComponentStatesTable\\n      rowProps={[\\n        {label: \'Toggled Off\', props: {toggled: false}},\\n        {label: \'Toggled On\', props: {toggled: true}},\\n      ]}\\n      columnProps={columnProps}\\n    >\\n      {(props: any) => (\\n        <Container>\\n          <ToolbarIconButton\\n            icon={playCircleIcon}\\n            aria-label=\\"Play\\"\\n            {...props}\\n            onChange={() => {}} // eslint-disable-line no-empty-function\\n          />\\n        </Container>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const ToolbarIconButtonStates = {render: () => <ToolbarIconButtonTest />};\\n\\nexport const ToolbarIconButtonThemedStates = {\\n  render: () => <ToolbarIconButtonTest theme={{canvas: customColorTheme}} />,\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "ToolbarIconButtonStates": {\n    "startLoc": {\n      "col": 39,\n      "line": 47\n    },\n    "endLoc": {\n      "col": 80,\n      "line": 47\n    },\n    "startBody": {\n      "col": 39,\n      "line": 47\n    },\n    "endBody": {\n      "col": 80,\n      "line": 47\n    }\n  },\n  "ToolbarIconButtonThemedStates": {\n    "startLoc": {\n      "col": 45,\n      "line": 49\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 51\n    },\n    "startBody": {\n      "col": 45,\n      "line": 49\n    },\n    "endBody": {\n      "col": 1,\n      "line": 51\n    }\n  }\n};\n    \nimport * as React from \'react\';\nimport {customColorTheme} from \'../../../../../utils/storybook\';\nimport {playCircleIcon} from \'@workday/canvas-system-icons-web\';\nimport {ToolbarIconButton} from \'@workday/canvas-kit-react/button\';\nimport {Container, stateTableColumnProps} from \'./utils\';\nimport {PartialEmotionCanvasTheme} from \'@workday/canvas-kit-react/common\';\nimport {ComponentStatesTable, StaticStates} from \'@workday/canvas-kit-react/testing\';\n\nexport default {\n  title: \'Testing/Buttons/Button/Toolbar Icon Button\',\n  component: ToolbarIconButton,\n  parameters: {\n  "storySource": {\n    "source": "import * as React from \'react\';\\nimport {customColorTheme} from \'../../../../../utils/storybook\';\\nimport {playCircleIcon} from \'@workday/canvas-system-icons-web\';\\nimport {ToolbarIconButton} from \'@workday/canvas-kit-react/button\';\\nimport {Container, stateTableColumnProps} from \'./utils\';\\nimport {PartialEmotionCanvasTheme} from \'@workday/canvas-kit-react/common\';\\nimport {ComponentStatesTable, StaticStates} from \'@workday/canvas-kit-react/testing\';\\n\\nexport default {\\n  title: \'Testing/Buttons/Button/Toolbar Icon Button\',\\n  component: ToolbarIconButton,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nconst columnProps = [\\n  ...stateTableColumnProps,\\n  {label: \'Mirrored Icon \', props: {shouldMirrorIcon: true, disabled: false}},\\n];\\n\\nconst ToolbarIconButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (\\n  <StaticStates theme={props.theme}>\\n    <ComponentStatesTable\\n      rowProps={[\\n        {label: \'Toggled Off\', props: {toggled: false}},\\n        {label: \'Toggled On\', props: {toggled: true}},\\n      ]}\\n      columnProps={columnProps}\\n    >\\n      {(props: any) => (\\n        <Container>\\n          <ToolbarIconButton\\n            icon={playCircleIcon}\\n            aria-label=\\"Play\\"\\n            {...props}\\n            onChange={() => {}} \\n          />\\n        </Container>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const ToolbarIconButtonStates = {render: () => <ToolbarIconButtonTest />};\\n\\nexport const ToolbarIconButtonThemedStates = {\\n  render: () => <ToolbarIconButtonTest theme={{canvas: customColorTheme}} />,\\n};\\n",\n    "locationsMap": {\n      "toolbar-icon-button-states": {\n        "startLoc": {\n          "col": 39,\n          "line": 47\n        },\n        "endLoc": {\n          "col": 80,\n          "line": 47\n        },\n        "startBody": {\n          "col": 39,\n          "line": 47\n        },\n        "endBody": {\n          "col": 80,\n          "line": 47\n        }\n      },\n      "toolbar-icon-button-themed-states": {\n        "startLoc": {\n          "col": 45,\n          "line": 49\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 51\n        },\n        "startBody": {\n          "col": 45,\n          "line": 49\n        },\n        "endBody": {\n          "col": 1,\n          "line": 51\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nconst columnProps = [\n  ...stateTableColumnProps,\n  {label: \'Mirrored Icon \', props: {shouldMirrorIcon: true, disabled: false}},\n];\n\nconst ToolbarIconButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (\n  <StaticStates theme={props.theme}>\n    <ComponentStatesTable\n      rowProps={[\n        {label: \'Toggled Off\', props: {toggled: false}},\n        {label: \'Toggled On\', props: {toggled: true}},\n      ]}\n      columnProps={columnProps}\n    >\n      {(props: any) => (\n        <Container>\n          <ToolbarIconButton\n            icon={playCircleIcon}\n            aria-label="Play"\n            {...props}\n            onChange={() => {}} \n          />\n        </Container>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);\n\nexport const ToolbarIconButtonStates = {render: () => <ToolbarIconButtonTest />};;\n\nexport const ToolbarIconButtonThemedStates = {\n  render: () => <ToolbarIconButtonTest theme={{canvas: customColorTheme}} />,\n};\n',locationsMap:{"toolbar-icon-button-states":{startLoc:{col:39,line:134},endLoc:{col:80,line:134},startBody:{col:39,line:134},endBody:{col:80,line:134}},"toolbar-icon-button-themed-states":{startLoc:{col:45,line:136},endLoc:{col:1,line:138},startBody:{col:45,line:136},endBody:{col:1,line:138}}}},storySource:{source:"import * as React from 'react';\nimport {customColorTheme} from '../../../../../utils/storybook';\nimport {playCircleIcon} from '@workday/canvas-system-icons-web';\nimport {ToolbarIconButton} from '@workday/canvas-kit-react/button';\nimport {Container, stateTableColumnProps} from './utils';\nimport {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';\nimport {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';\n\nexport default {\n  title: 'Testing/Buttons/Button/Toolbar Icon Button',\n  component: ToolbarIconButton,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nconst columnProps = [\n  ...stateTableColumnProps,\n  {label: 'Mirrored Icon ', props: {shouldMirrorIcon: true, disabled: false}},\n];\n\nconst ToolbarIconButtonTest = (props: {theme?: PartialEmotionCanvasTheme}) => (\n  <StaticStates theme={props.theme}>\n    <ComponentStatesTable\n      rowProps={[\n        {label: 'Toggled Off', props: {toggled: false}},\n        {label: 'Toggled On', props: {toggled: true}},\n      ]}\n      columnProps={columnProps}\n    >\n      {(props: any) => (\n        <Container>\n          <ToolbarIconButton\n            icon={playCircleIcon}\n            aria-label=\"Play\"\n            {...props}\n            onChange={() => {}} \n          />\n        </Container>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);\n\nexport const ToolbarIconButtonStates = {render: () => <ToolbarIconButtonTest />};\n\nexport const ToolbarIconButtonThemedStates = {\n  render: () => <ToolbarIconButtonTest theme={{canvas: customColorTheme}} />,\n};\n",locationsMap:{"toolbar-icon-button-states":{startLoc:{col:39,line:47},endLoc:{col:80,line:47},startBody:{col:39,line:47},endBody:{col:80,line:47}},"toolbar-icon-button-themed-states":{startLoc:{col:45,line:49},endLoc:{col:1,line:51},startBody:{col:45,line:49},endBody:{col:1,line:51}}}},chromatic:{disable:!1}}};exports.default=_default;const columnProps=[..._utils.stateTableColumnProps,{label:"Mirrored Icon ",props:{shouldMirrorIcon:!0,disabled:!1}}],ToolbarIconButtonTest=props=>React.createElement(_testing.StaticStates,{theme:props.theme},React.createElement(_testing.ComponentStatesTable,{rowProps:[{label:"Toggled Off",props:{toggled:!1}},{label:"Toggled On",props:{toggled:!0}}],columnProps},(props=>React.createElement(_utils.Container,null,React.createElement(_button.ToolbarIconButton,_extends({icon:_canvasSystemIconsWeb.playCircleIcon,"aria-label":"Play"},props,{onChange:()=>{}}))))));ToolbarIconButtonTest.displayName="ToolbarIconButtonTest";const ToolbarIconButtonStates={render:()=>React.createElement(ToolbarIconButtonTest,null)};exports.ToolbarIconButtonStates=ToolbarIconButtonStates;const ToolbarIconButtonThemedStates={render:()=>React.createElement(ToolbarIconButtonTest,{theme:{canvas:_storybook.customColorTheme}})};exports.ToolbarIconButtonThemedStates=ToolbarIconButtonThemedStates,module.exports.__namedExportsOrder=["ToolbarIconButtonThemedStates","ToolbarIconButtonStates"]},"./modules/react/button/stories/visual-testing/utils.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.stateTableColumnProps=exports.Container=void 0;var _react=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),systemIcons=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const buttonLayout={display:"flex",alignItems:"center",justifyContent:"center"},blueBackground={...buttonLayout,backgroundColor:"#0875e1",padding:"12px",borderRadius:"4px"},Container=props=>(0,_react.jsx)("div",{css:props.blue?blueBackground:buttonLayout},props.children);exports.Container=Container,Container.displayName="Container";exports.stateTableColumnProps=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}];const systemIconArray=[];for(const icon in systemIcons)systemIcons[icon].filename&&systemIconArray.push(systemIcons[icon])}}]);