import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as P}from"./index-BwQDiYtp.js";import{E as d,c as B}from"./union-DvKeCgka.js";import{S as R}from"./Specifications--bKSDThl.js";import{e as _}from"./index-IfJi-UCQ.js";import{g as i,l as r,a as l}from"./list-view-CRL_wtIR.js";import{p as a}from"./pie-chart-BUSgJEOU.js";import{S as o,u as z}from"./SegmentedControl-BZSXik86.js";import{B as I}from"./TypeLevelComponents-Bw_WRa4H.js";import{B as u}from"./Box-DFceh3YA.js";import{C as A}from"./CanvasProvider-BJ-OMKNq.js";import"./iframe-DdCB4fu1.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bkn4TDoU.js";import"./Svg-BmVrUnSS.js";import"./px2rem-C0KbprIx.js";import"./components-1G01j-He.js";import"./cs-DvbI9OYs.js";import"./StatusIndicator-BIh9noB6.js";import"./Text-DRUbleCp.js";import"./mergeStyles-BK8Hz87n.js";import"./flex-gl4iW82j.js";import"./grid-GQpBGEF_.js";import"./index-CYsyLHR7.js";import"./Card-CEyROzcv.js";import"./ExternalHyperlink-DnFL28k4.js";import"./Hyperlink-x6e3UOri.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-CMLUii7y.js";import"./BaseButton-BY16VLV0.js";import"./styled-BsZD6Etj.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-BQ1TZXwZ.js";import"./lerna-Dg0W5Fbg.js";import"./Tooltip-Btv9iUgu.js";import"./useTooltip-C6jxCkQj.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useCloseOnEscape-BOBxCx8K.js";import"./Popper-CvC-z2TH.js";import"./TertiaryButton-jo8ThkBe.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-C8FThZKW.js";import"./ColorInput-Bkpr30Lr.js";import"./check-small-CEmhQ7AS.js";import"./index-C5MVqyzH.js";import"./TextInput-CdyX2CFM.js";import"./types-DXdjelYI.js";import"./FormField-Bjws_Dzr.js";import"./check-BG7HONvH.js";import"./Expandable-70Ub1HQc.js";import"./Avatar-tCwg6Ua1.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-DSu3fjoQ.js";import"./Popup-CfPbpWF4.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-C0UKjDnR.js";import"./useInitialFocus-DXIqVwzr.js";import"./useReturnFocus-BsryDfnL.js";import"./useFocusRedirect-Beo767rE.js";import"./Breadcrumbs-_0m6ah8y.js";import"./useOverflowListTarget-CtqJJeXl.js";import"./useListItemSelect-DuQmMHZs.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-CIvTapno.js";import"./OverflowTooltip-hamrGFdg.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-BB_s4g0f.js";import"./Table-Cx_ITbAR.js";const b=()=>{const[n,t]=_.useState("table");return e.jsxs(e.Fragment,{children:[e.jsx(o,{initialValue:n,onSelect:C=>t(C.id),children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,tooltipProps:{title:"Table"}}),e.jsx(o.Item,{"data-id":"list-view",icon:r,tooltipProps:{title:"List"}}),e.jsx(o.Item,{"data-id":"list-detail",icon:l,tooltipProps:{title:"Detail"}}),e.jsx(o.Item,{"data-id":"diagrams",icon:a,tooltipProps:{title:"Diagram"}})]})}),e.jsxs(I,{size:"small",marginTop:"s",children:["Selected: ",n]})]})};b.__RAW__=`import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Basic = () => {
  const [viewType, setViewType] = React.useState('table');

  return (
    <>
      <SegmentedControl initialValue={viewType} onSelect={data => setViewType(data.id)}>
        <SegmentedControl.List aria-label="View type">
          <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Table'}} />
          <SegmentedControl.Item
            data-id="list-view"
            icon={listViewIcon}
            tooltipProps={{title: 'List'}}
          />
          <SegmentedControl.Item
            data-id="list-detail"
            icon={listDetailIcon}
            tooltipProps={{title: 'Detail'}}
          />
          <SegmentedControl.Item
            data-id="diagrams"
            icon={pieChartIcon}
            tooltipProps={{title: 'Diagram'}}
          />
        </SegmentedControl.List>
      </SegmentedControl>
      <BodyText size="small" marginTop="s">
        Selected: {viewType}
      </BodyText>
    </>
  );
};
`;const w=()=>e.jsx(o,{disabled:!0,children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,tooltipProps:{title:"Table"}}),e.jsx(o.Item,{"data-id":"list-view",icon:r,tooltipProps:{title:"List"}}),e.jsx(o.Item,{"data-id":"list-detail",icon:l,tooltipProps:{title:"Detail"}}),e.jsx(o.Item,{"data-id":"diagrams",icon:a,tooltipProps:{title:"Diagram"}})]})});w.__RAW__=`import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Disabled = () => (
  <SegmentedControl disabled>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Table'}} />
      <SegmentedControl.Item
        data-id="list-view"
        icon={listViewIcon}
        tooltipProps={{title: 'List'}}
      />
      <SegmentedControl.Item
        data-id="list-detail"
        icon={listDetailIcon}
        tooltipProps={{title: 'Detail'}}
      />
      <SegmentedControl.Item
        data-id="diagrams"
        icon={pieChartIcon}
        tooltipProps={{title: 'Diagram'}}
      />
    </SegmentedControl.List>
  </SegmentedControl>
);
`;const y=()=>e.jsx(o,{children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,children:"Table"}),e.jsx(o.Item,{"data-id":"list",icon:r,children:"List"}),e.jsx(o.Item,{"data-id":"diagram",icon:a,children:"Diagram"})]})});y.__RAW__=`import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {gridIcon, listViewIcon, pieChartIcon} from '@workday/canvas-system-icons-web';

export const TextAndIcon = () => (
  <SegmentedControl>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table" icon={gridIcon}>
        Table
      </SegmentedControl.Item>
      <SegmentedControl.Item data-id="list" icon={listViewIcon}>
        List
      </SegmentedControl.Item>
      <SegmentedControl.Item data-id="diagram" icon={pieChartIcon}>
        Diagram
      </SegmentedControl.Item>
    </SegmentedControl.List>
  </SegmentedControl>
);
`;const f=()=>e.jsx(o,{children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",children:"Table"}),e.jsx(o.Item,{"data-id":"list",children:"List"}),e.jsx(o.Item,{"data-id":"diagram",children:"Diagram"})]})});f.__RAW__=`import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

export const TextOnly = () => (
  <SegmentedControl>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
      <SegmentedControl.Item data-id="list">List</SegmentedControl.Item>
      <SegmentedControl.Item data-id="diagram">Diagram</SegmentedControl.Item>
    </SegmentedControl.List>
  </SegmentedControl>
);
`;const v=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(I,{size:"medium",fontWeight:"bold",marginTop:0,children:"Small"}),e.jsx(o,{size:"small",children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,children:"Table"}),e.jsx(o.Item,{"data-id":"list-view",icon:r,children:"List"}),e.jsx(o.Item,{"data-id":"list-detail",icon:l,children:"Detail"}),e.jsx(o.Item,{"data-id":"diagrams",icon:a,children:"Diagram"})]})})]}),e.jsxs(u,{children:[e.jsx(I,{size:"medium",fontWeight:"bold",children:"Medium"}),e.jsx(o,{size:"medium",children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,children:"Table"}),e.jsx(o.Item,{"data-id":"list-view",icon:r,children:"List"}),e.jsx(o.Item,{"data-id":"list-detail",icon:l,children:"Detail"}),e.jsx(o.Item,{"data-id":"diagrams",icon:a,children:"Diagram"})]})})]}),e.jsxs(u,{children:[e.jsx(I,{size:"medium",fontWeight:"bold",children:"Large"}),e.jsx(o,{size:"large",children:e.jsxs(o.List,{"aria-label":"Content view type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,children:"Table"}),e.jsx(o.Item,{"data-id":"list-view",icon:r,children:"List"}),e.jsx(o.Item,{"data-id":"list-detail",icon:l,children:"Detail"}),e.jsx(o.Item,{"data-id":"diagrams",icon:a,children:"Diagram"})]})})]})]});v.__RAW__=`import React from 'react';

import {Box} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Sizes = () => (
  <>
    <Box>
      <BodyText size="medium" fontWeight="bold" marginTop={0}>
        Small
      </BodyText>
      <SegmentedControl size="small">
        <SegmentedControl.List aria-label="View type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
            Detail
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
            Diagram
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
    <Box>
      <BodyText size="medium" fontWeight="bold">
        Medium
      </BodyText>
      <SegmentedControl size="medium">
        <SegmentedControl.List aria-label="View type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
            Detail
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
            Diagram
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
    <Box>
      <BodyText size="medium" fontWeight="bold">
        Large
      </BodyText>
      <SegmentedControl size="large">
        <SegmentedControl.List aria-label="Content view type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
            Detail
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
            Diagram
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
  </>
);
`;const T=()=>e.jsx(o,{orientation:"vertical",children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,tooltipProps:{title:"Table"}}),e.jsx(o.Item,{"data-id":"list-view",icon:r,tooltipProps:{title:"List"}}),e.jsx(o.Item,{"data-id":"list-detail",icon:l,tooltipProps:{title:"Detail"}}),e.jsx(o.Item,{"data-id":"diagram",icon:a,tooltipProps:{title:"Diagram"}})]})});T.__RAW__=`import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Vertical = () => (
  <SegmentedControl orientation="vertical">
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Table'}} />
      <SegmentedControl.Item
        data-id="list-view"
        icon={listViewIcon}
        tooltipProps={{title: 'List'}}
      />
      <SegmentedControl.Item
        data-id="list-detail"
        icon={listDetailIcon}
        tooltipProps={{title: 'Detail'}}
      />
      <SegmentedControl.Item
        data-id="diagram"
        icon={pieChartIcon}
        tooltipProps={{title: 'Diagram'}}
      />
    </SegmentedControl.List>
  </SegmentedControl>
);
`;const D=()=>e.jsx(A,{dir:"rtl",children:e.jsx(o,{initialValue:"list-detail",children:e.jsxs(o.List,{"aria-label":"View type",children:[e.jsx(o.Item,{"data-id":"table",icon:i,children:"שולחן"}),e.jsx(o.Item,{"data-id":"list-view",icon:r,children:"רשימה"}),e.jsx(o.Item,{"data-id":"list-detail",icon:l,children:"פרטים"}),e.jsx(o.Item,{"data-id":"diagrams",icon:a,children:"תרשים"})]})})});D.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const RTL = () => (
  <CanvasProvider dir="rtl">
    <SegmentedControl initialValue="list-detail">
      <SegmentedControl.List aria-label="View type">
        <SegmentedControl.Item data-id="table" icon={gridIcon}>
          שולחן
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
          רשימה
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
          פרטים
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
          תרשים
        </SegmentedControl.Item>
      </SegmentedControl.List>
    </SegmentedControl>
  </CanvasProvider>
);
`;const L=()=>{const[n,t]=_.useState("table"),C=z({items:[{id:"table",icon:i,label:"Table"},{id:"list",icon:r,label:"List"},{id:"detail",icon:l,label:"Detail"},{id:"diagram",icon:a,label:"Diagram"}],size:"small",initialValue:n,onSelect:s=>{console.log(`${s.id} is selected`),t(s.id)}});return e.jsx(o,{model:C,children:e.jsx(o.List,{"aria-label":"View type",children:s=>e.jsx(o.Item,{"data-id":s.id,icon:s.icon,children:s.label})})})};L.__RAW__=`import React from 'react';

import {
  SegmentedControl,
  useSegmentedControlModel,
} from '@workday/canvas-kit-react/segmented-control';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Dynamic = () => {
  const [viewType, setViewType] = React.useState('table');

  const model = useSegmentedControlModel({
    items: [
      {id: 'table', icon: gridIcon, label: 'Table'},
      {id: 'list', icon: listViewIcon, label: 'List'},
      {id: 'detail', icon: listDetailIcon, label: 'Detail'},
      {id: 'diagram', icon: pieChartIcon, label: 'Diagram'},
    ],
    size: 'small',
    initialValue: viewType,
    onSelect: data => {
      console.log(\`\${data.id} is selected\`);
      setViewType(data.id);
    },
  });

  return (
    <SegmentedControl model={model}>
      <SegmentedControl.List aria-label="View type">
        {item => (
          <SegmentedControl.Item data-id={item.id} icon={item.icon}>
            {item.label}
          </SegmentedControl.Item>
        )}
      </SegmentedControl.List>
    </SegmentedControl>
  );
};
`;function V(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(P,{of:E}),`
`,e.jsx(t.h1,{id:"canvas-kit-segmented-control",children:"Canvas Kit Segmented Control"}),`
`,e.jsxs(t.p,{children:[`Segmented Control is a
`,e.jsx(t.a,{href:"/getting-started/for-developers/resources/compound-components/",children:"compound component"}),` that represents
a linear group of multiple buttons allowing the selection of a specific value.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/buttons/segmented-control",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"})," includes a container ",e.jsx(t.code,{children:"SegmentedControl"}),` component and the following
subcomponents: `,e.jsx(t.code,{children:"SegmentedControl.List"})," and ",e.jsx(t.code,{children:"SegmentedControl.Item"}),"."]}),`
`,e.jsxs(t.p,{children:["The example below contains a ",e.jsx(t.code,{children:"SegmentedControl"}),` with four icon-only buttons. Each button is rendered
using a `,e.jsx(t.code,{children:"SegmentedControl.Item"}),` and is paired with a tooltip describing the button's function. Only
one button can be active at a time.`]}),`
`,e.jsx(d,{code:b}),`
`,e.jsxs(t.p,{children:["We ",e.jsx(t.strong,{children:"strongly"})," discourage including more than four buttons in a single ",e.jsx(t.code,{children:"SegmentedControl"}),"."]}),`
`,e.jsx(t.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["Our ",e.jsx(t.code,{children:"SegmentedControl"})," component renders semantic HTML ",e.jsx(t.code,{children:"<button>"}),` elements to the browser DOM,
wrapped inside of a `,e.jsx(t.code,{children:"<div>"})," with an explicit ARIA ",e.jsx(t.code,{children:'role="group"'}),`. This is equivalent to an HTML
`,e.jsx(t.code,{children:"<fieldset>"}),` element, and useful for screen readers to describe the relationship between the
buttons.`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Each button is a 2-state toggle button with ",e.jsx(t.code,{children:"aria-pressed={true | false}"}),` to indicate the current
state to screen readers.`]}),`
`,e.jsxs(t.li,{children:["Providing your own ",e.jsx(t.code,{children:"aria-label"})," string to ",e.jsx(t.code,{children:"SegmentedControl.List"}),` is recommended for describing the
purpose of the component.`]}),`
`]}),`
`,e.jsx(t.h4,{id:"screen-reader-experience",children:"Screen Reader Experience"}),`
`,e.jsxs(t.p,{children:["When users interact with a ",e.jsx(t.code,{children:"SegmentedControl"})," using screen readers:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`The group context is announced (e.g., "View options, group" when using
`,e.jsx(t.code,{children:'aria-label="View options"'}),")"]}),`
`,e.jsx(t.li,{children:`Each button announces its text/label, "toggle button" role, and pressed/unpressed state (e.g.,
"List view, toggle button, pressed" or "Grid view, toggle button, not pressed")`}),`
`,e.jsx(t.li,{children:`For icon-only buttons with tooltips, the tooltip text is announced along with the button role and
state`}),`
`,e.jsx(t.li,{children:"When a button is activated, screen readers should announce the new state"}),`
`]}),`
`,e.jsxs(t.p,{children:["Refer to ",e.jsx(t.a,{href:"?path=/docs/components-buttons--docs#accessibility",children:"Button"}),` for more information about
accessibility of these components.`]}),`
`,e.jsx(t.h3,{id:"variations",children:"Variations"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"})," supports three variations based on whether or not its ",e.jsx(t.code,{children:"SegmentedControl.Item"}),`
components have an `,e.jsx(t.code,{children:"icon"})," prop and/or text content: icon-only, text-only, and text-and-icon."]}),`
`,e.jsxs(t.p,{children:["All ",e.jsx(t.code,{children:"SegmentedControl.Item"})," components within a given ",e.jsx(t.code,{children:"SegmentedControl"}),` must be of the same
variation.`]}),`
`,e.jsx(t.h4,{id:"icon-only",children:"Icon-Only"}),`
`,e.jsxs(t.p,{children:["To render an icon-only ",e.jsx(t.code,{children:"SegmentedControl"}),", apply the ",e.jsx(t.code,{children:"icon"})," prop to ",e.jsx(t.code,{children:"SegmentedControl.Item"}),` and do
not provide it with text content. Refer to the `,e.jsx(t.a,{href:"#basic-example",children:"basic example"}),` above for an instance
of an icon-only `,e.jsx(t.code,{children:"SegmentedControl"}),"."]}),`
`,e.jsxs(t.p,{children:[`The icon-only variation is the only variation which supports a vertical orientation in addition to
the default horizontal orientation. Set the `,e.jsx(t.code,{children:"orientation"})," prop of ",e.jsx(t.code,{children:"SegmentedControl"})," to ",e.jsx(t.code,{children:"vertical"}),`
to configure the component to render vertically.`]}),`
`,e.jsx(d,{code:T}),`
`,e.jsx(t.h4,{id:"text-only",children:"Text-Only"}),`
`,e.jsxs(t.p,{children:["To render a text-only ",e.jsx(t.code,{children:"SegmentedControl"}),", omit the ",e.jsx(t.code,{children:"icon"})," prop from ",e.jsx(t.code,{children:"SegmentedControl.Item"}),` and
provide it with text content.`]}),`
`,e.jsx(d,{code:f}),`
`,e.jsx(t.h4,{id:"text-and-icon",children:"Text-and-Icon"}),`
`,e.jsxs(t.p,{children:["To render a text-and-icon ",e.jsx(t.code,{children:"SegmentedControl"}),", apply the ",e.jsx(t.code,{children:"icon"})," prop to ",e.jsx(t.code,{children:"SegmentedControl.Item"}),` and
provide it with text content.`]}),`
`,e.jsx(d,{code:y}),`
`,e.jsx(t.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"})," accepts a ",e.jsx(t.code,{children:"size"})," prop which supports the following values:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"small"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"medium"})," (Default)"]}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"large"})}),`
`]}),`
`,e.jsx(d,{code:v}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"disabled"})," prop of ",e.jsx(t.code,{children:"SegmentedControl"})," to disable the entire component including its buttons."]}),`
`,e.jsx(d,{code:w}),`
`,e.jsx(t.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"})," supports right-to-left languages when specified in the ",e.jsx(t.code,{children:"CanvasProvider"})," ",e.jsx(t.code,{children:"theme"}),"."]}),`
`,e.jsx(d,{code:D}),`
`,e.jsx(t.h3,{id:"dynamic-items",children:"Dynamic Items"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"}),` supports a
`,e.jsx(t.a,{href:"/getting-started/for-developers/resources/collection-api/#dynamic-items",children:"dynamic API"}),` where instead
of statically providing the JSX for each `,e.jsx(t.code,{children:"SegmentedControl.Item"}),", you pass an array of ",e.jsx(t.code,{children:"items"}),` in
the `,e.jsx(t.code,{children:"model"})," state and provide a render function to display the items."]}),`
`,e.jsx(d,{code:L}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(B,{name:"SegmentedControl",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(R,{file:"SegmentedControl.spec.ts",initialSpecs:null,name:"SegmentedControl"})]})}function W(n={}){const{wrapper:t}={...k(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(V,{...n})}):V(n)}const E={title:"Components/Buttons/Segmented Control",component:o,tags:["autodocs"],parameters:{docs:{page:W}}},c={render:b},m={render:w},p={render:y},g={render:f},h={render:v},x={render:T},j={render:D},S={render:L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: TextAndIconExample
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: TextOnlyExample
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: SizesExample
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: VerticalExample
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: DynamicExample
}`,...S.parameters?.docs?.source}}};const xt=["Basic","Disabled","TextAndIcon","TextOnly","Sizes","Vertical","RTL","Dynamic"];export{c as Basic,m as Disabled,S as Dynamic,j as RTL,h as Sizes,p as TextAndIcon,g as TextOnly,x as Vertical,xt as __namedExportsOrder,E as default};
