import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-BirNoDt5.js";import{c as h}from"./PopperController-BpThJFH4.js";import{u as B}from"./getTransformFromPlacement-CbMUg7Oi.js";import{u as g,a as C}from"./useInitialFocus-CmnJqZCO.js";import{u as y}from"./useCloseOnEscape-BQzJDd4G.js";import{u as f}from"./useReturnFocus-DXs5RuoH.js";import{c as p}from"./cs-CmRirKzJ.js";import{c as n}from"./CanvasProvider-Be6HVxzw.js";import{a as j}from"./index-D-t2nnqG.js";import{a as x,p as r}from"./index-DE-upP0k.js";import{G as k}from"./Grid-DFYqSmJP.js";import{P as e}from"./Popup-DHNL6Hcr.js";import{D as o}from"./DeleteButton-B0f6C0cD.js";import"./Flex-DCBZ_c12.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./Box-Dc1pfcXO.js";import"./useConstant-B_SD0x5s.js";import"./components-QZ7dJnr4.js";import"./flex-CyrACzA_.js";import"./SecondaryButton-BGyt1esh.js";import"./BaseButton-pemrIgdX.js";import"./SystemIcon-F3AlfABP.js";import"./Svg-6EIr0d9x.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-D3Z96jzH.js";import"./grid-DMacGXHk.js";import"./Button-CDNcbL7j.js";import"./TypeLevelComponents-CCSxXy9m.js";import"./Text-CdOGUfGH.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Popper-f9ns0Sd-.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./Card-C3heqCcP.js";import"./cornerShape-CVHz5m1w.js";import"./TertiaryButton-DXbHFTEG.js";import"./x-B1faap_l.js";import"./usePopupTarget-B4T79vh-.js";const u=()=>{const s=B();g(s),y(s),C(s),f(s);const l=()=>{console.log("Delete Item")},a=p({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:n.subtract("100vh",x.xxl),width:n.subtract("100vw",j)}),c=p({gridArea:"topButton",justifySelf:"center"}),d=p({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),m=p({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),P=p({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"});return t.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:t.jsxs(k,{cs:a,children:[t.jsxs(e,{children:[t.jsx(e.Target,{cs:c,as:o,children:"Placement Top"}),t.jsx(e.Popper,{placement:"top",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]}),t.jsxs(e,{children:[t.jsx(e.Target,{cs:P,as:o,children:"Placement Left"}),t.jsx(e.Popper,{placement:"left",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]}),t.jsxs(e,{children:[t.jsx(e.Target,{cs:d,as:o,children:"Placement Right"}),t.jsx(e.Popper,{placement:"right",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]}),t.jsxs(e,{children:[t.jsx(e.Target,{cs:m,as:o,children:"Placement Bottom"}),t.jsx(e.Popper,{placement:"bottom",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]})]})})};u.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Grid} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export const PopupWithFallbackPlacements = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  const grid = createStyles({
    gridTemplateAreas: "'topButton topButton''leftButton rightButton''bottomButton bottomButton'",
    height: calc.subtract('100vh', system.size.xxl),
    width: calc.subtract('100vw', base.size1000),
  });

  const topButton = createStyles({
    gridArea: 'topButton',
    justifySelf: 'center',
  });
  const rightButton = createStyles({
    gridArea: 'rightButton',
    justifySelf: 'right',
    alignSelf: 'center',
  });
  const bottomButton = createStyles({
    gridArea: 'bottomButton',
    justifySelf: 'center',
    alignSelf: 'end',
  });
  const leftButton = createStyles({
    gridArea: 'leftButton',
    justifySelf: 'left',
    alignSelf: 'center',
  });

  return (
    <div data-testid="scroll-area-fallback-placement">
      <Grid cs={grid}>
        <Popup>
          <Popup.Target cs={topButton} as={DeleteButton}>
            Placement Top
          </Popup.Target>
          <Popup.Popper placement="top">
            <Popup.Card cs={{width: 400}}>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Popup.ButtonGroup>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
              </Popup.ButtonGroup>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
        <Popup>
          <Popup.Target cs={leftButton} as={DeleteButton}>
            Placement Left
          </Popup.Target>
          <Popup.Popper placement="left">
            <Popup.Card cs={{width: 400}}>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Popup.ButtonGroup>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
              </Popup.ButtonGroup>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
        <Popup>
          <Popup.Target cs={rightButton} as={DeleteButton}>
            Placement Right
          </Popup.Target>
          <Popup.Popper placement="right">
            <Popup.Card cs={{width: 400}}>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Popup.ButtonGroup>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
              </Popup.ButtonGroup>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
        <Popup>
          <Popup.Target cs={bottomButton} as={DeleteButton}>
            Placement Bottom
          </Popup.Target>
          <Popup.Popper placement="bottom">
            <Popup.Card cs={{width: 400}}>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Popup.ButtonGroup>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
              </Popup.ButtonGroup>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </Grid>
    </div>
  );
};
`;const Pt={title:"Testing/Popups/Popup",component:e,parameters:{viewport:{viewports:h,defaultViewport:"landscape"}}},i={render:u};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: PopupWithFallbackPlacementsExample
}`,...i.parameters?.docs?.source}}};const ht=["PopupWithFallbackPlacements"];export{i as PopupWithFallbackPlacements,ht as __namedExportsOrder,Pt as default};
