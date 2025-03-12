"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[2741],{"./modules/react/button/stories/visual-testing/deprecatedButton.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.DeprecatedButtonStates=exports.default=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_testing=__webpack_require__("./modules/react/testing/index.ts"),_button=__webpack_require__("./modules/react/button/index.ts"),_utils=__webpack_require__("./modules/react/button/stories/visual-testing/utils.tsx");var _default={title:"Testing/Buttons/Button/Deprecated Button",component:_button.deprecated_Button,parameters:{storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\nimport {deprecated_Button as DeprecatedButton} from '@workday/canvas-kit-react/button';\\nimport {Container, stateTableColumnProps} from './utils';\\n\\nexport default {\\n  title: 'Testing/Buttons/Button/Deprecated Button',\\n  component: DeprecatedButton,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const DeprecatedButtonStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={permutateProps({\\n          variant: [\\n            {value: 'primary', label: 'Primary'},\\n            {value: 'secondary', label: 'Secondary'},\\n            {value: 'delete', label: 'Deprecated'},\\n          ],\\n          size: [\\n            {value: 'small', label: 'Small'},\\n            {value: 'medium', label: 'Medium'},\\n            {value: 'large', label: 'Large'},\\n          ],\\n        })}\\n        columnProps={stateTableColumnProps}\\n      >\\n        {props => (\\n          <Container>\\n            <DeprecatedButton {...props}>Test</DeprecatedButton>\\n          </Container>\\n        )}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"DeprecatedButtonStates\": {\n    \"startLoc\": {\n      \"col\": 38,\n      \"line\": 21\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 47\n    },\n    \"startBody\": {\n      \"col\": 38,\n      \"line\": 21\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 47\n    }\n  }\n};\n    \nimport React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\nimport {deprecated_Button as DeprecatedButton} from '@workday/canvas-kit-react/button';\nimport {Container, stateTableColumnProps} from './utils';\n\nexport default {\n  title: 'Testing/Buttons/Button/Deprecated Button',\n  component: DeprecatedButton,\n  parameters: {\n  \"storySource\": {\n    \"source\": \"import React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\nimport {deprecated_Button as DeprecatedButton} from '@workday/canvas-kit-react/button';\\nimport {Container, stateTableColumnProps} from './utils';\\n\\nexport default {\\n  title: 'Testing/Buttons/Button/Deprecated Button',\\n  component: DeprecatedButton,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const DeprecatedButtonStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={permutateProps({\\n          variant: [\\n            {value: 'primary', label: 'Primary'},\\n            {value: 'secondary', label: 'Secondary'},\\n            {value: 'delete', label: 'Deprecated'},\\n          ],\\n          size: [\\n            {value: 'small', label: 'Small'},\\n            {value: 'medium', label: 'Medium'},\\n            {value: 'large', label: 'Large'},\\n          ],\\n        })}\\n        columnProps={stateTableColumnProps}\\n      >\\n        {props => (\\n          <Container>\\n            <DeprecatedButton {...props}>Test</DeprecatedButton>\\n          </Container>\\n        )}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\",\n    \"locationsMap\": {\n      \"deprecated-button-states\": {\n        \"startLoc\": {\n          \"col\": 38,\n          \"line\": 21\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 47\n        },\n        \"startBody\": {\n          \"col\": 38,\n          \"line\": 21\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 47\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const DeprecatedButtonStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={permutateProps({\n          variant: [\n            {value: 'primary', label: 'Primary'},\n            {value: 'secondary', label: 'Secondary'},\n            {value: 'delete', label: 'Deprecated'},\n          ],\n          size: [\n            {value: 'small', label: 'Small'},\n            {value: 'medium', label: 'Medium'},\n            {value: 'large', label: 'Large'},\n          ],\n        })}\n        columnProps={stateTableColumnProps}\n      >\n        {props => (\n          <Container>\n            <DeprecatedButton {...props}>Test</DeprecatedButton>\n          </Container>\n        )}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n",locationsMap:{"deprecated-button-states":{startLoc:{col:38,line:72},endLoc:{col:1,line:98},startBody:{col:38,line:72},endBody:{col:1,line:98}}}},storySource:{source:"import React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\nimport {deprecated_Button as DeprecatedButton} from '@workday/canvas-kit-react/button';\nimport {Container, stateTableColumnProps} from './utils';\n\nexport default {\n  title: 'Testing/Buttons/Button/Deprecated Button',\n  component: DeprecatedButton,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const DeprecatedButtonStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={permutateProps({\n          variant: [\n            {value: 'primary', label: 'Primary'},\n            {value: 'secondary', label: 'Secondary'},\n            {value: 'delete', label: 'Deprecated'},\n          ],\n          size: [\n            {value: 'small', label: 'Small'},\n            {value: 'medium', label: 'Medium'},\n            {value: 'large', label: 'Large'},\n          ],\n        })}\n        columnProps={stateTableColumnProps}\n      >\n        {props => (\n          <Container>\n            <DeprecatedButton {...props}>Test</DeprecatedButton>\n          </Container>\n        )}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n",locationsMap:{"deprecated-button-states":{startLoc:{col:38,line:21},endLoc:{col:1,line:47},startBody:{col:38,line:21},endBody:{col:1,line:47}}}},chromatic:{disable:!1}}};exports.default=_default;const DeprecatedButtonStates={render:()=>_react.default.createElement(_testing.StaticStates,null,_react.default.createElement(_testing.ComponentStatesTable,{rowProps:(0,_testing.permutateProps)({variant:[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"},{value:"delete",label:"Deprecated"}],size:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}),columnProps:_utils.stateTableColumnProps},(props=>_react.default.createElement(_utils.Container,null,_react.default.createElement(_button.deprecated_Button,props,"Test")))))};exports.DeprecatedButtonStates=DeprecatedButtonStates,module.exports.__namedExportsOrder=["DeprecatedButtonStates"]},"./modules/react/button/stories/visual-testing/utils.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.stateTableColumnProps=exports.Container=void 0;var _react=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),systemIcons=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const buttonLayout={display:"flex",alignItems:"center",justifyContent:"center"},blueBackground={...buttonLayout,backgroundColor:"#0875e1",padding:"12px",borderRadius:"4px"},Container=props=>(0,_react.jsx)("div",{css:props.blue?blueBackground:buttonLayout},props.children);exports.Container=Container,Container.displayName="Container";exports.stateTableColumnProps=[{label:"Default ",props:{className:"",disabled:!1}},{label:"Default Disabled",props:{className:"",disabled:!0}},{label:"Hover ",props:{className:"hover",disabled:!1}},{label:"Hover Disabled",props:{className:"hover",disabled:!0}},{label:"Focus ",props:{className:"focus",disabled:!1}},{label:"Focus Hover ",props:{className:"focus hover",disabled:!1}},{label:"Active ",props:{className:"active",disabled:!1}},{label:"Active Hover ",props:{className:"active hover",disabled:!1}}];const systemIconArray=[];for(const icon in systemIcons)systemIcons[icon].filename&&systemIconArray.push(systemIcons[icon])}}]);