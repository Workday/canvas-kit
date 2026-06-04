import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as a}from"./index-3YbjYt95.js";import{ae as d}from"./index--z2N7-PX.js";import"./index-IfJi-UCQ.js";import"./iframe-Dx-CHDDP.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function s(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Guides/Upgrade Guides/v6.0"}),`
`,e.jsx(n.h1,{id:"canvas-kit-60-upgrade-guide",children:"Canvas Kit 6.0 Upgrade Guide"}),`
`,e.jsxs(n.p,{children:[`Below are the breaking changes made in Canvas Kit v6. Please
`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"reach out"}),` if you have
any questions about the update.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#codemod",children:"Codemod"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-deprecations",children:"Component Deprecations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#cookie-banner",children:"Cookie Banner"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#header--global-header",children:"Header & Global Header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#page-header",children:"Page Header"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#component-migrations",children:"Component Migrations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#search-bar",children:"Search Bar"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#name-updates",children:"Name Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#depth-tokens",children:"Depth Tokens"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#theme-breakpoint-updates",children:"Theme Breakpoint Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#action-bar",children:"Action Bar"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tabs-component",children:"Tabs Component"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#button-updates",children:"Button Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#primary-button",children:"Primary Button"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#primary-disabled",children:"Primary Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#primary-large",children:"Primary Large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#primary-medium",children:"Primary Medium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#primary-small",children:"Primary Small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#primary-extra-small",children:"Primary Extra Small"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#secondary-button",children:"Secondary Button"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#secondary-disabled",children:"Secondary Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#secondary-large",children:"Secondary Large"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#secondary-medium",children:"Secondary Medium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#secondary-small",children:"Secondary Small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#secondary-extra-small",children:"Secondary Extra Small"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#tertiary-button",children:"Tertiary Button"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tertiary-default",children:"Tertiary Default"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tertiary-disabled",children:"Tertiary Disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tertiary-medium",children:"Tertiary Medium"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tertiary-small",children:"Tertiary Small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tertiary-extra-small",children:"Tertiary Extra Small"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"codemod",children:"Codemod"}),`
`,e.jsxs(n.p,{children:["Please use our ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/tree/master/modules/codemod",rel:"nofollow",children:"codemod package"}),`
to automatically update your code to work with a majority of the breaking changes in the upgrade
from Canvas Kit v5 to v6:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`> npx @workday/canvas-kit-codemod v6 [path]
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: This codemod only works on ",e.jsx(n.code,{children:".js"}),", ",e.jsx(n.code,{children:".jsx"}),", ",e.jsx(n.code,{children:".ts"}),", and ",e.jsx(n.code,{children:".tsx"}),` extensions. You may need to make
some manual changes in other file types (`,e.jsx(n.code,{children:".json"}),", ",e.jsx(n.code,{children:".mdx"}),", ",e.jsx(n.code,{children:".md"}),", etc.)."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Note: You may need to run your linter after executing the codemod, as it's resulting formatting
(spacing, quotes, etc.) may not match your project's styling.`}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Breaking changes accounted for by this codemod will be marked with a 🤖."})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:`Please verify all changes made by the codemod. As a safety precaution, we recommend committing the
changes from the codemod as a single isolated commit (separate from other changes) so you can
rollback more easily if necessary.`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/issues/new?labels=bug&template=bug.md",rel:"nofollow",children:"Let us know"}),` if you
encounter any issues or use cases that we've missed. The `,e.jsx(n.code,{children:"@workday/canvas-kit-codemod"}),` package will
help us maintain additional codemod transforms to make future upgrades easier.`]}),`
`,e.jsx(n.h2,{id:"component-deprecations",children:"Component Deprecations"}),`
`,e.jsx(n.h3,{id:"deprecation-types",children:"Deprecation Types"}),`
`,e.jsx(n.p,{children:"There are two types of deprecations: soft and hard."}),`
`,e.jsx(n.h4,{id:"soft-deprecation",children:"Soft Deprecation"}),`
`,e.jsx(n.p,{children:`A soft-deprecated component is still available with its full functionality, but it will have been
renamed with a prefix to indicate its soft-deprecated status. It will also include a console warning
to announce its deprecation. This warning will only be triggered on the component's initial render.`}),`
`,e.jsx(n.p,{children:`Soft-deprecated types and utilities will also be renamed but generally will not trigger a console
warning.`}),`
`,e.jsx(n.h4,{id:"hard-deprecation",children:"Hard Deprecation"}),`
`,e.jsx(n.p,{children:`A hard-deprecated component or package is no longer available. You will need to follow the method
prescribed in our upgrade guide to update your application. Please reach out to our team directly if
you need additional help.`}),`
`,e.jsx(n.h3,{id:"cookie-banner",children:"Cookie Banner"}),`
`,e.jsxs(n.p,{children:["We are ",e.jsx(n.a,{href:"#soft-deprecation",children:"soft deprecating"})," ",e.jsx(n.code,{children:"CookieBanner"}),`. It has been renamed to
`,e.jsx(n.code,{children:"DeprecatedCookieBanner"}),". Similarly, ",e.jsx(n.code,{children:"CookieBannerProps"}),` has been renamed to
`,e.jsx(n.code,{children:"DeprecatedCookieBannerProps"}),`. You may continue to use this component exactly as you did in v5, but
note that we plan to `,e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecate"})," it in Canvas Kit v7."]}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will rename ",e.jsx(n.code,{children:"CookieBanner"})," and ",e.jsx(n.code,{children:"CookieBannerProps"})," to their deprecated names:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import CookieBanner, {CookieBannerProps} from '@workday/canvas-kit-react/cookie-banner';

export const CustomCookieBanner = (props: CookieBannerProps) => {
  return <CookieBanner notice={CookieBanner.DefaultNotice} {...props} />;
};

// v6
import DeprecatedCookieBanner, {
  DeprecatedCookieBannerProps,
} from '@workday/canvas-kit-react/cookie-banner';

export const CustomCookieBanner = (props: DeprecatedCookieBannerProps) => {
  return <DeprecatedCookieBanner notice={DeprecatedCookieBanner.DefaultNotice} {...props} />;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import {CookieBanner, CookieBannerProps} from '@workday/canvas-kit-react';

interface CustomCookieBannerProps extends CookieBannerProps {
  // custom page header props
}

export const CustomCookieBanner = (props: CustomCookieBannerProps) => {
  return <CookieBanner notice={CookieBanner.DefaultNotice} {...props} />;
};

// v6
import {DeprecatedCookieBanner, DeprecatedCookieBannerProps} from '@workday/canvas-kit-react';

interface CustomCookieBannerProps extends DeprecatedCookieBannerProps {
  // custom page header props
}

export const CustomCookieBanner = (props: CustomCookieBannerProps) => {
  return <DeprecatedCookieBanner notice={DeprecatedCookieBanner.DefaultNotice} {...props} />;
};
`})}),`
`,e.jsx(n.h3,{id:"header--global-header",children:"Header & Global Header"}),`
`,e.jsxs(n.p,{children:["We are ",e.jsx(n.a,{href:"#soft-deprecation",children:"soft deprecating"})," ",e.jsx(n.code,{children:"Header"})," and ",e.jsx(n.code,{children:"GlobalHeader"}),` and their related exports.
They has been renamed to `,e.jsx(n.code,{children:"DeprecatedHeader"})," and ",e.jsx(n.code,{children:"DeprecatedGlobalHeader"}),`, respectively. You may
continue to use these components exactly as you did in v5, but note that we plan to
`,e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecate"})," this package in Canvas Kit v7."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"SearchBar"}),` is not being deprecated but will instead move to its own dedictated package. You
can read more `,e.jsx(n.a,{href:"#search-bar",children:"here"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle all these changes automatically:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rename import specifiers",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DubLogoTitle"})," becomes ",e.jsx(n.code,{children:"DeprecatedDubLogoTitle"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"GlobalHeader"})," becomes ",e.jsx(n.code,{children:"DeprecatedGlobalHeader"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Header"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeader"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HeaderHeight"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderHeight"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HeaderTheme"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderTheme"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HeaderVariant"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderVariant"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThemeAttributes"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderThemeAttributes"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Themes"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderThemes"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"WorkdayLogoTitle"})," becomes ",e.jsx(n.code,{children:"DeprecatedWorkdayLogoTitle"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"themes"})," becomes ",e.jsx(n.code,{children:"deprecatedHeaderThemes"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename JSX identifiers",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<DubLogoTitle>"})," becomes ",e.jsx(n.code,{children:"<DeprecatedDubLogoTitle>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<GlobalHeader>"})," becomes ",e.jsx(n.code,{children:"<DeprecatedGlobalHeader>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Header>"})," becomes ",e.jsx(n.code,{children:"<DeprecatedHeader>"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<WorkdayLogoTitle>"})," becomes ",e.jsx(n.code,{children:"<DeprecatedWorkdayLogoTitle>"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename type references and interface declarations",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type CustomHeaderHeight = HeaderHeight;"}),` becomes
`,e.jsx(n.code,{children:"type CustomHeaderHeight = DeprecatedHeaderHeight;"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type CustomHeaderTheme = HeaderTheme;"}),` becomes
`,e.jsx(n.code,{children:"type CustomHeaderTheme = DeprecatedHeaderTheme;"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type CustomHeaderVariant = HeaderVariant;"}),` becomes
`,e.jsx(n.code,{children:"type CustomHeaderVariant = DeprecatedHeaderVariant;"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type CustomThemeAttributes = ThemeAttributes;"}),` becomes
`,e.jsx(n.code,{children:"type CustomThemeAttributes = DeprecatedHeaderThemeAttributes;"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type CustomThemes = Themes;"})," becomes ",e.jsx(n.code,{children:"type CustomThemes = DeprecatedHeaderThemes;"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename member expressions",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HeaderHeight.Small"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderHeight.Small"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HeaderTheme.White"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderTheme.White"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HeaderVariant.Full"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeaderVariant.Full"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"themes.Blue"})," becomes ",e.jsx(n.code,{children:"deprecatedHeaderThemes.Blue"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Header.Variant.Global"})," becomes ",e.jsx(n.code,{children:"DeprecatedHeader.Variant.Global"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import Header, {DubLogoTitle, GlobalHeader} from '@workday/canvas-kit-labs-react/header';

const CustomGlobalHeader = props => {
  return (
    <GlobalHeader
      brand={
        <a href="#">
          <DubLogoTitle themeColor={Header.Theme.White} />
        </a>
      }
      {...props}
    />
  );
};

// v6
import DeprecatedHeader, {
  DeprecatedDubLogoTitle,
  DeprecatedGlobalHeader,
} from '@workday/canvas-kit-labs-react/header';

const CustomGlobalHeader = props => {
  return (
    <DeprecatedGlobalHeader
      brand={
        <a href="#">
          <DeprecatedDubLogoTitle themeColor={DeprecatedHeader.Theme.White} />
        </a>
      }
      {...props}
    />
  );
};
`})}),`
`,e.jsxs(n.p,{children:[`You may continue to use this component exactly as you did in v5, but note that we plan to
hard-deprecate it in Canvas Kit v7. If you would like to migrate away from this deprecated component
now, you can reference
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/examples-global-header-react--basic",rel:"nofollow",children:"this example"}),`
instead.`]}),`
`,e.jsx(n.h3,{id:"page-header",children:"Page Header"}),`
`,e.jsxs(n.p,{children:["We are ",e.jsx(n.a,{href:"#soft-deprecation",children:"soft-deprecating"})," ",e.jsx(n.code,{children:"PageHeader"}),`. It has been renamed to
`,e.jsx(n.code,{children:"DeprecatedPageHeader"}),". Similarly, ",e.jsx(n.code,{children:"PageHeaderProps"}),` has been renamed to
`,e.jsx(n.code,{children:"DeprecatedPageHeaderProps"}),`. You may continue to use this component exactly as you did in v5, but
note that we plan to `,e.jsx(n.a,{href:"#hard-deprecation",children:"hard-deprecate"})," it in Canvas Kit v7."]}),`
`,e.jsxs(n.p,{children:["🤖 The codemod will rename ",e.jsx(n.code,{children:"PageHeader"})," and ",e.jsx(n.code,{children:"PageHeaderProps"})," to their deprecated names:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import PageHeader, {PageHeaderProps} from '@workday/canvas-kit-react/page-header';

export const CustomPageHeader = (props: PageHeaderProps) => {
  return <PageHeader {...props} />;
};

// v6
import DeprecatedPageHeader, {
  DeprecatedPageHeaderProps,
} from '@workday/canvas-kit-react/page-header';

export const CustomPageHeader = (props: DeprecatedPageHeaderProps) => {
  return <DeprecatedPageHeader {...props} />;
};
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import {PageHeader, PageHeaderProps} from '@workday/canvas-kit-react';

interface CustomPageHeaderProps extends PageHeaderProps {
  // custom page header props
}

export const CustomPageHeader = (props: CustomPageHeaderProps) => {
  return <PageHeader {...props} />;
};

// v6
import {DeprecatedPageHeader, DeprecatedPageHeaderProps} from '@workday/canvas-kit-react';

interface CustomPageHeaderProps extends DeprecatedPageHeaderProps {
  // custom page header props
}

export const CustomPageHeader = (props: CustomPageHeaderProps) => {
  return <DeprecatedPageHeader {...props} />;
};
`})}),`
`,e.jsxs(n.p,{children:[`You may continue to use this component exactly as you did in v5, but note that we plan to
hard-deprecate it in Canvas Kit v7. If you would like to migrate away from this deprecated component
now, you can reference
`,e.jsx(n.a,{href:"https://workday.github.io/canvas-kit/?path=/story/examples-page-header-react--basic",rel:"nofollow",children:"this example"}),`
instead.`]}),`
`,e.jsx(n.h2,{id:"component-migrations",children:"Component Migrations"}),`
`,e.jsx(n.h3,{id:"search-bar",children:"Search Bar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SeachBar"})," is being renamed to ",e.jsx(n.code,{children:"SearchForm"}),` and is moving out of
`,e.jsx(n.code,{children:"@workday/canvas-kit-labs-react/header"}),` into its own dedicated package,
`,e.jsx(n.code,{children:"@workday/canvas-kit-labs-react/search-form"}),`. The component has not been modified and you may
continue to use this component exactly as you did in v5.`]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle all these changes automatically:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rename import sources",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@workday/canvas-kit-labs-react/header"})," becomes ",e.jsx(n.code,{children:"@workday/canvas-kit-labs-react/search-form"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename import specifiers",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchBar"})," becomes ",e.jsx(n.code,{children:"SearchForm"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchBarProps"})," becomes ",e.jsx(n.code,{children:"SearchFormProps"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SearchBarState"})," becomes ",e.jsx(n.code,{children:"SearchFormState"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename JSX identifiers",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<SearchBar>"})," becomes ",e.jsx(n.code,{children:"<SearchForm>"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rename type references and interface declarations",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type CustomSearchProps = SearchBarProps;"})," becomes ",e.jsx(n.code,{children:"type CustomSearchProps = SearchFormProps;"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface CustomSearchProps extends SearchBarProps"}),` becomes
`,e.jsx(n.code,{children:"interface CustomSearchProps extends SearchFormProps"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
import {
  SearchBar,
  SearchBarProps,
  SearchBarState,
  SearchThemeAttributes,
  SearchTheme,
} from '@workday/canvas-kit-labs-react/header';

const CustomSearchForm = (props: SearchFormProps) => {
  return <SearchForm searchTheme={SearchTheme.Dark} {...props} />;
};

// v6
import {
  SearchForm,
  SearchFormProps,
  SearchFormState,
  SearchThemeAttributes,
  SearchTheme,
} from '@workday/canvas-kit-labs-react/search-form';

const CustomSearchForm = (props: SearchFormProps) => {
  return <SearchForm searchTheme={SearchTheme.Dark} {...props} />;
};
`})}),`
`,e.jsx(n.h2,{id:"name-updates",children:"Name Updates"}),`
`,e.jsx(n.h3,{id:"depth-tokens",children:"Depth Tokens"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CanvasDepthValue"})," type has been renamed to ",e.jsx(n.code,{children:"CanvasDepthValues"}),` to be more consistent with our
other token type names, such as `,e.jsx(n.code,{children:"CanvasBorderRadiusValues"}),", ",e.jsx(n.code,{children:"CanvasSpaceValues"}),`, and
`,e.jsx(n.code,{children:"CanvasSpaceNumberValues"}),"."]}),`
`,e.jsx(n.p,{children:"🤖 The codemod will handle this rename transformation automatically:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// v5
import {CanvasDepthValue} from '@workday/canvas-kit-react/tokens';

type CustomDepthValues = CanvasDepthValue;
interface OtherCustomDepthValues extends CanvasDepthValue {}

// v6
import {CanvasDepthValues} from '@workday/canvas-kit-react/tokens';

type CustomDepthValues = CanvasDepthValues;
interface OtherCustomDepthValues extends CanvasDepthValues {}
`})}),`
`,e.jsx(n.h2,{id:"theme-breakpoint-updates",children:"Theme Breakpoint Updates"}),`
`,e.jsxs(n.p,{children:[`Our default theme breakpoints have been updated to match the viewport ranges described in our design
guidelines. We also updated `,e.jsx(n.code,{children:"ActionBar"}),`'s media query to align with this change. Those changes are
described in `,e.jsx(n.a,{href:"#action-bar",children:"the section below"}),`. If you are using these default breakpoints, you will
need to do visual regression testing to ensure there are no adverse effects to your application's
layout. If you have questions about this testing, please reach out to our team.`]}),`
`,e.jsx(n.p,{children:"Below is a reference table for the V5 and V6 breakpoint values."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Breakpoint Name"}),e.jsx(n.th,{children:"V5 Value (px)"}),e.jsx(n.th,{children:"V6 Value (px)"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"zero"})}),e.jsx(n.td,{children:"0"}),e.jsx(n.td,{children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"s"})}),e.jsx(n.td,{children:"600"}),e.jsx(n.td,{children:"320"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"m"})}),e.jsx(n.td,{children:"900"}),e.jsx(n.td,{children:"768"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"l"})}),e.jsx(n.td,{children:"1280"}),e.jsx(n.td,{children:"1024"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"xl"})}),e.jsx(n.td,{children:"1920"}),e.jsx(n.td,{children:"1440"})]})]})]}),`
`,e.jsx(n.p,{children:"Also for reference, these are our viewport ranges:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"small"})," (",e.jsx(n.code,{children:"320px"})," - ",e.jsx(n.code,{children:"767px"}),") Used for mobile-sized screens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"})," (",e.jsx(n.code,{children:"768px"})," - ",e.jsx(n.code,{children:"1023px"}),") Used for tablet-sized screens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"large"})," - (",e.jsx(n.code,{children:"1024px"})," - ",e.jsx(n.code,{children:"1439px"}),") Used for laptop and small desktop screens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extra-large"})," (",e.jsx(n.code,{children:"≥1440px"}),") Used for very large screens"]}),`
`]}),`
`,e.jsx(n.h3,{id:"action-bar",children:"Action Bar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionBar"}),` was updated to use the new breakpoint values. It previously had two media queries with
`,e.jsx(n.code,{children:"max-width: 575px"}),". They now use ",e.jsx(n.code,{children:"max-width: 767.5px"})," – the upper limit of the ",e.jsx(n.code,{children:"small"}),` range. This
will have two effects for this component:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Container padding will decrease from ",e.jsx(n.code,{children:"s"})," (",e.jsx(n.code,{children:"16px"}),") to ",e.jsx(n.code,{children:"xxs"})," (",e.jsx(n.code,{children:"8px"}),`) on all viewports less than
`,e.jsx(n.code,{children:"768px"})," wide",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This was previously happening only on viewports less than ",e.jsx(n.code,{children:"576px"})," wide"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Button order will be reversed on all viewports less than ",e.jsx(n.code,{children:"768px"})," wide",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This was previously happening only on viewports less than ",e.jsx(n.code,{children:"576px"})," wide"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"These changes in behavior are intentional and expected."}),`
`,e.jsx(n.h2,{id:"tabs-component",children:"Tabs Component"}),`
`,e.jsxs(n.p,{children:[`The Tabs API changed to support a responsive layout
(`,e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/pull/1325",rel:"nofollow",children:"#1325"}),`). The model API was updated to support
more generic behaviors to allow for other components to support responsive layouts using the same
models and behaviors. The most notable changes were concerning the state and events around tab
selection. The verb "select" was chosen to more accurately reflect selection for more component
types. Also selection of lists (which Tabs is based on) can support single or multiple selection.
Selection is now stored on state as an array of selected keys.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v5
const model = useTabsModel({
  shouldActivate,
  onActivate,
});

console.log('Selected tab', model.state.activeTab);
model.events.activate({tab: tabName});

// v6
const model = useTabsModel({
  shouldSelect,
  onSelect,
});

console.log('Selected tab', model.state.selectedKey[0]);
model.events.select({id: tabName});
`})}),`
`,e.jsx(n.p,{children:`The Tabs component can now handle responsive containers, but the support is not automatic. You must
use the dynamic API and provide an overflow menu subcomponent. The dynamic API doesn't know the
shape of your object, so render props must be used to instruct React how to render each item.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Use \`useState\` because React will give the same reference each render
const [items] = React.useState([
  {id: 'first', text: 'First Tab', contents: 'First Tab Content'},
  {id: 'second', text: 'Second Tab', contents: 'Second Tab Content'},
]);

return (
  <Tabs items={items}>
    <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
      {item => <Tabs.Item name={item.id}>{item.text}</Tabs.Item>}
    </Tabs.List>
    <Tabs.Menu.Popper>
      <Tabs.Menu.Card maxWidth={300} maxHeight={200}>
        <Tabs.Menu.List>
          {(item: MyTabItem) => <Tabs.Menu.Item name={item.id}>{item.text}</Tabs.Menu.Item>}
        </Tabs.Menu.List>
      </Tabs.Menu.Card>
    </Tabs.Menu.Popper>
  </Tabs>
);
`})}),`
`,e.jsx(n.h2,{id:"button-updates",children:"Button Updates"}),`
`,e.jsx(n.p,{children:`All button updates for V6 are limited to our Primary, Secondary, and Tertiary buttons. Most of the
button updates are small visual adjustments:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We tightened up tighten the spacing for visual balance and added our new type hierarchy."}),`
`,e.jsxs(n.li,{children:["We adjusted icon sizes for uniformity:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"large"}),": ",e.jsx(n.code,{children:"24px"})," x ",e.jsx(n.code,{children:"24px"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"}),": ",e.jsx(n.code,{children:"20px"})," x ",e.jsx(n.code,{children:"20px"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"small"}),": ",e.jsx(n.code,{children:"20px"})," x ",e.jsx(n.code,{children:"20px"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extraSmall"}),": ",e.jsx(n.code,{children:"18px"})," x ",e.jsx(n.code,{children:"18px"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`We also adjusted the opacity for their disabled state so they behave more appropriately on varied
/ dark backgrounds.`}),`
`]}),`
`,e.jsx(n.p,{children:`These changes are automatic when you upgrade and do not require any manual updates in your codebase.
However, they will likely cause any automated visual regression tests to fail, and you will need to
update your tests accordingly. We do not expect these minor adjustments to create significant layout
shifts in your UI. But, as with any visual update, you will want to review your UI to ensure there
are no adverse effects.`}),`
`,e.jsx(n.p,{children:"We also added some net-new features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All buttons have a new ",e.jsx(n.code,{children:"extraSmall"})," size."]}),`
`,e.jsx(n.li,{children:"Icons are now supported for all sizes."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PrimaryButton"})," has a new ",e.jsx(n.code,{children:"inverse"})," variant."]}),`
`]}),`
`,e.jsx(n.p,{children:"All these changes are described in detail by button type in the sections below."}),`
`,e.jsx(n.h3,{id:"primary-button",children:"Primary Button"}),`
`,e.jsx(n.h4,{id:"primary-disabled-state",children:"Primary Disabled State"}),`
`,e.jsxs(n.p,{children:["Previously the button's disabled state had a ",e.jsx(n.code,{children:"blueberry200"}),` background, but it now uses the default
`,e.jsx(n.code,{children:"blueberry400"}),` and sets the entire button to 40% opacity. This creates more consistency for the
disabled states across all our buttons.`]}),`
`,e.jsx(n.h4,{id:"primary-large",children:"Primary Large"}),`
`,e.jsxs(n.p,{children:["The padding for large ",e.jsx(n.code,{children:"PrimaryButton"}),`s has been slightly adjusted for more visual balance and to
take up a bit less layout space. Specifically we:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["decreased the space between the button icon and text from ",e.jsx(n.code,{children:"12px"})," to ",e.jsx(n.code,{children:"8px"})]}),`
`,e.jsxs(n.li,{children:["decreased the space between the button container and the icon from ",e.jsx(n.code,{children:"28px"})," to ",e.jsx(n.code,{children:"24px"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"primary-medium",children:"Primary Medium"}),`
`,e.jsxs(n.p,{children:["The icon size for medium ",e.jsx(n.code,{children:"PrimaryButton"}),"s has been decreased from ",e.jsx(n.code,{children:"24px"})," to ",e.jsx(n.code,{children:"20px"}),`, but the overall
height of the button will remain the same.`]}),`
`,e.jsx(n.h4,{id:"primary-small",children:"Primary Small"}),`
`,e.jsxs(n.p,{children:["We now support icons for small ",e.jsx(n.code,{children:"PrimaryButton"}),"s. The icons are ",e.jsx(n.code,{children:"20px"})," x ",e.jsx(n.code,{children:"20px"}),"."]}),`
`,e.jsx(n.h4,{id:"primary-extra-small",children:"Primary Extra Small"}),`
`,e.jsxs(n.p,{children:["We added a new size, ",e.jsx(n.code,{children:"extraSmall"})," to our ",e.jsx(n.code,{children:"PrimaryButton"}),`s. These are particularly helpful for use
cases where you have dense UI or tight layout constraints such as tables.`]}),`
`,e.jsx(n.h3,{id:"secondary-button",children:"Secondary Button"}),`
`,e.jsx(n.h4,{id:"secondary-large",children:"Secondary Large"}),`
`,e.jsxs(n.p,{children:["The padding for large ",e.jsx(n.code,{children:"SecondaryButton"}),`s has been slightly adjusted for more visual balance and to
take up a bit less layout space. Specifically we:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["decreased the space between the button icon and text from ",e.jsx(n.code,{children:"12px"})," to ",e.jsx(n.code,{children:"8px"})]}),`
`,e.jsxs(n.li,{children:["decreased the space between the button container and the icon from ",e.jsx(n.code,{children:"28px"})," to ",e.jsx(n.code,{children:"24px"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"secondary-medium",children:"Secondary Medium"}),`
`,e.jsxs(n.p,{children:["The icon size for medium ",e.jsx(n.code,{children:"SecondaryButton"}),"s has been decreased from ",e.jsx(n.code,{children:"24px"})," to ",e.jsx(n.code,{children:"20px"}),`, but the
overall height of the button will remain the same.`]}),`
`,e.jsx(n.h4,{id:"secondary-small",children:"Secondary Small"}),`
`,e.jsxs(n.p,{children:["We now support icons for small ",e.jsx(n.code,{children:"SecondaryButton"}),"s. The icons are ",e.jsx(n.code,{children:"20px"})," x ",e.jsx(n.code,{children:"20px"}),"."]}),`
`,e.jsx(n.h4,{id:"secondary-extra-small",children:"Secondary Extra Small"}),`
`,e.jsxs(n.p,{children:["We added a new size, ",e.jsx(n.code,{children:"extraSmall"})," to our ",e.jsx(n.code,{children:"SecondaryButton"}),`s. These are particularly helpful for use
cases where you have dense UI or tight layout constraints such as tables.`]}),`
`,e.jsx(n.h3,{id:"tertiary-button",children:"Tertiary Button"}),`
`,e.jsx(n.h4,{id:"tertiary-default",children:"Tertiary Default"}),`
`,e.jsxs(n.p,{children:[`We added an underline to the button text for all states to help distinguish it from the
`,e.jsx(n.code,{children:"SecondaryButton"})," and create more visual consistency."]}),`
`,e.jsx(n.h4,{id:"tertiary-disabled",children:"Tertiary Disabled"}),`
`,e.jsx(n.p,{children:`As with our other buttons, we updated the disabled state to set the entire button to 40% opacity.
They were previously using our light theme color at 50% opacity for icons and text.`}),`
`,e.jsx(n.h4,{id:"tertiary-medium",children:"Tertiary Medium"}),`
`,e.jsxs(n.p,{children:["The medium ",e.jsx(n.code,{children:"TertiaryButton"}),` now uses our new type hierarchy and adjusted the padding, but the
overall size of the button will stay the same. Specifically, we:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["decreased the space between the button icon and text from ",e.jsx(n.code,{children:"8px"})," to ",e.jsx(n.code,{children:"4px"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"tertiary-small",children:"Tertiary Small"}),`
`,e.jsxs(n.p,{children:["The small ",e.jsx(n.code,{children:"TertiaryButton"}),` now uses our new type hierarchy and adjusted the padding, but the overall
size of the button will stay the same. Specifically, we:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["decreased the space between the button icon and text from ",e.jsx(n.code,{children:"8px"})," to ",e.jsx(n.code,{children:"4px"})]}),`
`,e.jsxs(n.li,{children:["increased the container padding outside the button text when an icon is present from ",e.jsx(n.code,{children:"8px"}),` to
`,e.jsx(n.code,{children:"12px"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"tertiary-extra-small",children:"Tertiary Extra Small"}),`
`,e.jsxs(n.p,{children:["We added a new size, ",e.jsx(n.code,{children:"extraSmall"})," to our ",e.jsx(n.code,{children:"TertiaryButton"}),`s. These are particularly helpful for use
cases where you have dense UI or tight layout constraints such as tables.`]})]})}function j(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
