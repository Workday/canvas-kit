import{j as s}from"./jsx-runtime-Bu6AqWCO.js";import{S as r}from"./StaticStates-BX1Ekc1X.js";import{C as t}from"./ComponentStatesTable-bL-AVKdw.js";import{p as a}from"./permutateProps-CtMwpv-x.js";import{c as m}from"./check-Ds6vsrAM.js";import{A as u,a as d,b as S,c as z,d as v}from"./AccessoryMedia-Cm8Xz-4-.js";import"./index-IfJi-UCQ.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./CanvasProvider-Bg8Y7PHJ.js";import"./index-C_4iH04t.js";import"./index-kj8ZfNNN.js";import"./types-wqmYQQWa.js";import"./components-OdKcSStU.js";import"./txt-geollWoP.js";import"./document-Bmp3YBI-.js";import"./stack-CwCrIbZb.js";import"./SystemIcon-Cik2pv8M.js";import"./Svg-q-fWRgLZ.js";import"./px2rem-C0KbprIx.js";import"./cornerShape-XgYWEUxE.js";const O={title:"Testing/Labs/Accessory",parameters:{chromatic:{disable:!1}}},o=["extraSmall","small","medium","large","extraLarge"],y=["grey","green","blue","purple","amber","magenta","red","orange","outline"],b=["pdf","spreadsheet","document","presentation","video","file","txt"],P="data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 160 80">
      <rect width="160" height="80" fill="#1c2833"/>
      <circle cx="40" cy="40" r="22" fill="#243140"/>
      <circle cx="80" cy="28" r="18" fill="#0e1620"/>
      <circle cx="118" cy="48" r="24" fill="#2c3a48"/>
    </svg>`),c=()=>s.jsx(r,{children:s.jsx(t,{rowProps:a({variant:y.map(e=>({value:e,label:e}))}),columnProps:a({size:o.map(e=>({value:e,label:e}))}),children:e=>s.jsx(u,{icon:m,size:e.size,variant:e.variant})})}),p=()=>s.jsx(r,{children:s.jsx(t,{rowProps:a({size:o.map(e=>({value:e,label:e}))}),columnProps:a({className:[{label:"Default",value:""}]}),children:e=>s.jsx(d,{size:e.size,src:P})})}),i=()=>s.jsx(r,{children:s.jsx(t,{rowProps:a({size:o.map(e=>({value:e,label:e}))}),columnProps:a({className:[{label:"Workday",value:""}]}),children:e=>s.jsx(S,{size:e.size,url:"workday.com"})})}),n=()=>s.jsx(r,{children:s.jsx(t,{rowProps:a({type:b.map(e=>({value:e,label:e}))}),columnProps:a({size:o.map(e=>({value:e,label:e}))}),children:e=>s.jsx(z,{size:e.size,type:e.type})})}),l=()=>s.jsx(r,{children:s.jsx(t,{rowProps:a({size:o.map(e=>({value:e,label:e}))}),columnProps:a({className:[{label:"Apr 30",value:""}]}),children:e=>s.jsx(v,{date:30,month:"Apr",size:e.size})})});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    variant: variants.map(variant => ({
      value: variant,
      label: variant
    }))
  })} columnProps={permutateProps({
    size: sizes.map(size => ({
      value: size,
      label: size
    }))
  })}>
      {props => <AccessoryIcon icon={checkIcon} size={props.size} variant={props.variant} />}
    </ComponentStatesTable>
  </StaticStates>`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    size: sizes.map(size => ({
      value: size,
      label: size
    }))
  })} columnProps={permutateProps({
    className: [{
      label: 'Default',
      value: ''
    }]
  })}>
      {props => <AccessoryMedia size={props.size} src={photo} />}
    </ComponentStatesTable>
  </StaticStates>`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    size: sizes.map(size => ({
      value: size,
      label: size
    }))
  })} columnProps={permutateProps({
    className: [{
      label: 'Workday',
      value: ''
    }]
  })}>
      {props => <AccessoryFavicon size={props.size} url="workday.com" />}
    </ComponentStatesTable>
  </StaticStates>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    type: fileTypes.map(type => ({
      value: type,
      label: type
    }))
  })} columnProps={permutateProps({
    size: sizes.map(size => ({
      value: size,
      label: size
    }))
  })}>
      {props => <AccessoryFile size={props.size} type={props.type} />}
    </ComponentStatesTable>
  </StaticStates>`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <StaticStates>
    <ComponentStatesTable rowProps={permutateProps({
    size: sizes.map(size => ({
      value: size,
      label: size
    }))
  })} columnProps={permutateProps({
    className: [{
      label: 'Apr 30',
      value: ''
    }]
  })}>
      {props => <AccessoryCalendar date={30} month="Apr" size={props.size} />}
    </ComponentStatesTable>
  </StaticStates>`,...l.parameters?.docs?.source}}};const U=["AccessoryIconStates","AccessoryMediaStates","AccessoryFaviconStates","AccessoryFileStates","AccessoryCalendarStates"];export{l as AccessoryCalendarStates,i as AccessoryFaviconStates,n as AccessoryFileStates,c as AccessoryIconStates,p as AccessoryMediaStates,U as __namedExportsOrder,O as default};
