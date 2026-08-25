import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as p}from"./index-IfJi-UCQ.js";import{B as r}from"./Breadcrumbs-BqRTHTV0.js";import{S as c}from"./StaticStates-_2QSyM1Q.js";import{C as u}from"./ComponentStatesTable-Drsmbeok.js";import{a as x}from"./cs-CmRirKzJ.js";import{p as a}from"./px2rem-C0KbprIx.js";import{C as h}from"./CanvasProvider-Be6HVxzw.js";import"./useOverflowListTarget-DTGbXQ1C.js";import"./useListItemRegister-WXULtWeZ.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-QZ7dJnr4.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-D82m_70B.js";import"./getTransformFromPlacement-CbMUg7Oi.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-orIgUyl1.js";import"./mergeStyles-D3Z96jzH.js";import"./Box-Dc1pfcXO.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-CyrACzA_.js";import"./grid-DMacGXHk.js";import"./index-DE-upP0k.js";import"./useCloseOnEscape-BQzJDd4G.js";import"./Popper-f9ns0Sd-.js";import"./Card-C3heqCcP.js";import"./Text-CdOGUfGH.js";import"./cornerShape-CVHz5m1w.js";import"./OverflowTooltip-CttNFr_Y.js";import"./useListItemSelect-DxOFzkf-.js";import"./SystemIcon-F3AlfABP.js";import"./Svg-6EIr0d9x.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-DXs5RuoH.js";import"./useFocusRedirect-CVdK8X6L.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-B4T79vh-.js";import"./SecondaryButton-BGyt1esh.js";import"./BaseButton-pemrIgdX.js";import"./Button-CDNcbL7j.js";import"./chevron-right-small-Ng-H0z5q.js";import"./Hyperlink-BZ9W3Fk6.js";import"./related-actions-BBat1SFr.js";import"./TertiaryButton-DXbHFTEG.js";import"./index-D-t2nnqG.js";const xe={title:"Testing/Navigation/Breadcrumbs",component:r,parameters:{chromatic:{disable:!1}}},b=x({base:{},modifiers:{isTruncated:{true:{maxWidth:a(100)}}}}),m={render:()=>e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Without truncation",props:{}},{label:"With Truncated items",props:{isTruncated:!0}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(r,{"aria-label":"Breadcrumbs",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Home"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",cs:b({isTruncated:t.isTruncated}),children:"Breakfast Menus"})}),e.jsx(r.CurrentItem,{cs:b({isTruncated:t.isTruncated}),children:"House Specialty Pies"})]})})})})},B=x({vars:{maxWidth:""},base:({maxWidth:t})=>({maxWidth:t})}),n={render:()=>{const[t]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Second Link",link:"#"},{id:"3",text:"Third Link",link:"#"},{id:"4",text:"Fourth Link",link:"#"},{id:"5",text:"Fifth Link",link:"#"},{id:"6",text:"Sixth Link",link:"#"},{id:"7",text:"Current"}]);return e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Lowest level",props:{maxWidth:150}},{label:"2 items displayed",props:{maxWidth:250}},{label:"3 items displayed",props:{maxWidth:350}}],columnProps:[{label:"Default",props:{}}],children:l=>e.jsxs(r,{items:t,"aria-label":"Breadcrumbs",children:[e.jsx(r.List,{cs:B({maxWidth:a(l.maxWidth)}),overflowButton:e.jsx(r.OverflowButton,{"aria-label":"More links"}),children:s=>s.link?e.jsx(r.Item,{children:e.jsx(r.Link,{href:s.link,children:s.text})}):e.jsx(r.CurrentItem,{children:s.text})}),e.jsx(r.Menu.Popper,{children:e.jsx(r.Menu.Card,{cs:{maxWidth:a(300),maxHeight:a(200)},children:e.jsx(r.Menu.List,{children:s=>e.jsx(r.Menu.Item,{children:s.text})})})})]})})})}},o={render:()=>{const[t]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Current"}]),[l]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Second Link",link:"#"},{id:"3",text:"Current"}]);return e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Overflow with only 2 items total",props:{maxWidth:150,items:t}},{label:"Overflow with only 3 items total",props:{maxWidth:250,items:l}}],columnProps:[{label:"Default",props:{}}],children:s=>e.jsxs(r,{items:s.items,"aria-label":"Breadcrumbs",children:[e.jsx(r.List,{maxWidth:s.maxWidth,overflowButton:e.jsx(r.OverflowButton,{"aria-label":"More links"}),children:i=>i.link?e.jsx(r.Item,{children:e.jsx(r.Link,{href:i.link,children:i.text})}):e.jsx(r.CurrentItem,{children:i.text})}),e.jsx(r.Menu.Popper,{children:e.jsx(r.Menu.Card,{cs:{maxWidth:a(300),maxHeight:a(200)},children:e.jsx(r.Menu.List,{children:i=>e.jsx(r.Menu.Item,{children:i.text})})})})]})})})}},d={render:()=>e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Without truncation",props:{}},{label:"With Truncated items",props:{isTruncated:!0}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(h,{dir:"rtl",children:e.jsx(r,{"aria-label":"Breadcrumbs",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"תנ״ך"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",maxWidth:t.isTruncated?100:void 0,children:"משלי"})}),e.jsx(r.CurrentItem,{maxWidth:t.isTruncated?100:void 0,children:"בני תורתי אל־תשכח ומצותי יצר לבך׃"})]})})})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: 'Without truncation',
        props: {}
      }, {
        label: 'With Truncated items',
        props: {
          isTruncated: true
        }
      }]} columnProps={[{
        label: 'Default',
        props: {}
      }]}>
          {props => {
          return <Breadcrumbs aria-label="Breadcrumbs">
                <Breadcrumbs.List>
                  <Breadcrumbs.Item>
                    <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
                  </Breadcrumbs.Item>
                  <Breadcrumbs.Item>
                    <Breadcrumbs.Link href="#" cs={breadcrumbsItemStencil({
                  isTruncated: props.isTruncated
                })}>
                      Breakfast Menus
                    </Breadcrumbs.Link>
                  </Breadcrumbs.Item>
                  <Breadcrumbs.CurrentItem cs={breadcrumbsItemStencil({
                isTruncated: props.isTruncated
              })}>
                    House Specialty Pies
                  </Breadcrumbs.CurrentItem>
                </Breadcrumbs.List>
              </Breadcrumbs>;
        }}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Breadcrumb {
      id: string;
      link?: string;
      text: string;
    }
    const [items] = React.useState<Breadcrumb[]>([{
      id: '1',
      text: 'Home',
      link: '/'
    }, {
      id: '2',
      text: 'Second Link',
      link: '#'
    }, {
      id: '3',
      text: 'Third Link',
      link: '#'
    }, {
      id: '4',
      text: 'Fourth Link',
      link: '#'
    }, {
      id: '5',
      text: 'Fifth Link',
      link: '#'
    }, {
      id: '6',
      text: 'Sixth Link',
      link: '#'
    }, {
      id: '7',
      text: 'Current'
    }]);
    return <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: 'Lowest level',
        props: {
          maxWidth: 150
        }
      }, {
        label: '2 items displayed',
        props: {
          maxWidth: 250
        }
      }, {
        label: '3 items displayed',
        props: {
          maxWidth: 350
        }
      }]} columnProps={[{
        label: 'Default',
        props: {}
      }]}>
          {props => {
          return <Breadcrumbs items={items} aria-label="Breadcrumbs">
                <Breadcrumbs.List cs={breadcrumbsListStencil({
              maxWidth: px2rem(props.maxWidth)
            })} overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
                  {item => item.link ? <Breadcrumbs.Item>
                        <Breadcrumbs.Link href={item.link}>{item.text}</Breadcrumbs.Link>
                      </Breadcrumbs.Item> : <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>}
                </Breadcrumbs.List>
                <Breadcrumbs.Menu.Popper>
                  <Breadcrumbs.Menu.Card cs={{
                maxWidth: px2rem(300),
                maxHeight: px2rem(200)
              }}>
                    <Breadcrumbs.Menu.List>
                      {(item: Breadcrumb) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
                    </Breadcrumbs.Menu.List>
                  </Breadcrumbs.Menu.Card>
                </Breadcrumbs.Menu.Popper>
              </Breadcrumbs>;
        }}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Breadcrumb {
      id: string;
      link?: string;
      text: string;
    }
    const [twoItems] = React.useState<Breadcrumb[]>([{
      id: '1',
      text: 'Home',
      link: '/'
    }, {
      id: '2',
      text: 'Current'
    }]);
    const [threeItems] = React.useState<Breadcrumb[]>([{
      id: '1',
      text: 'Home',
      link: '/'
    }, {
      id: '2',
      text: 'Second Link',
      link: '#'
    }, {
      id: '3',
      text: 'Current'
    }]);
    return <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: 'Overflow with only 2 items total',
        props: {
          maxWidth: 150,
          items: twoItems
        }
      }, {
        label: 'Overflow with only 3 items total',
        props: {
          maxWidth: 250,
          items: threeItems
        }
      }]} columnProps={[{
        label: 'Default',
        props: {}
      }]}>
          {props => {
          return <Breadcrumbs items={props.items} aria-label="Breadcrumbs">
                <Breadcrumbs.List maxWidth={props.maxWidth} overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
                  {item => item.link ? <Breadcrumbs.Item>
                        <Breadcrumbs.Link href={item.link}>{item.text}</Breadcrumbs.Link>
                      </Breadcrumbs.Item> : <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>}
                </Breadcrumbs.List>
                <Breadcrumbs.Menu.Popper>
                  <Breadcrumbs.Menu.Card cs={{
                maxWidth: px2rem(300),
                maxHeight: px2rem(200)
              }}>
                    <Breadcrumbs.Menu.List>
                      {(item: Breadcrumb) => <Breadcrumbs.Menu.Item>{item.text}</Breadcrumbs.Menu.Item>}
                    </Breadcrumbs.Menu.List>
                  </Breadcrumbs.Menu.Card>
                </Breadcrumbs.Menu.Popper>
              </Breadcrumbs>;
        }}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StaticStates>
        <ComponentStatesTable rowProps={[{
        label: 'Without truncation',
        props: {}
      }, {
        label: 'With Truncated items',
        props: {
          isTruncated: true
        }
      }]} columnProps={[{
        label: 'Default',
        props: {}
      }]}>
          {props => {
          return <CanvasProvider dir="rtl">
                <Breadcrumbs aria-label="Breadcrumbs">
                  <Breadcrumbs.List>
                    <Breadcrumbs.Item>
                      <Breadcrumbs.Link href="#">תנ״ך</Breadcrumbs.Link>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                      <Breadcrumbs.Link href="#" maxWidth={props.isTruncated ? 100 : undefined}>
                        משלי
                      </Breadcrumbs.Link>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.CurrentItem maxWidth={props.isTruncated ? 100 : undefined}>
                      בני תורתי אל־תשכח ומצותי יצר לבך׃
                    </Breadcrumbs.CurrentItem>
                  </Breadcrumbs.List>
                </Breadcrumbs>
              </CanvasProvider>;
        }}
        </ComponentStatesTable>
      </StaticStates>;
  }
}`,...d.parameters?.docs?.source}}};const he=["DefaultStates","WithOverflowMenu","WithOverflowMenuHavingTwoItems","RTLStates"];export{m as DefaultStates,d as RTLStates,n as WithOverflowMenu,o as WithOverflowMenuHavingTwoItems,he as __namedExportsOrder,xe as default};
