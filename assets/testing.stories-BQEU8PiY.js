import{j as n}from"./jsx-runtime-Bu6AqWCO.js";import{I as i}from"./InformationHighlight-BehAGGDj.js";import{S as h}from"./StaticStates-BjShJKff.js";import{C as m}from"./ComponentStatesTable-DXLLOxjV.js";import"./index-IfJi-UCQ.js";import"./models-CHTjB2ql.js";import"./components-CwPiNTv7.js";import"./Text-CugBmzts.js";import"./mergeStyles-DQZ8xltm.js";import"./Box-C6YWxsyC.js";import"./index-JH7P-Oob.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./cs-CmRirKzJ.js";import"./useConstant-B_SD0x5s.js";import"./flex-uWNpiXvQ.js";import"./grid-Z1baOhTC.js";import"./TypeLevelComponents-CSa7FUvh.js";import"./exclamation-circle-BNuxaliX.js";import"./types-wqmYQQWa.js";import"./exclamation-triangle-BLgzpFfC.js";import"./info-DJgWrsaO.js";import"./layers-BWn7B7pb.js";import"./SystemIcon-BX_--XLu.js";import"./Svg-B-_8_IoS.js";import"./px2rem-C0KbprIx.js";import"./Hyperlink-DgJFJPY5.js";import"./index--KWQvxqz.js";import"./cornerShape-BEKlmC6c.js";import"./CanvasProvider-Djg5GzKY.js";import"./index-kj8ZfNNN.js";const J={title:"Testing/Indicators/Information Highlight",component:i,parameters:{chromatic:{disable:!1}}},a=()=>n.jsx(h,{children:n.jsx(m,{rowProps:[{label:"Full Information Highlight Low Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"low"}},{label:"Full Information Highlight High Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"high"}},{label:"Heading and Body Low Emphasis",props:{heading:!0,body:!0,emphasis:"low"}},{label:"Heading and Body High Emphasis",props:{heading:!0,body:!0,emphasis:"high"}},{label:"Heading and Link Low Emphasis",props:{heading:!0,link:!0,emphasis:"low"}},{label:"Heading and Link High Emphasis",props:{heading:!0,link:!0,emphasis:"high"}},{label:"Body and Link Low Emphasis",props:{body:!0,link:!0,emphasis:"low"}},{label:"Body and Link High Emphasis",props:{body:!0,link:!0,emphasis:"high"}},{label:"Only Heading Low Emphasis",props:{heading:!0,emphasis:"low"}},{label:"Only Heading High Emphasis",props:{heading:!0,emphasis:"high"}},{label:"Only Body Low Emphasis",props:{body:!0,emphasis:"low"}},{label:"Only Body High Emphasis",props:{body:!0,emphasis:"high"}},{label:"Action Placement End Low Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"low",actionPlacement:"end"}},{label:"Action Placement End High Emphasis",props:{heading:!0,body:!0,link:!0,emphasis:"high",actionPlacement:"end"}}],columnProps:[{label:"Default",props:{variant:"default"}},{label:"Informational",props:{variant:"informational"}},{label:"Caution",props:{variant:"caution"}},{label:"Critical",props:{variant:"critical"}}],children:e=>{const{variant:o,heading:t,body:s,link:r,emphasis:p,actionPlacement:l}=e;return n.jsxs(i,{variant:o,emphasis:p,actionPlacement:l,children:[n.jsx(i.Icon,{}),t&&n.jsx(i.Heading,{children:"Lorem ipsum"}),s&&n.jsxs(i.Body,{children:[" ","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," "]}),r&&n.jsx(i.Link,{children:"Link"})]})}})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
    }, {
      label: 'Action Placement End Low Emphasis',
      props: {
        heading: true,
        body: true,
        link: true,
        emphasis: 'low',
        actionPlacement: 'end'
      }
    }, {
      label: 'Action Placement End High Emphasis',
      props: {
        heading: true,
        body: true,
        link: true,
        emphasis: 'high',
        actionPlacement: 'end'
      }
    }]} columnProps={[{
      label: 'Default',
      props: {
        variant: 'default'
      }
    }, {
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
          emphasis,
          actionPlacement
        } = props;
        return <InformationHighlight variant={variant} emphasis={emphasis} actionPlacement={actionPlacement}>
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
