import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{I as i}from"./InformationHighlight-TfnonW17.js";import{S as l}from"./StaticStates-C-HyzpWw.js";import{C as h}from"./ComponentStatesTable-4iWB-WT1.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./components-DitCssni.js";import"./Text-BDAVcU1f.js";import"./mergeStyles-CxEFJuxU.js";import"./Box-DEOrcYtQ.js";import"./index-DmIRx617.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./cs-rfTTo7Bg.js";import"./useConstant-CUZppmaV.js";import"./flex-ns_uTuwY.js";import"./grid-W0du1by9.js";import"./TypeLevelComponents-DmEJltuv.js";import"./exclamation-circle-BJmpTdUQ.js";import"./types-wqmYQQWa.js";import"./exclamation-triangle-iTYOlOnk.js";import"./info-CEjWPFpM.js";import"./SystemIcon-CP78lq3V.js";import"./Svg-CZqhN3kO.js";import"./px2rem-C0KbprIx.js";import"./Hyperlink-Bxwna6fP.js";import"./CanvasProvider-BlMVDzJE.js";import"./index-5dfzm_kn.js";import"./index-5mrAZJYD.js";const A={title:"Testing/Indicators/Information Highlight",component:i,parameters:{chromatic:{disable:!1}}},a=()=>n.jsx(l,{children:n.jsx(h,{rowProps:[{label:"Full Information Highlight Low Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"low"}},{label:"Full Information Highlight High Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"high"}},{label:"Heading and Body Low Emphasis",props:{heading:!0,body:!0,emphasis:"low"}},{label:"Heading and Body High Emphasis",props:{heading:!0,body:!0,emphasis:"high"}},{label:"Heading and Link Low Emphasis",props:{heading:!0,link:!0,emphasis:"low"}},{label:"Heading and Link High Emphasis",props:{heading:!0,link:!0,emphasis:"high"}},{label:"Body and Link Low Emphasis",props:{body:!0,link:!0,emphasis:"low"}},{label:"Body and Link High Emphasis",props:{body:!0,link:!0,emphasis:"high"}},{label:"Only Heading Low Emphasis",props:{heading:!0,emphasis:"low"}},{label:"Only Heading High Emphasis",props:{heading:!0,emphasis:"high"}},{label:"Only Body Low Emphasis",props:{body:!0,emphasis:"low"}},{label:"Only Body High Emphasis",props:{body:!0,emphasis:"high"}}],columnProps:[{label:"Informational",props:{variant:"informational"}},{label:"Caution",props:{variant:"caution"}},{label:"Critical",props:{variant:"critical"}}],children:o=>{const{variant:e,heading:s,body:r,link:t,emphasis:p}=o;return n.jsxs(i,{variant:e,emphasis:p,children:[n.jsx(i.Icon,{}),s&&n.jsx(i.Heading,{children:"Lorem ipsum"}),r&&n.jsxs(i.Body,{children:[" ","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," "]}),t&&n.jsx(i.Link,{children:"Link"})]})}})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const D=["InformationHighlightStates"];export{a as InformationHighlightStates,D as __namedExportsOrder,A as default};
