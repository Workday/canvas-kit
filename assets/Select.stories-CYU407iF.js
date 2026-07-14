import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as se}from"./index-3YbjYt95.js";import{ae as me}from"./index-TJmUBRbC.js";import{E as c,c as he}from"./union-cZzzZx0Z.js";import{S as pe}from"./Specifications-CSZJnl_h.js";import{e as l}from"./index-IfJi-UCQ.js";import{F as d}from"./Flex-3MZwcTIN.js";import{c as m}from"./cs-rfTTo7Bg.js";import{F as i}from"./FormField-I1tQCnQg.js";import{S as n,u as x}from"./Select-Buo4_DJb.js";import{g as ue}from"./index-5dfzm_kn.js";import{S as V}from"./SecondaryButton-CFAfozPp.js";import{a as xe}from"./useMount-CAK2BN3_.js";import{P as ae}from"./PrimaryButton-BbV_besx.js";import{p as _}from"./px2rem-C0KbprIx.js";import{M as ee}from"./Menu-DSo02gQf.js";import{B as Se}from"./TypeLevelComponents-DcuzfFnP.js";import{B as ye}from"./Box-Dji2xsFp.js";import{c as Fe}from"./comment-C3DEtO6j.js";import{c as fe}from"./cloud-BgDG3pZp.js";import{c as je}from"./cloud-arrow-up-DRlXmxwS.js";import{u as be}from"./user-KhAHIDko.js";import"./iframe-BHKKWIHS.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CcQdM6y6.js";import"./Svg-CDIwIDn-.js";import"./components-Dyf4Q_nV.js";import"./StatusIndicator-BWc5Y_Pw.js";import"./Text-CSA8kpWB.js";import"./mergeStyles-DA3z7m0v.js";import"./flex-CoK9Wr5Y.js";import"./grid-BEk7oOv6.js";import"./Card-C0w1QPqP.js";import"./ExternalHyperlink-CU9GfROH.js";import"./Hyperlink-9y2FeJQG.js";import"./external-link-BZdacz1K.js";import"./lerna-CWdT8VMV.js";import"./CanvasProvider-DKylCnBg.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./index-B2vXpe_3.js";import"./Tooltip-Rs9DkMIQ.js";import"./useTooltip-BHLrFCpr.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-Ci8oPZu-.js";import"./Popper-BRNkOZhn.js";import"./TertiaryButton-BROdkGKz.js";import"./BaseButton-B0mfYlEf.js";import"./Button-6WgYUb9O.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-CDRVOXJG.js";import"./ColorInput-Bd0nnyvQ.js";import"./check-small-C7Z-gSGs.js";import"./index-N3xz2Kqy.js";import"./TextInput-CGpXr3az.js";import"./types-DXdjelYI.js";import"./check-Bvurkvei.js";import"./Expandable-BpGBkqv8.js";import"./Avatar-CQ9_iIDw.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-Cq79yI01.js";import"./Popup-C7rWMGxh.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-Cgr2fBV0.js";import"./useInitialFocus-CxEazES6.js";import"./useReturnFocus-D1Qs81ZF.js";import"./useFocusRedirect-CbmVYS2o.js";import"./Breadcrumbs-CyoE-kLE.js";import"./useOverflowListTarget-CN33WFNX.js";import"./useListItemSelect-DneYhCSJ.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-COhmJumV.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Table-BZKlMM2Y.js";import"./Combobox-B1ruOAZ6.js";import"./useComboboxInputConstrained-FzDtHOhq.js";import"./InputGroup-DiEvsZAE.js";import"./x-small-DK7gM0f7.js";import"./caret-down-small-UmNc4PEr.js";const ge=m({flexDirection:"column"}),ve=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation","Thisisalongstringwithnobreaksandwillwrap"],U=()=>{const[o,t]=l.useState(""),a=r=>{console.log("change",r.currentTarget.value),t(r.target.value)};return e.jsxs(d,{cs:ge,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:ve,children:[e.jsx(i.Input,{as:n.Input,onChange:a}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})})]})})]}),"Selected Value: ",o]})};U.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
  'Thisisalongstringwithnobreaksandwillwrap',
];

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change', event.currentTarget.value);
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} onChange={handleChange} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => {
                    return <Select.Item>{item}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};
`;const Ie=m({flexDirection:"column"}),Ce=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],A=()=>{const[o,t]=l.useState(""),a=r=>{t(r.target.value)};return e.jsxs(d,{cs:Ie,children:[e.jsxs(i,{error:"caution",children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ce,children:[e.jsx(i.Input,{as:n.Input,onChange:r=>a(r),id:"alert-select"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})}),e.jsx(i.Hint,{children:"Please choose a form of contact."})]})})]}),"Selected value: ",o]})};A.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Flex cs={parentContainerStyles}>
      <FormField error="caution">
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} id="alert-select" />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>Please choose a form of contact.</FormField.Hint>
          </Select>
        </FormField.Field>
      </FormField>
      Selected value: {value}
    </Flex>
  );
};
`;const we=m({flexDirection:"column"}),te=[{serverId:"email",label:"E-mail"},{serverId:"phone",label:"Phone"},{serverId:"fax",label:"Fax"},{serverId:"mail",label:"Mail"},{serverId:"mobile",label:"Mobile Phone"},{serverId:"oasis",label:"The Ontologically Anthropocentric Sensory Immersive Simulation"}],D=()=>{const[o,t]=l.useState(""),[a,r]=l.useState(""),h=s=>{r(s.target.value),t(te.find(u=>u.serverId===s.target.value).label)};return e.jsxs(d,{cs:we,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:te,getId:s=>s.serverId,getTextValue:s=>s.label,children:[e.jsx(i.Input,{as:n.Input,onChange:s=>h(s)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:s=>e.jsx(n.Item,{children:s.label})})})})]})})]}),e.jsxs("p",{children:["Id: ",a]}),e.jsxs("p",{children:["Value: ",o]})]})};D.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {serverId: 'email', label: 'E-mail'},
  {serverId: 'phone', label: 'Phone'},
  {serverId: 'fax', label: 'Fax'},
  {serverId: 'mail', label: 'Mail'},
  {serverId: 'mobile', label: 'Mobile Phone'},
  {
    serverId: 'oasis',
    label: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

export const Complex = () => {
  const [value, setValue] = React.useState('');
  const [id, setId] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
    setValue(options.find(item => item.serverId === event.target.value)!.label);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} getId={item => item.serverId} getTextValue={item => item.label}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {id}</p>
      <p>Value: {value}</p>
    </Flex>
  );
};
`;const ke=m({flexDirection:"column"}),ne=[{serverId:"email",label:"E-mail"},{serverId:"phone",label:"Phone"},{serverId:"fax",label:"Fax"},{serverId:"mail",label:"Mail"},{serverId:"mobile",label:"Mobile Phone"},{serverId:"oasis",label:"The Ontologically Anthropocentric Sensory Immersive Simulation"}],B=()=>{const[o,t]=l.useState(""),[a,r]=l.useState(""),h=s=>{t(s.currentTarget.value),r(ne.find(u=>u.serverId===s.currentTarget.value)?.label||"")};return e.jsxs(d,{cs:ke,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:ne,getId:s=>s.serverId,getTextValue:s=>s.label,children:[e.jsx(i.Input,{as:n.Input,onChange:h,value:o,name:"contact"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:s=>e.jsx(n.Item,{children:s.label})})})})]})})]}),e.jsxs("p",{children:["Id: ",o]}),e.jsxs("p",{children:["Label: ",a]}),e.jsxs(d,{cs:{gap:ue.md},children:[e.jsx(V,{onClick:s=>{t("fax")},children:'Set to "Fax"'}),e.jsx(V,{onClick:s=>{t("")},children:"Clear"})]})]})};B.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {serverId: 'email', label: 'E-mail'},
  {serverId: 'phone', label: 'Phone'},
  {serverId: 'fax', label: 'Fax'},
  {serverId: 'mail', label: 'Mail'},
  {serverId: 'mobile', label: 'Mobile Phone'},
  {
    serverId: 'oasis',
    label: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

export const Controlled = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    setLabel(options.find(item => item.serverId === event.currentTarget.value)?.label || '');
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} getId={item => item.serverId} getTextValue={item => item.label}>
            <FormField.Input
              as={Select.Input}
              onChange={handleChange}
              value={value}
              name="contact"
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {value}</p>
      <p>Label: {label}</p>
      <Flex cs={{gap: system.gap.md}}>
        <SecondaryButton
          onClick={e => {
            setValue('fax');
          }}
        >
          Set to "Fax"
        </SecondaryButton>
        <SecondaryButton
          onClick={e => {
            setValue('');
          }}
        >
          Clear
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
`;const Le=m({flexDirection:"column"}),Pe=["E-mail","Phone","Fax (disabled)","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],O=()=>{const[o,t]=l.useState(""),a=r=>{t(r.target.value)};return e.jsx(d,{cs:Le,children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Pe,nonInteractiveIds:["Fax (disabled)"],children:[e.jsx(i.Input,{as:n.Input,disabled:!0,onChange:r=>a(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{"aria-disabled":r==="Fax (disabled)"?!0:void 0,children:r})})})})]})})]})})};O.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Disabled = () => {
  const [_, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} nonInteractiveIds={['Fax (disabled)']}>
            <FormField.Input as={Select.Input} disabled onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => (
                    <Select.Item aria-disabled={item === 'Fax (disabled)' ? true : undefined}>
                      {item}
                    </Select.Item>
                  )}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const Me=m({flexDirection:"column"}),Ee=["E-mail","Phone","Fax (disabled)","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],H=()=>{const[o,t]=l.useState(""),a=r=>{t(r.target.value)};return e.jsxs(d,{cs:Me,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ee,nonInteractiveIds:["Fax (disabled)","Mobile Phone"],children:[e.jsx(i.Input,{as:n.Input,onChange:r=>a(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{"aria-disabled":r==="Mobile Phone"||r==="Fax (disabled)"?!0:void 0,children:r})})})})]})})]}),"Selected Value: ",o]})};H.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const DisabledOptions = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} nonInteractiveIds={['Fax (disabled)', 'Mobile Phone']}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => (
                    <Select.Item
                      aria-disabled={
                        item === 'Mobile Phone' || item === 'Fax (disabled)' ? true : undefined
                      }
                    >
                      {item}
                    </Select.Item>
                  )}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};
`;const Re=m({flexDirection:"column"}),Te=["E-mail","Phone","Fax (disabled)","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],$=()=>{const[o,t]=l.useState(""),a=r=>{t(r.target.value)};return e.jsxs(d,{cs:Re,children:[e.jsxs(i,{error:"error",children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Te,nonInteractiveIds:["Fax (disabled)"],children:[e.jsx(i.Input,{as:n.Input,onChange:r=>a(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{"aria-disabled":r==="Fax (disabled)"?!0:void 0,children:r})})})}),e.jsx(i.Hint,{children:"Fax is disabled. Please choose a different option."})]})})]}),"Selected Value: ",o]})};$.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Flex cs={parentContainerStyles}>
      <FormField error="error">
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} nonInteractiveIds={['Fax (disabled)']}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => (
                    <Select.Item aria-disabled={item === 'Fax (disabled)' ? true : undefined}>
                      {item}
                    </Select.Item>
                  )}
                </Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>Fax is disabled. Please choose a different option.</FormField.Hint>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};
`;const _e=m({flexDirection:"column",maxWidth:_(300)}),Ve=[{label:"The Lion King",serverId:"123",Year:"2019",Runtime:"118 min"},{label:"Mowgli: Legend of the Jungle",serverId:"234",Year:"2018",Runtime:"104 min"},{label:"Doctor Strange",serverId:"345",Year:"2016",Runtime:"115 min"},{label:"John Wick",Year:"2014",serverId:"456",Runtime:"101 min"},{label:"The Notebook",serverId:"567",Year:"2004",Runtime:"123 min"}],W=()=>{const[o,t]=l.useState("456"),[a,r]=l.useState([]),[h,s]=l.useState("idle"),u=l.useRef(),le=x({items:a,getTextValue:p=>p.label,getId:p=>p.serverId,initialSelectedIds:[o]}),ce=a.find(p=>p.serverId===o)?.label||"";function de(){s("loading"),u.current=setTimeout(()=>{s("success"),r(Ve)},1500)}return xe(()=>()=>{clearTimeout(u.current)}),e.jsxs(d,{cs:_e,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Choose a Film"}),e.jsx(i.Field,{children:e.jsxs(n,{model:le,children:[e.jsx(i.Input,{as:n.Input,onChange:p=>{t(p.target.value)},placeholder:h}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:p=>e.jsx(n.Item,{children:p.label})})})})]})})]}),e.jsxs("div",{"data-testid":"selected-id",children:["Selected Id: ",o]}),e.jsxs("div",{"data-testid":"selected-value",children:["Selected value: ",ce]}),e.jsx(ae,{onClick:()=>{de()},children:"Get Items"})]})};W.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {useMount} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
  maxWidth: px2rem(300),
});

const movieListItems = [
  {
    label: 'The Lion King',
    serverId: '123',
    Year: '2019',
    Runtime: '118 min',
  },
  {
    label: 'Mowgli: Legend of the Jungle',
    serverId: '234',
    Year: '2018',
    Runtime: '104 min',
  },
  {
    label: 'Doctor Strange',
    serverId: '345',
    Year: '2016',
    Runtime: '115 min',
  },
  {
    label: 'John Wick',
    Year: '2014',
    serverId: '456',
    Runtime: '101 min',
  },
  {
    label: 'The Notebook',
    serverId: '567',
    Year: '2004',
    Runtime: '123 min',
  },
];

export const FetchingDynamicItems = () => {
  const [id, setId] = React.useState('456');
  const [moviesLists, setMoviesList] = React.useState<typeof movieListItems>([]);
  const [loadingStatus, setLoadingStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');
  const loadingRef = React.useRef<ReturnType<typeof setTimeout>>();

  const model = useSelectModel({
    items: moviesLists,
    getTextValue: item => item.label,
    getId: item => item.serverId,
    initialSelectedIds: [id],
  });

  const stringValue = moviesLists.find(item => item.serverId === id)?.label || '';

  function loadItems() {
    setLoadingStatus('loading');
    loadingRef.current = setTimeout(() => {
      setLoadingStatus('success');
      setMoviesList(movieListItems);
    }, 1500);
  }

  useMount(() => {
    return () => {
      clearTimeout(loadingRef.current);
    };
  });

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Choose a Film</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input
              as={Select.Input}
              onChange={e => {
                setId(e.target.value);
              }}
              placeholder={loadingStatus}
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => {
                    return <Select.Item>{item.label}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <div data-testid="selected-id">Selected Id: {id}</div>
      <div data-testid="selected-value">Selected value: {stringValue}</div>
      <PrimaryButton
        onClick={() => {
          loadItems();
        }}
      >
        Get Items
      </PrimaryButton>
    </Flex>
  );
};
`;const Ue=[{id:"first",text:"First Item"},{id:"second",text:"Second Item"},{id:"third",text:"Third Item"},{id:"fourth",text:"Fourth Item"}],G=()=>{const[o,t]=l.useState("");return e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ue,getId:a=>a.id,getTextValue:a=>a.text,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsxs(ee.Group,{title:"First Group",children:[e.jsx(n.Item,{"data-id":"first",children:"First Item"}),e.jsx(n.Item,{"data-id":"second",children:"Second Item"})]}),e.jsxs(ee.Group,{title:"Second Group",children:[e.jsx(n.Item,{"data-id":"third",children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"aria-disabled":!0,"data-id":"fourth",children:"Fourth Item"})]})]})})})]})})]})})};G.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Select} from '@workday/canvas-kit-react/select';

const items = [
  {
    id: 'first',
    text: 'First Item',
  },
  {
    id: 'second',
    text: 'Second Item',
  },
  {
    id: 'third',
    text: 'Third Item',
  },
  {
    id: 'fourth',
    text: 'Fourth Item',
  },
];

export const GroupedItems = () => {
  const [selected, setSelected] = React.useState('');

  return (
    <>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={items} getId={item => item.id} getTextValue={item => item.text}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  <Menu.Group title="First Group">
                    <Select.Item data-id="first">First Item</Select.Item>
                    <Select.Item data-id="second">Second Item</Select.Item>
                  </Menu.Group>
                  <Menu.Group title="Second Group">
                    <Select.Item data-id="third">
                      Third Item (with a really, really, really long label)
                    </Select.Item>
                    <Select.Item aria-disabled data-id="fourth">
                      Fourth Item
                    </Select.Item>
                  </Menu.Group>
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </>
  );
};
`;const Ae=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],N=()=>{const o=x({items:Ae});return e.jsx(d,{children:e.jsxs(i,{grow:!0,children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:o,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{children:t})})})})]})})]})})};N.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Grow = () => {
  const model = useSelectModel({
    items: options,
  });

  return (
    <Flex>
      <FormField grow>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const De=[{text:"E-mail",id:"email-1"},{text:"Phone",id:"phone-2"},{text:"Fax",id:"fax-3"},{text:"Mail",id:"mail-4"},{text:"Mobile Phone",id:"mobile-phone-5"}],Y=()=>{const o=x({items:De,initialSelectedIds:["fax-3"]});return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:o,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{children:t.text})})})})]})})]}),e.jsxs(Se,{size:"small",children:["Selected Value: ",o.state.selectedIds[0]]}),e.jsx(V,{onClick:()=>{o.events.select({id:"phone-2"})},children:"Select Phone Item"})]})};Y.__RAW__=`import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {BodyText} from '@workday/canvas-kit-react/text';

const options = [
  {text: 'E-mail', id: 'email-1'},
  {text: 'Phone', id: 'phone-2'},
  {text: 'Fax', id: 'fax-3'},
  {text: 'Mail', id: 'mail-4'},
  {text: 'Mobile Phone', id: 'mobile-phone-5'},
];

export const HoistedModel = () => {
  const model = useSelectModel({
    items: options,
    initialSelectedIds: ['fax-3'],
  });

  return (
    <>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <BodyText size="small">Selected Value: {model.state.selectedIds[0]}</BodyText>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'phone-2'});
        }}
      >
        Select Phone Item
      </SecondaryButton>
    </>
  );
};
`;const Be=m({flexDirection:"column"}),ie=[{id:"b310c757b2d341f99d40d76f4d563c5b",descriptor:"Arabic",languageCode:"ar",label:"Arabic",nativeLanguageName:"العربية"},{id:"a675a6b6e22d100017d7fe2a784d1255",descriptor:"Bulgarian (Bulgaria)",languageCode:"bg_BG",label:"Bulgarian (Bulgaria)",nativeLanguageName:"български (Република България)"},{id:"da594226446c11de98360015c5e6daf6",descriptor:"English (United States)",languageCode:"en_US",label:"English (United States)",nativeLanguageName:"English"}],q=()=>{const[o,t]=l.useState("English (United States)"),[a,r]=l.useState("da594226446c11de98360015c5e6daf6"),h=s=>{r(s.target.value),t(ie.find(u=>u.id===s.target.value).label)};return e.jsxs(d,{cs:Be,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:ie,initialSelectedIds:["da594226446c11de98360015c5e6daf6"],getId:s=>s.id,getTextValue:s=>s.label,children:[e.jsx(n.Input,{onChange:s=>h(s)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:s=>e.jsx(n.Item,{children:s.label})})})})]})})]}),e.jsxs("p",{children:["Id: ",a]}),e.jsxs("p",{children:["Value: ",o]})]})};q.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {
    id: 'b310c757b2d341f99d40d76f4d563c5b',
    descriptor: 'Arabic',
    languageCode: 'ar',
    label: 'Arabic',
    nativeLanguageName: 'العربية',
  },
  {
    id: 'a675a6b6e22d100017d7fe2a784d1255',
    descriptor: 'Bulgarian (Bulgaria)',
    languageCode: 'bg_BG',
    label: 'Bulgarian (Bulgaria)',
    nativeLanguageName: 'български (Република България)',
  },
  {
    id: 'da594226446c11de98360015c5e6daf6',
    descriptor: 'English (United States)',
    languageCode: 'en_US',
    label: 'English (United States)',
    nativeLanguageName: 'English',
  },
];

export const InitialSelectedItem = () => {
  const [value, setValue] = React.useState('English (United States)');
  const [id, setId] = React.useState('da594226446c11de98360015c5e6daf6');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
    setValue(options.find(item => item.id === event.target.value).label);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select
            items={options}
            initialSelectedIds={['da594226446c11de98360015c5e6daf6']}
            getId={item => item.id}
            getTextValue={item => item.label}
          >
            <Select.Input onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {id}</p>
      <p>Value: {value}</p>
    </Flex>
  );
};
`;const Oe=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],z=()=>{const o=x({items:Oe});return e.jsx(d,{children:e.jsxs(i,{orientation:"horizontalStart",children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:o,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{children:t})})})}),e.jsx(i.Hint,{children:"Choose a form of contact"})]})})]})})};z.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const LabelPosition = () => {
  const model = useSelectModel({
    items: options,
  });

  return (
    <Flex>
      <FormField orientation="horizontalStart">
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>Choose a form of contact</FormField.Hint>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;const He=m({maxHeight:_(200)}),$e=["Atlanta (United States)","Amsterdam (Europe)","Austin (United States)","Beaverton (United States)","Belfast (Europe)","Berlin (Europe)","Boston (United States)","Boulder (United States)","Chicago (United States)","Dallas (United States)","Denver (United States)","Dublin (Europe)","Irvine (United States)","Minneapolis (United States)","New York (United States)","Orlando (United States)","Palo Alto (United States)","Philadelphia (United States)","Pleasanton (United States)","Raleigh (United States)","San Francisco (United States)","San Mateo (United States)","Stockholm (Europe)","Toronto (Canada)","Victoria (Canada)","Vienna (Europe)","Warsaw (Europe)","Washington, DC (United States)","Zurich (Europe)"],J=()=>e.jsx(ye,{children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Choose a City"}),e.jsx(i.Field,{children:e.jsxs(n,{items:$e,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{cs:He,children:e.jsx(n.List,{children:o=>e.jsx(n.Item,{children:o})})})})]})})]})});J.__RAW__=`import {FormField} from '@workday/canvas-kit-react/form-field';
import {Box} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const selectCardStyles = createStyles({
  maxHeight: px2rem(200),
});

const cities = [
  'Atlanta (United States)',
  'Amsterdam (Europe)',
  'Austin (United States)',
  'Beaverton (United States)',
  'Belfast (Europe)',
  'Berlin (Europe)',
  'Boston (United States)',
  'Boulder (United States)',
  'Chicago (United States)',
  'Dallas (United States)',
  'Denver (United States)',
  'Dublin (Europe)',
  'Irvine (United States)',
  'Minneapolis (United States)',
  'New York (United States)',
  'Orlando (United States)',
  'Palo Alto (United States)',
  'Philadelphia (United States)',
  'Pleasanton (United States)',
  'Raleigh (United States)',
  'San Francisco (United States)',
  'San Mateo (United States)',
  'Stockholm (Europe)',
  'Toronto (Canada)',
  'Victoria (Canada)',
  'Vienna (Europe)',
  'Warsaw (Europe)',
  'Washington, DC (United States)',
  'Zurich (Europe)',
];

export const MenuHeight = () => {
  return (
    <Box>
      <FormField>
        <FormField.Label>Choose a City</FormField.Label>
        <FormField.Field>
          <Select items={cities}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card cs={selectCardStyles}>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Box>
  );
};
`;const We=m({flexDirection:"column"}),Ge=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],X=()=>{const[o,t]=l.useState(""),a=r=>{t(r.target.value)};return e.jsxs(d,{cs:We,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ge,children:[e.jsx(n.Input,{placeholder:"Make a Selection",onChange:r=>a(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})})]})})]}),"Selected Value: ",o]})};X.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <Select.Input placeholder="Make a Selection" onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {item => {
                    return <Select.Item>{item}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};
`;const Ne=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],K=()=>{const[o,t]=l.useState("medium"),a=l.useRef(null),r=s=>{t(s.target.value)},h=()=>{a&&a.current&&(console.log(a),a.current.focus())};return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ne,children:[e.jsx(i.Input,{as:n.Input,ref:a,onChange:s=>r(s)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:s=>e.jsx(n.Item,{children:s})})})})]})})]}),e.jsx(ae,{onClick:h,children:"Focus Select"})]})};K.__RAW__=`import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const RefForwarding = () => {
  // @ts-ignore
  const [value, setValue] = React.useState('medium');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (ref && ref.current) {
      console.log(ref);
      ref.current.focus();
    }
  };

  return (
    <>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} ref={ref} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Select</PrimaryButton>
    </>
  );
};
`;const Ye=m({flexDirection:"column"}),qe=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],Z=()=>{const[o,t]=l.useState(""),a=r=>{t(r.target.value)};return e.jsxs(d,{cs:Ye,children:[e.jsxs(i,{isRequired:!0,children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:qe,children:[e.jsx(i.Input,{as:n.Input,onChange:r=>a(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})})]})})]}),"Selected Value: ",o]})};Z.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField isRequired>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      Selected Value: {value}
    </Flex>
  );
};
`;const re={formfieldInputStyles:m({width:_(300)}),selectCardStyles:m({maxHeight:_(200)})},ze=[{text:"Activity Stream",id:"activity-stream",icon:Fe},{text:"Avatar",id:"avatar",icon:fe},{text:"Upload Cloud",id:"upload-cloud",icon:je},{text:"User",id:"user",icon:be}],Q=()=>{const o=x({items:ze}),t=o.navigation.getItem(o.state.selectedIds[0],o);return e.jsx(d,{children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:o,children:[e.jsx(i.Input,{as:n.Input,cs:re.formfieldInputStyles,inputStartIcon:t?.value.icon}),e.jsx(n.Popper,{children:e.jsx(n.Card,{cs:re.selectCardStyles,children:o.state.items.length>0&&e.jsx(n.List,{children:a=>e.jsxs(n.Item,{"data-id":a.id,children:[e.jsx(n.Item.Icon,{icon:a.icon}),a.text]})})})})]})})]})})};Q.__RAW__=`import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {cloudArrowUpIcon, cloudIcon, commentIcon, userIcon} from '@workday/canvas-system-icons-web';

const styleOverrides = {
  formfieldInputStyles: createStyles({
    width: px2rem(300),
  }),
  selectCardStyles: createStyles({
    maxHeight: px2rem(200),
  }),
};

const customOptions = [
  {text: 'Activity Stream', id: 'activity-stream', icon: commentIcon},
  {text: 'Avatar', id: 'avatar', icon: cloudIcon},
  {text: 'Upload Cloud', id: 'upload-cloud', icon: cloudArrowUpIcon},
  {text: 'User', id: 'user', icon: userIcon},
];

export const WithIcons = () => {
  const model = useSelectModel({
    items: customOptions,
  });
  const selectedItem = model.navigation.getItem(model.state.selectedIds[0], model);
  return (
    <Flex>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input
              as={Select.Input}
              cs={styleOverrides.formfieldInputStyles}
              inputStartIcon={selectedItem?.value.icon}
            />
            <Select.Popper>
              <Select.Card cs={styleOverrides.selectCardStyles}>
                {model.state.items.length > 0 && (
                  <Select.List>
                    {item => (
                      <Select.Item data-id={item.id}>
                        <Select.Item.Icon icon={item.icon} />
                        {item.text}
                      </Select.Item>
                    )}
                  </Select.List>
                )}
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
`;function oe(o){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...se(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(me,{of:Xe}),`
`,e.jsx(t.h1,{id:"canvas-kit-select",children:"Canvas Kit Select"}),`
`,e.jsx(t.p,{children:"Select inputs allow users to choose one option from a list of items or type a matching option."}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/inputs/select",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select"}),` supports a
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#dynamic-items",children:"dynamic API"}),` where you
pass an array of items via the `,e.jsx(t.code,{children:"items"}),` prop and provide a render function to display the items. The
items may be provided as an
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#array-of-strings",children:"array of strings"}),` or an
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#array-of-objects",children:"array of objects"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select"})," should be used in tandem with ",e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` where the
`,e.jsx(t.code,{children:"Select"})," wraps the ",e.jsx(t.code,{children:"FormField"})," element and the ",e.jsx(t.code,{children:"FormField"})," element wraps the children of ",e.jsx(t.code,{children:"Select"}),` to
meet accessibility standards. This ensures the `,e.jsx(t.code,{children:"label"})," text from ",e.jsx(t.code,{children:"FormField"}),` is attached to the
`,e.jsx(t.code,{children:"Select.Input"})," and read out as a group for voiceover."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Select items={options}>
  <FormField label="Your Label">
    <Select.Input onChange={e => handleChange(e)} id="contact-select" />
    <Select.Popper>
      <Select.Card>
        <Select.List>{item => <Select.Item>{item.id}</Select.Item>}</Select.List>
      </Select.Card>
    </Select.Popper>
  </FormField>
</Select>
`})}),`
`,e.jsx(c,{code:U}),`
`,e.jsxs(t.p,{children:["Our example uses ",e.jsx(t.a,{href:"(https://react.dev/learn/state-a-components-memory)",children:"React state"}),` to track the
value of the `,e.jsx(t.code,{children:"Select"}),"."]}),`
`,e.jsx(t.h3,{id:"hoisted-model",children:"Hoisted Model"}),`
`,e.jsxs(t.p,{children:["By default, ",e.jsx(t.code,{children:"Select"}),` will create and use its own model internally. Alternatively, you may configure
your own model with `,e.jsx(t.code,{children:"useSelectModel"})," and pass it to ",e.jsx(t.code,{children:"Select"})," via the ",e.jsx(t.code,{children:"model"}),` prop. This pattern is
referred to as
`,e.jsx(t.a,{href:"?path=/docs/guides-compound-components--docs#configuring-a-model",children:"hoisting the model"}),`
and provides direct access to its `,e.jsx(t.code,{children:"state"})," and ",e.jsx(t.code,{children:"events"})," outside of the ",e.jsx(t.code,{children:"Select"})," component."]}),`
`,e.jsx(t.p,{children:`In this example, we set up external observation of the model state and create an external button to
trigger an event to change the selected item.`}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: If your array of objects uses an ",e.jsx(t.code,{children:"id"})," property and a ",e.jsx(t.code,{children:"text"}),` property there is no need to use
the helper functions of `,e.jsx(t.code,{children:"getId"})," or ",e.jsx(t.code,{children:"getTextValue"}),". The collection system and the ",e.jsx(t.code,{children:"Select"}),` use these
properties by default for keyboard navigation and selected the `,e.jsx(t.code,{children:"id"})," based on the item clicked."]})}),`
`,e.jsx(c,{code:Y}),`
`,e.jsx(t.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(t.code,{children:"vertical"}),"."]}),`
`,e.jsx(c,{code:z}),`
`,e.jsx(t.h3,{id:"required",children:"Required"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"required"})," prop of the wrapping ",e.jsx(t.code,{children:"FormField"})," to ",e.jsx(t.code,{children:"true"}),` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(c,{code:Z}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"disabled"})," prop of ",e.jsx(t.code,{children:"Select.Input"})," to prevent users from interacting with it."]}),`
`,e.jsx(c,{code:O}),`
`,e.jsx(t.h3,{id:"disabled-items",children:"Disabled Items"}),`
`,e.jsx(t.p,{children:"In order to disable items and prevent users from interacting with them:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"nonInteractiveIds"})," prop of ",e.jsx(t.code,{children:"Select"})," to an array of disabled item ",e.jsx(t.code,{children:"id"}),`s. If your items
are an array of `,e.jsx(t.code,{children:"strings"}),` this will be just the text value. If your items are an array of
`,e.jsx(t.code,{children:"objects"}),", this will be that value of the ",e.jsx(t.code,{children:"id"}),` property. This will disable interaction for those
items and exclude them from type-ahead.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"aria-disabled"})," attribute of all disabled ",e.jsx(t.code,{children:"Select.Item"}),"s to ",e.jsx(t.code,{children:"true"}),`. This ensures the
items are styled as disabled.`]}),`
`]}),`
`]}),`
`,e.jsxs(t.p,{children:["The following example adds the string value of the items we want disable to ",e.jsx(t.code,{children:"nonInteractiveIds"}),` and
sets `,e.jsx(t.code,{children:"aria-disabled"})," for the disabled items."]}),`
`,e.jsx(c,{code:H}),`
`,e.jsx(t.h3,{id:"with-icons",children:"With Icons"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"Select.Item.Icon"})," to render an icon for a ",e.jsx(t.code,{children:"Select.Item"}),". The ",e.jsx(t.code,{children:"icon"})," prop for ",e.jsx(t.code,{children:"Select.Item.Icon"}),`
accepts `,e.jsx(t.a,{href:"?path=/docs/assets-icons--docs#system-icon-list",children:"system icons"})," from ",e.jsx(t.code,{children:"@workday/canvas-system-icons-web"}),"."]}),`
`,e.jsxs(t.p,{children:["In order to render the icon for the selected item in the ",e.jsx(t.code,{children:"Select.Input"}),":"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Obtain a reference to the ",e.jsx(t.code,{children:"model"})," by registering your ",e.jsx(t.code,{children:"items"})," with ",e.jsx(t.code,{children:"useSelectModel"}),"."]}),`
`,e.jsxs(t.li,{children:[`Get the selected item:
`,e.jsx(t.code,{children:"const selectedItem = model.navigation.getItem(model.state.selectedIds[0], model)"})]}),`
`,e.jsxs(t.li,{children:[`Pass the icon for the selected item to the input:
`,e.jsx(t.code,{children:"<Select.Input inputStartIcon={selectedItem.value.icon}>"})]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: ",e.jsx(t.code,{children:"data-id"})," on ",e.jsx(t.code,{children:"Select.Item"})," must match the ",e.jsx(t.code,{children:"id"}),` property in your array of objects. This
ensures proper keyboard handling and type-ahead.`]})}),`
`]}),`
`,e.jsx(c,{code:Q}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: that ",e.jsx(t.code,{children:"Select.Input"})," will only render an icon if an item is selected."]})}),`
`,e.jsx(t.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"grow"})," prop of the wrapping ",e.jsx(t.code,{children:"FormField"})," to ",e.jsx(t.code,{children:"true"})," to configure the ",e.jsx(t.code,{children:"Select.Input"}),` to expand
to the width of its container.`]}),`
`,e.jsx(c,{code:N}),`
`,e.jsx(t.h3,{id:"menu-height",children:"Menu Height"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select.Card"})," has a default maximum height of ",e.jsx(t.code,{children:"300px"}),` to restrict the height of the dropdown menu.
Set its `,e.jsx(t.code,{children:"maxHeight"})," prop to override this value."]}),`
`,e.jsx(c,{code:J}),`
`,e.jsx(t.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select.Input"})," supports ",e.jsx(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will
forward `,e.jsx(t.code,{children:"ref"})," to its underlying ",e.jsx(t.code,{children:'<input type="text" role="combobox">'})," element."]}),`
`,e.jsx(c,{code:K}),`
`,e.jsx(t.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"error"})," prop of the wrapping ",e.jsx(t.code,{children:"FormField"})," to ",e.jsx(t.code,{children:'"caution"'})," or ",e.jsx(t.code,{children:'"error"'})," to set the ",e.jsx(t.code,{children:"Select"}),` to
the caution or error state, respectively. You will also need to set the `,e.jsx(t.code,{children:"hintId"})," and ",e.jsx(t.code,{children:"hintText"}),`
props on the `,e.jsx(t.code,{children:"FormField"})," to meet accessibility standards. You must set an ",e.jsx(t.code,{children:"id"}),` attribute on the
`,e.jsx(t.code,{children:"Select.Input"})," element that matches the value of ",e.jsx(t.code,{children:"inputId"})," set on the ",e.jsx(t.code,{children:"FormField"}),` element. These
attributes ensure that the caution message is associated to the `,e.jsx(t.code,{children:"Select"})," and read out by voiceover."]}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: The Select container component, ",e.jsx(t.code,{children:"Select"}),", must wrap ",e.jsx(t.code,{children:"FormField"})," to ensure ",e.jsx(t.code,{children:"Select.Input"}),` is
styled correctly.`]})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Select items={options}>
  <FormField label="Contact" inputId="contact-id-formfield">
    <Select.Input id="contact-id-formfield" />
    ...
  </FormField>
</Select>
`})}),`
`,e.jsx(t.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(t.p,{children:"Use the alert state when a selection is valid but there is additional information."}),`
`,e.jsx(c,{code:A}),`
`,e.jsx(t.h4,{id:"error",children:"Error"}),`
`,e.jsx(t.p,{children:"Use the error state when the selection is no longer valid."}),`
`,e.jsx(c,{code:$}),`
`,e.jsx(t.h3,{id:"initial-selected-item",children:"Initial Selected Item"}),`
`,e.jsxs(t.p,{children:["You can set ",e.jsx(t.code,{children:"initialSelectedIds"})," to the value that you want initially selected."]}),`
`,e.jsx(c,{code:q}),`
`,e.jsx(t.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(t.p,{children:["You can change the placeholder text by passing in a string value to the ",e.jsx(t.code,{children:"placeholder"}),` attribute on
the `,e.jsx(t.code,{children:"Select.Input"}),"."]}),`
`,e.jsx(c,{code:X}),`
`,e.jsx(t.h3,{id:"fetching-dynamic-items",children:"Fetching Dynamic Items"}),`
`,e.jsxs(t.p,{children:["It's common to load items from a server call. Hoisting the ",e.jsx(t.code,{children:"model"}),` and setting your items on state
allows you to pass those items to your `,e.jsx(t.code,{children:"model"}),`. You can leverage React state to set your items on
load as well as displaying a placeholder indicating when items are loaded.`]}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: In this case we need to use ",e.jsx(t.code,{children:"getId"})," and ",e.jsx(t.code,{children:"getTextValue"}),` because our data doesn't have the
properties of `,e.jsx(t.code,{children:"id"})," or ",e.jsx(t.code,{children:"text"}),". Using these helper functions sets the ",e.jsx(t.code,{children:"serverId"})," to be ",e.jsx(t.code,{children:"id"}),` and
`,e.jsx(t.code,{children:"label"})," to be ",e.jsx(t.code,{children:"text"}),"."]})}),`
`,e.jsx(c,{code:W}),`
`,e.jsx(t.h3,{id:"complex",children:"Complex"}),`
`,e.jsxs(t.p,{children:[`When registering items in an array of objects, it's common to have the text that is displayed to the
user be different than an id. In this example, `,e.jsx(t.code,{children:"serverId"})," and ",e.jsx(t.code,{children:"label"}),` properties need to be remapped
to `,e.jsx(t.code,{children:"id"})," and ",e.jsx(t.code,{children:"text"})," hence the usage of ",e.jsx(t.code,{children:"getId"})," and ",e.jsx(t.code,{children:"getTextValue"}),`. If your object has the properties
`,e.jsx(t.code,{children:"text"})," and ",e.jsx(t.code,{children:"id"}),", there would be no need for this."]}),`
`,e.jsx(c,{code:D}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: By default, the identifier and text value are ",e.jsx(t.code,{children:"id"})," and ",e.jsx(t.code,{children:"text"}),` properties respectively. If
your data object for each item is different, provide a `,e.jsx(t.code,{children:"getId"})," or ",e.jsx(t.code,{children:"getTextValue"}),` function to the
model config. For example:`]})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const items = [
  {
    serverId: '1',
    label: 'First Option',
  },
];

<Select items={items} getId={item => item.serverId} getTextValue={item => item.label}>
  {/* etc */}
</Select>;
`})}),`
`,e.jsx(t.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(t.p,{children:[`The Select can be a
`,e.jsx(t.a,{href:"https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable",rel:"nofollow",children:"controlled input"}),`
component by passing the `,e.jsx(t.code,{children:"value"})," and ",e.jsx(t.code,{children:"onChange"})," to either the ",e.jsx(t.code,{children:"<Select>"}),` component or the
`,e.jsx(t.code,{children:"<Select.Input>"})," component. Internally, the ",e.jsx(t.code,{children:"Select.Input"})," watches for changes on the ",e.jsx(t.code,{children:"value"}),` React
prop as well as the `,e.jsx(t.code,{children:"value"})," DOM property and will update the model accordingly."]}),`
`,e.jsx(c,{code:B}),`
`,e.jsxs(t.h3,{id:"when-to-use-getid-or-gettextvalue",children:["When to use ",e.jsx(t.code,{children:"getId"}),", or ",e.jsx(t.code,{children:"getTextValue"})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"getId"}),`: This is an optional function to return the id of an item. If not provided, the default
function will return the `,e.jsx(t.code,{children:"id"}),` property from the object of each item. If you did not provide
`,e.jsx(t.code,{children:"items"}),`, do not override this function. Instead provide static items via JSX. the list will create
an internal array of items where `,e.jsx(t.code,{children:"id"})," is the only property and the default ",e.jsx(t.code,{children:"getId"}),` will return the
desired result. `,e.jsxs(t.strong,{children:["Note: If your array of objects has a different property for ",e.jsx(t.code,{children:"id"}),`, like
`,e.jsx(t.code,{children:"serverId"}),", use this function to set the id."]})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const options = [{text: 'Pizza', serverId: 'pizza-1'}, {text: 'Cheeseburger', serverId: 'cheeseburger'}]
<Select items={options} getId={(item) => item.serverId}>
  <FormField label="Your Label">
    <Select.Input onChange={e => handleChange(e)} id="contact-select" />
    <Select.Popper>
      <Select.Card>
        <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
      </Select.Card>
    </Select.Popper>
  </FormField>
</Select>
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"getTextValue"}),`: Optional function to return the text representation of an item. If not provided,
the default function will return the `,e.jsx(t.code,{children:"text"}),` property of the object of each item or an empty string
if there is no `,e.jsx(t.code,{children:"text"})," property. If you did not provide ",e.jsx(t.code,{children:"items"}),`, do not override this function.
`,e.jsxs(t.strong,{children:["Note: If your array of objects has a different property for ",e.jsx(t.code,{children:"text"}),", like ",e.jsx(t.code,{children:"label"}),`, use this
function to set the text.`]})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const options = [{label: 'Pizza', id: 'pizza-1'}, {label: 'Cheeseburger', id: 'cheeseburger'}]
<Select items={options} getTextValue={(item) => item.label}>
  <FormField label="Your Label">
    <Select.Input onChange={e => handleChange(e)} id="contact-select" />
    <Select.Popper>
      <Select.Card>
        <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
      </Select.Card>
    </Select.Popper>
  </FormField>
</Select>
`})}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"grouped-items",children:"Grouped Items"}),`
`,e.jsxs(t.p,{children:["In order to group items, you have to use the static API in combination of the ",e.jsx(t.code,{children:"Menu.Group"})," component."]}),`
`,e.jsx(c,{code:G}),`
`,e.jsx(t.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(t.p,{children:["Select and its subcomponents support custom styling via the ",e.jsx(t.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(he,{name:"Select",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(pe,{file:"./cypress/component/Select.spec.tsx",initialSpecs:{type:"file",name:"Select",children:[{type:"describe",name:"Select",children:[{type:"describe",name:'given the "Menu Height" story is rendered',children:[{type:"describe",name:"when the select input is focused",children:[{type:"describe",name:"when a character is typed (provided no other characters have been typed in the last 500ms), the select should select the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary)",children:[{type:"describe",name:'when "s" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read the first option beginning with "s" ("San Francisco (United States)")'}]}]},{type:"describe",name:'when "s{500ms delay}s" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read the second option beginning with "s" ("San Mateo (United States)")'}]}]},{type:"describe",name:'when "s{500ms delay}d" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read the first option beginning with "d" ("Dallas (United States)")'}]}]}]},{type:"describe",name:"when multiple characters are typed in rapid succession (<500ms between keystrokes), thus forming a string, and multiple options begin with that string, the select should retain the currently selected option for as long as possible (instead of cycling selection between matching options with each keystroke)",children:[{type:"describe",name:'when "sa" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read "San Francisco (United States)"'}]}]},{type:"describe",name:'when "san " is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read "San Francisco (United States)"'}]}]},{type:"describe",name:'when "san m" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read "San Mateo (United States)"'}]}]}]}]},{type:"describe",name:"when the menu is opened",children:[{type:"describe",name:"when a character is typed (provided no other characters have been typed in the last 500ms), the select should advance assistive focus to the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary) and scroll that option into view",children:[{type:"describe",name:'when "s" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "San Francisco (United States)" option is fully visible'}]}]},{type:"describe",name:'when "s{500ms delay}s" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "San Mateo (United States)" option is fully visible'}]}]},{type:"describe",name:'when "s{500ms delay}d" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "Dallas (United States)" option is fully visible'}]}]}]},{type:"describe",name:"when multiple characters are typed in rapid succession (<500ms between keystrokes), thus forming a string, and multiple options begin with that string, the select should retain assistive focus on the currently focused option for as long as possible (instead of cycling focus between matching options with each keystroke)",children:[{type:"describe",name:'when "sa" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "San Francisco (United States)" option'}]}]},{type:"describe",name:'when "san " is typed',children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should set assistive focus to the "San Francisco (United States)" option'}]}]},{type:"describe",name:'when "san m" is typed',children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should set assistive focus to the "San Mateo (United States)" option'}]}]}]}]},{type:"describe",name:"when the menu is opened and the selected option is initially out of view, the menu should scroll the selected option into view and center it if possible",children:[{type:"describe",name:'when "Dallas (United States)" is selected and the menu is opened',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "Dallas (United States)" option is centered in view'}]}]}]}]},{type:"describe",name:'given the "Basic" story is rendered',children:[{type:"it",name:"should have a combobox role"},{type:"it",name:'should have an `aria-popup="listbox"`'},{type:"it",name:'should have an `aria-expanded="false"`'},{type:"it",name:'should have an `aria-autocomplete="list"`'},{type:"describe",name:"when the menu is opened",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the first option ("E-mail")'}]},{type:"describe",name:'when focus is advanced to the second option ("Phone")',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the second option ("Phone")'}]},{type:"describe",name:'when the menu is closed WITHOUT selecting the newly focused option ("Phone")',children:[{type:"it",name:"should not have an aria-activedescendant attribute"},{type:"describe",name:"when the menu is re-opened AFTER it has fully closed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the second option ("Phone") that is where the cursor was'}]}]}]}]}]},{type:"describe",name:"when spacebar is typed and no value exists",children:[{type:"it",name:"should open the menu"}]}]},{type:"describe",name:'given the "Disabled Options" story with a disabled option',children:[{type:"describe",name:"when the menu is opened",children:[{type:"describe",name:'the "Fax (disabled)" option',children:[{type:"it",name:'should have an aria-disabled attribute set to "true"'}]},{type:"describe",name:"when the down arrow key is pressed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to second enabled option ("Phone")'}]},{type:"describe",name:"when the down arrow key is pressed 1 more times",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the fourth option down ("Mail") since focus will have skipped one disabled option ("Fax")'}]}]}]}]}]},{type:"describe",name:'given the "Disabled" story is rendered',children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"the select input",children:[{type:"it",name:"should be disabled"}]}]},{type:"describe",name:'given the "Ref Forwarding" story is rendered',children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"the select input",children:[{type:"it",name:"should receive focus via ref forwarding when the button is clicked"}]}]},{type:"describe",name:'given the "Complex" story is rendered',children:[{type:"describe",name:"when a value is selected with an id and text",children:[{type:"it",name:"should display the correct id and value of the selected Phone"}]}]},{type:"describe",name:'given the "FetchingDynamicItems" story is rendered',children:[{type:"describe",name:"when Get Items is clicked",children:[{type:"it",name:"should change the value of the select to 456 (the id) after 1.5 seconds"}]}]},{type:"describe",name:'given the "MenuHeight" story is rendered',children:[{type:"describe",name:"when down arrow is typed enough times to scroll",children:[{type:"describe",name:"when Boulder is reached via the arrow key",children:[{type:"it",name:"should show Boulder (United States)"}]}]}]},{type:"describe",name:'given the "Disabled Options" story is rendered',children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should not have an aria-activedescendant attribute"},{type:"describe",name:"when the select button is clicked",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"the select",children:[{type:"it",name:'should have an aria-expanded attribute set to "true"'}]},{type:"describe",name:"the menu",children:[{type:"it",name:"should be visible"},{type:"it",name:'should have an aria-activedescendant attribute with the same value as the id of the first option ("E-mail")'}]},{type:"describe",name:'the first option ("E-Mail")',children:[{type:"it",name:'should have an aria-selected attribute set to "true"'}]},{type:"describe",name:'when the "Phone" option (with the value "phone") is clicked',children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should read "Phone"'},{type:"it",name:"should re-acquire focus"}]},{type:"describe",name:"the menu",children:[{type:"it",name:"should not be visible"}]},{type:"describe",name:"when the menu is opened again",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "Phone" option'}]}]}]}]},{type:"describe",name:"when the select input is focused and down arrow key is pressed",children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should have an aria-expanded attribute set to "true"'}]},{type:"describe",name:"the menu",children:[{type:"it",name:"should be visible"}]},{type:"describe",name:"when the down arrow key is pressed for a second time",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "Phone" option'}]},{type:"describe",name:"when the down arrow key is pressed for a third time",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "Mail" option and skip disabled fax'}]}]}]}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:"should be visible"},{type:"it",name:"should have E-Mail selected"}]},{type:"describe",name:"when mail option is selected using arrow keys",children:[{type:"it",name:'should read "Mail"'},{type:"it",name:"should re-acquire focus"},{type:"it",name:"the menu should not be visible after selection"}]}]},{type:"describe",name:"when the up arrow key is pressed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "E-mail" option'}]}]}]}]}]},name:"Select"})]})}function Je(o={}){const{wrapper:t}={...se(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(oe,{...o})}):oe(o)}const Xe={title:"Components/Inputs/Select",component:n,tags:["autodocs"],parameters:{docs:{page:Je}}},S={render:A},y={render:U},F={render:D},f={render:B},j={render:O},b={render:H},g={render:$},v={render:N},I={render:z},C={render:Q},w={render:Z},k={render:J},L={render:Y},P={render:K},M={render:W},E={render:X},R={render:q},T={render:G};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: ComplexExample
}`,...F.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ControlledExample
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: DisabledOptionsExample
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: WithIconsExample
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: MenuHeightExample
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: HoistedModelExample
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: FetchingDynamicItemsExample
}`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: PlaceholderExample
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: InitialSelectedItemExample
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: GroupedItemsExample
}`,...T.parameters?.docs?.source}}};const Tn=["Caution","Basic","Complex","Controlled","Disabled","DisabledOptions","Error","Grow","LabelPosition","WithIcons","Required","MenuHeight","HoistedModel","RefForwarding","FetchingDynamicItems","Placeholder","InitialSelectedItem","GroupedItems"];export{y as Basic,S as Caution,F as Complex,f as Controlled,j as Disabled,b as DisabledOptions,g as Error,M as FetchingDynamicItems,T as GroupedItems,v as Grow,L as HoistedModel,R as InitialSelectedItem,I as LabelPosition,k as MenuHeight,E as Placeholder,P as RefForwarding,w as Required,C as WithIcons,Tn as __namedExportsOrder,Xe as default};
