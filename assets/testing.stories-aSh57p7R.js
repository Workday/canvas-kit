import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as l}from"./index-IfJi-UCQ.js";import{r as u}from"./reset-CNB1hIzV.js";import{T as m}from"./Tooltip-DHZOvFA4.js";import{O as h}from"./OverflowTooltip-B8mlvvwE.js";import{S as d}from"./SecondaryButton-BGDiW78O.js";import{C as p}from"./Card-CPSdbjS9.js";import{a as c}from"./Popper-JKy5AP_Q.js";import{T as f}from"./useTooltip-DUbvqIp1.js";import{S as b}from"./StaticStates-BT1TFmrJ.js";import{b as g}from"./BaseButton-DzH1x21V.js";import"./types-wqmYQQWa.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./cs-rfTTo7Bg.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./components-AX32LNYc.js";import"./Button-BNyLbu3E.js";import"./mergeStyles-BAqoDFu5.js";import"./Box-BPraYaO3.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./flex-BT-UZmhF.js";import"./grid-CpPShNRZ.js";import"./Text-ypSk16zO.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./CanvasProvider-DcYN8xn4.js";import"./index-5dfzm_kn.js";import"./index-5mrAZJYD.js";import"./useCloseOnEscape-D7zKS4W4.js";import"./SystemIcon-BoCe_uUf.js";import"./Svg-BEZEbUw_.js";import"./px2rem-C0KbprIx.js";const ee={title:"Testing/Popups/Tooltip",component:m},n={render:()=>e.jsx(m,{title:"Test",children:e.jsx("span",{"data-testid":"non-interactive",children:"Non-interactive Tooltip"})})},r={render:()=>e.jsx(h,{children:e.jsx(d,{"data-testid":"overflow-tooltip",icon:u,style:{maxWidth:200},children:"Super Mega Ultra Long Content With Max Width On The Button with Icon"})})},a={parameters:{chromatic:{disable:!1}},render:()=>{const o=l.useRef(null),i=["top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];return e.jsxs("div",{style:{display:"inline-block",overflow:"auto",padding:100},children:[e.jsx(p,{ref:o,style:{width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(p.Body,{children:"Target: We set font to sans serif so we don't have to wait for roboto to load"})}),i.map(t=>e.jsx(c,{placement:t,popperOptions:{modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!1},{name:"fallbackModifier",enabled:!1}]},open:!0,anchorElement:o,children:e.jsx(f,{style:{fontFamily:"sans-serif"},transformOrigin:null,children:t})},t))]})}},s={parameters:{chromatic:{disable:!1}},render:()=>{const o=l.useRef(null);l.useEffect(()=>{document.body.setAttribute("data-whatinput","keyboard")},[]);const i=["top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];return e.jsx(b,{children:e.jsxs("div",{style:{display:"inline-block",overflow:"auto",padding:100},children:[e.jsx(d,{className:"focus",ref:o,cs:{[g.vars.background]:"transparent",width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4},children:e.jsx("span",{style:{whiteSpace:"normal",textOverflow:"initial",overflow:"visible"},children:"Target: We set font to sans serif so we don't have to wait for roboto to load"})}),i.map(t=>e.jsx(c,{placement:t,popperOptions:{modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!1},{name:"fallbackModifier",enabled:!1}]},open:!0,anchorElement:o,children:e.jsx(f,{style:{fontFamily:"sans-serif"},transformOrigin:null,children:t})},t))]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const te=["NonInteractive","Overflow","Placements","PlacementsFocus"];export{n as NonInteractive,r as Overflow,a as Placements,s as PlacementsFocus,te as __namedExportsOrder,ee as default};
