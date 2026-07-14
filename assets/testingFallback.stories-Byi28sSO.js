import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-CAzKxqov.js";import{c as B}from"./PopperController-CBsaVmKa.js";import{u as C,c as d}from"./getTransformFromPlacement-BtpPb64q.js";import{u as y,a as x}from"./useInitialFocus-BCQsnoIT.js";import{u as f}from"./useCloseOnEscape-uv5na6lZ.js";import{u as j}from"./useReturnFocus-42FhoN3N.js";import{c as p}from"./cs-rfTTo7Bg.js";import{a as k}from"./index-5mrAZJYD.js";import{a as b,p as o,g as i}from"./index-5dfzm_kn.js";import{G as S}from"./Grid-CboXEsOe.js";import{P as t}from"./Popup-CjJtetoF.js";import{D as s}from"./DeleteButton-BvKf8pxH.js";import{F as r}from"./Flex-D4H0wg8Z.js";import"./CanvasProvider-ZQW06Ivv.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./SecondaryButton-BSYdFPfk.js";import"./BaseButton-DI27SrsM.js";import"./Box-Berqkg0s.js";import"./index-CjGALPG9.js";import"./useConstant-CUZppmaV.js";import"./components-BC9eTosh.js";import"./SystemIcon-gewk2tVd.js";import"./Svg-pWcUwgKK.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-BwvcP3zW.js";import"./flex-kD_kQJ4m.js";import"./grid-L1dbhipu.js";import"./Button-CSRY-Hl0.js";import"./TypeLevelComponents-Bp1jFajF.js";import"./Text-DCWkG9qZ.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./Popper-DUTAU7yt.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./Card-CK3I0y_S.js";import"./TertiaryButton-UTJ3hnV1.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-BMD-7lNA.js";const u=()=>{const l=C();y(l),f(l),x(l),j(l);const a=()=>{console.log("Delete Item")},c=p({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:d.subtract("100vh",b.xxl),width:d.subtract("100vw",k)}),m=p({gridArea:"topButton",justifySelf:"center"}),P=p({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),g=p({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),h=p({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"});return e.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:e.jsxs(S,{cs:c,children:[e.jsxs(t,{children:[e.jsx(t.Target,{cs:m,as:s,children:"Placement Top"}),e.jsx(t.Popper,{placement:"top",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(r,{cs:{gap:i.sm,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:a,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]}),e.jsxs(t,{children:[e.jsx(t.Target,{cs:h,as:s,children:"Placement Left"}),e.jsx(t.Popper,{placement:"left",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(r,{cs:{gap:i.sm,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:a,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]}),e.jsxs(t,{children:[e.jsx(t.Target,{cs:P,as:s,children:"Placement Right"}),e.jsx(t.Popper,{placement:"right",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(r,{cs:{gap:i.md,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:a,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]}),e.jsxs(t,{children:[e.jsx(t.Target,{cs:g,as:s,children:"Placement Bottom"}),e.jsx(t.Popper,{placement:"bottom",children:e.jsxs(t.Card,{cs:{width:400},children:[e.jsx(t.CloseIcon,{"aria-label":"Close"}),e.jsx(t.Heading,{cs:{paddingBlockStart:o.md},children:"This is Popup heading"}),e.jsx(t.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),e.jsxs(r,{cs:{gap:i.md,padding:o.xs},children:[e.jsx(t.CloseButton,{as:s,onClick:a,children:"Delete"}),e.jsx(t.CloseButton,{children:"Cancel"})]})]})})]})]})})};u.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
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
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
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
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
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
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Flex cs={{gap: system.gap.md, padding: system.padding.xs}}>
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
              <Popup.Heading cs={{paddingBlockStart: system.padding.md}}>
                This is Popup heading
              </Popup.Heading>
              <Popup.Body>Are you sure you'd like to delete the item titled 'My Item'?</Popup.Body>
              <Flex cs={{gap: system.gap.md, padding: system.padding.xs}}>
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
`;const ge={title:"Testing/Popups/Popup",component:t,parameters:{viewport:{viewports:B,defaultViewport:"landscape"}}},n={render:u};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: PopupWithFallbackPlacementsExample
}`,...n.parameters?.docs?.source}}};const he=["PopupWithFallbackPlacements"];export{n as PopupWithFallbackPlacements,he as __namedExportsOrder,ge as default};
