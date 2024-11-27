"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[2240],{"./modules/react/popup/stories/testingFallback.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PopupWithFallbackPlacements=exports.default=void 0;var _storybook=__webpack_require__("./utils/storybook/index.ts"),_popup=__webpack_require__("./modules/react/popup/index.ts"),_PopupWithFallbackPlacements=__webpack_require__("./modules/react/popup/stories/examples/PopupWithFallbackPlacements.tsx"),_default={title:"Testing/Popups/Popup",component:_popup.Popup,parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import {customViewport} from \'../../../../utils/storybook\';\\nimport {Popup} from \'@workday/canvas-kit-react/popup\';\\nimport {PopupWithFallbackPlacements as PopupWithFallbackPlacementsExample} from \'./examples/PopupWithFallbackPlacements\';\\n\\nexport default {\\n  title: \'Testing/Popups/Popup\',\\n  component: Popup,\\n  parameters: {\\n    viewport: {\\n      viewports: customViewport,\\n      defaultViewport: \'landscape\',\\n    },\\n  },\\n};\\n\\nexport const PopupWithFallbackPlacements = {\\n  render: PopupWithFallbackPlacementsExample,\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "PopupWithFallbackPlacements": {\n    "startLoc": {\n      "col": 43,\n      "line": 16\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 18\n    },\n    "startBody": {\n      "col": 43,\n      "line": 16\n    },\n    "endBody": {\n      "col": 1,\n      "line": 18\n    }\n  }\n};\n    \nimport {customViewport} from \'../../../../utils/storybook\';\nimport {Popup} from \'@workday/canvas-kit-react/popup\';\nimport {PopupWithFallbackPlacements as PopupWithFallbackPlacementsExample} from \'./examples/PopupWithFallbackPlacements\';\n\nexport default {\n  title: \'Testing/Popups/Popup\',\n  component: Popup,\n  parameters: {\n  "storySource": {\n    "source": "import {customViewport} from \'../../../../utils/storybook\';\\nimport {Popup} from \'@workday/canvas-kit-react/popup\';\\nimport {PopupWithFallbackPlacements as PopupWithFallbackPlacementsExample} from \'./examples/PopupWithFallbackPlacements\';\\n\\nexport default {\\n  title: \'Testing/Popups/Popup\',\\n  component: Popup,\\n  parameters: {\\n    viewport: {\\n      viewports: customViewport,\\n      defaultViewport: \'landscape\',\\n    },\\n  },\\n};\\n\\nexport const PopupWithFallbackPlacements = {\\n  render: PopupWithFallbackPlacementsExample,\\n};\\n",\n    "locationsMap": {\n      "popup-with-fallback-placements": {\n        "startLoc": {\n          "col": 43,\n          "line": 16\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 18\n        },\n        "startBody": {\n          "col": 43,\n          "line": 16\n        },\n        "endBody": {\n          "col": 1,\n          "line": 18\n        }\n      }\n    }\n  }\n,\n    viewport: {\n      viewports: customViewport,\n      defaultViewport: \'landscape\',\n    },\n  },\n};\n\nexport const PopupWithFallbackPlacements = {\n  render: PopupWithFallbackPlacementsExample,\n};\n',locationsMap:{"popup-with-fallback-placements":{startLoc:{col:43,line:67},endLoc:{col:1,line:69},startBody:{col:43,line:67},endBody:{col:1,line:69}}}},storySource:{source:"import {customViewport} from '../../../../utils/storybook';\nimport {Popup} from '@workday/canvas-kit-react/popup';\nimport {PopupWithFallbackPlacements as PopupWithFallbackPlacementsExample} from './examples/PopupWithFallbackPlacements';\n\nexport default {\n  title: 'Testing/Popups/Popup',\n  component: Popup,\n  parameters: {\n    viewport: {\n      viewports: customViewport,\n      defaultViewport: 'landscape',\n    },\n  },\n};\n\nexport const PopupWithFallbackPlacements = {\n  render: PopupWithFallbackPlacementsExample,\n};\n",locationsMap:{"popup-with-fallback-placements":{startLoc:{col:43,line:16},endLoc:{col:1,line:18},startBody:{col:43,line:16},endBody:{col:1,line:18}}}},viewport:{viewports:_storybook.customViewport,defaultViewport:"landscape"}}};exports.default=_default;const PopupWithFallbackPlacements={render:_PopupWithFallbackPlacements.PopupWithFallbackPlacements};exports.PopupWithFallbackPlacements=PopupWithFallbackPlacements,module.exports.__namedExportsOrder=["PopupWithFallbackPlacements"]},"./modules/react/popup/stories/examples/PopupWithFallbackPlacements.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PopupWithFallbackPlacements=void 0;var _react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/react/index.js")),_button=__webpack_require__("./modules/react/button/index.ts"),_popup=__webpack_require__("./modules/react/popup/index.ts"),_layout=__webpack_require__("./modules/react/layout/index.ts"),_canvasKitStyling=__webpack_require__("./modules/styling/index.ts"),_canvasTokensWeb=__webpack_require__("./node_modules/@workday/canvas-tokens-web/dist/es6/index.js");const PopupWithFallbackPlacements=()=>{const model=(0,_popup.usePopupModel)();(0,_popup.useCloseOnOutsideClick)(model),(0,_popup.useCloseOnEscape)(model),(0,_popup.useInitialFocus)(model),(0,_popup.useReturnFocus)(model);const handleDelete=()=>{console.log("Delete Item")},grid=(0,_canvasKitStyling.createStyles)({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:_canvasKitStyling.calc.subtract("100vh",_canvasTokensWeb.system.space.x16),width:_canvasKitStyling.calc.subtract("100vw",_canvasTokensWeb.system.space.x20)}),topButton=(0,_canvasKitStyling.createStyles)({gridArea:"topButton",justifySelf:"center"}),rightButton=(0,_canvasKitStyling.createStyles)({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),bottomButton=(0,_canvasKitStyling.createStyles)({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),leftButton=(0,_canvasKitStyling.createStyles)({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"});return _react.default.createElement("div",{"data-testid":"scroll-area-fallback-placement"},_react.default.createElement(_layout.Grid,{cs:grid},_react.default.createElement(_popup.Popup,null,_react.default.createElement(_popup.Popup.Target,{cs:topButton,as:_button.DeleteButton},"Placement Top"),_react.default.createElement(_popup.Popup.Popper,{placement:"top"},_react.default.createElement(_popup.Popup.Card,{width:400},_react.default.createElement(_popup.Popup.CloseIcon,{"aria-label":"Close"}),_react.default.createElement(_popup.Popup.Heading,{paddingTop:"m"},"This is Popup heading"),_react.default.createElement(_popup.Popup.Body,null,"Are you sure you'd like to delete the item titled 'My Item'?"),_react.default.createElement(_layout.Flex,{gap:"s",padding:"xxs",marginTop:"xxs"},_react.default.createElement(_popup.Popup.CloseButton,{as:_button.DeleteButton,onClick:handleDelete},"Delete"),_react.default.createElement(_popup.Popup.CloseButton,null,"Cancel"))))),_react.default.createElement(_popup.Popup,null,_react.default.createElement(_popup.Popup.Target,{cs:leftButton,as:_button.DeleteButton},"Placement Left"),_react.default.createElement(_popup.Popup.Popper,{placement:"left"},_react.default.createElement(_popup.Popup.Card,{width:400},_react.default.createElement(_popup.Popup.CloseIcon,{"aria-label":"Close"}),_react.default.createElement(_popup.Popup.Heading,{paddingTop:"m"},"This is Popup heading"),_react.default.createElement(_popup.Popup.Body,null,"Are you sure you'd like to delete the item titled 'My Item'?"),_react.default.createElement(_layout.Flex,{gap:"s",padding:"xxs",marginTop:"xxs"},_react.default.createElement(_popup.Popup.CloseButton,{as:_button.DeleteButton,onClick:handleDelete},"Delete"),_react.default.createElement(_popup.Popup.CloseButton,null,"Cancel"))))),_react.default.createElement(_popup.Popup,null,_react.default.createElement(_popup.Popup.Target,{cs:rightButton,as:_button.DeleteButton},"Placement Right"),_react.default.createElement(_popup.Popup.Popper,{placement:"right"},_react.default.createElement(_popup.Popup.Card,{width:400},_react.default.createElement(_popup.Popup.CloseIcon,{"aria-label":"Close"}),_react.default.createElement(_popup.Popup.Heading,{paddingTop:"m"},"This is Popup heading"),_react.default.createElement(_popup.Popup.Body,null,"Are you sure you'd like to delete the item titled 'My Item'?"),_react.default.createElement(_layout.Flex,{gap:"s",padding:"xxs",marginTop:"xxs"},_react.default.createElement(_popup.Popup.CloseButton,{as:_button.DeleteButton,onClick:handleDelete},"Delete"),_react.default.createElement(_popup.Popup.CloseButton,null,"Cancel"))))),_react.default.createElement(_popup.Popup,null,_react.default.createElement(_popup.Popup.Target,{cs:bottomButton,as:_button.DeleteButton},"Placement Bottom"),_react.default.createElement(_popup.Popup.Popper,{placement:"bottom"},_react.default.createElement(_popup.Popup.Card,{width:400},_react.default.createElement(_popup.Popup.CloseIcon,{"aria-label":"Close"}),_react.default.createElement(_popup.Popup.Heading,{paddingTop:"m"},"This is Popup heading"),_react.default.createElement(_popup.Popup.Body,null,"Are you sure you'd like to delete the item titled 'My Item'?"),_react.default.createElement(_layout.Flex,{gap:"s",padding:"xxs",marginTop:"xxs"},_react.default.createElement(_popup.Popup.CloseButton,{as:_button.DeleteButton,onClick:handleDelete},"Delete"),_react.default.createElement(_popup.Popup.CloseButton,null,"Cancel")))))))};exports.PopupWithFallbackPlacements=PopupWithFallbackPlacements,PopupWithFallbackPlacements.displayName="PopupWithFallbackPlacements",PopupWithFallbackPlacements.__RAW__="import React from 'react';\nimport {DeleteButton} from '@workday/canvas-kit-react/button';\nimport {\n  Popup,\n  usePopupModel,\n  useCloseOnEscape,\n  useCloseOnOutsideClick,\n  useInitialFocus,\n  useReturnFocus,\n} from '@workday/canvas-kit-react/popup';\nimport {Flex, Grid} from '@workday/canvas-kit-react/layout';\nimport {createStyles, calc} from '@workday/canvas-kit-styling';\nimport {system} from '@workday/canvas-tokens-web';\n\nexport const PopupWithFallbackPlacements = () => {\n  const model = usePopupModel();\n\n  useCloseOnOutsideClick(model);\n  useCloseOnEscape(model);\n  useInitialFocus(model);\n  useReturnFocus(model);\n\n  const handleDelete = () => {\n    console.log('Delete Item');\n  };\n\n  const grid = createStyles({\n    gridTemplateAreas: \"'topButton topButton''leftButton rightButton''bottomButton bottomButton'\",\n    height: calc.subtract('100vh', system.space.x16),\n    width: calc.subtract('100vw', system.space.x20),\n  });\n\n  const topButton = createStyles({\n    gridArea: 'topButton',\n    justifySelf: 'center',\n  });\n  const rightButton = createStyles({\n    gridArea: 'rightButton',\n    justifySelf: 'right',\n    alignSelf: 'center',\n  });\n  const bottomButton = createStyles({\n    gridArea: 'bottomButton',\n    justifySelf: 'center',\n    alignSelf: 'end',\n  });\n  const leftButton = createStyles({\n    gridArea: 'leftButton',\n    justifySelf: 'left',\n    alignSelf: 'center',\n  });\n\n  return (\n    <div data-testid=\"scroll-area-fallback-placement\">\n      <Grid cs={grid}>\n        <Popup>\n          <Popup.Target cs={topButton} as={DeleteButton}>\n            Placement Top\n          </Popup.Target>\n          <Popup.Popper placement=\"top\">\n            <Popup.Card width={400}>\n              <Popup.CloseIcon aria-label=\"Close\" />\n              <Popup.Heading paddingTop=\"m\">This is Popup heading</Popup.Heading>\n              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>\n              <Flex gap=\"s\" padding=\"xxs\" marginTop=\"xxs\">\n                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>\n                  Delete\n                </Popup.CloseButton>\n                <Popup.CloseButton>Cancel</Popup.CloseButton>\n              </Flex>\n            </Popup.Card>\n          </Popup.Popper>\n        </Popup>\n        <Popup>\n          <Popup.Target cs={leftButton} as={DeleteButton}>\n            Placement Left\n          </Popup.Target>\n          <Popup.Popper placement=\"left\">\n            <Popup.Card width={400}>\n              <Popup.CloseIcon aria-label=\"Close\" />\n              <Popup.Heading paddingTop=\"m\">This is Popup heading</Popup.Heading>\n              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>\n              <Flex gap=\"s\" padding=\"xxs\" marginTop=\"xxs\">\n                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>\n                  Delete\n                </Popup.CloseButton>\n                <Popup.CloseButton>Cancel</Popup.CloseButton>\n              </Flex>\n            </Popup.Card>\n          </Popup.Popper>\n        </Popup>\n        <Popup>\n          <Popup.Target cs={rightButton} as={DeleteButton}>\n            Placement Right\n          </Popup.Target>\n          <Popup.Popper placement=\"right\">\n            <Popup.Card width={400}>\n              <Popup.CloseIcon aria-label=\"Close\" />\n              <Popup.Heading paddingTop=\"m\">This is Popup heading</Popup.Heading>\n              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>\n              <Flex gap=\"s\" padding=\"xxs\" marginTop=\"xxs\">\n                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>\n                  Delete\n                </Popup.CloseButton>\n                <Popup.CloseButton>Cancel</Popup.CloseButton>\n              </Flex>\n            </Popup.Card>\n          </Popup.Popper>\n        </Popup>\n        <Popup>\n          <Popup.Target cs={bottomButton} as={DeleteButton}>\n            Placement Bottom\n          </Popup.Target>\n          <Popup.Popper placement=\"bottom\">\n            <Popup.Card width={400}>\n              <Popup.CloseIcon aria-label=\"Close\" />\n              <Popup.Heading paddingTop=\"m\">This is Popup heading</Popup.Heading>\n              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>\n              <Flex gap=\"s\" padding=\"xxs\" marginTop=\"xxs\">\n                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>\n                  Delete\n                </Popup.CloseButton>\n                <Popup.CloseButton>Cancel</Popup.CloseButton>\n              </Flex>\n            </Popup.Card>\n          </Popup.Popper>\n        </Popup>\n      </Grid>\n    </div>\n  );\n};\n"}}]);