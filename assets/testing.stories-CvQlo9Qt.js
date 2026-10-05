import{j as t}from"./jsx-runtime-Bu6AqWCO.js";import{r as p}from"./index-IfJi-UCQ.js";import{r as h}from"./reset-CJq3chgj.js";import{T as d}from"./Tooltip-DuLNr5jF.js";import{c as b}from"./cs-CmRirKzJ.js";import{O as g}from"./OverflowTooltip-CWCz85mw.js";import{S as c}from"./SecondaryButton-CZc3i-WD.js";import{C as m}from"./Card-riOLYX3E.js";import{a as f}from"./Popper-F_u6Qeli.js";import{T as u}from"./useTooltip-GTBnUEiW.js";import{S as v}from"./StaticStates-DH8ugYts.js";import{b as y}from"./BaseButton-aCJIRgx8.js";import{p as w,c as T}from"./index-jCBjnmNg.js";import"./types-wqmYQQWa.js";import"./getTransformFromPlacement-C9zTUpzV.js";import"./CanvasProvider-Cdk5n_7L.js";import"./index-kj8ZfNNN.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./components-BceceJol.js";import"./Button-Belj1Id1.js";import"./mergeStyles-ClqtAfq-.js";import"./Box-BtLgvfpX.js";import"./index-DWHOiqdi.js";import"./flex-sw8oCqO7.js";import"./grid-CJb0DYG8.js";import"./Text-DS2Wj_DF.js";import"./cornerShape-B1vmiV_8.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./useCloseOnEscape-SUluXMGy.js";import"./SystemIcon-wLEz3Jyh.js";import"./Svg-i8rT_wzI.js";import"./px2rem-C0KbprIx.js";const st={title:"Testing/Popups/Tooltip",component:d},x=b({background:T.bg.alt.default,padding:w.md}),n={render:()=>t.jsx(d,{title:"Test",children:t.jsx("span",{"data-testid":"non-interactive",children:"Non-interactive Tooltip"})})},r={render:()=>t.jsx("div",{className:x,children:t.jsx(d,{title:"Test",variant:"alt",children:t.jsx("span",{children:"Alt Tooltip"})})})},a={render:()=>t.jsx(g,{children:t.jsx(c,{"data-testid":"overflow-tooltip",icon:h,style:{maxWidth:200},children:"Super Mega Ultra Long Content With Max Width On The Button with Icon"})})},s={parameters:{chromatic:{disable:!1}},render:()=>{const o=p.useRef(null),l=["top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];return t.jsxs("div",{style:{display:"inline-block",overflow:"auto",padding:100},children:[t.jsx(m,{ref:o,style:{width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(m.Body,{children:"Target: We set font to sans serif so we don't have to wait for roboto to load"})}),l.map(e=>t.jsx(f,{placement:e,popperOptions:{modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!1},{name:"fallbackModifier",enabled:!1}]},open:!0,anchorElement:o,children:t.jsx(u,{style:{fontFamily:"sans-serif"},transformOrigin:null,children:e})},e))]})}},i={parameters:{chromatic:{disable:!1}},render:()=>{const o=p.useRef(null);p.useEffect(()=>{document.body.setAttribute("data-whatinput","keyboard")},[]);const l=["top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];return t.jsx(v,{children:t.jsxs("div",{style:{display:"inline-block",overflow:"auto",padding:100},children:[t.jsx(c,{className:"focus",ref:o,cs:{[y.vars.background]:"transparent",width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4},children:t.jsx("span",{style:{whiteSpace:"normal",textOverflow:"initial",overflow:"visible"},children:"Target: We set font to sans serif so we don't have to wait for roboto to load"})}),l.map(e=>t.jsx(f,{placement:e,popperOptions:{modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!1},{name:"fallbackModifier",enabled:!1}]},open:!0,anchorElement:o,children:t.jsx(u,{style:{fontFamily:"sans-serif"},transformOrigin:null,children:e})},e))]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tooltip title="Test">
        <span data-testid="non-interactive">Non-interactive Tooltip</span>
      </Tooltip>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={styles}>
        <Tooltip title="Test" variant="alt">
          <span>Alt Tooltip</span>
        </Tooltip>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <OverflowTooltip>
        <SecondaryButton data-testid="overflow-tooltip" icon={resetIcon} style={{
        maxWidth: 200
      }}>
          Super Mega Ultra Long Content With Max Width On The Button with Icon
        </SecondaryButton>
      </OverflowTooltip>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const it=["NonInteractive","AltTooltip","Overflow","Placements","PlacementsFocus"];export{r as AltTooltip,n as NonInteractive,a as Overflow,s as Placements,i as PlacementsFocus,it as __namedExportsOrder,st as default};
