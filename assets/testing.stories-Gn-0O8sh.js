import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as p}from"./index-IfJi-UCQ.js";import{B as r}from"./Breadcrumbs-D3iJqd8X.js";import{S as c}from"./StaticStates-BEE7CJ53.js";import{C as u}from"./ComponentStatesTable-Dk46YD6j.js";import{a as x}from"./cs-CmRirKzJ.js";import{p as a}from"./px2rem-C0KbprIx.js";import{C as h}from"./CanvasProvider-B2qftkyC.js";import"./useOverflowListItemMeasure-D4PRWsfA.js";import"./useListItemRegister-BnQYvF7K.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-BoA5684E.js";import"./useConstant-B_SD0x5s.js";import"./useMount-CAK2BN3_.js";import"./components-DfK761ue.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-Kk2VrAm5.js";import"./getTransformFromPlacement-CUURGzgU.js";import"./useDisclosureModel-ySjWLcPL.js";import"./useTooltip-D6hxE6SN.js";import"./mergeStyles-Vp3VQTQy.js";import"./Box-BoQ5J_i4.js";import"./index-DX07rvw8.js";import"./emotion-element-699e6908.browser.esm-CCgPGf3R.js";import"./flex-CVN7yaqy.js";import"./grid-D-K1FKZf.js";import"./index-C_4iH04t.js";import"./useCloseOnEscape-DwqtkWZR.js";import"./Popper-Dq8eR2UQ.js";import"./isElementRTL-lizwOp5U.js";import"./Card-DZwvY3u3.js";import"./Text-ZlO6HW6V.js";import"./cornerShape-oKuWloiA.js";import"./OverflowTooltip-Chawvcyy.js";import"./useListItemRovingFocus-DmoAqEoc.js";import"./useListItemSelect-19hmN-2Q.js";import"./SystemIcon-C-lsn8SY.js";import"./Svg-CnUv8CcO.js";import"./types-wqmYQQWa.js";import"./useReturnFocus-CDQPJuTh.js";import"./useFocusRedirect-Da0_5aiI.js";import"./check-Ds6vsrAM.js";import"./usePopupTarget-DxYHsA1b.js";import"./SecondaryButton-DGx56yR5.js";import"./BaseButton-D9-kf81-.js";import"./Button-hC9Gk3S7.js";import"./chevron-right-small-Ng-H0z5q.js";import"./Hyperlink-BrNmZ56U.js";import"./related-actions-BBat1SFr.js";import"./useOverflowListTarget-OaGlgKUo.js";import"./TertiaryButton-8VZ3UMt4.js";import"./index-CFEs8r9D.js";const ke={title:"Testing/Navigation/Breadcrumbs",component:r,parameters:{chromatic:{disable:!1}}},b=x({base:{},modifiers:{isTruncated:{true:{maxWidth:a(100)}}}}),m={render:()=>e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Without truncation",props:{}},{label:"With Truncated items",props:{isTruncated:!0}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(r,{"aria-label":"Breadcrumbs",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Home"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",cs:b({isTruncated:t.isTruncated}),children:"Breakfast Menus"})}),e.jsx(r.CurrentItem,{cs:b({isTruncated:t.isTruncated}),children:"House Specialty Pies"})]})})})})},B=x({vars:{maxWidth:""},base:({maxWidth:t})=>({maxWidth:t})}),n={render:()=>{const[t]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Second Link",link:"#"},{id:"3",text:"Third Link",link:"#"},{id:"4",text:"Fourth Link",link:"#"},{id:"5",text:"Fifth Link",link:"#"},{id:"6",text:"Sixth Link",link:"#"},{id:"7",text:"Current"}]);return e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Lowest level",props:{maxWidth:150}},{label:"2 items displayed",props:{maxWidth:250}},{label:"3 items displayed",props:{maxWidth:350}}],columnProps:[{label:"Default",props:{}}],children:l=>e.jsxs(r,{items:t,"aria-label":"Breadcrumbs",children:[e.jsx(r.List,{cs:B({maxWidth:a(l.maxWidth)}),overflowButton:e.jsx(r.OverflowButton,{"aria-label":"More links"}),children:s=>s.link?e.jsx(r.Item,{children:e.jsx(r.Link,{href:s.link,children:s.text})}):e.jsx(r.CurrentItem,{children:s.text})}),e.jsx(r.Menu.Popper,{children:e.jsx(r.Menu.Card,{cs:{maxWidth:a(300),maxHeight:a(200)},children:e.jsx(r.Menu.List,{children:s=>e.jsx(r.Menu.Item,{children:s.text})})})})]})})})}},o={render:()=>{const[t]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Current"}]),[l]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Second Link",link:"#"},{id:"3",text:"Current"}]);return e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Overflow with only 2 items total",props:{maxWidth:150,items:t}},{label:"Overflow with only 3 items total",props:{maxWidth:250,items:l}}],columnProps:[{label:"Default",props:{}}],children:s=>e.jsxs(r,{items:s.items,"aria-label":"Breadcrumbs",children:[e.jsx(r.List,{maxWidth:s.maxWidth,overflowButton:e.jsx(r.OverflowButton,{"aria-label":"More links"}),children:i=>i.link?e.jsx(r.Item,{children:e.jsx(r.Link,{href:i.link,children:i.text})}):e.jsx(r.CurrentItem,{children:i.text})}),e.jsx(r.Menu.Popper,{children:e.jsx(r.Menu.Card,{cs:{maxWidth:a(300),maxHeight:a(200)},children:e.jsx(r.Menu.List,{children:i=>e.jsx(r.Menu.Item,{children:i.text})})})})]})})})}},d={render:()=>e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Without truncation",props:{}},{label:"With Truncated items",props:{isTruncated:!0}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(h,{dir:"rtl",children:e.jsx(r,{"aria-label":"Breadcrumbs",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"תנ״ך"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",maxWidth:t.isTruncated?100:void 0,children:"משלי"})}),e.jsx(r.CurrentItem,{maxWidth:t.isTruncated?100:void 0,children:"בני תורתי אל־תשכח ומצותי יצר לבך׃"})]})})})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const fe=["DefaultStates","WithOverflowMenu","WithOverflowMenuHavingTwoItems","RTLStates"];export{m as DefaultStates,d as RTLStates,n as WithOverflowMenu,o as WithOverflowMenuHavingTwoItems,fe as __namedExportsOrder,ke as default};
