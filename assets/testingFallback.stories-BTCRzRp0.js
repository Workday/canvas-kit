import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{e as r}from"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-Clayt9g1.js";import{P as B,c as x}from"./PopperController-CbyFY2Zx.js";import{F as S}from"./Flex-49n7B--O.js";import{p as l}from"./px2rem-C0KbprIx.js";import{M as e}from"./Menu-DQBNaCd9.js";import{B as I}from"./TypeLevelComponents-BsU4u7Uu.js";import{g as k}from"./index-jCBjnmNg.js";import"./CanvasProvider-BziuWf85.js";import"./index-kj8ZfNNN.js";import"./cs-CmRirKzJ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./SecondaryButton-BshSgfsU.js";import"./BaseButton-B8gT3S4k.js";import"./Box-DsxcKhHC.js";import"./index-DZtdzgZp.js";import"./useConstant-B_SD0x5s.js";import"./components-dzPj21Gy.js";import"./SystemIcon-CTUsj8TD.js";import"./Svg-DvDsbIKv.js";import"./types-wqmYQQWa.js";import"./mergeStyles-GqD3_A5P.js";import"./flex-BKEnktnP.js";import"./grid-B0yCnV-C.js";import"./Button--R7xcJ39.js";import"./useListItemRegister-C0ytVt37.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useMount-CAK2BN3_.js";import"./getTransformFromPlacement-D0JsQZex.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-D7ZZfUuA.js";import"./useCloseOnEscape-TVPAhJIC.js";import"./Popper-BG2qD-j2.js";import"./Card-CIlF8weM.js";import"./Text-BZ18Rj60.js";import"./cornerShape-JvYjpjdp.js";import"./OverflowTooltip-7JBYHmIQ.js";import"./useListItemSelect-jQIl0zkF.js";import"./useReturnFocus-DnOTNNs9.js";import"./useFocusRedirect-CeQbwPD5.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-BDnM4W41.js";import"./chevron-right-small-Ng-H0z5q.js";const s=()=>{const[i,c]=r.useState("top"),[o,p]=r.useState(0),[m,d]=r.useState(0),[g,u]=r.useState(""),h=n=>{c(n)},M=n=>{p(n)},f=n=>{d(n)};return t.jsx("div",{style:{height:1200},"data-testid":"scroll-area-fallback-placement",children:t.jsx(B,{marginLeftBtn:o,marginRightBtn:m,placement:i,onSetPlacement:h,onSetMarginLeftBtn:M,onSetMarginRightBtn:f,children:t.jsx(S,{cs:{width:"100%",marginBlockStart:l(240),justifyContent:"center",alignItems:"center",flexDirection:"column"},children:t.jsxs(e,{onSelect:n=>u(n.id),children:[t.jsx(e.Target,{cs:{marginInlineStart:o,marginInlineEnd:m},children:"Open Menu"}),t.jsx(e.Popper,{placement:i,children:t.jsx(e.Card,{children:t.jsxs(e.List,{children:[t.jsx(e.Item,{children:"First Item"}),t.jsx(e.Item,{children:"Second Item"}),t.jsx(e.Divider,{}),t.jsx(e.Item,{children:"Third Item (with a really, really, really long label)"}),t.jsx(e.Item,{"aria-disabled":!0,children:"Fourth Item"})]})})}),t.jsxs(I,{size:"small",cs:{marginBlockStart:k.md,marginInlineStart:l(20)},children:["Selected: ",t.jsx("span",{"data-testid":"output",children:g})]})]})})})})};s.__RAW__=`import React from 'react';

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
`;const Mt={title:"Testing/Popups/Menu",component:e,parameters:{viewport:{viewports:x,defaultViewport:"landscape"}}},a={render:s};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: MenuWithFallbackPlacementsExample
}`,...a.parameters?.docs?.source}}};const ft=["MenuWithFallbackPlacements"];export{a as MenuWithFallbackPlacements,ft as __namedExportsOrder,Mt as default};
