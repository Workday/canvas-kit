import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{r as S}from"./index-IfJi-UCQ.js";import{h as P,a as j,i as H}from"./inbox-BZ9JNbvp.js";import{u as F}from"./useComboboxLoader-BwVUKkBI.js";import{u as k,C as c,a as R}from"./Combobox-D5mQwLLA.js";import{I as x}from"./InputGroup-CWBbx2bW.js";import{s as G}from"./search-INhyn6-E.js";import{S as E}from"./Menu-CiGVN38M.js";import{n as O}from"./notifications-BSXm4WVy.js";import{C as z}from"./CountBadge-Cu9dwtE7.js";import{c as g,b as W,d as q,a as U}from"./components-CiYq2Ux-.js";import{F as b}from"./Flex-CcubAYil.js";import{c as n}from"./cs-rfTTo7Bg.js";import{S as _}from"./SecondaryButton-C6alAkIu.js";import{T as d}from"./TertiaryButton-B6R6H9oz.js";import{T as l}from"./Tooltip-mrjIWVKX.js";import{A as D}from"./Avatar-B01Yb7M-.js";import{g as i,c as v,p as K,t as Y}from"./index-5dfzm_kn.js";import{c as y}from"./getTransformFromPlacement-BtpPb64q.js";import{p as m}from"./px2rem-C0KbprIx.js";import{S as J}from"./SystemIcon-CqoDT-XF.js";import{u as C}from"./useUniqueId-DC-hMIDg.js";import{A as Q}from"./AriaLiveRegion-wJSfjVpG.js";import{A as V}from"./AccessibleHide-BcHypmnO.js";import{T as X}from"./TextInput-B1Ypq4wN.js";const Z=["Request Time Off","Create Expense Report","Change Benefits"],a={headerWrapper:n({display:"flex",alignItems:"center",justifyContent:"space-between",boxSizing:"border-box",...Y.subtext.lg,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",backgroundColor:v.bg.default,padding:K.xxs}),flexItems:n({gap:i.md,alignItems:"center",marginInline:m(12)}),inputGroupInner:n({marginInline:i.md,width:m(20),transition:"opacity 100ms ease"}),comboboxContainer:n({margin:"auto",width:"100%",maxWidth:y.multiply(m(80),6)}),comboboxInput:n({borderRadius:m(1e3),width:"20rem"}),comboboxMenuList:n({maxHeight:m(200)}),menuButtonStyles:n({textDecoration:"none",color:v.fg.strong}),notificationContainerStyles:n({boxSizing:"border-box",position:"relative"}),countBadgeStyles:n({boxSizing:"border-box",position:"absolute",top:y.negate(i.xs),insetInlineEnd:y.negate(i.xs)}),actionButtonStyles:n({gap:i.md,margin:i.md})},$=q(U()(t=>({onKeyPress(o){t.events.show(o)}})),R),ee=W(X)({modelHook:k,elemPropsHook:$})((t,o)=>e.jsx(c.Input,{as:o,...t})),te=()=>{const[t,o]=S.useState(0);function s(){o(p=>p+1)}function r(){o(0)}return e.jsxs("header",{children:[e.jsx(T,{notifications:t}),e.jsxs(b,{cs:a.actionButtonStyles,children:[e.jsx(_,{onClick:s,children:"Add notification"}),e.jsx(d,{onClick:r,children:"Clear"})]})]})},T=g("div")({displayName:"GlobalHeader",Component:({notifications:t})=>e.jsxs("div",{className:a.headerWrapper,children:[e.jsxs(b,{cs:a.flexItems,children:[e.jsx(l,{title:"Global Navigation",type:"describe",children:e.jsx(d,{icon:P,cs:a.menuButtonStyles,children:"MENU"})}),e.jsx(l,{title:"Workday Home",children:e.jsx(d,{children:e.jsx("img",{src:"https://design.workday.com/images/ck-dub-logo-blue.svg",alt:""})})})]}),e.jsx(b,{cs:a.flexItems,children:e.jsx(oe,{"aria-label":"Search Workday"})}),e.jsxs(b,{cs:a.flexItems,children:[e.jsx(l,{title:"Assistant",children:e.jsx(d,{icon:j})}),e.jsx(ne,{cnt:t}),e.jsx(l,{title:"My Tasks",children:e.jsx(d,{icon:H})}),e.jsx(l,{title:"Profile",children:e.jsx(D,{name:"Logan McNeil",isDecorative:!0})})]})]})}),oe=g("div")({displayName:"Autocomplete",Component:t=>{const[o,s]=S.useState("");function r(u){s(u.target.value)}const{model:p,loader:w}=F({total:0,pageSize:20,async load({pageNumber:u,pageSize:f,filter:ae}){return new Promise(B=>{setTimeout(()=>{const h=(u-1)*f,A=h+f,I=Z.filter(N=>o.trim()===""||typeof o!="string"?!0:N.toLowerCase().includes(o.trim().toLowerCase())),M=I.length,L=I.slice(h,A);B({items:L,total:M})},300)})},onShow(){w.load()}},k);return e.jsxs(c,{model:p,children:[e.jsxs(x,{children:[e.jsx(x.InnerStart,{cs:a.inputGroupInner,children:e.jsx(J,{icon:G})}),e.jsx(x.Input,{as:ee,cs:a.comboboxInput,onChange:r,value:o,...t})]}),e.jsx(c.Menu.Popper,{children:e.jsx(c.Menu.Card,{children:p.state.items.length===0?e.jsx(E,{as:"span",children:"No Results Found"}):p.state.items.length>0&&e.jsx(c.Menu.List,{cs:{maxHeight:m(200)},children:u=>e.jsx(c.Menu.Item,{children:u})})})})]})}}),ne=g("span")({displayName:"NotificationLiveBadge",Component:({cnt:t=0,...o})=>{const s=C(),r=C();return e.jsxs(b,{cs:a.notificationContainerStyles,children:[e.jsx(l,{title:"Notifications",children:e.jsx(d,{id:s,icon:O,"aria-describedby":t>0?r:void 0,...o})}),e.jsx(Q,{"aria-labelledby":s,children:t>0&&e.jsxs(e.Fragment,{children:[e.jsx(z,{id:r,count:t,limit:100,cs:a.countBadgeStyles}),e.jsx(V,{children:"New"})]})})]})}});te.__RAW__=`import * as React from 'react';

import {Avatar} from '@workday/canvas-kit-react/avatar';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {
  Combobox,
  useComboboxInput,
  useComboboxLoader,
  useComboboxModel,
} from '@workday/canvas-kit-react/combobox';
import {
  AccessibleHide,
  AriaLiveRegion,
  ExtractProps,
  composeHooks,
  createComponent,
  createElemPropsHook,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {calc, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  assistantIcon,
  hamburgerIcon,
  inboxIcon,
  notificationsIcon,
  searchIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface GlobalHeaderProps extends FlexProps {
  notifications: number;
}
interface LiveCountBadgeProps extends FlexProps {
  cnt: number;
}

const tasks = ['Request Time Off', 'Create Expense Report', 'Change Benefits'];

const styleOverrides = {
  headerWrapper: createStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    ...system.type.subtext.lg,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: system.color.bg.default,
    padding: system.padding.xxs,
  }),
  flexItems: createStyles({
    gap: system.gap.md,
    alignItems: 'center',
    marginInline: px2rem(12),
  }),
  inputGroupInner: createStyles({
    marginInline: system.gap.md,
    width: px2rem(20),
    transition: 'opacity 100ms ease',
  }),
  comboboxContainer: createStyles({
    margin: 'auto',
    width: '100%',
    maxWidth: calc.multiply(px2rem(80), 6),
  }),
  comboboxInput: createStyles({
    borderRadius: px2rem(1000),
    width: '20rem',
  }),
  comboboxMenuList: createStyles({
    maxHeight: px2rem(200),
  }),
  menuButtonStyles: createStyles({
    textDecoration: 'none',
    color: system.color.fg.strong,
  }),
  notificationContainerStyles: createStyles({
    boxSizing: 'border-box',
    position: 'relative',
  }),
  countBadgeStyles: createStyles({
    boxSizing: 'border-box',
    position: 'absolute',
    top: calc.negate(system.gap.xs),
    insetInlineEnd: calc.negate(system.gap.xs),
  }),
  actionButtonStyles: createStyles({
    gap: system.gap.md,
    margin: system.gap.md,
  }),
};

const useAutocompleteInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    return {
      onKeyPress(event: React.KeyboardEvent) {
        model.events.show(event);
      },
    };
  }),
  useComboboxInput
);

const AutoCompleteInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useAutocompleteInput,
})<ExtractProps<typeof Combobox.Input, never>>((elemProps, Element) => {
  return <Combobox.Input as={Element} {...elemProps} />;
});

export const Basic = () => {
  const [notifications, setNotifications] = React.useState(0);

  function handleAdd() {
    setNotifications(prev => prev + 1);
  }

  function handleClear() {
    setNotifications(0);
  }

  return (
    <header>
      <GlobalHeader notifications={notifications} />
      <Flex cs={styleOverrides.actionButtonStyles}>
        <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>
        <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>
      </Flex>
    </header>
  );
};

export const GlobalHeader = createComponent('div')({
  displayName: 'GlobalHeader',
  Component: ({notifications}: GlobalHeaderProps) => (
    <div className={styleOverrides.headerWrapper}>
      <Flex cs={styleOverrides.flexItems}>
        <Tooltip title="Global Navigation" type="describe">
          <TertiaryButton icon={hamburgerIcon} cs={styleOverrides.menuButtonStyles}>
            MENU
          </TertiaryButton>
        </Tooltip>
        <Tooltip title="Workday Home">
          <TertiaryButton>
            <img src="https://design.workday.com/images/ck-dub-logo-blue.svg" alt="" />
          </TertiaryButton>
        </Tooltip>
      </Flex>
      <Flex cs={styleOverrides.flexItems}>
        <Autocomplete aria-label="Search Workday" />
      </Flex>
      <Flex cs={styleOverrides.flexItems}>
        <Tooltip title="Assistant">
          <TertiaryButton icon={assistantIcon} />
        </Tooltip>

        <NotificationLiveBadge cnt={notifications} />

        <Tooltip title="My Tasks">
          <TertiaryButton icon={inboxIcon} />
        </Tooltip>
        <Tooltip title="Profile">
          <Avatar name="Logan McNeil" isDecorative />
        </Tooltip>
      </Flex>
    </div>
  ),
});

const Autocomplete = createComponent('div')({
  displayName: 'Autocomplete',
  Component: props => {
    const [searchText, setSearchText] = React.useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setSearchText(e.target.value);
    }

    const {model, loader} = useComboboxLoader(
      {
        // You can start with any number that makes sense.
        total: 0,

        // Pick whatever number makes sense for your API
        pageSize: 20,

        // A load function that will be called by the loader. You must return a promise that returns
        // an object like \`{items: [], total: 0}\`. The \`items\` will be merged into the loader's cache
        async load({pageNumber, pageSize, filter}) {
          return new Promise<LoadReturn<string>>(resolve => {
            // simulate a server response by resolving after a period of time
            setTimeout(() => {
              // simulate paging and filtering based on pre-computed items
              const start = (pageNumber - 1) * pageSize;
              const end = start + pageSize;
              const filteredTasks = tasks.filter(i => {
                if (searchText.trim() === '' || typeof searchText !== 'string') {
                  return true;
                }
                return i.toLowerCase().includes(searchText.trim().toLowerCase());
              });

              const total = filteredTasks.length;
              const items = filteredTasks.slice(start, end);

              resolve({
                items,
                total,
              });
            }, 300);
          });
        },
        onShow() {
          // The \`shouldLoad\` cancels while the combobox menu is hidden, so let's load when it is
          // visible
          loader.load();
        },
      },
      useComboboxModel
    );

    return (
      <Combobox model={model}>
        <InputGroup>
          <InputGroup.InnerStart cs={styleOverrides.inputGroupInner}>
            <SystemIcon icon={searchIcon} />
          </InputGroup.InnerStart>
          <InputGroup.Input
            as={AutoCompleteInput}
            cs={styleOverrides.comboboxInput}
            onChange={handleChange}
            value={searchText}
            {...props}
          />
        </InputGroup>
        <Combobox.Menu.Popper>
          <Combobox.Menu.Card>
            {model.state.items.length === 0 ? (
              <StyledMenuItem as="span">No Results Found</StyledMenuItem>
            ) : (
              model.state.items.length > 0 && (
                <Combobox.Menu.List cs={{maxHeight: px2rem(200)}}>
                  {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                </Combobox.Menu.List>
              )
            )}
          </Combobox.Menu.Card>
        </Combobox.Menu.Popper>
      </Combobox>
    );
  },
});

const NotificationLiveBadge = createComponent('span')({
  displayName: 'NotificationLiveBadge',
  Component: ({cnt = 0, ...props}: LiveCountBadgeProps) => {
    const btnId = useUniqueId();
    const badgeId = useUniqueId();

    return (
      <Flex cs={styleOverrides.notificationContainerStyles}>
        <Tooltip title="Notifications">
          <TertiaryButton
            id={btnId}
            icon={notificationsIcon}
            aria-describedby={cnt > 0 ? badgeId : undefined}
            {...props}
          />
        </Tooltip>
        <AriaLiveRegion aria-labelledby={btnId}>
          {cnt > 0 && (
            <>
              <CountBadge
                id={badgeId}
                count={cnt}
                limit={100}
                cs={styleOverrides.countBadgeStyles}
              />
              <AccessibleHide>New</AccessibleHide>
            </>
          )}
        </AriaLiveRegion>
      </Flex>
    );
  },
});
`;T.__RAW__=`import * as React from 'react';

import {Avatar} from '@workday/canvas-kit-react/avatar';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {
  Combobox,
  useComboboxInput,
  useComboboxLoader,
  useComboboxModel,
} from '@workday/canvas-kit-react/combobox';
import {
  AccessibleHide,
  AriaLiveRegion,
  ExtractProps,
  composeHooks,
  createComponent,
  createElemPropsHook,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {calc, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  assistantIcon,
  hamburgerIcon,
  inboxIcon,
  notificationsIcon,
  searchIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface GlobalHeaderProps extends FlexProps {
  notifications: number;
}
interface LiveCountBadgeProps extends FlexProps {
  cnt: number;
}

const tasks = ['Request Time Off', 'Create Expense Report', 'Change Benefits'];

const styleOverrides = {
  headerWrapper: createStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    ...system.type.subtext.lg,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: system.color.bg.default,
    padding: system.padding.xxs,
  }),
  flexItems: createStyles({
    gap: system.gap.md,
    alignItems: 'center',
    marginInline: px2rem(12),
  }),
  inputGroupInner: createStyles({
    marginInline: system.gap.md,
    width: px2rem(20),
    transition: 'opacity 100ms ease',
  }),
  comboboxContainer: createStyles({
    margin: 'auto',
    width: '100%',
    maxWidth: calc.multiply(px2rem(80), 6),
  }),
  comboboxInput: createStyles({
    borderRadius: px2rem(1000),
    width: '20rem',
  }),
  comboboxMenuList: createStyles({
    maxHeight: px2rem(200),
  }),
  menuButtonStyles: createStyles({
    textDecoration: 'none',
    color: system.color.fg.strong,
  }),
  notificationContainerStyles: createStyles({
    boxSizing: 'border-box',
    position: 'relative',
  }),
  countBadgeStyles: createStyles({
    boxSizing: 'border-box',
    position: 'absolute',
    top: calc.negate(system.gap.xs),
    insetInlineEnd: calc.negate(system.gap.xs),
  }),
  actionButtonStyles: createStyles({
    gap: system.gap.md,
    margin: system.gap.md,
  }),
};

const useAutocompleteInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    return {
      onKeyPress(event: React.KeyboardEvent) {
        model.events.show(event);
      },
    };
  }),
  useComboboxInput
);

const AutoCompleteInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useAutocompleteInput,
})<ExtractProps<typeof Combobox.Input, never>>((elemProps, Element) => {
  return <Combobox.Input as={Element} {...elemProps} />;
});

export const Basic = () => {
  const [notifications, setNotifications] = React.useState(0);

  function handleAdd() {
    setNotifications(prev => prev + 1);
  }

  function handleClear() {
    setNotifications(0);
  }

  return (
    <header>
      <GlobalHeader notifications={notifications} />
      <Flex cs={styleOverrides.actionButtonStyles}>
        <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>
        <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>
      </Flex>
    </header>
  );
};

export const GlobalHeader = createComponent('div')({
  displayName: 'GlobalHeader',
  Component: ({notifications}: GlobalHeaderProps) => (
    <div className={styleOverrides.headerWrapper}>
      <Flex cs={styleOverrides.flexItems}>
        <Tooltip title="Global Navigation" type="describe">
          <TertiaryButton icon={hamburgerIcon} cs={styleOverrides.menuButtonStyles}>
            MENU
          </TertiaryButton>
        </Tooltip>
        <Tooltip title="Workday Home">
          <TertiaryButton>
            <img src="https://design.workday.com/images/ck-dub-logo-blue.svg" alt="" />
          </TertiaryButton>
        </Tooltip>
      </Flex>
      <Flex cs={styleOverrides.flexItems}>
        <Autocomplete aria-label="Search Workday" />
      </Flex>
      <Flex cs={styleOverrides.flexItems}>
        <Tooltip title="Assistant">
          <TertiaryButton icon={assistantIcon} />
        </Tooltip>

        <NotificationLiveBadge cnt={notifications} />

        <Tooltip title="My Tasks">
          <TertiaryButton icon={inboxIcon} />
        </Tooltip>
        <Tooltip title="Profile">
          <Avatar name="Logan McNeil" isDecorative />
        </Tooltip>
      </Flex>
    </div>
  ),
});

const Autocomplete = createComponent('div')({
  displayName: 'Autocomplete',
  Component: props => {
    const [searchText, setSearchText] = React.useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setSearchText(e.target.value);
    }

    const {model, loader} = useComboboxLoader(
      {
        // You can start with any number that makes sense.
        total: 0,

        // Pick whatever number makes sense for your API
        pageSize: 20,

        // A load function that will be called by the loader. You must return a promise that returns
        // an object like \`{items: [], total: 0}\`. The \`items\` will be merged into the loader's cache
        async load({pageNumber, pageSize, filter}) {
          return new Promise<LoadReturn<string>>(resolve => {
            // simulate a server response by resolving after a period of time
            setTimeout(() => {
              // simulate paging and filtering based on pre-computed items
              const start = (pageNumber - 1) * pageSize;
              const end = start + pageSize;
              const filteredTasks = tasks.filter(i => {
                if (searchText.trim() === '' || typeof searchText !== 'string') {
                  return true;
                }
                return i.toLowerCase().includes(searchText.trim().toLowerCase());
              });

              const total = filteredTasks.length;
              const items = filteredTasks.slice(start, end);

              resolve({
                items,
                total,
              });
            }, 300);
          });
        },
        onShow() {
          // The \`shouldLoad\` cancels while the combobox menu is hidden, so let's load when it is
          // visible
          loader.load();
        },
      },
      useComboboxModel
    );

    return (
      <Combobox model={model}>
        <InputGroup>
          <InputGroup.InnerStart cs={styleOverrides.inputGroupInner}>
            <SystemIcon icon={searchIcon} />
          </InputGroup.InnerStart>
          <InputGroup.Input
            as={AutoCompleteInput}
            cs={styleOverrides.comboboxInput}
            onChange={handleChange}
            value={searchText}
            {...props}
          />
        </InputGroup>
        <Combobox.Menu.Popper>
          <Combobox.Menu.Card>
            {model.state.items.length === 0 ? (
              <StyledMenuItem as="span">No Results Found</StyledMenuItem>
            ) : (
              model.state.items.length > 0 && (
                <Combobox.Menu.List cs={{maxHeight: px2rem(200)}}>
                  {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                </Combobox.Menu.List>
              )
            )}
          </Combobox.Menu.Card>
        </Combobox.Menu.Popper>
      </Combobox>
    );
  },
});

const NotificationLiveBadge = createComponent('span')({
  displayName: 'NotificationLiveBadge',
  Component: ({cnt = 0, ...props}: LiveCountBadgeProps) => {
    const btnId = useUniqueId();
    const badgeId = useUniqueId();

    return (
      <Flex cs={styleOverrides.notificationContainerStyles}>
        <Tooltip title="Notifications">
          <TertiaryButton
            id={btnId}
            icon={notificationsIcon}
            aria-describedby={cnt > 0 ? badgeId : undefined}
            {...props}
          />
        </Tooltip>
        <AriaLiveRegion aria-labelledby={btnId}>
          {cnt > 0 && (
            <>
              <CountBadge
                id={badgeId}
                count={cnt}
                limit={100}
                cs={styleOverrides.countBadgeStyles}
              />
              <AccessibleHide>New</AccessibleHide>
            </>
          )}
        </AriaLiveRegion>
      </Flex>
    );
  },
});
`;export{te as B,T as G};
