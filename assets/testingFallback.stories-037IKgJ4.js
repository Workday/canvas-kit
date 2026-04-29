import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as r}from"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-fTgaRE_v.js";import{P as f,c as B}from"./PopperController-hYsc_0Rx.js";import{F as x}from"./Flex-BKzcw9XF.js";import{M as e}from"./Menu-Blawm5fT.js";import{B as P}from"./TypeLevelComponents-Co8mkrwa.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-CbBD4ERB.js";import"./index-CYsyLHR7.js";import"./SecondaryButton-oNuQLwcg.js";import"./BaseButton-DxRITFeD.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Box-DFWPfIf0.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./components-XIe_upcR.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Dttt6jO3.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Button-Cp7fe3Zs.js";import"./useListItemSelect-D10U8d3g.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-p8F4NfJ4.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./Popper-BRmPGiuC.js";import"./Card-ywil38vv.js";import"./Text-8N36XMNq.js";import"./OverflowTooltip-B7jd-TXK.js";import"./useFocusRedirect-ETf1Gakg.js";import"./useReturnFocus-BgzhEoBI.js";import"./check-small-CEmhQ7AS.js";import"./usePopupTarget-B7GfDsu7.js";import"./chevron-right-small-CQ6vqfU4.js";const l=()=>{const[i,s]=r.useState("top"),[o,c]=r.useState(0),[m,p]=r.useState(0),[d,g]=r.useState(""),u=n=>{s(n)},h=n=>{c(n)},M=n=>{p(n)};return t.jsx("div",{style:{height:1200},"data-testid":"scroll-area-fallback-placement",children:t.jsx(f,{marginLeftBtn:o,marginRightBtn:m,placement:i,onSetPlacement:u,onSetMarginLeftBtn:h,onSetMarginRightBtn:M,children:t.jsx(x,{width:"100%",marginTop:240,justifyContent:"center",alignItems:"center",flexDirection:"column",children:t.jsxs(e,{onSelect:n=>g(n.id),children:[t.jsx(e.Target,{style:{marginLeft:o,marginRight:m},children:"Open Menu"}),t.jsx(e.Popper,{placement:i,children:t.jsx(e.Card,{children:t.jsxs(e.List,{children:[t.jsx(e.Item,{children:"First Item"}),t.jsx(e.Item,{children:"Second Item"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Third Item (with a really, really, really long label)"}),t.jsx(e.Item,{"aria-disabled":!0,children:"Fourth Item"})]})})}),t.jsxs(P,{size:"small",marginTop:"s",marginLeft:20,children:["Selected: ",t.jsx("span",{"data-testid":"output",children:d})]})]})})})})};l.__RAW__=`import React from 'react';

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
