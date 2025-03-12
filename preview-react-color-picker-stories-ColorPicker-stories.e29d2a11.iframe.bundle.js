"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[1124],{"./modules/preview-react/color-picker/stories/ColorPicker.stories.tsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColorInputPopup=exports.IconButtonPopup=exports.Default=exports.default=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_colorPicker=__webpack_require__("./modules/preview-react/color-picker/index.ts"),_IconButtonPopup=__webpack_require__("./modules/preview-react/color-picker/stories/examples/IconButtonPopup.tsx"),_ColorInputPopup=__webpack_require__("./modules/preview-react/color-picker/stories/examples/ColorInputPopup.tsx");const noop=()=>{};var _default={title:"Preview/Color Picker",component:_colorPicker.ColorPicker,parameters:{storySource:{source:'\n    \n    // @ts-nocheck\n    // @ts-expect-error (Converted from ts-ignore)\n    var __STORY__ = "import React from \'react\';\\nimport {Meta, StoryObj} from \'@storybook/react\';\\nimport {ColorPicker} from \'@workday/canvas-kit-preview-react/color-picker\';\\n\\nimport {IconButtonPopup as IconButtonPopupExample} from \'./examples/IconButtonPopup\';\\nimport {ColorInputPopup as ColorInputPopupExample} from \'./examples/ColorInputPopup\';\\n\\n// eslint-disable-next-line no-empty-function\\nconst noop = () => {};\\n\\nconst meta: Meta<typeof ColorPicker> = {\\n  title: \'Preview/Color Picker\',\\n  component: ColorPicker,\\n  parameters: {\\n    ReadmePath: \'preview-react/color-picker\',\\n  },\\n};\\n\\nexport default meta;\\n\\nexport const Default: StoryObj = {\\n  name: \'Default\',\\n  render: () => <ColorPicker onColorChange={noop} />,\\n};\\n\\nexport const IconButtonPopup: StoryObj = {\\n  name: \'Icon button Popup\',\\n  render: IconButtonPopupExample,\\n};\\n\\nexport const ColorInputPopup: StoryObj = {\\n  name: \'Color Input Popup\',\\n  render: ColorInputPopupExample,\\n};\\n";\n    // @ts-expect-error (Converted from ts-ignore)\n    var __LOCATIONS_MAP__ = {\n  "Default": {\n    "startLoc": {\n      "col": 33,\n      "line": 21\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 24\n    },\n    "startBody": {\n      "col": 33,\n      "line": 21\n    },\n    "endBody": {\n      "col": 1,\n      "line": 24\n    }\n  },\n  "IconButtonPopup": {\n    "startLoc": {\n      "col": 41,\n      "line": 26\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 29\n    },\n    "startBody": {\n      "col": 41,\n      "line": 26\n    },\n    "endBody": {\n      "col": 1,\n      "line": 29\n    }\n  },\n  "ColorInputPopup": {\n    "startLoc": {\n      "col": 41,\n      "line": 31\n    },\n    "endLoc": {\n      "col": 1,\n      "line": 34\n    },\n    "startBody": {\n      "col": 41,\n      "line": 31\n    },\n    "endBody": {\n      "col": 1,\n      "line": 34\n    }\n  }\n};\n    \nimport React from \'react\';\nimport {Meta, StoryObj} from \'@storybook/react\';\nimport {ColorPicker} from \'@workday/canvas-kit-preview-react/color-picker\';\n\nimport {IconButtonPopup as IconButtonPopupExample} from \'./examples/IconButtonPopup\';\nimport {ColorInputPopup as ColorInputPopupExample} from \'./examples/ColorInputPopup\';\n\n\nconst noop = () => {};\n\nconst meta: Meta<typeof ColorPicker> = {\n  title: \'Preview/Color Picker\',\n  component: ColorPicker,\n  parameters: {\n  "storySource": {\n    "source": "import React from \'react\';\\nimport {Meta, StoryObj} from \'@storybook/react\';\\nimport {ColorPicker} from \'@workday/canvas-kit-preview-react/color-picker\';\\n\\nimport {IconButtonPopup as IconButtonPopupExample} from \'./examples/IconButtonPopup\';\\nimport {ColorInputPopup as ColorInputPopupExample} from \'./examples/ColorInputPopup\';\\n\\n\\nconst noop = () => {};\\n\\nconst meta: Meta<typeof ColorPicker> = {\\n  title: \'Preview/Color Picker\',\\n  component: ColorPicker,\\n  parameters: {\\n    ReadmePath: \'preview-react/color-picker\',\\n  },\\n};\\n\\nexport default meta;\\n\\nexport const Default: StoryObj = {\\n  name: \'Default\',\\n  render: () => <ColorPicker onColorChange={noop} />,\\n};\\n\\nexport const IconButtonPopup: StoryObj = {\\n  name: \'Icon button Popup\',\\n  render: IconButtonPopupExample,\\n};\\n\\nexport const ColorInputPopup: StoryObj = {\\n  name: \'Color Input Popup\',\\n  render: ColorInputPopupExample,\\n};\\n",\n    "locationsMap": {\n      "default": {\n        "startLoc": {\n          "col": 33,\n          "line": 21\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 24\n        },\n        "startBody": {\n          "col": 33,\n          "line": 21\n        },\n        "endBody": {\n          "col": 1,\n          "line": 24\n        }\n      },\n      "icon-button-popup": {\n        "startLoc": {\n          "col": 41,\n          "line": 26\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 29\n        },\n        "startBody": {\n          "col": 41,\n          "line": 26\n        },\n        "endBody": {\n          "col": 1,\n          "line": 29\n        }\n      },\n      "color-input-popup": {\n        "startLoc": {\n          "col": 41,\n          "line": 31\n        },\n        "endLoc": {\n          "col": 1,\n          "line": 34\n        },\n        "startBody": {\n          "col": 41,\n          "line": 31\n        },\n        "endBody": {\n          "col": 1,\n          "line": 34\n        }\n      }\n    }\n  }\n,\n    ReadmePath: \'preview-react/color-picker\',\n  },\n};\n\nexport default meta;\n\nexport const Default: StoryObj = {\n  name: \'Default\',\n  render: () => <ColorPicker onColorChange={noop} />,\n};;\n\nexport const IconButtonPopup: StoryObj = {\n  name: \'Icon button Popup\',\n  render: IconButtonPopupExample,\n};;\n\nexport const ColorInputPopup: StoryObj = {\n  name: \'Color Input Popup\',\n  render: ColorInputPopupExample,\n};\n',locationsMap:{default:{startLoc:{col:33,line:144},endLoc:{col:1,line:147},startBody:{col:33,line:144},endBody:{col:1,line:147}},"icon-button-popup":{startLoc:{col:41,line:149},endLoc:{col:1,line:152},startBody:{col:41,line:149},endBody:{col:1,line:152}},"color-input-popup":{startLoc:{col:41,line:154},endLoc:{col:1,line:157},startBody:{col:41,line:154},endBody:{col:1,line:157}}}},storySource:{source:"import React from 'react';\nimport {Meta, StoryObj} from '@storybook/react';\nimport {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';\n\nimport {IconButtonPopup as IconButtonPopupExample} from './examples/IconButtonPopup';\nimport {ColorInputPopup as ColorInputPopupExample} from './examples/ColorInputPopup';\n\n\nconst noop = () => {};\n\nconst meta: Meta<typeof ColorPicker> = {\n  title: 'Preview/Color Picker',\n  component: ColorPicker,\n  parameters: {\n    ReadmePath: 'preview-react/color-picker',\n  },\n};\n\nexport default meta;\n\nexport const Default: StoryObj = {\n  name: 'Default',\n  render: () => <ColorPicker onColorChange={noop} />,\n};\n\nexport const IconButtonPopup: StoryObj = {\n  name: 'Icon button Popup',\n  render: IconButtonPopupExample,\n};\n\nexport const ColorInputPopup: StoryObj = {\n  name: 'Color Input Popup',\n  render: ColorInputPopupExample,\n};\n",locationsMap:{default:{startLoc:{col:33,line:21},endLoc:{col:1,line:24},startBody:{col:33,line:21},endBody:{col:1,line:24}},"icon-button-popup":{startLoc:{col:41,line:26},endLoc:{col:1,line:29},startBody:{col:41,line:26},endBody:{col:1,line:29}},"color-input-popup":{startLoc:{col:41,line:31},endLoc:{col:1,line:34},startBody:{col:41,line:31},endBody:{col:1,line:34}}}},ReadmePath:"preview-react/color-picker"}};exports.default=_default;const Default={name:"Default",render:()=>_react.default.createElement(_colorPicker.ColorPicker,{onColorChange:noop})};exports.Default=Default;const IconButtonPopup={name:"Icon button Popup",render:_IconButtonPopup.IconButtonPopup};exports.IconButtonPopup=IconButtonPopup;const ColorInputPopup={name:"Color Input Popup",render:_ColorInputPopup.ColorInputPopup};exports.ColorInputPopup=ColorInputPopup,module.exports.__namedExportsOrder=["ColorInputPopup","IconButtonPopup","Default"]},"./modules/preview-react/color-picker/stories/examples/ColorInputPopup.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColorInputPopup=void 0;var _react=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(__webpack_require__("./node_modules/react/index.js")),_colorPicker=__webpack_require__("./modules/react/color-picker/index.ts"),_tokens=__webpack_require__("./modules/react/tokens/index.ts"),_popup=__webpack_require__("./modules/react/popup/index.ts"),_colorPicker2=__webpack_require__("./modules/preview-react/color-picker/index.ts"),_common=__webpack_require__("./modules/react/common/index.ts"),_formField=__webpack_require__("./modules/react/form-field/index.ts");const ColorInputPopup=()=>{const defaultColor=_tokens.colors.blueberry400,[color,setColor]=_react.default.useState(defaultColor),[colorInputValidColor,setColorInputValidColor]=_react.default.useState(defaultColor),[colorInputValue,setColorInputValue]=_react.default.useState(defaultColor),model=(0,_popup.usePopupModel)();(0,_popup.useCloseOnOutsideClick)(model),(0,_popup.useCloseOnEscape)(model),(0,_popup.useInitialFocus)(model),(0,_popup.useReturnFocus)(model);const colorSet=[_tokens.colors.cinnamon400,_tokens.colors.cantaloupe400,_tokens.colors.sourLemon400,_tokens.colors.greenApple400,_tokens.colors.blueberry400,_tokens.colors.islandPunch400,_tokens.colors.pomegranate400,_tokens.colors.toastedMarshmallow400,_tokens.colors.frenchVanilla100,_tokens.colors.frenchVanilla200,_tokens.colors.frenchVanilla300,_tokens.colors.frenchVanilla400,_tokens.colors.blackPepper100,_tokens.colors.blackPepper200,_tokens.colors.blackPepper400,_tokens.colors.blackPepper600];return _react.default.createElement(_popup.Popup,{model},_react.default.createElement(_formField.FormField,null,_react.default.createElement(_formField.FormField.Label,null,"Choose a color"),_react.default.createElement(_formField.FormField.Input,{as:_popup.Popup.Target.as(_colorPicker.ColorInput),onChange:e=>setColorInputValue(e.target.value),onValidColorChange:color=>{setColorInputValidColor(color.toUpperCase()),setColor(color.toUpperCase())},value:colorInputValue,showCheck:colorInputValidColor===color||colorInputValue===color,onFocus:model.events.show,onBlur:e=>{console.log("blur",e.currentTarget,e.relatedTarget,model.state.stackRef.current),!model.state.stackRef.current||model.state.stackRef.current.contains(e.relatedTarget)}}),_react.default.createElement(_popup.Popup.Popper,null,_react.default.createElement(_popup.Popup.Card,{style:{marginTop:8},padding:"s",depth:3},_react.default.createElement(_popup.Popup.Body,null,_react.default.createElement(_colorPicker2.ColorPicker,{resetColor:_tokens.colors.blueberry400,resetLabel:"Reset",onColorChange:color=>{var _model$state$targetRe;setColorInputValue(color.toUpperCase()),setColor(color.toUpperCase()),model.events.hide(),null===(_model$state$targetRe=model.state.targetRef.current)||void 0===_model$state$targetRe||_model$state$targetRe.focus()},onColorReset:()=>{setColor(defaultColor),setColorInputValue(defaultColor),setColorInputValidColor(defaultColor),model.events.hide(),(0,_common.changeFocus)(model.state.targetRef.current)},value:color,colorSet}))))))};exports.ColorInputPopup=ColorInputPopup,ColorInputPopup.displayName="ColorInputPopup",ColorInputPopup.__RAW__="import React from 'react';\nimport {ColorInput} from '@workday/canvas-kit-react/color-picker';\nimport {colors} from '@workday/canvas-kit-react/tokens';\nimport {\n  Popup,\n  usePopupModel,\n  useCloseOnOutsideClick,\n  useCloseOnEscape,\n  useInitialFocus,\n  useReturnFocus,\n} from '@workday/canvas-kit-react/popup';\nimport {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';\nimport {changeFocus} from '@workday/canvas-kit-react/common';\nimport {FormField} from '@workday/canvas-kit-react/form-field';\n\nexport const ColorInputPopup = () => {\n  const defaultColor = colors.blueberry400;\n\n  const [color, setColor] = React.useState(defaultColor);\n  const [colorInputValidColor, setColorInputValidColor] = React.useState(defaultColor);\n  const [colorInputValue, setColorInputValue] = React.useState(defaultColor);\n  const model = usePopupModel();\n\n  useCloseOnOutsideClick(model);\n  useCloseOnEscape(model);\n  useInitialFocus(model);\n  useReturnFocus(model);\n\n  const resetColor = () => {\n    setColor(defaultColor);\n    setColorInputValue(defaultColor);\n    setColorInputValidColor(defaultColor);\n    model.events.hide();\n    changeFocus(model.state.targetRef.current);\n  };\n\n  const colorSet = [\n    colors.cinnamon400,\n    colors.cantaloupe400,\n    colors.sourLemon400,\n    colors.greenApple400,\n    colors.blueberry400,\n    colors.islandPunch400,\n    colors.pomegranate400,\n    colors.toastedMarshmallow400,\n\n    colors.frenchVanilla100,\n    colors.frenchVanilla200,\n    colors.frenchVanilla300,\n    colors.frenchVanilla400,\n    colors.blackPepper100,\n    colors.blackPepper200,\n    colors.blackPepper400,\n    colors.blackPepper600,\n  ];\n\n  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {\n    console.log('blur', e.currentTarget, e.relatedTarget, model.state.stackRef.current);\n    if (\n      !model.state.stackRef.current ||\n      !model.state.stackRef.current.contains(e.relatedTarget as Node)\n    ) {\n      // model.events.hide();\n    }\n  };\n\n  return (\n    <Popup model={model}>\n      <FormField>\n        <FormField.Label>Choose a color</FormField.Label>\n        <FormField.Input\n          as={Popup.Target.as(ColorInput)}\n          onChange={e => setColorInputValue(e.target.value)}\n          onValidColorChange={color => {\n            setColorInputValidColor(color.toUpperCase());\n            setColor(color.toUpperCase());\n          }}\n          value={colorInputValue}\n          showCheck={colorInputValidColor === color || colorInputValue === color}\n          onFocus={model.events.show}\n          onBlur={onBlur}\n        />\n        <Popup.Popper>\n          <Popup.Card style={{marginTop: 8}} padding=\"s\" depth={3}>\n            <Popup.Body>\n              <ColorPicker\n                resetColor={colors.blueberry400}\n                resetLabel={'Reset'}\n                onColorChange={color => {\n                  setColorInputValue(color.toUpperCase());\n                  setColor(color.toUpperCase());\n                  model.events.hide();\n                  model.state.targetRef.current?.focus();\n                }}\n                onColorReset={resetColor}\n                value={color}\n                colorSet={colorSet}\n              />\n            </Popup.Body>\n          </Popup.Card>\n        </Popup.Popper>\n      </FormField>\n    </Popup>\n  );\n};\n"},"./modules/preview-react/color-picker/stories/examples/IconButtonPopup.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconButtonPopup=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_tokens=__webpack_require__("./modules/react/tokens/index.ts"),_popup=__webpack_require__("./modules/react/popup/index.ts"),_button=__webpack_require__("./modules/react/button/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"),_colorPicker=__webpack_require__("./modules/preview-react/color-picker/index.ts"),_common=__webpack_require__("./modules/react/common/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}const IconButtonPopup=()=>{const model=(0,_popup.usePopupModel)(),[color,setColor]=React.useState("");(0,_popup.useCloseOnOutsideClick)(model),(0,_popup.useCloseOnEscape)(model),(0,_popup.useInitialFocus)(model),(0,_popup.useReturnFocus)(model);const handleSubmit=React.useCallback((submitColor=>{setColor(submitColor.toUpperCase()),model.events.hide(),(0,_common.changeFocus)(model.state.targetRef.current)}),[model.events,model.state.targetRef]);return React.createElement(_popup.Popup,{model},React.createElement(_popup.Popup.Target,{as:_button.TertiaryButton,icon:_canvasSystemIconsWeb.bgColorIcon,"aria-label":"Select Background Color"}),React.createElement(_popup.Popup.Popper,null,React.createElement(_popup.Popup.Card,{marginTop:"xxs",padding:"s",depth:3},React.createElement(_popup.Popup.Body,null,React.createElement(_colorPicker.ColorPicker,{resetColor:_tokens.colors.blueberry400,resetLabel:"Reset",showCustomHexInput:!0,onColorChange:handleSubmit,onColorReset:()=>handleSubmit(_tokens.colors.blueberry400),onSubmitClick:model.events.hide,value:color})))))};exports.IconButtonPopup=IconButtonPopup,IconButtonPopup.displayName="IconButtonPopup",IconButtonPopup.__RAW__="import * as React from 'react';\nimport {colors} from '@workday/canvas-kit-react/tokens';\nimport {\n  Popup,\n  usePopupModel,\n  useCloseOnOutsideClick,\n  useCloseOnEscape,\n  useInitialFocus,\n  useReturnFocus,\n} from '@workday/canvas-kit-react/popup';\nimport {TertiaryButton} from '@workday/canvas-kit-react/button';\nimport {bgColorIcon} from '@workday/canvas-system-icons-web';\nimport {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';\nimport {changeFocus} from '@workday/canvas-kit-react/common';\n\nexport const IconButtonPopup = () => {\n  const model = usePopupModel();\n  const [color, setColor] = React.useState('');\n\n  useCloseOnOutsideClick(model);\n  useCloseOnEscape(model);\n  useInitialFocus(model);\n  useReturnFocus(model);\n\n  const handleSubmit = React.useCallback(\n    (submitColor: string) => {\n      setColor(submitColor.toUpperCase());\n      model.events.hide();\n      changeFocus(model.state.targetRef.current);\n    },\n    [model.events, model.state.targetRef]\n  );\n\n  return (\n    <Popup model={model}>\n      <Popup.Target as={TertiaryButton} icon={bgColorIcon} aria-label=\"Select Background Color\" />\n      <Popup.Popper>\n        <Popup.Card marginTop=\"xxs\" padding=\"s\" depth={3}>\n          <Popup.Body>\n            <ColorPicker\n              resetColor={colors.blueberry400}\n              resetLabel={'Reset'}\n              showCustomHexInput={true}\n              onColorChange={handleSubmit}\n              onColorReset={() => handleSubmit(colors.blueberry400)}\n              onSubmitClick={model.events.hide}\n              value={color}\n            />\n          </Popup.Body>\n        </Popup.Card>\n      </Popup.Popper>\n    </Popup>\n  );\n};\n"}}]);