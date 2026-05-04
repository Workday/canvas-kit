import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{P as n,g as c,b as d,a as m,u as $}from"./Pagination-BxlSW3hs.js";import{S as G}from"./SecondaryButton-BfP_SOlX.js";import{C as W}from"./CanvasProvider-0Y3auRRO.js";import{r as R}from"./index-IfJi-UCQ.js";import{u as H}from"./useTheme-DY7-Bclm.js";import{u as J}from"./bundle.esm-C4XAbbi1.js";import{F as E}from"./Flex-ahHEmhSv.js";import{p as O,f as X}from"./index-CYsyLHR7.js";import{B as Z}from"./TypeLevelComponents-C7vP30km.js";import{useMDXComponents as A}from"./index-3YbjYt95.js";import{ae as U}from"./index-DR-D6EjG.js";import{E as u,c as g}from"./union-CT45YaQX.js";import"./components-DlilqqSw.js";import"./mergeStyles-DCTLot6K.js";import"./Box-CfIP0C5s.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-C5MVqyzH.js";import"./useConstant-CUZppmaV.js";import"./flex-DkXQ5yGi.js";import"./grid-D6gKNnY6.js";import"./chevron-left-small-BnU5BosP.js";import"./types-wqmYQQWa.js";import"./chevron-right-small-CQ6vqfU4.js";import"./TertiaryButton-a9_U68ho.js";import"./BaseButton-DwGgd9H6.js";import"./styled-BsZD6Etj.js";import"./SystemIcon-DsR4zk14.js";import"./Svg-DM9VnPZD.js";import"./px2rem-C0KbprIx.js";import"./Button-Cg4j9RPw.js";import"./TextInput-3pzA4Qd-.js";import"./types-DXdjelYI.js";import"./index-DKOKnxgv.js";import"./Text-Tayi47N3.js";import"./iframe-WXRxFeZ6.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";import"./sparkle-DWb20mIY.js";import"./StatusIndicator-BBevkT_x.js";import"./Card-Dd5fhXE2.js";import"./ExternalHyperlink-883FduMU.js";import"./Hyperlink-BOmKsWiK.js";import"./external-link-Bfm4m86M.js";import"./lerna-CYqneavZ.js";import"./Tooltip-BChPPqz6.js";import"./useTooltip-DDaYfV4J.js";import"./getTransformFromPlacement-Dk4LTPXM.js";import"./useDisclosureModel-a5nE6ygN.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useCloseOnEscape-BL74-I4Y.js";import"./Popper-DTfQE2mh.js";import"./upperFirst-BXmTrG0i.js";import"./ColorPicker-CBKqyMLA.js";import"./ColorInput-BagXndnK.js";import"./check-small-CEmhQ7AS.js";import"./FormField-BYE5lD9z.js";import"./check-BG7HONvH.js";import"./Expandable-CS2WldYr.js";import"./Avatar-DPtlMwRl.js";import"./chevron-up-D6Ci4o5O.js";import"./Dialog-B3MQG3mt.js";import"./Popup-B-4w8IgE.js";import"./x-BnLC6lG-.js";import"./usePopupTarget-BtGg5hr7.js";import"./useInitialFocus-BKfmV5gZ.js";import"./useReturnFocus-Xz-_vB17.js";import"./useFocusRedirect-DOtUfDeI.js";import"./Breadcrumbs-DO3VFsT6.js";import"./useOverflowListTarget-D7Z7W38z.js";import"./useListItemSelect-D_3E8f4q.js";import"./useMount-CAK2BN3_.js";import"./Menu-BIIZhJne.js";import"./OverflowTooltip-xP33ONM-.js";import"./related-actions-DlhfUCCz.js";import"./Table-C_Pr0zfe.js";const L=()=>{const r=c(10,100);return e.jsxs(n,{onPageChange:a=>console.log(a),"aria-label":"Pagination",lastPage:r,children:[e.jsxs(n.Controls,{children:[e.jsx(n.StepToPreviousButton,{"aria-label":"Previous"}),e.jsx(n.PageList,{children:({state:a})=>a.range.map(o=>e.jsx(n.PageListItem,{children:e.jsx(n.PageButton,{"aria-label":`Page ${o}`,pageNumber:o})},o))}),e.jsx(n.StepToNextButton,{"aria-label":"Next"})]}),e.jsx(n.AdditionalDetails,{children:({state:a})=>`${d(a.currentPage,10)}-${m(a.currentPage,10,100)} of 100 results`})]})};L.__RAW__=`import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const Basic = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      onPageChange={pageNumber => console.log(pageNumber)}
      aria-label="Pagination"
      lastPage={lastPage}
    >
      <Pagination.Controls>
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={\`Page \${pageNumber}\`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails>
        {({state}) =>
          \`\${getVisibleResultsMin(state.currentPage, resultCount)}-\${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of \${totalCount} results\`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};
`;const T=()=>{const r=c(10,100);return e.jsxs(n,{"aria-label":"Pagination",lastPage:r,onPageChange:a=>console.log(a),rangeSize:3,children:[e.jsxs(n.Controls,{children:[e.jsx(n.StepToPreviousButton,{"aria-label":"Previous"}),e.jsx(n.PageList,{children:({state:a})=>a.range.map(o=>e.jsx(n.PageListItem,{children:e.jsx(n.PageButton,{"aria-label":`Page ${o}`,pageNumber:o})},o))}),e.jsx(n.StepToNextButton,{"aria-label":"Next"})]}),e.jsx(n.AdditionalDetails,{shouldHideDetails:!0,children:({state:a})=>`${d(a.currentPage,10)}-${m(a.currentPage,10,100)} of 100 results`})]})};T.__RAW__=`import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const CustomRange = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      aria-label="Pagination"
      lastPage={lastPage}
      onPageChange={pageNumber => console.log(pageNumber)}
      rangeSize={3}
    >
      <Pagination.Controls>
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={\`Page \${pageNumber}\`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({state}) =>
          \`\${getVisibleResultsMin(state.currentPage, resultCount)}-\${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of \${totalCount} results\`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};
`;const B=()=>{const r=c(10,100);return e.jsxs(n,{onPageChange:a=>console.log(a),"aria-label":"Pagination",lastPage:r,children:[e.jsxs(n.Controls,{children:[e.jsx(n.JumpToFirstButton,{"aria-label":"First"}),e.jsx(n.StepToPreviousButton,{"aria-label":"Previous"}),e.jsx(n.PageList,{children:({state:a})=>a.range.map(o=>e.jsx(n.PageListItem,{children:e.jsx(n.PageButton,{"aria-label":`Page ${o}`,pageNumber:o})},o))}),e.jsx(n.StepToNextButton,{"aria-label":"Next"}),e.jsx(n.JumpToLastButton,{"aria-label":"Last"}),e.jsxs(n.GoToForm,{children:[e.jsx(n.GoToTextInput,{"aria-label":"Go to page number"}),e.jsx(n.GoToLabel,{children:({state:a})=>`of ${a.lastPage} pages`})]})]}),e.jsx(n.AdditionalDetails,{shouldHideDetails:!0,children:({state:a})=>`${d(a.currentPage,10)}-${m(a.currentPage,10,100)} of 100 results`})]})};B.__RAW__=`import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const GoToForm = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      onPageChange={pageNumber => console.log(pageNumber)}
      aria-label="Pagination"
      lastPage={lastPage}
    >
      <Pagination.Controls>
        <Pagination.JumpToFirstButton aria-label="First" />
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={\`Page \${pageNumber}\`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
        <Pagination.JumpToLastButton aria-label="Last" />
        <Pagination.GoToForm>
          <Pagination.GoToTextInput aria-label="Go to page number" />
          <Pagination.GoToLabel>{({state}) => \`of \${state.lastPage} pages\`}</Pagination.GoToLabel>
        </Pagination.GoToForm>
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({state}) =>
          \`\${getVisibleResultsMin(state.currentPage, resultCount)}-\${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of \${totalCount} results\`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};
`;const w=()=>{const r=c(10,100),a=$({lastPage:r,onPageChange:o=>console.log(o)});return e.jsxs(e.Fragment,{children:[e.jsxs(n,{"aria-label":"Pagination",model:a,children:[e.jsxs(n.Controls,{children:[e.jsx(n.StepToPreviousButton,{"aria-label":"Previous"}),e.jsx(n.PageList,{children:({state:o})=>o.range.map(p=>e.jsx(n.PageListItem,{children:e.jsx(n.PageButton,{"aria-label":`Page ${p}`,pageNumber:p})},p))}),e.jsx(n.StepToNextButton,{"aria-label":"Next"})]}),e.jsx(n.AdditionalDetails,{shouldHideDetails:!0,children:({state:o})=>`${d(o.currentPage,10)}-${m(o.currentPage,10,100)} of 100 results`})]}),e.jsx(G,{onClick:()=>{a.events.goTo(7)},children:"Go to Page 7"})]})};w.__RAW__=`import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';

export const HoistedModel = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  const model = usePaginationModel({
    lastPage,
    onPageChange: number => console.log(number),
  });

  return (
    <>
      <Pagination aria-label="Pagination" model={model}>
        <Pagination.Controls>
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={\`Page \${pageNumber}\`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            \`\${getVisibleResultsMin(state.currentPage, resultCount)}-\${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )} of \${totalCount} results\`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
      <SecondaryButton
        onClick={() => {
          model.events.goTo(7);
        }}
      >
        Go to Page 7
      </SecondaryButton>
    </>
  );
};
`;const y=()=>{const r=c(10,100);return e.jsxs(n,{onPageChange:a=>console.log(a),"aria-label":"Pagination",lastPage:r,children:[e.jsxs(n.Controls,{children:[e.jsx(n.JumpToFirstButton,{"aria-label":"First"}),e.jsx(n.StepToPreviousButton,{"aria-label":"Previous"}),e.jsx(n.PageList,{children:({state:a})=>a.range.map(o=>e.jsx(n.PageListItem,{children:e.jsx(n.PageButton,{"aria-label":`Page ${o}`,pageNumber:o})},o))}),e.jsx(n.StepToNextButton,{"aria-label":"Next"}),e.jsx(n.JumpToLastButton,{"aria-label":"Last"})]}),e.jsx(n.AdditionalDetails,{shouldHideDetails:!0,children:({state:a})=>`${d(a.currentPage,10)}-${m(a.currentPage,10,100)} of 100 results`})]})};y.__RAW__=`import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const JumpControls = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      onPageChange={pageNumber => console.log(pageNumber)}
      aria-label="Pagination"
      lastPage={lastPage}
    >
      <Pagination.Controls>
        <Pagination.JumpToFirstButton aria-label="First" />
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={\`Page \${pageNumber}\`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
        <Pagination.JumpToLastButton aria-label="Last" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({state}) =>
          \`\${getVisibleResultsMin(state.currentPage, resultCount)}-\${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of \${totalCount} results\`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};
`;const M=()=>{const r=c(10,100);return e.jsx(W,{dir:"rtl",children:e.jsxs(n,{"aria-label":"Pagination",lastPage:r,children:[e.jsxs(n.Controls,{children:[e.jsx(n.JumpToFirstButton,{"aria-label":"First"}),e.jsx(n.StepToPreviousButton,{"aria-label":"Previous"}),e.jsx(n.PageList,{children:({state:a})=>a.range.map(o=>e.jsx(n.PageListItem,{children:e.jsx(n.PageButton,{"aria-label":`Page ${o}`,pageNumber:o})},o))}),e.jsx(n.StepToNextButton,{"aria-label":"Next"}),e.jsx(n.JumpToLastButton,{"aria-label":"Last"}),e.jsxs(n.GoToForm,{children:[e.jsx(n.GoToTextInput,{"aria-label":"Go to page number"}),e.jsx(n.GoToLabel,{children:({state:a})=>`از ${a.lastPage} صفحه`})]})]}),e.jsx(n.AdditionalDetails,{shouldHideDetails:!0,children:({state:a})=>`${m(a.currentPage,10,100)}-${d(a.currentPage,10)} من 100 صفحات`})]})})};M.__RAW__=`import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const RTL = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <CanvasProvider dir="rtl">
      <Pagination aria-label="Pagination" lastPage={lastPage}>
        <Pagination.Controls>
          <Pagination.JumpToFirstButton aria-label="First" />
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={\`Page \${pageNumber}\`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
          <Pagination.JumpToLastButton aria-label="Last" />
          <Pagination.GoToForm>
            <Pagination.GoToTextInput aria-label="Go to page number" />
            <Pagination.GoToLabel>{({state}) => \`از \${state.lastPage} صفحه\`}</Pagination.GoToLabel>
          </Pagination.GoToForm>
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            \`\${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )}-\${getVisibleResultsMin(state.currentPage, resultCount)} من 100 صفحات\`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
    </CanvasProvider>
  );
};
`;const N=()=>{const r=c(10,100),[a,o]=R.useState(5),p=$({lastPage:r,rangeSize:a}),[V,D]=R.useState(0),I=H(),{values:l}=I.canvas.breakpoints,S=R.useRef(null);return J({ref:S,onResize:({width:i})=>{if(i){D(i);const P=i>=l.zero&&i<l.s,F=i>=l.s&&i<l.m,_=i>=l.m&&i<l.l,z=i>=l.l&&i<l.xl;a!==1&&P&&o(1),a!==3&&F&&o(3),a!==5&&_&&o(5),a!==7&&z&&o(7)}}}),e.jsxs(E,{ref:S,cs:{justifyContent:"space-between",alignItems:"center",border:"1px solid",padding:O.md},children:[e.jsxs(Z,{as:"span",size:"small",cs:{fontWeight:X.bold},children:["Width: ",V,"px"]}),e.jsxs(n,{model:p,"aria-label":"Pagination",children:[e.jsxs(n.Controls,{children:[e.jsx(n.StepToPreviousButton,{"aria-label":"Previous"}),e.jsx(n.PageList,{children:({state:i})=>i.range.map(P=>e.jsx(n.PageListItem,{children:e.jsx(n.PageButton,{"aria-label":`Page ${P}`,pageNumber:P})},P))}),e.jsx(n.StepToNextButton,{"aria-label":"Next"})]}),e.jsx(n.AdditionalDetails,{shouldHideDetails:!0,children:({state:i})=>`${d(i.currentPage,10)}-${m(i.currentPage,10,100)} of 100 results`})]})]})};N.__RAW__=`import * as React from 'react';

import {useResizeObserver, useTheme} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const ResponsiveRange = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);
  // Normally, rangeSize can be a static value, but we're making it stateful,
  // so we can update it using useResizeObserver
  const [rangeSize, setRangeSize] = React.useState(5);
  const model = usePaginationModel({
    lastPage,
    rangeSize,
  });
  // We're only using this state to display the container width;
  const [containerWidth, setContainerWidth] = React.useState(0);
  // We're using breakpoints from the theme as reference points to adjust the range
  const theme = useTheme();
  const {values: breakpointValues} = theme.canvas.breakpoints;

  // We'll use this ref to measure the size of the container
  const containerRef = React.useRef(null);
  useResizeObserver({
    ref: containerRef,
    onResize: ({width}) => {
      // Note: onResizeObserver only accounts for the size of the container.
      // It does not factor in margin, padding, or border widths.
      // If you want to be exact, adjust your math to account for those.
      // If you're okay with being close enough on the measurements, this is fine.
      if (width) {
        // updating the container width for the display text
        setContainerWidth(width);
        // helper functions for better readability
        const isBetweenZeroAndSmall = width >= breakpointValues.zero && width < breakpointValues.s;
        const isBetweenSmallAndMedium = width >= breakpointValues.s && width < breakpointValues.m;
        const isBetweenMediumAndLarge = width >= breakpointValues.m && width < breakpointValues.l;
        const isBetweenLargeAndXLarge = width >= breakpointValues.l && width < breakpointValues.xl;
        // We're checking the rangeSize at each level to prevent extra re-renders.
        if (rangeSize !== 1 && isBetweenZeroAndSmall) {
          setRangeSize(1);
        }
        if (rangeSize !== 3 && isBetweenSmallAndMedium) {
          setRangeSize(3);
        }
        if (rangeSize !== 5 && isBetweenMediumAndLarge) {
          setRangeSize(5);
        }
        if (rangeSize !== 7 && isBetweenLargeAndXLarge) {
          setRangeSize(7);
        }
      }
    },
  });

  return (
    <Flex
      ref={containerRef}
      cs={{
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid',
        padding: system.padding.md,
      }}
    >
      <BodyText as="span" size="small" cs={{fontWeight: system.fontWeight.bold}}>
        Width: {containerWidth}px
      </BodyText>
      <Pagination model={model} aria-label="Pagination">
        <Pagination.Controls>
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={\`Page \${pageNumber}\`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            \`\${getVisibleResultsMin(state.currentPage, resultCount)}-\${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )} of \${totalCount} results\`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
    </Flex>
  );
};
`;function k(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...A(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(U,{of:K}),`
`,e.jsx(t.h1,{id:"canvas-kit-pagination",children:"Canvas Kit Pagination"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Pagination"}),` is a
`,e.jsx(t.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),` that allows
users to navigate between pages in a range.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://design.workday.com/components/navigation/pagination",rel:"nofollow",children:"> Workday Design Reference"})}),`
`,e.jsx(t.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`yarn add @workday/canvas-kit-react
`})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"basic-example",children:"Basic Example"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Pagination"})," includes a container ",e.jsx(t.code,{children:"Pagination"}),` component and a number of subcomponents which can be
composed in a variety of ways.`]}),`
`,e.jsxs(t.p,{children:["In this example, we set up a basic ",e.jsx(t.code,{children:"Pagination"}),` component with the default range of five pages, as
well as step controls (`,e.jsx(t.code,{children:"Pagination.StepToPreviousButton"})," and ",e.jsx(t.code,{children:"Pagination.StepToNextButton"}),`) that
allow you to move to the previous page or the next page.`]}),`
`,e.jsx(u,{code:L}),`
`,e.jsxs(t.p,{children:["Note that you must include ",e.jsx(t.code,{children:"Pagination.AdditionalDetails"}),` to meet accessibility standards (with one
exception, see `,e.jsx(t.a,{href:"#paginationadditionaldetails",children:e.jsx(t.code,{children:"Pagination.AdditionalDetails"})}),` for more information).
It is an `,e.jsx(t.code,{children:"aria-live"}),` region that announces the current page update to screen readers. If you wish to
prevent it from displaying (as we've done in the remaining examples), you may set its
`,e.jsx(t.code,{children:"shouldHideDetails"})," prop to ",e.jsx(t.code,{children:"true"}),`. The visually hidden region will still be accessible to screen
readers.`]}),`
`,e.jsx(t.h3,{id:"hoisted-model",children:"Hoisted Model"}),`
`,e.jsxs(t.p,{children:["By default, ",e.jsx(t.code,{children:"Pagination"})," will create and use its own ",e.jsx(t.a,{href:"#model",children:"model"}),` internally. Alternatively, you
may configure your own model with `,e.jsx(t.code,{children:"usePaginationModel"})," and pass it to ",e.jsx(t.code,{children:"Pagination"})," via the ",e.jsx(t.code,{children:"model"}),`
prop. This pattern is referred to as
`,e.jsx(t.a,{href:"?path=/docs/guides-compound-components--docs#configuring-a-model",children:"hoisting the model"}),`
and provides direct access to its `,e.jsx(t.code,{children:"state"})," and ",e.jsx(t.code,{children:"events"})," outside of the ",e.jsx(t.code,{children:"Pagination"})," component."]}),`
`,e.jsx(t.p,{children:`In this example, we set up external observation of the model state and create an external button to
trigger an event to change the current page.`}),`
`,e.jsx(u,{code:w}),`
`,e.jsx(t.h3,{id:"jump-controls",children:"Jump Controls"}),`
`,e.jsxs(t.p,{children:["This example adds jump controls (",e.jsx(t.code,{children:"Pagination.JumpToFirstButton"})," and ",e.jsx(t.code,{children:"Pagination.JumpToLastButton"}),`)
that allow you to skip to the first and last pages in the range.`]}),`
`,e.jsx(u,{code:y}),`
`,e.jsx(t.h3,{id:"goto-form",children:"GoTo Form"}),`
`,e.jsxs(t.p,{children:["This example adds a form (",e.jsx(t.code,{children:"Pagination.GoToForm"}),`) that allows you to skip to a specific page within
the range.`]}),`
`,e.jsx(u,{code:B}),`
`,e.jsx(t.h3,{id:"right-to-left-rtl",children:"Right-to-Left (RTL)"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Pagination"})," supports right-to-left languages when specified in the ",e.jsx(t.code,{children:"CanvasProvider"})," ",e.jsx(t.code,{children:"theme"}),"."]}),`
`,e.jsx(u,{code:M}),`
`,e.jsx(t.h3,{id:"custom-range",children:"Custom Range"}),`
`,e.jsx(t.p,{children:"This example uses a custom range that allows you to control the width of the component."}),`
`,e.jsx(u,{code:T}),`
`,e.jsx(t.h3,{id:"responsive-range",children:"Responsive Range"}),`
`,e.jsxs(t.p,{children:[`In some situations, you might want to adjust Pagination's range based on the width of the container.
You can use `,e.jsx(t.code,{children:"useResizeObserver"})," to accomplish this as in the example below."]}),`
`,e.jsx(u,{code:N}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(g,{name:"Pagination",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"model",children:"Model"}),`
`,e.jsxs(t.p,{children:["If ",e.jsx(t.code,{children:"Pagination"}),` was stripped of all its markup, attributes, and styling, what would remain is the
`,e.jsx(t.a,{href:"?path=/docs/guides-compound-components--docs#models",children:"model"}),`. The model is an
object composed of two parts: `,e.jsx(t.code,{children:"state"}),` which describes the current snapshot in time of the component
and `,e.jsx(t.code,{children:"events"})," which describes events that can be sent to the model."]}),`
`,e.jsxs(t.p,{children:["By default, ",e.jsx(t.code,{children:"Pagination"}),` will create a model and share it internally with its subcomponents using
React context. You may subscribe to `,e.jsx(t.code,{children:"PaginationContext"}),` if you wish to create a custom subcomponent
for your implementation. Here's a simple example.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import * as React from 'react';

import {Pagination, PaginationContext} from '@workday/canvas-kit-react/pagination';

const CustomButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const model = React.useContext(PaginationContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // If onClick is provided, pass the event along
    props.onClick?.(e);
    model.events.goTo(10);
  };

  return (
    <button onClick={handleClick} {...props}>
      Go To Page 10
    </button>
  );
};

export const CustomPagination = () => {
  return (
    <Pagination aria-label="Pagination" lastPage={20}>
      <CustomButton aria-label="Page 10" />
      {/* Other subcomponents */}
    </Pagination>
  );
};
`})}),`
`,e.jsxs(t.p,{children:["Alternatively, if you need direct access to the model's ",e.jsx(t.code,{children:"state"})," and ",e.jsx(t.code,{children:"events"}),` outside of the
`,e.jsx(t.code,{children:"Pagination"})," component, you may configure your own model with ",e.jsx(t.code,{children:"usePaginationModel"}),` and pass it to
`,e.jsx(t.code,{children:"Pagination"}),` via a pattern called
`,e.jsx(t.a,{href:"?path=/docs/guides-compound-components--docs#configuring-a-model",children:"hoisting the model"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const model = usePaginationModel({
  lastPage,
  onPageChange: number => console.log(number),
});

<Pagination aria-label="Pagination" model={model}>
  {/* Child components */}
</Pagination>;
`})}),`
`,e.jsx(t.h3,{id:"usepaginationmodel",children:"usePaginationModel"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"usePaginationModel"}),` accepts a configuration object with the following properties and returns a
`,e.jsx(t.code,{children:"PaginationModel"})," with ",e.jsx(t.code,{children:"state"})," and ",e.jsx(t.code,{children:"events"})," properties."]}),`
`,e.jsx(g,{name:"usePaginationModel",fileName:"/react/"}),`
`,e.jsx(t.h2,{id:"utilities",children:"Utilities"}),`
`,e.jsx(t.h3,{id:"getlastpage",children:"getLastPage"}),`
`,e.jsx(g,{name:"getLastPage",fileName:"/react/pagination/"}),`
`,e.jsx(t.h3,{id:"getrangemin",children:"getRangeMin"}),`
`,e.jsx(g,{name:"getRangeMin",fileName:"/react/pagination/"}),`
`,e.jsx(t.h3,{id:"getrangemax",children:"getRangeMax"}),`
`,e.jsx(g,{name:"getRangeMax",fileName:"/react/pagination/"}),`
`,e.jsx(t.h3,{id:"getvisibleresultsmin",children:"getVisibleResultsMin"}),`
`,e.jsx(g,{name:"getVisibleResultsMin",fileName:"/react/pagination/"}),`
`,e.jsx(t.h3,{id:"getvisibleresultsmax",children:"getVisibleResultsMax"}),`
`,e.jsx(g,{name:"getVisibleResultsMax",fileName:"/react/pagination/"})]})}function Y(s={}){const{wrapper:t}={...A(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(k,{...s})}):k(s)}const K={title:"Components/Navigation/Pagination",component:n,tags:["autodocs"],parameters:{docs:{page:Y}}},h={render:L},x={render:T},b={render:y},j={render:B},C={render:w},f={render:N},v={render:M};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: BasicExample
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: CustomRangeExample
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: JumpControlsExample
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: GoToFormExample
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: HoistedModelExample
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: ResponsiveRangeExample
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: RTLExample
}`,...v.parameters?.docs?.source}}};const Bt=["Basic","CustomRange","JumpControls","GoToForm","HoistedModel","ResponsiveRange","RTL"];export{h as Basic,x as CustomRange,j as GoToForm,C as HoistedModel,b as JumpControls,v as RTL,f as ResponsiveRange,Bt as __namedExportsOrder,K as default};
