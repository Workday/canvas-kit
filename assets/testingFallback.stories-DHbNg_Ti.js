import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as r}from"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-DqVolwzL.js";import{P as f,c as B}from"./PopperController-BBY1QrEp.js";import{F as x}from"./Flex-BB_s4g0f.js";import{M as e}from"./Menu-CIvTapno.js";import{B as P}from"./TypeLevelComponents-Bw_WRa4H.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-BJ-OMKNq.js";import"./index-CYsyLHR7.js";import"./SecondaryButton-CMLUii7y.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Box-DFceh3YA.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./components-1G01j-He.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BK8Hz87n.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./Button-BQ1TZXwZ.js";import"./useListItemSelect-DuQmMHZs.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-C6jxCkQj.js";import"./useCloseOnEscape-BOBxCx8K.js";import"./Popper-CvC-z2TH.js";import"./Card-CEyROzcv.js";import"./Text-DRUbleCp.js";import"./OverflowTooltip-hamrGFdg.js";import"./useFocusRedirect-Beo767rE.js";import"./useReturnFocus-BsryDfnL.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-C0UKjDnR.js";import"./chevron-right-small-CQ6vqfU4.js";const l=()=>{const[i,s]=r.useState("top"),[o,c]=r.useState(0),[m,p]=r.useState(0),[d,g]=r.useState(""),u=n=>{s(n)},h=n=>{c(n)},M=n=>{p(n)};return t.jsx("div",{style:{height:1200},"data-testid":"scroll-area-fallback-placement",children:t.jsx(f,{marginLeftBtn:o,marginRightBtn:m,placement:i,onSetPlacement:u,onSetMarginLeftBtn:h,onSetMarginRightBtn:M,children:t.jsx(x,{width:"100%",marginTop:240,justifyContent:"center",alignItems:"center",flexDirection:"column",children:t.jsxs(e,{onSelect:n=>g(n.id),children:[t.jsx(e.Target,{style:{marginLeft:o,marginRight:m},children:"Open Menu"}),t.jsx(e.Popper,{placement:i,children:t.jsx(e.Card,{children:t.jsxs(e.List,{children:[t.jsx(e.Item,{children:"First Item"}),t.jsx(e.Item,{children:"Second Item"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Third Item (with a really, really, really long label)"}),t.jsx(e.Item,{"aria-disabled":!0,children:"Fourth Item"})]})})}),t.jsxs(P,{size:"small",marginTop:"s",marginLeft:20,children:["Selected: ",t.jsx("span",{"data-testid":"output",children:d})]})]})})})})};l.__RAW__=`import React from 'react';

import {Flex} from '@workday/canvas-kit-react/layout';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Placement} from '@workday/canvas-kit-react/popup';
import {BodyText} from '@workday/canvas-kit-react/text';

import {PopperController} from '../../../../../utils/storybook';

export const MenuWithFallbackPlacements = () => {
  const [placement, setPlacement] = React.useState<Placement>('top');
  const [marginLeftBtn, setMarginLeftBtn] = React.useState(0);
  const [marginRightBtn, setMarginRightBtn] = React.useState(0);
  const [selected, setSelected] = React.useState('');

  const handlePlacement = (placement: Placement) => {
    setPlacement(placement);
  };

  const handleMarginLeftBtn = (marginLeftBtn: number) => {
    setMarginLeftBtn(marginLeftBtn);
  };

  const handleMarginRightBtn = (marginLeftBtn: number) => {
    setMarginRightBtn(marginLeftBtn);
  };

  return (
    <div style={{height: 1200}} data-testid="scroll-area-fallback-placement">
      <PopperController
        marginLeftBtn={marginLeftBtn}
        marginRightBtn={marginRightBtn}
        placement={placement}
        onSetPlacement={handlePlacement}
        onSetMarginLeftBtn={handleMarginLeftBtn}
        onSetMarginRightBtn={handleMarginRightBtn}
      >
        <Flex
          width="100%"
          marginTop={240}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Menu onSelect={data => setSelected(data.id)}>
            <Menu.Target style={{marginLeft: marginLeftBtn, marginRight: marginRightBtn}}>
              Open Menu
            </Menu.Target>
            <Menu.Popper placement={placement}>
              <Menu.Card>
                <Menu.List>
                  <Menu.Item>First Item</Menu.Item>
                  <Menu.Item>Second Item</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
                  <Menu.Item aria-disabled>Fourth Item</Menu.Item>
                </Menu.List>
              </Menu.Card>
            </Menu.Popper>
            <BodyText size="small" marginTop="s" marginLeft={20}>
              Selected: <span data-testid="output">{selected}</span>
            </BodyText>
          </Menu>
        </Flex>
      </PopperController>
    </div>
  );
};
`;const ht={title:"Testing/Popups/Menu",component:e,parameters:{viewport:{viewports:B,defaultViewport:"landscape"}}},a={render:l};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: MenuWithFallbackPlacementsExample
}`,...a.parameters?.docs?.source}}};const Mt=["MenuWithFallbackPlacements"];export{a as MenuWithFallbackPlacements,Mt as __namedExportsOrder,ht as default};
