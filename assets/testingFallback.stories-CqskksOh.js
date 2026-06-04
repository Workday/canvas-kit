import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as r}from"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-DCuHKqo_.js";import{P as B,c as x}from"./PopperController-CBwjmFGx.js";import{F as S}from"./Flex-9CW8KzBl.js";import{p as l}from"./px2rem-C0KbprIx.js";import{M as e}from"./Menu-CsL8z9ai.js";import{B as I}from"./TypeLevelComponents-BJXiuS_X.js";import{g as k}from"./index-5dfzm_kn.js";import"./CanvasProvider-DcYN8xn4.js";import"./cs-rfTTo7Bg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-5mrAZJYD.js";import"./SecondaryButton-BGDiW78O.js";import"./BaseButton-DzH1x21V.js";import"./Box-BPraYaO3.js";import"./index-N3xz2Kqy.js";import"./useConstant-CUZppmaV.js";import"./components-AX32LNYc.js";import"./SystemIcon-BoCe_uUf.js";import"./Svg-BEZEbUw_.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BAqoDFu5.js";import"./flex-BT-UZmhF.js";import"./grid-CpPShNRZ.js";import"./Button-BNyLbu3E.js";import"./useListItemSelect-gTjksZb8.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-DUbvqIp1.js";import"./useCloseOnEscape-D7zKS4W4.js";import"./Popper-JKy5AP_Q.js";import"./Card-CPSdbjS9.js";import"./Text-ypSk16zO.js";import"./OverflowTooltip-B8mlvvwE.js";import"./useFocusRedirect-Ctgd8e1U.js";import"./useReturnFocus-judg8Hd8.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-DxD_7TBA.js";import"./chevron-right-small-DxmMaev8.js";const s=()=>{const[i,c]=r.useState("top"),[o,p]=r.useState(0),[m,d]=r.useState(0),[g,u]=r.useState(""),h=n=>{c(n)},M=n=>{p(n)},f=n=>{d(n)};return t.jsx("div",{style:{height:1200},"data-testid":"scroll-area-fallback-placement",children:t.jsx(B,{marginLeftBtn:o,marginRightBtn:m,placement:i,onSetPlacement:h,onSetMarginLeftBtn:M,onSetMarginRightBtn:f,children:t.jsx(S,{cs:{width:"100%",marginBlockStart:l(240),justifyContent:"center",alignItems:"center",flexDirection:"column"},children:t.jsxs(e,{onSelect:n=>u(n.id),children:[t.jsx(e.Target,{cs:{marginInlineStart:o,marginInlineEnd:m},children:"Open Menu"}),t.jsx(e.Popper,{placement:i,children:t.jsx(e.Card,{children:t.jsxs(e.List,{children:[t.jsx(e.Item,{children:"First Item"}),t.jsx(e.Item,{children:"Second Item"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Third Item (with a really, really, really long label)"}),t.jsx(e.Item,{"aria-disabled":!0,children:"Fourth Item"})]})})}),t.jsxs(I,{size:"small",cs:{marginBlockStart:k.md,marginInlineStart:l(20)},children:["Selected: ",t.jsx("span",{"data-testid":"output",children:g})]})]})})})})};s.__RAW__=`import React from 'react';

import {Flex} from '@workday/canvas-kit-react/layout';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Placement} from '@workday/canvas-kit-react/popup';
import {BodyText} from '@workday/canvas-kit-react/text';
import {px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
          cs={{
            width: '100%',
            marginBlockStart: px2rem(240),
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Menu onSelect={data => setSelected(data.id)}>
            <Menu.Target cs={{marginInlineStart: marginLeftBtn, marginInlineEnd: marginRightBtn}}>
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
            <BodyText
              size="small"
              cs={{marginBlockStart: system.gap.md, marginInlineStart: px2rem(20)}}
            >
              Selected: <span data-testid="output">{selected}</span>
            </BodyText>
          </Menu>
        </Flex>
      </PopperController>
    </div>
  );
};
`;const ut={title:"Testing/Popups/Menu",component:e,parameters:{viewport:{viewports:x,defaultViewport:"landscape"}}},a={render:s};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: MenuWithFallbackPlacementsExample
}`,...a.parameters?.docs?.source}}};const ht=["MenuWithFallbackPlacements"];export{a as MenuWithFallbackPlacements,ht as __namedExportsOrder,ut as default};
