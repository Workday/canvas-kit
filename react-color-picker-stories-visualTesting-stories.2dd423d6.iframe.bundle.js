"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[8742],{"./modules/react/color-picker/stories/visualTesting.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColorInputThemedStates=exports.ColorInputStates=exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_testing=__webpack_require__("./modules/react/testing/index.ts"),_storybook=__webpack_require__("./utils/storybook/index.ts"),_colorPicker=__webpack_require__("./modules/react/color-picker/index.ts"),_formField=__webpack_require__("./modules/react/form-field/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var _default={title:"Testing/Inputs/Color Picker/Color Input",component:_colorPicker.ColorInput,parameters:{storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import * as React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\nimport {customColorTheme} from '../../../../utils/storybook';\\n\\nimport {ColorInput} from '@workday/canvas-kit-react/color-picker';\\nimport {FormField} from '@workday/canvas-kit-react/form-field';\\n\\nexport default {\\n  title: 'Testing/Inputs/Color Picker/Color Input',\\n  component: ColorInput,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const ColorInputStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={permutateProps(\\n        {\\n          value: [\\n            {value: '#005cb9', label: 'Hex Value'},\\n            {value: '', label: 'No Value'},\\n          ],\\n          placeholder: [\\n            {value: undefined, label: ''},\\n            {value: '000', label: 'Placeholder'},\\n          ],\\n          showCheck: [\\n            {value: undefined, label: ''},\\n            {value: true, label: 'Checked'},\\n          ],\\n          error: [\\n            {value: undefined, label: ''},\\n            {value: 'alert', label: 'Alert'},\\n            {value: 'error', label: 'Error'},\\n          ],\\n        },\\n        props => {\\n          if (props.value !== '' && props.placeholder) {\\n            return false;\\n          } else if (props.value === '' && props.showCheck) {\\n            return false;\\n          } else {\\n            return true;\\n          }\\n        }\\n      )}\\n      columnProps={permutateProps(\\n        {\\n          className: [\\n            {label: 'Default', value: ''},\\n            {label: 'Hover', value: 'hover'},\\n            {label: 'Focus', value: 'focus'},\\n            {label: 'Focus Hover', value: 'focus hover'},\\n            {label: 'Active', value: 'active'},\\n            {label: 'Active Hover', value: 'active hover'},\\n          ],\\n          disabled: [\\n            {label: '', value: false},\\n            {label: 'Disabled', value: true},\\n          ],\\n        },\\n        props => {\\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\\n            return false;\\n          }\\n          return true;\\n        }\\n      )}\\n    >\\n      {props => (\\n        <FormField error={props.error}>\\n          <FormField.Input as={ColorInput} {...props} />\\n        </FormField>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const ColorInputThemedStates = () => <ColorInputStates />;\\nColorInputThemedStates.parameters = {\\n  canvasProviderDecorator: {\\n    theme: customColorTheme,\\n  },\\n};\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"ColorInputStates\": {\n    \"startLoc\": {\n      \"col\": 32,\n      \"line\": 23\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 86\n    },\n    \"startBody\": {\n      \"col\": 32,\n      \"line\": 23\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 86\n    }\n  },\n  \"ColorInputThemedStates\": {\n    \"startLoc\": {\n      \"col\": 38,\n      \"line\": 88\n    },\n    \"endLoc\": {\n      \"col\": 64,\n      \"line\": 88\n    },\n    \"startBody\": {\n      \"col\": 38,\n      \"line\": 88\n    },\n    \"endBody\": {\n      \"col\": 64,\n      \"line\": 88\n    }\n  }\n};\n    \nimport * as React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\nimport {customColorTheme} from '../../../../utils/storybook';\n\nimport {ColorInput} from '@workday/canvas-kit-react/color-picker';\nimport {FormField} from '@workday/canvas-kit-react/form-field';\n\nexport default {\n  title: 'Testing/Inputs/Color Picker/Color Input',\n  component: ColorInput,\n  parameters: {\n  \"storySource\": {\n    \"source\": \"import * as React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\nimport {customColorTheme} from '../../../../utils/storybook';\\n\\nimport {ColorInput} from '@workday/canvas-kit-react/color-picker';\\nimport {FormField} from '@workday/canvas-kit-react/form-field';\\n\\nexport default {\\n  title: 'Testing/Inputs/Color Picker/Color Input',\\n  component: ColorInput,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const ColorInputStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={permutateProps(\\n        {\\n          value: [\\n            {value: '#005cb9', label: 'Hex Value'},\\n            {value: '', label: 'No Value'},\\n          ],\\n          placeholder: [\\n            {value: undefined, label: ''},\\n            {value: '000', label: 'Placeholder'},\\n          ],\\n          showCheck: [\\n            {value: undefined, label: ''},\\n            {value: true, label: 'Checked'},\\n          ],\\n          error: [\\n            {value: undefined, label: ''},\\n            {value: 'alert', label: 'Alert'},\\n            {value: 'error', label: 'Error'},\\n          ],\\n        },\\n        props => {\\n          if (props.value !== '' && props.placeholder) {\\n            return false;\\n          } else if (props.value === '' && props.showCheck) {\\n            return false;\\n          } else {\\n            return true;\\n          }\\n        }\\n      )}\\n      columnProps={permutateProps(\\n        {\\n          className: [\\n            {label: 'Default', value: ''},\\n            {label: 'Hover', value: 'hover'},\\n            {label: 'Focus', value: 'focus'},\\n            {label: 'Focus Hover', value: 'focus hover'},\\n            {label: 'Active', value: 'active'},\\n            {label: 'Active Hover', value: 'active hover'},\\n          ],\\n          disabled: [\\n            {label: '', value: false},\\n            {label: 'Disabled', value: true},\\n          ],\\n        },\\n        props => {\\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\\n            return false;\\n          }\\n          return true;\\n        }\\n      )}\\n    >\\n      {props => (\\n        <FormField error={props.error}>\\n          <FormField.Input as={ColorInput} {...props} />\\n        </FormField>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const ColorInputThemedStates = () => <ColorInputStates />;\\nColorInputThemedStates.parameters = {\\n  canvasProviderDecorator: {\\n    theme: customColorTheme,\\n  },\\n};\\n\",\n    \"locationsMap\": {\n      \"color-input-states\": {\n        \"startLoc\": {\n          \"col\": 32,\n          \"line\": 23\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 86\n        },\n        \"startBody\": {\n          \"col\": 32,\n          \"line\": 23\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 86\n        }\n      },\n      \"color-input-themed-states\": {\n        \"startLoc\": {\n          \"col\": 38,\n          \"line\": 88\n        },\n        \"endLoc\": {\n          \"col\": 64,\n          \"line\": 88\n        },\n        \"startBody\": {\n          \"col\": 38,\n          \"line\": 88\n        },\n        \"endBody\": {\n          \"col\": 64,\n          \"line\": 88\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const ColorInputStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={permutateProps(\n        {\n          value: [\n            {value: '#005cb9', label: 'Hex Value'},\n            {value: '', label: 'No Value'},\n          ],\n          placeholder: [\n            {value: undefined, label: ''},\n            {value: '000', label: 'Placeholder'},\n          ],\n          showCheck: [\n            {value: undefined, label: ''},\n            {value: true, label: 'Checked'},\n          ],\n          error: [\n            {value: undefined, label: ''},\n            {value: 'alert', label: 'Alert'},\n            {value: 'error', label: 'Error'},\n          ],\n        },\n        props => {\n          if (props.value !== '' && props.placeholder) {\n            return false;\n          } else if (props.value === '' && props.showCheck) {\n            return false;\n          } else {\n            return true;\n          }\n        }\n      )}\n      columnProps={permutateProps(\n        {\n          className: [\n            {label: 'Default', value: ''},\n            {label: 'Hover', value: 'hover'},\n            {label: 'Focus', value: 'focus'},\n            {label: 'Focus Hover', value: 'focus hover'},\n            {label: 'Active', value: 'active'},\n            {label: 'Active Hover', value: 'active hover'},\n          ],\n          disabled: [\n            {label: '', value: false},\n            {label: 'Disabled', value: true},\n          ],\n        },\n        props => {\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\n            return false;\n          }\n          return true;\n        }\n      )}\n    >\n      {props => (\n        <FormField error={props.error}>\n          <FormField.Input as={ColorInput} {...props} />\n        </FormField>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);;\n\nexport const ColorInputThemedStates = () => <ColorInputStates />;\nColorInputThemedStates.parameters = {\n  canvasProviderDecorator: {\n    theme: customColorTheme,\n  },\n};\n",locationsMap:{"color-input-states":{startLoc:{col:32,line:110},endLoc:{col:1,line:173},startBody:{col:32,line:110},endBody:{col:1,line:173}},"color-input-themed-states":{startLoc:{col:38,line:175},endLoc:{col:64,line:175},startBody:{col:38,line:175},endBody:{col:64,line:175}}}},storySource:{source:"import * as React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\nimport {customColorTheme} from '../../../../utils/storybook';\n\nimport {ColorInput} from '@workday/canvas-kit-react/color-picker';\nimport {FormField} from '@workday/canvas-kit-react/form-field';\n\nexport default {\n  title: 'Testing/Inputs/Color Picker/Color Input',\n  component: ColorInput,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const ColorInputStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={permutateProps(\n        {\n          value: [\n            {value: '#005cb9', label: 'Hex Value'},\n            {value: '', label: 'No Value'},\n          ],\n          placeholder: [\n            {value: undefined, label: ''},\n            {value: '000', label: 'Placeholder'},\n          ],\n          showCheck: [\n            {value: undefined, label: ''},\n            {value: true, label: 'Checked'},\n          ],\n          error: [\n            {value: undefined, label: ''},\n            {value: 'alert', label: 'Alert'},\n            {value: 'error', label: 'Error'},\n          ],\n        },\n        props => {\n          if (props.value !== '' && props.placeholder) {\n            return false;\n          } else if (props.value === '' && props.showCheck) {\n            return false;\n          } else {\n            return true;\n          }\n        }\n      )}\n      columnProps={permutateProps(\n        {\n          className: [\n            {label: 'Default', value: ''},\n            {label: 'Hover', value: 'hover'},\n            {label: 'Focus', value: 'focus'},\n            {label: 'Focus Hover', value: 'focus hover'},\n            {label: 'Active', value: 'active'},\n            {label: 'Active Hover', value: 'active hover'},\n          ],\n          disabled: [\n            {label: '', value: false},\n            {label: 'Disabled', value: true},\n          ],\n        },\n        props => {\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\n            return false;\n          }\n          return true;\n        }\n      )}\n    >\n      {props => (\n        <FormField error={props.error}>\n          <FormField.Input as={ColorInput} {...props} />\n        </FormField>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);\n\nexport const ColorInputThemedStates = () => <ColorInputStates />;\nColorInputThemedStates.parameters = {\n  canvasProviderDecorator: {\n    theme: customColorTheme,\n  },\n};\n",locationsMap:{"color-input-states":{startLoc:{col:32,line:23},endLoc:{col:1,line:86},startBody:{col:32,line:23},endBody:{col:1,line:86}},"color-input-themed-states":{startLoc:{col:38,line:88},endLoc:{col:64,line:88},startBody:{col:38,line:88},endBody:{col:64,line:88}}}},chromatic:{disable:!1}}};exports.default=_default;const ColorInputStates=()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:(0,_testing.permutateProps)({value:[{value:"#005cb9",label:"Hex Value"},{value:"",label:"No Value"}],placeholder:[{value:void 0,label:""},{value:"000",label:"Placeholder"}],showCheck:[{value:void 0,label:""},{value:!0,label:"Checked"}],error:[{value:void 0,label:""},{value:"alert",label:"Alert"},{value:"error",label:"Error"}]},(props=>(""===props.value||!props.placeholder)&&(""!==props.value||!props.showCheck))),columnProps:(0,_testing.permutateProps)({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},(props=>!(props.disabled&&!["","hover"].includes(props.className))))},(props=>React.createElement(_formField.FormField,{error:props.error},React.createElement(_formField.FormField.Input,_extends({as:_colorPicker.ColorInput},props))))));exports.ColorInputStates=ColorInputStates,ColorInputStates.displayName="ColorInputStates";const ColorInputThemedStates=()=>React.createElement(ColorInputStates,null);exports.ColorInputThemedStates=ColorInputThemedStates,ColorInputThemedStates.displayName="ColorInputThemedStates",ColorInputThemedStates.parameters={canvasProviderDecorator:{theme:_storybook.customColorTheme}},module.exports.__namedExportsOrder=["ColorInputThemedStates","ColorInputStates"]}}]);