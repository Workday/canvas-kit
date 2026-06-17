import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as p}from"./index-3YbjYt95.js";import{ae as f}from"./index-BNkigr0j.js";import{E as u}from"./union-pSUQDCnc.js";import"./index-IfJi-UCQ.js";import{n as S}from"./index-COdRIEp6.js";import{c as t,f as j,e as z,b as g}from"./cs-rfTTo7Bg.js";import"./iframe-D6ZQ-_mO.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-BXmdscC7.js";import"./Svg-D3GkOkau.js";import"./px2rem-C0KbprIx.js";import"./components-CBw5fIQ6.js";import"./StatusIndicator-3OvGvnGJ.js";import"./Text-DilvFXlg.js";import"./mergeStyles-0EvNYC9q.js";import"./Box-DK2fs61P.js";import"./useConstant-CUZppmaV.js";import"./flex-BEcIAxFj.js";import"./grid-D_wPoeTG.js";import"./index-5dfzm_kn.js";import"./Card-n-NhLiq7.js";import"./ExternalHyperlink-CzdUO8wb.js";import"./Hyperlink-B89CS5FU.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BbsYxmVE.js";import"./BaseButton-pVinvyd2.js";import"./Button-Ss3U7Oe3.js";import"./lerna-B2wpihf9.js";import"./CanvasProvider-DXZI2yoo.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./Tooltip-Dvc3atHf.js";import"./useTooltip-XyMhgIHQ.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-DCArrvVm.js";import"./Popper-CSmj6glf.js";import"./TertiaryButton-CsQTErM1.js";import"./upperFirst-BXmTrG0i.js";import"./TypeLevelComponents-Bzaks_lQ.js";import"./ColorPicker-QXEy2G6v.js";import"./ColorInput-iajXpyuH.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-Cgn7Xr1S.js";import"./types-DXdjelYI.js";import"./FormField-BkHoxgyS.js";import"./check-Bvurkvei.js";import"./Expandable-XrBDojn5.js";import"./Avatar-BEo-uaSe.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-BZpRoxlT.js";import"./Popup-GAIxn5c4.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-C81DYh_a.js";import"./useInitialFocus-S0F8uKdb.js";import"./useReturnFocus-DTR0P4UH.js";import"./useFocusRedirect-C9oWwdU9.js";import"./Breadcrumbs-CJJCluYM.js";import"./useOverflowListTarget-BOOAIm4n.js";import"./useListItemSelect-2ZJHSRCR.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-C-KrN-Jp.js";import"./OverflowTooltip-DYa0mq7W.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-DR4mZhOA.js";import"./Table-NuXZGZXk.js";const n=S("button")({fontSize:"1rem",display:"flex",borderRadius:"1rem"},({variant:a,backgroundColor:r})=>{switch(a){case"primary":return{background:r||"blue",color:"white"};case"secondary":return{background:r||"gray"};case"danger":return{background:r||"red"};default:return{}}},({size:a})=>{switch(a){case"large":return{fontSize:"1.4rem",height:"2rem"};case"medium":return{fontSize:"1rem",height:"1.5rem"};case"small":return{fontSize:"0.8rem",height:"1.2rem"};default:return{}}}),x=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{variant:"primary",size:"large",children:"Primary Large"}),e.jsx(n,{variant:"primary",size:"medium",children:"Primary Medium"}),e.jsx(n,{variant:"primary",size:"small",children:"Primary Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{variant:"secondary",size:"large",children:"Secondary Large"}),e.jsx(n,{variant:"secondary",size:"medium",children:"Secondary Medium"}),e.jsx(n,{variant:"secondary",size:"small",children:"Secondary Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{variant:"danger",size:"large",children:"Danger Large"}),e.jsx(n,{variant:"danger",size:"medium",children:"Danger Medium"}),e.jsx(n,{variant:"danger",size:"small",children:"Danger Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(n,{variant:"danger",size:"large",backgroundColor:"orange",children:"Custom Large"}),e.jsx(n,{variant:"danger",size:"medium",backgroundColor:"orange",children:"Custom Medium"}),e.jsx(n,{variant:"danger",size:"small",backgroundColor:"orange",children:"Custom Small"})]})]});x.__RAW__=`import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

// Showcase of old Emotion approach
const StyledButton = styled('button')<ButtonProps>(
  {
    // base styles
    fontSize: '1rem',
    display: 'flex',
    borderRadius: '1rem',
  },
  // variant styles
  ({variant, backgroundColor}) => {
    switch (variant) {
      case 'primary':
        return {
          background: backgroundColor || 'blue',
          color: 'white',
        };
      case 'secondary':
        return {
          background: backgroundColor || 'gray',
        };
      case 'danger':
        return {
          background: backgroundColor || 'red',
        };
      default:
        return {};
    }
  },
  // size styles
  ({size}) => {
    switch (size) {
      case 'large':
        return {
          fontSize: '1.4rem',
          height: '2rem',
        };
      case 'medium':
        return {
          fontSize: '1rem',
          height: '1.5rem',
        };
      case 'small':
        return {
          fontSize: '0.8rem',
          height: '1.2rem',
        };
      default:
        return {};
    }
  }
);

export const EmotionButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="primary" size="large">
          Primary Large
        </StyledButton>
        <StyledButton variant="primary" size="medium">
          Primary Medium
        </StyledButton>
        <StyledButton variant="primary" size="small">
          Primary Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="secondary" size="large">
          Secondary Large
        </StyledButton>
        <StyledButton variant="secondary" size="medium">
          Secondary Medium
        </StyledButton>
        <StyledButton variant="secondary" size="small">
          Secondary Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="danger" size="large">
          Danger Large
        </StyledButton>
        <StyledButton variant="danger" size="medium">
          Danger Medium
        </StyledButton>
        <StyledButton variant="danger" size="small">
          Danger Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </StyledButton>
        <StyledButton variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </StyledButton>
        <StyledButton variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </StyledButton>
      </div>
    </div>
  );
};
`;const B=t({fontSize:"1rem",display:"flex",borderRadius:"1rem"}),y={variant:{primary:t({background:"var(--button-background-color, blue)",color:"white"}),secondary:t({background:"var(--button-background-color, gray)"}),danger:t({background:"var(--button-background-color, red)"})},size:{large:t({fontSize:"1.4rem",height:"2rem"}),medium:t({fontSize:"1rem",height:"1.5rem"}),small:t({fontSize:"0.8rem",height:"1.2rem"})}},i=({variant:a,size:r,backgroundColor:l,children:d})=>{const c=[B,y.variant[a],y.size[r]].join(" "),m={"--button-background-color":l};return e.jsx("button",{className:c,style:m,children:d})},v=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{variant:"primary",size:"large",children:"Primary Large"}),e.jsx(i,{variant:"primary",size:"medium",children:"Primary Medium"}),e.jsx(i,{variant:"primary",size:"small",children:"Primary Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{variant:"secondary",size:"large",children:"Secondary Large"}),e.jsx(i,{variant:"secondary",size:"medium",children:"Secondary Medium"}),e.jsx(i,{variant:"secondary",size:"small",children:"Secondary Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{variant:"danger",size:"large",children:"Danger Large"}),e.jsx(i,{variant:"danger",size:"medium",children:"Danger Medium"}),e.jsx(i,{variant:"danger",size:"small",children:"Danger Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{variant:"danger",size:"large",backgroundColor:"orange",children:"Custom Large"}),e.jsx(i,{variant:"danger",size:"medium",backgroundColor:"orange",children:"Custom Medium"}),e.jsx(i,{variant:"danger",size:"small",backgroundColor:"orange",children:"Custom Small"})]})]});v.__RAW__=`import React from 'react';

import {createStyles} from '@workday/canvas-kit-styling';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

const baseStyles = createStyles({
  fontSize: '1rem',
  display: 'flex',
  borderRadius: '1rem',
});

const modifierStyles = {
  variant: {
    primary: createStyles({
      background: \`var(--button-background-color, blue)\`,
      color: 'white',
    }),
    secondary: createStyles({
      background: \`var(--button-background-color, gray)\`,
    }),
    danger: createStyles({
      background: \`var(--button-background-color, red)\`,
    }),
  },
  size: {
    large: createStyles({
      fontSize: '1.4rem',
      height: '2rem',
    }),
    medium: createStyles({
      fontSize: '1rem',
      height: '1.5rem',
    }),
    small: createStyles({
      fontSize: '0.8rem',
      height: '1.2rem',
    }),
  },
};

const Button = ({variant, size, backgroundColor, children}: ButtonProps) => {
  const className = [baseStyles, modifierStyles.variant[variant], modifierStyles.size[size]].join(
    ' '
  );
  const style = {'--button-background-color': backgroundColor} as React.CSSProperties;
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export const ManualStylesButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="primary" size="large">
          Primary Large
        </Button>
        <Button variant="primary" size="medium">
          Primary Medium
        </Button>
        <Button variant="primary" size="small">
          Primary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="secondary" size="large">
          Secondary Large
        </Button>
        <Button variant="secondary" size="medium">
          Secondary Medium
        </Button>
        <Button variant="secondary" size="small">
          Secondary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large">
          Danger Large
        </Button>
        <Button variant="danger" size="medium">
          Danger Medium
        </Button>
        <Button variant="danger" size="small">
          Danger Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </Button>
        <Button variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </Button>
        <Button variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </Button>
      </div>
    </div>
  );
};
`;const s=z("backgroundColor"),k=t({fontSize:"1rem",display:"flex",borderRadius:"1rem"}),C=j({variant:{primary:t({background:g(s.backgroundColor,"blue"),color:"white"}),secondary:t({background:g(s.backgroundColor,"gray")}),danger:t({background:g(s.backgroundColor,"red")})},size:{large:t({fontSize:"1.4rem",height:"2rem"}),medium:t({fontSize:"1rem",height:"1.5rem"}),small:t({fontSize:"0.8rem",height:"1.2rem"})}}),o=({variant:a,size:r,backgroundColor:l,children:d})=>{const c=[k,C({variant:a,size:r})].join(" "),m=s({backgroundColor:l});return e.jsx("button",{className:c,style:m,children:d})},b=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{variant:"primary",size:"large",children:"Primary Large"}),e.jsx(o,{variant:"primary",size:"medium",children:"Primary Medium"}),e.jsx(o,{variant:"primary",size:"small",children:"Primary Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{variant:"secondary",size:"large",children:"Secondary Large"}),e.jsx(o,{variant:"secondary",size:"medium",children:"Secondary Medium"}),e.jsx(o,{variant:"secondary",size:"small",children:"Secondary Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{variant:"danger",size:"large",children:"Danger Large"}),e.jsx(o,{variant:"danger",size:"medium",children:"Danger Medium"}),e.jsx(o,{variant:"danger",size:"small",children:"Danger Small"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{variant:"danger",size:"large",backgroundColor:"orange",children:"Custom Large"}),e.jsx(o,{variant:"danger",size:"medium",backgroundColor:"orange",children:"Custom Medium"}),e.jsx(o,{variant:"danger",size:"small",backgroundColor:"orange",children:"Custom Small"})]})]});b.__RAW__=`import React from 'react';

import {createModifiers, createStyles, createVars, cssVar} from '@workday/canvas-kit-styling';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

const variables = createVars('backgroundColor');

const baseStyles = createStyles({
  fontSize: '1rem',
  display: 'flex',
  borderRadius: '1rem',
});

const modifierStyles = createModifiers({
  variant: {
    primary: createStyles({
      background: cssVar(variables.backgroundColor, 'blue'),
      color: 'white',
    }),
    secondary: createStyles({
      background: cssVar(variables.backgroundColor, 'gray'),
    }),
    danger: createStyles({
      background: cssVar(variables.backgroundColor, 'red'),
    }),
  },
  size: {
    large: createStyles({
      fontSize: '1.4rem',
      height: '2rem',
    }),
    medium: createStyles({
      fontSize: '1rem',
      height: '1.5rem',
    }),
    small: createStyles({
      fontSize: '0.8rem',
      height: '1.2rem',
    }),
  },
});

const Button = ({variant, size, backgroundColor, children}: ButtonProps) => {
  const className = [baseStyles, modifierStyles({variant, size})].join(' ');
  const style = variables({backgroundColor});
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export const StylingButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="primary" size="large">
          Primary Large
        </Button>
        <Button variant="primary" size="medium">
          Primary Medium
        </Button>
        <Button variant="primary" size="small">
          Primary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="secondary" size="large">
          Secondary Large
        </Button>
        <Button variant="secondary" size="medium">
          Secondary Medium
        </Button>
        <Button variant="secondary" size="small">
          Secondary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large">
          Danger Large
        </Button>
        <Button variant="danger" size="medium">
          Danger Medium
        </Button>
        <Button variant="danger" size="small">
          Danger Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </Button>
        <Button variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </Button>
        <Button variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </Button>
      </div>
    </div>
  );
};
`;function h(a){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Styling/Guides/Converting From Emotion"}),`
`,e.jsx(r.h1,{id:"converting-from-emotionstyled",children:"Converting from @emotion/styled"}),`
`,e.jsxs(r.p,{children:[`The most difficult part of understanding styling without Emotion's runtime is the mindset shift. You
are using CSS to merge properties instead of JavaScript. This is essential to remove the runtime of
Emotion. We'll use a contrived button example using `,e.jsx(r.code,{children:"@emotion/styled"}),` and our styling solution to
step through the differences.`]}),`
`,e.jsxs(r.h2,{id:"button-using-emotionstyled",children:["Button using ",e.jsx(r.code,{children:"@emotion/styled"})]}),`
`,e.jsx(u,{code:x}),`
`,e.jsxs(r.p,{children:[`If we inspect each button, we'll notice each has a different class name. They all look like
`,e.jsx(r.code,{children:"css-{hash}"}),":"]}),`
`,e.jsx(r.p,{children:"For example, the Primary buttons:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Primary Large: ",e.jsx(r.code,{children:"css-oqv33j"})]}),`
`,e.jsxs(r.li,{children:["Primary Medium: ",e.jsx(r.code,{children:"css-1nhzlx"})]}),`
`,e.jsxs(r.li,{children:["Primary Small: ",e.jsx(r.code,{children:"css-1ygk6q"})]}),`
`]}),`
`,e.jsxs(r.p,{children:[`This means each button is a unique style sheet insert by Emotion. If we render each permutation at
once, there will only be one expensive
`,e.jsx(r.a,{href:"https://microsoftedge.github.io/DevTools/explainers/StyleTracing/explainer.html",rel:"nofollow",children:"style recalculation"})]}),`
`,e.jsx(r.p,{children:`Converting to use the Canvas Kit Styling solution means organizing a little different. In our
example, it is already organized well, but conditionals might be anywhere in the style functions and
will need to be organized in groups.`}),`
`,e.jsxs(r.h2,{id:"button-using-only-createstyles",children:["Button using only ",e.jsx(r.code,{children:"createStyles"})]}),`
`,e.jsxs(r.p,{children:["What are we really trying to accomplish? ",e.jsx(r.a,{href:"https://getbem.com/introduction",rel:"nofollow",children:"BEM"}),` fits well with
compound components. BEM stands for Block, Element, Modifer. In compound components, "Block" refers
to a container component while "Element" refers to subcomponets. The "Modifer" refers to changing
the appearance of a block.`]}),`
`,e.jsxs(r.p,{children:[`In our example, all styles that are common to all appearances of our button. It might be
`,e.jsx(r.code,{children:"borderRadius"}),", ",e.jsx(r.code,{children:"fontFamily"}),". We can use ",e.jsx(r.code,{children:"createStyles"})," to define these styles:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const baseStyles = createStyles({
  fontSize: '1rem',
  display: 'flex',
  borderRadius: '1rem',
});
`})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"variant"})," modifiers use a variable prop called ",e.jsx(r.code,{children:"backgroundColor"}),` which cannot be variable at
runtime. We need to use a CSS Variable for this.`]}),`
`,e.jsxs(r.p,{children:["We can create modifers using ",e.jsx(r.code,{children:"createStyles"})," and organize them in an object:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const modifierStyles = {
  variant: {
    primary: createStyles({
      background: \`var(--background-color-button, blue)\`,
      color: 'white',
    }),
    secondary: createStyles({
      background: \`var(--background-color-button, gray)\`,
    }),
    danger: createStyles({
      background: \`var(--background-color-button, red)\`,
    }),
  },
  size: {
    large: createStyles({
      fontSize: '1.4rem',
      height: '2rem',
    }),
    medium: createStyles({
      fontSize: '1rem',
      height: '1.5rem',
    }),
    small: createStyles({
      fontSize: '0.8rem',
      height: '1.2rem',
    }),
  },
};
`})}),`
`,e.jsxs(r.p,{children:["Each modifier value uses ",e.jsx(r.code,{children:"createStyles"}),` which returns a different class name. This means we can
create a "Primary Large" button by applying these modifiers to the `,e.jsx(r.code,{children:"className"}),` prop of a React
element:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:"<button className={`${baseStyles} ${modifierStyles.variant.primary} ${modifierStyles.size.large}`}>\n  Primary Large\n</button>\n"})}),`
`,e.jsxs(r.p,{children:["This will create a button with 3 separate class names applied. ",e.jsx(r.code,{children:"@emotion/styled"}),` only applies a
single css class name.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<!-- @emotion/styled -->
<button class="css-108wq52">Primary Large</button>

<!-- createStyles -->
<button class="css-puxv12 css-puxv13 css-puxv16">Primary Large</button>
`})}),`
`,e.jsxs(r.p,{children:["If you want to change the background color, you'll have to pass it using ",e.jsx(r.code,{children:"style"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<button
  className={\`\${baseStyles} \${modifierStyles.size.large}\`}
  style={{'--color-background-button': 'orange'}}
>
  Orange Large
</button>
`})}),`
`,e.jsx(r.p,{children:"The output HTML will look like:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<button class="css-puxv12 css-puxv16" style="--color-background-button: orange;">
  Orange Large
</button>
`})}),`
`,e.jsxs(r.p,{children:["This works because CSS Custom Properties cascade values. The ",e.jsx(r.code,{children:"style"}),` attribute defines styles on the
element directly. This is a runtime in React that allows us to change a style without a new style
block - the styles can be static, but we can still have variable property values.`]}),`
`,e.jsx(u,{code:v}),`
`,e.jsx(r.h2,{id:"button-using-all-utilities",children:"Button using all utilities"}),`
`,e.jsxs(r.p,{children:["If we want variables that are hashed and make it easier to define and use, we have ",e.jsx(r.code,{children:"createVars"}),`.
There are also edge cases for modifiers like allowing `,e.jsx(r.code,{children:"undefined"}),", so we made a ",e.jsx(r.code,{children:"createModifiers"}),`
function as well. Both `,e.jsx(r.code,{children:"createModifiers"})," and ",e.jsx(r.code,{children:"createVars"}),` return a function that makes it easier to
call with inputs and will return the correct output.`]}),`
`,e.jsxs(r.p,{children:["For example, ",e.jsx(r.code,{children:"createModifiers"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const myModifiers = createModifiers({
  size: {
    large: 'button-large',
    small: 'button-small'
  }
})

myModifiers.size.large // 'button-large'

// the function knows what config can be passed
// and what restrictions each value has
myModifiers({size: 'large'}) // 'button-large'
myModifiers({size: 'small'}) // 'button-small'
myModifiers() // ''

// in a component
<div className={myModifiers({size: 'large'})} /> // <div class="button-large" />
`})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"createVars"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const myVars = createVars('background', 'color')

myVars.color // something like \`--color-{hash}\`

// the function knows what keys are allowed
myVars({color: 'red'}) // {'--color-{hash}': 'red'}

// in a component
<div style={myVars({color: 'red'})} /> // <div style="--color-{hash}: red;">
`})}),`
`,e.jsx(u,{code:b})]})}function Ye(a={}){const{wrapper:r}={...p(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(h,{...a})}):h(a)}export{Ye as default};
