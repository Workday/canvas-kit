"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[3992],{"./modules/react/text-input/stories/visualTesting.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.InputGroupStates=exports.TextInputThemedStates=exports.TextInputStates=exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_testing=__webpack_require__("./modules/react/testing/index.ts"),_storybook=__webpack_require__("./utils/storybook/index.ts"),_textInput=__webpack_require__("./modules/react/text-input/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"),_icon=__webpack_require__("./modules/react/icon/index.ts"),_button=__webpack_require__("./modules/react/button/index.ts"),_common=__webpack_require__("./modules/react/common/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var _default={title:"Testing/Inputs/Text Input",component:_textInput.TextInput,parameters:{storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import * as React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\nimport {customColorTheme} from '../../../../utils/storybook';\\nimport {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';\\nimport {searchIcon, xSmallIcon} from '@workday/canvas-system-icons-web';\\nimport {SystemIcon} from '@workday/canvas-kit-react/icon';\\nimport {TertiaryButton} from '@workday/canvas-kit-react/button';\\nimport {CanvasProvider} from '@workday/canvas-kit-react/common';\\n\\nexport default {\\n  title: 'Testing/Inputs/Text Input',\\n  component: TextInput,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const TextInputStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={permutateProps(\\n        {\\n          value: [\\n            {value: 'Input value', label: 'With Value'},\\n            {value: '', label: 'No Value'},\\n          ],\\n          placeholder: [{value: 'Placeholder', label: 'Placeholder'}],\\n          error: [\\n            {value: undefined, label: ''},\\n            {value: TextInput.ErrorType.Alert, label: 'Alert'},\\n            {value: TextInput.ErrorType.Error, label: 'Error'},\\n          ],\\n        },\\n        props => {\\n          if (props.value === '' && !props.placeholder) {\\n            return false;\\n          }\\n          return true;\\n        }\\n      )}\\n      columnProps={permutateProps(\\n        {\\n          className: [\\n            {label: 'Default', value: ''},\\n            {label: 'Hover', value: 'hover'},\\n            {label: 'Focus', value: 'focus'},\\n            {label: 'Focus Hover', value: 'focus hover'},\\n            {label: 'Active', value: 'active'},\\n            {label: 'Active Hover', value: 'active hover'},\\n          ],\\n          disabled: [\\n            {label: '', value: false},\\n            {label: 'Disabled', value: true},\\n          ],\\n        },\\n        props => {\\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\\n            return false;\\n          }\\n          return true;\\n        }\\n      )}\\n    >\\n      {props => (\\n        <TextInput\\n          {...props}\\n          style={{minWidth: 60, width: 100}}\\n          onChange={() => {}} // eslint-disable-line no-empty-function\\n        />\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const TextInputThemedStates = () => <TextInputStates />;\\nTextInputThemedStates.parameters = {\\n  canvasProviderDecorator: {\\n    theme: customColorTheme,\\n  },\\n};\\n\\nexport const InputGroupStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={[\\n        {\\n          label: 'Start',\\n          props: {\\n            start: [\\n              <InputGroup.InnerStart>\\n                <SystemIcon icon={searchIcon} size=\\\"small\\\" />\\n              </InputGroup.InnerStart>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'End',\\n          props: {\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <TertiaryButton role=\\\"presentation\\\" icon={xSmallIcon} size=\\\"small\\\" tabIndex={-1} />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'Both',\\n          props: {\\n            start: [\\n              <InputGroup.InnerStart>\\n                <SystemIcon icon={searchIcon} size=\\\"small\\\" />\\n              </InputGroup.InnerStart>,\\n            ],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <TertiaryButton role=\\\"presentation\\\" icon={xSmallIcon} size=\\\"small\\\" tabIndex={-1} />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'Multiple',\\n          props: {\\n            start: [\\n              <InputGroup.InnerStart>\\n                <span>1</span>\\n              </InputGroup.InnerStart>,\\n              <InputGroup.InnerStart>\\n                <span>2</span>\\n              </InputGroup.InnerStart>,\\n              <InputGroup.InnerStart>\\n                <span>3</span>\\n              </InputGroup.InnerStart>,\\n            ],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <span>4</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd>\\n                <span>5</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd>\\n                <span>6</span>\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'ClearButton w/ value',\\n          props: {\\n            placeholder: 'Placeholder',\\n            value: 'Some Value',\\n            start: [],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <InputGroup.ClearButton />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'ClearButton w/o value',\\n          props: {\\n            placeholder: '',\\n            value: '',\\n            start: [],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <InputGroup.ClearButton />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'Variable Width',\\n          props: {\\n            end: [\\n              <InputGroup.InnerEnd width=\\\"10px\\\" backgroundColor=\\\"blueberry200\\\">\\n                <span>1</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd width=\\\"20px\\\" backgroundColor=\\\"cantaloupe200\\\">\\n                <span>2</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd width=\\\"30px\\\" backgroundColor=\\\"greenApple200\\\">\\n                <span>3</span>\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n      ]}\\n      columnProps={[\\n        {label: 'LTR', props: {dir: 'ltr'}},\\n        {label: 'RTL', props: {dir: 'rtl'}},\\n      ]}\\n    >\\n      {({value, placeholder, ...props}) => (\\n        <CanvasProvider theme={{canvas: {direction: props.dir}}}>\\n          <InputGroup width={300}>\\n            {props.start}\\n            <InputGroup.Input\\n              placeholder={placeholder}\\n              value={value ?? 'Very Long Text. Very Long Text. Very Long Text.'}\\n            />\\n            {props.end}\\n          </InputGroup>\\n        </CanvasProvider>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"TextInputStates\": {\n    \"startLoc\": {\n      \"col\": 31,\n      \"line\": 25\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 80\n    },\n    \"startBody\": {\n      \"col\": 31,\n      \"line\": 25\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 80\n    }\n  },\n  \"TextInputThemedStates\": {\n    \"startLoc\": {\n      \"col\": 37,\n      \"line\": 82\n    },\n    \"endLoc\": {\n      \"col\": 62,\n      \"line\": 82\n    },\n    \"startBody\": {\n      \"col\": 37,\n      \"line\": 82\n    },\n    \"endBody\": {\n      \"col\": 62,\n      \"line\": 82\n    }\n  },\n  \"InputGroupStates\": {\n    \"startLoc\": {\n      \"col\": 32,\n      \"line\": 89\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 217\n    },\n    \"startBody\": {\n      \"col\": 32,\n      \"line\": 89\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 217\n    }\n  }\n};\n    \nimport * as React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\nimport {customColorTheme} from '../../../../utils/storybook';\nimport {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';\nimport {searchIcon, xSmallIcon} from '@workday/canvas-system-icons-web';\nimport {SystemIcon} from '@workday/canvas-kit-react/icon';\nimport {TertiaryButton} from '@workday/canvas-kit-react/button';\nimport {CanvasProvider} from '@workday/canvas-kit-react/common';\n\nexport default {\n  title: 'Testing/Inputs/Text Input',\n  component: TextInput,\n  parameters: {\n  \"storySource\": {\n    \"source\": \"import * as React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\nimport {customColorTheme} from '../../../../utils/storybook';\\nimport {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';\\nimport {searchIcon, xSmallIcon} from '@workday/canvas-system-icons-web';\\nimport {SystemIcon} from '@workday/canvas-kit-react/icon';\\nimport {TertiaryButton} from '@workday/canvas-kit-react/button';\\nimport {CanvasProvider} from '@workday/canvas-kit-react/common';\\n\\nexport default {\\n  title: 'Testing/Inputs/Text Input',\\n  component: TextInput,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const TextInputStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={permutateProps(\\n        {\\n          value: [\\n            {value: 'Input value', label: 'With Value'},\\n            {value: '', label: 'No Value'},\\n          ],\\n          placeholder: [{value: 'Placeholder', label: 'Placeholder'}],\\n          error: [\\n            {value: undefined, label: ''},\\n            {value: TextInput.ErrorType.Alert, label: 'Alert'},\\n            {value: TextInput.ErrorType.Error, label: 'Error'},\\n          ],\\n        },\\n        props => {\\n          if (props.value === '' && !props.placeholder) {\\n            return false;\\n          }\\n          return true;\\n        }\\n      )}\\n      columnProps={permutateProps(\\n        {\\n          className: [\\n            {label: 'Default', value: ''},\\n            {label: 'Hover', value: 'hover'},\\n            {label: 'Focus', value: 'focus'},\\n            {label: 'Focus Hover', value: 'focus hover'},\\n            {label: 'Active', value: 'active'},\\n            {label: 'Active Hover', value: 'active hover'},\\n          ],\\n          disabled: [\\n            {label: '', value: false},\\n            {label: 'Disabled', value: true},\\n          ],\\n        },\\n        props => {\\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\\n            return false;\\n          }\\n          return true;\\n        }\\n      )}\\n    >\\n      {props => (\\n        <TextInput\\n          {...props}\\n          style={{minWidth: 60, width: 100}}\\n          onChange={() => {}} \\n        />\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\\nexport const TextInputThemedStates = () => <TextInputStates />;\\nTextInputThemedStates.parameters = {\\n  canvasProviderDecorator: {\\n    theme: customColorTheme,\\n  },\\n};\\n\\nexport const InputGroupStates = () => (\\n  <StaticStates>\\n    <ComponentStatesTable\\n      rowProps={[\\n        {\\n          label: 'Start',\\n          props: {\\n            start: [\\n              <InputGroup.InnerStart>\\n                <SystemIcon icon={searchIcon} size=\\\"small\\\" />\\n              </InputGroup.InnerStart>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'End',\\n          props: {\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <TertiaryButton role=\\\"presentation\\\" icon={xSmallIcon} size=\\\"small\\\" tabIndex={-1} />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'Both',\\n          props: {\\n            start: [\\n              <InputGroup.InnerStart>\\n                <SystemIcon icon={searchIcon} size=\\\"small\\\" />\\n              </InputGroup.InnerStart>,\\n            ],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <TertiaryButton role=\\\"presentation\\\" icon={xSmallIcon} size=\\\"small\\\" tabIndex={-1} />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'Multiple',\\n          props: {\\n            start: [\\n              <InputGroup.InnerStart>\\n                <span>1</span>\\n              </InputGroup.InnerStart>,\\n              <InputGroup.InnerStart>\\n                <span>2</span>\\n              </InputGroup.InnerStart>,\\n              <InputGroup.InnerStart>\\n                <span>3</span>\\n              </InputGroup.InnerStart>,\\n            ],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <span>4</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd>\\n                <span>5</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd>\\n                <span>6</span>\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'ClearButton w/ value',\\n          props: {\\n            placeholder: 'Placeholder',\\n            value: 'Some Value',\\n            start: [],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <InputGroup.ClearButton />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'ClearButton w/o value',\\n          props: {\\n            placeholder: '',\\n            value: '',\\n            start: [],\\n            end: [\\n              <InputGroup.InnerEnd>\\n                <InputGroup.ClearButton />\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n        {\\n          label: 'Variable Width',\\n          props: {\\n            end: [\\n              <InputGroup.InnerEnd width=\\\"10px\\\" backgroundColor=\\\"blueberry200\\\">\\n                <span>1</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd width=\\\"20px\\\" backgroundColor=\\\"cantaloupe200\\\">\\n                <span>2</span>\\n              </InputGroup.InnerEnd>,\\n              <InputGroup.InnerEnd width=\\\"30px\\\" backgroundColor=\\\"greenApple200\\\">\\n                <span>3</span>\\n              </InputGroup.InnerEnd>,\\n            ],\\n          },\\n        },\\n      ]}\\n      columnProps={[\\n        {label: 'LTR', props: {dir: 'ltr'}},\\n        {label: 'RTL', props: {dir: 'rtl'}},\\n      ]}\\n    >\\n      {({value, placeholder, ...props}) => (\\n        <CanvasProvider theme={{canvas: {direction: props.dir}}}>\\n          <InputGroup width={300}>\\n            {props.start}\\n            <InputGroup.Input\\n              placeholder={placeholder}\\n              value={value ?? 'Very Long Text. Very Long Text. Very Long Text.'}\\n            />\\n            {props.end}\\n          </InputGroup>\\n        </CanvasProvider>\\n      )}\\n    </ComponentStatesTable>\\n  </StaticStates>\\n);\\n\",\n    \"locationsMap\": {\n      \"text-input-states\": {\n        \"startLoc\": {\n          \"col\": 31,\n          \"line\": 25\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 80\n        },\n        \"startBody\": {\n          \"col\": 31,\n          \"line\": 25\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 80\n        }\n      },\n      \"text-input-themed-states\": {\n        \"startLoc\": {\n          \"col\": 37,\n          \"line\": 82\n        },\n        \"endLoc\": {\n          \"col\": 62,\n          \"line\": 82\n        },\n        \"startBody\": {\n          \"col\": 37,\n          \"line\": 82\n        },\n        \"endBody\": {\n          \"col\": 62,\n          \"line\": 82\n        }\n      },\n      \"input-group-states\": {\n        \"startLoc\": {\n          \"col\": 32,\n          \"line\": 89\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 217\n        },\n        \"startBody\": {\n          \"col\": 32,\n          \"line\": 89\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 217\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const TextInputStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={permutateProps(\n        {\n          value: [\n            {value: 'Input value', label: 'With Value'},\n            {value: '', label: 'No Value'},\n          ],\n          placeholder: [{value: 'Placeholder', label: 'Placeholder'}],\n          error: [\n            {value: undefined, label: ''},\n            {value: TextInput.ErrorType.Alert, label: 'Alert'},\n            {value: TextInput.ErrorType.Error, label: 'Error'},\n          ],\n        },\n        props => {\n          if (props.value === '' && !props.placeholder) {\n            return false;\n          }\n          return true;\n        }\n      )}\n      columnProps={permutateProps(\n        {\n          className: [\n            {label: 'Default', value: ''},\n            {label: 'Hover', value: 'hover'},\n            {label: 'Focus', value: 'focus'},\n            {label: 'Focus Hover', value: 'focus hover'},\n            {label: 'Active', value: 'active'},\n            {label: 'Active Hover', value: 'active hover'},\n          ],\n          disabled: [\n            {label: '', value: false},\n            {label: 'Disabled', value: true},\n          ],\n        },\n        props => {\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\n            return false;\n          }\n          return true;\n        }\n      )}\n    >\n      {props => (\n        <TextInput\n          {...props}\n          style={{minWidth: 60, width: 100}}\n          onChange={() => {}} \n        />\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);;\n\nexport const TextInputThemedStates = () => <TextInputStates />;;\nTextInputThemedStates.parameters = {\n  canvasProviderDecorator: {\n    theme: customColorTheme,\n  },\n};\n\nexport const InputGroupStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={[\n        {\n          label: 'Start',\n          props: {\n            start: [\n              <InputGroup.InnerStart>\n                <SystemIcon icon={searchIcon} size=\"small\" />\n              </InputGroup.InnerStart>,\n            ],\n          },\n        },\n        {\n          label: 'End',\n          props: {\n            end: [\n              <InputGroup.InnerEnd>\n                <TertiaryButton role=\"presentation\" icon={xSmallIcon} size=\"small\" tabIndex={-1} />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'Both',\n          props: {\n            start: [\n              <InputGroup.InnerStart>\n                <SystemIcon icon={searchIcon} size=\"small\" />\n              </InputGroup.InnerStart>,\n            ],\n            end: [\n              <InputGroup.InnerEnd>\n                <TertiaryButton role=\"presentation\" icon={xSmallIcon} size=\"small\" tabIndex={-1} />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'Multiple',\n          props: {\n            start: [\n              <InputGroup.InnerStart>\n                <span>1</span>\n              </InputGroup.InnerStart>,\n              <InputGroup.InnerStart>\n                <span>2</span>\n              </InputGroup.InnerStart>,\n              <InputGroup.InnerStart>\n                <span>3</span>\n              </InputGroup.InnerStart>,\n            ],\n            end: [\n              <InputGroup.InnerEnd>\n                <span>4</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd>\n                <span>5</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd>\n                <span>6</span>\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'ClearButton w/ value',\n          props: {\n            placeholder: 'Placeholder',\n            value: 'Some Value',\n            start: [],\n            end: [\n              <InputGroup.InnerEnd>\n                <InputGroup.ClearButton />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'ClearButton w/o value',\n          props: {\n            placeholder: '',\n            value: '',\n            start: [],\n            end: [\n              <InputGroup.InnerEnd>\n                <InputGroup.ClearButton />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'Variable Width',\n          props: {\n            end: [\n              <InputGroup.InnerEnd width=\"10px\" backgroundColor=\"blueberry200\">\n                <span>1</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd width=\"20px\" backgroundColor=\"cantaloupe200\">\n                <span>2</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd width=\"30px\" backgroundColor=\"greenApple200\">\n                <span>3</span>\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n      ]}\n      columnProps={[\n        {label: 'LTR', props: {dir: 'ltr'}},\n        {label: 'RTL', props: {dir: 'rtl'}},\n      ]}\n    >\n      {({value, placeholder, ...props}) => (\n        <CanvasProvider theme={{canvas: {direction: props.dir}}}>\n          <InputGroup width={300}>\n            {props.start}\n            <InputGroup.Input\n              placeholder={placeholder}\n              value={value ?? 'Very Long Text. Very Long Text. Very Long Text.'}\n            />\n            {props.end}\n          </InputGroup>\n        </CanvasProvider>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);\n",locationsMap:{"text-input-states":{startLoc:{col:31,line:148},endLoc:{col:1,line:203},startBody:{col:31,line:148},endBody:{col:1,line:203}},"text-input-themed-states":{startLoc:{col:37,line:205},endLoc:{col:62,line:205},startBody:{col:37,line:205},endBody:{col:62,line:205}},"input-group-states":{startLoc:{col:32,line:212},endLoc:{col:1,line:340},startBody:{col:32,line:212},endBody:{col:1,line:340}}}},storySource:{source:"import * as React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\nimport {customColorTheme} from '../../../../utils/storybook';\nimport {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';\nimport {searchIcon, xSmallIcon} from '@workday/canvas-system-icons-web';\nimport {SystemIcon} from '@workday/canvas-kit-react/icon';\nimport {TertiaryButton} from '@workday/canvas-kit-react/button';\nimport {CanvasProvider} from '@workday/canvas-kit-react/common';\n\nexport default {\n  title: 'Testing/Inputs/Text Input',\n  component: TextInput,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const TextInputStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={permutateProps(\n        {\n          value: [\n            {value: 'Input value', label: 'With Value'},\n            {value: '', label: 'No Value'},\n          ],\n          placeholder: [{value: 'Placeholder', label: 'Placeholder'}],\n          error: [\n            {value: undefined, label: ''},\n            {value: TextInput.ErrorType.Alert, label: 'Alert'},\n            {value: TextInput.ErrorType.Error, label: 'Error'},\n          ],\n        },\n        props => {\n          if (props.value === '' && !props.placeholder) {\n            return false;\n          }\n          return true;\n        }\n      )}\n      columnProps={permutateProps(\n        {\n          className: [\n            {label: 'Default', value: ''},\n            {label: 'Hover', value: 'hover'},\n            {label: 'Focus', value: 'focus'},\n            {label: 'Focus Hover', value: 'focus hover'},\n            {label: 'Active', value: 'active'},\n            {label: 'Active Hover', value: 'active hover'},\n          ],\n          disabled: [\n            {label: '', value: false},\n            {label: 'Disabled', value: true},\n          ],\n        },\n        props => {\n          if (props.disabled && !['', 'hover'].includes(props.className)) {\n            return false;\n          }\n          return true;\n        }\n      )}\n    >\n      {props => (\n        <TextInput\n          {...props}\n          style={{minWidth: 60, width: 100}}\n          onChange={() => {}} \n        />\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);\n\nexport const TextInputThemedStates = () => <TextInputStates />;\nTextInputThemedStates.parameters = {\n  canvasProviderDecorator: {\n    theme: customColorTheme,\n  },\n};\n\nexport const InputGroupStates = () => (\n  <StaticStates>\n    <ComponentStatesTable\n      rowProps={[\n        {\n          label: 'Start',\n          props: {\n            start: [\n              <InputGroup.InnerStart>\n                <SystemIcon icon={searchIcon} size=\"small\" />\n              </InputGroup.InnerStart>,\n            ],\n          },\n        },\n        {\n          label: 'End',\n          props: {\n            end: [\n              <InputGroup.InnerEnd>\n                <TertiaryButton role=\"presentation\" icon={xSmallIcon} size=\"small\" tabIndex={-1} />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'Both',\n          props: {\n            start: [\n              <InputGroup.InnerStart>\n                <SystemIcon icon={searchIcon} size=\"small\" />\n              </InputGroup.InnerStart>,\n            ],\n            end: [\n              <InputGroup.InnerEnd>\n                <TertiaryButton role=\"presentation\" icon={xSmallIcon} size=\"small\" tabIndex={-1} />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'Multiple',\n          props: {\n            start: [\n              <InputGroup.InnerStart>\n                <span>1</span>\n              </InputGroup.InnerStart>,\n              <InputGroup.InnerStart>\n                <span>2</span>\n              </InputGroup.InnerStart>,\n              <InputGroup.InnerStart>\n                <span>3</span>\n              </InputGroup.InnerStart>,\n            ],\n            end: [\n              <InputGroup.InnerEnd>\n                <span>4</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd>\n                <span>5</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd>\n                <span>6</span>\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'ClearButton w/ value',\n          props: {\n            placeholder: 'Placeholder',\n            value: 'Some Value',\n            start: [],\n            end: [\n              <InputGroup.InnerEnd>\n                <InputGroup.ClearButton />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'ClearButton w/o value',\n          props: {\n            placeholder: '',\n            value: '',\n            start: [],\n            end: [\n              <InputGroup.InnerEnd>\n                <InputGroup.ClearButton />\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n        {\n          label: 'Variable Width',\n          props: {\n            end: [\n              <InputGroup.InnerEnd width=\"10px\" backgroundColor=\"blueberry200\">\n                <span>1</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd width=\"20px\" backgroundColor=\"cantaloupe200\">\n                <span>2</span>\n              </InputGroup.InnerEnd>,\n              <InputGroup.InnerEnd width=\"30px\" backgroundColor=\"greenApple200\">\n                <span>3</span>\n              </InputGroup.InnerEnd>,\n            ],\n          },\n        },\n      ]}\n      columnProps={[\n        {label: 'LTR', props: {dir: 'ltr'}},\n        {label: 'RTL', props: {dir: 'rtl'}},\n      ]}\n    >\n      {({value, placeholder, ...props}) => (\n        <CanvasProvider theme={{canvas: {direction: props.dir}}}>\n          <InputGroup width={300}>\n            {props.start}\n            <InputGroup.Input\n              placeholder={placeholder}\n              value={value ?? 'Very Long Text. Very Long Text. Very Long Text.'}\n            />\n            {props.end}\n          </InputGroup>\n        </CanvasProvider>\n      )}\n    </ComponentStatesTable>\n  </StaticStates>\n);\n",locationsMap:{"text-input-states":{startLoc:{col:31,line:25},endLoc:{col:1,line:80},startBody:{col:31,line:25},endBody:{col:1,line:80}},"text-input-themed-states":{startLoc:{col:37,line:82},endLoc:{col:62,line:82},startBody:{col:37,line:82},endBody:{col:62,line:82}},"input-group-states":{startLoc:{col:32,line:89},endLoc:{col:1,line:217},startBody:{col:32,line:89},endBody:{col:1,line:217}}}},chromatic:{disable:!1}}};exports.default=_default;const TextInputStates=()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:(0,_testing.permutateProps)({value:[{value:"Input value",label:"With Value"},{value:"",label:"No Value"}],placeholder:[{value:"Placeholder",label:"Placeholder"}],error:[{value:void 0,label:""},{value:_textInput.TextInput.ErrorType.Alert,label:"Alert"},{value:_textInput.TextInput.ErrorType.Error,label:"Error"}]},(props=>!(""===props.value&&!props.placeholder))),columnProps:(0,_testing.permutateProps)({className:[{label:"Default",value:""},{label:"Hover",value:"hover"},{label:"Focus",value:"focus"},{label:"Focus Hover",value:"focus hover"},{label:"Active",value:"active"},{label:"Active Hover",value:"active hover"}],disabled:[{label:"",value:!1},{label:"Disabled",value:!0}]},(props=>!(props.disabled&&!["","hover"].includes(props.className))))},(props=>React.createElement(_textInput.TextInput,_extends({},props,{style:{minWidth:60,width:100},onChange:()=>{}})))));exports.TextInputStates=TextInputStates,TextInputStates.displayName="TextInputStates";const TextInputThemedStates=()=>React.createElement(TextInputStates,null);exports.TextInputThemedStates=TextInputThemedStates,TextInputThemedStates.displayName="TextInputThemedStates",TextInputThemedStates.parameters={canvasProviderDecorator:{theme:_storybook.customColorTheme}};const InputGroupStates=()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:[{label:"Start",props:{start:[React.createElement(_textInput.InputGroup.InnerStart,null,React.createElement(_icon.SystemIcon,{icon:_canvasSystemIconsWeb.searchIcon,size:"small"}))]}},{label:"End",props:{end:[React.createElement(_textInput.InputGroup.InnerEnd,null,React.createElement(_button.TertiaryButton,{role:"presentation",icon:_canvasSystemIconsWeb.xSmallIcon,size:"small",tabIndex:-1}))]}},{label:"Both",props:{start:[React.createElement(_textInput.InputGroup.InnerStart,null,React.createElement(_icon.SystemIcon,{icon:_canvasSystemIconsWeb.searchIcon,size:"small"}))],end:[React.createElement(_textInput.InputGroup.InnerEnd,null,React.createElement(_button.TertiaryButton,{role:"presentation",icon:_canvasSystemIconsWeb.xSmallIcon,size:"small",tabIndex:-1}))]}},{label:"Multiple",props:{start:[React.createElement(_textInput.InputGroup.InnerStart,null,React.createElement("span",null,"1")),React.createElement(_textInput.InputGroup.InnerStart,null,React.createElement("span",null,"2")),React.createElement(_textInput.InputGroup.InnerStart,null,React.createElement("span",null,"3"))],end:[React.createElement(_textInput.InputGroup.InnerEnd,null,React.createElement("span",null,"4")),React.createElement(_textInput.InputGroup.InnerEnd,null,React.createElement("span",null,"5")),React.createElement(_textInput.InputGroup.InnerEnd,null,React.createElement("span",null,"6"))]}},{label:"ClearButton w/ value",props:{placeholder:"Placeholder",value:"Some Value",start:[],end:[React.createElement(_textInput.InputGroup.InnerEnd,null,React.createElement(_textInput.InputGroup.ClearButton,null))]}},{label:"ClearButton w/o value",props:{placeholder:"",value:"",start:[],end:[React.createElement(_textInput.InputGroup.InnerEnd,null,React.createElement(_textInput.InputGroup.ClearButton,null))]}},{label:"Variable Width",props:{end:[React.createElement(_textInput.InputGroup.InnerEnd,{width:"10px",backgroundColor:"blueberry200"},React.createElement("span",null,"1")),React.createElement(_textInput.InputGroup.InnerEnd,{width:"20px",backgroundColor:"cantaloupe200"},React.createElement("span",null,"2")),React.createElement(_textInput.InputGroup.InnerEnd,{width:"30px",backgroundColor:"greenApple200"},React.createElement("span",null,"3"))]}}],columnProps:[{label:"LTR",props:{dir:"ltr"}},{label:"RTL",props:{dir:"rtl"}}]},(({value,placeholder,...props})=>React.createElement(_common.CanvasProvider,{theme:{canvas:{direction:props.dir}}},React.createElement(_textInput.InputGroup,{width:300},props.start,React.createElement(_textInput.InputGroup.Input,{placeholder,value:value??"Very Long Text. Very Long Text. Very Long Text."}),props.end)))));exports.InputGroupStates=InputGroupStates,InputGroupStates.displayName="InputGroupStates",module.exports.__namedExportsOrder=["InputGroupStates","TextInputThemedStates","TextInputStates"]}}]);