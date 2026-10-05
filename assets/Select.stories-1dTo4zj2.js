import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as oe}from"./index-3YbjYt95.js";import{ae as he}from"./index-DF9Ggjdz.js";import{E as c,c as me}from"./union-2luBZJC5.js";import{S as pe}from"./Specifications-BECCyb7R.js";import{e as d}from"./index-IfJi-UCQ.js";import{F as a}from"./Flex-Cyn9vvSA.js";import{c as h}from"./cs-CmRirKzJ.js";import{F as i}from"./FormField-BCMc2Lm9.js";import{S as n,u}from"./Select-CBYJ7LyR.js";import{g as xe}from"./index-jCBjnmNg.js";import{S as A}from"./SecondaryButton-CC5NDP49.js";import{a as ue}from"./useMount-CAK2BN3_.js";import{P as le}from"./PrimaryButton-DWe722ah.js";import{p as D}from"./px2rem-C0KbprIx.js";import{M as ee}from"./Menu-DZ-Dz4t0.js";import{B as je}from"./TypeLevelComponents-C9UvwkIr.js";import{B as Se}from"./Box-DebRNAPR.js";import{c as be,a as ge}from"./comment-Cd-gN6zy.js";import{c as ye}from"./cloud-arrow-up-BLHe5iIq.js";import{u as Fe}from"./user-Tu8DwaZY.js";import"./iframe-D8j4w_od.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bprhvld6.js";import"./Svg-Cf-JAqGF.js";import"./components-CSN_KxHX.js";import"./StatusIndicator-DNu_SPzg.js";import"./Text-BxYrzwL9.js";import"./mergeStyles-CrKfjMZ1.js";import"./flex-DSGq5Zo5.js";import"./grid-Db0Kv7HN.js";import"./cornerShape-BeK2DPVP.js";import"./Card-BlbEtVCh.js";import"./ExternalHyperlink-BIzPchcs.js";import"./Hyperlink-CyWEgMZu.js";import"./external-link-ChL2h1Cn.js";import"./lerna-dE9_d90c.js";import"./CanvasProvider-Ce6SqFpo.js";import"./index-kj8ZfNNN.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./Tooltip-D1g1a8So.js";import"./useTooltip-Bk1NBL5b.js";import"./getTransformFromPlacement-C0H7XrZY.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-CHcRDM8i.js";import"./Popper-BMBM4fBh.js";import"./TertiaryButton-Ng42FoqW.js";import"./BaseButton-BmnV2apc.js";import"./Button-BmDyQ_0V.js";import"./ColorPicker-CYt52KkP.js";import"./ColorInput-C3jnUfrR.js";import"./check-small-BqSDQIle.js";import"./index-Cvke4sRE.js";import"./TextInput-Ley04CKf.js";import"./types-DXdjelYI.js";import"./check-Ds6vsrAM.js";import"./Expandable-DBYZI0lK.js";import"./Avatar-D4w5MqCC.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-C_7pURTd.js";import"./Popup-C13Xc0gr.js";import"./x-B1faap_l.js";import"./usePopupTarget-8XLAjRU5.js";import"./useInitialFocus-bLTg3kQA.js";import"./useReturnFocus-nFq-J5O1.js";import"./useFocusRedirect-DKub_36o.js";import"./Breadcrumbs-DI-DGb6t.js";import"./useOverflowListTarget-BZoNQBpX.js";import"./useListItemRegister-CGyUiflc.js";import"./bundle.esm-C4XAbbi1.js";import"./OverflowTooltip-Dy_iAyJn.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Table-DhtTSpoO.js";import"./Combobox-Dl4nXGFr.js";import"./useComboboxInputConstrained-BJG1iCV_.js";import"./InputGroup-DHnK6RHI.js";import"./x-small-Cfgu7dLY.js";import"./chevron-up-small-eLBWEyPl.js";import"./chevron-down-small-CZ_fmdFJ.js";import"./useListItemSelect-DyiPCdbs.js";const fe=h({flexDirection:"column"}),Ie=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation","Thisisalongstringwithnobreaksandwillwrap"],V=()=>{const[s,t]=d.useState(""),l=r=>{console.log("change",r.currentTarget.value),t(r.target.value)};return e.jsxs(a,{cs:fe,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ie,children:[e.jsx(i.Input,{as:n.Input,onChange:l}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})})]})})]}),"Selected Value: ",s]})};V.__RAW__=`import React from 'react';

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
`;const ve=h({flexDirection:"column"}),we=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],U=()=>{const[s,t]=d.useState(""),l=r=>{t(r.target.value)};return e.jsxs(a,{cs:ve,children:[e.jsxs(i,{error:"caution",children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:we,children:[e.jsx(i.Input,{as:n.Input,onChange:r=>l(r),id:"alert-select"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})}),e.jsx(i.Hint,{children:"Please choose a form of contact."})]})})]}),"Selected value: ",s]})};U.__RAW__=`import React from 'react';

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
`;const Ce=h({flexDirection:"column"}),te=[{serverId:"email",label:"E-mail"},{serverId:"phone",label:"Phone"},{serverId:"fax",label:"Fax"},{serverId:"mail",label:"Mail"},{serverId:"mobile",label:"Mobile Phone"},{serverId:"oasis",label:"The Ontologically Anthropocentric Sensory Immersive Simulation"}],_=()=>{const[s,t]=d.useState(""),[l,r]=d.useState(""),m=o=>{r(o.target.value),t(te.find(x=>x.serverId===o.target.value).label)};return e.jsxs(a,{cs:Ce,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:te,getId:o=>o.serverId,getTextValue:o=>o.label,children:[e.jsx(i.Input,{as:n.Input,onChange:o=>m(o)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:o=>e.jsx(n.Item,{children:o.label})})})})]})})]}),e.jsxs("p",{children:["Id: ",l]}),e.jsxs("p",{children:["Value: ",s]})]})};_.__RAW__=`import React from 'react';

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
`;const ke=h({flexDirection:"column"}),ne=[{serverId:"email",label:"E-mail"},{serverId:"phone",label:"Phone"},{serverId:"fax",label:"Fax"},{serverId:"mail",label:"Mail"},{serverId:"mobile",label:"Mobile Phone"},{serverId:"oasis",label:"The Ontologically Anthropocentric Sensory Immersive Simulation"}],B=()=>{const[s,t]=d.useState(""),[l,r]=d.useState(""),m=o=>{t(o.currentTarget.value),r(ne.find(x=>x.serverId===o.currentTarget.value)?.label||"")};return e.jsxs(a,{cs:ke,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:ne,getId:o=>o.serverId,getTextValue:o=>o.label,children:[e.jsx(i.Input,{as:n.Input,onChange:m,value:s,name:"contact"}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:o=>e.jsx(n.Item,{children:o.label})})})})]})})]}),e.jsxs("p",{children:["Id: ",s]}),e.jsxs("p",{children:["Label: ",l]}),e.jsxs(a,{cs:{gap:xe.md},children:[e.jsx(A,{onClick:o=>{t("fax")},children:'Set to "Fax"'}),e.jsx(A,{onClick:o=>{t("")},children:"Clear"})]})]})};B.__RAW__=`import React from 'react';

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
`;const Le=h({flexDirection:"column"}),Pe=["E-mail","Phone","Fax (disabled)","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],O=()=>{const[s,t]=d.useState(""),l=r=>{t(r.target.value)};return e.jsx(a,{cs:Le,children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Pe,nonInteractiveIds:["Fax (disabled)"],children:[e.jsx(i.Input,{as:n.Input,disabled:!0,onChange:r=>l(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{"aria-disabled":r==="Fax (disabled)"?!0:void 0,children:r})})})})]})})]})})};O.__RAW__=`import React from 'react';

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
`;const Me=h({flexDirection:"column"}),Re=["E-mail","Phone","Fax (disabled)","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],H=()=>{const[s,t]=d.useState(""),l=r=>{t(r.target.value)};return e.jsxs(a,{cs:Me,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Re,nonInteractiveIds:["Fax (disabled)","Mobile Phone"],children:[e.jsx(i.Input,{as:n.Input,onChange:r=>l(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{"aria-disabled":r==="Mobile Phone"||r==="Fax (disabled)"?!0:void 0,children:r})})})})]})})]}),"Selected Value: ",s]})};H.__RAW__=`import React from 'react';

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
`;const Ee=h({flexDirection:"column"}),Te=["E-mail","Phone","Fax (disabled)","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],W=()=>{const[s,t]=d.useState(""),l=r=>{t(r.target.value)};return e.jsxs(a,{cs:Ee,children:[e.jsxs(i,{error:"error",children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Te,nonInteractiveIds:["Fax (disabled)"],children:[e.jsx(i.Input,{as:n.Input,onChange:r=>l(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{"aria-disabled":r==="Fax (disabled)"?!0:void 0,children:r})})})}),e.jsx(i.Hint,{children:"Fax is disabled. Please choose a different option."})]})})]}),"Selected Value: ",s]})};W.__RAW__=`import React from 'react';

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
`;const De=h({flexDirection:"column",maxWidth:D(300)}),Ae=[{label:"The Lion King",serverId:"123",Year:"2019",Runtime:"118 min"},{label:"Mowgli: Legend of the Jungle",serverId:"234",Year:"2018",Runtime:"104 min"},{label:"Doctor Strange",serverId:"345",Year:"2016",Runtime:"115 min"},{label:"John Wick",Year:"2014",serverId:"456",Runtime:"101 min"},{label:"The Notebook",serverId:"567",Year:"2004",Runtime:"123 min"}],$=()=>{const[s,t]=d.useState("456"),[l,r]=d.useState([]),[m,o]=d.useState("idle"),x=d.useRef(),de=u({items:l,getTextValue:p=>p.label,getId:p=>p.serverId,initialSelectedIds:[s]}),ce=l.find(p=>p.serverId===s)?.label||"";function ae(){o("loading"),x.current=setTimeout(()=>{o("success"),r(Ae)},1500)}return ue(()=>()=>{clearTimeout(x.current)}),e.jsxs(a,{cs:De,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Choose a Film"}),e.jsx(i.Field,{children:e.jsxs(n,{model:de,children:[e.jsx(i.Input,{as:n.Input,onChange:p=>{t(p.target.value)},placeholder:m}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:p=>e.jsx(n.Item,{children:p.label})})})})]})})]}),e.jsxs("div",{"data-testid":"selected-id",children:["Selected Id: ",s]}),e.jsxs("div",{"data-testid":"selected-value",children:["Selected value: ",ce]}),e.jsx(le,{onClick:()=>{ae()},children:"Get Items"})]})};$.__RAW__=`import React from 'react';

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
`;const Ve=[{id:"first",text:"First Item"},{id:"second",text:"Second Item"},{id:"third",text:"Third Item"},{id:"fourth",text:"Fourth Item"}],G=()=>e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ve,getId:s=>s.id,getTextValue:s=>s.text,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsxs(n.List,{children:[e.jsxs(ee.Group,{title:"First Group",children:[e.jsx(n.Item,{"data-id":"first",children:"First Item"}),e.jsx(n.Item,{"data-id":"second",children:"Second Item"})]}),e.jsxs(ee.Group,{title:"Second Group",children:[e.jsx(n.Item,{"data-id":"third",children:"Third Item (with a really, really, really long label)"}),e.jsx(n.Item,{"data-id":"fourth",children:"Fourth Item"})]})]})})})]})})]});G.__RAW__=`import React from 'react';

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
  return (
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
                  <Select.Item data-id="fourth">Fourth Item</Select.Item>
                </Menu.Group>
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField.Field>
    </FormField>
  );
};
`;const Ue=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],q=()=>{const s=u({items:Ue});return e.jsx(a,{children:e.jsxs(i,{grow:!0,children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:s,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{children:t})})})})]})})]})})};q.__RAW__=`import React from 'react';

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
`;const _e=[{text:"E-mail",id:"email-1"},{text:"Phone",id:"phone-2"},{text:"Fax",id:"fax-3"},{text:"Mail",id:"mail-4"},{text:"Mobile Phone",id:"mobile-phone-5"}],N=()=>{const s=u({items:_e,initialSelectedIds:["fax-3"]});return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:s,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{children:t.text})})})})]})})]}),e.jsxs(je,{size:"small",children:["Selected Value: ",s.state.selectedIds[0]]}),e.jsx(A,{onClick:()=>{s.events.select({id:"phone-2"})},children:"Select Phone Item"})]})};N.__RAW__=`import React from 'react';

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
`;const Be=h({flexDirection:"column"}),ie=[{id:"b310c757b2d341f99d40d76f4d563c5b",descriptor:"Arabic",languageCode:"ar",label:"Arabic",nativeLanguageName:"العربية"},{id:"a675a6b6e22d100017d7fe2a784d1255",descriptor:"Bulgarian (Bulgaria)",languageCode:"bg_BG",label:"Bulgarian (Bulgaria)",nativeLanguageName:"български (Република България)"},{id:"da594226446c11de98360015c5e6daf6",descriptor:"English (United States)",languageCode:"en_US",label:"English (United States)",nativeLanguageName:"English"}],Y=()=>{const[s,t]=d.useState("English (United States)"),[l,r]=d.useState("da594226446c11de98360015c5e6daf6"),m=o=>{r(o.target.value),t(ie.find(x=>x.id===o.target.value).label)};return e.jsxs(a,{cs:Be,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:ie,initialSelectedIds:["da594226446c11de98360015c5e6daf6"],getId:o=>o.id,getTextValue:o=>o.label,children:[e.jsx(n.Input,{onChange:o=>m(o)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:o=>e.jsx(n.Item,{children:o.label})})})})]})})]}),e.jsxs("p",{children:["Id: ",l]}),e.jsxs("p",{children:["Value: ",s]})]})};Y.__RAW__=`import React from 'react';

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
`;const Oe=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],z=()=>{const s=u({items:Oe});return e.jsx(a,{children:e.jsxs(i,{orientation:"horizontalStart",children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:s,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:t=>e.jsx(n.Item,{children:t})})})}),e.jsx(i.Hint,{children:"Choose a form of contact"})]})})]})})};z.__RAW__=`import React from 'react';

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
`;const He=h({maxHeight:D(200)}),We=["Atlanta (United States)","Amsterdam (Europe)","Austin (United States)","Beaverton (United States)","Belfast (Europe)","Berlin (Europe)","Boston (United States)","Boulder (United States)","Chicago (United States)","Dallas (United States)","Denver (United States)","Dublin (Europe)","Irvine (United States)","Minneapolis (United States)","New York (United States)","Orlando (United States)","Palo Alto (United States)","Philadelphia (United States)","Pleasanton (United States)","Raleigh (United States)","San Francisco (United States)","San Mateo (United States)","Stockholm (Europe)","Toronto (Canada)","Victoria (Canada)","Vienna (Europe)","Warsaw (Europe)","Washington, DC (United States)","Zurich (Europe)"],K=()=>e.jsx(Se,{children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Choose a City"}),e.jsx(i.Field,{children:e.jsxs(n,{items:We,children:[e.jsx(i.Input,{as:n.Input}),e.jsx(n.Popper,{children:e.jsx(n.Card,{cs:He,children:e.jsx(n.List,{children:s=>e.jsx(n.Item,{children:s})})})})]})})]})});K.__RAW__=`import {FormField} from '@workday/canvas-kit-react/form-field';
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
`;const $e=h({flexDirection:"column"}),Ge=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],J=()=>{const[s,t]=d.useState(""),l=r=>{t(r.target.value)};return e.jsxs(a,{cs:$e,children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ge,children:[e.jsx(n.Input,{placeholder:"Make a Selection",onChange:r=>l(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})})]})})]}),"Selected Value: ",s]})};J.__RAW__=`import React from 'react';

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
`;const qe=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],X=()=>{const[s,t]=d.useState("medium"),l=d.useRef(null),r=o=>{t(o.target.value)},m=()=>{l&&l.current&&(console.log(l),l.current.focus())};return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:qe,children:[e.jsx(i.Input,{as:n.Input,ref:l,onChange:o=>r(o)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:o=>e.jsx(n.Item,{children:o})})})})]})})]}),e.jsx(le,{onClick:m,children:"Focus Select"})]})};X.__RAW__=`import React from 'react';

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
`;const Ne=h({flexDirection:"column"}),Ye=["E-mail","Phone","Fax","Mail","Mobile Phone","The Ontologically Anthropocentric Sensory Immersive Simulation"],Z=()=>{const[s,t]=d.useState(""),l=r=>{t(r.target.value)};return e.jsxs(a,{cs:Ne,children:[e.jsxs(i,{isRequired:!0,children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{items:Ye,children:[e.jsx(i.Input,{as:n.Input,onChange:r=>l(r)}),e.jsx(n.Popper,{children:e.jsx(n.Card,{children:e.jsx(n.List,{children:r=>e.jsx(n.Item,{children:r})})})})]})})]}),"Selected Value: ",s]})};Z.__RAW__=`import React from 'react';

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
`;const re={formfieldInputStyles:h({width:D(300)}),selectCardStyles:h({maxHeight:D(200)})},ze=[{text:"Activity Stream",id:"activity-stream",icon:be},{text:"Avatar",id:"avatar",icon:ge},{text:"Upload Cloud",id:"upload-cloud",icon:ye},{text:"User",id:"user",icon:Fe}],Q=()=>{const s=u({items:ze}),t=s.navigation.getItem(s.state.selectedIds[0],s);return e.jsx(a,{children:e.jsxs(i,{children:[e.jsx(i.Label,{children:"Contact"}),e.jsx(i.Field,{children:e.jsxs(n,{model:s,children:[e.jsx(i.Input,{as:n.Input,cs:re.formfieldInputStyles,inputStartIcon:t?.value.icon}),e.jsx(n.Popper,{children:e.jsx(n.Card,{cs:re.selectCardStyles,children:s.state.items.length>0&&e.jsx(n.List,{children:l=>e.jsxs(n.Item,{children:[e.jsx(n.Item.Icon,{icon:l.icon}),l.text]})})})})]})})]})})};Q.__RAW__=`import React from 'react';

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
                      <Select.Item>
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
`;function se(s){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...oe(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(he,{of:Je}),`
`,e.jsx(t.h1,{id:"canvas-kit-select",children:"Canvas Kit Select"}),`
`,e.jsx(t.p,{children:"Select inputs allow users to choose one option from a list of items or type a matching option."}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/inputs/select",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select"})," supports a ",e.jsx(t.a,{href:"?path=/docs/features-collections--docs#dynamic-items",children:"dynamic API"}),`
where you pass an array of items via the `,e.jsx(t.code,{children:"items"}),` prop and provide a render function to display the
items. The items may be provided as an
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#array-of-strings",children:"array of strings"}),` or an
`,e.jsx(t.a,{href:"?path=/docs/features-collections--docs#array-of-objects",children:"array of objects"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select"})," should be used in tandem with ",e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),` to ensure proper
label association and screen reader support. Wrap `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select"})})," with ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField"})}),`, and compose
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),` so the combobox receives the field label. Include
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Popper"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Card"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),", and ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})}),"."]}),`
`,e.jsx(c,{code:V}),`
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
`,e.jsx(c,{code:N}),`
`,e.jsx(t.h3,{id:"label-position-horizontal",children:"Label Position Horizontal"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"orientation"}),` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `,e.jsx(t.code,{children:"vertical"}),"."]}),`
`,e.jsx(c,{code:z}),`
`,e.jsx(t.h3,{id:"required",children:"Required"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"isRequired"})," prop of the wrapping ",e.jsx(t.code,{children:"FormField"})," to ",e.jsx(t.code,{children:"true"}),` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.`]}),`
`,e.jsx(c,{code:Z}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"disabled"})," prop on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),` to prevent users from interacting
with the combobox.`]}),`
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
`,e.jsxs(t.p,{children:["In order to render the icon for the selected item on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),":"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Obtain a reference to the ",e.jsx(t.code,{children:"model"})," by registering your ",e.jsx(t.code,{children:"items"})," with ",e.jsx(t.code,{children:"useSelectModel"}),"."]}),`
`,e.jsxs(t.li,{children:[`Get the selected item:
`,e.jsx(t.code,{children:"const selectedItem = model.navigation.getItem(model.state.selectedIds[0], model)"})]}),`
`,e.jsxs(t.li,{children:[`Pass the icon for the selected item to the input:
`,e.jsx(t.code,{children:"<FormField.Input as={Select.Input} inputStartIcon={selectedItem?.value.icon} />"})]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Dynamic ",e.jsx(t.code,{children:"{item => <Select.Item>}"})," registration already uses the collection ",e.jsx(t.code,{children:"id"}),`. Set
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"data-id"})})," only on static ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})})," children (see ",e.jsx(t.a,{href:"#grouped-items",children:"Grouped Items"}),`), and
keep it equal to that id (`,e.jsx(t.code,{children:"id"})," or ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"getId"})}),")."]}),`
`]}),`
`,e.jsx(c,{code:Q}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: that ",e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})," will only render an icon if an item is selected."]})}),`
`,e.jsx(t.h3,{id:"grow",children:"Grow"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"grow"})," prop of the wrapping ",e.jsx(t.code,{children:"FormField"})," to ",e.jsx(t.code,{children:"true"})," to configure the ",e.jsx(t.code,{children:"Select.Input"}),` to expand
to the width of its container.`]}),`
`,e.jsx(c,{code:q}),`
`,e.jsx(t.h3,{id:"menu-height",children:"Menu Height"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select.Card"})," has a default maximum height of ",e.jsx(t.code,{children:"300px"}),` to restrict the height of the dropdown menu.
Set its `,e.jsx(t.code,{children:"maxHeight"})," prop to override this value."]}),`
`,e.jsx(c,{code:K}),`
`,e.jsx(t.h3,{id:"ref-forwarding",children:"Ref Forwarding"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Select.Input"})," supports ",e.jsx(t.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),`. It will
forward `,e.jsx(t.code,{children:"ref"})," to its underlying ",e.jsx(t.code,{children:'<input type="text" role="combobox">'})," element."]}),`
`,e.jsx(c,{code:X}),`
`,e.jsx(t.h3,{id:"error-states",children:"Error States"}),`
`,e.jsxs(t.p,{children:["Form Field provides error and caution states for Select. Set the ",e.jsx(t.code,{children:"error"}),` prop on Form Field to
`,e.jsx(t.code,{children:'"error"'})," or ",e.jsx(t.code,{children:'"caution"'})," and use ",e.jsx(t.code,{children:"FormField.Hint"}),` to provide messages. See
`,e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs#error-states",children:"Form Field's Error documentation"}),` for examples and
accessibility guidance.`]}),`
`,e.jsx(t.h4,{id:"caution",children:"Caution"}),`
`,e.jsx(t.p,{children:"Use the alert state when a selection is valid but there is additional information."}),`
`,e.jsx(c,{code:U}),`
`,e.jsx(t.h4,{id:"error",children:"Error"}),`
`,e.jsx(t.p,{children:"Use the error state when the selection is no longer valid."}),`
`,e.jsx(c,{code:W}),`
`,e.jsx(t.h3,{id:"initial-selected-item",children:"Initial Selected Item"}),`
`,e.jsxs(t.p,{children:["You can set ",e.jsx(t.code,{children:"initialSelectedIds"})," to the value that you want initially selected."]}),`
`,e.jsx(c,{code:Y}),`
`,e.jsx(t.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(t.p,{children:["You can change the placeholder text by passing a string to the ",e.jsx(t.code,{children:"placeholder"}),` prop on
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),`. Placeholder text is not a substitute for
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Label"})}),"."]}),`
`,e.jsx(c,{code:J}),`
`,e.jsx(t.h3,{id:"fetching-dynamic-items",children:"Fetching Dynamic Items"}),`
`,e.jsxs(t.p,{children:["It's common to load items from a server call. Hoisting the ",e.jsx(t.code,{children:"model"}),` and setting your items on state
allows you to pass those items to your `,e.jsx(t.code,{children:"model"}),`. You can leverage React state to set your items on
load as well as displaying a placeholder indicating when items are loaded.`]}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: In this case we need to use ",e.jsx(t.code,{children:"getId"})," and ",e.jsx(t.code,{children:"getTextValue"}),` because our data doesn't have the
properties of `,e.jsx(t.code,{children:"id"})," or ",e.jsx(t.code,{children:"text"}),". Using these helper functions sets the ",e.jsx(t.code,{children:"serverId"})," to be ",e.jsx(t.code,{children:"id"}),` and
`,e.jsx(t.code,{children:"label"})," to be ",e.jsx(t.code,{children:"text"}),"."]})}),`
`,e.jsx(c,{code:$}),`
`,e.jsx(t.h3,{id:"complex",children:"Complex"}),`
`,e.jsxs(t.p,{children:[`When registering items in an array of objects, it's common to have the text that is displayed to the
user be different than an id. In this example, `,e.jsx(t.code,{children:"serverId"})," and ",e.jsx(t.code,{children:"label"}),` properties need to be remapped
to `,e.jsx(t.code,{children:"id"})," and ",e.jsx(t.code,{children:"text"})," hence the usage of ",e.jsx(t.code,{children:"getId"})," and ",e.jsx(t.code,{children:"getTextValue"}),`. If your object has the properties
`,e.jsx(t.code,{children:"text"})," and ",e.jsx(t.code,{children:"id"}),", there would be no need for this."]}),`
`,e.jsx(c,{code:_}),`
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Note: By default, the identifier and text value are ",e.jsx(t.code,{children:"id"})," and ",e.jsx(t.code,{children:"text"}),` properties respectively. If
your data object for each item is different, provide `,e.jsx(t.code,{children:"getId"})," and/or ",e.jsx(t.code,{children:"getTextValue"}),`. If a custom
`,e.jsx(t.code,{children:"getId"})," does not return the display text, also pass ",e.jsx(t.code,{children:"getTextValue"}),` — otherwise the model uses
`,e.jsx(t.code,{children:"getId"})," for type-ahead and the selected value. For example:"]})}),`
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
`,e.jsx(t.code,{children:"serverId"}),`, use this function to set the id. If that function does not return the display text,
also pass `,e.jsx(t.code,{children:"getTextValue"}),"."]})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const options = [{text: 'Pizza', serverId: 'pizza-1'}, {text: 'Cheeseburger', serverId: 'cheeseburger'}]
<FormField>
  <FormField.Label>Your Label</FormField.Label>
  <FormField.Field>
    <Select items={options} getId={(item) => item.serverId} getTextValue={(item) => item.text}>
      <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
      <Select.Popper>
        <Select.Card>
          <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
        </Select.Card>
      </Select.Popper>
    </Select>
  </FormField.Field>
</FormField>
`})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"getTextValue"}),`: Optional function to return the text representation of an item. If not provided,
the default function will return the `,e.jsx(t.code,{children:"text"}),` property of the object of each item or an empty string
if there is no `,e.jsx(t.code,{children:"text"})," property. If you did not provide ",e.jsx(t.code,{children:"items"}),`, do not override this function.
`,e.jsxs(t.strong,{children:["Note: If your array of objects has a different property for ",e.jsx(t.code,{children:"text"}),", like ",e.jsx(t.code,{children:"label"}),`, use this
function to set the text.`]})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const options = [{label: 'Pizza', id: 'pizza-1'}, {label: 'Cheeseburger', id: 'cheeseburger'}]
<FormField>
  <FormField.Label>Your Label</FormField.Label>
  <FormField.Field>
    <Select items={options} getTextValue={(item) => item.label}>
      <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
      <Select.Popper>
        <Select.Card>
          <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
        </Select.Card>
      </Select.Popper>
    </Select>
  </FormField.Field>
</FormField>
`})}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"grouped-items",children:"Grouped Items"}),`
`,e.jsxs(t.p,{children:["In order to group items, use the static item API with ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu.Group"})})," inside ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),`, and
still pass `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"items"})})," whose ids match each ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})})," ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"data-id"})}),"."]}),`
`,e.jsx(c,{code:G}),`
`,e.jsx(t.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(t.p,{children:["Select and its subcomponents support custom styling via the ",e.jsx(t.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(t.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The primary accessibility goal for ",e.jsx(t.code,{children:"Select"}),` is a visible, persistent label and a single choice from
a known list that assistive technology identifies as a combobox. Use `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select"})}),` when the user must
pick one option. For multiple selections, use `,e.jsx(t.a,{href:"/docs/preview-multiselect--docs",children:e.jsx(t.strong,{children:"MultiSelect"})}),`.
For a value outside a fixed list, use `,e.jsx(t.a,{href:"/features/combobox/",children:e.jsx(t.strong,{children:"Combobox"})}),`. See
`,e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),` for label,
hint, error, and required wiring. This follows the WAI-ARIA
`,e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/",rel:"nofollow",children:"Select-Only Combobox"}),`
pattern.`]}),`
`,e.jsx(t.h3,{id:"minimum-accessible-structure",children:"Minimum Accessible Structure"}),`
`,e.jsxs(t.p,{children:["Build on the ",e.jsx(t.a,{href:"#basic-example",children:"Basic Example"}),": label first, then ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select"})}),` inside
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Field"})}),", with the combobox, popup, list, and items in this order."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';

const options = ['E-mail', 'Phone', 'Fax'];

<FormField>
  <FormField.Label>Contact</FormField.Label>
  <FormField.Field>
    <Select items={options}>
      <FormField.Input as={Select.Input} />
      <Select.Popper>
        <Select.Card>
          <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
        </Select.Card>
      </Select.Popper>
    </Select>
  </FormField.Field>
</FormField>;
`})}),`
`,e.jsxs(t.p,{children:["Every ",e.jsx(t.code,{children:"Select"})," requires ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField"})}),", a visible ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Label"})}),`, and
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),` so the combobox has a programmatically determinable name,
relationships, and instructions. See
`,e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField's accessibility documentation"}),` for hint,
error, and required wiring.`]}),`
`,e.jsx(t.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(t.p,{children:["Canvas Kit applies these automatically when you compose ",e.jsx(t.code,{children:"Select"})," with ",e.jsx(t.code,{children:"FormField"}),` subcomponents.
`,e.jsx(t.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"ARIA and DOM"})," (",e.jsx(t.em,{children:"applied by subcomponents"}),"):"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Input"})}),": Visual ",e.jsx(t.code,{children:"<input>"})," with ",e.jsx(t.code,{children:'role="combobox"'}),", ",e.jsx(t.code,{children:'aria-haspopup="listbox"'}),`,
`,e.jsx(t.code,{children:"aria-expanded"})," from menu visibility, ",e.jsx(t.code,{children:'aria-autocomplete="list"'})," (do not change to ",e.jsx(t.code,{children:'"none"'}),`),
`,e.jsx(t.code,{children:"aria-controls"})," pointing at the listbox id (",e.jsx(t.code,{children:"{modelId}-list"}),"), and ",e.jsx(t.code,{children:"aria-activedescendant"}),` while
the list is open (removed when the list is closed). `,e.jsx(t.code,{children:"autoComplete"})," is ",e.jsx(t.code,{children:'"off"'}),`. Keyboard characters
are not inserted into the input; type-ahead is handled by the model. `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Label"})}),` (via
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input"})}),`) is the accessible name of the combobox — do not add a second name on the
listbox.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Hidden form input"}),`: A second input holds the selected id(s) for form submission. It is
`,e.jsx(t.code,{children:"aria-hidden"}),", has ",e.jsx(t.code,{children:"tabIndex={-1}"}),", and is not in the tab order. ",e.jsx(t.code,{children:"onChange"})," and ",e.jsx(t.code,{children:"name"}),` apply to
this input. Focus and blur on a `,e.jsx(t.code,{children:"ref"})," are forwarded to the visual combobox."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),": ",e.jsx(t.code,{children:'role="listbox"'})," with an id that matches the combobox ",e.jsx(t.code,{children:"aria-controls"}),`. Options
are not in the tab order; keyboard focus stays on the combobox. Listbox labelling is library-owned
— do not set `,e.jsx(t.code,{children:"aria-labelledby"})," (or ",e.jsx(t.code,{children:"aria-label"}),") on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})}),": ",e.jsx(t.code,{children:'role="option"'})," and ",e.jsx(t.code,{children:"aria-selected"}),` from selection state. Disabled options need
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"aria-disabled"})})," from application code (see ",e.jsx(t.strong,{children:"Accessibility Requirements"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu.Group"})})," (when used inside ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),"): ",e.jsx(t.code,{children:'role="group"'})," with ",e.jsx(t.code,{children:"aria-labelledby"}),`
referencing the group heading (`,e.jsx(t.code,{children:"title"})," or ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu.Group.Heading"})}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item.Icon"})})," and the caret / start icons on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Input"})}),`: Canvas Kit icons use
`,e.jsx(t.code,{children:'role="presentation"'})," and ",e.jsx(t.code,{children:'focusable="false"'}),". Decorative icons need no extra attributes."]}),`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:[e.jsx(t.code,{children:"disabled"})," on ",e.jsx(t.code,{children:"Select.Input"})]}),": Maps to the native ",e.jsx(t.code,{children:"disabled"}),` attribute on both inputs; the
combobox is removed from the tab order.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"ref"})}),": Forwards to the visual combobox (",e.jsx(t.code,{children:'<input type="text" role="combobox">'}),")."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Keyboard"})," (",e.jsxs(t.em,{children:["select-only combobox; focus remains on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Input"})})]}),"):"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx("kbd",{children:"Tab"})," / ",e.jsx("kbd",{children:"Shift"}),"+",e.jsx("kbd",{children:"Tab"}),` move to and from the combobox (native tab order).
Other keys are prevented from editing the input.`]}),`
`,e.jsxs(t.li,{children:["Clicking ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Label"})}),` moves focus to the combobox. Clicking the combobox opens or closes
the list.`]}),`
`,e.jsxs(t.li,{children:[e.jsx("kbd",{children:"ArrowDown"})," / ",e.jsx("kbd",{children:"ArrowUp"}),` open the list. While the list is open, those keys move
the active option (skipping ids in `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"nonInteractiveIds"})}),"). ",e.jsx("kbd",{children:"Home"})," / ",e.jsx("kbd",{children:"End"}),` move
to the first or last option while the list is open.`]}),`
`,e.jsxs(t.li,{children:[e.jsx("kbd",{children:"Space"}),` opens the list when it is closed and no type-ahead string is in progress. While
the list is open and type-ahead is empty, `,e.jsx("kbd",{children:"Space"}),` selects the active option and closes
the list.`]}),`
`,e.jsx(t.li,{children:`Printable characters type-ahead: with the list closed, matching options are selected; with the
list open, assistive focus moves to the matching option. Consecutive keys within 500ms form a
search string.`}),`
`,e.jsxs(t.li,{children:[e.jsx("kbd",{children:"Enter"})," while the list is open selects the active option (unless ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"aria-disabled"})}),`) and
closes the list in single-select mode. It does not submit the form while the list is open.`]}),`
`,e.jsxs(t.li,{children:[e.jsx("kbd",{children:"Escape"})," closes the list. Blur also hides the list. After close, ",e.jsx(t.code,{children:"aria-activedescendant"}),`
is removed; the active option returns to the selected item when one is selected.`]}),`
`,e.jsx(t.li,{children:"Activating an option with the pointer keeps focus on the combobox and closes the list."}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Screen reader expectations"})," (",e.jsx(t.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`On focus, assistive technology announces the field label and, when applicable: required state,
invalid state (`,e.jsx(t.code,{children:'error="error"'}),"), hint or error text via ",e.jsx(t.code,{children:"aria-describedby"}),`, and the current
selected text (or the placeholder when nothing is selected).`]}),`
`,e.jsxs(t.li,{children:["The control is announced as a combobox. Collapsed vs expanded follows ",e.jsx(t.code,{children:"aria-expanded"}),`. While the
list is open, the active option is exposed through `,e.jsx(t.code,{children:"aria-activedescendant"}),"."]}),`
`,e.jsxs(t.li,{children:["Options are announced with selected or not-selected state (",e.jsx(t.code,{children:"aria-selected"}),`). Disabled options are
announced as disabled when `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"aria-disabled"})})," is set."]}),`
`,e.jsxs(t.li,{children:["The Caution state is visual only — ",e.jsx(t.code,{children:"aria-invalid"})," is ",e.jsx(t.strong,{children:"not"})," set for ",e.jsx(t.code,{children:'error="caution"'}),"."]}),`
`,e.jsx(t.li,{children:"Disabled comboboxes may be announced as unavailable and are skipped in the tab order."}),`
`,e.jsx(t.li,{children:"The hidden form input and decorative icons are not announced."}),`
`]}),`
`,e.jsxs(t.p,{children:[`For rendered label, input, and hint association markup, see the DOM examples in
`,e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs#built-in-behaviors",children:"FormField's Built-in Behaviors"}),"."]}),`
`,e.jsx(t.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(t.p,{children:["Required in application code for an accessible ",e.jsx(t.code,{children:"Select"}),". Rows marked ",e.jsx(t.em,{children:"(conditional)"}),` apply only when
the situation matches—otherwise omit.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"If no design spec is provided:"})," use a visible ",e.jsx(t.code,{children:"FormField.Label"}),", wrap ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select"})}),` with
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField"})}),", use ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),", include ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Popper"})}),`,
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Card"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),", and ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})}),", and pass ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"items"})}),". Omit ",e.jsx(t.code,{children:"isHidden"}),`,
omit a custom `,e.jsx(t.code,{children:"id"})," unless testing or composition requires it, omit a ",e.jsx(t.code,{children:"ref"}),` unless programmatic focus
is required, omit `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"disabled"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"nonInteractiveIds"})}),`, icons, grouped list items, and a custom
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"placeholder"})})," unless the spec includes them."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Programmatic focus"})," ",e.jsx(t.em,{children:"(conditional — omit by default)"}),":"]}),`
`,e.jsxs(t.p,{children:[`Use a ref when the product needs to move focus to the combobox after an action. Do not attach a
`,e.jsx(t.code,{children:"ref"})," or call ",e.jsx(t.code,{children:"focus()"}),` unless the design or developer asks for it. See
`,e.jsx(t.a,{href:"#ref-forwarding",children:"Ref Forwarding"})," under Usage for a complete Storybook example (imports, ",e.jsx(t.code,{children:"ref"}),` on
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),", and a button that calls ",e.jsx(t.code,{children:"focus()"}),")."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Disabled options"})," ",e.jsx(t.em,{children:"(conditional)"}),":"]}),`
`,e.jsxs(t.p,{children:["When an option is unavailable, set ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"nonInteractiveIds"})})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select"})})," and ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"aria-disabled"})}),`
on those **`,e.jsx(t.code,{children:"Select.Item"}),"**s. See ",e.jsx(t.a,{href:"#disabled-items",children:"Disabled Items"}),` under Usage for a complete
Storybook example. Do not use styling alone.`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Requirement"}),e.jsx(t.th,{children:"How to satisfy"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Input wiring"}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})})," for the combobox, with ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Popper"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Card"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),", and ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})}),". See ",e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"})," for label, hint, error, and required wiring"]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Disabled combobox ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"disabled"})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),". See ",e.jsx(t.a,{href:"#disabled",children:"Disabled"})]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Disabled options ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"nonInteractiveIds"})})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select"})})," (ids skipped by keyboard and type-ahead) ",e.jsx(t.strong,{children:"and"})," ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"aria-disabled"})})," on those **",e.jsx(t.code,{children:"Select.Item"}),"**s. See ",e.jsx(t.a,{href:"#disabled-items",children:"Disabled Items"})]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Grouped list items ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:["Keep ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"items"})}),". Inside ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),", render static ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu.Group"})})," (",e.jsx(t.code,{children:"title"})," or ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu.Group.Heading"})}),") and **",e.jsx(t.code,{children:"Select.Item"}),"**s with matching ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"data-id"})})," — not ",e.jsx(t.code,{children:"{item => …}"}),". See ",e.jsx(t.a,{href:"#grouped-items",children:"Grouped Items"})]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Option icons ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item.Icon"})})," on each item; ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"inputStartIcon"})})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})})," for the selected item. Decorative icons need no extra attributes; meaning beyond the label must be text"]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Custom placeholder ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"placeholder"})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})})," only as short prompt text—never as the only name. Default is ",e.jsx(t.code,{children:'"Choose an option"'})]})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:["Programmatic focus ",e.jsx(t.em,{children:"(conditional)"})]}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"ref"})," on ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})})," and call ",e.jsx(t.code,{children:"focus()"})," when moving focus to the field after an action—omit by default (see ",e.jsx(t.strong,{children:"Programmatic focus"})," above)"]})]})]})]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"REQUIRED:"})," visible label, ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})}),`, popup list composition
(`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Popper"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Card"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.List"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})}),"), ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"items"})}),`.
Default list rendering is `,e.jsx(t.code,{children:"{item => <Select.Item>{item}</Select.Item>}"})," (or ",e.jsx(t.code,{children:"item.text"}),` /
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"getTextValue"})}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"CONDITIONAL:"})," disabled combobox, disabled options (",e.jsx(t.code,{children:"nonInteractiveIds"})," + ",e.jsx(t.code,{children:"aria-disabled"}),`),
grouped list items (`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"items"})})," plus static ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu.Group"})})," / ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"data-id"})}),` children — do not
omit `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"items"})}),"), option icons, custom placeholder, programmatic focus via ",e.jsx(t.code,{children:"ref"}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"getId"})}),` and
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"getTextValue"})})," when item shape is not ",e.jsx(t.code,{children:"{id, text}"})," (always pass ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"getTextValue"})}),` if custom
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"getId"})})," is not the display text), ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"data-id"})})," on static JSX **",e.jsx(t.code,{children:"Select.Item"}),`**s. See
`,e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs#accessibility",children:"FormField accessibility"}),` for shared FormField
conditionals (hint/error, required, stable `,e.jsx(t.code,{children:"id"}),")."]}),`
`]}),`
`,e.jsx(t.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(t.p,{children:["Do ",e.jsx(t.strong,{children:"not"})," generate code that does the following (see ",e.jsx(t.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsxs(t.strong,{children:["Missing ",e.jsx(t.code,{children:"FormField"})," wiring"]}),": Do not use ",e.jsx(t.code,{children:"Select"})," without ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField"})}),` and
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Label"})}),", and do not render a bare ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Input"})})," when a ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField"})}),` is
present. Use `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormField.Input as={Select.Input}"})})," (see ",e.jsx(t.strong,{children:"Minimum accessible structure"}),`). For
shared FormField anti-patterns (manual ARIA, placeholder-only labels, color-only errors, broken ID
references), see `,e.jsx(t.a,{href:"?path=/docs/components-inputs-form-field--docs#anti-patterns",children:"FormField Anti-Patterns"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Duplicating combobox or listbox ARIA"}),": Do not set ",e.jsx(t.code,{children:"role"}),", ",e.jsx(t.code,{children:"aria-haspopup"}),", ",e.jsx(t.code,{children:"aria-expanded"}),`,
`,e.jsx(t.code,{children:"aria-autocomplete"})," (including ",e.jsx(t.code,{children:'"none"'}),"), ",e.jsx(t.code,{children:"aria-controls"}),", ",e.jsx(t.code,{children:"aria-activedescendant"}),`,
`,e.jsx(t.code,{children:"autoComplete"}),", or listbox ",e.jsx(t.code,{children:"role"})," / ",e.jsx(t.code,{children:"id"})," / ",e.jsx(t.code,{children:"aria-labelledby"})," / ",e.jsx(t.code,{children:"aria-label"}),`. Do not make
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"Select.Item"})})," focusable — the active option is ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"aria-activedescendant"})})," on the combobox."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Wrong component"}),": Do not use a native ",e.jsx(t.code,{children:"<select>"}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Combobox"})}),", ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"TextInput"})}),`,
or `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"FormFieldGroup"})}),` for a single submitted list value. Use
`,e.jsx(t.a,{href:"/docs/preview-multiselect--docs",children:e.jsx(t.strong,{children:"MultiSelect"})})," when more than one option can be selected."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Item identity / grouping"}),": Do not set ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"data-id"})})," on ",e.jsx(t.code,{children:"{item => <Select.Item>}"}),`. Do not omit
`,e.jsx(t.strong,{children:e.jsx(t.code,{children:"items"})})," when grouping, and do not group with a render callback alone — use ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"Menu.Group"})}),`
and `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"data-id"})})," (see ",e.jsx(t.strong,{children:"Static item ids"})," and ",e.jsx(t.strong,{children:"Grouped list items"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Free-text keyboard on the combobox"}),": Do not add ",e.jsx(t.code,{children:"onKeyDown"}),` that types into the input or calls
`,e.jsx(t.code,{children:"preventDefault"})," on ",e.jsx("kbd",{children:"Tab"})," — Select is select-only."]}),`
`]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(me,{name:"Select",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(pe,{file:"./cypress/component/Select.spec.tsx",initialSpecs:{type:"file",name:"Select",children:[{type:"describe",name:"Select",children:[{type:"describe",name:'given the "Menu Height" story is rendered',children:[{type:"describe",name:"when the select input is focused",children:[{type:"describe",name:"when a character is typed (provided no other characters have been typed in the last 500ms), the select should select the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary)",children:[{type:"describe",name:'when "s" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read the first option beginning with "s" ("San Francisco (United States)")'}]}]},{type:"describe",name:'when "s{500ms delay}s" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read the second option beginning with "s" ("San Mateo (United States)")'}]}]},{type:"describe",name:'when "s{500ms delay}d" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read the first option beginning with "d" ("Dallas (United States)")'}]}]}]},{type:"describe",name:"when multiple characters are typed in rapid succession (<500ms between keystrokes), thus forming a string, and multiple options begin with that string, the select should retain the currently selected option for as long as possible (instead of cycling selection between matching options with each keystroke)",children:[{type:"describe",name:'when "sa" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read "San Francisco (United States)"'}]}]},{type:"describe",name:'when "san " is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read "San Francisco (United States)"'}]}]},{type:"describe",name:'when "san m" is typed',children:[{type:"describe",name:"the select button",children:[{type:"it",name:'should read "San Mateo (United States)"'}]}]}]}]},{type:"describe",name:"when the menu is opened",children:[{type:"describe",name:"when a character is typed (provided no other characters have been typed in the last 500ms), the select should advance assistive focus to the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary) and scroll that option into view",children:[{type:"describe",name:'when "s" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "San Francisco (United States)" option is fully visible'}]}]},{type:"describe",name:'when "s{500ms delay}s" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "San Mateo (United States)" option is fully visible'}]}]},{type:"describe",name:'when "s{500ms delay}d" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "Dallas (United States)" option is fully visible'}]}]}]},{type:"describe",name:"when multiple characters are typed in rapid succession (<500ms between keystrokes), thus forming a string, and multiple options begin with that string, the select should retain assistive focus on the currently focused option for as long as possible (instead of cycling focus between matching options with each keystroke)",children:[{type:"describe",name:'when "sa" is typed',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "San Francisco (United States)" option'}]}]},{type:"describe",name:'when "san " is typed',children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should set assistive focus to the "San Francisco (United States)" option'}]}]},{type:"describe",name:'when "san m" is typed',children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should set assistive focus to the "San Mateo (United States)" option'}]}]}]}]},{type:"describe",name:"when the menu is opened and the selected option is initially out of view, the menu should scroll the selected option into view and center it if possible",children:[{type:"describe",name:'when "Dallas (United States)" is selected and the menu is opened',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should scroll so that the "Dallas (United States)" option is centered in view'}]}]}]}]},{type:"describe",name:'given the "Basic" story is rendered',children:[{type:"it",name:"should have a combobox role"},{type:"it",name:'should have an `aria-popup="listbox"`'},{type:"it",name:'should have an `aria-expanded="false"`'},{type:"it",name:'should have an `aria-autocomplete="list"`'},{type:"describe",name:"when the menu is opened",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the first option ("E-mail")'}]},{type:"describe",name:'when focus is advanced to the second option ("Phone")',children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the second option ("Phone")'}]},{type:"describe",name:'when the menu is closed WITHOUT selecting the newly focused option ("Phone")',children:[{type:"it",name:"should not have an aria-activedescendant attribute"},{type:"describe",name:"when the menu is re-opened AFTER it has fully closed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the second option ("Phone") that is where the cursor was'}]}]}]}]}]},{type:"describe",name:"when spacebar is typed and no value exists",children:[{type:"it",name:"should open the menu"}]}]},{type:"describe",name:'given the "Disabled Options" story with a disabled option',children:[{type:"describe",name:"when the menu is opened",children:[{type:"describe",name:'the "Fax (disabled)" option',children:[{type:"it",name:'should have an aria-disabled attribute set to "true"'}]},{type:"describe",name:"when the down arrow key is pressed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to second enabled option ("Phone")'}]},{type:"describe",name:"when the down arrow key is pressed 1 more times",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the fourth option down ("Mail") since focus will have skipped one disabled option ("Fax")'}]}]}]}]}]},{type:"describe",name:'given the "Disabled" story is rendered',children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"the select input",children:[{type:"it",name:"should be disabled"}]}]},{type:"describe",name:'given the "Ref Forwarding" story is rendered',children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"the select input",children:[{type:"it",name:"should receive focus via ref forwarding when the button is clicked"}]}]},{type:"describe",name:'given the "Complex" story is rendered',children:[{type:"describe",name:"when a value is selected with an id and text",children:[{type:"it",name:"should display the correct id and value of the selected Phone"}]}]},{type:"describe",name:'given the "FetchingDynamicItems" story is rendered',children:[{type:"describe",name:"when Get Items is clicked",children:[{type:"it",name:"should change the value of the select to 456 (the id) after 1.5 seconds"}]}]},{type:"describe",name:'given the "MenuHeight" story is rendered',children:[{type:"describe",name:"when down arrow is typed enough times to scroll",children:[{type:"describe",name:"when Boulder is reached via the arrow key",children:[{type:"it",name:"should show Boulder (United States)"}]}]}]},{type:"describe",name:'given the "Disabled Options" story is rendered',children:[{type:"it",name:"should not have any axe errors"},{type:"it",name:"should not have an aria-activedescendant attribute"},{type:"describe",name:"when the select button is clicked",children:[{type:"it",name:"should not have any axe errors"},{type:"describe",name:"the select",children:[{type:"it",name:'should have an aria-expanded attribute set to "true"'}]},{type:"describe",name:"the menu",children:[{type:"it",name:"should be visible"},{type:"it",name:'should have an aria-activedescendant attribute with the same value as the id of the first option ("E-mail")'}]},{type:"describe",name:'the first option ("E-Mail")',children:[{type:"it",name:'should have an aria-selected attribute set to "true"'}]},{type:"describe",name:'when the "Phone" option (with the value "phone") is clicked',children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should read "Phone"'},{type:"it",name:"should re-acquire focus"}]},{type:"describe",name:"the menu",children:[{type:"it",name:"should not be visible"}]},{type:"describe",name:"when the menu is opened again",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "Phone" option'}]}]}]}]},{type:"describe",name:"when the select input is focused and down arrow key is pressed",children:[{type:"describe",name:"the select input",children:[{type:"it",name:'should have an aria-expanded attribute set to "true"'}]},{type:"describe",name:"the menu",children:[{type:"it",name:"should be visible"}]},{type:"describe",name:"when the down arrow key is pressed for a second time",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "Phone" option'}]},{type:"describe",name:"when the down arrow key is pressed for a third time",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "Mail" option and skip disabled fax'}]}]}]}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:"should be visible"},{type:"it",name:"should have E-Mail selected"}]},{type:"describe",name:"when mail option is selected using arrow keys",children:[{type:"it",name:'should read "Mail"'},{type:"it",name:"should re-acquire focus"},{type:"it",name:"the menu should not be visible after selection"}]}]},{type:"describe",name:"when the up arrow key is pressed",children:[{type:"describe",name:"the menu",children:[{type:"it",name:'should set assistive focus to the "E-mail" option'}]}]}]}]}]},name:"Select"})]})}function Ke(s={}){const{wrapper:t}={...oe(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(se,{...s})}):se(s)}const Je={title:"Components/Inputs/Select",component:n,tags:["autodocs"],parameters:{docs:{page:Ke}}},j={render:U},S={render:V},b={render:_},g={render:B},y={render:O},F={render:H},f={render:W},I={render:q},v={render:z},w={render:Q},C={render:Z},k={render:K},L={render:N},P={render:X},M={render:$},R={render:J},E={render:Y},T={render:G};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: CautionExample
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: ComplexExample
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ControlledExample
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: DisabledOptionsExample
}`,...F.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ErrorExample
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: GrowExample
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: LabelPositionExample
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: WithIconsExample
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: RequiredExample
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: MenuHeightExample
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: HoistedModelExample
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: RefForwardingExample
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: FetchingDynamicItemsExample
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: PlaceholderExample
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: InitialSelectedItemExample
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: GroupedItemsExample
}`,...T.parameters?.docs?.source}}};const Dn=["Caution","Basic","Complex","Controlled","Disabled","DisabledOptions","Error","Grow","LabelPosition","WithIcons","Required","MenuHeight","HoistedModel","RefForwarding","FetchingDynamicItems","Placeholder","InitialSelectedItem","GroupedItems"];export{S as Basic,j as Caution,b as Complex,g as Controlled,y as Disabled,F as DisabledOptions,f as Error,M as FetchingDynamicItems,T as GroupedItems,I as Grow,L as HoistedModel,E as InitialSelectedItem,v as LabelPosition,k as MenuHeight,R as Placeholder,P as RefForwarding,C as Required,w as WithIcons,Dn as __namedExportsOrder,Je as default};
