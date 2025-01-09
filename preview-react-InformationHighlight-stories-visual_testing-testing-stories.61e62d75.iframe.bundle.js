"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[3509],{"./modules/preview-react/InformationHighlight/stories/visual_testing/testing.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.InformationHighlightStates=exports.default=void 0;var _react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react/index.js")),_testing=__webpack_require__("./modules/react/testing/index.ts"),_InformationHighlight=__webpack_require__("./modules/preview-react/InformationHighlight/index.tsx");var _default={title:"Testing/Preview/Information Highlight",component:_InformationHighlight.InformationHighlight,parameters:{storySource:{source:"\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = \"import React from 'react';\\n\\nimport {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';\\nimport {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';\\n\\nexport default {\\n  title: 'Testing/Preview/Information Highlight',\\n  component: InformationHighlight,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const InformationHighlightStates = () => {\\n  return (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {\\n            label: 'Full Information Highlight Low Emphasis',\\n            props: {heading: true, body: true, link: true, emphasis: 'low'},\\n          },\\n          {\\n            label: 'Full Information Highlight High Emphasis',\\n            props: {heading: true, body: true, link: true, emphasis: 'high'},\\n          },\\n          {\\n            label: 'Heading and Body Low Emphasis',\\n            props: {heading: true, body: true, emphasis: 'low'},\\n          },\\n          {\\n            label: 'Heading and Body High Emphasis',\\n            props: {heading: true, body: true, emphasis: 'high'},\\n          },\\n\\n          {\\n            label: 'Heading and Link Low Emphasis',\\n            props: {heading: true, link: true, emphasis: 'low'},\\n          },\\n          {\\n            label: 'Heading and Link High Emphasis',\\n            props: {heading: true, link: true, emphasis: 'high'},\\n          },\\n\\n          {label: 'Body and Link Low Emphasis', props: {body: true, link: true, emphasis: 'low'}},\\n          {\\n            label: 'Body and Link High Emphasis',\\n            props: {body: true, link: true, emphasis: 'high'},\\n          },\\n\\n          {label: 'Only Heading Low Emphasis', props: {heading: true, emphasis: 'low'}},\\n          {label: 'Only Heading High Emphasis', props: {heading: true, emphasis: 'high'}},\\n\\n          {label: 'Only Body Low Emphasis', props: {body: true, emphasis: 'low'}},\\n          {label: 'Only Body High Emphasis', props: {body: true, emphasis: 'high'}},\\n        ]}\\n        columnProps={[\\n          {label: 'Informational', props: {variant: 'informational'}},\\n          {label: 'Caution', props: {variant: 'caution'}},\\n          {label: 'Critical', props: {variant: 'critical'}},\\n        ]}\\n      >\\n        {props => {\\n          const {variant, heading, body, link, emphasis} = props;\\n          return (\\n            <InformationHighlight variant={variant} emphasis={emphasis}>\\n              <InformationHighlight.Icon />\\n              {heading && <InformationHighlight.Heading>Lorem ipsum</InformationHighlight.Heading>}\\n              {body && (\\n                <InformationHighlight.Body>\\n                  {' '}\\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n                  incididunt ut labore et dolore magna aliqua.{' '}\\n                </InformationHighlight.Body>\\n              )}\\n              {link && <InformationHighlight.Link>Link</InformationHighlight.Link>}\\n            </InformationHighlight>\\n          );\\n        }}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  );\\n};\\n\";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  \"InformationHighlightStates\": {\n    \"startLoc\": {\n      \"col\": 42,\n      \"line\": 16\n    },\n    \"endLoc\": {\n      \"col\": 1,\n      \"line\": 85\n    },\n    \"startBody\": {\n      \"col\": 42,\n      \"line\": 16\n    },\n    \"endBody\": {\n      \"col\": 1,\n      \"line\": 85\n    }\n  }\n};\n    \nimport React from 'react';\n\nimport {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';\nimport {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';\n\nexport default {\n  title: 'Testing/Preview/Information Highlight',\n  component: InformationHighlight,\n  parameters: {\n  \"storySource\": {\n    \"source\": \"import React from 'react';\\n\\nimport {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';\\nimport {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';\\n\\nexport default {\\n  title: 'Testing/Preview/Information Highlight',\\n  component: InformationHighlight,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const InformationHighlightStates = () => {\\n  return (\\n    <StaticStates>\\n      <ComponentStatesTable\\n        rowProps={[\\n          {\\n            label: 'Full Information Highlight Low Emphasis',\\n            props: {heading: true, body: true, link: true, emphasis: 'low'},\\n          },\\n          {\\n            label: 'Full Information Highlight High Emphasis',\\n            props: {heading: true, body: true, link: true, emphasis: 'high'},\\n          },\\n          {\\n            label: 'Heading and Body Low Emphasis',\\n            props: {heading: true, body: true, emphasis: 'low'},\\n          },\\n          {\\n            label: 'Heading and Body High Emphasis',\\n            props: {heading: true, body: true, emphasis: 'high'},\\n          },\\n\\n          {\\n            label: 'Heading and Link Low Emphasis',\\n            props: {heading: true, link: true, emphasis: 'low'},\\n          },\\n          {\\n            label: 'Heading and Link High Emphasis',\\n            props: {heading: true, link: true, emphasis: 'high'},\\n          },\\n\\n          {label: 'Body and Link Low Emphasis', props: {body: true, link: true, emphasis: 'low'}},\\n          {\\n            label: 'Body and Link High Emphasis',\\n            props: {body: true, link: true, emphasis: 'high'},\\n          },\\n\\n          {label: 'Only Heading Low Emphasis', props: {heading: true, emphasis: 'low'}},\\n          {label: 'Only Heading High Emphasis', props: {heading: true, emphasis: 'high'}},\\n\\n          {label: 'Only Body Low Emphasis', props: {body: true, emphasis: 'low'}},\\n          {label: 'Only Body High Emphasis', props: {body: true, emphasis: 'high'}},\\n        ]}\\n        columnProps={[\\n          {label: 'Informational', props: {variant: 'informational'}},\\n          {label: 'Caution', props: {variant: 'caution'}},\\n          {label: 'Critical', props: {variant: 'critical'}},\\n        ]}\\n      >\\n        {props => {\\n          const {variant, heading, body, link, emphasis} = props;\\n          return (\\n            <InformationHighlight variant={variant} emphasis={emphasis}>\\n              <InformationHighlight.Icon />\\n              {heading && <InformationHighlight.Heading>Lorem ipsum</InformationHighlight.Heading>}\\n              {body && (\\n                <InformationHighlight.Body>\\n                  {' '}\\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n                  incididunt ut labore et dolore magna aliqua.{' '}\\n                </InformationHighlight.Body>\\n              )}\\n              {link && <InformationHighlight.Link>Link</InformationHighlight.Link>}\\n            </InformationHighlight>\\n          );\\n        }}\\n      </ComponentStatesTable>\\n    </StaticStates>\\n  );\\n};\\n\",\n    \"locationsMap\": {\n      \"information-highlight-states\": {\n        \"startLoc\": {\n          \"col\": 42,\n          \"line\": 16\n        },\n        \"endLoc\": {\n          \"col\": 1,\n          \"line\": 85\n        },\n        \"startBody\": {\n          \"col\": 42,\n          \"line\": 16\n        },\n        \"endBody\": {\n          \"col\": 1,\n          \"line\": 85\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const InformationHighlightStates = () => {\n  return (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {\n            label: 'Full Information Highlight Low Emphasis',\n            props: {heading: true, body: true, link: true, emphasis: 'low'},\n          },\n          {\n            label: 'Full Information Highlight High Emphasis',\n            props: {heading: true, body: true, link: true, emphasis: 'high'},\n          },\n          {\n            label: 'Heading and Body Low Emphasis',\n            props: {heading: true, body: true, emphasis: 'low'},\n          },\n          {\n            label: 'Heading and Body High Emphasis',\n            props: {heading: true, body: true, emphasis: 'high'},\n          },\n\n          {\n            label: 'Heading and Link Low Emphasis',\n            props: {heading: true, link: true, emphasis: 'low'},\n          },\n          {\n            label: 'Heading and Link High Emphasis',\n            props: {heading: true, link: true, emphasis: 'high'},\n          },\n\n          {label: 'Body and Link Low Emphasis', props: {body: true, link: true, emphasis: 'low'}},\n          {\n            label: 'Body and Link High Emphasis',\n            props: {body: true, link: true, emphasis: 'high'},\n          },\n\n          {label: 'Only Heading Low Emphasis', props: {heading: true, emphasis: 'low'}},\n          {label: 'Only Heading High Emphasis', props: {heading: true, emphasis: 'high'}},\n\n          {label: 'Only Body Low Emphasis', props: {body: true, emphasis: 'low'}},\n          {label: 'Only Body High Emphasis', props: {body: true, emphasis: 'high'}},\n        ]}\n        columnProps={[\n          {label: 'Informational', props: {variant: 'informational'}},\n          {label: 'Caution', props: {variant: 'caution'}},\n          {label: 'Critical', props: {variant: 'critical'}},\n        ]}\n      >\n        {props => {\n          const {variant, heading, body, link, emphasis} = props;\n          return (\n            <InformationHighlight variant={variant} emphasis={emphasis}>\n              <InformationHighlight.Icon />\n              {heading && <InformationHighlight.Heading>Lorem ipsum</InformationHighlight.Heading>}\n              {body && (\n                <InformationHighlight.Body>\n                  {' '}\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                  incididunt ut labore et dolore magna aliqua.{' '}\n                </InformationHighlight.Body>\n              )}\n              {link && <InformationHighlight.Link>Link</InformationHighlight.Link>}\n            </InformationHighlight>\n          );\n        }}\n      </ComponentStatesTable>\n    </StaticStates>\n  );\n};\n",locationsMap:{"information-highlight-states":{startLoc:{col:42,line:67},endLoc:{col:1,line:136},startBody:{col:42,line:67},endBody:{col:1,line:136}}}},storySource:{source:"import React from 'react';\n\nimport {StaticStates, ComponentStatesTable} from '@workday/canvas-kit-react/testing';\nimport {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';\n\nexport default {\n  title: 'Testing/Preview/Information Highlight',\n  component: InformationHighlight,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const InformationHighlightStates = () => {\n  return (\n    <StaticStates>\n      <ComponentStatesTable\n        rowProps={[\n          {\n            label: 'Full Information Highlight Low Emphasis',\n            props: {heading: true, body: true, link: true, emphasis: 'low'},\n          },\n          {\n            label: 'Full Information Highlight High Emphasis',\n            props: {heading: true, body: true, link: true, emphasis: 'high'},\n          },\n          {\n            label: 'Heading and Body Low Emphasis',\n            props: {heading: true, body: true, emphasis: 'low'},\n          },\n          {\n            label: 'Heading and Body High Emphasis',\n            props: {heading: true, body: true, emphasis: 'high'},\n          },\n\n          {\n            label: 'Heading and Link Low Emphasis',\n            props: {heading: true, link: true, emphasis: 'low'},\n          },\n          {\n            label: 'Heading and Link High Emphasis',\n            props: {heading: true, link: true, emphasis: 'high'},\n          },\n\n          {label: 'Body and Link Low Emphasis', props: {body: true, link: true, emphasis: 'low'}},\n          {\n            label: 'Body and Link High Emphasis',\n            props: {body: true, link: true, emphasis: 'high'},\n          },\n\n          {label: 'Only Heading Low Emphasis', props: {heading: true, emphasis: 'low'}},\n          {label: 'Only Heading High Emphasis', props: {heading: true, emphasis: 'high'}},\n\n          {label: 'Only Body Low Emphasis', props: {body: true, emphasis: 'low'}},\n          {label: 'Only Body High Emphasis', props: {body: true, emphasis: 'high'}},\n        ]}\n        columnProps={[\n          {label: 'Informational', props: {variant: 'informational'}},\n          {label: 'Caution', props: {variant: 'caution'}},\n          {label: 'Critical', props: {variant: 'critical'}},\n        ]}\n      >\n        {props => {\n          const {variant, heading, body, link, emphasis} = props;\n          return (\n            <InformationHighlight variant={variant} emphasis={emphasis}>\n              <InformationHighlight.Icon />\n              {heading && <InformationHighlight.Heading>Lorem ipsum</InformationHighlight.Heading>}\n              {body && (\n                <InformationHighlight.Body>\n                  {' '}\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                  incididunt ut labore et dolore magna aliqua.{' '}\n                </InformationHighlight.Body>\n              )}\n              {link && <InformationHighlight.Link>Link</InformationHighlight.Link>}\n            </InformationHighlight>\n          );\n        }}\n      </ComponentStatesTable>\n    </StaticStates>\n  );\n};\n",locationsMap:{"information-highlight-states":{startLoc:{col:42,line:16},endLoc:{col:1,line:85},startBody:{col:42,line:16},endBody:{col:1,line:85}}}},chromatic:{disable:!1}}};exports.default=_default;const InformationHighlightStates=()=>_react.default.createElement(_testing.StaticStates,null,_react.default.createElement(_testing.ComponentStatesTable,{rowProps:[{label:"Full Information Highlight Low Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"low"}},{label:"Full Information Highlight High Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"high"}},{label:"Heading and Body Low Emphasis",props:{heading:!0,body:!0,emphasis:"low"}},{label:"Heading and Body High Emphasis",props:{heading:!0,body:!0,emphasis:"high"}},{label:"Heading and Link Low Emphasis",props:{heading:!0,link:!0,emphasis:"low"}},{label:"Heading and Link High Emphasis",props:{heading:!0,link:!0,emphasis:"high"}},{label:"Body and Link Low Emphasis",props:{body:!0,link:!0,emphasis:"low"}},{label:"Body and Link High Emphasis",props:{body:!0,link:!0,emphasis:"high"}},{label:"Only Heading Low Emphasis",props:{heading:!0,emphasis:"low"}},{label:"Only Heading High Emphasis",props:{heading:!0,emphasis:"high"}},{label:"Only Body Low Emphasis",props:{body:!0,emphasis:"low"}},{label:"Only Body High Emphasis",props:{body:!0,emphasis:"high"}}],columnProps:[{label:"Informational",props:{variant:"informational"}},{label:"Caution",props:{variant:"caution"}},{label:"Critical",props:{variant:"critical"}}]},(props=>{const{variant,heading,body,link,emphasis}=props;return _react.default.createElement(_InformationHighlight.InformationHighlight,{variant,emphasis},_react.default.createElement(_InformationHighlight.InformationHighlight.Icon,null),heading&&_react.default.createElement(_InformationHighlight.InformationHighlight.Heading,null,"Lorem ipsum"),body&&_react.default.createElement(_InformationHighlight.InformationHighlight.Body,null," ","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," "),link&&_react.default.createElement(_InformationHighlight.InformationHighlight.Link,null,"Link"))})));exports.InformationHighlightStates=InformationHighlightStates,InformationHighlightStates.displayName="InformationHighlightStates",module.exports.__namedExportsOrder=["InformationHighlightStates"]}}]);