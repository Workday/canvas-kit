import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import"./index-IfJi-UCQ.js";import"./CanvasProviderDecorator-CTq3y2Hq.js";import{c as h}from"./PopperController-CcVW4dNr.js";import{u as B}from"./getTransformFromPlacement-CFlQb2fd.js";import{u as g,a as C}from"./useInitialFocus-vPZJUziU.js";import{u as y}from"./useCloseOnEscape-jYphKC7B.js";import{u as f}from"./useReturnFocus-BXvf5LDo.js";import{c as p}from"./cs-rfTTo7Bg.js";import{c as n}from"./CanvasProvider-Dyk6_koI.js";import{a as j}from"./index-pMzza0x6.js";import{a as x,p as r}from"./index-DE-upP0k.js";import{G as k}from"./Grid-DtaxQxMc.js";import{P as e}from"./Popup-bjprdV6s.js";import{D as o}from"./DeleteButton-BhebG_3U.js";import"./Flex-DL0_xNzt.js";import"./index-DM_3aIAw.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./Box-Ber3xeq6.js";import"./useConstant-B_SD0x5s.js";import"./components-txAqe3Xu.js";import"./flex-CRSWLfxc.js";import"./SecondaryButton-B7xFUuvh.js";import"./BaseButton-rNx6-AYy.js";import"./SystemIcon-CB7CmGUd.js";import"./Svg-CP9vwvqP.js";import"./px2rem-C0KbprIx.js";import"./types-wqmYQQWa.js";import"./mergeStyles-Cv57vH8h.js";import"./grid-B_hxfS-k.js";import"./Button-BYuL_yBu.js";import"./TypeLevelComponents-CvpwAY8L.js";import"./Text-8v3W_t7V.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./Popper-C6ZR4iXf.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./Card-DQX9cl5b.js";import"./cornerShape-Dinnbk8k.js";import"./TertiaryButton-BZz6yk-h.js";import"./x-B1faap_l.js";import"./usePopupTarget-bzvdH9Sb.js";const u=()=>{const s=B();g(s),y(s),C(s),f(s);const l=()=>{console.log("Delete Item")},a=p({gridTemplateAreas:"'topButton topButton''leftButton rightButton''bottomButton bottomButton'",height:n.subtract("100vh",x.xxl),width:n.subtract("100vw",j)}),c=p({gridArea:"topButton",justifySelf:"center"}),d=p({gridArea:"rightButton",justifySelf:"right",alignSelf:"center"}),m=p({gridArea:"bottomButton",justifySelf:"center",alignSelf:"end"}),P=p({gridArea:"leftButton",justifySelf:"left",alignSelf:"center"});return t.jsx("div",{"data-testid":"scroll-area-fallback-placement",children:t.jsxs(k,{cs:a,children:[t.jsxs(e,{children:[t.jsx(e.Target,{cs:c,as:o,children:"Placement Top"}),t.jsx(e.Popper,{placement:"top",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]}),t.jsxs(e,{children:[t.jsx(e.Target,{cs:P,as:o,children:"Placement Left"}),t.jsx(e.Popper,{placement:"left",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]}),t.jsxs(e,{children:[t.jsx(e.Target,{cs:d,as:o,children:"Placement Right"}),t.jsx(e.Popper,{placement:"right",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]}),t.jsxs(e,{children:[t.jsx(e.Target,{cs:m,as:o,children:"Placement Bottom"}),t.jsx(e.Popper,{placement:"bottom",children:t.jsxs(e.Card,{cs:{width:400},children:[t.jsx(e.CloseIcon,{"aria-label":"Close"}),t.jsx(e.Heading,{cs:{paddingBlockStart:r.md},children:"This is Popup heading"}),t.jsx(e.Body,{children:"Are you sure you'd like to delete the item titled 'My Item'?"}),t.jsxs(e.ButtonGroup,{children:[t.jsx(e.CloseButton,{children:"Cancel"}),t.jsx(e.CloseButton,{as:o,onClick:l,children:"Delete"})]})]})})]})]})})};u.__RAW__=`import {DeleteButton} from '@workday/canvas-kit-react/button';
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
