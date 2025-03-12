"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[7204],{"./modules/react/status-indicator/stories/testing.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.StatusIndicatorStates=exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_testing=__webpack_require__("./modules/react/testing/index.ts"),_statusIndicator=__webpack_require__("./modules/react/status-indicator/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var _default={title:"Testing/Indicators/Status Indicator",component:_statusIndicator.StatusIndicator,parameters:{storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import * as React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\n\\nimport {StatusIndicator, StatusIndicatorProps} from '@workday/canvas-kit-react/status-indicator';\\nimport {uploadCloudIcon} from '@workday/canvas-system-icons-web';\\n\\nexport default {\\n  title: 'Testing/Indicators/Status Indicator',\\n  component: StatusIndicator,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const StatusIndicatorStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={permutateProps({\\n          emphasis: [\\n            {value: StatusIndicator.Emphasis.Low, label: 'Low Emphasis'},\\n            {value: StatusIndicator.Emphasis.High, label: 'High Emphasis'},\\n          ],\\n          icon: [\\n            {value: undefined, label: ''},\\n            {value: uploadCloudIcon, label: 'With Icon'},\\n          ],\\n        })}\\n        columnProps={permutateProps({\\n          type: [\\n            {value: StatusIndicator.Type.Gray, label: 'Gray'},\\n            {value: StatusIndicator.Type.Blue, label: 'Blue'},\\n            {value: StatusIndicator.Type.Green, label: 'Green'},\\n            {value: StatusIndicator.Type.Orange, label: 'Orange'},\\n            {value: StatusIndicator.Type.Red, label: 'Red'},\\n            {value: StatusIndicator.Type.Transparent, label: 'Transparent'},\\n          ],\\n        })}\\n      >\\n        {(props: StatusIndicatorProps) => <StatusIndicator {...props} label=\\\"Status\\\" />}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"StatusIndicatorStates\": {\n    \"startLoc\": {\n      \"col\": 37,\n      \"line\": 22\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 51\n    },\n    \"startBody\": {\n      \"col\": 37,\n      \"line\": 22\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 51\n    }\n  }\n};\n    \nimport * as React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\n\nimport {StatusIndicator, StatusIndicatorProps} from '@workday/canvas-kit-react/status-indicator';\nimport {uploadCloudIcon} from '@workday/canvas-system-icons-web';\n\nexport default {\n  title: 'Testing/Indicators/Status Indicator',\n  component: StatusIndicator,\n  parameters: {\n  \"storySource\": {\n    \"source\": \"import * as React from 'react';\\n\\nimport {\\n  ComponentStatesTable,\\n  permutateProps,\\n  StaticStates,\\n} from '@workday/canvas-kit-react/testing';\\n\\nimport {StatusIndicator, StatusIndicatorProps} from '@workday/canvas-kit-react/status-indicator';\\nimport {uploadCloudIcon} from '@workday/canvas-system-icons-web';\\n\\nexport default {\\n  title: 'Testing/Indicators/Status Indicator',\\n  component: StatusIndicator,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const StatusIndicatorStates = {\\n  render: () => (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={permutateProps({\\n          emphasis: [\\n            {value: StatusIndicator.Emphasis.Low, label: 'Low Emphasis'},\\n            {value: StatusIndicator.Emphasis.High, label: 'High Emphasis'},\\n          ],\\n          icon: [\\n            {value: undefined, label: ''},\\n            {value: uploadCloudIcon, label: 'With Icon'},\\n          ],\\n        })}\\n        columnProps={permutateProps({\\n          type: [\\n            {value: StatusIndicator.Type.Gray, label: 'Gray'},\\n            {value: StatusIndicator.Type.Blue, label: 'Blue'},\\n            {value: StatusIndicator.Type.Green, label: 'Green'},\\n            {value: StatusIndicator.Type.Orange, label: 'Orange'},\\n            {value: StatusIndicator.Type.Red, label: 'Red'},\\n            {value: StatusIndicator.Type.Transparent, label: 'Transparent'},\\n          ],\\n        })}\\n      >\\n        {(props: StatusIndicatorProps) => <StatusIndicator {...props} label=\\\"Status\\\" />}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  ),\\n};\\n\",\n    \"locationsMap\": {\n      \"status-indicator-states\": {\n        \"startLoc\": {\n          \"col\": 37,\n          \"line\": 22\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 51\n        },\n        \"startBody\": {\n          \"col\": 37,\n          \"line\": 22\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 51\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const StatusIndicatorStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={permutateProps({\n          emphasis: [\n            {value: StatusIndicator.Emphasis.Low, label: 'Low Emphasis'},\n            {value: StatusIndicator.Emphasis.High, label: 'High Emphasis'},\n          ],\n          icon: [\n            {value: undefined, label: ''},\n            {value: uploadCloudIcon, label: 'With Icon'},\n          ],\n        })}\n        columnProps={permutateProps({\n          type: [\n            {value: StatusIndicator.Type.Gray, label: 'Gray'},\n            {value: StatusIndicator.Type.Blue, label: 'Blue'},\n            {value: StatusIndicator.Type.Green, label: 'Green'},\n            {value: StatusIndicator.Type.Orange, label: 'Orange'},\n            {value: StatusIndicator.Type.Red, label: 'Red'},\n            {value: StatusIndicator.Type.Transparent, label: 'Transparent'},\n          ],\n        })}\n      >\n        {(props: StatusIndicatorProps) => <StatusIndicator {...props} label=\"Status\" />}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n",locationsMap:{"status-indicator-states":{startLoc:{col:37,line:73},endLoc:{col:1,line:102},startBody:{col:37,line:73},endBody:{col:1,line:102}}}},storySource:{source:"import * as React from 'react';\n\nimport {\n  ComponentStatesTable,\n  permutateProps,\n  StaticStates,\n} from '@workday/canvas-kit-react/testing';\n\nimport {StatusIndicator, StatusIndicatorProps} from '@workday/canvas-kit-react/status-indicator';\nimport {uploadCloudIcon} from '@workday/canvas-system-icons-web';\n\nexport default {\n  title: 'Testing/Indicators/Status Indicator',\n  component: StatusIndicator,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const StatusIndicatorStates = {\n  render: () => (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={permutateProps({\n          emphasis: [\n            {value: StatusIndicator.Emphasis.Low, label: 'Low Emphasis'},\n            {value: StatusIndicator.Emphasis.High, label: 'High Emphasis'},\n          ],\n          icon: [\n            {value: undefined, label: ''},\n            {value: uploadCloudIcon, label: 'With Icon'},\n          ],\n        })}\n        columnProps={permutateProps({\n          type: [\n            {value: StatusIndicator.Type.Gray, label: 'Gray'},\n            {value: StatusIndicator.Type.Blue, label: 'Blue'},\n            {value: StatusIndicator.Type.Green, label: 'Green'},\n            {value: StatusIndicator.Type.Orange, label: 'Orange'},\n            {value: StatusIndicator.Type.Red, label: 'Red'},\n            {value: StatusIndicator.Type.Transparent, label: 'Transparent'},\n          ],\n        })}\n      >\n        {(props: StatusIndicatorProps) => <StatusIndicator {...props} label=\"Status\" />}\n      </ComponentStatesTable>\n    </StaticStates>\n  ),\n};\n",locationsMap:{"status-indicator-states":{startLoc:{col:37,line:22},endLoc:{col:1,line:51},startBody:{col:37,line:22},endBody:{col:1,line:51}}}},chromatic:{disable:!1}}};exports.default=_default;const StatusIndicatorStates={render:()=>React.createElement(_testing.StaticStates,null,React.createElement(_testing.ComponentStatesTable,{rowProps:(0,_testing.permutateProps)({emphasis:[{value:_statusIndicator.StatusIndicator.Emphasis.Low,label:"Low Emphasis"},{value:_statusIndicator.StatusIndicator.Emphasis.High,label:"High Emphasis"}],icon:[{value:void 0,label:""},{value:_canvasSystemIconsWeb.uploadCloudIcon,label:"With Icon"}]}),columnProps:(0,_testing.permutateProps)({type:[{value:_statusIndicator.StatusIndicator.Type.Gray,label:"Gray"},{value:_statusIndicator.StatusIndicator.Type.Blue,label:"Blue"},{value:_statusIndicator.StatusIndicator.Type.Green,label:"Green"},{value:_statusIndicator.StatusIndicator.Type.Orange,label:"Orange"},{value:_statusIndicator.StatusIndicator.Type.Red,label:"Red"},{value:_statusIndicator.StatusIndicator.Type.Transparent,label:"Transparent"}]})},(props=>React.createElement(_statusIndicator.StatusIndicator,_extends({},props,{label:"Status"})))))};exports.StatusIndicatorStates=StatusIndicatorStates,module.exports.__namedExportsOrder=["StatusIndicatorStates"]},"./modules/react/status-indicator/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _StatusIndicator=__webpack_require__("./modules/react/status-indicator/lib/StatusIndicator.tsx");Object.keys(_StatusIndicator).forEach((function(key){"default"!==key&&"__esModule"!==key&&(key in exports&&exports[key]===_StatusIndicator[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function(){return _StatusIndicator[key]}}))}));const __docs=[];var _window$__updateDocs,_window;window.__updateDocs?null===(_window$__updateDocs=(_window=window).__updateDocs)||void 0===_window$__updateDocs||_window$__updateDocs.call(_window,__docs):window.__docs=(window.__docs||[]).concat(__docs)},"./modules/react/status-indicator/lib/StatusIndicator.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.StatusIndicator=exports.statusIndicatorStyles=exports.StatusIndicatorEmphasis=exports.StatusIndicatorType=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_icon=__webpack_require__("./modules/react/icon/index.ts"),_tokens=__webpack_require__("./modules/react/tokens/index.ts"),_styled=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}let StatusIndicatorType,StatusIndicatorEmphasis;exports.StatusIndicatorType=StatusIndicatorType,function(StatusIndicatorType){StatusIndicatorType.Gray="gray",StatusIndicatorType.Orange="orange",StatusIndicatorType.Blue="blue",StatusIndicatorType.Green="green",StatusIndicatorType.Red="red",StatusIndicatorType.Transparent="transparent"}(StatusIndicatorType||(exports.StatusIndicatorType=StatusIndicatorType={})),exports.StatusIndicatorEmphasis=StatusIndicatorEmphasis,function(StatusIndicatorEmphasis){StatusIndicatorEmphasis.High="high",StatusIndicatorEmphasis.Low="low"}(StatusIndicatorEmphasis||(exports.StatusIndicatorEmphasis=StatusIndicatorEmphasis={}));const statusIndicatorStyles={classname:"status-indicator",styles:{..._tokens.type.levels.subtext.medium,display:"inline-flex",alignItems:"center",verticalAlign:"middle",height:_tokens.space.s,padding:`1px ${_tokens.space.xxxs}`,borderRadius:_tokens.borderRadius.s,boxSizing:"border-box"},variants:{gray:{high:{color:_tokens.colors.frenchVanilla100,background:_tokens.colors.licorice300},low:{color:_tokens.colors.licorice400,background:_tokens.colors.soap200}},orange:{high:{color:_tokens.colors.licorice500,background:_tokens.colors.cantaloupe400},low:{color:_tokens.colors.toastedMarshmallow600,background:_tokens.colors.cantaloupe100}},blue:{high:{color:_tokens.colors.frenchVanilla100,background:_tokens.colors.blueberry400},low:{color:_tokens.colors.blueberry500,background:_tokens.colors.blueberry100}},green:{high:{color:_tokens.colors.frenchVanilla100,background:_tokens.colors.greenApple600},low:{color:_tokens.colors.greenApple600,background:_tokens.colors.greenApple100}},red:{high:{color:_tokens.colors.frenchVanilla100,background:_tokens.colors.cinnamon500},low:{color:_tokens.colors.cinnamon600,background:_tokens.colors.cinnamon100}},transparent:{high:{color:_tokens.colors.frenchVanilla100,background:_tokens.colors.blackPepper600},low:{color:_tokens.colors.frenchVanilla100,background:_tokens.colors.blackPepper600}}}};exports.statusIndicatorStyles=statusIndicatorStyles;const Container=(0,_styled.default)("span")(statusIndicatorStyles.styles,(({type,emphasis,maxWidth})=>({...statusIndicatorStyles.variants[type][emphasis],maxWidth}))),StatusLabel=(0,_styled.default)("span")({fontWeight:"bold",WebkitFontSmoothing:"antialiased",textTransform:"uppercase",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"});class StatusIndicator extends React.Component{render(){const{emphasis=StatusIndicatorEmphasis.High,maxWidth=200,type,icon,label,...elemProps}=this.props,variant=statusIndicatorStyles.variants[type][emphasis];return React.createElement(Container,_extends({type,emphasis,maxWidth},elemProps),icon&&React.createElement(_icon.SystemIcon,{colorHover:variant.color,color:variant.color,icon,size:14,style:{paddingRight:_tokens.space.xxxs}}),React.createElement(StatusLabel,null,label))}}exports.StatusIndicator=StatusIndicator,_defineProperty(StatusIndicator,"Type",StatusIndicatorType),_defineProperty(StatusIndicator,"Emphasis",StatusIndicatorEmphasis),StatusIndicator.displayName="StatusIndicator";const __docs=[{name:"StatusIndicatorType",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx",description:"",declarations:[{name:"StatusIndicatorType",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{deprecated:"⚠️ Status Indicator has been deprecated and will be removed in a future major version. Please use [`Status Indicator`](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--basic) in Preview instead."},type:{kind:"object",typeParameters:[],properties:[{kind:"property",name:"Gray",type:{kind:"string",value:"gray"}},{kind:"property",name:"Orange",type:{kind:"string",value:"orange"}},{kind:"property",name:"Blue",type:{kind:"string",value:"blue"}},{kind:"property",name:"Green",type:{kind:"string",value:"green"}},{kind:"property",name:"Red",type:{kind:"string",value:"red"}},{kind:"property",name:"Transparent",type:{kind:"string",value:"transparent"}}],callSignatures:[]}},{name:"StatusIndicatorEmphasis",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx",description:"",declarations:[{name:"StatusIndicatorEmphasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{deprecated:"⚠️ Status Indicator has been deprecated and will be removed in a future major version. Please use [`Status Indicator`](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--basic) in Preview instead."},type:{kind:"object",typeParameters:[],properties:[{kind:"property",name:"High",type:{kind:"string",value:"high"}},{kind:"property",name:"Low",type:{kind:"string",value:"low"}}],callSignatures:[]}},{name:"StatusIndicatorGenericStyle",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx",description:"",declarations:[{name:"StatusIndicatorGenericStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{deprecated:"⚠️ Status Indicator has been deprecated and will be removed in a future major version. Please use [`Status Indicator`](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--basic) in Preview instead."},type:{kind:"object",properties:[{kind:"property",name:"styles",required:!0,type:{kind:"symbol",name:"CSSProperties",value:"CSSProperties"},description:"",declarations:[{name:"styles",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}},{kind:"property",name:"variants",required:!0,type:{kind:"unknown",value:"unknown",text:"{\n    [statusType in StatusIndicatorType]: {\n      [statusEmphasis in StatusIndicatorEmphasis]?: CSSProperties;\n    };\n  }"},description:"",declarations:[{name:"variants",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}},{kind:"property",name:"classname",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"classname",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/genericStyles.ts"}],tags:{}},{kind:"property",name:"defaults",required:!1,type:{kind:"external",name:"Array",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",typeParameters:[{kind:"primitive",value:"string"}]},description:"",declarations:[{name:"defaults",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/common/lib/genericStyles.ts"}],tags:{}}]}},{name:"statusIndicatorStyles",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx",description:"",declarations:[{name:"statusIndicatorStyles",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{deprecated:"⚠️ Status Indicator has been deprecated and will be removed in a future major version. Please use [`Status Indicator`](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--basic) in Preview instead."},type:{kind:"symbol",name:"StatusIndicatorGenericStyle",value:"StatusIndicatorGenericStyle"}},{name:"StatusIndicatorProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx",description:"",declarations:[{name:"StatusIndicatorProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{deprecated:"⚠️ Status Indicator has been deprecated and will be removed in a future major version. Please use [`Status Indicator`](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--basic) in Preview instead."},type:{kind:"object",properties:[{kind:"property",name:"type",required:!0,type:{kind:"symbol",name:"StatusIndicatorType",value:"StatusIndicatorType"},description:"The type of the StatusIndicator. Accepts `Gray`, `Orange`, `Blue`, `Green`, `Red`, or `Transparent`.",declarations:[{name:"type",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}},{kind:"property",name:"emphasis",required:!1,type:{kind:"symbol",name:"StatusIndicatorEmphasis",value:"StatusIndicatorEmphasis"},description:"The emphasis of the StatusIndicator. Accepts `High` or `Low`.",declarations:[{name:"emphasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{default:"StatusIndicatorEmphasis.High"}},{kind:"property",name:"maxWidth",required:!1,type:{kind:"primitive",value:"number"},description:"The maxWidth of the container before it truncates",declarations:[{name:"maxWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{default:"200"}},{kind:"property",name:"label",required:!0,type:{kind:"primitive",value:"string"},description:"The text of the StatusIndicator.",declarations:[{name:"label",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}},{kind:"property",name:"icon",required:!1,type:{kind:"symbol",name:"CanvasSystemIcon",value:"CanvasSystemIcon"},description:"The icon of the StatusIndicator.",declarations:[{name:"icon",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}}]}},{name:"StatusIndicator",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx",description:"",declarations:[{name:"StatusIndicator",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{deprecated:"⚠️ Status Indicator has been deprecated and will be removed in a future major version. Please use [`Status Indicator`](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--basic) in Preview instead."},type:{kind:"component",props:[{kind:"property",name:"type",required:!0,type:{kind:"symbol",name:"StatusIndicatorType",value:"StatusIndicatorType"},description:"The type of the StatusIndicator. Accepts `Gray`, `Orange`, `Blue`, `Green`, `Red`, or `Transparent`.",declarations:[{name:"type",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}},{kind:"property",name:"emphasis",required:!1,type:{kind:"symbol",name:"StatusIndicatorEmphasis",value:"StatusIndicatorEmphasis"},description:"The emphasis of the StatusIndicator. Accepts `High` or `Low`.",declarations:[{name:"emphasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{default:"StatusIndicatorEmphasis.High"},defaultValue:{kind:"symbol",name:"StatusIndicatorEmphasis.High",value:"StatusIndicatorEmphasis.High"}},{kind:"property",name:"maxWidth",required:!1,type:{kind:"primitive",value:"number"},description:"The maxWidth of the container before it truncates",declarations:[{name:"maxWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{default:"200"},defaultValue:{kind:"number",value:200}},{kind:"property",name:"label",required:!0,type:{kind:"primitive",value:"string"},description:"The text of the StatusIndicator.",declarations:[{name:"label",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}},{kind:"property",name:"icon",required:!1,type:{kind:"symbol",name:"CanvasSystemIcon",value:"CanvasSystemIcon"},description:"The icon of the StatusIndicator.",declarations:[{name:"icon",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/react/status-indicator/lib/StatusIndicator.tsx"}],tags:{}}]}}];var _window$__updateDocs,_window;window.__updateDocs?null===(_window$__updateDocs=(_window=window).__updateDocs)||void 0===_window$__updateDocs||_window$__updateDocs.call(_window,__docs):window.__docs=(window.__docs||[]).concat(__docs)}}]);