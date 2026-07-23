import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as f}from"./index-IfJi-UCQ.js";import{u as h,S as g}from"./SidePanel-BESaNFOh.js";import{r as b,b as C}from"./ribbon-fcGfKC8v.js";import{c as v}from"./check-Bvurkvei.js";import{F as r}from"./Flex-BtxoTnIe.js";import{c as n}from"./cs-rfTTo7Bg.js";import{p as l,g as I,c as P}from"./index-5dfzm_kn.js";import{p as w}from"./px2rem-C0KbprIx.js";import{H as T,S as M}from"./TypeLevelComponents-9vqCSdj5.js";import{E as c}from"./Expandable-Cr4FzK8l.js";import{S as u}from"./SystemIcon-Cl7xWrYQ.js";import{M as s}from"./Menu-DbO2UTSI.js";import{T as B}from"./Tooltip-Bl36ujuq.js";import{T as j}from"./TertiaryButton-ByhN6lyv.js";const d={bestsellers:{icon:b,title:"Best Sellers",subtitle:"Award winning sweet treats",items:["Mango Coco Sago","Matcha Creme Pie","Key Lime Cheesecake","Tiramisu"]},cakes:{icon:C,title:"Custom Cakes",subtitle:"To celebrate your life milestones",items:["Anniversary","Birthday","Graduation","Wedding"]}},a={navContainer:n({height:w(800),positio:"relative",backgroundColor:P.bg.alt.default}),heading:n({margin:"0"}),toggleBtn:n({top:"0"}),accordionContainer:n({listStyle:"none",flexDirection:"column",rowGap:"0",paddingInlineStart:"0"}),accordionIcon:n({verticalAlign:"middle",padding:l.xxs}),accordionSubText:n({margin:"0"}),listContainer:n({listStyle:"none",padding:l.md}),compactListContainer:n({listStyle:"none",padding:l.md,flexDirection:"column",marginBlockStart:I.xl}),links:n({textDecoration:"none",padding:l.md}),linkCheck:n({marginInlineStart:"auto"}),flyOut:n({marginBlockStart:"8rem"})},x=({config:t})=>{const[i,m]=f.useState(""),p=o=>{o.preventDefault();const S=o.target;m(S.textContent||"")};return e.jsxs(c,{children:[e.jsxs(c.Target,{children:[e.jsx(u,{cs:a.accordionIcon,icon:t.icon}),e.jsxs(c.Title,{children:[t.title,e.jsx(M,{size:"medium",cs:a.accordionSubText,children:t.subtitle})]}),e.jsx(c.Icon,{iconPosition:"end"})]}),e.jsx(c.Content,{as:"ul",cs:a.listContainer,children:t.items.map(o=>e.jsx("li",{children:e.jsxs(r,{as:"a",href:"#","aria-current":o===i?"true":void 0,className:a.links,onClick:p,children:[o,o===i&&e.jsx(u,{icon:v,cs:a.linkCheck})]})},o))})]})},y=({config:t})=>e.jsxs(s,{children:[e.jsx(B,{title:t.title,placement:"right",children:e.jsx(s.Target,{as:j,children:e.jsx(u,{icon:t.icon})})}),e.jsx(s.Popper,{placement:"right",children:e.jsx(s.Card,{cs:a.flyOut,children:e.jsx(s.List,{children:t.items.map(i=>e.jsx(s.Item,{children:i},i))})})})]}),F=()=>e.jsxs(r,{as:"ul",cs:a.compactListContainer,children:[e.jsx(r.Item,{as:"li",children:e.jsx(y,{config:d.bestsellers})}),e.jsx(r.Item,{as:"li",children:e.jsx(y,{config:d.cakes})})]}),E=()=>e.jsxs(r,{as:"ul",cs:a.accordionContainer,children:[e.jsx(r.Item,{as:"li",children:e.jsx(x,{config:d.bestsellers})}),e.jsx(r.Item,{as:"li",children:e.jsx(x,{config:d.cakes})})]}),k=()=>{const{expanded:t,panelProps:i,labelProps:m,controlProps:p}=h();return e.jsxs(g,{as:"div",touched:i.touched,expanded:i.expanded,children:[e.jsx(T,{size:"small",cs:a.heading,...m,hidden:t?void 0:!0,children:"Cake or Death Bakery"}),e.jsx(g.ToggleButton,{cs:a.toggleBtn,...p}),t?e.jsx(E,{}):e.jsx(F,{})]})},O=()=>e.jsx(r,{as:"nav",cs:a.navContainer,children:e.jsx(k,{})});k.__RAW__=`import * as React from 'react';

import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Expandable} from '@workday/canvas-kit-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  CanvasSystemIcon,
  birthdayIcon,
  checkIcon,
  ribbonIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface AccordionItem {
  icon: CanvasSystemIcon;
  title: string;
  subtitle: string;
  items: string[];
}

const data = {
  bestsellers: {
    icon: ribbonIcon,
    title: 'Best Sellers',
    subtitle: 'Award winning sweet treats',
    items: ['Mango Coco Sago', 'Matcha Creme Pie', 'Key Lime Cheesecake', 'Tiramisu'],
  },
  cakes: {
    icon: birthdayIcon,
    title: 'Custom Cakes',
    subtitle: 'To celebrate your life milestones',
    items: ['Anniversary', 'Birthday', 'Graduation', 'Wedding'],
  },
};

const stylesOverride = {
  navContainer: createStyles({
    height: px2rem(800),
    positio: 'relative',
    backgroundColor: system.color.bg.alt.default,
  }),
  heading: createStyles({
    margin: '0',
  }),
  toggleBtn: createStyles({
    top: '0',
  }),
  accordionContainer: createStyles({
    listStyle: 'none',
    flexDirection: 'column',
    rowGap: '0',
    paddingInlineStart: '0',
  }),
  accordionIcon: createStyles({
    verticalAlign: 'middle',
    padding: system.padding.xxs,
  }),
  accordionSubText: createStyles({
    margin: '0',
  }),
  listContainer: createStyles({
    listStyle: 'none',
    padding: system.padding.md,
  }),
  compactListContainer: createStyles({
    listStyle: 'none',
    padding: system.padding.md,
    flexDirection: 'column',
    marginBlockStart: system.gap.xl,
  }),
  links: createStyles({
    textDecoration: 'none',
    padding: system.padding.md,
  }),
  linkCheck: createStyles({
    marginInlineStart: 'auto',
  }),
  flyOut: createStyles({
    marginBlockStart: '8rem',
  }),
};

const Accordion = ({config}: {config: AccordionItem}) => {
  const [currentPage, setCurrentPage] = React.useState('');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    setCurrentPage(target.textContent || '');
  };

  return (
    <Expandable>
      <Expandable.Target>
        <SystemIcon cs={stylesOverride.accordionIcon} icon={config.icon} />
        <Expandable.Title>
          {config.title}
          <Subtext size="medium" cs={stylesOverride.accordionSubText}>
            {config.subtitle}
          </Subtext>
        </Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>
      <Expandable.Content as="ul" cs={stylesOverride.listContainer}>
        {config.items.map((i: string) => {
          return (
            <li key={i}>
              <Flex
                as="a"
                href="#"
                aria-current={i === currentPage ? 'true' : undefined}
                className={stylesOverride.links}
                onClick={handleClick}
              >
                {i}
                {i === currentPage && <SystemIcon icon={checkIcon} cs={stylesOverride.linkCheck} />}
              </Flex>
            </li>
          );
        })}
      </Expandable.Content>
    </Expandable>
  );
};

const IconButtonMenu = ({config}: {config: AccordionItem}) => {
  return (
    <Menu>
      <Tooltip title={config.title} placement="right">
        <Menu.Target as={TertiaryButton}>
          <SystemIcon icon={config.icon} />
        </Menu.Target>
      </Tooltip>
      <Menu.Popper placement="right">
        <Menu.Card cs={stylesOverride.flyOut}>
          <Menu.List>
            {config.items.map((i: string) => (
              <Menu.Item key={i}>{i}</Menu.Item>
            ))}
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
    </Menu>
  );
};

const CompactView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.compactListContainer}>
      <Flex.Item as="li">
        <IconButtonMenu config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <IconButtonMenu config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

const ExpandedView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.accordionContainer}>
      <Flex.Item as="li">
        <Accordion config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <Accordion config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

export const SideBarContent = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <SidePanel as="div" touched={panelProps.touched} expanded={panelProps.expanded}>
      <Heading
        size="small"
        cs={stylesOverride.heading}
        {...labelProps}
        hidden={!expanded ? true : undefined}
      >
        Cake or Death Bakery
      </Heading>
      <SidePanel.ToggleButton cs={stylesOverride.toggleBtn} {...controlProps} />
      {expanded ? <ExpandedView /> : <CompactView />}
    </SidePanel>
  );
};

export const WithNavigation = () => {
  return (
    <Flex as="nav" cs={stylesOverride.navContainer}>
      <SideBarContent />
    </Flex>
  );
};
`;O.__RAW__=`import * as React from 'react';

import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Expandable} from '@workday/canvas-kit-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  CanvasSystemIcon,
  birthdayIcon,
  checkIcon,
  ribbonIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface AccordionItem {
  icon: CanvasSystemIcon;
  title: string;
  subtitle: string;
  items: string[];
}

const data = {
  bestsellers: {
    icon: ribbonIcon,
    title: 'Best Sellers',
    subtitle: 'Award winning sweet treats',
    items: ['Mango Coco Sago', 'Matcha Creme Pie', 'Key Lime Cheesecake', 'Tiramisu'],
  },
  cakes: {
    icon: birthdayIcon,
    title: 'Custom Cakes',
    subtitle: 'To celebrate your life milestones',
    items: ['Anniversary', 'Birthday', 'Graduation', 'Wedding'],
  },
};

const stylesOverride = {
  navContainer: createStyles({
    height: px2rem(800),
    positio: 'relative',
    backgroundColor: system.color.bg.alt.default,
  }),
  heading: createStyles({
    margin: '0',
  }),
  toggleBtn: createStyles({
    top: '0',
  }),
  accordionContainer: createStyles({
    listStyle: 'none',
    flexDirection: 'column',
    rowGap: '0',
    paddingInlineStart: '0',
  }),
  accordionIcon: createStyles({
    verticalAlign: 'middle',
    padding: system.padding.xxs,
  }),
  accordionSubText: createStyles({
    margin: '0',
  }),
  listContainer: createStyles({
    listStyle: 'none',
    padding: system.padding.md,
  }),
  compactListContainer: createStyles({
    listStyle: 'none',
    padding: system.padding.md,
    flexDirection: 'column',
    marginBlockStart: system.gap.xl,
  }),
  links: createStyles({
    textDecoration: 'none',
    padding: system.padding.md,
  }),
  linkCheck: createStyles({
    marginInlineStart: 'auto',
  }),
  flyOut: createStyles({
    marginBlockStart: '8rem',
  }),
};

const Accordion = ({config}: {config: AccordionItem}) => {
  const [currentPage, setCurrentPage] = React.useState('');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    setCurrentPage(target.textContent || '');
  };

  return (
    <Expandable>
      <Expandable.Target>
        <SystemIcon cs={stylesOverride.accordionIcon} icon={config.icon} />
        <Expandable.Title>
          {config.title}
          <Subtext size="medium" cs={stylesOverride.accordionSubText}>
            {config.subtitle}
          </Subtext>
        </Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>
      <Expandable.Content as="ul" cs={stylesOverride.listContainer}>
        {config.items.map((i: string) => {
          return (
            <li key={i}>
              <Flex
                as="a"
                href="#"
                aria-current={i === currentPage ? 'true' : undefined}
                className={stylesOverride.links}
                onClick={handleClick}
              >
                {i}
                {i === currentPage && <SystemIcon icon={checkIcon} cs={stylesOverride.linkCheck} />}
              </Flex>
            </li>
          );
        })}
      </Expandable.Content>
    </Expandable>
  );
};

const IconButtonMenu = ({config}: {config: AccordionItem}) => {
  return (
    <Menu>
      <Tooltip title={config.title} placement="right">
        <Menu.Target as={TertiaryButton}>
          <SystemIcon icon={config.icon} />
        </Menu.Target>
      </Tooltip>
      <Menu.Popper placement="right">
        <Menu.Card cs={stylesOverride.flyOut}>
          <Menu.List>
            {config.items.map((i: string) => (
              <Menu.Item key={i}>{i}</Menu.Item>
            ))}
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
    </Menu>
  );
};

const CompactView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.compactListContainer}>
      <Flex.Item as="li">
        <IconButtonMenu config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <IconButtonMenu config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

const ExpandedView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.accordionContainer}>
      <Flex.Item as="li">
        <Accordion config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <Accordion config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

export const SideBarContent = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <SidePanel as="div" touched={panelProps.touched} expanded={panelProps.expanded}>
      <Heading
        size="small"
        cs={stylesOverride.heading}
        {...labelProps}
        hidden={!expanded ? true : undefined}
      >
        Cake or Death Bakery
      </Heading>
      <SidePanel.ToggleButton cs={stylesOverride.toggleBtn} {...controlProps} />
      {expanded ? <ExpandedView /> : <CompactView />}
    </SidePanel>
  );
};

export const WithNavigation = () => {
  return (
    <Flex as="nav" cs={stylesOverride.navContainer}>
      <SideBarContent />
    </Flex>
  );
};
`;export{k as S,O as W};
