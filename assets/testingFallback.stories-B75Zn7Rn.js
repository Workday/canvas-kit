import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-DqVolwzL.js";import{c as B}from"./PopperController-BBY1QrEp.js";import{u as C,c as d}from"./getTransformFromPlacement-Dk4LTPXM.js";import{u as y,a as x}from"./useInitialFocus-DXIqVwzr.js";import{u as f}from"./useCloseOnEscape-BOBxCx8K.js";import{u as j}from"./useReturnFocus-BsryDfnL.js";import{c as p}from"./cs-DvbI9OYs.js";import{a as k}from"./index-DKOKnxgv.js";import{a as b,p as o,g as a}from"./index-CYsyLHR7.js";import{G as T}from"./Grid-DCk8Bxoa.js";import{P as t}from"./Popup-CfPbpWF4.js";import{D as s}from"./DeleteButton-Chd6XqBj.js";import{F as n}from"./Flex-BB_s4g0f.js";import"./useTheme-DY7-Bclm.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./CanvasProvider-BJ-OMKNq.js";import"./SecondaryButton-CMLUii7y.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./Box-DFceh3YA.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./components-1G01j-He.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BK8Hz87n.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./Button-BQ1TZXwZ.js";import"./TypeLevelComponents-Bw_WRa4H.js";import"./Text-DRUbleCp.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Popper-CvC-z2TH.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./Card-CEyROzcv.js";import"./TertiaryButton-jo8ThkBe.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-C0UKjDnR.js";const u=()=>{const l=C();y(l),f(l),x(l),j(l);const i=()=>{console.log("Delete Item")},c=p({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:d.subtract("100vh",b.xxl),width:d.subtract("100vw",k)}),m=p({gridArea:"topButton",justifySelf:"center"}),P=p({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),g=p({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),h=p({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"});return e.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:e.jsxs(T,{cs:c,children:[e.jsxs(t,{children:[e.jsx(t.Target,{cs:m,as:s,children:"Placement Top"}),e.jsx(t.Popper,{placement:"top",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingTop:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(n,{cs:{gap:a.sm,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:i,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]}),e.jsxs(t,{children:[e.jsx(t.Target,{cs:h,as:s,children:"Placement Left"}),e.jsx(t.Popper,{placement:"left",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingTop:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(n,{cs:{gap:a.sm,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:i,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]}),e.jsxs(t,{children:[e.jsx(t.Target,{cs:P,as:s,children:"Placement Right"}),e.jsx(t.Popper,{placement:"right",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingTop:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(n,{cs:{gap:a.sm,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:i,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]}),e.jsxs(t,{children:[e.jsx(t.Target,{cs:g,as:s,children:"Placement Bottom"}),e.jsx(t.Popper,{placement:"bottom",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingTop:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(n,{cs:{gap:a.sm,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:i,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]})]})})};u.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';
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
              <Popup.Heading cs={{paddingTop: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs}}>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
              </Flex>
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
              <Popup.Heading cs={{paddingTop: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs}}>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
              </Flex>
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
              <Popup.Heading cs={{paddingTop: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs}}>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
              </Flex>
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
              <Popup.Heading cs={{paddingTop: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs}}>
                <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                  Delete
                </Popup.CloseButton>
                <Popup.CloseButton>Cancel</Popup.CloseButton>
              </Flex>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </Grid>
    </div>
  );
};
`;const Ce={title:"Testing/Popups/Popup",component:t,parameters:{viewport:{viewports:B,defaultViewport:"landscape"}}},r={render:u};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: PopupWithFallbackPlacementsExample
}`,...r.parameters?.docs?.source}}};const ye=["PopupWithFallbackPlacements"];export{r as PopupWithFallbackPlacements,ye as __namedExportsOrder,Ce as default};
