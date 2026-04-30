import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as k}from"./index-3YbjYt95.js";import{ae as M}from"./index-Ued3TV6s.js";import{E as n,c as E}from"./union-B1cmIDVh.js";import{e as W}from"./index-IfJi-UCQ.js";import{T as a,B as o}from"./Table-DPxnEvid.js";import{c as t}from"./cs-DvbI9OYs.js";import{c as i,g as R}from"./index-CYsyLHR7.js";import{u as B}from"./useUniqueId-DC-hMIDg.js";import{H as v}from"./TypeLevelComponents-DgctLa3l.js";import{p as w}from"./px2rem-C0KbprIx.js";import{C as _}from"./CanvasProvider-BRuur9nH.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./types-wqmYQQWa.js";import"./SystemIcon-Bp_gYX7o.js";import"./Svg-Z79y1CtT.js";import"./components-CXVvXGX8.js";import"./StatusIndicator-D9ob0TlI.js";import"./Text-Dt7EG7Lz.js";import"./mergeStyles-UZCXOJf5.js";import"./Box-BI0lR_iD.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-DmjmG7No.js";import"./grid-CZ8P1z9H.js";import"./Card-jS6NBqm3.js";import"./ExternalHyperlink-aQwGH6Hm.js";import"./Hyperlink-nKvi0fIc.js";import"./external-link-Bfm4m86M.js";import"./SecondaryButton-DBrzjuE9.js";import"./BaseButton-DlhoOuWR.js";import"./styled-BsZD6Etj.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./Button-_9ty_XDZ.js";import"./lerna-slKU9GXb.js";import"./Tooltip-B3V4skOm.js";import"./useTooltip-DUG7iIce.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useCloseOnEscape-BlNcGwOO.js";import"./Popper-CGqk9_xm.js";import"./TertiaryButton-Byu4oUFZ.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-BZa6q9cC.js";import"./ColorInput-DdzZruxs.js";import"./check-small-CEmhQ7AS.js";import"./TextInput-6zwAIbi7.js";import"./types-DXdjelYI.js";import"./FormField-DJsuX8Xy.js";import"./check-BG7HONvH.js";import"./Expandable-QifH75dX.js";import"./Avatar-Cf4g1-9p.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-DjQbCvjl.js";import"./Popup-CSV3rOyv.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-ukAEISND.js";import"./useInitialFocus-D6f9kMrD.js";import"./useReturnFocus-CF7XwcyY.js";import"./useFocusRedirect-CjUSvw7a.js";import"./Breadcrumbs-B3iwir0b.js";import"./useOverflowListTarget-BiBJ1XQw.js";import"./useListItemSelect-DTkyX0KL.js";import"./useMount-CAK2BN3_.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D8z2UdGJ.js";import"./OverflowTooltip-DIr6RY4Y.js";import"./chevron-right-small-CQ6vqfU4.js";import"./related-actions-DlhfUCCz.js";import"./Flex-hE1PVdSE.js";const g=t({backgroundColor:i.surface.default}),x=()=>e.jsxs(a,{children:[e.jsx(a.Caption,{children:"Coffee Drinks and Sizes"}),e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.Header,{scope:"col",cs:g,children:"Drink"}),e.jsx(a.Header,{scope:"col",cs:g,children:"Size"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Espresso"}),e.jsx(a.Cell,{children:"1 oz"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Macchiato"}),e.jsx(a.Cell,{children:"2 oz Espresso"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Cortado"}),e.jsx(a.Cell,{children:"2 oz Espresso, 1 oz Foamed Milk"})]}),e.jsx(a.Row,{}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Cappuccino"}),e.jsx(a.Cell,{children:"2 oz Espresso, 2 oz Foamed Milk, 2 oz Steamed Milk"})]})]})]});x.__RAW__=`import {Table} from '@workday/canvas-kit-react/table';
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
`;const T={parentContainerStyles:t({marginBottom:R.md}),tableHeaderStyles:t({backgroundColor:i.surface.raised})},u=()=>{const r=B();return e.jsxs(e.Fragment,{children:[e.jsx(v,{as:"h3",id:r,size:"small",cs:T.parentContainerStyles,children:"Pizza Toppings"}),e.jsxs(a,{"aria-labelledby":r,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.Header,{scope:"col",cs:T.tableHeaderStyles,children:"Toppings"}),e.jsx(a.Header,{scope:"col",cs:T.tableHeaderStyles,children:"Amount"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Pepperoni"}),e.jsx(a.Cell,{children:"2.5 oz"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Mozzarella"}),e.jsx(a.Cell,{children:"5 oz"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Basil"}),e.jsx(a.Cell,{children:"10 Leaves"})]})]})]})]})};u.__RAW__=`import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    marginBottom: system.gap.md,
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
`;const c={parentContainerStyles:t({marginBottom:R.md}),tableStyles:t({width:w(690)}),tableHeaderStyles:t({position:"sticky",left:"0",backgroundColor:i.surface.raised,borderRight:`${w(2)} solid ${i.border.default}`})},C=()=>{const r=B(),l=[{make:"Porsche",model:"992 911 GT3",year:"2022",price:"Starts at $160,000",engine:"4.0L Flat 6",transmission:"PDK or 7-Speed Manual",horsepower:"502hp",torque:"346 lb-ft",curbWeight:"3,164 lbs"},{make:"BMW",model:"M5 Competition",year:"2018",price:"Starts at $105,000",engine:"Twin-Turbo 4.4L V8",transmission:"Automatic",horsepower:"627hp",torque:"553 lb-ft",curbWeight:"4,345 lbs"},{make:"Alfa Romeo",model:"1750 GTV",year:"1970",price:"$30,000 - $55,000",engine:"1.75L Inline 4",transmission:"Manual",horsepower:"122hp",torque:"137 lb-ft",curbWeight:"2,140 lbs"},{make:"Lotus",model:"Emira",year:"2023",price:"Starts at $78,000",engine:"Supercharged 3.5L V6",transmission:"Automatic or 6-Speed Manual",horsepower:"400hp",torque:"317 lb-ft",curbWeight:"3520 lbs"},{make:"Toyota",model:"Supra",year:"1998",price:"$40,000 - $80,000",engine:"3.0L Inline 6",transmission:"Automatic or 6-Speed Manual",horsepower:"320hp",torque:"315 lb-ft",curbWeight:"3,599 lbs"},{make:"Nissan",model:"Skyline GT-R",year:"1994",price:"$45,000 - $90,000",engine:"2.6L Twin-Turbo Inline 6",transmission:"5-Speed Manual",horsepower:"276hp",torque:"260 lb-ft",curbWeight:"3,153 lbs"}];return e.jsxs(e.Fragment,{children:[e.jsx(v,{as:"h3",id:r,size:"small",cs:c.parentContainerStyles,children:"Performance Car Specs"}),e.jsxs(a,{cs:c.tableStyles,"aria-labelledby":r,tabIndex:0,children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.Header,{scope:"col",cs:c.tableHeaderStyles,children:"Make"}),e.jsx(a.Header,{scope:"col",children:"Model"}),e.jsx(a.Header,{scope:"col",children:"Year"}),e.jsx(a.Header,{scope:"col",children:"Price"}),e.jsx(a.Header,{scope:"col",children:"Engine"}),e.jsx(a.Header,{scope:"col",children:"Transmission"}),e.jsx(a.Header,{scope:"col",children:"Horsepower"}),e.jsx(a.Header,{scope:"col",children:"Torque"}),e.jsx(a.Header,{scope:"col",children:"Curb Weight"})]})}),e.jsx(a.Body,{children:l.map((s,z)=>e.jsx(W.Fragment,{children:e.jsxs(a.Row,{children:[e.jsx(a.Header,{scope:"row",cs:c.tableHeaderStyles,children:s.make}),e.jsx(a.Cell,{children:s.model}),e.jsx(a.Cell,{children:s.year}),e.jsx(a.Cell,{children:s.price}),e.jsx(a.Cell,{children:s.engine}),e.jsx(a.Cell,{children:s.transmission}),e.jsx(a.Cell,{children:s.horsepower}),e.jsx(a.Cell,{children:s.torque}),e.jsx(a.Cell,{children:s.curbWeight})]})},z))})]})]})};C.__RAW__=`import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Table} from '@workday/canvas-kit-react/table';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    marginBottom: system.gap.md,
  }),
  tableStyles: createStyles({
    width: px2rem(690),
  }),
  tableHeaderStyles: createStyles({
    position: 'sticky',
    left: '0',
    backgroundColor: system.color.surface.raised,
    borderRight: \`\${px2rem(2)} solid \${system.color.border.default}\`,
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
`;const f=t({backgroundColor:i.surface.raised}),y=()=>e.jsx(_,{dir:"rtl",children:e.jsxs(a,{children:[e.jsx(a.Caption,{children:"משקאות קפה וגדלים"}),e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.Header,{scope:"col",cs:f,children:"מַשׁקֶה"}),e.jsx(a.Header,{scope:"col",cs:f,children:"גודל"})]})}),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"אספרסו"}),e.jsx(a.Cell,{children:"1 גר"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"מקיאטו"}),e.jsx(a.Cell,{children:"2 גרם אספרסו"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"גזירה"}),e.jsx(a.Cell,{children:"2 גרם אספרסו, 1 גרם חלב מוקצף"})]})]})]})});y.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
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
`;function H(r){const l={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(M,{of:I}),`
`,e.jsx(l.h1,{id:"canvas-kit-table",children:"Canvas Kit Table"}),`
`,e.jsxs(l.p,{children:[e.jsx(l.code,{children:"Table"}),` is a simple styled compound component that renders a
`,e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"table"}),` element. It is used to
present information in a two-dimensional table comprised of rows and columns of cells containing
data. `,e.jsx(l.code,{children:"Table"})," is built off of ",e.jsx(l.code,{children:"BaseTable"}),` and is using
`,e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"})," features."]}),`
`,e.jsx(l.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(l.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(l.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(l.p,{children:["Users may not want to use a ",e.jsx(l.code,{children:"caption"}),` so they can import
`,e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-text-heading--docs",rel:"nofollow",children:"Heading"}),` or
`,e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-text-text--docs",rel:"nofollow",children:"Text"}),` instead. This
will give the user more flexibility around the customization of the title/heading of their table.`]}),`
`,e.jsx(n,{code:u}),`
`,e.jsx(l.h3,{id:"right-to-left",children:"Right to Left"}),`
`,e.jsx(l.p,{children:"Table supports right-to-left languages when specified in the CanvasProvider theme."}),`
`,e.jsx(n,{code:y}),`
`,e.jsx(l.h3,{id:"example-with-caption",children:"Example with Caption"}),`
`,e.jsxs(l.p,{children:["Users are free to use a ",e.jsx(l.code,{children:"caption"})," instead of a heading. A ",e.jsx(l.code,{children:"caption"}),` is not required but it is good
for
`,e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#accessibility_concerns",rel:"nofollow",children:"accessibility"}),`
purposes.`]}),`
`,e.jsx(n,{code:x}),`
`,e.jsx(l.h3,{id:"fixed-column",children:"Fixed Column"}),`
`,e.jsxs(l.p,{children:["Users may add styles to the ",e.jsx(l.code,{children:"Table.Header"}),` to render a fixed column. The example below assigns a
`,e.jsx(l.code,{children:"width"})," to the ",e.jsx(l.code,{children:"Table"}),` to guarantee the fixed column is triggered, but you are free to omit the
`,e.jsx(l.code,{children:"width"})," if you would only like the fixed column to be triggered if necessary."]}),`
`,e.jsx(n,{code:C}),`
`,e.jsx(l.h3,{id:"base-html-table-example",children:"Base Html Table Example"}),`
`,e.jsxs(l.p,{children:[`If a user needs a standard HTML
`,e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",rel:"nofollow",children:"table"}),` with no
`,e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),` features, then they can
use the `,e.jsx(l.code,{children:"BaseTable"})," component."]}),`
`,e.jsx(n,{code:j}),`
`,e.jsx(l.h3,{id:"which-component-should-i-use",children:"Which Component Should I Use?"}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsxs(l.p,{children:["If a user wants ",e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),`
features with their Table, then use the
`,e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#basic-example",rel:"nofollow",children:"Table"}),`
component.`]}),`
`]}),`
`,e.jsxs(l.blockquote,{children:[`
`,e.jsxs(l.p,{children:["If a user ",e.jsx(l.strong,{children:"does not"}),` want
`,e.jsx(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",rel:"nofollow",children:"CSS Grid"}),` features with their
Table, then use the
`,e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-containers-table--docs#base-html-table-example",rel:"nofollow",children:"BaseTable"}),`
component.`]}),`
`]}),`
`,e.jsx(l.h3,{id:"advanced",children:"Advanced"}),`
`,e.jsx(l.p,{children:"You can also find several advanced Table examples in our Storybook Examples section."}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#expandable-rows",rel:"nofollow",children:"Expandable Rows"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#selectable-rows",rel:"nofollow",children:"Selectable Rows "})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#filterable-column-headers",rel:"nofollow",children:"Filterable Column Headers"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/guides-accessibility-examples-advanced-tables--docs#sortable-column-headers",rel:"nofollow",children:"Sortable Column Headers"})}),`
`]}),`
`,e.jsx(l.h3,{id:"custom-styles",children:"Custom Styles"}),`
`,e.jsxs(l.p,{children:["Table and its subcomponents support custom styling via the ",e.jsx(l.code,{children:"cs"}),` prop. For more information, check
our
`,e.jsx(l.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs",rel:"nofollow",children:'"How To Customize Styles"'}),"."]}),`
`,e.jsx(l.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(E,{name:"Table",fileName:"/react/"})]})}function $(r={}){const{wrapper:l}={...k(),...r.components};return l?e.jsx(l,{...r,children:e.jsx(H,{...r})}):H(r)}const I={title:"Components/Containers/Table",component:a,tags:["autodocs"],parameters:{docs:{page:$}}},d={render:x},p={render:j},b={render:u},m={render:C},h={render:y};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: BaseHtmlTableExample
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: BasicWithHeadingExample
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: FixedColumnExample
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: RightToLeftExample
}`,...h.parameters?.docs?.source}}};const ca=["Basic","BaseHtmlTable","BasicWithHeading","FixedColumn","RightToLeft"];export{p as BaseHtmlTable,d as Basic,b as BasicWithHeading,m as FixedColumn,h as RightToLeft,ca as __namedExportsOrder,I as default};
