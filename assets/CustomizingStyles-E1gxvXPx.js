import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as t}from"./index-3YbjYt95.js";import{ae as i}from"./index-Ca_ueJdC.js";import"./index-IfJi-UCQ.js";import"./iframe-Df90AzKP.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function o(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Styling/Guides/Customizing Styles"}),`
`,e.jsx(n.h1,{id:"how-to-customize-styles",children:"How To Customize Styles"}),`
`,e.jsx(n.p,{children:`There are multiple ways to customize styles for components within Canvas Kit. The approach you
choose will depend on your use case. Ranging from some simple overrides to fully custom solutions,
here are the following options:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#createstyles",children:"Create Styles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#stencils",children:"Stencils"})}),`
`]}),`
`,e.jsx(n.h2,{id:"create-styles",children:"Create Styles"}),`
`,e.jsxs(n.h3,{id:"using-createstyles-with-cs-prop",children:["Using ",e.jsx(n.code,{children:"createStyles"})," with ",e.jsx(n.code,{children:"cs"})," prop"]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"createStyles"})," in tandem with ",e.jsx(n.code,{children:"cs"}),` prop when you're overriding static styles and making small
modifications to an existing Canvas Kit component like padding, color and flex properties. Take our
`,e.jsx(n.code,{children:"Text"})," component as an example."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {createStyles} from '@Workday/canvas-kit-styling';
import {system} from '@Workday/canvas-tokens-web';
import {Text} from '@Workday/canvas-kit-react/text';

const uppercaseTextStyles = createStyles({
  textTransform: 'uppercase',
  margin: system.gap.md
})
//...
<Text cs={uppercaseTextStyles}>My uppercased text</Text>;
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," ",e.jsx(n.code,{children:"createStyles"})," handles wrapping our token variables in ",e.jsx(n.code,{children:"var(--${token})"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can also apply styles created via ",e.jsx(n.code,{children:"createStyles"})," via ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {createStyles} from '@Workday/canvas-kit-styling';
import {system} from '@Workday/canvas-tokens-web';
import {Text} from '@Workday/canvas-kit-react/text';

const uppercaseTextStyles = createStyles({
  textTransform: 'uppercase',
  margin: system.gap.md
})
//...
<Text className={uppercaseTextStyles}>My uppercased text</Text>;
`})}),`
`,e.jsxs(n.p,{children:["If you need to dynamically apply styles based on some state or prop, use ",e.jsx(n.a,{href:"#stencils",children:"Stencils"}),`
instead.`]}),`
`,e.jsx(n.h2,{id:"stencils",children:"Stencils"}),`
`,e.jsx(n.p,{children:"Stencils can be useful when applying dynamic styles or building your own reusable component."}),`
`,e.jsx(n.h3,{id:"extending-stencils",children:"Extending Stencils"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-create-stencil--docs",rel:"nofollow",children:"Stencils"}),`
help you organize the styling of reusable components into base styles, modifiers, and variables. The
organization makes it more natural to produce static and clean CSS with optional extraction into CSS
files.`]}),`
`,e.jsx(n.p,{children:`Stencils that define variables, modifiers and base styles can be extended to create your own
reusable component using Canvas Kit styles.`}),`
`,e.jsxs(n.p,{children:["If we take ",e.jsx(n.code,{children:"SystemIcon"})," component as an example, it defines ",e.jsx(n.code,{children:"systemIconStencil"}),` which defines styles
for an icon. This stencil can be extended to build a custom icon component for your use case.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Before v11"})," you'd have to use ",e.jsx(n.code,{children:"systemIconStyles"})," function to overwrite styles for an icon:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Before v11
import {systemIconStyles} from '@workday/canvas-kit-react';
import {space} from '@workday/canvas-kit-react/tokens'; // old tokens

// old way of styling with Emotion styled
const StyledNavIcon = styled('span')(({size, iconStyles}){
  display: 'inline-flex',
  pointerEvents: 'unset',
  margin: \`\${space.xxxs} \${space.xxxs} 0 0\`,
  padding: '0',
  'svg': {
    ...iconStyles,
    width: size,
    height: size,
  }
});

const NavIcon = ({iconColor, iconHover, iconBackground, iconBackgroundHover, icon, size}) => {
  // old way of styling with systemIconStyles function
  // systemIconStyles is deprecated in v11
  const iconStyles = systemIconStyles({
    fill: iconColor,
    fillHover: iconHover,
    background: iconBackground,
    backgroundHover: iconBackgroundHover,
  });

  // insert icon function used by platform or any other functionality here

  return (
    <StyledNavIcon
      icon={icon}
      size={size}
      iconStyles={iconStyles}
    />
  );
};
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"In v11"})," you'd extend ",e.jsx(n.code,{children:"systemIconStencil"})," to reuse its styles:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v11
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const navIconStencil = createStencil({
  // We extend \`systemIconStencil\` to inherit it's base styles, modifiers and variables so that we can customize it
  extends: systemIconStencil,
  vars: {
    // These variables support our styling iconHover and iconBackgroundHover
    // they can be removed later and overwritten by \`cs\`.
    // Also note the variables have no value. This allows for cascading styles.
    fillHover: '',
    backgroundHover: '',
  },
  base: ({fillHover, backgroundHover}) => ({
    display: 'inline-flex',
    pointerEvents: 'unset',
    // instead of using our old tokens it's better to use our new system tokens
    margin: \`\${system.gap.xs} \${system.gap.xs} 0 0\`,
    padding: '0',
    '&:hover, &.hover': {
      // systemIconStencil doesn't have hover specific variables
      // so we reassigned color and backgroundColor variables using pseudo-selector
      [systemIconStencil.vars.color]: fillHover,
      [systemIconStencil.vars.backgroundColor]: backgroundHover,
    },
  }),
});

// Your reusable NavIcon component using Stencils
const NavIcon = ({
  iconColor,
  iconHover,
  iconBackground,
  iconBackgroundHover,
  icon,
  size,
  ...elemProps
}) => {
  // insert icon function used by platform or any other functionality here

  return (
    <span
      icon={icon}
      {...handleCsProp(
        elemProps,
        navIconStencil({
          // Because we're extending systemIconStencil, it already has a size prop and applies size to the svg's width and height
          // so we don't need to set these variables in our navIconStencil
          size,
          // systemIconStencil already has color (for icon fill) and backgroundColor variables
          // so we assigned them to our prop values
          color: iconColor,
          backgroundColor: iconBackground,
          fillHover: iconHover,
          backgroundHover: iconBackgroundHover,
        })
      )}
    />
  );
};
`})}),`
`,e.jsxs(n.p,{children:[`Another example of Stencil extension and customization is our
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/components-buttons--docs#custom-styles",rel:"nofollow",children:"CustomButton"}),`
example. This example highlights the power of inheritance that you get from extending stencils.`]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{x as default};
