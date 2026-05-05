import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as c}from"./index-3YbjYt95.js";import{ae as a}from"./index-BSRpa7hw.js";import{F as t}from"./Flex-BkMcjleh.js";import{p as r}from"./index-CYsyLHR7.js";import{p as s}from"./px2rem-C0KbprIx.js";import"./index-IfJi-UCQ.js";import"./iframe-8Z9hyj8f.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./Box-CWkwzNZI.js";import"./index-dYq3mHEV.js";import"./useConstant-CUZppmaV.js";import"./components-BLZqCckY.js";import"./flex-BpVYzPsg.js";const d=""+new URL("border-outline-dialog-tooltip-3-uE-H9cUA.png",import.meta.url).href,l=""+new URL("button-focus-2-BulubFQx.png",import.meta.url).href,h=""+new URL("checkmarks-whcm-BcmSFoHn.png",import.meta.url).href,m=""+new URL("checkmarks-DSQYX0JX.png",import.meta.url).href,u=""+new URL("icons-after-whcm-DDRcD9PE.png",import.meta.url).href,p=""+new URL("icons-before-whcm-BaPjPmNI.png",import.meta.url).href,f=""+new URL("menu-focus-C05JnonN.png",import.meta.url).href;function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Accessibility/Windows High Contrast"}),`
`,e.jsx(n.h2,{id:"supporting-windows-11-high-contrast-desktop-themes",children:"Supporting Windows 11 High Contrast Desktop Themes"}),`
`,e.jsxs(n.p,{children:[`High-contrast themes in Windows 11 are crucial for accessibility. High contrast themes overwrite CSS
colors including `,e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"backgroundColor"}),", and ",e.jsx(n.code,{children:"boxShadow"}),", while ",e.jsx(n.code,{children:"border"})," and ",e.jsx(n.code,{children:"outline"}),`
properties retain their settings. To ensure your UI is compatible, follow these best practices for
improved visibility.`]}),`
`,e.jsxs(n.p,{children:[`Further reading:
`,e.jsx(n.a,{href:"https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696",rel:"nofollow",children:"Change color contrast in Windows"})]}),`
`,e.jsx(n.h3,{id:"focus-indicators",children:"Focus Indicators:"}),`
`,e.jsxs(n.p,{children:["Since Canvas Kit components rely on ",e.jsx(n.code,{children:"boxShadow"}),` for the keyboard focus state, it won’t be visible in
high contrast themes. We’ve added a `,e.jsx(n.code,{children:"2px solid transparent"})," CSS ",e.jsx(n.code,{children:"outline"}),` to ensure a focus
indicator remains visible. Use `,e.jsx(n.code,{children:"outlineOffset"}),` to add space between the element and the outline for
aesthetics. We’ve used a `,e.jsx(n.code,{children:"2px"}),` offset on components like
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/react/button/lib/BaseButton.tsx",rel:"nofollow",children:"BaseButton"}),`
to match the visual design of the `,e.jsx(n.code,{children:"boxShadow"})," in the system. A ",e.jsx(n.code,{children:"-2px"}),` negative offset is used for
focusable components inside popup containers like the `,e.jsx(n.code,{children:"<Menu>"}),` component to ensure the focus
indicator isn’t clipped off the edge. (For example:
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/react/menu/lib/MenuItem.tsx",rel:"nofollow",children:"MenuItem"}),".)"]}),`
`,e.jsxs(t,{cs:{justifyContent:"space-evenly",paddingBottom:r.md},children:[e.jsx("img",{src:l,alt:"Primary button with outline offset 2 pixels"}),e.jsx("img",{src:f,alt:"Menu item with outline offset -2 pixels"})]}),`
`,e.jsx(n.h3,{id:"boundary-borders-and-outlines",children:"Boundary Borders and Outlines:"}),`
`,e.jsxs(n.p,{children:["If content needs to be grouped with a boundary in high contrast themes, using a ",e.jsx(n.code,{children:"transparent"}),` CSS
`,e.jsx(n.code,{children:"outline"}),` can be useful because it won’t cause alignment problems on the page. We’ve done this to
draw boundaries in components that don't have any focus state like
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/react/modal/lib/ModalCard.tsx",rel:"nofollow",children:"ModalCard"}),`
and
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/react/tooltip/lib/TooltipContainer.tsx",rel:"nofollow",children:"TooltipContainer"}),"."]}),`
`,e.jsx(t,{cs:{justifyContent:"space-evenly"},children:e.jsxs("figure",{style:{margin:"0"},children:[e.jsx("img",{src:d,alt:""}),e.jsx("figcaption",{style:{width:s(300)},children:e.jsx(n.p,{children:"CSS outlines appear in high contrast mode around dialog containers and tooltips"})})]})}),`
`,e.jsx(n.h3,{id:"images",children:"Images:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<img>"}),` elements, which are for images like JPEGs or PNGs, are not affected by high contrast themes.
If you use a meaningful image with a transparent background, it could become difficult to see
against some background colors. Be careful when using such images for conveying information to
users.`]}),`
`,e.jsxs(t,{cs:{justifyContent:"space-evenly",paddingBottom:r.md},children:[e.jsx("img",{src:m,alt:"Check mark images highly visible on white background"}),e.jsx("img",{src:h,alt:"Check mark images have poor contrast on dark background"})]}),`
`,e.jsx(n.h3,{id:"svg-icons",children:"SVG Icons"}),`
`,e.jsxs(n.p,{children:["The colors inside ",e.jsx(n.code,{children:"<svg>"}),` elements usually don't change with high contrast themes, which can make
them hard to see on some backgrounds. We’ve used a media query to set the icon `,e.jsx(n.code,{children:"fill"})," and ",e.jsx(n.code,{children:"color"}),`
properties to `,e.jsx(n.code,{children:"currentColor"}),` ensuring the icon uses the correct color from the user's preferred high
contrast theme.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`// for Windows high contrast desktop themes
'@media (prefers-contrast: more)': {
  '.wd-icon-fill, .wd-icon-accent': {
    color: 'currentColor',
    fill: 'currentColor',
  },
},
`})}),`
`,e.jsxs(t,{cs:{justifyContent:"space-evenly"},children:[e.jsxs("figure",{style:{margin:"0"},children:[e.jsx("img",{src:p,alt:""}),e.jsx("figcaption",{style:{width:s(370)},children:"Before: The mail icon color has poor contrast on dark backgrounds"})]}),e.jsxs("figure",{style:{margin:"0"},children:[e.jsx("img",{src:u,alt:""}),e.jsx("figcaption",{style:{width:s(370)},children:"After: The mail icon inherits the theme's current color for best contrast"})]})]})]})}function P(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{P as default};
