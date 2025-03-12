"use strict";(globalThis.webpackChunkcanvas_kit=globalThis.webpackChunkcanvas_kit||[]).push([[3692],{"./modules/react/_examples/stories/mdx/Headers.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./modules/docs/index.ts"),_examples_PageHeader__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./modules/react/_examples/stories/mdx/examples/PageHeader.tsx"),_examples_GlobalHeader__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./modules/react/_examples/stories/mdx/examples/GlobalHeader.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Examples/Headers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"canvas-kit-examples",children:"Canvas Kit Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"global-header",children:"Global Header"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Developers building internal Workday applications will likely not need to create this component.\nHowever, if you're building components to be used outside of Workday, this is a helpful reference\nfor building a global navigation header that looks like our internal ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"GlobalHeader"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tooltip-usage",children:"Tooltip usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"default"})," variant Tooltip is used on all of the icon buttons, which will automatically set the\nTooltip's text to the accessible name. (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-label"}),")"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"describe"}),' variant Tooltip is used instead on the "MENU" button because this is a text button.\nThe Tooltip\'s text "Global Navigation" will instead be assigned to the accessible description to\nensure that the visible button text "MENU" is not overriden.']}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"count-badge-usage",children:"Count badge usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["When ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<CountBadge>"})," is used as a sibling component for button, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-describedby"})," property is\nset on the button referencing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"id"})," value of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<CountBadge>"}),". This practice helps support\nusers depending on screen readers to describe both the name of the button and the value of the\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<CountBadge>"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"When a web app dynamically updates count badges in real-time, consider the following accessibility\nenhancements to support live, real-time announcements for screen readers:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<CountBadge>"})," component is rendered as a child of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<AriaLiveRegion>"})," container."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<AriaLiveRegion>"})," container is assigned a name by using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"aria-labelledby"})," to reference the\nname of the icon button ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'"Notifications"'}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<AccessibleHide>"})," component is used following the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<CountBadge>"}),' to render a hidden word\n"new" that only screen reader users can access.']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["When the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<CountBadge>"}),' is updated, then screen readers can automatically describe (in real-time)\nthe name of the live region, "Notifications" and the text updated inside of it, "1 new".']}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_GlobalHeader__WEBPACK_IMPORTED_MODULE_5__.x}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"page-header",children:"Page Header"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_workday_canvas_kit_docs__WEBPACK_IMPORTED_MODULE_3__.ExampleCodeBlock,{code:_examples_PageHeader__WEBPACK_IMPORTED_MODULE_6__.x})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_canvas_kit_canvas_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./modules/react/_examples/stories/mdx/examples/GlobalHeader.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{exports.x=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_common=__webpack_require__("./modules/react/common/index.ts"),_canvasTokensWeb=__webpack_require__("./node_modules/@workday/canvas-tokens-web/dist/es6/index.js"),_canvasKitStyling=__webpack_require__("./modules/styling/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"),_button=__webpack_require__("./modules/react/button/index.ts"),_avatar=__webpack_require__("./modules/react/avatar/index.ts"),_layout=__webpack_require__("./modules/react/layout/index.ts"),_tooltip=__webpack_require__("./modules/react/tooltip/index.ts"),_combobox=__webpack_require__("./modules/react/combobox/index.ts"),_textInput=__webpack_require__("./modules/react/text-input/index.ts"),_menu=__webpack_require__("./modules/react/menu/index.ts"),_icon=__webpack_require__("./modules/react/icon/index.ts"),_badge=__webpack_require__("./modules/react/badge/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const tasks=["Request Time Off","Create Expense Report","Change Benefits"],styleOverrides={headerWrapper:(0,_canvasKitStyling.createStyles)({display:"flex",alignItems:"center",justifyContent:"space-between",boxSizing:"border-box",..._canvasTokensWeb.system.type.subtext.large,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",backgroundColor:_canvasTokensWeb.system.color.bg.default,padding:_canvasTokensWeb.system.space.x1}),inputGroupInner:(0,_canvasKitStyling.createStyles)({marginLeft:"1rem",width:(0,_canvasKitStyling.px2rem)(20),transition:"opacity 100ms ease"}),comboboxContainer:(0,_canvasKitStyling.createStyles)({margin:"auto",width:"100%",maxWidth:_canvasKitStyling.calc.multiply(_canvasTokensWeb.system.space.x20,6)}),comboboxInput:(0,_canvasKitStyling.createStyles)({borderRadius:(0,_canvasKitStyling.px2rem)(1e3),width:"20rem"}),comboboxMenuList:(0,_canvasKitStyling.createStyles)({maxHeight:(0,_canvasKitStyling.px2rem)(200)}),menuButtonStyles:(0,_canvasKitStyling.createStyles)({textDecoration:"none",color:_canvasTokensWeb.base.blackPepper500}),notificationContainerStyles:(0,_canvasKitStyling.createStyles)({boxSizing:"border-box",position:"relative"}),countBadgeStyles:(0,_canvasKitStyling.createStyles)({boxSizing:"border-box",position:"absolute",top:_canvasKitStyling.calc.negate(_canvasTokensWeb.system.space.x1),insetInlineEnd:_canvasKitStyling.calc.negate(_canvasTokensWeb.system.space.x1)}),actionButtonStyles:(0,_canvasKitStyling.createStyles)({gap:_canvasTokensWeb.system.space.x4,margin:_canvasTokensWeb.system.space.x4})},useAutocompleteInput=(0,_common.composeHooks)((0,_common.createElemPropsHook)(_combobox.useComboboxModel)((model=>({onKeyPress(event){model.events.show(event)}}))),_combobox.useComboboxInput),AutoCompleteInput=(0,_common.createSubcomponent)(_textInput.TextInput)({modelHook:_combobox.useComboboxModel,elemPropsHook:useAutocompleteInput})(((elemProps,Element)=>React.createElement(_combobox.Combobox.Input,_extends({as:Element},elemProps)))),Basic=()=>{const[notifications,setNotifications]=React.useState(0);return React.createElement(React.Fragment,null,React.createElement(GlobalHeader,null,React.createElement(GlobalHeader.Item,null,React.createElement(_tooltip.Tooltip,{title:"Global Navigation",type:"describe"},React.createElement(_button.TertiaryButton,{icon:_canvasSystemIconsWeb.justifyIcon,cs:styleOverrides.menuButtonStyles},"MENU")),React.createElement(_tooltip.Tooltip,{title:"Workday Home"},React.createElement(_button.TertiaryButton,null,React.createElement("img",{src:"https://design.workday.com/images/ck-dub-logo-blue.svg",alt:""})))),React.createElement(GlobalHeader.Item,{cs:styleOverrides.comboboxContainer},React.createElement(Autocomplete,{"aria-label":"Search Workday"})),React.createElement(GlobalHeader.Item,null,React.createElement(_tooltip.Tooltip,{title:"Assistant"},React.createElement(_button.TertiaryButton,{icon:_canvasSystemIconsWeb.assistantIcon})),React.createElement(NotificationLiveBadge,{cnt:notifications}),React.createElement(_tooltip.Tooltip,{title:"My Tasks"},React.createElement(_button.TertiaryButton,{icon:_canvasSystemIconsWeb.inboxIcon})),React.createElement(_tooltip.Tooltip,{title:"Profile"},React.createElement(_avatar.Avatar,null)))),React.createElement(_layout.Flex,{cs:styleOverrides.actionButtonStyles},React.createElement(_button.SecondaryButton,{onClick:function handleAdd(){setNotifications((prev=>prev+1))}},"Add notification"),React.createElement(_button.TertiaryButton,{onClick:function handleClear(){setNotifications(0)}},"Clear")))};exports.x=Basic;const GlobalHeaderItem=(0,_common.createComponent)("div")({displayName:"GlobalHeader.Item",Component:({gap="s",...props},ref)=>React.createElement(_layout.Flex,_extends({gap,alignItems:"center",marginX:_canvasTokensWeb.system.space.x3,ref},props))}),GlobalHeader=(0,_common.createComponent)("header")({displayName:"GlobalHeader",Component:(props,ref)=>React.createElement("header",_extends({className:styleOverrides.headerWrapper,ref},props)),subComponents:{Item:GlobalHeaderItem}}),Autocomplete=(0,_common.createComponent)("div")({displayName:"Autocomplete",Component:props=>{const[searchText,setSearchText]=React.useState("");const{model,loader}=(0,_combobox.useComboboxLoader)({total:0,pageSize:20,load:async({pageNumber,pageSize,filter})=>new Promise((resolve=>{setTimeout((()=>{const start=(pageNumber-1)*pageSize,end=start+pageSize,filteredTasks=tasks.filter((i=>""===searchText.trim()||"string"!=typeof searchText||i.toLowerCase().includes(searchText.trim().toLowerCase()))),total=filteredTasks.length,items=filteredTasks.slice(start,end);resolve({items,total})}),300)})),onShow(){loader.load()}},_combobox.useComboboxModel);return React.createElement(_combobox.Combobox,{model},React.createElement(_textInput.InputGroup,null,React.createElement(_textInput.InputGroup.InnerStart,{cs:styleOverrides.inputGroupInner},React.createElement(_icon.SystemIcon,{icon:_canvasSystemIconsWeb.searchIcon})),React.createElement(_textInput.InputGroup.Input,_extends({as:AutoCompleteInput,cs:styleOverrides.comboboxInput,onChange:function handleChange(e){setSearchText(e.target.value)},value:searchText},props))),React.createElement(_combobox.Combobox.Menu.Popper,null,React.createElement(_combobox.Combobox.Menu.Card,null,0===model.state.items.length?React.createElement(_menu.StyledMenuItem,{as:"span"},"No Results Found"):model.state.items.length>0&&React.createElement(_combobox.Combobox.Menu.List,{maxHeight:(0,_canvasKitStyling.px2rem)(200)},(item=>React.createElement(_combobox.Combobox.Menu.Item,null,item))))))}}),NotificationLiveBadge=(0,_common.createComponent)("span")({displayName:"NotificationLiveBadge",Component:({cnt=0,...props})=>{const btnId=(0,_common.useUniqueId)(),badgeId=(0,_common.useUniqueId)();return React.createElement(_layout.Flex,{cs:styleOverrides.notificationContainerStyles},React.createElement(_tooltip.Tooltip,{title:"Notifications"},React.createElement(_button.TertiaryButton,_extends({id:btnId,icon:_canvasSystemIconsWeb.notificationsIcon,"aria-describedby":cnt>0?badgeId:void 0},props))),React.createElement(_common.AriaLiveRegion,{"aria-labelledby":btnId},cnt>0&&React.createElement(React.Fragment,null,React.createElement(_badge.CountBadge,{id:badgeId,count:cnt,limit:100,cs:styleOverrides.countBadgeStyles}),React.createElement(_common.AccessibleHide,null,"New"))))}});Basic.__RAW__="import * as React from 'react';\nimport {\n  AccessibleHide,\n  AriaLiveRegion,\n  composeHooks,\n  createComponent,\n  createElemPropsHook,\n  createSubcomponent,\n  ExtractProps,\n  useUniqueId,\n} from '@workday/canvas-kit-react/common';\nimport {base, system} from '@workday/canvas-tokens-web';\nimport {calc, createStyles, px2rem} from '@workday/canvas-kit-styling';\nimport {\n  notificationsIcon,\n  inboxIcon,\n  justifyIcon,\n  assistantIcon,\n  searchIcon,\n} from '@workday/canvas-system-icons-web';\n\nimport {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';\nimport {Avatar} from '@workday/canvas-kit-react/avatar';\nimport {Flex, FlexProps} from '@workday/canvas-kit-react/layout';\nimport {LoadReturn} from '@workday/canvas-kit-react/collection';\nimport {Tooltip} from '@workday/canvas-kit-react/tooltip';\nimport {\n  Combobox,\n  useComboboxModel,\n  useComboboxInput,\n  useComboboxLoader,\n} from '@workday/canvas-kit-react/combobox';\nimport {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';\nimport {StyledMenuItem} from '@workday/canvas-kit-react/menu';\nimport {SystemIcon} from '@workday/canvas-kit-react/icon';\nimport {CountBadge} from '@workday/canvas-kit-react/badge';\n\ninterface HeaderItemProps extends FlexProps {}\ninterface LiveCountBadgeProps extends FlexProps {\n  cnt: number;\n}\n\nconst tasks = ['Request Time Off', 'Create Expense Report', 'Change Benefits'];\n\nconst styleOverrides = {\n  headerWrapper: createStyles({\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    boxSizing: 'border-box',\n    ...system.type.subtext.large,\n    WebkitFontSmoothing: 'antialiased',\n    MozOsxFontSmoothing: 'grayscale',\n    backgroundColor: system.color.bg.default,\n    padding: system.space.x1,\n  }),\n  inputGroupInner: createStyles({\n    marginLeft: '1rem',\n    width: px2rem(20),\n    transition: 'opacity 100ms ease',\n  }),\n  comboboxContainer: createStyles({\n    margin: 'auto',\n    width: '100%',\n    maxWidth: calc.multiply(system.space.x20, 6),\n  }),\n  comboboxInput: createStyles({\n    borderRadius: px2rem(1000),\n    width: '20rem',\n  }),\n  comboboxMenuList: createStyles({\n    maxHeight: px2rem(200),\n  }),\n  menuButtonStyles: createStyles({\n    textDecoration: 'none',\n    color: base.blackPepper500,\n  }),\n  notificationContainerStyles: createStyles({\n    boxSizing: 'border-box',\n    position: 'relative',\n  }),\n  countBadgeStyles: createStyles({\n    boxSizing: 'border-box',\n    position: 'absolute',\n    top: calc.negate(system.space.x1),\n    insetInlineEnd: calc.negate(system.space.x1),\n  }),\n  actionButtonStyles: createStyles({\n    gap: system.space.x4,\n    margin: system.space.x4,\n  }),\n};\n\nconst useAutocompleteInput = composeHooks(\n  createElemPropsHook(useComboboxModel)(model => {\n    return {\n      onKeyPress(event: React.KeyboardEvent) {\n        model.events.show(event);\n      },\n    };\n  }),\n  useComboboxInput\n);\n\nconst AutoCompleteInput = createSubcomponent(TextInput)({\n  modelHook: useComboboxModel,\n  elemPropsHook: useAutocompleteInput,\n})<ExtractProps<typeof Combobox.Input, never>>((elemProps, Element) => {\n  return <Combobox.Input as={Element} {...elemProps} />;\n});\n\nexport const Basic = () => {\n  const [notifications, setNotifications] = React.useState(0);\n\n  function handleAdd() {\n    setNotifications(prev => prev + 1);\n  }\n\n  function handleClear() {\n    setNotifications(0);\n  }\n\n  return (\n    <>\n      <GlobalHeader>\n        <GlobalHeader.Item>\n          <Tooltip title=\"Global Navigation\" type=\"describe\">\n            <TertiaryButton icon={justifyIcon} cs={styleOverrides.menuButtonStyles}>\n              MENU\n            </TertiaryButton>\n          </Tooltip>\n          <Tooltip title=\"Workday Home\">\n            <TertiaryButton>\n              <img src=\"https://design.workday.com/images/ck-dub-logo-blue.svg\" alt=\"\" />\n            </TertiaryButton>\n          </Tooltip>\n        </GlobalHeader.Item>\n        <GlobalHeader.Item cs={styleOverrides.comboboxContainer}>\n          <Autocomplete aria-label=\"Search Workday\" />\n        </GlobalHeader.Item>\n        <GlobalHeader.Item>\n          <Tooltip title=\"Assistant\">\n            <TertiaryButton icon={assistantIcon} />\n          </Tooltip>\n\n          <NotificationLiveBadge cnt={notifications} />\n\n          <Tooltip title=\"My Tasks\">\n            <TertiaryButton icon={inboxIcon} />\n          </Tooltip>\n          <Tooltip title=\"Profile\">\n            <Avatar />\n          </Tooltip>\n        </GlobalHeader.Item>\n      </GlobalHeader>\n      <Flex cs={styleOverrides.actionButtonStyles}>\n        <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>\n        <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>\n      </Flex>\n    </>\n  );\n};\n\nconst GlobalHeaderItem = createComponent('div')({\n  displayName: 'GlobalHeader.Item',\n  Component: ({gap = 's', ...props}: HeaderItemProps, ref) => (\n    <Flex gap={gap} alignItems=\"center\" marginX={system.space.x3} ref={ref} {...props} />\n  ),\n});\n\nconst GlobalHeader = createComponent('header')({\n  displayName: 'GlobalHeader',\n  Component: (props, ref) => (\n    <header className={styleOverrides.headerWrapper} ref={ref} {...props} />\n  ),\n  subComponents: {Item: GlobalHeaderItem},\n});\n\nconst Autocomplete = createComponent('div')({\n  displayName: 'Autocomplete',\n  Component: props => {\n    const [searchText, setSearchText] = React.useState('');\n\n    function handleChange(e) {\n      setSearchText(e.target.value);\n    }\n\n    const {model, loader} = useComboboxLoader(\n      {\n        // You can start with any number that makes sense.\n        total: 0,\n\n        // Pick whatever number makes sense for your API\n        pageSize: 20,\n\n        // A load function that will be called by the loader. You must return a promise that returns\n        // an object like `{items: [], total: 0}`. The `items` will be merged into the loader's cache\n        async load({pageNumber, pageSize, filter}) {\n          return new Promise<LoadReturn<string>>(resolve => {\n            // simulate a server response by resolving after a period of time\n            setTimeout(() => {\n              // simulate paging and filtering based on pre-computed items\n              const start = (pageNumber - 1) * pageSize;\n              const end = start + pageSize;\n              const filteredTasks = tasks.filter(i => {\n                if (searchText.trim() === '' || typeof searchText !== 'string') {\n                  return true;\n                }\n                return i.toLowerCase().includes(searchText.trim().toLowerCase());\n              });\n\n              const total = filteredTasks.length;\n              const items = filteredTasks.slice(start, end);\n\n              resolve({\n                items,\n                total,\n              });\n            }, 300);\n          });\n        },\n        onShow() {\n          // The `shouldLoad` cancels while the combobox menu is hidden, so let's load when it is\n          // visible\n          loader.load();\n        },\n      },\n      useComboboxModel\n    );\n\n    return (\n      <Combobox model={model}>\n        <InputGroup>\n          <InputGroup.InnerStart cs={styleOverrides.inputGroupInner}>\n            <SystemIcon icon={searchIcon} />\n          </InputGroup.InnerStart>\n          <InputGroup.Input\n            as={AutoCompleteInput}\n            cs={styleOverrides.comboboxInput}\n            onChange={handleChange}\n            value={searchText}\n            {...props}\n          />\n        </InputGroup>\n        <Combobox.Menu.Popper>\n          <Combobox.Menu.Card>\n            {model.state.items.length === 0 ? (\n              <StyledMenuItem as=\"span\">No Results Found</StyledMenuItem>\n            ) : (\n              model.state.items.length > 0 && (\n                <Combobox.Menu.List maxHeight={px2rem(200)}>\n                  {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}\n                </Combobox.Menu.List>\n              )\n            )}\n          </Combobox.Menu.Card>\n        </Combobox.Menu.Popper>\n      </Combobox>\n    );\n  },\n});\n\nconst NotificationLiveBadge = createComponent('span')({\n  displayName: 'NotificationLiveBadge',\n  Component: ({cnt = 0, ...props}: LiveCountBadgeProps) => {\n    const btnId = useUniqueId();\n    const badgeId = useUniqueId();\n\n    return (\n      <Flex cs={styleOverrides.notificationContainerStyles}>\n        <Tooltip title=\"Notifications\">\n          <TertiaryButton\n            id={btnId}\n            icon={notificationsIcon}\n            aria-describedby={cnt > 0 ? badgeId : undefined}\n            {...props}\n          />\n        </Tooltip>\n        <AriaLiveRegion aria-labelledby={btnId}>\n          {cnt > 0 && (\n            <>\n              <CountBadge\n                id={badgeId}\n                count={cnt}\n                limit={100}\n                cs={styleOverrides.countBadgeStyles}\n              />\n              <AccessibleHide>New</AccessibleHide>\n            </>\n          )}\n        </AriaLiveRegion>\n      </Flex>\n    );\n  },\n});\n"},"./modules/react/_examples/stories/mdx/examples/PageHeader.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{exports.x=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_common=__webpack_require__("./modules/react/common/index.ts"),_tokens=__webpack_require__("./modules/react/tokens/index.ts"),_layout=__webpack_require__("./modules/react/layout/index.ts"),_button=__webpack_require__("./modules/react/button/index.ts"),_canvasSystemIconsWeb=__webpack_require__("./node_modules/@workday/canvas-system-icons-web/dist/es6/index.js"),_text=__webpack_require__("./modules/react/text/index.ts");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function(e){return e?t:r})(e)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Basic=()=>React.createElement(PageHeader,null,React.createElement(PageHeader.Title,null,"Page Header"),React.createElement(PageHeader.Item,null,React.createElement(_button.TertiaryButton,{"aria-label":"notifications",icon:_canvasSystemIconsWeb.notificationsIcon,variant:"inverse"}),React.createElement(_button.TertiaryButton,{"aria-label":"menu",icon:_canvasSystemIconsWeb.justifyIcon,variant:"inverse"})));exports.x=Basic,Basic.displayName="Basic";const PageHeaderItem=(0,_common.createComponent)("div")({displayName:"PageHeader.Item",Component:({gap="xxs",...props},ref,Element)=>React.createElement(_layout.Flex,_extends({gap,ref,as:Element},props))}),PageHeaderTitle=(0,_common.createComponent)("h2")({displayName:"PageHeader.Title",Component:({children,...props},ref,Element)=>React.createElement(_text.Heading,_extends({as:Element,ref,size:"medium",variant:"inverse",padding:`${_tokens.space.xs} 0`,margin:0,whiteSpace:"nowrap"},props),children)}),PageHeader=(0,_common.createComponent)("header")({displayName:"PageHeader",Component:(props,ref,Element)=>React.createElement(Header,_extends({ref,as:Element},props)),subComponents:{Item:PageHeaderItem,Title:PageHeaderTitle}}),Header=(0,_common.styled)("header")({padding:`${_tokens.space.xs} ${_tokens.space.xl}`,backgroundImage:_tokens.gradients.blueberry,color:_tokens.colors.frenchVanilla100,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",display:"flex",alignItems:"center",justifyContent:"space-between"});Basic.__RAW__="import * as React from 'react';\nimport {createComponent, styled} from '@workday/canvas-kit-react/common';\n\nimport {colors, gradients, space} from '@workday/canvas-kit-react/tokens';\n\nimport {Flex, FlexProps, SystemPropValues} from '@workday/canvas-kit-react/layout';\nimport {TertiaryButton} from '@workday/canvas-kit-react/button';\nimport {justifyIcon, notificationsIcon} from '@workday/canvas-system-icons-web';\nimport {Heading} from '@workday/canvas-kit-react/text';\n\ninterface HeaderItemProps extends FlexProps {}\n\nexport const Basic = () => (\n  <PageHeader>\n    <PageHeader.Title>Page Header</PageHeader.Title>\n    <PageHeader.Item>\n      <TertiaryButton aria-label=\"notifications\" icon={notificationsIcon} variant=\"inverse\" />\n      <TertiaryButton aria-label=\"menu\" icon={justifyIcon} variant=\"inverse\" />\n    </PageHeader.Item>\n  </PageHeader>\n);\n\nconst PageHeaderItem = createComponent('div')({\n  displayName: 'PageHeader.Item',\n  Component: ({gap = 'xxs', ...props}: HeaderItemProps, ref, Element) => (\n    <Flex gap={gap} ref={ref} as={Element} {...props} />\n  ),\n});\n\nconst PageHeaderTitle = createComponent('h2')({\n  displayName: 'PageHeader.Title',\n  Component: ({children, ...props}, ref, Element) => (\n    <Heading\n      as={Element}\n      ref={ref}\n      size=\"medium\"\n      variant=\"inverse\"\n      padding={`${space.xs} 0`}\n      margin={0}\n      whiteSpace=\"nowrap\"\n      {...props}\n    >\n      {children}\n    </Heading>\n  ),\n});\n\nconst PageHeader = createComponent('header')({\n  displayName: 'PageHeader',\n  Component: (props, ref, Element) => <Header ref={ref} as={Element} {...props} />,\n  subComponents: {Item: PageHeaderItem, Title: PageHeaderTitle},\n});\n\nconst Header = styled('header')({\n  padding: `${space.xs} ${space.xl}`,\n  backgroundImage: gradients.blueberry,\n  color: colors.frenchVanilla100,\n  WebkitFontSmoothing: 'antialiased',\n  MozOsxFontSmoothing: 'grayscale',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'space-between',\n});\n"}}]);