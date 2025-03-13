"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[6346],{"./modules/preview-react/color-picker/stories/visual-testing/ColorPicker.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.InputInteraction=exports.ColorPickerStates=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_colorPicker=__webpack_require__("./modules/preview-react/color-picker/index.ts"),_tokens=__webpack_require__("./modules/react/tokens/index.ts"),_testing=__webpack_require__("./modules/react/testing/index.ts"),_InputInteraction=__webpack_require__("./modules/preview-react/color-picker/stories/examples/InputInteraction.tsx");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}exports.default={parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import * as React from \'react\';\\nimport {ColorPicker} from \'@workday/canvas-kit-preview-react/color-picker\';\\n\\nimport {colors} from \'@workday/canvas-kit-react/tokens\';\\nimport {StaticStates, ComponentStatesTable} from \'@workday/canvas-kit-react/testing\';\\nimport {InputInteraction as InputInteractionExample} from \'../examples/InputInteraction\';\\n\\nexport default {\\n  title: \'Testing/Preview/Color Picker\',\\n  component: ColorPicker,\\n};\\n\\nexport const InputInteraction = {\\n  render: InputInteractionExample,\\n};\\n\\n// eslint-disable-next-line no-empty-function\\nconst noop = () => {};\\n\\nexport const ColorPickerStates = {\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n      pauseAnimationAtEnd: true,\\n    },\\n  },\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {label: \'Default\', props: {}},\\n          {label: \'with Hex Input\', props: {showCustomHexInput: true}},\\n          {\\n            label: \'With Reset\',\\n            props: {\\n              resetColor: colors.blueberry400,\\n              resetLabel: \'Reset\',\\n              onColorReset: noop,\\n            },\\n          },\\n          {\\n            label: \'With Reset and Hex Input\',\\n            props: {\\n              showCustomHexInput: true,\\n              resetColor: colors.blueberry400,\\n              resetLabel: \'Reset\',\\n              onColorReset: noop,\\n            },\\n          },\\n        ]}\\n        columnProps={[{label: \'Default\', props: {}}]}\\n      >\\n        {props => <ColorPicker {...props} onColorChange={noop} />}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "InputInteraction": {\n    "startLoc": {\n      "col": 32,\n      "line": 13\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 15\n    },\n    "startBody": {\n      "col": 32,\n      "line": 13\n    },\n    "endBody": {\n      "col": 1,\n      "line": 15\n    }\n  },\n  "ColorPickerStates": {\n    "startLoc": {\n      "col": 33,\n      "line": 20\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 57\n    },\n    "startBody": {\n      "col": 33,\n      "line": 20\n    },\n    "endBody": {\n      "col": 1,\n      "line": 57\n    }\n  }\n};\n    \nimport * as React from \'react\';\nimport {ColorPicker} from \'@workday/canvas-kit-preview-react/color-picker\';\n\nimport {colors} from \'@workday/canvas-kit-react/tokens\';\nimport {StaticStates, ComponentStatesTable} from \'@workday/canvas-kit-react/testing\';\nimport {InputInteraction as InputInteractionExample} from \'../examples/InputInteraction\';\n\nexport default {parameters: {\n  "storySource": {\n    "source": "import * as React from \'react\';\\nimport {ColorPicker} from \'@workday/canvas-kit-preview-react/color-picker\';\\n\\nimport {colors} from \'@workday/canvas-kit-react/tokens\';\\nimport {StaticStates, ComponentStatesTable} from \'@workday/canvas-kit-react/testing\';\\nimport {InputInteraction as InputInteractionExample} from \'../examples/InputInteraction\';\\n\\nexport default {\\n  title: \'Testing/Preview/Color Picker\',\\n  component: ColorPicker,\\n};\\n\\nexport const InputInteraction = {\\n  render: InputInteractionExample,\\n};\\n\\n\\nconst noop = () => {};\\n\\nexport const ColorPickerStates = {\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n      pauseAnimationAtEnd: true,\\n    },\\n  },\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {label: \'Default\', props: {}},\\n          {label: \'with Hex Input\', props: {showCustomHexInput: true}},\\n          {\\n            label: \'With Reset\',\\n            props: {\\n              resetColor: colors.blueberry400,\\n              resetLabel: \'Reset\',\\n              onColorReset: noop,\\n            },\\n          },\\n          {\\n            label: \'With Reset and Hex Input\',\\n            props: {\\n              showCustomHexInput: true,\\n              resetColor: colors.blueberry400,\\n              resetLabel: \'Reset\',\\n              onColorReset: noop,\\n            },\\n          },\\n        ]}\\n        columnProps={[{label: \'Default\', props: {}}]}\\n      >\\n        {props => <ColorPicker {...props} onColorChange={noop} />}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n",\n    "locationsMap": {\n      "input-interaction": {\n        "startLoc": {\n          "col": 32,\n          "line": 13\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 15\n        },\n        "startBody": {\n          "col": 32,\n          "line": 13\n        },\n        "endBody": {\n          "col": 1,\n          "line": 15\n        }\n      },\n      "color-picker-states": {\n        "startLoc": {\n          "col": 33,\n          "line": 20\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 57\n        },\n        "startBody": {\n          "col": 33,\n          "line": 20\n        },\n        "endBody": {\n          "col": 1,\n          "line": 57\n        }\n      }\n    }\n  }\n,},\n  title: \'Testing/Preview/Color Picker\',\n  component: ColorPicker,\n};\n\nexport const InputInteraction = {\n  render: InputInteractionExample,\n};;\n\n\nconst noop = () => {};\n\nexport const ColorPickerStates = {\n  parameters: {\n    chromatic: {\n      disable: false,\n      pauseAnimationAtEnd: true,\n    },\n  },\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {label: \'Default\', props: {}},\n          {label: \'with Hex Input\', props: {showCustomHexInput: true}},\n          {\n            label: \'With Reset\',\n            props: {\n              resetColor: colors.blueberry400,\n              resetLabel: \'Reset\',\n              onColorReset: noop,\n            },\n          },\n          {\n            label: \'With Reset and Hex Input\',\n            props: {\n              showCustomHexInput: true,\n              resetColor: colors.blueberry400,\n              resetLabel: \'Reset\',\n              onColorReset: noop,\n            },\n          },\n        ]}\n        columnProps={[{label: \'Default\', props: {}}]}\n      >\n        {props => <ColorPicker {...props} onColorChange={noop} />}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n',locationsMap:{"input-interaction":{startLoc:{col:32,line:100},endLoc:{col:1,line:102},startBody:{col:32,line:100},endBody:{col:1,line:102}},"color-picker-states":{startLoc:{col:33,line:107},endLoc:{col:1,line:144},startBody:{col:33,line:107},endBody:{col:1,line:144}}}},storySource:{source:"import * as React from 'react';\nimport {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';\n\nimport {colors} from '@workday/canvas-kit-react/tokens';\nimport {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';\nimport {InputInteraction as InputInteractionExample} from '../examples/InputInteraction';\n\nexport default {\n  title: 'Testing/Preview/Color Picker',\n  component: ColorPicker,\n};\n\nexport const InputInteraction = {\n  render: InputInteractionExample,\n};\n\n\nconst noop = () => {};\n\nexport const ColorPickerStates = {\n  parameters: {\n    chromatic: {\n      disable: false,\n      pauseAnimationAtEnd: true,\n    },\n  },\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {label: 'Default', props: {}},\n          {label: 'with Hex Input', props: {showCustomHexInput: true}},\n          {\n            label: 'With Reset',\n            props: {\n              resetColor: colors.blueberry400,\n              resetLabel: 'Reset',\n              onColorReset: noop,\n            },\n          },\n          {\n            label: 'With Reset and Hex Input',\n            props: {\n              showCustomHexInput: true,\n              resetColor: colors.blueberry400,\n              resetLabel: 'Reset',\n              onColorReset: noop,\n            },\n          },\n        ]}\n        columnProps={[{label: 'Default', props: {}}]}\n      >\n        {props => <ColorPicker {...props} onColorChange={noop} />}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n",locationsMap:{"input-interaction":{startLoc:{col:32,line:13},endLoc:{col:1,line:15},startBody:{col:32,line:13},endBody:{col:1,line:15}},"color-picker-states":{startLoc:{col:33,line:20},endLoc:{col:1,line:57},startBody:{col:33,line:20},endBody:{col:1,line:57}}}}},title:"Testing/Preview/Color Picker",component:_colorPicker.ColorPicker};exports.InputInteraction={render:_InputInteraction.InputInteraction};const noop=()=>{};exports.ColorPickerStates={parameters:{chromatic:{disable:!1,pauseAnimationAtEnd:!0}},render:()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:[{label:"Default",props:{}},{label:"with Hex Input",props:{showCustomHexInput:!0}},{label:"With Reset",props:{resetColor:_tokens.colors.blueberry400,resetLabel:"Reset",onColorReset:noop}},{label:"With Reset and Hex Input",props:{showCustomHexInput:!0,resetColor:_tokens.colors.blueberry400,resetLabel:"Reset",onColorReset:noop}}],columnProps:[{label:"Default",props:{}}]},(props=>React.createElement(_colorPicker.ColorPicker,_extends({},props,{onColorChange:noop})))))};module.exports.__namedExportsOrder=["InputInteraction","ColorPickerStates"]},"./modules/preview-react/color-picker/stories/examples/InputInteraction.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputInteraction=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_colorPicker=__webpack_require__("./modules/preview-react/color-picker/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const InputInteraction=()=>{const textAreaRef=React.useRef(null),[color,setColor]=React.useState("");return React.createElement("div",{className:"App"},React.createElement(_colorPicker.ColorPicker,{showCustomHexInput:!0,onColorChange:c=>{setColor(c),textAreaRef.current?.focus()}}),React.createElement("label",{htmlFor:"test"},"Text Area"),React.createElement("textarea",{id:"test",style:{color},ref:textAreaRef}))};exports.InputInteraction=InputInteraction,InputInteraction.displayName="InputInteraction",InputInteraction.__RAW__="import * as React from 'react';\nimport {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';\n\nexport const InputInteraction = () => {\n  const textAreaRef = React.useRef(null);\n  const [color, setColor] = React.useState('');\n  const handleColorChange = (c: string) => {\n    setColor(c);\n    textAreaRef.current?.focus();\n  };\n  return (\n    <div className=\"App\">\n      <ColorPicker showCustomHexInput onColorChange={handleColorChange} />\n      <label htmlFor=\"test\">Text Area</label>\n      <textarea id=\"test\" style={{color: color}} ref={textAreaRef} />\n    </div>\n  );\n};\n"}}]);