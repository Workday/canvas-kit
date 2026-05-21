import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as H}from"./index-3YbjYt95.js";import{ae as M}from"./index-CKIVHgBl.js";import{E as n,c as E}from"./union-BGK8rgUq.js";import{e as W}from"./index-IfJi-UCQ.js";import{T as l,B as o}from"./Table-CdIXWeyG.js";import{c as t}from"./cs-rfTTo7Bg.js";import{c as i,g as B}from"./index-5dfzm_kn.js";import{u as R}from"./useUniqueId-DC-hMIDg.js";import{H as v}from"./TypeLevelComponents-wp2T_OQ8.js";import{p as w}from"./px2rem-C0KbprIx.js";import{C as _}from"./CanvasProvider-Bo6bulY0.js";import"./iframe-Diz4iYt9.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-BveIfg6z.js";import"./types-wqmYQQWa.js";import"./SystemIcon-B-7phfvA.js";import"./Svg-D3ADUsbH.js";import"./components-TQGor17P.js";import"./StatusIndicator-CnMuDZZ1.js";import"./Text-CjfRv3b_.js";import"./mergeStyles-Oiw5aw0F.js";import"./Box-ndVNvIIr.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./useConstant-CUZppmaV.js";import"./flex-Kr2CKVQw.js";import"./grid-Dow_xxo7.js";import"./Card-7nQmsgck.js";import"./ExternalHyperlink-Cg10-172.js";import"./Hyperlink-BYge7S98.js";import"./external-link-BZdacz1K.js";import"./SecondaryButton-BOjVH68X.js";import"./BaseButton-BL7nFA1x.js";import"./Button-BA8q93Gy.js";import"./lerna-BQzkLDlj.js";import"./Tooltip-tTgFOjnO.js";import"./useTooltip-o9IX8o6j.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useCloseOnEscape-CKxDZdmA.js";import"./Popper-uJmtTCtl.js";import"./TertiaryButton-BMNSyiGZ.js";import"./index-5mrAZJYD.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-DBHTUBds.js";import"./ColorInput-BfqHF2t6.js";import"./check-small-C7Z-gSGs.js";import"./TextInput-CbP15KMM.js";import"./types-DXdjelYI.js";import"./FormField-BFfTRNZ_.js";import"./check-Bvurkvei.js";import"./Expandable-MlUI5j6z.js";import"./Avatar-z3-Jg-YK.js";import"./chevron-up-BKywTRZX.js";import"./Dialog-C_3S2hld.js";import"./Popup-B5XfOse7.js";import"./x-D9WWWeCM.js";import"./usePopupTarget-d-sc7vzp.js";import"./useInitialFocus-CEIClNeF.js";import"./useReturnFocus-Bjuj9tfk.js";import"./useFocusRedirect-vdWyGSd2.js";import"./Breadcrumbs-DZe9oM1Q.js";import"./useOverflowListTarget-BsYp8oFk.js";import"./useListItemSelect-ChUTjGFj.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-DIzcINvf.js";import"./OverflowTooltip-BiM1Eefj.js";import"./chevron-right-small-DxmMaev8.js";import"./related-actions-TP4TzHu6.js";import"./Flex-nKWkBWu3.js";const g=t({backgroundColor:i.surface.default}),x=()=>e.jsxs(l,{children:[e.jsx(l.Caption,{children:"Coffee Drinks and Sizes"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:g,children:"Drink"}),e.jsx(l.Header,{scope:"col",cs:g,children:"Size"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Espresso"}),e.jsx(l.Cell,{children:"1 oz"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Macchiato"}),e.jsx(l.Cell,{children:"2 oz Espresso"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cortado"}),e.jsx(l.Cell,{children:"2 oz Espresso, 1 oz Foamed Milk"})]}),e.jsx(l.Row,{}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cappuccino"}),e.jsx(l.Cell,{children:"2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk"})]})]})]});x.__RAW__=`import {Table} from '@workday/canvas-kit-react/table';
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
`;const T={parentContainerStyles:t({marginBlockEnd:B.md}),tableHeaderStyles:t({backgroundColor:i.surface.raised})},u=()=>{const r=R();return e.jsxs(e.Fragment,{children:[e.jsx(v,{as:"h3",id:r,size:"small",cs:T.parentContainerStyles,children:"Pizza Toppings"}),e.jsxs(l,{"aria-labelledby":r,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:T.tableHeaderStyles,children:"Toppings"}),e.jsx(l.Header,{scope:"col",cs:T.tableHeaderStyles,children:"Amount"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Pepperoni"}),e.jsx(l.Cell,{children:"2.5 oz"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Mozzarella"}),e.jsx(l.Cell,{children:"5 oz"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Basil"}),e.jsx(l.Cell,{children:"10 Leaves"})]})]})]})]})};u.__RAW__=`import {useUniqueId} from '@workday/canvas-kit-react/common';
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
`;const c={parentContainerStyles:t({marginBlockEnd:B.md}),tableStyles:t({width:w(690)}),tableHeaderStyles:t({position:"sticky",left:"0",backgroundColor:i.surface.raised,borderInlineEnd:`${w(2)} solid ${i.border.default}`})},C=()=>{const r=R(),a=[{make:"Porsche",model:"992 911 GT3",year:"2022",price:"Starts at $160,000",engine:"4.0L Flat 6",transmission:"PDK or 7-Speed Manual",horsepower:"502hp",torque:"346 lb-ft",curbWeight:"3,164 lbs"},{make:"BMW",model:"M5 Competition",year:"2018",price:"Starts at $105,000",engine:"Twin-Turbo 4.4L V8",transmission:"Automatic",horsepower:"627hp",torque:"553 lb-ft",curbWeight:"4,345 lbs"},{make:"Alfa Romeo",model:"1750 GTV",year:"1970",price:"$30,000 - $55,000",engine:"1.75L Inline 4",transmission:"Manual",horsepower:"122hp",torque:"137 lb-ft",curbWeight:"2,140 lbs"},{make:"Lotus",model:"Emira",year:"2023",price:"Starts at $78,000",engine:"Supercharged 3.5L V6",transmission:"Automatic or 6-Speed Manual",horsepower:"400hp",torque:"317 lb-ft",curbWeight:"3520 lbs"},{make:"Toyota",model:"Supra",year:"1998",price:"$40,000 - $80,000",engine:"3.0L Inline 6",transmission:"Automatic or 6-Speed Manual",horsepower:"320hp",torque:"315 lb-ft",curbWeight:"3,599 lbs"},{make:"Nissan",model:"Skyline GT-R",year:"1994",price:"$45,000 - $90,000",engine:"2.6L Twin-Turbo Inline 6",transmission:"5-Speed Manual",horsepower:"276hp",torque:"260 lb-ft",curbWeight:"3,153 lbs"}];return e.jsxs(e.Fragment,{children:[e.jsx(v,{as:"h3",id:r,size:"small",cs:c.parentContainerStyles,children:"Performance Car Specs"}),e.jsxs(l,{cs:c.tableStyles,"aria-labelledby":r,tabIndex:0,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:c.tableHeaderStyles,children:"Make"}),e.jsx(l.Header,{scope:"col",children:"Model"}),e.jsx(l.Header,{scope:"col",children:"Year"}),e.jsx(l.Header,{scope:"col",children:"Price"}),e.jsx(l.Header,{scope:"col",children:"Engine"}),e.jsx(l.Header,{scope:"col",children:"Transmission"}),e.jsx(l.Header,{scope:"col",children:"Horsepower"}),e.jsx(l.Header,{scope:"col",children:"Torque"}),e.jsx(l.Header,{scope:"col",children:"Curb Weight"})]})}),e.jsx(l.Body,{children:a.map((s,z)=>e.jsx(W.Fragment,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"row",cs:c.tableHeaderStyles,children:s.make}),e.jsx(l.Cell,{children:s.model}),e.jsx(l.Cell,{children:s.year}),e.jsx(l.Cell,{children:s.price}),e.jsx(l.Cell,{children:s.engine}),e.jsx(l.Cell,{children:s.transmission}),e.jsx(l.Cell,{children:s.horsepower}),e.jsx(l.Cell,{children:s.torque}),e.jsx(l.Cell,{children:s.curbWeight})]})},z))})]})]})};C.__RAW__=`import React from 'react';

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
`;const f=t({backgroundColor:i.surface.raised}),y=()=>e.jsx(_,{dir:"rtl",children:e.jsxs(l,{children:[e.jsx(l.Caption,{children:"משקאות קפה וגדלים"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Header,{scope:"col",cs:f,children:"מַשׁקֶה"}),e.jsx(l.Header,{scope:"col",cs:f,children:"גודל"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"אספרסו"}),e.jsx(l.Cell,{children:"1 גר"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"מקיאטו"}),e.jsx(l.Cell,{children:"2 גרם אספרסו"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"גזירה"}),e.jsx(l.Cell,{children:"2 גרם אספרסו, 1 גרם חלב מוקצף"})]})]})]})});y.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
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
`;const S=t({backgroundColor:i.surface.raised}),j=()=>e.jsxs(o,{children:[e.jsx(o.Caption,{children:"Coffee Drinks and Sizes"}),e.jsx(o.Head,{children:e.jsxs(o.Row,{children:[e.jsx(o.Header,{scope:"col",cs:S,children:"Drink"}),e.jsx(o.Header,{scope:"col",cs:S,children:"Size"})]})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Espresso"}),e.jsx(o.Cell,{children:"1 oz"})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Macchiato"}),e.jsx(o.Cell,{children:"2 oz Espresso"})]}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Cortado"}),e.jsx(o.Cell,{children:"2 oz Espresso, 1 oz Foamed Milk"})]}),e.jsx(o.Row,{}),e.jsxs(o.Row,{children:[e.jsx(o.Cell,{children:"Cappuccino"}),e.jsx(o.Cell,{children:"2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk"})]})]})]});j.__RAW__=`import {BaseTable} from '@workday/canvas-kit-react/table';
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
`;function k(r){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...H(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(M,{of:$}),`
`,e.jsx(a.h1,{id:"canvas-kit-table",children:"Canvas Kit Table"}),`
`,e.jsxs(a.p,{children:[e.jsx(a.code,{children:"Table"}),` is a simple styled compound component that renders a
`,e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"table"}),` element. It is used to
present information in a two-dimensional table comprised of rows and columns of cells containing
data. `,e.jsx(a.code,{children:"Table"})," is built off of ",e.jsx(a.code,{children:"BaseTable"}),` and is using
`,e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"})," features."]}),`
`,e.jsx(a.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(a.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(a.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(a.p,{children:["Users may not want to use a ",e.jsx(a.code,{children:"caption"}),` so they can import
`,e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-text-heading--docs",rel:"nofollow",children:"Heading"}),` or
`,e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-text-text--docs",rel:"nofollow",children:"Text"}),` instead. This
will give the user more flexibility around the customization of the title/heading of their table.`]}),`
`,e.jsx(n,{code:u}),`
`,e.jsx(a.h3,{id:"right-to-left",children:"Right to Left"}),`
`,e.jsx(a.p,{children:"Table supports right-to-left languages when specified in the CanvasProvider theme."}),`
`,e.jsx(n,{code:y}),`
`,e.jsx(a.h3,{id:"example-with-caption",children:"Example with Caption"}),`
`,e.jsxs(a.p,{children:["Users are free to use a ",e.jsx(a.code,{children:"caption"})," instead of a heading. A ",e.jsx(a.code,{children:"caption"}),` is not required but it is good
for
`,e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#accessibility_concerns",rel:"nofollow",children:"accessibility"}),`
purposes.`]}),`
`,e.jsx(n,{code:x}),`
`,e.jsx(a.h3,{id:"fixed-column",children:"Fixed Column"}),`
`,e.jsxs(a.p,{children:["Users may add styles to the ",e.jsx(a.code,{children:"Table.Header"}),` to render a fixed column. The example below assigns a
`,e.jsx(a.code,{children:"width"})," to the ",e.jsx(a.code,{children:"Table"}),` to guarantee the fixed column is triggered, but you are free to omit the
`,e.jsx(a.code,{children:"width"})," if you would only like the fixed column to be triggered if necessary."]}),`
`,e.jsx(n,{code:C}),`
`,e.jsx(a.h3,{id:"base-html-table-example",children:"Base Html Table Example"}),`
`,e.jsxs(a.p,{children:[`If a user needs a standard HTML
`,e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"table"}),` with no
`,e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),` features, then they can
use the `,e.jsx(a.code,{children:"BaseTable"})," component."]}),`
`,e.jsx(n,{code:j}),`
`,e.jsx(a.h3,{id:"which-component-should-i-use",children:"Which Component Should I Use?"}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["If a user wants ",e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),`
features with their Table, then use the
`,e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#basic-example",rel:"nofollow",children:"Table"}),`
component.`]}),`
`]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["If a user ",e.jsx(a.strong,{children:"does not"}),` want
`,e.jsx(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),` features with their
Table, then use the
`,e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#base-html-table-example",rel:"nofollow",children:"BaseTable"}),`
component.`]}),`
`]}),`
`,e.jsx(a.h3,{id:"advanced",children:"Advanced"}),`
`,e.jsx(a.p,{children:"You can also find several advanced Table examples in our Storybook Examples section."}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#expandable-rows",rel:"nofollow",children:"Expandable Rows"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#selectable-rows",rel:"nofollow",children:"Selectable Rows "})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#filterable-column-headers",rel:"nofollow",children:"Filterable Column Headers"})}),`
`,e.jsx(a.li,{children:e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#sortable-column-headers",rel:"nofollow",children:"Sortable Column Headers"})}),`
`]}),`
`,e.jsx(a.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(a.p,{children:["Table and its subcomponents support custom styling via the ",e.jsx(a.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(a.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(E,{name:"Table",fileName:"/react/"})]})}function I(r={}){const{wrapper:a}={...H(),...r.components};return a?e.jsx(a,{...r,children:e.jsx(k,{...r})}):k(r)}const $={title:"Components/Containers/Table",component:l,tags:["autodocs"],parameters:{docs:{page:I}}},d={render:x},p={render:j},b={render:u},m={render:C},h={render:y};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: BaseHtmlTableExample
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: BasicWithHeadingExample
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: FixedColumnExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: RightToLeftExample
}`,...h.parameters?.docs?.source}}};const tl=["Basic","BaseHtmlTable","BasicWithHeading","FixedColumn","RightToLeft"];export{p as BaseHtmlTable,d as Basic,b as BasicWithHeading,m as FixedColumn,h as RightToLeft,tl as __namedExportsOrder,$ as default};
