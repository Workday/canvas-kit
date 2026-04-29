import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{r as l}from"./index-IfJi-UCQ.js";import{r as u}from"./reset-D2F6NOZm.js";import{T as m}from"./Tooltip-De1KsO5U.js";import{O as h}from"./OverflowTooltip-B7jd-TXK.js";import{S as d}from"./SecondaryButton-oNuQLwcg.js";import{C as p}from"./Card-ywil38vv.js";import{a as c}from"./Popper-BRmPGiuC.js";import{T as f}from"./useTooltip-p8F4NfJ4.js";import{S as b}from"./StaticStates-kDyV_ZDH.js";import{b as g}from"./BaseButton-DxRITFeD.js";import"./types-wqmYQQWa.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./cs-DvbI9OYs.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./components-XIe_upcR.js";import"./Button-Cp7fe3Zs.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./Text-8N36XMNq.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-CbBD4ERB.js";import"./index-CYsyLHR7.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./useCloseOnEscape-CMK3mwZG.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";const nt={title:"Testing/Popups/Tooltip",component:m},n={render:()=>t.jsx(m,{title:"Test",children:t.jsx("span",{"data-testid":"non-interactive",children:"Non-interactive Tooltip"})})},r={render:()=>t.jsx(h,{children:t.jsx(d,{"data-testid":"overflow-tooltip",icon:u,style:{maxWidth:200},children:"Super Mega Ultra Long Content With Max Width On The Button with Icon"})})},a={parameters:{chromatic:{disable:!1}},render:()=>{const o=l.useRef(null),i=["top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];return t.jsxs("div",{style:{display:"inline-block",overflow:"auto",padding:100},children:[t.jsx(p,{ref:o,style:{width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(p.Body,{children:"Target: We set font to sans serif so we don't have to wait for roboto to load"})}),i.map(e=>t.jsx(c,{placement:e,popperOptions:{modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!1},{name:"fallbackModifier",enabled:!1}]},open:!0,anchorElement:o,children:t.jsx(f,{style:{fontFamily:"sans-serif"},transformOrigin:null,children:e})},e))]})}},s={parameters:{chromatic:{disable:!1}},render:()=>{const o=l.useRef(null);l.useEffect(()=>{document.body.setAttribute("data-whatinput","keyboard")},[]);const i=["top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];return t.jsx(b,{children:t.jsxs("div",{style:{display:"inline-block",overflow:"auto",padding:100},children:[t.jsx(d,{className:"focus",ref:o,cs:{[g.vars.background]:"transparent",width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4},children:t.jsx("span",{style:{whiteSpace:"normal",textOverflow:"initial",overflow:"visible"},children:"Target: We set font to sans serif so we don't have to wait for roboto to load"})}),i.map(e=>t.jsx(c,{placement:e,popperOptions:{modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!1},{name:"fallbackModifier",enabled:!1}]},open:!0,anchorElement:o,children:t.jsx(f,{style:{fontFamily:"sans-serif"},transformOrigin:null,children:e})},e))]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tooltip title="Test">
        <span data-testid="non-interactive">Non-interactive Tooltip</span>
      </Tooltip>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <OverflowTooltip>
        <SecondaryButton data-testid="overflow-tooltip" icon={resetIcon} style={{
        maxWidth: 200
      }}>
          Super Mega Ultra Long Content With Max Width On The Button with Icon
        </SecondaryButton>
      </OverflowTooltip>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  },
  render: () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const placements: Placement[] = ['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
    return <div style={{
      display: 'inline-block',
      overflow: 'auto',
      padding: 100
    }}>
        <Card ref={ref} style={{
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Card.Body>
            Target: We set font to sans serif so we don't have to wait for roboto to load
          </Card.Body>
        </Card>
        {placements.map(placement => <Popper key={placement} placement={placement} popperOptions={{
        modifiers: [
        // keep the tooltips from moving - no matter what!
        {
          name: 'flip',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'fallbackModifier',
          enabled: false
        }]
      }} open={true} anchorElement={ref}>
            <TooltipContainer style={{
          fontFamily: 'sans-serif'
        }} transformOrigin={null}>
              {placement}
            </TooltipContainer>
          </Popper>)}
      </div>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disable: false
    }
  },
  render: () => {
    const ref = React.useRef<HTMLButtonElement>(null);
    React.useEffect(() => {
      document.body.setAttribute('data-whatinput', 'keyboard');
    }, []);
    const placements: Placement[] = ['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
    return <StaticStates>
        <div style={{
        display: 'inline-block',
        overflow: 'auto',
        padding: 100
      }}>
          <SecondaryButton className="focus" ref={ref} cs={{
          [buttonStencil.vars.background]: 'transparent',
          width: 300,
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4
        }}>
            <span style={{
            whiteSpace: 'normal',
            textOverflow: 'initial',
            overflow: 'visible'
          }}>
              Target: We set font to sans serif so we don't have to wait for roboto to load
            </span>
          </SecondaryButton>
          {placements.map(placement => <Popper key={placement} placement={placement} popperOptions={{
          modifiers: [
          // keep the tooltips from moving - no matter what!
          {
            name: 'flip',
            enabled: false
          }, {
            name: 'preventOverflow',
            enabled: false
          }, {
            name: 'fallbackModifier',
            enabled: false
          }]
        }} open={true} anchorElement={ref}>
              <TooltipContainer style={{
            fontFamily: 'sans-serif'
          }} transformOrigin={null}>
                {placement}
              </TooltipContainer>
            </Popper>)}
        </div>
      </StaticStates>;
  }
}`,...s.parameters?.docs?.source}}};const rt=["NonInteractive","Overflow","Placements","PlacementsFocus"];export{n as NonInteractive,r as Overflow,a as Placements,s as PlacementsFocus,rt as __namedExportsOrder,nt as default};
