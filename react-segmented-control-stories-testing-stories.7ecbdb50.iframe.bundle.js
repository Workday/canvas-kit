"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[2232],{"./modules/react/segmented-control/stories/testing.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.SegmentedControlStates=exports.SegmentedControlButtonStates=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_testing=__webpack_require__("./modules/react/testing/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"),_segmentedControl=__webpack_require__("./modules/react/segmented-control/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}exports.default={title:"Testing/Buttons/Segmented Control",component:_segmentedControl.SegmentedControl,parameters:{storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import * as React from 'react';\\nimport {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';\\n\\nimport {\\n  listViewIcon,\\n  worksheetsIcon,\\n  deviceTabletIcon,\\n  percentageIcon,\\n  cColumnClusteredIcon,\\n} from '@workday/canvas-system-icons-web';\\n\\nimport {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';\\n\\nexport default {\\n  title: 'Testing/Buttons/Segmented Control',\\n  component: SegmentedControl,\\n  parameters: {\\n    ReadmePath: 'labs-react/header',\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const SegmentedControlStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {label: 'First Item Selected', props: {value: 'list-view'}},\\n          {label: 'Middle Item Selected', props: {value: 'device-view'}},\\n          {label: 'Last Item Selected', props: {value: 'percent-view'}},\\n        ]}\\n        columnProps={[\\n          {label: 'Default', props: {className: ''}},\\n          {label: 'Focus', props: {className: 'focus'}}, // Test changing border radius for focused button\\n          {label: 'Small', props: {size: 'small'}},\\n          {label: 'Large', props: {size: 'large'}},\\n        ]}\\n      >\\n        {props => (\\n          <SegmentedControl value={props.value}>\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={listViewIcon}\\n              value=\\\"list-view\\\"\\n              aria-label=\\\"List View\\\"\\n              className={props.value === 'list-view' ? props.className : undefined}\\n            />\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={worksheetsIcon}\\n              value=\\\"table-view\\\"\\n              aria-label=\\\"Table View\\\"\\n              disabled={true}\\n            />\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={deviceTabletIcon}\\n              value=\\\"device-view\\\"\\n              aria-label=\\\"Device View\\\"\\n              className={props.value === 'device-view' ? props.className : undefined}\\n            />\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={percentageIcon}\\n              value=\\\"percent-view\\\"\\n              aria-label=\\\"Percent View\\\"\\n              className={props.value === 'percent-view' ? props.className : undefined}\\n            />\\n          </SegmentedControl>\\n        )}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\\nexport const SegmentedControlButtonStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {label: 'Bar Chart', props: {value: 'off', icon: cColumnClusteredIcon}},\\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: cColumnClusteredIcon}},\\n          {label: 'Device Tablet', props: {value: 'off', icon: deviceTabletIcon}},\\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: deviceTabletIcon}},\\n          {label: 'Worksheet', props: {value: 'off', icon: worksheetsIcon}},\\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: worksheetsIcon}},\\n        ]}\\n        columnProps={[\\n          {label: 'Default', props: {className: ''}},\\n          {label: 'Focus', props: {className: 'focus'}},\\n          {label: 'Active', props: {className: 'active'}},\\n        ]}\\n      >\\n        {props => (\\n          <SegmentedControl value={props.value}>\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={props.icon}\\n              value=\\\"on\\\"\\n              aria-label=\\\"Clustered\\\"\\n              className={props.className}\\n            />\\n            <></>\\n          </SegmentedControl>\\n        )}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"SegmentedControlStates\": {\n    \"startLoc\": {\n      \"col\": 38,\n      \"line\": 25\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 76\n    },\n    \"startBody\": {\n      \"col\": 38,\n      \"line\": 25\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 76\n    }\n  },\n  \"SegmentedControlButtonStates\": {\n    \"startLoc\": {\n      \"col\": 44,\n      \"line\": 78\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 111\n    },\n    \"startBody\": {\n      \"col\": 44,\n      \"line\": 78\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 111\n    }\n  }\n};\n    \nimport * as React from 'react';\nimport {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';\n\nimport {\n  listViewIcon,\n  worksheetsIcon,\n  deviceTabletIcon,\n  percentageIcon,\n  cColumnClusteredIcon,\n} from '@workday/canvas-system-icons-web';\n\nimport {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';\n\nexport default {\n  title: 'Testing/Buttons/Segmented Control',\n  component: SegmentedControl,\n  parameters: {\n  \"storySource\": {\n    \"source\": \"import * as React from 'react';\\nimport {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';\\n\\nimport {\\n  listViewIcon,\\n  worksheetsIcon,\\n  deviceTabletIcon,\\n  percentageIcon,\\n  cColumnClusteredIcon,\\n} from '@workday/canvas-system-icons-web';\\n\\nimport {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';\\n\\nexport default {\\n  title: 'Testing/Buttons/Segmented Control',\\n  component: SegmentedControl,\\n  parameters: {\\n    ReadmePath: 'labs-react/header',\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const SegmentedControlStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {label: 'First Item Selected', props: {value: 'list-view'}},\\n          {label: 'Middle Item Selected', props: {value: 'device-view'}},\\n          {label: 'Last Item Selected', props: {value: 'percent-view'}},\\n        ]}\\n        columnProps={[\\n          {label: 'Default', props: {className: ''}},\\n          {label: 'Focus', props: {className: 'focus'}}, // Test changing border radius for focused button\\n          {label: 'Small', props: {size: 'small'}},\\n          {label: 'Large', props: {size: 'large'}},\\n        ]}\\n      >\\n        {props => (\\n          <SegmentedControl value={props.value}>\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={listViewIcon}\\n              value=\\\"list-view\\\"\\n              aria-label=\\\"List View\\\"\\n              className={props.value === 'list-view' ? props.className : undefined}\\n            />\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={worksheetsIcon}\\n              value=\\\"table-view\\\"\\n              aria-label=\\\"Table View\\\"\\n              disabled={true}\\n            />\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={deviceTabletIcon}\\n              value=\\\"device-view\\\"\\n              aria-label=\\\"Device View\\\"\\n              className={props.value === 'device-view' ? props.className : undefined}\\n            />\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={percentageIcon}\\n              value=\\\"percent-view\\\"\\n              aria-label=\\\"Percent View\\\"\\n              className={props.value === 'percent-view' ? props.className : undefined}\\n            />\\n          </SegmentedControl>\\n        )}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\\nexport const SegmentedControlButtonStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {label: 'Bar Chart', props: {value: 'off', icon: cColumnClusteredIcon}},\\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: cColumnClusteredIcon}},\\n          {label: 'Device Tablet', props: {value: 'off', icon: deviceTabletIcon}},\\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: deviceTabletIcon}},\\n          {label: 'Worksheet', props: {value: 'off', icon: worksheetsIcon}},\\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: worksheetsIcon}},\\n        ]}\\n        columnProps={[\\n          {label: 'Default', props: {className: ''}},\\n          {label: 'Focus', props: {className: 'focus'}},\\n          {label: 'Active', props: {className: 'active'}},\\n        ]}\\n      >\\n        {props => (\\n          <SegmentedControl value={props.value}>\\n            <SegmentedControl.Button\\n              size={props.size}\\n              icon={props.icon}\\n              value=\\\"on\\\"\\n              aria-label=\\\"Clustered\\\"\\n              className={props.className}\\n            />\\n            <></>\\n          </SegmentedControl>\\n        )}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\",\n    \"locationsMap\": {\n      \"segmented-control-states\": {\n        \"startLoc\": {\n          \"col\": 38,\n          \"line\": 25\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 76\n        },\n        \"startBody\": {\n          \"col\": 38,\n          \"line\": 25\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 76\n        }\n      },\n      \"segmented-control-button-states\": {\n        \"startLoc\": {\n          \"col\": 44,\n          \"line\": 78\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 111\n        },\n        \"startBody\": {\n          \"col\": 44,\n          \"line\": 78\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 111\n        }\n      }\n    }\n  }\n,\n    ReadmePath: 'labs-react/header',\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const SegmentedControlStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {label: 'First Item Selected', props: {value: 'list-view'}},\n          {label: 'Middle Item Selected', props: {value: 'device-view'}},\n          {label: 'Last Item Selected', props: {value: 'percent-view'}},\n        ]}\n        columnProps={[\n          {label: 'Default', props: {className: ''}},\n          {label: 'Focus', props: {className: 'focus'}}, // Test changing border radius for focused button\n          {label: 'Small', props: {size: 'small'}},\n          {label: 'Large', props: {size: 'large'}},\n        ]}\n      >\n        {props => (\n          <SegmentedControl value={props.value}>\n            <SegmentedControl.Button\n              size={props.size}\n              icon={listViewIcon}\n              value=\"list-view\"\n              aria-label=\"List View\"\n              className={props.value === 'list-view' ? props.className : undefined}\n            />\n            <SegmentedControl.Button\n              size={props.size}\n              icon={worksheetsIcon}\n              value=\"table-view\"\n              aria-label=\"Table View\"\n              disabled={true}\n            />\n            <SegmentedControl.Button\n              size={props.size}\n              icon={deviceTabletIcon}\n              value=\"device-view\"\n              aria-label=\"Device View\"\n              className={props.value === 'device-view' ? props.className : undefined}\n            />\n            <SegmentedControl.Button\n              size={props.size}\n              icon={percentageIcon}\n              value=\"percent-view\"\n              aria-label=\"Percent View\"\n              className={props.value === 'percent-view' ? props.className : undefined}\n            />\n          </SegmentedControl>\n        )}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};;\n\nexport const SegmentedControlButtonStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {label: 'Bar Chart', props: {value: 'off', icon: cColumnClusteredIcon}},\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: cColumnClusteredIcon}},\n          {label: 'Device Tablet', props: {value: 'off', icon: deviceTabletIcon}},\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: deviceTabletIcon}},\n          {label: 'Worksheet', props: {value: 'off', icon: worksheetsIcon}},\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: worksheetsIcon}},\n        ]}\n        columnProps={[\n          {label: 'Default', props: {className: ''}},\n          {label: 'Focus', props: {className: 'focus'}},\n          {label: 'Active', props: {className: 'active'}},\n        ]}\n      >\n        {props => (\n          <SegmentedControl value={props.value}>\n            <SegmentedControl.Button\n              size={props.size}\n              icon={props.icon}\n              value=\"on\"\n              aria-label=\"Clustered\"\n              className={props.className}\n            />\n            <></>\n          </SegmentedControl>\n        )}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n",locationsMap:{"segmented-control-states":{startLoc:{col:38,line:112},endLoc:{col:1,line:163},startBody:{col:38,line:112},endBody:{col:1,line:163}},"segmented-control-button-states":{startLoc:{col:44,line:165},endLoc:{col:1,line:198},startBody:{col:44,line:165},endBody:{col:1,line:198}}}},storySource:{source:"import * as React from 'react';\nimport {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';\n\nimport {\n  listViewIcon,\n  worksheetsIcon,\n  deviceTabletIcon,\n  percentageIcon,\n  cColumnClusteredIcon,\n} from '@workday/canvas-system-icons-web';\n\nimport {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';\n\nexport default {\n  title: 'Testing/Buttons/Segmented Control',\n  component: SegmentedControl,\n  parameters: {\n    ReadmePath: 'labs-react/header',\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const SegmentedControlStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {label: 'First Item Selected', props: {value: 'list-view'}},\n          {label: 'Middle Item Selected', props: {value: 'device-view'}},\n          {label: 'Last Item Selected', props: {value: 'percent-view'}},\n        ]}\n        columnProps={[\n          {label: 'Default', props: {className: ''}},\n          {label: 'Focus', props: {className: 'focus'}}, // Test changing border radius for focused button\n          {label: 'Small', props: {size: 'small'}},\n          {label: 'Large', props: {size: 'large'}},\n        ]}\n      >\n        {props => (\n          <SegmentedControl value={props.value}>\n            <SegmentedControl.Button\n              size={props.size}\n              icon={listViewIcon}\n              value=\"list-view\"\n              aria-label=\"List View\"\n              className={props.value === 'list-view' ? props.className : undefined}\n            />\n            <SegmentedControl.Button\n              size={props.size}\n              icon={worksheetsIcon}\n              value=\"table-view\"\n              aria-label=\"Table View\"\n              disabled={true}\n            />\n            <SegmentedControl.Button\n              size={props.size}\n              icon={deviceTabletIcon}\n              value=\"device-view\"\n              aria-label=\"Device View\"\n              className={props.value === 'device-view' ? props.className : undefined}\n            />\n            <SegmentedControl.Button\n              size={props.size}\n              icon={percentageIcon}\n              value=\"percent-view\"\n              aria-label=\"Percent View\"\n              className={props.value === 'percent-view' ? props.className : undefined}\n            />\n          </SegmentedControl>\n        )}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n\nexport const SegmentedControlButtonStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {label: 'Bar Chart', props: {value: 'off', icon: cColumnClusteredIcon}},\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: cColumnClusteredIcon}},\n          {label: 'Device Tablet', props: {value: 'off', icon: deviceTabletIcon}},\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: deviceTabletIcon}},\n          {label: 'Worksheet', props: {value: 'off', icon: worksheetsIcon}},\n          {label: 'Bar Chart Selected', props: {value: 'on', icon: worksheetsIcon}},\n        ]}\n        columnProps={[\n          {label: 'Default', props: {className: ''}},\n          {label: 'Focus', props: {className: 'focus'}},\n          {label: 'Active', props: {className: 'active'}},\n        ]}\n      >\n        {props => (\n          <SegmentedControl value={props.value}>\n            <SegmentedControl.Button\n              size={props.size}\n              icon={props.icon}\n              value=\"on\"\n              aria-label=\"Clustered\"\n              className={props.className}\n            />\n            <></>\n          </SegmentedControl>\n        )}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n",locationsMap:{"segmented-control-states":{startLoc:{col:38,line:25},endLoc:{col:1,line:76},startBody:{col:38,line:25},endBody:{col:1,line:76}},"segmented-control-button-states":{startLoc:{col:44,line:78},endLoc:{col:1,line:111},startBody:{col:44,line:78},endBody:{col:1,line:111}}}},ReadmePath:"labs-react/header",chromatic:{disable:!1}}};exports.SegmentedControlStates={render:()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:[{label:"First Item Selected",props:{value:"list-view"}},{label:"Middle Item Selected",props:{value:"device-view"}},{label:"Last Item Selected",props:{value:"percent-view"}}],columnProps:[{label:"Default",props:{className:""}},{label:"Focus",props:{className:"focus"}},{label:"Small",props:{size:"small"}},{label:"Large",props:{size:"large"}}]},(props=>React.createElement(_segmentedControl.SegmentedControl,{value:props.value},React.createElement(_segmentedControl.SegmentedControl.Button,{size:props.size,icon:_canvasSystemIconsWeb.listViewIcon,value:"list-view","aria-label":"List View",className:"list-view"===props.value?props.className:void 0}),React.createElement(_segmentedControl.SegmentedControl.Button,{size:props.size,icon:_canvasSystemIconsWeb.worksheetsIcon,value:"table-view","aria-label":"Table View",disabled:!0}),React.createElement(_segmentedControl.SegmentedControl.Button,{size:props.size,icon:_canvasSystemIconsWeb.deviceTabletIcon,value:"device-view","aria-label":"Device View",className:"device-view"===props.value?props.className:void 0}),React.createElement(_segmentedControl.SegmentedControl.Button,{size:props.size,icon:_canvasSystemIconsWeb.percentageIcon,value:"percent-view","aria-label":"Percent View",className:"percent-view"===props.value?props.className:void 0})))))},exports.SegmentedControlButtonStates={render:()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:[{label:"Bar Chart",props:{value:"off",icon:_canvasSystemIconsWeb.cColumnClusteredIcon}},{label:"Bar Chart Selected",props:{value:"on",icon:_canvasSystemIconsWeb.cColumnClusteredIcon}},{label:"Device Tablet",props:{value:"off",icon:_canvasSystemIconsWeb.deviceTabletIcon}},{label:"Bar Chart Selected",props:{value:"on",icon:_canvasSystemIconsWeb.deviceTabletIcon}},{label:"Worksheet",props:{value:"off",icon:_canvasSystemIconsWeb.worksheetsIcon}},{label:"Bar Chart Selected",props:{value:"on",icon:_canvasSystemIconsWeb.worksheetsIcon}}],columnProps:[{label:"Default",props:{className:""}},{label:"Focus",props:{className:"focus"}},{label:"Active",props:{className:"active"}}]},(props=>React.createElement(_segmentedControl.SegmentedControl,{value:props.value},React.createElement(_segmentedControl.SegmentedControl.Button,{size:props.size,icon:props.icon,value:"on","aria-label":"Clustered",className:props.className}),React.createElement(React.Fragment,null)))))};module.exports.__namedExportsOrder=["SegmentedControlStates","SegmentedControlButtonStates"]}}]);