import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as s}from"./index-3YbjYt95.js";import{ae as i}from"./index-Ued3TV6s.js";import"./index-IfJi-UCQ.js";import"./iframe-C_doqmiv.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Upgrade Guides/v7.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-70-upgrade-guide",children:"Canvas Kit 7.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`This guide contains breaking changes in Canvas Kit v7. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod",children:"Codemod"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#general-changes",children:"General Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#dependency-upgrades",children:"Dependency Upgrades"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#model-changes",children:"Model Changes"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#tokens",children:"Tokens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#depth",children:"Depth"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#components",children:"Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-deprecations",children:"Component Deprecations"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-promotions",children:"Component Promotions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#action-bar",children:"Action Bar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#banner",children:"Banner"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#button",children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icon",children:"Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popper",children:"Popper"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#popup",children:"Popup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#segmented-control",children:"Segmented Control"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#side-panel",children:"Side Panel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#status-indicator",children:"Status Indicator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tabs",children:"Tabs"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["Please use our ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod package"}),`
to automatically update your code to work with many of the breaking changes as you upgrade from
Canvas Kit v6 to v7:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`> npx @workday/canvas-kit-codemod v7 [path]
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: This codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` extensions. You may need to make
some manual changes in other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),", etc.)."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Note: You may need to run your linter after executing the codemod, as its resulting formatting
(spacing, quotes, etc.) may not match your project's styling.`}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breaking changes handled by this codemod will be marked with a 🤖."})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:`Please verify all changes made by the codemod. As a safety precaution, we recommend committing the
changes from the codemod as a single isolated commit (separate from other changes) so you can
rollback more easily if necessary.`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"Let us know"}),` if you
encounter any issues or use cases that we've missed.`]}),`
`,e.jsx(n.h2,{id:"general-changes",children:"General Changes"}),`
`,e.jsx(n.h3,{id:"dependency-upgrades",children:"Dependency Upgrades"}),`
`,e.jsx(n.p,{children:`We've upgraded to Emotion 11 and React 17 in v7. This allows teams to upgrade to newer versions of
Emotion and React without needing to maintain older versions in order to use Canvas Kit.`}),`
`,e.jsxs(n.p,{children:["As part of this upgrade, we've removed use of the ",e.jsx(n.code,{children:"/** @jsx jsx */"})," pragma and ",e.jsx(n.code,{children:"css"}),` prop within
Canvas Kit. See our `,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/1455",rel:"nofollow",children:"React 17 discussion"}),`
and `,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/1409",rel:"nofollow",children:"corresponding PR"}),` for more information on why
we made this change. Consumers may continue to use the `,e.jsx(n.code,{children:"css"})," prop."]}),`
`,e.jsx(n.p,{children:"To use v7, you'll need to upgrade the following dependencies:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`React 16.14 OR React 17.X for backwards compatibility on JSX transform if you're using Babel or
TypeScript to compile code`}),`
`,e.jsx(n.li,{children:"Emotion 11"}),`
`,e.jsx(n.li,{children:"TypeScript 4.1 or higher, if applicable"}),`
`,e.jsx(n.li,{children:"Babel 7.9 or higher, if applicable"}),`
`,e.jsx(n.li,{children:"An Enzyme adapter for React 17, if applicable"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["We no longer support TypeScript 3.5-3.9. Previously, we used ",e.jsx(n.code,{children:"downlevel-dts"}),` to support TypeScript
3.5+ while using TypeScript 3.8 features, but `,e.jsx(n.code,{children:"downlevel-dts"}),` does not support features we use in
TypeScript 4.1. TypeScript 4.1 was released in November 2020, and we feel it is time to move
forward. Reach out if you experience issues upgrading your TypeScript version. In our experience,
TypeScript 4.1 found a few more errors than TypeScript 3.8, but the upgrade was manageable.`]}),`
`]}),`
`,e.jsx(n.p,{children:`Please note that you may also need to update any side effect dependencies or linting packages with
this update.`}),`
`,e.jsxs(n.p,{children:["View our ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/1455",rel:"nofollow",children:"React 17"}),` and
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/discussions/1453",rel:"nofollow",children:"Emotion 11"}),` discussions to learn more about
any gotchas or tips and tricks with these upgrades. And of course, feel free to contribute to the
discussion with any questions or learnings of your own!`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"model-changes",children:"Model Changes"}),`
`,e.jsx(n.h4,{id:"guards-and-callbacks",children:"Guards and Callbacks"}),`
`,e.jsx(n.p,{children:`We've changed the signature of model event guards and callbacks. In v6, the parameters were in an
object. This was a less than ideal developer experience as IntelliSense isn't engaged immediately
and we don't plan on adding any additional parameters to guard and callback functions. We've removed
the object wrapper.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
const model = useTabsModel({
  onSelect({data: {id}, prevState}) {
    console.log(id, prevState);
  },
});

// v7
const model = useTabsModel({
  onSelect({id}, prevState) {
    console.log(id, prevState);
  },
});
`})}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle this change for you automatically."}),`
`,e.jsx(n.h4,{id:"model-implementation",children:"Model Implementation"}),`
`,e.jsx(n.p,{children:"If you don't extend models, you can skip this section."}),`
`,e.jsxs(n.p,{children:[`In v6 we supported TypeScript 3.8 which limited the way types could be inferred and defined. v7
requires TypeScript 4.1 which introduced
`,e.jsx(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",rel:"nofollow",children:"Template Literal Types"}),`.
This means guards and callbacks no longer need to be manually defined via an `,e.jsx(n.code,{children:"eventMap"}),`. Event maps
were a stopgap, manual, and prone to errors in defining them. Not all events have guards or
callbacks, and there's no way other than manual review to verify their existence. Template Literal
Types allow us to properly type guards and callbacks without event maps. The previous types forced
`,e.jsx(n.code,{children:"data"}),` to be an object. We've since dropped that restriction. You can still only pass a single
argument to events. If you need additional information, use an object.`]}),`
`,e.jsxs(n.p,{children:[`This change also allowed us to remove a lot of boilerplate associated with models without
sacrificing type safety. This change doesn't affect most use cases, but will affect those who
extended a model. We created a new `,e.jsx(n.code,{children:"createModelHook"})," utility function to help set up types."]}),`
`,e.jsx(n.h5,{id:"v6",children:"v6"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export type MyState = {
  value: string;
};

export type MyEvents = {
  updateValue(data: {value: string}): void; // enforced that \`data\` is an object even if we only need to pass a string
};

export type MyModel = Model<MyState, MyEvents>;

export const myEventMap = createEventMap<MyEvents>()({
  guards: {
    shouldUpdateValue: 'updateValue', // easy to forget or make a mistake on guard name
  },
  callbacks: {
    onUpdateValue: 'updateValue',
  },
});

export type MyBaseConfig = {
  initialValue?: string;
};

export type MyConfig = MyBaseConfig & Partial<ToModelConfig<MyState, MyEvents, typeof myEventMap>>;

const useMyModel = (config: MyConfig = {}): MyModel => {
  const [value, setValue] = React.useState(config.initialValue || '');

  const state = {value};

  // useEventMap is used to wrap the event object with guards and callbacks according to the event map
  const events = useEventMap(myEventMap, state, config, {
    updateValue(data) {
      setValue(data.value);
    },
  });

  return {state, events};
};
`})}),`
`,e.jsx(n.h5,{id:"v7",children:"v7"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const useMyModel = createModelHook({
  defaultConfig: {
    initialValue: '',
  },
})(config => {
  const [value, setValue] = React.useState(config.initialValue); // default is already handled

  const state = {value};

  const events = {
    updateValue(value: string) {
      // doesn't need to be an object anymore
      setValue(value);
    },
  };

  return {state, events};
});
`})}),`
`,e.jsxs(n.p,{children:[`Note the large reduction in TypeScript type boilerplate. In this example, the only place that
TypeScript syntax exists is in the `,e.jsx(n.code,{children:"updateValue"}),` function definition. This allows better collocating
of types and values. Also note that `,e.jsx(n.code,{children:"useEventMap"})," is no longer needed. ",e.jsx(n.code,{children:"createModelHook"}),` will
automatically wrap the `,e.jsx(n.code,{children:"events"}),` returned to call guards and callbacks when appropriate. Today, this
is done by creating a new events object. Once we drop IE11 support, this will be done via a proxy
instead. `,e.jsx(n.code,{children:"createModelHook"}),` handles all type inference so you don't need to explicitly type
everything. `,e.jsx(n.code,{children:"createModelHook"}),` also attaches React Context directly to the hook along with
`,e.jsx(n.code,{children:"defaultConfig"})," and ",e.jsx(n.code,{children:"requiredConfig"})," for model extension."]}),`
`,e.jsx(n.p,{children:`If you extended a model, you'll notice all those types are no longer being exported. You'll have to
use this new utility function. Here's an example we found in the wild:`}),`
`,e.jsx(n.h5,{id:"v6-1",children:"v6"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  BasePopupModelConfig,
  createEventMap,
  Model,
  popupEventMap,
  PopupEvents,
  PopupModelConfig,
  PopupState,
  ToModelConfig,
  useCloseOnEscape,
  useEventMap,
  useFocusTrap,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react';

type MyModalState = PopupState & {
  showOverlay: boolean;
};

type MyModalEvents = PopupEvents;

const myModalEventMap = createEventMap<MyModalEvents>()({
  guards: {
    ...popupEventMap.guards,
  },
  callbacks: {
    ...popupEventMap.callbacks,
  },
});

type MyBaseModalConfig = BasePopupModelConfig & {
  showOverlay?: boolean;
};

type MyModalModel = Model<MyModalState, MyModalEvents>;

type MyConfig = MyBaseConfig &
  Partial<ToModelConfig<MyModalState, MyModalEvents, typeof myModalEventMap>>;

export const useMyModalModel = (config: MyConfig = {}): MyModalModel => {
  const [showOverlay] = React.useState(config.showOverlay ?? true);

  const model = usePopupModel({
    ...config,
    // hook up to a redux store
    onShow(...params) {
      dispatch(setIsModalOpen(true));
      config?.onShow?.(...params);
    },
    onHide(...params) {
      dispatch(setIsModalOpen(false));
      config?.onShow?.(...params);
    },
  });

  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useCloseOnEscape(model);

  const state = {
    ...model.state,
    showOverlay,
  };

  const events = useEventMap(myEventMap, state, config, {
    ...model.events,
  });

  return {state, events};
};
`})}),`
`,e.jsx(n.h5,{id:"v7-1",children:"v7"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  useCloseOnEscape,
  useEventMap,
  useFocusTrap,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react';

const useMyModalModel = createModelHook({
  defaultConfig: {
    ...usePopupModel.defaultConfig,
    showOverlay: true,
  },
  requiredConfig: usePopupModel.requiredConfig,
  contextOverride: usePopupModel.Context, // needed to make sure this model uses the same context as the popup model, otherwise it will create a new one
})(config => {
  // \`mergeConfig\` takes care of the manual merging we were doing earlier
  const model = usePopupModel(
    usePopupModel.mergeConfig(config, {
      // hook up to a redux store
      onShow() {
        dispatch(setIsModalOpen(true));
      },
      onHide() {
        dispatch(setIsModalOpen(false));
      },
    })
  );

  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useCloseOnEscape(model);

  const state = {
    ...model.state,
    showOverlay,
  };

  return {...model, state};
});
`})}),`
`,e.jsx(n.p,{children:`We've eliminated the cumbersome type boilerplate and type imports. The code is more focused on your
unique logic and less on boilerplate.`}),`
`,e.jsxs(n.p,{children:["Given the complex nature of this code, this change is ",e.jsx(n.strong,{children:"not"})," handled by the codemod."]}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(n.h3,{id:"depth",children:"Depth"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Changes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Removed ",e.jsx(n.code,{children:"inset"})," depth"]}),`
`,e.jsxs(n.li,{children:["Added new depth values: ",e.jsx(n.code,{children:"none"})," (to remove the default depth from a component), ",e.jsx(n.code,{children:"5"})," and ",e.jsx(n.code,{children:"6"})]}),`
`,e.jsxs(n.li,{children:["Updated all depth values: depth now adds only ",e.jsx(n.code,{children:"box-shadow"})," with two shadows and no border"]}),`
`]}),`
`,e.jsx(n.p,{children:"We've also changed the default depth for the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Breadcrumbs (Dropdown Menu): Depth 2 → Depth 3"}),`
`,e.jsx(n.li,{children:"Card: Depth 2 → Depth 1"}),`
`,e.jsx(n.li,{children:"Color Picker (Palette): Depth 2 → Depth 5"}),`
`,e.jsx(n.li,{children:"Combobox: Depth 1 → Depth 3"}),`
`,e.jsx(n.li,{children:"Dialog: Depth 2 → Depth 5"}),`
`,e.jsx(n.li,{children:"Menu: Depth 2 → Depth 3"}),`
`,e.jsx(n.li,{children:"Modal: Depth 2 → Depth 6"}),`
`,e.jsx(n.li,{children:"Popup: Depth 2 → Depth 5"}),`
`,e.jsx(n.li,{children:"Side Panel (Preview, alternate variant): Depth 3 → Depth 5"}),`
`,e.jsx(n.li,{children:"Toast: Depth 2 → Depth 5"}),`
`]}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.h3,{id:"component-deprecations",children:"Component Deprecations"}),`
`,e.jsx(n.h4,{id:"deprecation-types",children:"Deprecation Types"}),`
`,e.jsx(n.p,{children:"There are two types of deprecations: soft and hard."}),`
`,e.jsx(n.h5,{id:"soft-deprecation",children:"Soft Deprecation"}),`
`,e.jsx(n.p,{children:`A soft-deprecated component is still available with its full functionality, but it will have been
renamed with a prefix to indicate its soft-deprecated status. It will also include a console warning
announcing its deprecation. This warning will only be triggered on the component's initial render.`}),`
`,e.jsx(n.p,{children:`Soft-deprecated types and utilities will also be renamed but generally will not trigger a console
warning.`}),`
`,e.jsx(n.h5,{id:"hard-deprecation",children:"Hard Deprecation"}),`
`,e.jsxs(n.p,{children:[`A hard-deprecated component or package is no longer available. You will need to follow the method
prescribed in our upgrade guide to update your application. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` to our team
directly if you need additional help.`]}),`
`,e.jsx(n.h4,{id:"cookie-banner",children:"Cookie Banner"}),`
`,e.jsxs(n.p,{children:["We are ",e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecating"})," ",e.jsx(n.code,{children:"CookieBanner"}),`. Please reference this
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/examples-cookiebanner-react--basic",rel:"nofollow",children:"example"}),` to
migrate away from `,e.jsx(n.code,{children:"CookieBanner"}),"."]}),`
`,e.jsx(n.h4,{id:"page-header",children:"Page Header"}),`
`,e.jsxs(n.p,{children:["We are ",e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecating"})," ",e.jsx(n.code,{children:"PageHeader"}),`. Please reference this
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/examples-pageheader-react--basic",rel:"nofollow",children:"example"}),` to
migrate away from `,e.jsx(n.code,{children:"PageHeader"}),"."]}),`
`,e.jsx(n.h4,{id:"header--global-header",children:"Header / Global Header"}),`
`,e.jsxs(n.p,{children:["We are ",e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecating"})," ",e.jsx(n.code,{children:"Header"}),`. Please reference this
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/examples-globalheader-react--basic",rel:"nofollow",children:"example"}),` to
migrate away from `,e.jsx(n.code,{children:"Header"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"component-promotions",children:"Component Promotions"}),`
`,e.jsxs(n.p,{children:["We've ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/1395",rel:"nofollow",children:"promoted"})," the following components in v7:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Box"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-labs/common"})," to ",e.jsx(n.code,{children:"@workday/canvas-kit-react/layout"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Flex"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-labs/layout"})," to ",e.jsx(n.code,{children:"@workday/canvas-kit-react/layout"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Stack"})," from ",e.jsx(n.code,{children:"@workday/canvas-kit-labs/layout"})," to ",e.jsx(n.code,{children:"@workday/canvas-kit-react/layout"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
import {Box} from '@workday/canvas-kit-labs-react/common';

// v7
import {Box} from '@workday/canvas-kit-react/layout';
`})}),`
`,e.jsx(n.p,{children:"🤖 The codemod will update imports for these promoted components."}),`
`,e.jsx(n.p,{children:"The APIs for these promoted components remain unchanged."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"action-bar",children:"Action Bar"}),`
`,e.jsx(n.h4,{id:"model",children:"Model"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ActionBar"}),` API changed to model API to support more generic behaviors to allow for other
components to support responsive layouts using the same models and behaviors. It also allows to
implement a responsive layout based on a container width
(`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/1585",rel:"nofollow",children:"#1585"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const model = useActionBarModel({
  items: [
    {
      id: 'first',
      text: 'First Action',
    },
  ],
});

<ActionBar model={model} />;
`})}),`
`,e.jsx(n.h4,{id:"responsive-container-support",children:"Responsive Container Support"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ActionBar"}),` component can now handle responsive containers, but the support is not automatic.
You must use the dynamic API and provide an overflow menu subcomponent. The dynamic API doesn't know
the shape of your object, so render props must be used to instruct React how to render each item.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [items] = React.useState<MyActionItem[]>([
  {
    id: 'first',
    text: 'First Action',
  },
  {
    id: 'second',
    text: 'Second Action',
  },
  {
    id: 'third',
    text: 'Third Action',
  },
  {
    id: 'fourth',
    text: 'Fourth Action',
  },
  {
    id: 'fifth',
    text: 'Fifth Action',
  },
]);

const model = useActionBarModel({items});

<ActionBar model={model}>
  <ActionBar.List>
    {item => <ActionBar.Item onClick={() => console.log(item.id)}>{item.text}</ActionBar.Item>}
  </ActionBar.List>
  <ActionBar.Menu.Popper>
    <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
      <ActionBar.Menu.List>
        {item => (
          <ActionBar.Menu.Item onClick={() => console.log(item.id)}>
            {item.text}
          </ActionBar.Menu.Item>
        )}
      </ActionBar.Menu.List>
    </ActionBar.Menu.Card>
  </ActionBar.Menu.Popper>
</ActionBar>;
`})}),`
`,e.jsx(n.h4,{id:"fixed-position-prop",children:"Fixed Position Prop"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionBar"}),"'s boolean ",e.jsx(n.code,{children:"fixed"})," prop has been removed. It has been replaced by a new ",e.jsx(n.code,{children:"position"}),` style
prop in the `,e.jsx(n.code,{children:"ActionBar.List"})," component and is set to ",e.jsx(n.code,{children:"fixed"})," by default."]}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will remove uses of the ",e.jsx(n.code,{children:"fixed"})," prop from ",e.jsx(n.code,{children:"ActionBar"}),` and restructure component by
creating `,e.jsx(n.code,{children:"ActionBar.List"})," subcomponent and replacing all ",e.jsx(n.code,{children:"ActionBar"})," children to it."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"banner",children:"Banner"}),`
`,e.jsxs(n.p,{children:["Banner is now a ",e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),`
composed of `,e.jsx(n.code,{children:"Banner.Icon"}),", ",e.jsx(n.code,{children:"Banner.Label"}),", and ",e.jsx(n.code,{children:"Banner.ActionText"}),`. This allows direct access to the
icon, label, and text elements.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<Banner label="3 Warnings" actionText="Show Details" variant={Banner.Variant.Sticky} error={Banner.ErrorType.Error} />

// v7
<Banner isSticky={true} hasError={true}>
  <Banner.Icon />
  <Banner.Label>3 Warnings</Banner.Label>
  <Banner.ActionText>Show Details</Banner.ActionText>
</Banner>
`})}),`
`,e.jsx(n.p,{children:"🤖 The codemod will rewrite your JSX to match the new API."}),`
`,e.jsxs(n.p,{children:["Like all compound components, ",e.jsx(n.code,{children:"Banner"}),` is written using the
`,e.jsx(n.a,{href:"?path=/docs/guides-creating-compound-components--docs#disclosurecontent-component",children:"createComponent"}),`
utility from our
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/ff77c5bd83e41c3ab2b9c55e41a8b7c1fde33a1b/modules/react/common/lib/utils/components.ts#L167",rel:"nofollow",children:"common"}),`
module; it supports `,e.jsx(n.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),` and using the
`,e.jsx(n.code,{children:"as"})," prop to change the rendered element."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"variant"})," prop (which previously accepted ",e.jsx(n.code,{children:"Banner.Variant.Full"})," or ",e.jsx(n.code,{children:"Banner.Variant.Sticky"}),`) has
been converted to the boolean `,e.jsx(n.code,{children:"isSticky"})," prop on the container ",e.jsx(n.code,{children:"Banner"})," component."]}),`
`,e.jsxs(n.p,{children:["Similarly, the ",e.jsx(n.code,{children:"error"})," prop (which previously accepted ",e.jsx(n.code,{children:"Banner.ErrorType.Caution"}),` or
`,e.jsx(n.code,{children:"Banner.ErrorType.Error"}),") has been converted to the boolean ",e.jsx(n.code,{children:"hasError"})," prop on ",e.jsx(n.code,{children:"Banner"}),". ",e.jsx(n.code,{children:"Banner"}),`
now uses the `,e.jsx(n.code,{children:"useThemedPalette"})," hook which allows you to override its colors using the Canvas theme."]}),`
`,e.jsxs(n.p,{children:["The icon is now customizable via the ",e.jsx(n.code,{children:"icon"})," prop of ",e.jsx(n.code,{children:"Banner.Icon"}),`. Previously, the icon was limited
to `,e.jsx(n.code,{children:"exclamationTriangleIcon"})," and ",e.jsx(n.code,{children:"exclamationCircleIcon"}),` for the alert and error states,
respectively.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsx(n.h4,{id:"removal-of-icon-button",children:"Removal of Icon Button"}),`
`,e.jsxs(n.p,{children:["To consolidate Button APIs, we've removed ",e.jsx(n.code,{children:"IconButton"})," in favor of ",e.jsx(n.code,{children:"SecondaryButton"}),` and
`,e.jsx(n.code,{children:"TertiaryButton"}),". The following table shows how ",e.jsx(n.code,{children:"IconButton"}),` variants in v6 map to their
corresponding buttons in v7.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsxs(n.th,{children:["v6 ",e.jsx(n.code,{children:"IconButton"})," variant"]}),e.jsx(n.th,{children:"v7 button (and variant, if necessary)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"circle"})," (default variant)"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"TertiaryButton"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"circleFilled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"SecondaryButton"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"inverse"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"TertiaryButton"})," with ",e.jsx(n.code,{children:"inverse"})," variant"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"inverseFilled"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"SecondaryButton"})," with ",e.jsx(n.code,{children:"inverse"})," variant"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"plain"})}),e.jsx(n.td,{children:"Unsupported"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"square"})}),e.jsx(n.td,{children:"Unsupported"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"squareFilled"})}),e.jsx(n.td,{children:"Unsupported"})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Note: See below for more information about how to manually migrate from
`,e.jsx(n.a,{href:"#unsupported-iconbutton-variants",children:"unsupported v6 variants"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["🤖 Use the codemod to migrate your ",e.jsx(n.code,{children:"IconButton"}),` components in v6 to their corresponding buttons in
v7:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<IconButton icon={plusIcon} />
<IconButton variant="circleFilled" icon={plusIcon} />
<IconButton variant="inverse" icon={plusIcon} />
<IconButton variant="inverseFilled" icon={plusIcon} />

// v7
<TertiaryButton icon={plusIcon} />
<SecondaryButton icon={plusIcon} />
<TertiaryButton variant="inverse" icon={plusIcon} />
<SecondaryButton variant="inverse" icon={plusIcon} />
`})}),`
`,e.jsx(n.h5,{id:"unsupported-iconbutton-variants",children:"Unsupported IconButton Variants"}),`
`,e.jsxs(n.p,{children:["In order to simplify our API, we no longer support the ",e.jsx(n.code,{children:"plain"}),", ",e.jsx(n.code,{children:"square"}),", and ",e.jsx(n.code,{children:"squareFilled"}),`
variants from `,e.jsx(n.code,{children:"IconButton"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"IconButton"})," components with ",e.jsx(n.code,{children:"square"}),", ",e.jsx(n.code,{children:"squareFilled"})," and ",e.jsx(n.code,{children:"plain"}),` variants should be updated to the
corresponding icon-only button versions (`,e.jsx(n.code,{children:"PrimaryButton"}),", ",e.jsx(n.code,{children:"SecondaryButton"}),", and ",e.jsx(n.code,{children:"TertiaryButton"}),`),
`,e.jsx(n.code,{children:"ToolbarIconButton"}),", or ",e.jsx(n.code,{children:"SegmentedControl"}),". You may use ",e.jsx(n.code,{children:"ToolbarIconButton"}),` if you would still like
to have a square icon that is toggleable.`]}),`
`,e.jsxs(n.p,{children:["These changes are ",e.jsx(n.strong,{children:"not"})," handled by the codemod."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`If none of these options support your use case, we've introduced a low-level
`,e.jsx(n.a,{href:"#basebutton",children:e.jsx(n.code,{children:"BaseButton"})}),` component which allows you to modify the button's colors, size, and
other props. For an example of it being used, reference our
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/react/pagination/lib/Pagination/PageButton.tsx",rel:"nofollow",children:e.jsx(n.code,{children:"PageButton"})}),`
component.`]}),`
`]}),`
`,e.jsx(n.h5,{id:"removal-of-iconbuttonprops",children:"Removal of IconButtonProps"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"IconButtonProps"})," interface no longer exists now that ",e.jsx(n.code,{children:"IconButton"})," has been removed."]}),`
`,e.jsxs(n.p,{children:["This change is ",e.jsx(n.strong,{children:"not"})," handled by the codemod."]}),`
`,e.jsx(n.h5,{id:"toggled",children:"Toggled"}),`
`,e.jsxs(n.p,{children:["There is no equivalent to the ",e.jsx(n.code,{children:"IconButton"})," ",e.jsx(n.code,{children:"toggled"})," prop in ",e.jsx(n.code,{children:"SecondaryButton"})," and ",e.jsx(n.code,{children:"TertiaryButton"}),`.
If you wish to render a button with a toggled state, consider using `,e.jsx(n.code,{children:"ToolbarIconButton"}),"."]}),`
`,e.jsxs(n.p,{children:["This change is ",e.jsx(n.strong,{children:"not"})," handled by the codemod."]}),`
`,e.jsx(n.h4,{id:"icon-position",children:"Icon Position"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"iconPosition"}),` prop determines where an icon should be rendered relative to the button text.
We've updated the values from `,e.jsx(n.code,{children:"left"})," and ",e.jsx(n.code,{children:"right"})," to ",e.jsx(n.code,{children:"start"})," and ",e.jsx(n.code,{children:"end"}),` respectively to better reflect
bidirectionality. The default value is `,e.jsx(n.code,{children:"start"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
iconPosition: 'left' | 'right';

// v7
iconPosition: 'start' | 'end';
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will map ",e.jsx(n.code,{children:"left"})," to ",e.jsx(n.code,{children:"start"})," and ",e.jsx(n.code,{children:"right"})," to ",e.jsx(n.code,{children:"end"})," for all uses of ",e.jsx(n.code,{children:"iconPosition"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"iconPosition"})," will have no effect if you're rendering a button with only an icon and no text."]}),`
`,e.jsx(n.h4,{id:"removal-of-datalabel",children:"Removal of dataLabel"}),`
`,e.jsxs(n.p,{children:["In order to simplify our API, we've removed the ",e.jsx(n.code,{children:"dataLabel"})," prop from ",e.jsx(n.code,{children:"PrimaryButton"}),` and
`,e.jsx(n.code,{children:"SecondaryButton"}),"."]}),`
`,e.jsxs(n.p,{children:["Given the varied use of ",e.jsx(n.code,{children:"dataLabel"}),", this change is ",e.jsx(n.strong,{children:"not"}),` handled by the codemod. Here's an
example of how to achieve a similar styling in v7:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<PrimaryButton dataLabel="1:00">Time</PrimaryButton>;

// v7
import {space, type} from '@workday/canvas-kit-react/common';

const DataLabel = styled('span')({
  position: 'relative', // Fixes an IE issue with text within button moving on click
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontWeight: type.properties.fontWeights.regular,
  marginLeft: space.xxxs,
});

return (
  <PrimaryButton>
    Time
    <DataLabel>1:00</DataLabel>
  </PrimaryButton>
);
`})}),`
`,e.jsx(n.h4,{id:"basebutton",children:"BaseButton"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Disclaimer"}),": We ",e.jsx(n.strong,{children:"strongly"})," advise consumers ",e.jsx(n.strong,{children:"not"})," to use ",e.jsx(n.code,{children:"BaseButton"}),` and to instead rely
on `,e.jsx(n.code,{children:"PrimaryButton"}),", ",e.jsx(n.code,{children:"SecondaryButton"})," and ",e.jsx(n.code,{children:"TertiaryButton"})," whenever possible. ",e.jsx(n.code,{children:"BaseButton"}),` is
strictly provided as a last resort if no other option is available for your use case.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["As part of our Button restructuring, we've created a low level ",e.jsx(n.code,{children:"BaseButton"}),` component. This
component isn't intended to be used outside of Canvas Kit, but we do export it for very specific use
cases. `,e.jsx(n.code,{children:"BaseButton"})," is a styled ",e.jsx(n.code,{children:"<button>"})," element which supports style properties such as ",e.jsx(n.code,{children:"colors"}),`,
`,e.jsx(n.code,{children:"padding"}),", and ",e.jsx(n.code,{children:"width"})," among many others."]}),`
`,e.jsx(n.p,{children:"Here's an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {BaseButton} from '@workday/canvas-kit-react/button';
import {plusIcon} from '@workday/canvas-system-icons-web';

const getBasicButtonColors = () => {
  return {
    default: {
      background: colors.blueberry400,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    hover: {
      background: colors.blueberry500,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    active: {
      background: colors.blueberry500,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    focus: {
      background: colors.blueberry400,
      label: colors.frenchVanilla100,
      icon: colors.frenchVanilla100,
    },
    disabled: {
      background: colors.blueberry400,
    },
  };
};

export type BasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export const BasicButton = ({children, ...elemProps}: BasicButtonProps) => {
  return (
    <BaseButton
      colors={getPaginationButtonColors()}
      {...elemProps}
    >
      <BaseButton.Label>{children}</BaseButton.Label>
      <BaseButton.Icon icon={plusIcon}>
    </BaseButton>
  );
};
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BaseButton"})," uses our ",e.jsx(n.code,{children:"Box"}),` component under the hood, which allows it to accept a variety of style
properties. Because of the flexibility of this component, consumers can use it to create toggled
buttons or other buttons that aren't supported by our standard button components.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["We've updated ",e.jsx(n.code,{children:"AccentIcon"}),", ",e.jsx(n.code,{children:"AppletIcon"}),", ",e.jsx(n.code,{children:"Graphic"}),", ",e.jsx(n.code,{children:"Icon"}),", ",e.jsx(n.code,{children:"Svg"}),", ",e.jsx(n.code,{children:"SystemIcon"}),`, and
`,e.jsx(n.code,{children:"SystemIconCircle"}),` to use the
`,e.jsx(n.a,{href:"?path=/docs/guides-creating-compound-components--docs#disclosurecontent-component",children:"createComponent"}),`
utility from our
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/ff77c5bd83e41c3ab2b9c55e41a8b7c1fde33a1b/modules/react/common/lib/utils/components.ts#L167",rel:"nofollow",children:"common"}),`
module; they now support `,e.jsx(n.a,{href:"https://reactjs.org/docs/forwarding-refs.html",rel:"nofollow",children:"ref forwarding"}),` and using
the `,e.jsx(n.code,{children:"as"})," prop to change the rendered element."]}),`
`,e.jsxs(n.p,{children:["These components previously supported an ",e.jsx(n.code,{children:"iconRef"})," prop. In v7, you'll need to use ",e.jsx(n.code,{children:"ref"}),` instead of
`,e.jsx(n.code,{children:"iconRef"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<SystemIcon iconRef={ref} />;

// v7
<SystemIcon ref={ref} />;
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will update all Icon components that previously supported ",e.jsx(n.code,{children:"iconRef"})," to use ",e.jsx(n.code,{children:"ref"}),`
instead.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popper",children:"Popper"}),`
`,e.jsxs(n.p,{children:["We've removed the ",e.jsx(n.code,{children:"containerElement"})," prop from ",e.jsx(n.code,{children:"Popper"}),` because it's no longer needed with the
Fullscreen API.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"popup",children:"Popup"}),`
`,e.jsx(n.h4,{id:"popupcard",children:"Popup.Card"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Popup.Card"})," components (this includes ",e.jsx(n.code,{children:"Modal.Card"})," and ",e.jsx(n.code,{children:"Dialog.Card"}),`) are now flexbox containers.
This was done to support overflowing content (by default, the `,e.jsx(n.code,{children:"Popup.Body"}),` component). The card is a
vertical flexbox container and `,e.jsx(n.code,{children:"Popup.Heading"}),", ",e.jsx(n.code,{children:"Popup.Body"}),`, and any other children are flex items.
`,e.jsx(n.code,{children:"Popup.Body"})," now has ",e.jsx(n.code,{children:"overflow-y: auto"}),` to naturally allow the body content to overflow in a scroll
container. This is a breaking change if your `,e.jsx(n.code,{children:"Popup"}),", ",e.jsx(n.code,{children:"Modal"}),", or ",e.jsx(n.code,{children:"Dialog"}),` doesn't work with a
flexbox with `,e.jsx(n.code,{children:"flex-direction: column"}),`. In most cases, this shouldn't matter. If this change does
cause your popup to display incorrectly, you may need to play around with flex item containers.`]}),`
`,e.jsxs(n.p,{children:["Here's an example of where your current implementation might break. A common ",e.jsx(n.code,{children:"Modal"}),` has a heading,
body, and footer (Cancel/Submit buttons). If the Cancel and Submit buttons are direct children of
the `,e.jsx(n.code,{children:"Modal.Card"})," like the following..."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Modal.Card>
  <Modal.Heading>Some Heading</Modal.Heading>
  <Modal.Body>Some Body</Modal.Body>
  <SecondaryButton>Cancel</SecondaryButton>
  <PrimaryButton>Submit</PrimaryButton>
</Modal.Card>
`})}),`
`,e.jsxs(n.p,{children:[`...the buttons will become vertical flex items instead of the default which is displaying
inline-block. Before v7, the buttons would layout next to each other horizontally. In v7, the
buttons will stack vertically. To fix this, you'll need to add another element as a flex item in the
`,e.jsx(n.code,{children:"Modal.Card"}),". The following example uses ",e.jsx(n.code,{children:"HStack"})," to achieve the desired horizontal layout:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Modal.Card>
  <Modal.Heading>Some Heading</Modal.Heading>
  <Modal.Body>Some Body</Modal.Body>
  <HStack spacing="s">
    <SecondaryButton>Cancel</SecondaryButton>
    <PrimaryButton>Submit</PrimaryButton>
  </HStack>
</Modal.Card>
`})}),`
`,e.jsxs(n.p,{children:["If your code contains any hacks to make a ",e.jsx(n.code,{children:"Modal"}),` overflow, those hacks should now be removed.
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/docs/components-popups-modal-react--body-overflow",rel:"nofollow",children:"This example shows how body content overflows"}),`
(you may have to limit your browser height to see the overflow). Before v7, you had to manually set
the `,e.jsx(n.code,{children:"max-height"})," of the ",e.jsx(n.code,{children:"Modal.Body"}),` element using calculations. These should now be removed. The
`,e.jsx(n.code,{children:"Popup.Card"})," now has a max height and the ",e.jsx(n.code,{children:"Popup.Body"})," height is automatically calculated."]}),`
`,e.jsx(n.h4,{id:"popupbody",children:"Popup.Body"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Popup.Body"})," is now an overflow container. This means two things:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Popup.Body"})," will scroll if the contents are too big to fit in the page"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Popup.Body"})," will hide focus rings that render outside the overflow container"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Our examples contained buttons inside the ",e.jsx(n.code,{children:"Body"}),` element with their focus rings cut off. We fixed
this by moving the buttons outside the `,e.jsx(n.code,{children:"Body"}),` element. This is most likely the desired structure
anyway since the buttons will no longer scroll with overflowed `,e.jsx(n.code,{children:"Body"})," content."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<Modal.Card>
  <Modal.Body>
    Body Contents
    <HStack spacing="s">
      {/* Will scroll with the body */}
      <Modal.CloseButton as={PrimaryButton}>Delete</Modal.CloseButton>
      <Modal.CloseButton>Cancel</Modal.CloseButton>
    </HStack>
  </Modal.Body>
</Modal.Card>

// v7
<Modal.Card>
  <Modal.Body>Body Contents</Modal.Body>
  <HStack spacing="s">
    <Modal.CloseButton as={PrimaryButton}>Delete</Modal.CloseButton>
    <Modal.CloseButton>Cancel</Modal.CloseButton>
  </HStack>
</Modal.Card>
`})}),`
`,e.jsx(n.h4,{id:"popup-model",children:"Popup Model"}),`
`,e.jsxs(n.p,{children:["In addition to the other ",e.jsx(n.a,{href:"#model-changes",children:"Model Changes"}),", the ",e.jsx(n.code,{children:"show"})," and ",e.jsx(n.code,{children:"hide"}),` events of all
disclosure-type models have been updated to remove the extra event wrapper. This change allows
developers to directly attach the `,e.jsx(n.code,{children:"show"})," and ",e.jsx(n.code,{children:"hide"})," events to React event handlers."]}),`
`,e.jsx(n.p,{children:"The following models were affected:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useDisclosureModel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"usePopupModel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useModalModel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"useDisclosureModel"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<button onClick={() => model.events.show()} /> // most use-cases look like this
<button onClick={event => model.events.show({event})} />

// v7
<button onClick={model.events.show} />
`})}),`
`,e.jsxs(n.p,{children:["Removing the object wrapper around the ",e.jsx(n.code,{children:"event"})," allows us to directly pass the ",e.jsx(n.code,{children:"show"})," or ",e.jsx(n.code,{children:"hide"}),` event
to the `,e.jsx(n.code,{children:"onClick"})," handler which is much more convenient. We couldn't find many uses of the ",e.jsx(n.code,{children:"event"}),` in
the wild, so the impact will be minimal. Most usage of `,e.jsx(n.code,{children:"show"})," or ",e.jsx(n.code,{children:"hide"}),` events are called without
`,e.jsx(n.code,{children:"event"}),", so this change will not impact most people. There is ",e.jsx(n.strong,{children:"no"}),` codemod for this change,
because the usage is very difficult to detect since most people pass a callback that doesn't take
parameters.`]}),`
`,e.jsxs(n.p,{children:["Guards and callback signatures have also changed to remove the object wrapper around the ",e.jsx(n.code,{children:"event"}),`.
The following v6 example includes the `,e.jsx(n.a,{href:"#model-changes",children:"Model Changes"}),` which this change compounds
upon.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
const model = usePopupModel({
  shouldShow({data: {event}, state}) {
    console.log(event, state);
  },
  onShow({data: {event}, prevState}) {
    console.log(event, prevState);
  },
});

// v7
const model = usePopupModel({
  shouldShow(event, state) {
    console.log(event, state);
  },
  onShow(event, prevState) {
    console.log(event, prevState);
  },
});
`})}),`
`,e.jsx(n.p,{children:`🤖 The codemod will update all inline guards and callbacks defined like they are in this example. If
a guard or callback was defined outside the model config block, it will not be covered by the
codemod.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"segmented-control",children:"Segmented Control"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SegmentedControl"}),` is now a
`,e.jsx(n.a,{href:"?path=/docs/guides-compound-components--docs",children:"compound component"}),"."]}),`
`,e.jsxs(n.p,{children:["Given the ",e.jsxs(n.a,{href:"#removal-of-icon-button",children:["removal of ",e.jsx(n.code,{children:"IconButton"})]}),` in v7, you'll now need to use
`,e.jsx(n.code,{children:"SegmentedControl.Button"})," instead."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<SegmentedControl value={value} onChange={handleToggle}>
  <IconButton
    icon={listViewIcon}
    value="list-view"
    aria-label="List View"
    onClick={e => console.log('Existing IconButton onClick callback')}
  />
  <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" disabled={true} />
  <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
  <IconButton icon={percentageIcon} value="percent-view" aria-label="Percent View" />
</SegmentedControl>

// v7
<SegmentedControl value={value} onChange={handleToggle}>
  <SegmentedControl.Button
    icon={listViewIcon}
    value="list-view"
    aria-label="List View"
    onClick={e => console.log('Existing IconButton onClick callback')}
  />
  <SegmentedControl.Button
    icon={worksheetsIcon}
    value="table-view"
    aria-label="Table View"
    disabled={true}
  />
  <SegmentedControl.Button icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
  <SegmentedControl.Button icon={percentageIcon} value="percent-view" aria-label="Percent View" />
</SegmentedControl>
`})}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will replace all ",e.jsx(n.code,{children:"IconButton"})," children of ",e.jsx(n.code,{children:"SegmentedControl"}),` with
`,e.jsx(n.code,{children:"SegmentedControl.Button"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"side-panel",children:"Side Panel"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SidePanel"}),` in our Preview package now has a tooltip built in to its toggle button. If you
currently have a `,e.jsx(n.code,{children:"Tooltip"}),` component wrapping this component, you should remove it. Instead, you'll
need to provide the appropriate tooltip text to the button based on its state using the following
new props added to `,e.jsx(n.code,{children:"SidePanel.ToggleButton"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`/**
 * The tooltip text to expand the side panel
 * @default 'Expand'
 */
tooltipTextExpand?: string;
/**
 * The tooltip text to collapse the side panel
 * @default 'Collapse'
 */
tooltipTextCollapse?: string;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"status-indicator",children:"Status Indicator"}),`
`,e.jsxs(n.p,{children:["Status Indicators currently truncate when they reach their max width of ",e.jsx(n.code,{children:"150px"}),`. After receiving
requests to increase this value, we've increased it by 33% to `,e.jsx(n.code,{children:"200px"}),"."]}),`
`,e.jsxs(n.p,{children:["We've also added a ",e.jsx(n.code,{children:"maxWidth"}),` prop to further configure this value if necessary. While this
increases flexibility, please keep in mind that status text should be short, direct, and preferably
a single word.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<StatusIndicator label="Slightly Longer Status" type={StatusIndicator.Type.Gray} maxWidth={250} />
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["To avoid interference with the HTML ",e.jsx(n.code,{children:"name"})," attribute, we're now using ",e.jsx(n.code,{children:"data-id"})," instead of ",e.jsx(n.code,{children:"name"}),`
for `,e.jsx(n.code,{children:"Tabs.Item"}),", ",e.jsx(n.code,{children:"Tabs.Panel"}),", and ",e.jsx(n.code,{children:"Tabs.Menu.Item"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v6
<Tabs.Item name="tabs-item">...</Tabs.Item>
<Tabs.Panel name="tabs-panel">...</Tabs.Panel>
<Tabs.Menu.Item name="tabs-menu-item">...</Tabs.Menu.Item>

// v7
<Tabs.Item data-id="tabs-item">...</TabsItem>
<Tabs.Panel data-id="tabs-panel">...</Tabs.Panel>
<Tabs.Menu.Item data-id="tabs-menu-item">...</Tabs.Menu.Item>
`})}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle these changes for you automatically."})]})}function j(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{j as default};
