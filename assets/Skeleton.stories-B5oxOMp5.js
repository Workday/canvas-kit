import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{n as i}from"./emotion-styled.browser.esm-CKlp3yy0.js";import{S as n}from"./Skeleton-Dv496B_w.js";import"./index-IfJi-UCQ.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./components-CXVvXGX8.js";import"./px2rem-C0KbprIx.js";const c={title:"Testing/Indicators/Skeleton",component:n,parameters:{chromatic:{disable:!1}}},l=i("span")({width:"60%",height:"100%",margin:"8px"}),t=i("div")({display:"flex"}),o={render:()=>e.jsxs("div",{className:"story",children:[e.jsx("h1",{children:"Custom Elements Skeleton"}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsxs(t,{children:[e.jsx(n.Shape,{width:50,height:50,borderRadius:99}),e.jsx(l,{children:e.jsx(n.Header,{})})]}),e.jsx("div",{children:e.jsx(n.Text,{lineCount:3})})]})}),e.jsx("h1",{children:"Header Skeleton"}),e.jsx(t,{children:e.jsx(n,{children:e.jsx(n.Header,{})})}),e.jsx("h1",{children:"Shape Skeleton"}),e.jsx(t,{children:e.jsx(n,{children:e.jsx(n.Shape,{width:120,height:120,borderRadius:99})})}),e.jsx("h1",{children:"Custom Shape Skeleton"}),e.jsx(t,{children:e.jsx(n,{children:e.jsx(n.Shape,{width:200,height:50,borderRadius:4})})}),e.jsx("h1",{children:"Text Skeleton"}),e.jsx(n,{children:e.jsx(n.Text,{lineCount:2})}),e.jsx("h1",{children:"Text Skeleton Line Count 1"}),e.jsx(n,{children:e.jsx(n.Text,{lineCount:1})}),e.jsx("h1",{children:"Multiple Line Count"}),e.jsx(n,{children:e.jsx(n.Text,{lineCount:20})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story">
      <h1>Custom Elements Skeleton</h1>
      <div>
        <Skeleton>
          <FlexContainer>
            <Skeleton.Shape width={50} height={50} borderRadius={99} />
            <Container>
              <Skeleton.Header />
            </Container>
          </FlexContainer>
          <div>
            <Skeleton.Text lineCount={3} />
          </div>
        </Skeleton>
      </div>
      <h1>Header Skeleton</h1>
      <FlexContainer>
        <Skeleton>
          <Skeleton.Header />
        </Skeleton>
      </FlexContainer>
      <h1>Shape Skeleton</h1>
      <FlexContainer>
        <Skeleton>
          <Skeleton.Shape width={120} height={120} borderRadius={99} />
        </Skeleton>
      </FlexContainer>
      <h1>Custom Shape Skeleton</h1>
      <FlexContainer>
        <Skeleton>
          <Skeleton.Shape width={200} height={50} borderRadius={4} />
        </Skeleton>
      </FlexContainer>
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
}`,...o.parameters?.docs?.source}}};const j=["SkeletonStates"];export{o as SkeletonStates,j as __namedExportsOrder,c as default};
