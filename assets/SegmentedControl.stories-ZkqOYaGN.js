import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as V}from"./index-3YbjYt95.js";import{ae as B}from"./index-2g7o55Lu.js";import{E as s,c as P}from"./union-iCIczOlU.js";import{S as R}from"./Specifications-G7n_JX0n.js";import{e as _}from"./index-IfJi-UCQ.js";import{g as o,l as r,a as d}from"./list-view-Cvwi-fm3.js";import{p as a}from"./pie-chart-12vFx6CY.js";import{S as n,u as z}from"./SegmentedControl-B_QD-6Bh.js";import{B as y}from"./TypeLevelComponents-CvpwAY8L.js";import{g as W,f as A}from"./index-DE-upP0k.js";import{C as E}from"./CanvasProvider-Dyk6_koI.js";import{B as j}from"./Box-Ber3xeq6.js";import"./iframe-CkV2tTZR.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-CB7CmGUd.js";import"./Svg-CP9vwvqP.js";import"./px2rem-C0KbprIx.js";import"./components-txAqe3Xu.js";import"./cs-rfTTo7Bg.js";import"./StatusIndicator-SPKXyFiI.js";import"./Text-8v3W_t7V.js";import"./mergeStyles-Cv57vH8h.js";import"./flex-CRSWLfxc.js";import"./grid-B_hxfS-k.js";import"./cornerShape-Dinnbk8k.js";import"./Card-DQX9cl5b.js";import"./ExternalHyperlink-bWuOmnq5.js";import"./Hyperlink-DNvgug16.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-B7xFUuvh.js";import"./BaseButton-rNx6-AYy.js";import"./Button-BYuL_yBu.js";import"./lerna-BvyFb88h.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./Tooltip-CdEf-_DY.js";import"./useTooltip-C_HOqEa8.js";import"./getTransformFromPlacement-CFlQb2fd.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useCloseOnEscape-jYphKC7B.js";import"./Popper-C6ZR4iXf.js";import"./TertiaryButton-BZz6yk-h.js";import"./index-pMzza0x6.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-CQ3ZyT3x.js";import"./ColorInput-C0VEHooJ.js";import"./check-small-BqSDQIle.js";import"./index-DM_3aIAw.js";import"./TextInput-CWt214xj.js";import"./types-DXdjelYI.js";import"./FormField-B1XM9ifG.js";import"./check-Ds6vsrAM.js";import"./Expandable-Bpb-r6ZR.js";import"./Avatar-BgW0J2wG.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-D1kMuRoK.js";import"./Popup-bjprdV6s.js";import"./x-B1faap_l.js";import"./usePopupTarget-bzvdH9Sb.js";import"./useInitialFocus-vPZJUziU.js";import"./useReturnFocus-BXvf5LDo.js";import"./useFocusRedirect-BruntT9u.js";import"./Breadcrumbs-BiCRG6gL.js";import"./useOverflowListTarget-cBHTq9o8.js";import"./useListItemRegister-Y_tBv-cO.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-EokhkDTU.js";import"./OverflowTooltip-BUtHsD4O.js";import"./useListItemSelect-DcPcEq_C.js";import"./chevron-right-Bg_6xPk9.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DL0_xNzt.js";import"./Table-CDnpMcZX.js";const C=()=>{const[i,t]=_.useState("table");return e.jsxs(e.Fragment,{children:[e.jsx(n,{initialValue:i,onSelect:S=>t(S.id),children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,tooltipProps:{title:"Table"}}),e.jsx(n.Item,{"data-id":"list-view",icon:r,tooltipProps:{title:"List"}}),e.jsx(n.Item,{"data-id":"list-detail",icon:d,tooltipProps:{title:"Detail"}}),e.jsx(n.Item,{"data-id":"diagrams",icon:a,tooltipProps:{title:"Diagram"}})]})}),e.jsxs(y,{size:"small",cs:{marginBlockStart:W.md},children:["Selected: ",i]})]})};C.__RAW__=`import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

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
      <BodyText size="small" cs={{marginBlockStart: system.gap.md}}>
        Selected: {viewType}
      </BodyText>
    </>
  );
};
`;const I=()=>e.jsx(n,{disabled:!0,children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,tooltipProps:{title:"Table"}}),e.jsx(n.Item,{"data-id":"list-view",icon:r,tooltipProps:{title:"List"}}),e.jsx(n.Item,{"data-id":"list-detail",icon:d,tooltipProps:{title:"Detail"}}),e.jsx(n.Item,{"data-id":"diagrams",icon:a,tooltipProps:{title:"Diagram"}})]})});I.__RAW__=`import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
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
`;const w=()=>{const[i,t]=_.useState("table"),S=z({items:[{id:"table",icon:o,label:"Table"},{id:"list",icon:r,label:"List"},{id:"detail",icon:d,label:"Detail"},{id:"diagram",icon:a,label:"Diagram"}],size:"small",initialValue:i,onSelect:l=>{console.log(`${l.id} is selected`),t(l.id)}});return e.jsx(n,{model:S,children:e.jsx(n.List,{"aria-label":"View type",children:l=>e.jsx(n.Item,{"data-id":l.id,icon:l.icon,children:l.label})})})};w.__RAW__=`import React from 'react';

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
`;const f=()=>e.jsx(E,{dir:"rtl",children:e.jsx(n,{initialValue:"list-detail",children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,children:"שולחן"}),e.jsx(n.Item,{"data-id":"list-view",icon:r,children:"רשימה"}),e.jsx(n.Item,{"data-id":"list-detail",icon:d,children:"פרטים"}),e.jsx(n.Item,{"data-id":"diagrams",icon:a,children:"תרשים"})]})})});f.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
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
`;const v=()=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(y,{size:"medium",cs:{marginBlockStart:0,fontWeight:A.bold},children:"Small"}),e.jsx(n,{size:"small",children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,children:"Table"}),e.jsx(n.Item,{"data-id":"list-view",icon:r,children:"List"}),e.jsx(n.Item,{"data-id":"list-detail",icon:d,children:"Detail"}),e.jsx(n.Item,{"data-id":"diagrams",icon:a,children:"Diagram"})]})})]}),e.jsxs(j,{children:[e.jsx(y,{size:"medium",fontWeight:"bold",children:"Medium"}),e.jsx(n,{size:"medium",children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,children:"Table"}),e.jsx(n.Item,{"data-id":"list-view",icon:r,children:"List"}),e.jsx(n.Item,{"data-id":"list-detail",icon:d,children:"Detail"}),e.jsx(n.Item,{"data-id":"diagrams",icon:a,children:"Diagram"})]})})]}),e.jsxs(j,{children:[e.jsx(y,{size:"medium",fontWeight:"bold",children:"Large"}),e.jsx(n,{size:"large",children:e.jsxs(n.List,{"aria-label":"Content view type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,children:"Table"}),e.jsx(n.Item,{"data-id":"list-view",icon:r,children:"List"}),e.jsx(n.Item,{"data-id":"list-detail",icon:d,children:"Detail"}),e.jsx(n.Item,{"data-id":"diagrams",icon:a,children:"Diagram"})]})})]})]});v.__RAW__=`import {Box} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';
import {
  gridIcon,
  listDetailIcon,
  listViewIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const Sizes = () => (
  <>
    <Box>
      <BodyText size="medium" cs={{marginBlockStart: 0, fontWeight: system.fontWeight.bold}}>
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
`;const T=()=>e.jsx(n,{children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,children:"Table"}),e.jsx(n.Item,{"data-id":"list",icon:r,children:"List"}),e.jsx(n.Item,{"data-id":"diagram",icon:a,children:"Diagram"})]})});T.__RAW__=`import React from 'react';

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
`;const D=()=>e.jsx(n,{children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",children:"Table"}),e.jsx(n.Item,{"data-id":"list",children:"List"}),e.jsx(n.Item,{"data-id":"diagram",children:"Diagram"})]})});D.__RAW__=`import React from 'react';

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
`;const L=()=>e.jsx(n,{orientation:"vertical",children:e.jsxs(n.List,{"aria-label":"View type",children:[e.jsx(n.Item,{"data-id":"table",icon:o,tooltipProps:{title:"Table"}}),e.jsx(n.Item,{"data-id":"list-view",icon:r,tooltipProps:{title:"List"}}),e.jsx(n.Item,{"data-id":"list-detail",icon:d,tooltipProps:{title:"Detail"}}),e.jsx(n.Item,{"data-id":"diagram",icon:a,tooltipProps:{title:"Diagram"}})]})});L.__RAW__=`import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
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
`;function k(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...V(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(B,{of:O}),`
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
`,e.jsx(s,{code:C}),`
`,e.jsxs(t.p,{children:["We ",e.jsx(t.strong,{children:"strongly"})," discourage including more than four buttons in a single ",e.jsx(t.code,{children:"SegmentedControl"}),"."]}),`
`,e.jsx(t.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["Our ",e.jsx(t.code,{children:"SegmentedControl"})," component renders semantic HTML ",e.jsx(t.code,{children:"<button>"}),` elements to the browser DOM,
wrapped inside of a `,e.jsx(t.code,{children:"<div>"})," with an explicit ARIA ",e.jsx(t.code,{children:'role="group"'}),`. This is equivalent to an HTML
`,e.jsx(t.code,{children:"<fieldset>"}),` element, and useful for screen readers to describe the relationship between the
buttons.`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Each button is a 2-state toggle button with ",e.jsx(t.code,{children:"aria-pressed={true | false}"}),` to indicate the current
state to screen readers.`]}),`
`,e.jsxs(t.li,{children:["Providing your own ",e.jsx(t.code,{children:"aria-label"})," string to ",e.jsx(t.code,{children:"SegmentedControl.List"}),` is recommended for describing
the purpose of the component.`]}),`
`]}),`
`,e.jsx(t.h4,{id:"screen-reader-experience",children:"Screen Reader Experience"}),`
`,e.jsxs(t.p,{children:["When users interact with a ",e.jsx(t.code,{children:"SegmentedControl"})," using screen readers:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`The group context is announced (e.g., "View options, group" when using
`,e.jsx(t.code,{children:'aria-label="View options"'}),")"]}),`
`,e.jsx(t.li,{children:`Each button announces its text/label, "toggle button" role, and pressed/unpressed state (e.g.,
"List view, toggle button, pressed" or "Grid view, toggle button, not pressed")`}),`
`,e.jsx(t.li,{children:`icon-only items must have an accessible name, supplied by visible text, aria-label, or a Tooltip
in label mode.`}),`
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
`,e.jsx(s,{code:L}),`
`,e.jsx(t.h4,{id:"text-only",children:"Text-Only"}),`
`,e.jsxs(t.p,{children:["To render a text-only ",e.jsx(t.code,{children:"SegmentedControl"}),", omit the ",e.jsx(t.code,{children:"icon"})," prop from ",e.jsx(t.code,{children:"SegmentedControl.Item"}),` and
provide it with text content.`]}),`
`,e.jsx(s,{code:D}),`
`,e.jsx(t.h4,{id:"text-and-icon",children:"Text-and-Icon"}),`
`,e.jsxs(t.p,{children:["To render a text-and-icon ",e.jsx(t.code,{children:"SegmentedControl"}),", apply the ",e.jsx(t.code,{children:"icon"})," prop to ",e.jsx(t.code,{children:"SegmentedControl.Item"}),` and
provide it with text content.`]}),`
`,e.jsx(s,{code:T}),`
`,e.jsx(t.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"})," accepts a ",e.jsx(t.code,{children:"size"})," prop which supports the following values:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"small"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"medium"})," (Default)"]}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"large"})}),`
`]}),`
`,e.jsx(s,{code:v}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"disabled"})," prop of ",e.jsx(t.code,{children:"SegmentedControl"})," to disable the entire component including its buttons."]}),`
`,e.jsx(s,{code:I}),`
`,e.jsx(t.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"})," supports right-to-left languages when specified in the ",e.jsx(t.code,{children:"CanvasProvider"})," ",e.jsx(t.code,{children:"theme"}),"."]}),`
`,e.jsx(s,{code:f}),`
`,e.jsx(t.h3,{id:"dynamic-items",children:"Dynamic Items"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"SegmentedControl"}),` supports a
`,e.jsx(t.a,{href:"/getting-started/for-developers/resources/collection-api/#dynamic-items",children:"dynamic API"}),` where instead
of statically providing the JSX for each `,e.jsx(t.code,{children:"SegmentedControl.Item"}),", you pass an array of ",e.jsx(t.code,{children:"items"}),` in
the `,e.jsx(t.code,{children:"model"})," state and provide a render function to display the items."]}),`
`,e.jsx(s,{code:w}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(P,{name:"SegmentedControl",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"specifications",children:"Specifications"}),`
`,e.jsx(R,{file:"./cypress/component/SegmentedControl.spec.tsx",initialSpecs:{type:"file",name:"SegmentedControl",children:[{type:"describe",name:"SegmentedControl",children:[{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should have an element with a role of "group"'},{type:"it",name:"should have a group element with a aria-label attribute"},{type:"it",name:'should have button elements inside the "group"'},{type:"it",name:'should have "aria-pressed=true" for the first button'},{type:"it",name:'should have "aria-pressed=false" for the second button'},{type:"it",name:"should have a data-id attribute on the first button"},{type:"it",name:"should have a label"},{type:"describe",name:"when the button is hovered",children:[{type:"it",name:"should open the tooltip"}]},{type:"describe",name:"when the button is focused",children:[{type:"it",name:"should open the tooltip"}]},{type:"describe",name:"when the first button is active and focused",children:[{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should focus on the second button"},{type:"describe",name:"when the space key is pressed",children:[{type:"it",name:'should not have "aria-pressed" on the first button'},{type:"it",name:'should have "aria-pressed=true" on the second button'}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:'should not have "aria-pressed" on the first button'},{type:"it",name:'should have "aria-pressed=true" on the second button'}]}]}]},{type:"describe",name:"when the second button is active and focused",children:[{type:"describe",name:"when the tab+shift is pressed",children:[{type:"it",name:"should focus on the first button"}]}]}]},{type:"describe",name:"given the  story is rendered",children:[{type:"it",name:"should pass axe checks"},{type:"it",name:'should have an element with a role of "group"'},{type:"it",name:"should have a group element with a aria-label attribute"},{type:"it",name:'should have button elements inside the "group"'},{type:"it",name:'should have "aria-pressed=true" for the first button'},{type:"it",name:'should have "aria-pressed=false" for the second button'},{type:"it",name:"should have a data-id attribute on the first button"},{type:"it",name:"should have a label"},{type:"describe",name:"when the button is hovered",children:[{type:"it",name:"should open the tooltip"}]},{type:"describe",name:"when the button is focused",children:[{type:"it",name:"should open the tooltip"}]},{type:"describe",name:"when the first button is active and focused",children:[{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should focus on the second button"},{type:"describe",name:"when the space key is pressed",children:[{type:"it",name:'should not have "aria-pressed" on the first button'},{type:"it",name:'should have "aria-pressed=true" on the second button'}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:'should not have "aria-pressed" on the first button'},{type:"it",name:'should have "aria-pressed=true" on the second button'}]}]}]},{type:"describe",name:"when the second button is active and focused",children:[{type:"describe",name:"when the tab+shift is pressed",children:[{type:"it",name:"should focus on the first button"}]}]}]},{type:"describe",name:"given the [Preview/Segmented Control, Disabled] story is rendered",children:[{type:"describe",name:"all buttons should be disabled",children:[{type:"it",name:'should have "[aria-pressed]" for all buttons'},{type:"it",name:'should have "[disabled]" for all buttons'}]},{type:"describe",name:"when the disabled button is clicked",children:[{type:"it",name:'should not set "[aria-pressed=true]" on the disabled button'}]}]},{type:"describe",name:"given the [Preview/Segmented Control, rtl] story is rendered",children:[{type:"describe",name:"when the first button is active and focused",children:[{type:"describe",name:"when the tab key is pressed",children:[{type:"it",name:"should focus on the second button"},{type:"describe",name:"when the space key is pressed",children:[{type:"it",name:'should not have "aria-pressed" on the first button'},{type:"it",name:'should have "aria-pressed=true" on the second button'}]},{type:"describe",name:"when the enter key is pressed",children:[{type:"it",name:'should not have "aria-pressed" on the first button'},{type:"it",name:'should have "aria-pressed=true" on the second button'}]}]}]},{type:"describe",name:"when the second button is active and focused",children:[{type:"describe",name:"when the tab+shift is pressed",children:[{type:"it",name:"should focus on the last button"}]}]}]}]}]},name:"SegmentedControl"})]})}function M(i={}){const{wrapper:t}={...V(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(k,{...i})}):k(i)}const O={title:"Components/Buttons/Segmented Control",component:n,tags:["autodocs"],parameters:{docs:{page:M}}},c={render:C},m={render:I},p={render:T},h={render:D},g={render:v},x={render:L},u={render:f},b={render:w};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: DisabledExample
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: TextAndIconExample
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: TextOnlyExample
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: SizesExample
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: VerticalExample
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: DynamicExample
}`,...b.parameters?.docs?.source}}};const bt=["Basic","Disabled","TextAndIcon","TextOnly","Sizes","Vertical","RTL","Dynamic"];export{c as Basic,m as Disabled,b as Dynamic,u as RTL,g as Sizes,p as TextAndIcon,h as TextOnly,x as Vertical,bt as __namedExportsOrder,O as default};
