import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as M}from"./index-Bt0ZT3SD.js";import{E as d,c as I}from"./union-Bu_N9WXY.js";import{e as E}from"./index-IfJi-UCQ.js";import{B as r,T as l}from"./Table-CnDNRyoO.js";import{c as o}from"./cs-CmRirKzJ.js";import{c as i,g as v}from"./index-DE-upP0k.js";import{u as R}from"./useUniqueId-BoA5684E.js";import{H as B}from"./TypeLevelComponents-BNRlM0Dx.js";import{p as w}from"./px2rem-C0KbprIx.js";import{C as F}from"./CanvasProvider-Dhhaerje.js";import"./iframe-DXeK7ayo.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-QHHyJsRv.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Cq4gQLtq.js";import"./Svg-B7LpI5Ot.js";import"./components-BhvJ7593.js";import"./StatusIndicator-DZ56N-RC.js";import"./Text-BIkiFigH.js";import"./mergeStyles-DdZlnWAB.js";import"./Box-D7WyyqaD.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./useConstant-B_SD0x5s.js";import"./flex-DYbdw5oo.js";import"./grid-_KjJYSbp.js";import"./cornerShape-Bs4J36FI.js";import"./Card-DEc3Wxgt.js";import"./ExternalHyperlink-B5so04zA.js";import"./Hyperlink-B8rhjoRx.js";import"./external-link-ChL2h1Cn.js";import"./SecondaryButton-DITlekqi.js";import"./BaseButton-Dl76ZFMd.js";import"./Button-nYhq3GW1.js";import"./lerna-DHBIFgqa.js";import"./Tooltip-urVsYTZI.js";import"./useTooltip-C-iRaiUv.js";import"./getTransformFromPlacement-kqEJ7--H.js";import"./useDisclosureModel-ySjWLcPL.js";import"./models-CHTjB2ql.js";import"./useCloseOnEscape-DhBoTrcv.js";import"./Popper-N9Opn6Uu.js";import"./TertiaryButton-B5A-OQqG.js";import"./index-kj8ZfNNN.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-BKzNbucK.js";import"./ColorInput-d6VNAKZK.js";import"./check-small-BqSDQIle.js";import"./TextInput-6REj-qFy.js";import"./types-DXdjelYI.js";import"./FormField-Y066M9m4.js";import"./check-Ds6vsrAM.js";import"./Expandable-C9yPpdV7.js";import"./Avatar-CIyKq2y9.js";import"./chevron-up-CAo1sqci.js";import"./Dialog-QAU_t2kV.js";import"./Popup-BRRFZVVA.js";import"./x-B1faap_l.js";import"./usePopupTarget-B79Gw_dR.js";import"./useInitialFocus-CWikZd6W.js";import"./useReturnFocus-B6I8OHUQ.js";import"./useFocusRedirect-CQuHxJ26.js";import"./Breadcrumbs-7YLlPqeC.js";import"./useOverflowListTarget-BgzVplWe.js";import"./useListItemRegister-CAj1jmo7.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Be0OJ5CA.js";import"./OverflowTooltip-CZdROVrr.js";import"./useListItemSelect-C1yP7QL7.js";import"./chevron-right-small-Ng-H0z5q.js";import"./related-actions-BBat1SFr.js";import"./Flex-DhgDVhul.js";const f=o({backgroundColor:i.surface.raised}),m=()=>e.jsxs(r,{children:[e.jsx(r.Caption,{children:"Coffee Drinks and Sizes"}),e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.Header,{scope:"col",cs:f,children:"Drink"}),e.jsx(r.Header,{scope:"col",cs:f,children:"Size"})]})}),e.jsxs(r.Body,{children:[e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Espresso"}),e.jsx(r.Cell,{children:"1 oz"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Macchiato"}),e.jsx(r.Cell,{children:"2 oz Espresso"})]}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Cortado"}),e.jsx(r.Cell,{children:"2 oz Espresso, 1 oz Foamed Milk"})]}),e.jsx(r.Row,{}),e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:"Cappuccino"}),e.jsx(r.Cell,{children:"2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk"})]})]})]});m.__RAW__=`import {BaseTable} from '@workday/canvas-kit-react/table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.surface.raised,
});

export const BaseHtmlTable = () => {
  return (
    <BaseTable>
      <BaseTable.Caption>Coffee Drinks and Sizes</BaseTable.Caption>
      <BaseTable.Head>
        <BaseTable.Row>
          <BaseTable.Header scope="col" cs={tableHeaderStyles}>
            Drink
          </BaseTable.Header>
          <BaseTable.Header scope="col" cs={tableHeaderStyles}>
            Size
          </BaseTable.Header>
        </BaseTable.Row>
      </BaseTable.Head>
      <BaseTable.Body>
        <BaseTable.Row>
          <BaseTable.Cell>Espresso</BaseTable.Cell>
          <BaseTable.Cell>1 oz</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Macchiato</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Cortado</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso, 1 oz Foamed Milk</BaseTable.Cell>
        </BaseTable.Row>
        <BaseTable.Row></BaseTable.Row>
        <BaseTable.Row>
          <BaseTable.Cell>Cappuccino</BaseTable.Cell>
          <BaseTable.Cell>2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk</BaseTable.Cell>
        </BaseTable.Row>
      </BaseTable.Body>
    </BaseTable>
  );
};
`;const C=o({backgroundColor:i.surface.default}),u=()=>e.jsxs(l,{children:[e.jsx(l.Caption,{children:"Coffee Drinks and Sizes"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:C,children:"Drink"}),e.jsx(l.Header,{scope:"col",cs:C,children:"Size"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Espresso"}),e.jsx(l.Cell,{children:"1 oz"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Macchiato"}),e.jsx(l.Cell,{children:"2 oz Espresso"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cortado"}),e.jsx(l.Cell,{children:"2 oz Espresso, 1 oz Foamed Milk"})]}),e.jsx(l.Row,{}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cappuccino"}),e.jsx(l.Cell,{children:"2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk"})]})]})]});u.__RAW__=`import {Table} from '@workday/canvas-kit-react/table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.surface.default,
});

export const Basic = () => {
  return (
    <Table>
      <Table.Caption>Coffee Drinks and Sizes</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Drink
          </Table.Header>
          <Table.Header scope="col" cs={tableHeaderStyles}>
            Size
          </Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Espresso</Table.Cell>
          <Table.Cell>1 oz</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Macchiato</Table.Cell>
          <Table.Cell>2 oz Espresso</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cortado</Table.Cell>
          <Table.Cell>2 oz Espresso, 1 oz Foamed Milk</Table.Cell>
        </Table.Row>
        <Table.Row></Table.Row>
        <Table.Row>
          <Table.Cell>Cappuccino</Table.Cell>
          <Table.Cell>2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
`;const j={parentContainerStyles:o({marginBlockEnd:v.md}),tableHeaderStyles:o({backgroundColor:i.surface.raised})},T=()=>{const n=R();return e.jsxs(e.Fragment,{children:[e.jsx(B,{as:"h3",id:n,size:"small",cs:j.parentContainerStyles,children:"Pizza Toppings"}),e.jsxs(l,{"aria-labelledby":n,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:j.tableHeaderStyles,children:"Toppings"}),e.jsx(l.Header,{scope:"col",cs:j.tableHeaderStyles,children:"Amount"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Pepperoni"}),e.jsx(l.Cell,{children:"2.5 oz"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Mozzarella"}),e.jsx(l.Cell,{children:"5 oz"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Basil"}),e.jsx(l.Cell,{children:"10 Leaves"})]})]})]})]})};T.__RAW__=`import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    marginBlockEnd: system.gap.md,
  }),
  tableHeaderStyles: createStyles({
    backgroundColor: system.color.surface.raised,
  }),
};

export const BasicWithHeading = () => {
  const headingID = useUniqueId();

  return (
    <>
      <Heading as="h3" id={headingID} size="small" cs={styleOverrides.parentContainerStyles}>
        Pizza Toppings
      </Heading>
      <Table aria-labelledby={headingID}>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Toppings
            </Table.Header>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Amount
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pepperoni</Table.Cell>
            <Table.Cell>2.5 oz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mozzarella</Table.Cell>
            <Table.Cell>5 oz</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Basil</Table.Cell>
            <Table.Cell>10 Leaves</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};
`;const t={parentContainerStyles:o({marginBlockEnd:v.md}),tableStyles:o({width:w(690)}),tableHeaderStyles:o({position:"sticky",left:"0",backgroundColor:i.surface.raised,borderInlineEnd:`${w(2)} solid ${i.border.default}`})},g=()=>{const n=R(),s=[{make:"Porsche",model:"992 911 GT3",year:"2022",price:"Starts at $160,000",engine:"4.0L Flat 6",transmission:"PDK or 7-Speed Manual",horsepower:"502hp",torque:"346 lb-ft",curbWeight:"3,164 lbs"},{make:"BMW",model:"M5 Competition",year:"2018",price:"Starts at $105,000",engine:"Twin-Turbo 4.4L V8",transmission:"Automatic",horsepower:"627hp",torque:"553 lb-ft",curbWeight:"4,345 lbs"},{make:"Alfa Romeo",model:"1750 GTV",year:"1970",price:"$30,000 - $55,000",engine:"1.75L Inline 4",transmission:"Manual",horsepower:"122hp",torque:"137 lb-ft",curbWeight:"2,140 lbs"},{make:"Lotus",model:"Emira",year:"2023",price:"Starts at $78,000",engine:"Supercharged 3.5L V6",transmission:"Automatic or 6-Speed Manual",horsepower:"400hp",torque:"317 lb-ft",curbWeight:"3520 lbs"},{make:"Toyota",model:"Supra",year:"1998",price:"$40,000 - $80,000",engine:"3.0L Inline 6",transmission:"Automatic or 6-Speed Manual",horsepower:"320hp",torque:"315 lb-ft",curbWeight:"3,599 lbs"},{make:"Nissan",model:"Skyline GT-R",year:"1994",price:"$45,000 - $90,000",engine:"2.6L Twin-Turbo Inline 6",transmission:"5-Speed Manual",horsepower:"276hp",torque:"260 lb-ft",curbWeight:"3,153 lbs"}];return e.jsxs(e.Fragment,{children:[e.jsx(B,{as:"h3",id:n,size:"small",cs:t.parentContainerStyles,children:"Performance Car Specs"}),e.jsxs(l,{cs:t.tableStyles,"aria-labelledby":n,tabIndex:0,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:t.tableHeaderStyles,children:"Make"}),e.jsx(l.Header,{scope:"col",children:"Model"}),e.jsx(l.Header,{scope:"col",children:"Year"}),e.jsx(l.Header,{scope:"col",children:"Price"}),e.jsx(l.Header,{scope:"col",children:"Engine"}),e.jsx(l.Header,{scope:"col",children:"Transmission"}),e.jsx(l.Header,{scope:"col",children:"Horsepower"}),e.jsx(l.Header,{scope:"col",children:"Torque"}),e.jsx(l.Header,{scope:"col",children:"Curb Weight"})]})}),e.jsx(l.Body,{children:s.map((a,z)=>e.jsx(E.Fragment,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"row",cs:t.tableHeaderStyles,children:a.make}),e.jsx(l.Cell,{children:a.model}),e.jsx(l.Cell,{children:a.year}),e.jsx(l.Cell,{children:a.price}),e.jsx(l.Cell,{children:a.engine}),e.jsx(l.Cell,{children:a.transmission}),e.jsx(l.Cell,{children:a.horsepower}),e.jsx(l.Cell,{children:a.torque}),e.jsx(l.Cell,{children:a.curbWeight})]})},z))})]})]})};g.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    marginBlockEnd: system.gap.md,
  }),
  tableStyles: createStyles({
    width: px2rem(690),
  }),
  tableHeaderStyles: createStyles({
    position: 'sticky',
    left: '0',
    backgroundColor: system.color.surface.raised,
    borderInlineEnd: \`\${px2rem(2)} solid \${system.color.border.default}\`,
  }),
};

export const FixedColumn = () => {
  const headingID = useUniqueId();
  const exampleData = [
    {
      make: 'Porsche',
      model: '992 911 GT3',
      year: '2022',
      price: 'Starts at $160,000',
      engine: '4.0L Flat 6',
      transmission: 'PDK or 7-Speed Manual',
      horsepower: '502hp',
      torque: '346 lb-ft',
      curbWeight: '3,164 lbs',
    },
    {
      make: 'BMW',
      model: 'M5 Competition',
      year: '2018',
      price: 'Starts at $105,000',
      engine: 'Twin-Turbo 4.4L V8',
      transmission: 'Automatic',
      horsepower: '627hp',
      torque: '553 lb-ft',
      curbWeight: '4,345 lbs',
    },
    {
      make: 'Alfa Romeo',
      model: '1750 GTV',
      year: '1970',
      price: '$30,000 - $55,000',
      engine: '1.75L Inline 4',
      transmission: 'Manual',
      horsepower: '122hp',
      torque: '137 lb-ft',
      curbWeight: '2,140 lbs',
    },
    {
      make: 'Lotus',
      model: 'Emira',
      year: '2023',
      price: 'Starts at $78,000',
      engine: 'Supercharged 3.5L V6',
      transmission: 'Automatic or 6-Speed Manual',
      horsepower: '400hp',
      torque: '317 lb-ft',
      curbWeight: '3520 lbs',
    },
    {
      make: 'Toyota',
      model: 'Supra',
      year: '1998',
      price: '$40,000 - $80,000',
      engine: '3.0L Inline 6',
      transmission: 'Automatic or 6-Speed Manual',
      horsepower: '320hp',
      torque: '315 lb-ft',
      curbWeight: '3,599 lbs',
    },
    {
      make: 'Nissan',
      model: 'Skyline GT-R',
      year: '1994',
      price: '$45,000 - $90,000',
      engine: '2.6L Twin-Turbo Inline 6',
      transmission: '5-Speed Manual',
      horsepower: '276hp',
      torque: '260 lb-ft',
      curbWeight: '3,153 lbs',
    },
  ];
  return (
    <>
      <Heading as="h3" id={headingID} size="small" cs={styleOverrides.parentContainerStyles}>
        Performance Car Specs
      </Heading>
      <Table cs={styleOverrides.tableStyles} aria-labelledby={headingID} tabIndex={0}>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" cs={styleOverrides.tableHeaderStyles}>
              Make
            </Table.Header>
            <Table.Header scope="col">Model</Table.Header>
            <Table.Header scope="col">Year</Table.Header>
            <Table.Header scope="col">Price</Table.Header>
            <Table.Header scope="col">Engine</Table.Header>
            <Table.Header scope="col">Transmission</Table.Header>
            <Table.Header scope="col">Horsepower</Table.Header>
            <Table.Header scope="col">Torque</Table.Header>
            <Table.Header scope="col">Curb Weight</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {exampleData.map((item, index) => (
            <React.Fragment key={index}>
              <Table.Row>
                <Table.Header scope="row" cs={styleOverrides.tableHeaderStyles}>
                  {item.make}
                </Table.Header>
                <Table.Cell>{item.model}</Table.Cell>
                <Table.Cell>{item.year}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.engine}</Table.Cell>
                <Table.Cell>{item.transmission}</Table.Cell>
                <Table.Cell>{item.horsepower}</Table.Cell>
                <Table.Cell>{item.torque}</Table.Cell>
                <Table.Cell>{item.curbWeight}</Table.Cell>
              </Table.Row>
            </React.Fragment>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
`;const H=o({backgroundColor:i.surface.raised}),y=()=>e.jsx(F,{dir:"rtl",children:e.jsxs(l,{children:[e.jsx(l.Caption,{children:"משקאות קפה וגדלים"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:H,children:"מַשׁקֶה"}),e.jsx(l.Header,{scope:"col",cs:H,children:"גודל"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"אספרסו"}),e.jsx(l.Cell,{children:"1 גר"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"מקיאטו"}),e.jsx(l.Cell,{children:"2 גרם אספרסו"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"גזירה"}),e.jsx(l.Cell,{children:"2 גרם אספרסו, 1 גרם חלב מוקצף"})]})]})]})});y.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.surface.raised,
});

export const RightToLeft = () => {
  return (
    <CanvasProvider dir="rtl">
      <Table>
        <Table.Caption>משקאות קפה וגדלים</Table.Caption>
        <Table.Head>
          <Table.Row>
            <Table.Header scope="col" cs={tableHeaderStyles}>
              מַשׁקֶה
            </Table.Header>
            <Table.Header scope="col" cs={tableHeaderStyles}>
              גודל
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>אספרסו</Table.Cell>
            <Table.Cell>1 גר</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>מקיאטו</Table.Cell>
            <Table.Cell>2 גרם אספרסו</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>גזירה</Table.Cell>
            <Table.Cell>2 גרם אספרסו, 1 גרם חלב מוקצף</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </CanvasProvider>
  );
};
`;function S(n){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...k(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(M,{of:A}),`
`,e.jsx(s.h1,{id:"canvas-kit-table",children:"Canvas Kit Table"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Table"}),` is a simple styled compound component that renders a
`,e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"table"}),` element. It is used to
present information in a two-dimensional table comprised of rows and columns of cells containing
data. `,e.jsx(s.code,{children:"Table"})," is built off of ",e.jsx(s.code,{children:"BaseTable"}),` and is using
`,e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"})," features."]}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(s.p,{children:["Users may not want to use a ",e.jsx(s.code,{children:"caption"}),` so they can import
`,e.jsx(s.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-text-heading--docs",rel:"nofollow",children:"Heading"}),` or
`,e.jsx(s.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-text-text--docs",rel:"nofollow",children:"Text"}),` instead. This
will give the user more flexibility around the customization of the title/heading of their table.`]}),`
`,e.jsx(d,{code:T}),`
`,e.jsx(s.h3,{id:"right-to-left",children:"Right to Left"}),`
`,e.jsx(s.p,{children:"Table supports right-to-left languages when specified in the CanvasProvider theme."}),`
`,e.jsx(d,{code:y}),`
`,e.jsx(s.h3,{id:"example-with-caption",children:"Example with Caption"}),`
`,e.jsxs(s.p,{children:["Users are free to use a ",e.jsx(s.code,{children:"caption"})," instead of a heading. A ",e.jsx(s.code,{children:"caption"}),` is not required but it is good
for
`,e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#accessibility_concerns",rel:"nofollow",children:"accessibility"}),`
purposes.`]}),`
`,e.jsx(d,{code:u}),`
`,e.jsx(s.h3,{id:"fixed-column",children:"Fixed Column"}),`
`,e.jsxs(s.p,{children:["Users may add styles to the ",e.jsx(s.code,{children:"Table.Header"}),` to render a fixed column. The example below assigns a
`,e.jsx(s.code,{children:"width"})," to the ",e.jsx(s.code,{children:"Table"}),` to guarantee the fixed column is triggered, but you are free to omit the
`,e.jsx(s.code,{children:"width"})," if you would only like the fixed column to be triggered if necessary."]}),`
`,e.jsx(d,{code:g}),`
`,e.jsx(s.h3,{id:"base-html-table-example",children:"Base Html Table Example"}),`
`,e.jsxs(s.p,{children:[`If a user needs a standard HTML
`,e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"table"}),` with no
`,e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),` features, then they can
use the `,e.jsx(s.code,{children:"BaseTable"})," component."]}),`
`,e.jsx(d,{code:m}),`
`,e.jsx(s.h3,{id:"which-component-should-i-use",children:"Which Component Should I Use?"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["If a user wants ",e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),`
features with their Table, then use the
`,e.jsx(s.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#basic-example",rel:"nofollow",children:"Table"}),`
component.`]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["If a user ",e.jsx(s.strong,{children:"does not"}),` want
`,e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),` features with their
Table, then use the
`,e.jsx(s.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#base-html-table-example",rel:"nofollow",children:"BaseTable"}),`
component.`]}),`
`]}),`
`,e.jsx(s.h3,{id:"advanced",children:"Advanced"}),`
`,e.jsxs(s.p,{children:[`You can also find several advanced Table examples in our
`,e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns--docs",children:"Guides > Accessibility > Table Patterns"}),`
section.`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-expandable-rows--docs",children:"Expandable Rows"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-nested-rows--docs",children:"Nested Rows"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-selectable-rows--docs",children:"Selectable Rows"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-filterable-column-headers--docs",children:"Filterable Column Headers"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-sortable-column-headers--docs",children:"Sortable Column Headers"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-with-form-fields--docs",children:"With Form Fields"})}),`
`]}),`
`,e.jsx(s.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(s.p,{children:["Table and its subcomponents support custom styling via the ",e.jsx(s.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(s.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Table"})," is a styled compound wrapper around native HTML table elements (",e.jsx(s.code,{children:"<table>"}),", ",e.jsx(s.code,{children:"<caption>"}),`,
`,e.jsx(s.code,{children:"<thead>"}),", ",e.jsx(s.code,{children:"<tbody>"}),", ",e.jsx(s.code,{children:"<tfoot>"}),", ",e.jsx(s.code,{children:"<tr>"}),", ",e.jsx(s.code,{children:"<th>"}),", ",e.jsx(s.code,{children:"<td>"}),`). Assistive technology can announce column
and row headers as users move through cells `,e.jsx(s.strong,{children:"only when"}),` the markup is a real data table with
correct headers and an accessible name. `,e.jsx(s.code,{children:"Table"})," does ",e.jsx(s.strong,{children:"not"}),` include a model, roving tabindex, or
built-in sort, filter, selection, or expand behavior.`]}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"Table"}),` for tabular data with a relationship between rows and columns—not for page layout.
Prefer `,e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})}),` (CSS Grid) unless the design needs a standard HTML table layout without Grid;
then use `,e.jsx(s.strong,{children:e.jsx(s.code,{children:"BaseTable"})}),`. The same accessibility requirements apply to both. For interactive table
patterns, follow
`,e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns--docs",children:"Guides > Accessibility > Table Patterns"}),`
instead of inventing ARIA. See also
`,e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/table/",rel:"nofollow",children:"Table Pattern | APG | WAI | W3C"}),"."]}),`
`,e.jsx(s.h3,{id:"minimum-accessible-structure",children:"Minimum accessible structure"}),`
`,e.jsxs(s.p,{children:["The following matches the ",e.jsx(s.a,{href:"#example-with-caption",children:"Example with Caption"})," (",e.jsx(s.code,{children:"Basic"}),` story): native
table markup with `,e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})})," as the accessible name and ",e.jsx(s.strong,{children:e.jsx(s.code,{children:'scope="col"'})}),` on column
headers. The `,e.jsx(s.a,{href:"#basic-example",children:"Basic Example"})," uses a visible ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Heading"})})," and ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-labelledby"})}),`
instead of a caption; that is an equally valid naming pattern (see `,e.jsx(s.strong,{children:"Accessibility Requirements"}),")."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import {Table} from '@workday/canvas-kit-react/table';

<Table>
  <Table.Caption>Coffee Drinks and Sizes</Table.Caption>
  <Table.Head>
    <Table.Row>
      <Table.Header scope="col">Drink</Table.Header>
      <Table.Header scope="col">Size</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Espresso</Table.Cell>
      <Table.Cell>1 oz</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Macchiato</Table.Cell>
      <Table.Cell>2 oz Espresso</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
`})}),`
`,e.jsxs(s.p,{children:["Put ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})})," first when you use it (HTML requires ",e.jsx(s.code,{children:"<caption>"}),` as the first child of
`,e.jsx(s.code,{children:"<table>"}),"). Pair every column header with ",e.jsx(s.strong,{children:e.jsx(s.code,{children:'scope="col"'})}),". Do not render empty ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Row"})}),`
elements.`]}),`
`,e.jsx(s.h3,{id:"built-in-behaviors",children:"Built-in Behaviors"}),`
`,e.jsxs(s.p,{children:["Canvas Kit applies these automatically when you compose ",e.jsx(s.code,{children:"Table"})," (or ",e.jsx(s.code,{children:"BaseTable"}),`) with its
subcomponents. `,e.jsx(s.strong,{children:"Do not duplicate them"})," in consuming code."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Native table semantics"})," (",e.jsxs(s.em,{children:["applied by ",e.jsx(s.code,{children:"createComponent"})," element mapping"]}),"):"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table"}),": ",e.jsx(s.code,{children:"<table>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table.Caption"}),": ",e.jsx(s.code,{children:"<caption>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table.Head"}),": ",e.jsx(s.code,{children:"<thead>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table.Body"}),": ",e.jsx(s.code,{children:"<tbody>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table.Footer"}),": ",e.jsx(s.code,{children:"<tfoot>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table.Row"}),": ",e.jsx(s.code,{children:"<tr>"})," (",e.jsx(s.code,{children:"Table.Row"}),` also sets CSS Grid column tracks from the count of valid child
cells; this is layout only)`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table.Header"}),": ",e.jsx(s.code,{children:"<th>"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Table.Cell"}),": ",e.jsx(s.code,{children:"<td>"})]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Keyboard"})," (",e.jsxs(s.em,{children:["standard ",e.jsx(s.code,{children:"Table"})," behavior"]}),"):"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Table"})," uses native ",e.jsx(s.code,{children:"<table>"}),` keyboard behavior. Do not add custom key handlers or grid-widget keys
on a data table.`]}),`
`,e.jsxs(s.p,{children:["When ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})})," overflows (the root stencil uses ",e.jsx(s.code,{children:"overflow: auto"}),"), add ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"tabIndex={0}"})}),` so
keyboard users can focus and scroll it, as in the `,e.jsx(s.a,{href:"#fixed-column",children:"Fixed Column"}),` example. Omit
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:"tabIndex"})})," when the table does not scroll."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Screen reader expectations"})," (",e.jsx(s.em,{children:"when built-in behaviors are used as intended"}),"):"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The table is announced as a table, with its accessible name from ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})}),` or
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-labelledby"})})," / ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-label"})})," on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})})]}),`
`,e.jsxs(s.li,{children:["Moving across a row announces the ",e.jsx(s.strong,{children:"column"})," header (",e.jsx(s.code,{children:'scope="col"'}),")"]}),`
`,e.jsxs(s.li,{children:["Moving down a column announces the ",e.jsx(s.strong,{children:"row"})," header when body cells use ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Header"})}),` with
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:'scope="row"'})})]}),`
`,e.jsx(s.li,{children:"Interactive controls inside cells are announced with their own name and role when focused"}),`
`]}),`
`,e.jsx(s.h3,{id:"accessibility-requirements",children:"Accessibility Requirements"}),`
`,e.jsxs(s.p,{children:["Required in application code for an accessible ",e.jsx(s.code,{children:"Table"}),". There is ",e.jsx(s.strong,{children:"no"})," ",e.jsx(s.code,{children:"useTableModel"}),`. Canvas Kit
does `,e.jsx(s.strong,{children:"not"})," set ",e.jsx(s.code,{children:"scope"}),", an accessible name, ",e.jsx(s.code,{children:"tabIndex"}),", or ",e.jsx(s.code,{children:"id"})," / ",e.jsx(s.code,{children:"headers"}),` cell associations —
supply those in application code when the table below requires them. Rows marked `,e.jsx(s.em,{children:"(conditional)"}),`
apply only when the situation matches—otherwise omit.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"If no design spec is provided:"})," generate a simple data table with ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})}),`,
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Head"})})," / ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Body"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:'scope="col"'})})," on column headers, and ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Cell"})}),` for
body data. Omit `,e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Footer"})}),", row headers, ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"tabIndex"})}),", ",e.jsx(s.code,{children:"id"})," / ",e.jsx(s.code,{children:"headers"}),` associations,
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-sort"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-expanded"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-level"})}),`, selection checkboxes, and filter/sort popups
unless the spec calls for those patterns.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Heading instead of caption"})," ",e.jsx(s.em,{children:"(conditional)"}),":"]}),`
`,e.jsxs(s.p,{children:["When the design uses a visible heading (or other text) instead of ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})}),`, give that
heading a unique `,e.jsx(s.code,{children:"id"})," and set ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-labelledby"})})," on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})}),`. Do not also render
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})}),` unless the design needs both a caption and extra labelling. See
`,e.jsx(s.a,{href:"#basic-example",children:"Basic Example"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Heading as="h3" id={headingId}>
  Pizza Toppings
</Heading>
<Table aria-labelledby={headingId}>{/* … */}</Table>
`})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Interactive and advanced patterns"})," ",e.jsx(s.em,{children:"(conditional)"}),":"]}),`
`,e.jsx(s.p,{children:"Do not invent table ARIA. Copy the matching Canvas Kit guide when the spec includes that behavior:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-expandable-rows--docs",children:"Expandable Rows"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-nested-rows--docs",children:"Nested Rows"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-selectable-rows--docs",children:"Selectable Rows"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-filterable-column-headers--docs",children:"Filterable Column Headers"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-sortable-column-headers--docs",children:"Sortable Column Headers"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-with-form-fields--docs",children:"With Form Fields"})}),`
`]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Requirement"}),e.jsx(s.th,{children:"How to satisfy"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Data table, not layout"}),e.jsxs(s.td,{children:["Compose ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})})," (or ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"BaseTable"})}),") with ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Head"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Body"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Row"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Header"})}),", and ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Cell"})}),". Do not use a table to position non-tabular UI."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Accessible name"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})})," with a descriptive title, ",e.jsx(s.strong,{children:"or"})," ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-labelledby"})})," on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})})," pointing at a visible heading ",e.jsx(s.code,{children:"id"})," (see ",e.jsx(s.strong,{children:"Heading instead of caption"}),"). Canvas Kit does not set ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-labelledby"})}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Column headers"}),e.jsxs(s.td,{children:["Set ",e.jsx(s.strong,{children:e.jsx(s.code,{children:'scope="col"'})})," on every ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Header"})})," in ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Head"})}),". ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Header"})})," renders ",e.jsx(s.code,{children:"<th>"})," but does not set ",e.jsx(s.code,{children:"scope"}),". Do not use ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Cell"})})," (",e.jsx(s.code,{children:"<td>"}),") for column headers."]})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:["Row headers ",e.jsx(s.em,{children:"(conditional)"})]}),e.jsxs(s.td,{children:["When the first (or identifying) column names each row, set ",e.jsx(s.strong,{children:e.jsx(s.code,{children:'scope="row"'})})," on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Header"})})," in the body, as in ",e.jsx(s.a,{href:"#fixed-column",children:"Fixed Column"}),". Do not rely on ",e.jsx(s.code,{children:"<th>"})," alone."]})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:["Keyboard access to overflow ",e.jsx(s.em,{children:"(conditional)"})]}),e.jsxs(s.td,{children:["If the table scrolls, set ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"tabIndex={0}"})})," on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})}),". Omit it when content does not overflow."]})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:["Footer ",e.jsx(s.em,{children:"(conditional)"})]}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Footer"})})," only when the design includes summary or footer rows."]})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:["Form controls in cells ",e.jsx(s.em,{children:"(conditional)"})]}),e.jsxs(s.td,{children:["Label every control (prefer ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"FormField"})}),"). See ",e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-with-form-fields--docs",children:"With Form Fields"})," and ",e.jsx(s.a,{href:"?path=/docs/components-inputs-form-field--docs",children:"Form Field"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:["Sort, filter, select, expand, or nest ",e.jsx(s.em,{children:"(conditional)"})]}),e.jsxs(s.td,{children:["Follow the matching ",e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns--docs",children:"Table Patterns"})," guide. ",e.jsx(s.strong,{children:"Ask the developer"})," which pattern the spec requires before generating ",e.jsx(s.code,{children:"aria-sort"}),", ",e.jsx(s.code,{children:"aria-expanded"}),", ",e.jsx(s.code,{children:"aria-level"}),", ",e.jsx(s.code,{children:"aria-owns"}),", live regions, or selection checkboxes."]})]})]})]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Summary for code generation:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"REQUIRED:"})," semantic ",e.jsx(s.code,{children:"Table"})," composition, accessible name (caption or ",e.jsx(s.code,{children:"aria-labelledby"}),`),
`,e.jsx(s.code,{children:'scope="col"'})," on column headers"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CONDITIONAL:"})," heading + ",e.jsx(s.code,{children:"aria-labelledby"}),", ",e.jsx(s.code,{children:'scope="row"'}),", ",e.jsx(s.code,{children:"tabIndex={0}"}),` for overflow,
`,e.jsx(s.code,{children:"Table.Footer"}),", form-field labelling in cells, advanced table patterns from the guides"]}),`
`]}),`
`,e.jsx(s.h3,{id:"anti-patterns",children:"Anti-Patterns"}),`
`,e.jsxs(s.p,{children:["Do ",e.jsx(s.strong,{children:"not"})," generate code that does the following (see ",e.jsx(s.strong,{children:"Accessibility Requirements"}),` above for what
to supply instead):`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Manually set ",e.jsx(s.code,{children:'role="table"'}),", ",e.jsx(s.code,{children:'role="row"'}),", ",e.jsx(s.code,{children:'role="columnheader"'}),", ",e.jsx(s.code,{children:'role="rowheader"'}),`, or
`,e.jsx(s.code,{children:'role="cell"'})," on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})})," subcomponents — they already render native table elements"]}),`
`,e.jsxs(s.li,{children:["Omit ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"scope"})})," on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Header"})}),", or use ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Cell"})})," for column or row headers"]}),`
`,e.jsxs(s.li,{children:["Generate ",e.jsx(s.code,{children:"id"})," / ",e.jsx(s.code,{children:"headers"})," associations on cells for a simple data table — use ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"scope"})}),` instead
(see `,e.jsx(s.strong,{children:"Accessibility Requirements"}),")"]}),`
`,e.jsxs(s.li,{children:["Leave the table unnamed (no ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-labelledby"})}),", or ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-label"})}),`), or
set `,e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-labelledby"})})," when ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Caption"})})," already names the table"]}),`
`,e.jsx(s.li,{children:"Use a table for page layout"}),`
`,e.jsxs(s.li,{children:["Add ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"tabIndex={0}"})}),` on a table that does not scroll, or omit it on a horizontally/vertically
scrollable table`]}),`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-sort"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-expanded"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-level"})}),", ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"aria-owns"})}),`, or selection
checkboxes by default — those belong to specific
`,e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns--docs",children:"Table Patterns"}),` and need a matching design
spec`]}),`
`,e.jsxs(s.li,{children:["Nest a ",e.jsx(s.code,{children:"<table>"})," inside a cell to fake hierarchy, or add extra ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Body"})}),` elements to fake a
tree — see `,e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-nested-rows--docs",children:"Nested Rows"})]}),`
`,e.jsxs(s.li,{children:['Put a "Select All" checkbox in a column header ',e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Header"})}),` without following
`,e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-selectable-rows--docs",children:"Selectable Rows"})]}),`
`,e.jsxs(s.li,{children:[`Place unlabeled inputs in cells, or rely on the column header alone without checking
`,e.jsx(s.a,{href:"?path=/docs/guides-accessibility-table-patterns-with-form-fields--docs",children:"With Form Fields"})]}),`
`,e.jsxs(s.li,{children:["Generate ",e.jsx(s.strong,{children:e.jsx(s.code,{children:'role="grid"'})})," / grid-widget keyboard behavior on ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table"})}),` — CSS Grid on
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:"Table.Row"})})," is visual layout, not an ARIA grid"]}),`
`]}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(I,{name:"Table",fileName:"/react/"})]})}function W(n={}){const{wrapper:s}={...k(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(S,{...n})}):S(n)}const A={title:"Components/Containers/Table",component:l,tags:["autodocs"],parameters:{docs:{page:W}}},c={render:u},h={render:m},b={render:T},x={render:g},p={render:y};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: BaseHtmlTableExample
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: BasicWithHeadingExample
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: FixedColumnExample
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: RightToLeftExample
}`,...p.parameters?.docs?.source}}};const ds=["Basic","BaseHtmlTable","BasicWithHeading","FixedColumn","RightToLeft"];export{h as BaseHtmlTable,c as Basic,b as BasicWithHeading,x as FixedColumn,p as RightToLeft,ds as __namedExportsOrder,A as default};
