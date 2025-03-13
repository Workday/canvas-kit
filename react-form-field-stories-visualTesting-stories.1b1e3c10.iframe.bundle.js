"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[5527],{"./modules/react/form-field/stories/visualTesting.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.FormFieldThemedStates=exports.FormFieldStates=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_testing=__webpack_require__("./modules/react/testing/index.ts"),_storybook=__webpack_require__("./utils/storybook/index.ts"),_textInput=__webpack_require__("./modules/react/text-input/index.ts"),_formField=__webpack_require__("./modules/react/form-field/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}exports.default={title:"Testing/Inputs/Form Field",component:_formField.FormField,parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import * as React from \'react\';\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from \'@workday/canvas-kit-react/testing\';\\nimport {customColorTheme} from \'../../../../utils/storybook\';\\n\\nimport {TextInput} from \'@workday/canvas-kit-react/text-input\';\\nimport {FormField} from \'@workday/canvas-kit-react/form-field\';\\n\\nexport default {\\n  title: \'Testing/Inputs/Form Field\',\\n  component: FormField,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const FormFieldStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={[\\n        {label: \'Required\', props: {isRequired: true}},\\n        {label: \'Horizontal Start\', props: {orientation: \'horizontalStart\'}},\\n        {label: \'Grow\', props: {grow: true}},\\n        {label: \'Horizontal End\', props: {orientation: \'horizontalEnd\'}},\\n      ]}\\n      columnProps={permutateProps({\\n        error: [\\n          {value: undefined, label: \'Default\'},\\n          {value: \'alert\', label: \'Alert\'},\\n          {value: \'error\', label: \'Error\'},\\n        ],\\n      })}\\n    >\\n      {props => (\\n        <FormField {...props}>\\n          <FormField.Label>Label</FormField.Label>\\n          <FormField.Field>\\n            <FormField.Input as={TextInput} />\\n            <FormField.Hint>Helpful text goes here.</FormField.Hint>\\n          </FormField.Field>\\n        </FormField>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const FormFieldThemedStates = () => <FormFieldStates />;\\nFormFieldThemedStates.parameters = {\\n  canvasProviderDecorator: {\\n    theme: customColorTheme,\\n  },\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "FormFieldStates": {\n    "startLoc": {\n      "col": 31,\n      "line": 22\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 50\n    },\n    "startBody": {\n      "col": 31,\n      "line": 22\n    },\n    "endBody": {\n      "col": 1,\n      "line": 50\n    }\n  },\n  "FormFieldThemedStates": {\n    "startLoc": {\n      "col": 37,\n      "line": 52\n    },\n    "endLoc": {\n      "col": 62,\n      "line": 52\n    },\n    "startBody": {\n      "col": 37,\n      "line": 52\n    },\n    "endBody": {\n      "col": 62,\n      "line": 52\n    }\n  }\n};\n    \nimport * as React from \'react\';\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from \'@workday/canvas-kit-react/testing\';\nimport {customColorTheme} from \'../../../../utils/storybook\';\n\nimport {TextInput} from \'@workday/canvas-kit-react/text-input\';\nimport {FormField} from \'@workday/canvas-kit-react/form-field\';\n\nexport default {\n  title: \'Testing/Inputs/Form Field\',\n  component: FormField,\n  parameters: {\n  "storySource": {\n    "source": "import * as React from \'react\';\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from \'@workday/canvas-kit-react/testing\';\\nimport {customColorTheme} from \'../../../../utils/storybook\';\\n\\nimport {TextInput} from \'@workday/canvas-kit-react/text-input\';\\nimport {FormField} from \'@workday/canvas-kit-react/form-field\';\\n\\nexport default {\\n  title: \'Testing/Inputs/Form Field\',\\n  component: FormField,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const FormFieldStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={[\\n        {label: \'Required\', props: {isRequired: true}},\\n        {label: \'Horizontal Start\', props: {orientation: \'horizontalStart\'}},\\n        {label: \'Grow\', props: {grow: true}},\\n        {label: \'Horizontal End\', props: {orientation: \'horizontalEnd\'}},\\n      ]}\\n      columnProps={permutateProps({\\n        error: [\\n          {value: undefined, label: \'Default\'},\\n          {value: \'alert\', label: \'Alert\'},\\n          {value: \'error\', label: \'Error\'},\\n        ],\\n      })}\\n    >\\n      {props => (\\n        <FormField {...props}>\\n          <FormField.Label>Label</FormField.Label>\\n          <FormField.Field>\\n            <FormField.Input as={TextInput} />\\n            <FormField.Hint>Helpful text goes here.</FormField.Hint>\\n          </FormField.Field>\\n        </FormField>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const FormFieldThemedStates = () => <FormFieldStates />;\\nFormFieldThemedStates.parameters = {\\n  canvasProviderDecorator: {\\n    theme: customColorTheme,\\n  },\\n};\\n",\n    "locationsMap": {\n      "form-field-states": {\n        "startLoc": {\n          "col": 31,\n          "line": 22\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 50\n        },\n        "startBody": {\n          "col": 31,\n          "line": 22\n        },\n        "endBody": {\n          "col": 1,\n          "line": 50\n        }\n      },\n      "form-field-themed-states": {\n        "startLoc": {\n          "col": 37,\n          "line": 52\n        },\n        "endLoc": {\n          "col": 62,\n          "line": 52\n        },\n        "startBody": {\n          "col": 37,\n          "line": 52\n        },\n        "endBody": {\n          "col": 62,\n          "line": 52\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const FormFieldStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={[\n        {label: \'Required\', props: {isRequired: true}},\n        {label: \'Horizontal Start\', props: {orientation: \'horizontalStart\'}},\n        {label: \'Grow\', props: {grow: true}},\n        {label: \'Horizontal End\', props: {orientation: \'horizontalEnd\'}},\n      ]}\n      columnProps={permutateProps({\n        error: [\n          {value: undefined, label: \'Default\'},\n          {value: \'alert\', label: \'Alert\'},\n          {value: \'error\', label: \'Error\'},\n        ],\n      })}\n    >\n      {props => (\n        <FormField {...props}>\n          <FormField.Label>Label</FormField.Label>\n          <FormField.Field>\n            <FormField.Input as={TextInput} />\n            <FormField.Hint>Helpful text goes here.</FormField.Hint>\n          </FormField.Field>\n        </FormField>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);;\n\nexport const FormFieldThemedStates = () => <FormFieldStates />;\nFormFieldThemedStates.parameters = {\n  canvasProviderDecorator: {\n    theme: customColorTheme,\n  },\n};\n',locationsMap:{"form-field-states":{startLoc:{col:31,line:109},endLoc:{col:1,line:137},startBody:{col:31,line:109},endBody:{col:1,line:137}},"form-field-themed-states":{startLoc:{col:37,line:139},endLoc:{col:62,line:139},startBody:{col:37,line:139},endBody:{col:62,line:139}}}},storySource:{source:"import * as React from 'react';\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\nimport {customColorTheme} from '../../../../utils/storybook';\n\nimport {TextInput} from '@workday/canvas-kit-react/text-input';\nimport {FormField} from '@workday/canvas-kit-react/form-field';\n\nexport default {\n  title: 'Testing/Inputs/Form Field',\n  component: FormField,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const FormFieldStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={[\n        {label: 'Required', props: {isRequired: true}},\n        {label: 'Horizontal Start', props: {orientation: 'horizontalStart'}},\n        {label: 'Grow', props: {grow: true}},\n        {label: 'Horizontal End', props: {orientation: 'horizontalEnd'}},\n      ]}\n      columnProps={permutateProps({\n        error: [\n          {value: undefined, label: 'Default'},\n          {value: 'alert', label: 'Alert'},\n          {value: 'error', label: 'Error'},\n        ],\n      })}\n    >\n      {props => (\n        <FormField {...props}>\n          <FormField.Label>Label</FormField.Label>\n          <FormField.Field>\n            <FormField.Input as={TextInput} />\n            <FormField.Hint>Helpful text goes here.</FormField.Hint>\n          </FormField.Field>\n        </FormField>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);\n\nexport const FormFieldThemedStates = () => <FormFieldStates />;\nFormFieldThemedStates.parameters = {\n  canvasProviderDecorator: {\n    theme: customColorTheme,\n  },\n};\n",locationsMap:{"form-field-states":{startLoc:{col:31,line:22},endLoc:{col:1,line:50},startBody:{col:31,line:22},endBody:{col:1,line:50}},"form-field-themed-states":{startLoc:{col:37,line:52},endLoc:{col:62,line:52},startBody:{col:37,line:52},endBody:{col:62,line:52}}}},chromatic:{disable:!1}}};const FormFieldStates=()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:[{label:"Required",props:{isRequired:!0}},{label:"Horizontal Start",props:{orientation:"horizontalStart"}},{label:"Grow",props:{grow:!0}},{label:"Horizontal End",props:{orientation:"horizontalEnd"}}],columnProps:(0,_testing.permutateProps)({error:[{value:void 0,label:"Default"},{value:"alert",label:"Alert"},{value:"error",label:"Error"}]})},(props=>React.createElement(_formField.FormField,props,React.createElement(_formField.FormField.Label,null,"Label"),React.createElement(_formField.FormField.Field,null,React.createElement(_formField.FormField.Input,{as:_textInput.TextInput}),React.createElement(_formField.FormField.Hint,null,"Helpful text goes here."))))));exports.FormFieldStates=FormFieldStates,FormFieldStates.displayName="FormFieldStates";const FormFieldThemedStates=()=>React.createElement(FormFieldStates,null);exports.FormFieldThemedStates=FormFieldThemedStates,FormFieldThemedStates.displayName="FormFieldThemedStates",FormFieldThemedStates.parameters={canvasProviderDecorator:{theme:_storybook.customColorTheme}},module.exports.__namedExportsOrder=["FormFieldThemedStates","FormFieldStates"]}}]);