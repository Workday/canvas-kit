import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{S as n}from"./Skeleton-DNbwQmdU.js";import{c as r}from"./cs-rfTTo7Bg.js";import{s as l,a as i,g as a}from"./index-5dfzm_kn.js";import{p as o}from"./px2rem-C0KbprIx.js";import"./index-IfJi-UCQ.js";import"./components-Dyf4Q_nV.js";const j={title:"Testing/Indicators/Skeleton",component:n,parameters:{chromatic:{disable:!1}}},d=r({width:"60%",height:"100%",margin:a.sm}),s=r({display:"flex"}),t={render:()=>e.jsxs("div",{className:"story",children:[e.jsx("h1",{children:"Custom Elements Skeleton"}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsxs("div",{className:s,children:[e.jsx(n.Shape,{cs:{width:i.xl,height:i.xl,borderRadius:l.full}}),e.jsx("span",{className:d,children:e.jsx(n.Header,{})})]}),e.jsx("div",{children:e.jsx(n.Text,{lineCount:3})})]})}),e.jsx("h1",{children:"Header Skeleton"}),e.jsx("div",{className:s,children:e.jsx(n,{children:e.jsx(n.Header,{})})}),e.jsx("h1",{children:"Shape Skeleton"}),e.jsx("div",{className:s,children:e.jsx(n,{children:e.jsx(n.Shape,{cs:{width:o(120),height:o(120),borderRadius:l.full}})})}),e.jsx("h1",{children:"Custom Shape Skeleton"}),e.jsx("div",{className:s,children:e.jsx(n,{children:e.jsx(n.Shape,{cs:{width:o(200),height:i.xl,borderRadius:l.sm}})})}),e.jsx("h1",{children:"Text Skeleton"}),e.jsx(n,{children:e.jsx(n.Text,{lineCount:2})}),e.jsx("h1",{children:"Text Skeleton Line Count 1"}),e.jsx(n,{children:e.jsx(n.Text,{lineCount:1})}),e.jsx("h1",{children:"Multiple Line Count"}),e.jsx(n,{children:e.jsx(n.Text,{lineCount:20})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story">
      <h1>Custom Elements Skeleton</h1>
      <div>
        <Skeleton>
          <div className={flexContainerStyles}>
            <Skeleton.Shape cs={{
            width: system.size.xl,
            height: system.size.xl,
            borderRadius: system.shape.full
          }} />
            <span className={containerStyles}>
              <Skeleton.Header />
            </span>
          </div>
          <div>
            <Skeleton.Text lineCount={3} />
          </div>
        </Skeleton>
      </div>
      <h1>Header Skeleton</h1>
      <div className={flexContainerStyles}>
        <Skeleton>
          <Skeleton.Header />
        </Skeleton>
      </div>
      <h1>Shape Skeleton</h1>
      <div className={flexContainerStyles}>
        <Skeleton>
          <Skeleton.Shape cs={{
          width: px2rem(120),
          height: px2rem(120),
          borderRadius: system.shape.full
        }} />
        </Skeleton>
      </div>
      <h1>Custom Shape Skeleton</h1>
      <div className={flexContainerStyles}>
        <Skeleton>
          <Skeleton.Shape cs={{
          width: px2rem(200),
          height: system.size.xl,
          borderRadius: system.shape.sm
        }} />
        </Skeleton>
      </div>
      <h1>Text Skeleton</h1>
      <Skeleton>
        <Skeleton.Text lineCount={2} />
      </Skeleton>
      <h1>Text Skeleton Line Count 1</h1>
      <Skeleton>
        <Skeleton.Text lineCount={1} />
      </Skeleton>
      <h1>Multiple Line Count</h1>
      <Skeleton>
        <Skeleton.Text lineCount={20} />
      </Skeleton>
    </div>
}`,...t.parameters?.docs?.source}}};const u=["SkeletonStates"];export{t as SkeletonStates,u as __namedExportsOrder,j as default};
