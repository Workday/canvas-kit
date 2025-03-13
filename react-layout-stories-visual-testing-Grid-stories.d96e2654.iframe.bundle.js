"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[3604],{"./modules/react/layout/stories/visual-testing/Grid.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.GridUILayout=exports.GridStates=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_layout=__webpack_require__("./modules/react/layout/index.ts"),_testing=__webpack_require__("./modules/react/testing/index.ts");exports.default={title:"Testing/Layout/Grid",component:_layout.Grid,parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import React from \'react\';\\n\\nimport {Grid} from \'@workday/canvas-kit-react/layout\';\\nimport {ComponentStatesTable, StaticStates} from \'@workday/canvas-kit-react/testing\';\\n\\nexport default {\\n  title: \'Testing/Layout/Grid\',\\n  component: Grid,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const GridStates = {\\n  render: () => {\\n    return (\\n      <>\\n        <h2>Grid States</h2>\\n        <StaticStates>\\n          <ComponentStatesTable\\n            columnProps={[{label: \'Default\', props: {}}]}\\n            rowProps={[\\n              {\\n                label: \'Row\',\\n                props: {\\n                  gridAutoFlow: \'column\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n              {\\n                label: \'Column\',\\n                props: {\\n                  gridAutoFlow: \'row\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n              {\\n                label: \'Template Column\',\\n                props: {\\n                  flexDirection: \'row\',\\n                  gridTemplateColumns: \'repeat(2, 1fr)\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n            ]}\\n          >\\n            {props => {\\n              return (\\n                <Grid {...props}>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    1\\n                  </Grid>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    2\\n                  </Grid>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    3\\n                  </Grid>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    4\\n                  </Grid>\\n                </Grid>\\n              );\\n            }}\\n          </ComponentStatesTable>\\n        </StaticStates>\\n      </>\\n    );\\n  },\\n};\\n\\nexport const GridUILayout = {\\n  render: () => {\\n    return (\\n      <>\\n        <h2>Grid UI Layout</h2>\\n        <StaticStates>\\n          <ComponentStatesTable\\n            columnProps={[{label: \'Default\', props: {}}]}\\n            rowProps={[\\n              {\\n                label: \'UI - Grid Area\',\\n                props: {\\n                  gridTemplateAreas:\\n                    \\"\'Header Header Header Header\' \'SideBar BodyContent BodyContent BodyContent\' \'Footer Footer Footer Footer\'\\",\\n                  gridTemplateColumns: \'1fr 3fr\',\\n                  gridTemplateRows: \'auto 300px auto\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n            ]}\\n          >\\n            {props => {\\n              return (\\n                <Grid {...props}>\\n                  <Grid\\n                    gridArea=\\"Header\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    Header\\n                  </Grid>\\n                  <Grid\\n                    gridArea=\\"SideBar\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    SideBar\\n                  </Grid>\\n                  <Grid\\n                    gridArea=\\"BodyContent\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    BodyContent\\n                  </Grid>\\n                  <Grid\\n                    gridArea=\\"Footer\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    Footer\\n                  </Grid>\\n                </Grid>\\n              );\\n            }}\\n          </ComponentStatesTable>\\n        </StaticStates>\\n      </>\\n    );\\n  },\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "GridStates": {\n    "startLoc": {\n      "col": 26,\n      "line": 16\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 109\n    },\n    "startBody": {\n      "col": 26,\n      "line": 16\n    },\n    "endBody": {\n      "col": 1,\n      "line": 109\n    }\n  },\n  "GridUILayout": {\n    "startLoc": {\n      "col": 28,\n      "line": 111\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 190\n    },\n    "startBody": {\n      "col": 28,\n      "line": 111\n    },\n    "endBody": {\n      "col": 1,\n      "line": 190\n    }\n  }\n};\n    \nimport React from \'react\';\n\nimport {Grid} from \'@workday/canvas-kit-react/layout\';\nimport {ComponentStatesTable, StaticStates} from \'@workday/canvas-kit-react/testing\';\n\nexport default {\n  title: \'Testing/Layout/Grid\',\n  component: Grid,\n  parameters: {\n  "storySource": {\n    "source": "import React from \'react\';\\n\\nimport {Grid} from \'@workday/canvas-kit-react/layout\';\\nimport {ComponentStatesTable, StaticStates} from \'@workday/canvas-kit-react/testing\';\\n\\nexport default {\\n  title: \'Testing/Layout/Grid\',\\n  component: Grid,\\n  parameters: {\\n    chromatic: {\\n      disable: false,\\n    },\\n  },\\n};\\n\\nexport const GridStates = {\\n  render: () => {\\n    return (\\n      <>\\n        <h2>Grid States</h2>\\n        <StaticStates>\\n          <ComponentStatesTable\\n            columnProps={[{label: \'Default\', props: {}}]}\\n            rowProps={[\\n              {\\n                label: \'Row\',\\n                props: {\\n                  gridAutoFlow: \'column\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n              {\\n                label: \'Column\',\\n                props: {\\n                  gridAutoFlow: \'row\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n              {\\n                label: \'Template Column\',\\n                props: {\\n                  flexDirection: \'row\',\\n                  gridTemplateColumns: \'repeat(2, 1fr)\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n            ]}\\n          >\\n            {props => {\\n              return (\\n                <Grid {...props}>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    1\\n                  </Grid>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    2\\n                  </Grid>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    3\\n                  </Grid>\\n                  <Grid\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    4\\n                  </Grid>\\n                </Grid>\\n              );\\n            }}\\n          </ComponentStatesTable>\\n        </StaticStates>\\n      </>\\n    );\\n  },\\n};\\n\\nexport const GridUILayout = {\\n  render: () => {\\n    return (\\n      <>\\n        <h2>Grid UI Layout</h2>\\n        <StaticStates>\\n          <ComponentStatesTable\\n            columnProps={[{label: \'Default\', props: {}}]}\\n            rowProps={[\\n              {\\n                label: \'UI - Grid Area\',\\n                props: {\\n                  gridTemplateAreas:\\n                    \\"\'Header Header Header Header\' \'SideBar BodyContent BodyContent BodyContent\' \'Footer Footer Footer Footer\'\\",\\n                  gridTemplateColumns: \'1fr 3fr\',\\n                  gridTemplateRows: \'auto 300px auto\',\\n                  border: \'solid 2px\',\\n                  borderColor: \'blackPepper500\',\\n                  padding: \'16px\',\\n                  gridGap: \'s\',\\n                },\\n              },\\n            ]}\\n          >\\n            {props => {\\n              return (\\n                <Grid {...props}>\\n                  <Grid\\n                    gridArea=\\"Header\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    Header\\n                  </Grid>\\n                  <Grid\\n                    gridArea=\\"SideBar\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    SideBar\\n                  </Grid>\\n                  <Grid\\n                    gridArea=\\"BodyContent\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    BodyContent\\n                  </Grid>\\n                  <Grid\\n                    gridArea=\\"Footer\\"\\n                    border=\\"solid 2px\\"\\n                    alignItems=\\"center\\"\\n                    justifyContent=\\"center\\"\\n                    borderColor=\\"cinnamon500\\"\\n                    paddingY=\\"xxs\\"\\n                    paddingX=\\"s\\"\\n                  >\\n                    Footer\\n                  </Grid>\\n                </Grid>\\n              );\\n            }}\\n          </ComponentStatesTable>\\n        </StaticStates>\\n      </>\\n    );\\n  },\\n};\\n",\n    "locationsMap": {\n      "grid-states": {\n        "startLoc": {\n          "col": 26,\n          "line": 16\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 109\n        },\n        "startBody": {\n          "col": 26,\n          "line": 16\n        },\n        "endBody": {\n          "col": 1,\n          "line": 109\n        }\n      },\n      "grid-ui-layout": {\n        "startLoc": {\n          "col": 28,\n          "line": 111\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 190\n        },\n        "startBody": {\n          "col": 28,\n          "line": 111\n        },\n        "endBody": {\n          "col": 1,\n          "line": 190\n        }\n      }\n    }\n  }\n,\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const GridStates = {\n  render: () => {\n    return (\n      <>\n        <h2>Grid States</h2>\n        <StaticStates>\n          <ComponentStatesTable\n            columnProps={[{label: \'Default\', props: {}}]}\n            rowProps={[\n              {\n                label: \'Row\',\n                props: {\n                  gridAutoFlow: \'column\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n              {\n                label: \'Column\',\n                props: {\n                  gridAutoFlow: \'row\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n              {\n                label: \'Template Column\',\n                props: {\n                  flexDirection: \'row\',\n                  gridTemplateColumns: \'repeat(2, 1fr)\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n            ]}\n          >\n            {props => {\n              return (\n                <Grid {...props}>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    1\n                  </Grid>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    2\n                  </Grid>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    3\n                  </Grid>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    4\n                  </Grid>\n                </Grid>\n              );\n            }}\n          </ComponentStatesTable>\n        </StaticStates>\n      </>\n    );\n  },\n};;\n\nexport const GridUILayout = {\n  render: () => {\n    return (\n      <>\n        <h2>Grid UI Layout</h2>\n        <StaticStates>\n          <ComponentStatesTable\n            columnProps={[{label: \'Default\', props: {}}]}\n            rowProps={[\n              {\n                label: \'UI - Grid Area\',\n                props: {\n                  gridTemplateAreas:\n                    "\'Header Header Header Header\' \'SideBar BodyContent BodyContent BodyContent\' \'Footer Footer Footer Footer\'",\n                  gridTemplateColumns: \'1fr 3fr\',\n                  gridTemplateRows: \'auto 300px auto\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n            ]}\n          >\n            {props => {\n              return (\n                <Grid {...props}>\n                  <Grid\n                    gridArea="Header"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    Header\n                  </Grid>\n                  <Grid\n                    gridArea="SideBar"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    SideBar\n                  </Grid>\n                  <Grid\n                    gridArea="BodyContent"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    BodyContent\n                  </Grid>\n                  <Grid\n                    gridArea="Footer"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    Footer\n                  </Grid>\n                </Grid>\n              );\n            }}\n          </ComponentStatesTable>\n        </StaticStates>\n      </>\n    );\n  },\n};\n',locationsMap:{"grid-states":{startLoc:{col:26,line:103},endLoc:{col:1,line:196},startBody:{col:26,line:103},endBody:{col:1,line:196}},"grid-ui-layout":{startLoc:{col:28,line:198},endLoc:{col:1,line:277},startBody:{col:28,line:198},endBody:{col:1,line:277}}}},storySource:{source:'import React from \'react\';\n\nimport {Grid} from \'@workday/canvas-kit-react/layout\';\nimport {ComponentStatesTable, StaticStates} from \'@workday/canvas-kit-react/testing\';\n\nexport default {\n  title: \'Testing/Layout/Grid\',\n  component: Grid,\n  parameters: {\n    chromatic: {\n      disable: false,\n    },\n  },\n};\n\nexport const GridStates = {\n  render: () => {\n    return (\n      <>\n        <h2>Grid States</h2>\n        <StaticStates>\n          <ComponentStatesTable\n            columnProps={[{label: \'Default\', props: {}}]}\n            rowProps={[\n              {\n                label: \'Row\',\n                props: {\n                  gridAutoFlow: \'column\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n              {\n                label: \'Column\',\n                props: {\n                  gridAutoFlow: \'row\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n              {\n                label: \'Template Column\',\n                props: {\n                  flexDirection: \'row\',\n                  gridTemplateColumns: \'repeat(2, 1fr)\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n            ]}\n          >\n            {props => {\n              return (\n                <Grid {...props}>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    1\n                  </Grid>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    2\n                  </Grid>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    3\n                  </Grid>\n                  <Grid\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    4\n                  </Grid>\n                </Grid>\n              );\n            }}\n          </ComponentStatesTable>\n        </StaticStates>\n      </>\n    );\n  },\n};\n\nexport const GridUILayout = {\n  render: () => {\n    return (\n      <>\n        <h2>Grid UI Layout</h2>\n        <StaticStates>\n          <ComponentStatesTable\n            columnProps={[{label: \'Default\', props: {}}]}\n            rowProps={[\n              {\n                label: \'UI - Grid Area\',\n                props: {\n                  gridTemplateAreas:\n                    "\'Header Header Header Header\' \'SideBar BodyContent BodyContent BodyContent\' \'Footer Footer Footer Footer\'",\n                  gridTemplateColumns: \'1fr 3fr\',\n                  gridTemplateRows: \'auto 300px auto\',\n                  border: \'solid 2px\',\n                  borderColor: \'blackPepper500\',\n                  padding: \'16px\',\n                  gridGap: \'s\',\n                },\n              },\n            ]}\n          >\n            {props => {\n              return (\n                <Grid {...props}>\n                  <Grid\n                    gridArea="Header"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    Header\n                  </Grid>\n                  <Grid\n                    gridArea="SideBar"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    SideBar\n                  </Grid>\n                  <Grid\n                    gridArea="BodyContent"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    BodyContent\n                  </Grid>\n                  <Grid\n                    gridArea="Footer"\n                    border="solid 2px"\n                    alignItems="center"\n                    justifyContent="center"\n                    borderColor="cinnamon500"\n                    paddingY="xxs"\n                    paddingX="s"\n                  >\n                    Footer\n                  </Grid>\n                </Grid>\n              );\n            }}\n          </ComponentStatesTable>\n        </StaticStates>\n      </>\n    );\n  },\n};\n',locationsMap:{"grid-states":{startLoc:{col:26,line:16},endLoc:{col:1,line:109},startBody:{col:26,line:16},endBody:{col:1,line:109}},"grid-ui-layout":{startLoc:{col:28,line:111},endLoc:{col:1,line:190},startBody:{col:28,line:111},endBody:{col:1,line:190}}}},chromatic:{disable:!1}}};exports.GridStates={render:()=>_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("h2",null,"Grid States"),_react.default.createElement(_testing.StaticStates,null,_react.default.createElement(_testing.ComponentStatesTable,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"Row",props:{gridAutoFlow:"column",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}},{label:"Column",props:{gridAutoFlow:"row",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}},{label:"Template Column",props:{flexDirection:"row",gridTemplateColumns:"repeat(2, 1fr)",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}}]},(props=>_react.default.createElement(_layout.Grid,props,_react.default.createElement(_layout.Grid,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"1"),_react.default.createElement(_layout.Grid,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"2"),_react.default.createElement(_layout.Grid,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"3"),_react.default.createElement(_layout.Grid,{border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"4"))))))},exports.GridUILayout={render:()=>_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("h2",null,"Grid UI Layout"),_react.default.createElement(_testing.StaticStates,null,_react.default.createElement(_testing.ComponentStatesTable,{columnProps:[{label:"Default",props:{}}],rowProps:[{label:"UI - Grid Area",props:{gridTemplateAreas:"'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",gridTemplateColumns:"1fr 3fr",gridTemplateRows:"auto 300px auto",border:"solid 2px",borderColor:"blackPepper500",padding:"16px",gridGap:"s"}}]},(props=>_react.default.createElement(_layout.Grid,props,_react.default.createElement(_layout.Grid,{gridArea:"Header",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"Header"),_react.default.createElement(_layout.Grid,{gridArea:"SideBar",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"SideBar"),_react.default.createElement(_layout.Grid,{gridArea:"BodyContent",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"BodyContent"),_react.default.createElement(_layout.Grid,{gridArea:"Footer",border:"solid 2px",alignItems:"center",justifyContent:"center",borderColor:"cinnamon500",paddingY:"xxs",paddingX:"s"},"Footer"))))))};module.exports.__namedExportsOrder=["GridUILayout","GridStates"]}}]);