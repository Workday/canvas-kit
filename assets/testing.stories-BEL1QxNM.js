import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{e as p}from"./index-IfJi-UCQ.js";import{B as r}from"./Breadcrumbs-DbSrMfri.js";import{S as c}from"./StaticStates-DaIw1Shi.js";import{C as u}from"./ComponentStatesTable-CQNb0oug.js";import{a as x}from"./cs-rfTTo7Bg.js";import{p as a}from"./px2rem-C0KbprIx.js";import{C as h}from"./CanvasProvider-C7QCbs6E.js";import"./useOverflowListTarget-BdPxwRdQ.js";import"./useListItemSelect-BJNBLcmr.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./models-CHTjB2ql.js";import"./useUniqueId-DC-hMIDg.js";import"./useConstant-CUZppmaV.js";import"./useMount-CAK2BN3_.js";import"./components-BzxOW7QS.js";import"./bundle.esm-C4XAbbi1.js";import"./Menu-eJWTGk8_.js";import"./getTransformFromPlacement-BtpPb64q.js";import"./useDisclosureModel-a5nE6ygN.js";import"./useTooltip-BL-xww8B.js";import"./mergeStyles-B5xtJ_PZ.js";import"./Box-C3Rh3_8o.js";import"./index-N3xz2Kqy.js";import"./emotion-element-699e6908.browser.esm-B_iKzvpy.js";import"./flex-EgKYzApj.js";import"./grid-BOSAf611.js";import"./index-5dfzm_kn.js";import"./useCloseOnEscape-bxAGnail.js";import"./Popper-Bj4tFU_w.js";import"./Card-BRu6KPxh.js";import"./Text-BLiLRwwF.js";import"./OverflowTooltip-ChALVole.js";import"./SystemIcon-BvGZwaoD.js";import"./Svg-j63L436u.js";import"./types-wqmYQQWa.js";import"./useFocusRedirect-DY41H3s1.js";import"./useReturnFocus-DxgM6tpN.js";import"./check-small-C7Z-gSGs.js";import"./usePopupTarget-B9mkdgty.js";import"./SecondaryButton-C6dc0I17.js";import"./BaseButton-DYGlcZck.js";import"./Button-gB-pg0yL.js";import"./chevron-right-small-DxmMaev8.js";import"./Hyperlink-B-efvBlO.js";import"./related-actions-TP4TzHu6.js";import"./TertiaryButton-SwgvdX0A.js";import"./index-5mrAZJYD.js";const pe={title:"Testing/Navigation/Breadcrumbs",component:r,parameters:{chromatic:{disable:!1}}},b=x({base:{},modifiers:{isTruncated:{true:{maxWidth:a(100)}}}}),m={render:()=>e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Without truncation",props:{}},{label:"With Truncated items",props:{isTruncated:!0}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(r,{"aria-label":"Breadcrumbs",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"Home"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",cs:b({isTruncated:t.isTruncated}),children:"Breakfast Menus"})}),e.jsx(r.CurrentItem,{cs:b({isTruncated:t.isTruncated}),children:"House Specialty Pies"})]})})})})},B=x({vars:{maxWidth:""},base:({maxWidth:t})=>({maxWidth:t})}),n={render:()=>{const[t]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Second Link",link:"#"},{id:"3",text:"Third Link",link:"#"},{id:"4",text:"Fourth Link",link:"#"},{id:"5",text:"Fifth Link",link:"#"},{id:"6",text:"Sixth Link",link:"#"},{id:"7",text:"Current"}]);return e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Lowest level",props:{maxWidth:150}},{label:"2 items displayed",props:{maxWidth:250}},{label:"3 items displayed",props:{maxWidth:350}}],columnProps:[{label:"Default",props:{}}],children:l=>e.jsxs(r,{items:t,"aria-label":"Breadcrumbs",children:[e.jsx(r.List,{cs:B({maxWidth:a(l.maxWidth)}),overflowButton:e.jsx(r.OverflowButton,{"aria-label":"More links"}),children:s=>s.link?e.jsx(r.Item,{children:e.jsx(r.Link,{href:s.link,children:s.text})}):e.jsx(r.CurrentItem,{children:s.text})}),e.jsx(r.Menu.Popper,{children:e.jsx(r.Menu.Card,{cs:{maxWidth:a(300),maxHeight:a(200)},children:e.jsx(r.Menu.List,{children:s=>e.jsx(r.Menu.Item,{children:s.text})})})})]})})})}},o={render:()=>{const[t]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Current"}]),[l]=p.useState([{id:"1",text:"Home",link:"/"},{id:"2",text:"Second Link",link:"#"},{id:"3",text:"Current"}]);return e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Overflow with only 2 items total",props:{maxWidth:150,items:t}},{label:"Overflow with only 3 items total",props:{maxWidth:250,items:l}}],columnProps:[{label:"Default",props:{}}],children:s=>e.jsxs(r,{items:s.items,"aria-label":"Breadcrumbs",children:[e.jsx(r.List,{maxWidth:s.maxWidth,overflowButton:e.jsx(r.OverflowButton,{"aria-label":"More links"}),children:i=>i.link?e.jsx(r.Item,{children:e.jsx(r.Link,{href:i.link,children:i.text})}):e.jsx(r.CurrentItem,{children:i.text})}),e.jsx(r.Menu.Popper,{children:e.jsx(r.Menu.Card,{cs:{maxWidth:a(300),maxHeight:a(200)},children:e.jsx(r.Menu.List,{children:i=>e.jsx(r.Menu.Item,{children:i.text})})})})]})})})}},d={render:()=>e.jsx(c,{children:e.jsx(u,{rowProps:[{label:"Without truncation",props:{}},{label:"With Truncated items",props:{isTruncated:!0}}],columnProps:[{label:"Default",props:{}}],children:t=>e.jsx(h,{dir:"rtl",children:e.jsx(r,{"aria-label":"Breadcrumbs",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",children:"תנ״ך"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#",maxWidth:t.isTruncated?100:void 0,children:"משלי"})}),e.jsx(r.CurrentItem,{maxWidth:t.isTruncated?100:void 0,children:"בני תורתי אל־תשכח ומצותי יצר לבך׃"})]})})})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const be=["DefaultStates","WithOverflowMenu","WithOverflowMenuHavingTwoItems","RTLStates"];export{m as DefaultStates,d as RTLStates,n as WithOverflowMenu,o as WithOverflowMenuHavingTwoItems,be as __namedExportsOrder,pe as default};
