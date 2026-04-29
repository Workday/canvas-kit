import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{I as i}from"./InformationHighlight-D4P1IwVv.js";import{S as l}from"./StaticStates-kDyV_ZDH.js";import{C as h}from"./ComponentStatesTable-jhhL0fUQ.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./components-XIe_upcR.js";import"./Text-8N36XMNq.js";import"./mergeStyles-Dttt6jO3.js";import"./Box-DFWPfIf0.js";import"./emotion-styled.browser.esm-CKlp3yy0.js";import"./emotion-element-699e6908.browser.esm-C2ijowoa.js";import"./cs-DvbI9OYs.js";import"./index-CdbxS-xI.js";import"./useConstant-CUZppmaV.js";import"./flex-ClztTMnx.js";import"./grid-BF_eWSLd.js";import"./TypeLevelComponents-Co8mkrwa.js";import"./exclamation-circle-Be30iaM7.js";import"./types-wqmYQQWa.js";import"./exclamation-triangle-C8Vr-J7R.js";import"./info-B24MaYO9.js";import"./SystemIcon-DBhxTtY2.js";import"./Svg-D_YKUn20.js";import"./px2rem-C0KbprIx.js";import"./Hyperlink-Cmi71RJg.js";import"./useTheme-DY7-Bclm.js";import"./index-DKOKnxgv.js";import"./CanvasProvider-CbBD4ERB.js";import"./index-CYsyLHR7.js";import"./styled-BsZD6Etj.js";const J={title:"Testing/Indicators/Information Highlight",component:i,parameters:{chromatic:{disable:!1}}},a=()=>n.jsx(l,{children:n.jsx(h,{rowProps:[{label:"Full Information Highlight Low Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"low"}},{label:"Full Information Highlight High Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"high"}},{label:"Heading and Body Low Emphasis",props:{heading:!0,body:!0,emphasis:"low"}},{label:"Heading and Body High Emphasis",props:{heading:!0,body:!0,emphasis:"high"}},{label:"Heading and Link Low Emphasis",props:{heading:!0,link:!0,emphasis:"low"}},{label:"Heading and Link High Emphasis",props:{heading:!0,link:!0,emphasis:"high"}},{label:"Body and Link Low Emphasis",props:{body:!0,link:!0,emphasis:"low"}},{label:"Body and Link High Emphasis",props:{body:!0,link:!0,emphasis:"high"}},{label:"Only Heading Low Emphasis",props:{heading:!0,emphasis:"low"}},{label:"Only Heading High Emphasis",props:{heading:!0,emphasis:"high"}},{label:"Only Body Low Emphasis",props:{body:!0,emphasis:"low"}},{label:"Only Body High Emphasis",props:{body:!0,emphasis:"high"}}],columnProps:[{label:"Informational",props:{variant:"informational"}},{label:"Caution",props:{variant:"caution"}},{label:"Critical",props:{variant:"critical"}}],children:o=>{const{variant:e,heading:r,body:t,link:s,emphasis:p}=o;return n.jsxs(i,{variant:e,emphasis:p,children:[n.jsx(i.Icon,{}),r&&n.jsx(i.Heading,{children:"Lorem ipsum"}),t&&n.jsxs(i.Body,{children:[" ","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," "]}),s&&n.jsx(i.Link,{children:"Link"})]})}})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <StaticStates>
      <ComponentStatesTable rowProps={[{
      label: 'Full Information Highlight Low Emphasis',
      props: {
        heading: true,
        body: true,
        link: true,
        emphasis: 'low'
      }
    }, {
      label: 'Full Information Highlight High Emphasis',
      props: {
        heading: true,
        body: true,
        link: true,
        emphasis: 'high'
      }
    }, {
      label: 'Heading and Body Low Emphasis',
      props: {
        heading: true,
        body: true,
        emphasis: 'low'
      }
    }, {
      label: 'Heading and Body High Emphasis',
      props: {
        heading: true,
        body: true,
        emphasis: 'high'
      }
    }, {
      label: 'Heading and Link Low Emphasis',
      props: {
        heading: true,
        link: true,
        emphasis: 'low'
      }
    }, {
      label: 'Heading and Link High Emphasis',
      props: {
        heading: true,
        link: true,
        emphasis: 'high'
      }
    }, {
      label: 'Body and Link Low Emphasis',
      props: {
        body: true,
        link: true,
        emphasis: 'low'
      }
    }, {
      label: 'Body and Link High Emphasis',
      props: {
        body: true,
        link: true,
        emphasis: 'high'
      }
    }, {
      label: 'Only Heading Low Emphasis',
      props: {
        heading: true,
        emphasis: 'low'
      }
    }, {
      label: 'Only Heading High Emphasis',
      props: {
        heading: true,
        emphasis: 'high'
      }
    }, {
      label: 'Only Body Low Emphasis',
      props: {
        body: true,
        emphasis: 'low'
      }
    }, {
      label: 'Only Body High Emphasis',
      props: {
        body: true,
        emphasis: 'high'
      }
    }]} columnProps={[{
      label: 'Informational',
      props: {
        variant: 'informational'
      }
    }, {
      label: 'Caution',
      props: {
        variant: 'caution'
      }
    }, {
      label: 'Critical',
      props: {
        variant: 'critical'
      }
    }]}>
        {props => {
        const {
          variant,
          heading,
          body,
          link,
          emphasis
        } = props;
        return <InformationHighlight variant={variant} emphasis={emphasis}>
              <InformationHighlight.Icon />
              {heading && <InformationHighlight.Heading>Lorem ipsum</InformationHighlight.Heading>}
              {body && <InformationHighlight.Body>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{' '}
                </InformationHighlight.Body>}
              {link && <InformationHighlight.Link>Link</InformationHighlight.Link>}
            </InformationHighlight>;
      }}
      </ComponentStatesTable>
    </StaticStates>;
}`,...a.parameters?.docs?.source}}};const K=["InformationHighlightStates"];export{a as InformationHighlightStates,K as __namedExportsOrder,J as default};
