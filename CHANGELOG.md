# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [v7.2.2](https://github.com/Workday/canvas-kit/releases/tag/v7.2.2) (2022-07-27)

### Components

- fix: Add missing `Popper` props to `Popup.Popper` ([#1701](https://github.com/Workday/canvas-kit/pull/1701)) ([@PrajwalBorkar](https://github.com/PrajwalBorkar))

### Documentation

- fix: Set types import direction for sub-directory packages ([#1695](https://github.com/Workday/canvas-kit/pull/1695)) ([@RayRedGoose](https://github.com/RayRedGoose))

### Infrastructure

- ci: Fix forward-merge script and optimize release/forward-merge jobs ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.8.13](https://github.com/Workday/canvas-kit/releases/tag/v6.8.13) (2022-07-22)

### Documentation

- fix: Set types import direction for sub-directory packages ([#1695](https://github.com/Workday/canvas-kit/pull/1695)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.2.1](https://github.com/Workday/canvas-kit/releases/tag/v7.2.1) (2022-07-22)




## [v6.8.12](https://github.com/Workday/canvas-kit/releases/tag/v6.8.12) (2022-07-21)

### Infrastructure

- ci: Fix forward-merge script and optimize release/forward-merge jobs ([@NicholasBoll](https://github.com/NicholasBoll))
## [v7.2.0](https://github.com/Workday/canvas-kit/releases/tag/v7.2.0) (2022-07-21)

### Components

- feat(collection): Add grid model and examples ([#1628](https://github.com/Workday/canvas-kit/pull/1628)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- ci: Fix release and forward-merge CI interactions ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.8.11](https://github.com/Workday/canvas-kit/releases/tag/v6.8.11) (2022-07-20)

### Infrastructure

- ci: Fixing issues with forward-merge script ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix release and forward-merge CI interactions ([@NicholasBoll](https://github.com/NicholasBoll))
## [v7.1.5](https://github.com/Workday/canvas-kit/releases/tag/v7.1.5) (2022-07-20)

### Components

- fix(pagination): Remove aria-relevant attr ([#1659](https://github.com/Workday/canvas-kit/pull/1659)) ([@alanbsmith](https://github.com/alanbsmith))
- Throw CI errors in forward-merge script ([@NicholasBoll](https://github.com/NicholasBoll))
- fix(button): Make icon-only tertiary button themeable ([#1677](https://github.com/Workday/canvas-kit/pull/1677)) ([@RayRedGoose](https://github.com/RayRedGoose))
  We added `isThemeable` prop to `TertiaryButton` to allow applying theme colors for icon-only variant. Because default icon button doesn't use default theme colors, it makes icon-only `TertiaryButton` not themeable.

### Documenation

- docs: Update ActionBar upgrade guide docs ([#1687](https://github.com/Workday/canvas-kit/pull/1687)) ([@alanbsmith](https://github.com/alanbsmith))

### Infrastructure

- ci: Add post-merge yarn install and add merge pr instructions ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add command logging to forward-merge ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix forward-merge logic to move install out of conflict code ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix forward-merge command line processing ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix forward-merge command line processing ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix issues with forward merge script when run locally ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fixing issues with forward-merge script ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add CI button to release minor versions [no release] ([#1683](https://github.com/Workday/canvas-kit/pull/1683)) ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add version override to manual release action ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.8.10](https://github.com/Workday/canvas-kit/releases/tag/v6.8.10) (2022-07-13)
## [v7.1.4](https://github.com/Workday/canvas-kit/releases/tag/v7.1.4) (2022-07-12)

### Components

- fix(radio): Align radio group button ([#1441](https://github.com/Workday/canvas-kit/pull/1441)) ([@karapalumbo](https://github.com/karapalumbo))
- fix(skeleton): Move simulation code block within loading condition ([#1676](https://github.com/Workday/canvas-kit/pull/1676)) ([@anishatulai](https://github.com/anishatulai))


## [v7.1.3](https://github.com/Workday/canvas-kit/releases/tag/v7.1.3) (2022-07-11)

### Components

- fix(action-bar): Fix focus issue in ActionBar ([#1666](https://github.com/Workday/canvas-kit/pull/1666)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.1.2](https://github.com/Workday/canvas-kit/releases/tag/v7.1.2) (2022-07-07)

### Components

- chore: Bump support to next major version ([@NicholasBoll](https://github.com/NicholasBoll))
- fix(pagination): Remove aria-relevant attr ([#1659](https://github.com/Workday/canvas-kit/pull/1659)) ([@alanbsmith](https://github.com/alanbsmith))
- Throw CI errors in forward-merge script ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- ci: Add automated forward merge ([#1662](https://github.com/Workday/canvas-kit/pull/1662)) ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add yarn install step after forward merge attempt ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add post-merge yarn install and add merge pr instructions ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add command logging to forward-merge ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix forward-merge logic to move install out of conflict code ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix forward-merge command line processing ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix forward-merge command line processing ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix issues with forward merge script when run locally ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add automated forward merge ([#1662](https://github.com/Workday/canvas-kit/pull/1662)) ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add yarn install step after forward merge attempt ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.1.1](https://github.com/Workday/canvas-kit/releases/tag/v7.1.1) (2022-06-30)

### Components

- fix(pagination): Remove console warning ([#1657](https://github.com/Workday/canvas-kit/pull/1657)) ([@jamesfan](https://github.com/jamesfan))


## [v7.1.0](https://github.com/Workday/canvas-kit/releases/tag/v7.1.0) (2022-06-28)

### Components

- chore: Bump prerelease/minor to new major version ([@NicholasBoll](https://github.com/NicholasBoll))
- feat: Add useModalityType hook and add modality support to tabs ([#1523](https://github.com/Workday/canvas-kit/pull/1523)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.0.15](https://github.com/Workday/canvas-kit/releases/tag/v7.0.15) (2022-06-28)

### Components

- docs(examples): Add example for SegmentedControl with text buttons ([#1623](https://github.com/Workday/canvas-kit/pull/1623)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.0.14](https://github.com/Workday/canvas-kit/releases/tag/v7.0.14) (2022-06-22)

### Components

- fix(button): Make PageButton in Pagination themable ([#1648](https://github.com/Workday/canvas-kit/pull/1648)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v7.0.13](https://github.com/Workday/canvas-kit/releases/tag/v7.0.13) (2022-06-20)




## [v7.0.12](https://github.com/Workday/canvas-kit/releases/tag/v7.0.12) (2022-06-20)

### Documentation

- chore: Update repository fields for NPM ([#1642](https://github.com/Workday/canvas-kit/pull/1642)) ([@willklein](https://github.com/willklein))


## [v7.0.11](https://github.com/Workday/canvas-kit/releases/tag/v7.0.11) (2022-06-20)

### Dependencies

- fix: Update yarn.lock dependencies for icons and TypeScript ([#1640](https://github.com/Workday/canvas-kit/pull/1640)) ([@willklein](https://github.com/willklein))

### Documentation

- docs: Update SidePanel right origin story ([#1644](https://github.com/Workday/canvas-kit/pull/1644)) ([@willklein](https://github.com/willklein))


## [v7.0.10](https://github.com/Workday/canvas-kit/releases/tag/v7.0.10) (2022-06-16)

### Dependencies

- chore: Bump design-assets-types to latest ([#1639](https://github.com/Workday/canvas-kit/pull/1639)) ([@willklein](https://github.com/willklein))


## [v7.0.9](https://github.com/Workday/canvas-kit/releases/tag/v7.0.9) (2022-06-16)

### Documentation

- fix: Update remaining Emotion 11 imports ([#1638](https://github.com/Workday/canvas-kit/pull/1638)) ([@willklein](https://github.com/willklein))
  Updated documentation for `@workday/canvas-kit-react-fonts` to correctly import utilities from Emotion 11 rather than Emotion 10.


## [v7.0.8](https://github.com/Workday/canvas-kit/releases/tag/v7.0.8) (2022-06-08)

### Documentation

- docs(action-bar): Add delete action example to ActionBar ([#1629](https://github.com/Workday/canvas-kit/pull/1629)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.0.7](https://github.com/Workday/canvas-kit/releases/tag/v7.0.7) (2022-06-03)

### Components

- fix: Add inverse variant to checkbox and radio ([#1617](https://github.com/Workday/canvas-kit/pull/1617)) ([@mannycarrera4](https://github.com/mannycarrera4))
  We've added `variant="inverse"` to our `Radio` and `CheckBox` components


## [v7.0.6](https://github.com/Workday/canvas-kit/releases/tag/v7.0.6) (2022-06-03)

### Components

- test(select): Reduce sensitivity of scrolling test ([#1613](https://github.com/Workday/canvas-kit/pull/1613)) ([@jamesfan](https://github.com/jamesfan))
- fix(preview): Make removable pill accessible ([#1616](https://github.com/Workday/canvas-kit/pull/1616)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v7.0.5](https://github.com/Workday/canvas-kit/releases/tag/v7.0.5) (2022-05-25)

### Documentation

- fix(banner): Fix RTL Sticky Banner story ([#1609](https://github.com/Workday/canvas-kit/pull/1609)) ([@vibdev](https://github.com/vibdev))


## [v7.0.4](https://github.com/Workday/canvas-kit/releases/tag/v7.0.4) (2022-05-25)

### Documentation

- fix(search-form): Show autocomplete list and filter by includes in example ([#1610](https://github.com/Workday/canvas-kit/pull/1610)) ([@6r3al](https://github.com/6r3al))


## [v7.0.3](https://github.com/Workday/canvas-kit/releases/tag/v7.0.3) (2022-05-24)

### Codemods

- fix(codemod): Support multiple imports from canvas-kit ([#1607](https://github.com/Workday/canvas-kit/pull/1607)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.0.2](https://github.com/Workday/canvas-kit/releases/tag/v7.0.2) (2022-05-24)

### Components

- fix(action-bar): Remove subcomponents from ActionBar.Item ([#1606](https://github.com/Workday/canvas-kit/pull/1606)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.0.1](https://github.com/Workday/canvas-kit/releases/tag/v7.0.1) (2022-05-23)

### Documentation

- docs: Clean up upgrade docs for base button example ([#1603](https://github.com/Workday/canvas-kit/pull/1603)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v7.0.0](https://github.com/Workday/canvas-kit/releases/tag/v7.0.0) (2022-05-18)

### BREAKING CHANGES

- [#1359](https://github.com/Workday/canvas-kit/pull/1359) This change updates the banner component to use the compound component pattern. For more information, please see the V7 migration guide.
- [#1396](https://github.com/Workday/canvas-kit/pull/1396) Change `fixed` prop from component to `position` to set container position (`fixed` position has been set as default).
- [#1329](https://github.com/Workday/canvas-kit/pull/1329) Status Indicators currently truncate when they reach their max width of `150px`. After receiving
  requests to increase this, we have upped it by 25% to `200px`.
- [#1409](https://github.com/Workday/canvas-kit/pull/1409) Canvas Kit will require teams to be on version ^17.x or at least 16.14 for backwards compatibility and we will remove the jsx pragma and use of css props. This does not mean consumers can’t use the css prop, just that internally we will stop using it. This would require teams to upgrade other parts of their app  including  React, potentially Babel and any other side effects that come with it.
- [#1442](https://github.com/Workday/canvas-kit/pull/1442) All findings and changes have been outlines [here](https://github.com/Workday/canvas-kit/discussions/1453)
- [#1456](https://github.com/Workday/canvas-kit/pull/1456) We are hard deprecating `CookieBanner`, `Header` and `PageHeader`. If you would like to migrate off of these components you can find them under our [Example](https://workday.github.io/canvas-kit/?path=/story/examples-cookiebanner-react--basic) section in storybook
- [#1460](https://github.com/Workday/canvas-kit/pull/1460) Flex, Box and Stack will no longer be imported from `@workday/canvas-kit-labs-react`. They will now be imported from `@workday/canvas-kit-react/layout`
- [#1477](https://github.com/Workday/canvas-kit/pull/1477) -  Combined Icon Buttons with Primary, Secondary, and Tertiary buttons
  - Remove IconButton component
  -  Add a new XS, L sizes
  -  Removed the `toggled` prop when migrating over Icon Buttons
  - Converted `SegmentedControl` into a compound component and it no longer renders `IconButton` as children
  - Changed the values of `IconPosition`: `left` | `right` - > `start` | `end`
  - Refactored `AccentIcon`, `AppletIcon`, `Graphic`, `Icon`, `Svg`, `SystemIcon`, and `SystemIconCircle` to use create component and remove `iconRef` prop and now just pass the ref forward
  - Remove `dataLabel` prop from `PrimaryButton` and `SecondaryButton`
- [#1547](https://github.com/Workday/canvas-kit/pull/1547) - Upgrade Typescript to 4.1 and drop support for Typescript <4
  - `Popup.Body` is an overflow container. If your popup buttons are inside the `Popup.Body` element (our examples did this), you will need to move those buttons outside the `Popup.Body` element, otherwise the focus rings may be cut off. See migration guide for more information.
  - Changed the signature of model callbacks and guards. This is handled by our codemod
    - Before:
      - `shouldUpdate({data, state})`
      - `onUpdate({data, prevState})`
    - After:
      - `shouldUpdate(data, state)`
      - `onUpdate(data, prevState)`
- [#1587](https://github.com/Workday/canvas-kit/pull/1587) Removed the data wrapper around the `event` in `show` and `hide` events. The arguments are not commonly used, however.
  
  ```tsx
  // v6
  const model = usePopupModel({
    onShow({ data: { event }, prevState }) {
      console.log(event);
    }
  })
  
  // v7
  const model = usePopupModel({
    onShow(event, prevState) {
      console.log(event);
    }
  })
  ```
  
  🤖 The codemod will update all inline guards and callbacks like in this example. If a guard or
  callback was defined outside the model config block, it will not be covered by the codemod.
- [#1585](https://github.com/Workday/canvas-kit/pull/1585) This PR contains breaking changes because using new ActionBar requires restructure old version and adding ActionBar.List as sub-component of ActionBar. This changes are covered by codemod but using an overflow behavior requires manual implementation.

### Codemods

- fix(codemod): Add JSXExpressionContainer support to V7 IconButton codemod ([#1558](https://github.com/Workday/canvas-kit/pull/1558)) ([@josh-bagwell](https://github.com/josh-bagwell))

### Components

- refactor(banner): Update Banner to use the compound component pattern ([#1359](https://github.com/Workday/canvas-kit/pull/1359)) ([@vibdev](https://github.com/vibdev))
- fix(side-panel): Add tooltip to toggle button for side panel ([#1401](https://github.com/Workday/canvas-kit/pull/1401)) ([@mannycarrera4](https://github.com/mannycarrera4))
- feat(action-bar): Refactor ActionBar component ([#1396](https://github.com/Workday/canvas-kit/pull/1396)) ([@RayRedGoose](https://github.com/RayRedGoose))
- feat: Increase max width of Status Indicator, add prop and examples ([#1329](https://github.com/Workday/canvas-kit/pull/1329)) ([@anicholls](https://github.com/anicholls))
- feat(modal): Add support for scrolling a modal ([#1259](https://github.com/Workday/canvas-kit/pull/1259)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore!: Hard deprecate Header, Page Header and Cookie Banner  ([#1456](https://github.com/Workday/canvas-kit/pull/1456)) ([@mannycarrera4](https://github.com/mannycarrera4))
- chore: Migrate Flex, Stack and Box to main under layout  ([#1460](https://github.com/Workday/canvas-kit/pull/1460)) ([@mannycarrera4](https://github.com/mannycarrera4))
- fix(modal): Remove x axis scrollbar ([@NicholasBoll](https://github.com/NicholasBoll))
- fix(modal): Correct overflow value ([@NicholasBoll](https://github.com/NicholasBoll))
- fix(modal): Update Modal full-overflow for IE11 ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Combine Icon Buttons with Primary, Secondary and Tertiary ([#1477](https://github.com/Workday/canvas-kit/pull/1477)) ([@mannycarrera4](https://github.com/mannycarrera4))
- feat(common): Update depth tokens ([#1517](https://github.com/Workday/canvas-kit/pull/1517)) ([@RayRedGoose](https://github.com/RayRedGoose))
- fix(button): Update padding for buttons ([#1532](https://github.com/Workday/canvas-kit/pull/1532)) ([@mannycarrera4](https://github.com/mannycarrera4))
- fix(popup): Remove containerElement prop from Popper ([#1524](https://github.com/Workday/canvas-kit/pull/1524)) ([@RayRedGoose](https://github.com/RayRedGoose))
- fix(toast): Add aria attributes to alert toast ([#1536](https://github.com/Workday/canvas-kit/pull/1536)) ([@RayRedGoose](https://github.com/RayRedGoose))
- fix(button): Updated stories to match spec ([#1539](https://github.com/Workday/canvas-kit/pull/1539)) ([@josh-bagwell](https://github.com/josh-bagwell))
- feat(select): Accept custom render method prop for selected option ([#1512](https://github.com/Workday/canvas-kit/pull/1512)) ([@giulialubet](https://github.com/giulialubet))
- chore: Update accent, applet, and system icon deps ([#1554](https://github.com/Workday/canvas-kit/pull/1554)) ([@alanbsmith](https://github.com/alanbsmith))
- fix: Update codemod to run all transforms ([#1563](https://github.com/Workday/canvas-kit/pull/1563)) ([@mannycarrera4](https://github.com/mannycarrera4))
- feat: Add collection system ([#1547](https://github.com/Workday/canvas-kit/pull/1547)) ([@NicholasBoll](https://github.com/NicholasBoll))
  We've added a collection system to help our users create custom components like
- fix(layout): Update reentrant imports for layout components ([#1574](https://github.com/Workday/canvas-kit/pull/1574)) ([@mannycarrera4](https://github.com/mannycarrera4))
- feat(preview): Add Pill component ([#1542](https://github.com/Workday/canvas-kit/pull/1542)) ([@mannycarrera4](https://github.com/mannycarrera4))
  We've added a new Pill component. Pills are used to visually label objects on a page for quick recognition. They’re offered as both static, read-only and interactive elements. They allow users to input a section, filter a list or table, or label information to help with scanning and organization.
- chore(disclosure): Remove event data wrapper in disclosure events ([#1587](https://github.com/Workday/canvas-kit/pull/1587)) ([@NicholasBoll](https://github.com/NicholasBoll))
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.
- feat(action-bar): Add menu to ActionBar ([#1585](https://github.com/Workday/canvas-kit/pull/1585)) ([@RayRedGoose](https://github.com/RayRedGoose))
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.
- test: Fix test failure due to a github automerge issue ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Update codemods to handle different imports ([#1567](https://github.com/Workday/canvas-kit/pull/1567)) ([@mannycarrera4](https://github.com/mannycarrera4))
- feat(button): Add ExternalHyperlink and missing stories for Hyperlinks ([#1430](https://github.com/Workday/canvas-kit/pull/1430)) ([@vibdev](https://github.com/vibdev))
- fix(action-bar): Make hidden buttons non-interactive ([#1592](https://github.com/Workday/canvas-kit/pull/1592)) ([@RayRedGoose](https://github.com/RayRedGoose))

### Dependencies

- chore: Upgrade to React 17 and refactor our css prop ([#1409](https://github.com/Workday/canvas-kit/pull/1409)) ([@mannycarrera4](https://github.com/mannycarrera4))
- chore: Upgrade to emotion 11, typescript 4.1 and necessary linting deps ([#1442](https://github.com/Workday/canvas-kit/pull/1442)) ([@mannycarrera4](https://github.com/mannycarrera4))

### Documentation

- fix: Fix imports in examples ([#1568](https://github.com/Workday/canvas-kit/pull/1568)) ([@jamesfan](https://github.com/jamesfan))
- docs: Clean up component docs ([#1584](https://github.com/Workday/canvas-kit/pull/1584)) ([@jamesfan](https://github.com/jamesfan))
- docs: Update Migration guide with tabs changes ([#1581](https://github.com/Workday/canvas-kit/pull/1581)) ([@NicholasBoll](https://github.com/NicholasBoll))
- docs: Clean up v7 migration guide ([#1550](https://github.com/Workday/canvas-kit/pull/1550)) ([@jamesfan](https://github.com/jamesfan))
- docs: Rename Migration Guides to Upgrade Guides ([#1591](https://github.com/Workday/canvas-kit/pull/1591)) ([@jamesfan](https://github.com/jamesfan))
- docs: Fix docs to account for v7 changes ([#1595](https://github.com/Workday/canvas-kit/pull/1595)) ([@jamesfan](https://github.com/jamesfan))

### Infrastructure

- chore: Initial setup for v7 ([#1387](https://github.com/Workday/canvas-kit/pull/1387)) ([@mannycarrera4](https://github.com/mannycarrera4))
- ci: Update prerelease/major build number to avoid duplicate versions ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Fix build mdx script to better handle splitprops files ([#1575](https://github.com/Workday/canvas-kit/pull/1575)) ([@jamesfan](https://github.com/jamesfan))


## [v6.8.9](https://github.com/Workday/canvas-kit/releases/tag/v6.8.9) (2022-05-18)

### Components

- fix(action-bar): Update styled function to support RTL ([#1534](https://github.com/Workday/canvas-kit/pull/1534)) ([@alanbsmith](https://github.com/alanbsmith))
- fix: Add RTL support to FormField.Label ([#1541](https://github.com/Workday/canvas-kit/pull/1541)) ([@alanbsmith](https://github.com/alanbsmith))


### Components

- fix(action-bar): Update styled function to support RTL ([#1534](https://github.com/Workday/canvas-kit/pull/1534)) ([@alanbsmith](https://github.com/alanbsmith))
## [v6.8.8](https://github.com/Workday/canvas-kit/releases/tag/v6.8.8) (2022-05-18)

### Components

- fix(popup): Exclude disabled elements from isFocusable ([#1564](https://github.com/Workday/canvas-kit/pull/1564)) ([@derek-h-kim](https://github.com/derek-h-kim))


## [v6.8.7](https://github.com/Workday/canvas-kit/releases/tag/v6.8.7) (2022-05-18)

### Components

- fix(table): Refactor TableRow to use createComponent ([#1590](https://github.com/Workday/canvas-kit/pull/1590)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.8.6](https://github.com/Workday/canvas-kit/releases/tag/v6.8.6) (2022-05-16)


## [v6.8.5](https://github.com/Workday/canvas-kit/releases/tag/v6.8.5) (2022-05-12)

### Documentation

- docs: Fix link in TESTING.mdx ([#1576](https://github.com/Workday/canvas-kit/pull/1576)) ([@Keysox](https://github.com/Keysox))


## [v6.8.4](https://github.com/Workday/canvas-kit/releases/tag/v6.8.4) (2022-04-28)

### Components

- fix(combobox): Add "overflow: hidden" to MenuContainer ([#1560](https://github.com/Workday/canvas-kit/pull/1560)) ([@jsvossen](https://github.com/jsvossen))


## [v6.8.3](https://github.com/Workday/canvas-kit/releases/tag/v6.8.3) (2022-04-22)

### Codemods

- fix(codemod): Limit specifier renaming to Canvas Kit imports ([#1546](https://github.com/Workday/canvas-kit/pull/1546)) ([@willklein](https://github.com/willklein))
  Fixed code mods that improperly rename non-Canvas Kit components as well as Canvas Kit sub-components. This typically includes non-Canvas Kit `Header` components and Canvas Kit's `Skeleton.Header` being improperly renamed in the JSX, but solves for all future cases of Canvas Kit component names.


## [v5.3.17](https://github.com/Workday/canvas-kit/releases/tag/v5.3.17) (2022-04-14)

### Components

- fix: Add RTL support to FormField.Label ([#1541](https://github.com/Workday/canvas-kit/pull/1541)) ([@alanbsmith](https://github.com/alanbsmith))


## [v5.3.16](https://github.com/Workday/canvas-kit/releases/tag/v5.3.16) (2022-04-06)
## [v6.8.2](https://github.com/Workday/canvas-kit/releases/tag/v6.8.2) (2022-04-05)

### Assets

- fix(common): Update brand assets url ([#1529](https://github.com/Workday/canvas-kit/pull/1529)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.8.1](https://github.com/Workday/canvas-kit/releases/tag/v6.8.1) (2022-04-05)

### Components

- fix(button): Update disabled background for tertiary button ([#1530](https://github.com/Workday/canvas-kit/pull/1530)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v6.8.0](https://github.com/Workday/canvas-kit/releases/tag/v6.8.0) (2022-04-04)

### Components

- fix(banner): Convert Banner to a functional component ([#1520](https://github.com/Workday/canvas-kit/pull/1520)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.3.15](https://github.com/Workday/canvas-kit/releases/tag/v5.3.15) (2022-04-01)

### Components

- fix(banner): Convert Banner to a functional component ([#1520](https://github.com/Workday/canvas-kit/pull/1520)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v6.7.2](https://github.com/Workday/canvas-kit/releases/tag/v6.7.2) (2022-03-30)

### Components

- fix(avatar): Resetting imageLoaded when new url is provided ([#1521](https://github.com/Workday/canvas-kit/pull/1521)) ([@BillGeoghegan](https://github.com/BillGeoghegan))


## [v6.7.1](https://github.com/Workday/canvas-kit/releases/tag/v6.7.1) (2022-03-23)

### Components

- fix(layout): Pass key to Stack.Item when using shouldWrapChildren ([#1518](https://github.com/Workday/canvas-kit/pull/1518)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.7.0](https://github.com/Workday/canvas-kit/releases/tag/v6.7.0) (2022-03-21)

### Components

- fix: Update usePopupTarget to apply Refs to elements not class instance ([#1514](https://github.com/Workday/canvas-kit/pull/1514)) ([@jaslloyd](https://github.com/jaslloyd))


## [v5.3.14](https://github.com/Workday/canvas-kit/releases/tag/v5.3.14) (2022-03-21)

### Components

- fix: Update usePopupTarget to apply Refs to elements not class instance ([#1514](https://github.com/Workday/canvas-kit/pull/1514)) ([@jaslloyd](https://github.com/jaslloyd))
## [v6.6.1](https://github.com/Workday/canvas-kit/releases/tag/v6.6.1) (2022-03-18)

### Components

- fix(action-bar): Update CSS selector to fix spacing bug ([#1510](https://github.com/Workday/canvas-kit/pull/1510)) ([@alanbsmith](https://github.com/alanbsmith))
  This change updates the CSS selector for the `ChildrenContainer`. We're using [the same selector as what's used in Stack](https://github.com/Workday/canvas-kit/blob/master/modules/labs-react/layout/lib/utils/stack.ts#L10). It is also now SSR-safe by avoiding applying styles to `style` tags. If you were compensating for this bug by adding space for non-button elements in the ActionBar, you'll need to remove that adjustment.


## [v6.6.0](https://github.com/Workday/canvas-kit/releases/tag/v6.6.0) (2022-03-07)

### Components

- fix: Set overflowX and overflowY to cater for IE11 scrolling bug ([#1494](https://github.com/Workday/canvas-kit/pull/1494)) ([@ahayes91](https://github.com/ahayes91))


## [v5.3.13](https://github.com/Workday/canvas-kit/releases/tag/v5.3.13) (2022-03-02)

### Components

- fix: Set overflowX and overflowY to cater for IE11 scrolling bug ([#1494](https://github.com/Workday/canvas-kit/pull/1494)) ([@ahayes91](https://github.com/ahayes91))


## [v6.5.1](https://github.com/Workday/canvas-kit/releases/tag/v6.5.1) (2022-02-24)

### Components

- fix: Fix Box valid prop passing ([#1488](https://github.com/Workday/canvas-kit/pull/1488)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.5.0](https://github.com/Workday/canvas-kit/releases/tag/v6.5.0) (2022-02-23)

### Components

- feat(search-form): Allow onSubmit when input is empty ([#1439](https://github.com/Workday/canvas-kit/pull/1439)) ([@sophiasun311](https://github.com/sophiasun311))
- feat(BrandAssets): Add alt property to Workday logos. ([#1446](https://github.com/Workday/canvas-kit/pull/1446)) ([@renato-rossi](https://github.com/renato-rossi))


## [v6.4.6](https://github.com/Workday/canvas-kit/releases/tag/v6.4.6) (2022-02-23)

### Components

- fix(combobox): Use correct role for live region ([#1466](https://github.com/Workday/canvas-kit/pull/1466)) ([@anicholls](https://github.com/anicholls))


## [v6.4.5](https://github.com/Workday/canvas-kit/releases/tag/v6.4.5) (2022-02-17)

### Components

- fix: Fix Primary button example ([#1481](https://github.com/Workday/canvas-kit/pull/1481)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.4.4](https://github.com/Workday/canvas-kit/releases/tag/v6.4.4) (2022-02-17)

### Components

- fix: Fix button imports ([#1479](https://github.com/Workday/canvas-kit/pull/1479)) ([@alanbsmith](https://github.com/alanbsmith))

## [v5.3.12](https://github.com/Workday/canvas-kit/releases/tag/v5.3.12) (2022-02-16)

### Components

- fix(combobox): Use correct role for live region ([#1466](https://github.com/Workday/canvas-kit/pull/1466)) ([@anicholls](https://github.com/anicholls))


## [v6.4.3](https://github.com/Workday/canvas-kit/releases/tag/v6.4.3) (2022-02-16)

### Documentation

- docs: Remove CSS Radio stories ([#1476](https://github.com/Workday/canvas-kit/pull/1476)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.4.2](https://github.com/Workday/canvas-kit/releases/tag/v6.4.2) (2022-02-15)

### Components

- fix(tabs): Add back the extending bottom border ([#1474](https://github.com/Workday/canvas-kit/pull/1474)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.4.1](https://github.com/Workday/canvas-kit/releases/tag/v6.4.1) (2022-02-14)




## [v6.4.0](https://github.com/Workday/canvas-kit/releases/tag/v6.4.0) (2022-02-12)

### Components

- fix(popup): Restore overflow y and x with `useDisableBodyScroll` ([#1470](https://github.com/Workday/canvas-kit/pull/1470)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Documentation

- docs(switch): Fix error switch example id ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.3.11](https://github.com/Workday/canvas-kit/releases/tag/v5.3.11) (2022-02-11)

### Components

- fix(popup): Restore overflow y and x with `useDisableBodyScroll` ([#1470](https://github.com/Workday/canvas-kit/pull/1470)) ([@NicholasBoll](https://github.com/NicholasBoll))

## [v6.3.11](https://github.com/Workday/canvas-kit/releases/tag/v6.3.11) (2022-02-11)

### Documentation

- docs: Correct typo in README file ([#1464](https://github.com/Workday/canvas-kit/pull/1464)) ([@mani11](https://github.com/mani11))


## [v5.3.10](https://github.com/Workday/canvas-kit/releases/tag/v5.3.10) (2022-02-09)

### Documentation

- docs(switch): Fix error switch example id ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.3.10](https://github.com/Workday/canvas-kit/releases/tag/v6.3.10) (2022-02-08)

### Documentation

- docs(side-panel): Fix padding in header ([#1459](https://github.com/Workday/canvas-kit/pull/1459)) ([@emroller16](https://github.com/emroller16))


## [v6.3.9](https://github.com/Workday/canvas-kit/releases/tag/v6.3.9) (2022-02-01)

### Components

- fix(popup-stack): Fix popup element removal when adapter is used ([#1450](https://github.com/Workday/canvas-kit/pull/1450)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.3.8](https://github.com/Workday/canvas-kit/releases/tag/v6.3.8) (2022-02-01)




## [v6.3.7](https://github.com/Workday/canvas-kit/releases/tag/v6.3.7) (2022-01-27)

### Components

- fix(preview): Preview FormField.Hint error text not the correct color ([#1445](https://github.com/Workday/canvas-kit/pull/1445)) ([@vibdev](https://github.com/vibdev))


## [v6.3.6](https://github.com/Workday/canvas-kit/releases/tag/v6.3.6) (2022-01-20)

### Documentation

- docs: Add examples for Select and TextInput with Formik ([#1435](https://github.com/Workday/canvas-kit/pull/1435)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.3.5](https://github.com/Workday/canvas-kit/releases/tag/v6.3.5) (2022-01-19)




## [v6.3.4](https://github.com/Workday/canvas-kit/releases/tag/v6.3.4) (2022-01-19)

### Components

- fix(popup): Fix body scrolling using useInitialFocus ([#1415](https://github.com/Workday/canvas-kit/pull/1415)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Allow repositioning of PopperJS instances ([#1424](https://github.com/Workday/canvas-kit/pull/1424)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.3.9](https://github.com/Workday/canvas-kit/releases/tag/v5.3.9) (2022-01-19)

### Components

- fix: Allow repositioning of PopperJS instances ([#1424](https://github.com/Workday/canvas-kit/pull/1424)) ([@NicholasBoll](https://github.com/NicholasBoll))

## [v6.3.3](https://github.com/Workday/canvas-kit/releases/tag/v6.3.3) (2022-01-14)

### Test

- test: Remove enzyme ([#1418](https://github.com/Workday/canvas-kit/pull/1418)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.3.2](https://github.com/Workday/canvas-kit/releases/tag/v6.3.2) (2022-01-14)

### Dependencies

- chore: Remove colors dependency/upgrade dependencies ([#1413](https://github.com/Workday/canvas-kit/pull/1413)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.3.1](https://github.com/Workday/canvas-kit/releases/tag/v6.3.1) (2022-01-13)


## [v5.3.8](https://github.com/Workday/canvas-kit/releases/tag/v5.3.8) (2022-01-13)

### Components

- chore: Add screenful to lockfile ([@NicholasBoll](https://github.com/NicholasBoll))
- fix(popup): Fix body scrolling using useInitialFocus ([#1415](https://github.com/Workday/canvas-kit/pull/1415)) ([@NicholasBoll](https://github.com/NicholasBoll))



## [v6.3.0](https://github.com/Workday/canvas-kit/releases/tag/v6.3.0) (2022-01-13)

### Hooks

- feat(common): Remove uuid and update unique id generation ([#1408](https://github.com/Workday/canvas-kit/pull/1408)) ([@NicholasBoll](https://github.com/NicholasBoll))
  **NOTE for jest snapshots**: This change removes the `uuid` package and instead will generate a one-time client seed and then create auto-incrementing ids. This change will not break UI or automated UI tests. It will break snapshot tests however. Previously, the only way to get stable ids for snapshot tests was to mock the `uuid` module. This was an implementation detail. To make snapshots work again, add the following to your jest setup file:

  ```ts
  import {setUniqueSeed, resetUniqueIdCount} from '@workday/canvas-kit-react/common';

  beforeEach(() => {
    setUniqueSeed('a'); // force set the seed
    resetUniqueIdCount(); // reset the unique id count
  });
  ```

  This will ensure each Jest snapshot has ids that look like `a0` and `a1` and will be the same every time the snapshot is run. Do not use these methods in production though - it may lead to inaccessible applications due to IDREF collisions.

### Infrastructure

- ci: Fix scripts ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix build script calls ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.2.3](https://github.com/Workday/canvas-kit/releases/tag/v6.2.3) (2022-01-13)

### Components

- fix(side-panel): Remove console.log ([#1417](https://github.com/Workday/canvas-kit/pull/1417)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.2.2](https://github.com/Workday/canvas-kit/releases/tag/v6.2.2) (2022-01-10)

### Infrastructure

- chore: Pin colors to version 1.4.0 ([#1411](https://github.com/Workday/canvas-kit/pull/1411)) ([@Parker-Ledoux](https://github.com/Parker-Ledoux))


## [v6.2.1](https://github.com/Workday/canvas-kit/releases/tag/v6.2.1) (2022-01-07)

### Components

- fix(search-form): Remove default autocomplete ([#1407](https://github.com/Workday/canvas-kit/pull/1407)) ([@sheenasi](https://github.com/sheenasi))


## [v6.2.0](https://github.com/Workday/canvas-kit/releases/tag/v6.2.0) (2022-01-03)

### Components

- fix(popup-stack): Add support for the fullscreen API ([#1403](https://github.com/Workday/canvas-kit/pull/1403)) ([@NicholasBoll](https://github.com/NicholasBoll))
  Fullscreen support was added to all Popups. 3 new hooks were added to help support fullscreen in whatever way you see fit:
  - `useTransferOnFullscreenEnter`: Use if your popup should remain open and be transfer into the fullscreen element
  - `useTransferOnFullscreenExit`: Use if your popup should remain open and transfer out of the fullscreen element back to the body element
  - `useCloseOnFullscreenExit`: Use if your popup should close when fullscreen is exited
- chore: Add screenful to lockfile ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.3.7](https://github.com/Workday/canvas-kit/releases/tag/v5.3.7) (2022-01-03)

### Components

- fix(popup-stack): Add support for the fullscreen API ([#1403](https://github.com/Workday/canvas-kit/pull/1403)) ([@NicholasBoll](https://github.com/NicholasBoll))
  Fullscreen support was added to all Popups. 3 new hooks were added to help support fullscreen in whatever way you see fit:
  - `useTransferOnFullscreenEnter`: Use if your popup should remain open and be transfer into the fullscreen element
  - `useTransferOnFullscreenExit`: Use if your popup should remain open and transfer out of the fullscreen element back to the body element
  - `useCloseOnFullscreenExit`: Use if your popup should close when fullscreen is exited

## [v6.1.5](https://github.com/Workday/canvas-kit/releases/tag/v6.1.5) (2021-12-22)

### Documentation

- docs: Add CookieBanner example ([#1402](https://github.com/Workday/canvas-kit/pull/1402)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v6.1.4](https://github.com/Workday/canvas-kit/releases/tag/v6.1.4) (2021-12-17)

### Documentation

- docs: Add ExtractProps to the v5 migration guide ([#1397](https://github.com/Workday/canvas-kit/pull/1397)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.3.6](https://github.com/Workday/canvas-kit/releases/tag/v5.3.6) (2021-12-17)

### Components

- chore: Bump uuid to stable non deprecated version ([#1367](https://github.com/Workday/canvas-kit/pull/1367)) ([@mannycarrera4](https://github.com/mannycarrera4))

### Documentation

- docs: Add ExtractProps to the v5 migration guide ([#1397](https://github.com/Workday/canvas-kit/pull/1397)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Revert

- fix: Revert uuid upgrade to get releases working ([#1371](https://github.com/Workday/canvas-kit/pull/1371)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v6.1.3](https://github.com/Workday/canvas-kit/releases/tag/v6.1.3) (2021-12-17)

### Components

- fix(tabs): Fix Dynamic Tabs example ([#1398](https://github.com/Workday/canvas-kit/pull/1398)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.1.2](https://github.com/Workday/canvas-kit/releases/tag/v6.1.2) (2021-12-14)

### Components

- fix(tabs): Remove gutter from tabs overflow menu ([#1378](https://github.com/Workday/canvas-kit/pull/1378)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v6.1.1](https://github.com/Workday/canvas-kit/releases/tag/v6.1.1) (2021-12-10)

### Infrastructure

- chore: Have verify action to wait on visual tests ([#1385](https://github.com/Workday/canvas-kit/pull/1385)) ([@mannycarrera4](https://github.com/mannycarrera4))
- chore: Remove unused and uneeded dependencies ([#1388](https://github.com/Workday/canvas-kit/pull/1388)) ([@NicholasBoll](https://github.com/NicholasBoll))
  - Storybook knobs are removed and all stories use [Storybook Controls](https://storybook.js.org/docs/react/essentials/controls) instead. This includes the `theme` override. See the PR for more details.
  - Storybook Readme addon was removed. This addon is no longer maintained. The Readme tab in the Storybook plugin panel was replaced with a custom addon that links to the Readme in Github. This allows us to more easily upgrade Storybook.


## [v6.1.0](https://github.com/Workday/canvas-kit/releases/tag/v6.1.0) (2021-12-07)

### Components

- feat(labs): Add new compound component for text area and form field  ([#1308](https://github.com/Workday/canvas-kit/pull/1308)) ([@vibdev](https://github.com/vibdev))
- fix: Add formik and yup back to preview dev deps ([#1376](https://github.com/Workday/canvas-kit/pull/1376)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.0.7](https://github.com/Workday/canvas-kit/releases/tag/v6.0.7) (2021-12-06)

### Components

- Bump support to next major version ([@](https://github.com/))
- chore: Fix support release ([@NicholasBoll](https://github.com/NicholasBoll))
- fix(tooltip): Add delay to Tooltip show and hide ([#1339](https://github.com/Workday/canvas-kit/pull/1339)) ([@wooksauce](https://github.com/wooksauce))
  This change could cause visual regression tests to fail if a screen shot is taken expecting a tooltip to show immediately. Your visual regression will either have to add an explicit wait of 300ms, or change the delay to 1ms only under test.
- fix(LoadingAnimation): Add support for RTL ([#1349](https://github.com/Workday/canvas-kit/pull/1349)) ([@vibdev](https://github.com/vibdev))
  Possible visual regression if you have overrides to get the old version working for RTL.
- fix(popup): Fix PopupCard styles to be more easily overridden ([#1352](https://github.com/Workday/canvas-kit/pull/1352)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Bump uuid to stable non deprecated version ([#1367](https://github.com/Workday/canvas-kit/pull/1367)) ([@mannycarrera4](https://github.com/mannycarrera4))

### Infrastructure

- ci: Fix npm tagging in release script ([@NicholasBoll](https://github.com/NicholasBoll))

### Revert

- fix: Revert uuid upgrade to get releases working ([#1371](https://github.com/Workday/canvas-kit/pull/1371)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.0.6](https://github.com/Workday/canvas-kit/releases/tag/v6.0.6) (2021-12-06)

### Documentation

- docs: Add headers examples to Storybook ([#1366](https://github.com/Workday/canvas-kit/pull/1366)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v6.0.5](https://github.com/Workday/canvas-kit/releases/tag/v6.0.5) (2021-11-24)

### Components

- docs(popup): Fix typo in JSDoc description for useReturnFocus ([@RayRedGoose](https://github.com/RayRedGoose))


## [v6.0.4](https://github.com/Workday/canvas-kit/releases/tag/v6.0.4) (2021-11-23)

### Infrastructure

- ci: Add parallel PR verification [skip-release] ([#1354](https://github.com/Workday/canvas-kit/pull/1354)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.0.3](https://github.com/Workday/canvas-kit/releases/tag/v6.0.3) (2021-11-23)

### Components

- fix(tabs): Fix focusability of the More button ([#1350](https://github.com/Workday/canvas-kit/pull/1350)) ([@NicholasBoll](https://github.com/NicholasBoll))

## [v5.3.5](https://github.com/Workday/canvas-kit/releases/tag/v5.3.5) (2021-11-23)

### Components

- fix(popup): Fix PopupCard styles to be more easily overridden ([#1352](https://github.com/Workday/canvas-kit/pull/1352)) ([@NicholasBoll](https://github.com/NicholasBoll))

## [v5.3.4](https://github.com/Workday/canvas-kit/releases/tag/v5.3.4) (2021-11-22)

### Components

- fix(LoadingAnimation): Add support for RTL ([#1349](https://github.com/Workday/canvas-kit/pull/1349)) ([@vibdev](https://github.com/vibdev))
  Possible visual regression if you have overrides to get the old version working for RTL.


## [v5.3.3](https://github.com/Workday/canvas-kit/releases/tag/v5.3.3) (2021-11-19)

### Components

- fix(tooltip): Add delay to Tooltip show and hide ([#1339](https://github.com/Workday/canvas-kit/pull/1339)) ([@wooksauce](https://github.com/wooksauce))
  This change could cause visual regression tests to fail if a screen shot is taken expecting a tooltip to show immediately. Your visual regression will either have to add an explicit wait of 300ms, or change the delay to 1ms only under test.
## [v6.0.1](https://github.com/Workday/canvas-kit/releases/tag/v6.0.1) (2021-11-17)

### Infrastructure

- ci: Fix major release process to detect breaking changes ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Fix codemod command ([#1346](https://github.com/Workday/canvas-kit/pull/1346)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.0.0](https://github.com/Workday/canvas-kit/releases/tag/v6.0.0) (2021-11-16)

### BREAKING CHANGES

- [#1201](https://github.com/Workday/canvas-kit/pull/1201) Optional breaking changes message. If your PR includes breaking changes. It is extremely rare to put breaking changes outside a `prerelease/v*` branch. Anything in this section will show up in release notes. Remove this section if no breaking changes are present.
- [#1276](https://github.com/Workday/canvas-kit/pull/1276) `CanvasDepthValue` is renamed to `CanvasDepthValues` for consistency. This change is handled automatically by the v6 codemod. Please refer to the V6 upgrade guide for more information.
- [#1319](https://github.com/Workday/canvas-kit/pull/1319) This change updates the theme breakpoint values and the media query breakpoints used in `ActionBar`. For more information, please see the V6 upgrade guide.
- [#1331](https://github.com/Workday/canvas-kit/pull/1331) This change updates our `PrimaryButton` styles. For more information, please see the V6 upgrade guide.
- [#1332](https://github.com/Workday/canvas-kit/pull/1332) This change updates our `SecondaryButton` styles. For more information, please see the V6 upgrade guide.
- [#1338](https://github.com/Workday/canvas-kit/pull/1338) This change updates our `TertiaryButton` styles. For more information, please see the V6 upgrade guide.
- [#1325](https://github.com/Workday/canvas-kit/pull/1325) Tabs API was updated to support a more generic selection model for all lists.
  - `model.events.activate({tab})` -> `model.events.select({id})`
  - `model.state.activeTab` -> `model.state.selectedKeys[0]`
  - `useTabsModel({onActivate})` -> `useTabsModel({onSelect})`
  - `useTabsModel({shouldActivate})` -> `useTabsModel({shouldSelect})`

### Components

- feat(page-header): Deprecate PageHeader ([#1247](https://github.com/Workday/canvas-kit/pull/1247)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(cookie-banner): Deprecate CookieBanner ([#1265](https://github.com/Workday/canvas-kit/pull/1265)) ([@alanbsmith](https://github.com/alanbsmith))
- feat: Rename SearchBar to SearchForm and move package ([#1267](https://github.com/Workday/canvas-kit/pull/1267)) ([@alanbsmith](https://github.com/alanbsmith))
- feat: Deprecate Header and Global Header ([#1273](https://github.com/Workday/canvas-kit/pull/1273)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(labs): Add new compound component for text inputs ([#1201](https://github.com/Workday/canvas-kit/pull/1201)) ([@vibdev](https://github.com/vibdev))
- feat(button): Update PrimaryButton for v6 ([#1331](https://github.com/Workday/canvas-kit/pull/1331)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(button): Update SecondaryButton for v6 ([#1332](https://github.com/Workday/canvas-kit/pull/1332)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(button): Update Tertiary Buttons for v6 ([#1338](https://github.com/Workday/canvas-kit/pull/1338)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(tabs): Add overflow support to tabs ([#1325](https://github.com/Workday/canvas-kit/pull/1325)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Fix major release ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Fix support release ([@NicholasBoll](https://github.com/NicholasBoll))

### Documentation

- docs: Clean up V6 migration guide ([#1343](https://github.com/Workday/canvas-kit/pull/1343)) ([@alanbsmith](https://github.com/alanbsmith))

### Infrastructure

- fix: Update codemod to support output streaming ([#1340](https://github.com/Workday/canvas-kit/pull/1340)) ([@alanbsmith](https://github.com/alanbsmith))

### Utilites

- feat: Update depth tokens ([#1276](https://github.com/Workday/canvas-kit/pull/1276)) ([@alanbsmith](https://github.com/alanbsmith))

### Utilities

- feat(common): Update theme breakpoints ([#1319](https://github.com/Workday/canvas-kit/pull/1319)) ([@alanbsmith](https://github.com/alanbsmith))


### Components

- feat(page-header): Deprecate PageHeader ([#1247](https://github.com/Workday/canvas-kit/pull/1247)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(cookie-banner): Deprecate CookieBanner ([#1265](https://github.com/Workday/canvas-kit/pull/1265)) ([@alanbsmith](https://github.com/alanbsmith))
- feat: Rename SearchBar to SearchForm and move package ([#1267](https://github.com/Workday/canvas-kit/pull/1267)) ([@alanbsmith](https://github.com/alanbsmith))
- feat: Deprecate Header and Global Header ([#1273](https://github.com/Workday/canvas-kit/pull/1273)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(labs): Add new compound component for text inputs ([#1201](https://github.com/Workday/canvas-kit/pull/1201)) ([@vibdev](https://github.com/vibdev))
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.
- feat(button): Update PrimaryButton for v6 ([#1331](https://github.com/Workday/canvas-kit/pull/1331)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(button): Update SecondaryButton for v6 ([#1332](https://github.com/Workday/canvas-kit/pull/1332)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(button): Update Tertiary Buttons for v6 ([#1338](https://github.com/Workday/canvas-kit/pull/1338)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(tabs): Add overflow support to tabs ([#1325](https://github.com/Workday/canvas-kit/pull/1325)) ([@NicholasBoll](https://github.com/NicholasBoll))
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.

### Documentation

- docs: Clean up V6 migration guide ([#1343](https://github.com/Workday/canvas-kit/pull/1343)) ([@alanbsmith](https://github.com/alanbsmith))

### Infrastructure

- fix: Update codemod to support output streaming ([#1340](https://github.com/Workday/canvas-kit/pull/1340)) ([@alanbsmith](https://github.com/alanbsmith))

### Utilites

- feat: Update depth tokens ([#1276](https://github.com/Workday/canvas-kit/pull/1276)) ([@alanbsmith](https://github.com/alanbsmith))

### Utilities

- feat(common): Update theme breakpoints ([#1319](https://github.com/Workday/canvas-kit/pull/1319)) ([@alanbsmith](https://github.com/alanbsmith))


## [v5.3.2](https://github.com/Workday/canvas-kit/releases/tag/v5.3.2) (2021-11-16)

### Infrastructure

- ci: Fix npm tagging in release script ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.3.1](https://github.com/Workday/canvas-kit/releases/tag/v5.3.1) (2021-11-16)

### Components

- Bump support to next major version ([@](https://github.com/))
- chore: Fix support release ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.2.12](https://github.com/Workday/canvas-kit/releases/tag/v5.2.12) (2021-11-10)

### Documentation

- docs: Add Version Support section to Readme ([#1337](https://github.com/Workday/canvas-kit/pull/1337)) ([@alanbsmith](https://github.com/alanbsmith))


## [v5.2.11](https://github.com/Workday/canvas-kit/releases/tag/v5.2.11) (2021-11-09)

### Components

- fix(tooltip): Fix findEllipsisElement IE11 ([#1330](https://github.com/Workday/canvas-kit/pull/1330)) ([@alorek](https://github.com/alorek))


## [v5.2.10](https://github.com/Workday/canvas-kit/releases/tag/v5.2.10) (2021-11-03)

### Components

- fix(tabs): Allow consumers to style the selected tab ([#1327](https://github.com/Workday/canvas-kit/pull/1327)) ([@sachinmorajkar](https://github.com/sachinmorajkar))


## [v5.2.9](https://github.com/Workday/canvas-kit/releases/tag/v5.2.9) (2021-10-21)

### Components

- Update Licence ([@jpante](https://github.com/jpante))


## [v5.2.8](https://github.com/Workday/canvas-kit/releases/tag/v5.2.8) (2021-10-07)

### Documentation

- docs: Remove travis badge ([#1299](https://github.com/Workday/canvas-kit/pull/1299)) ([@theiliad](https://github.com/theiliad))
- docs: Re-order content and fix links ([#1286](https://github.com/Workday/canvas-kit/pull/1286)) ([@willklein](https://github.com/willklein))
  Improved Contributing Guidelines
- docs(pagination): Update Pagination MDX to adhere to standardized template ([#1295](https://github.com/Workday/canvas-kit/pull/1295)) ([@jamesfan](https://github.com/jamesfan))
- docs: Fix miscellaneous content issues with MDX docs ([#1304](https://github.com/Workday/canvas-kit/pull/1304)) ([@jamesfan](https://github.com/jamesfan))

### Infrastructure

- ci: Fix New Issue workflow job ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix automerge by changing token to PAT ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add support for skip release ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Update forward merge job to be once a day ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.2.7](https://github.com/Workday/canvas-kit/releases/tag/v5.2.7) (2021-09-30)

### Components

- docs(menu): Fix Menu examples to be self-contained and SSR-safe ([#1291](https://github.com/Workday/canvas-kit/pull/1291)) ([@jamesfan](https://github.com/jamesfan))


## [v5.2.6](https://github.com/Workday/canvas-kit/releases/tag/v5.2.6) (2021-09-24)

### Components

- fix(combobox): Add keyboard navigation autoscroll to ComboBox menu ([#1269](https://github.com/Workday/canvas-kit/pull/1269)) ([@BillGeoghegan](https://github.com/BillGeoghegan))

### Infrastructure

- ci: Change forward-merge to use PAT to trigger PR job' ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.2.5](https://github.com/Workday/canvas-kit/releases/tag/v5.2.5) (2021-09-23)

### Infrastructure

- ci: Fix canary publish job ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix canary publish message ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.2.4](https://github.com/Workday/canvas-kit/releases/tag/v5.2.4) (2021-09-23)

### Components

- docs(tabs): Update Tabs MDX to adhere to standardized template [skip ci] ([#1279](https://github.com/Workday/canvas-kit/pull/1279)) ([@jamesfan](https://github.com/jamesfan))

### Infrastructure

- ci: Add automerge job [skip ci] ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Update GA job names to help with branch checks [skip ci] ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add prerelease canary builds ([@NicholasBoll](https://github.com/NicholasBoll))
  This change updates branch names for automated release management. Branch renames are as follows:

  - `support/v4.x` -> `support`
  - `prerelease/v5.3` -> `prerelease/minor`
  - `prerelease/v6` -> `prerelease/major`

  We renamed the `support` branch which could conflict with local refs. You may need to run the following if you've contributed to Canvas Kit in the past:
  ```
  git remote prune upstream
  ```
  Change `upstream` to whichever remote `Workday/canvas-kit` belongs to


## [v5.2.3](https://github.com/Workday/canvas-kit/releases/tag/v5.2.3) (2021-09-22)

### Components

- fix: Update import of static states when creating labs component ([#1266](https://github.com/Workday/canvas-kit/pull/1266)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v5.2.2](https://github.com/Workday/canvas-kit/releases/tag/v5.2.2) (2021-09-21)

### Components

- Fix: Fix PR template to include correct category shield ([@NicholasBoll](https://github.com/NicholasBoll))


## [v5.2.1](https://github.com/Workday/canvas-kit/releases/tag/v5.2.1) (2021-09-20)

### Components

- fix(tooltip): Fix OverflowTooltip with SVG in IE11 ([#1263](https://github.com/Workday/canvas-kit/pull/1263)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Update pull request template ([#1268](https://github.com/Workday/canvas-kit/pull/1268)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- ci: Add prefix to forward-merge job ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Update forward merge script ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add automation to releases ([#1272](https://github.com/Workday/canvas-kit/pull/1272)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This commit changes the interaction of contributors to Canvas Kit. All patches will be automatically released. In order to accomplish this, a new pull request link job is run to make sure that all features target a prerelease branch. For example, if you create a new pull request that adds a feature and the current version of Canvas Kit is `v5.2.0`, the target branch should be `prerelease/minor` instead of `master`. Don't worry, the pull request lint job will prevent mistakes. Also the Canvas Kit team can help by changing the base branch of your pull requests.
- ci: Add npm debug information ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix npm publish for release ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix npm token ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix npm publish ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix build process ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix push GH token ([@NicholasBoll](https://github.com/NicholasBoll))


## v5.2.0 (2021-09-08)

### Components

- fix(toast): Update to properly render rtl ([#1229](https://github.com/Workday/canvas-kit/pull/1229)) [@JaredWF](https://github.com/JaredWF)
- fix: Update search bar to properly render rtl ([#1231](https://github.com/Workday/canvas-kit/pull/1231)) [@JaredWF](https://github.com/JaredWF)
- fix(side-panel): Fix SidePanel RTL support ([#1234](https://github.com/Workday/canvas-kit/pull/1234)) [@alanbsmith](https://github.com/alanbsmith)
- feat(icon): Add shouldMirror prop to icons ([#1246](https://github.com/Workday/canvas-kit/pull/1246)) [@alanbsmith](https://github.com/alanbsmith)

### Hooks

- feat(labs): Add convertToStaticStates to useThemeRTL ([#1216](https://github.com/Workday/canvas-kit/pull/1216)) [@vibdev](https://github.com/vibdev)

### Docs

- docs: Update inter-linking to match Canvas Site ([#1220](https://github.com/Workday/canvas-kit/pull/1220)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update SidePanel docs to MDX ([#1236](https://github.com/Workday/canvas-kit/pull/1236)) [@alanbsmith](https://github.com/alanbsmith)
- docs: Update various issues prevent docs mdx files from being rendered remotely ([#1238](https://github.com/Workday/canvas-kit/pull/1238)) [@anicholls](https://github.com/anicholls)
- docs: Improve Variant/Type/State docs ([#1243](https://github.com/Workday/canvas-kit/pull/1243)) [@anicholls](https://github.com/anicholls)

### Infrastructure

- chore: Bump path-parse from 1.0.6 to 1.0.7 ([#1211](https://github.com/Workday/canvas-kit/pull/1211)) [@dependabot](https://github.com/dependabot)
- ci: Add Chromatic baseline to support branches ([#1219](https://github.com/Workday/canvas-kit/pull/1219)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix create-component README template ([#1235](https://github.com/Workday/canvas-kit/pull/1235)) [@alanbsmith](https://github.com/alanbsmith)
- chore(table): Update polished package to fix security warning ([#1242](https://github.com/Workday/canvas-kit/pull/1242)) [@NicholasBoll](https://github.com/NicholasBoll)

## v5.1.0 (2021-08-16)

### Components

- fix(form-field): Updates legend to be direct child of FieldSet ([#1146](https://github.com/Workday/canvas-kit/pull/1146)) [@sahlhoff](https://github.com/sahlhoff)
- fix(popup): Fix RTL rendering for popups ([#1183](https://github.com/Workday/canvas-kit/pull/1183)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(combobox): Add type attribute and remove tabindex attribute ([#1172](https://github.com/Workday/canvas-kit/pull/1172)) [@vibdev](https://github.com/vibdev)
- test(popup): Add visual tests for RTL in Modal and Popup ([#1159](https://github.com/Workday/canvas-kit/pull/1159)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(menu): Fix Menu item icon colors ([#1157](https://github.com/Workday/canvas-kit/pull/1157)) [@sahlhoff](https://github.com/sahlhoff)
- fix: Fix changeFocus to take any input and Dialog/Modal to accept model config ([#1154](https://github.com/Workday/canvas-kit/pull/1154)) [@NicholasBoll](https://github.com/NicholasBoll)

### Hooks & Utils

- fix(common): Remove @ts-ignore from ExtractProps ([#1189](https://github.com/Workday/canvas-kit/pull/1189)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(common): Add useThemeRTL hook ([#1041](https://github.com/Workday/canvas-kit/pull/1041)) [@vibdev](https://github.com/vibdev)

### Docs

- fix(menu): Update readme to show correct import for menu item ([#1208](https://github.com/Workday/canvas-kit/pull/1208)) [@karapalumbo](https://github.com/karapalumbo)
- docs: Fix prop tables. Also add spec table to Modal ([#1155](https://github.com/Workday/canvas-kit/pull/1155)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Add MDX docs and examples for Indicator components ([#1169](https://github.com/Workday/canvas-kit/pull/1169)) [@jamesfan](https://github.com/jamesfan)
- docs: Remove incorrect info on ExtractProps ([#1180](https://github.com/Workday/canvas-kit/pull/1180)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update MDX doc for Card and add MDX doc and examples for Table ([#1185](https://github.com/Workday/canvas-kit/pull/1185)) [@jamesfan](https://github.com/jamesfan)
- docs: Update Breadcrumbs stories to mdx ([#1206](https://github.com/Workday/canvas-kit/pull/1206)) [@alanbsmith](https://github.com/alanbsmith)
- docs(popup): Add Popper note and args table of subcomponents ([#1205](https://github.com/Workday/canvas-kit/pull/1205)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update common readme ([#1186](https://github.com/Workday/canvas-kit/pull/1186)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update Breadcrumbs stories from review feedback ([#1210](https://github.com/Workday/canvas-kit/pull/1210)) [@alanbsmith](https://github.com/alanbsmith)
- docs(popup): Update custom target example to accept ref ([#1209](https://github.com/Workday/canvas-kit/pull/1209)) [@divyanshu023](https://github.com/divyanshu023)
- docs: Add menu mdx docs ([#1203](https://github.com/Workday/canvas-kit/pull/1203)) [@sahlhoff](https://github.com/sahlhoff)
- fix: Fix misc. MDX fixes ([#1188](https://github.com/Workday/canvas-kit/pull/1188)) [@anicholls](https://github.com/anicholls)
- fix: Fix broken link in pagination.stories.mdx ([#1178](https://github.com/Workday/canvas-kit/pull/1178)) [@stuartmccoll](https://github.com/stuartmccoll)

### Infrastructure

- feat: Add comments in DTS files for JSDoc ([#1207](https://github.com/Workday/canvas-kit/pull/1207)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Add support for React 17 in main ([#1182](https://github.com/Workday/canvas-kit/pull/1182)) [@alanbsmith](https://github.com/alanbsmith)
- chore: Update incorrect prop names ([#1181](https://github.com/Workday/canvas-kit/pull/1181)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add forward merge job ([#1173](https://github.com/Workday/canvas-kit/pull/1173)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add pull request title check ([#1153](https://github.com/Workday/canvas-kit/pull/1153)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Bump prismjs from 1.23.0 to 1.24.0 ([#1129](https://github.com/Workday/canvas-kit/pull/1129)) [@dependabot](https://github.com/dependabot)
- ci: Delete main.yml [@NicholasBoll](https://github.com/NicholasBoll)

## v4.8.3 (2021-08-13)

### Components

- fix(combobox): Add type attribute and remove tabindex attribute ([#1172](https://github.com/Workday/canvas-kit/pull/1172)) [@vibdev](https://github.com/vibdev)
- fix(popup): Fix RTL rendering for popups ([#1183](https://github.com/Workday/canvas-kit/pull/1183)) [@NicholasBoll](https://github.com/NicholasBoll)

### Infrastructure

- ci: Add pull request title check ([#1153](https://github.com/Workday/canvas-kit/pull/1153)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add forward-merge job [@NicholasBoll](https://github.com/NicholasBoll)

## v5.0.4 (2021-07-12)

### Components

- feat(common): Add HTML attribute interface to ExtractProps ([#1147](https://github.com/Workday/canvas-kit/pull/1147)) [@NicholasBoll](https://github.com/NicholasBoll)

### Docs
- docs: Fix changelog issues [@anicholls](https://github.com/anicholls)

## v4.8.2 (2021-07-12)
### Infrastructure

- ci: Add additional check so support releases aren't treated as latest [@anicholls](https://github.com/anicholls)
- fix: Convert focus-trap-js to TS file to fix module-not-found error ([#1149](https://github.com/Workday/canvas-kit/pull/1149)) [@NicholasBoll](https://github.com/NicholasBoll)

## v5.0.3 (2021-07-09)

### Components

- docs: Convert Buttons category stories to use mdx ([#1127](https://github.com/Workday/canvas-kit/pull/1127)) [@anicholls](https://github.com/anicholls)
- docs: Add MDX docs and examples for Input components ([#1128](https://github.com/Workday/canvas-kit/pull/1128)) [@jamesfan](https://github.com/jamesfan)
- fix(tooltip): Fix overflow ellipsis detection ([#1132](https://github.com/Workday/canvas-kit/pull/1132)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(modal): Fix focus trap when Modal contains an iframe ([#1135](https://github.com/Workday/canvas-kit/pull/1135))

### Docs

- docs: Fix codemod link in v5 migration guide [@anicholls](https://github.com/anicholls)

### Infrastructure

- build: Pull component mdx + examples into docs module during build ([#1130](https://github.com/Workday/canvas-kit/pull/1130)) [@anicholls](https://github.com/anicholls)[@NicholasBoll](https://github.com/NicholasBoll)
- feat: Add storybook utils to labs common ([#1136](https://github.com/Workday/canvas-kit/pull/1136)) [@vibdev](https://github.com/vibdev)

## v4.8.1 (2021-07-08)

### Components

- fix(combobox): Modify combobox to accept empty string as initialValue ([#1116](https://github.com/Workday/canvas-kit/pull/1116)) [@bsaggese14](https://github.com/bsaggese14)
- fix(tooltip): Fix overflow ellipsis detection ([#1132](https://github.com/Workday/canvas-kit/pull/1132)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(modal): Fix focus trap when Modal contains an iframe ([#1135](https://github.com/Workday/canvas-kit/pull/1135)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(breadcrumbs): Fix onAction bugs in Breadcrumbs ([#1073](https://github.com/Workday/canvas-kit/pull/1073)) [@alanbsmith](https://github.com/alanbsmith)
- fix(checkbox): Fix Checkbox width bug ([#1139](https://github.com/Workday/canvas-kit/pull/1139)) [@alanbsmith](https://github.com/alanbsmith)

## v5.0.2 (2021-06-22)

### Components

- feat(combobox): Modify combobox to accept empty string as initialValue ([#1116](https://github.com/workday/canvas-kit/pull/1116)) [@bsaggese14](https://github.com/bsaggese14)
- fix: Add missing exports for CKR bundle ([#1118](https://github.com/workday/canvas-kit/pull/1118)) [@anicholls](https://github.com/anicholls)
- fix(tokens): Fixes color token exports ([#1110](https://github.com/workday/canvas-kit/pull/1110)) [@alanbsmith](https://github.com/alanbsmith)
- fix(popup): Remove ref forwarding requirement in Popup.Target ([#1115](https://github.com/Workday/canvas-kit/pull/1115)) [@NicholasBoll](https://github.com/NicholasBoll)

## 5.0.1 (2021-06-16)

### Docs

- docs: Update readme links to use mdx ([#1103](https://github.com/Workday/canvas-kit/pull/1103)) [@jpante](https://github.com/jpante)
- docs: Update old labs references ([#1105](https://github.com/Workday/canvas-kit/pull/1105)) [@anicholls](https://github.com/anicholls)

### Infrastructure

- build: Remove baseUrl and paths from tsconfig ([#1107](https://github.com/Workday/canvas-kit/pull/1107)) [@anicholls](https://github.com/anicholls)
- chore: Fix circular dep in preview module ([#1104](https://github.com/Workday/canvas-kit/pull/1104)) [@anicholls](https://github.com/anicholls)

## v4.8.0 (2021-06-16)

### Components

- feat(checkbox): Add aria-checked for accessibility and testability ([#1045](https://github.com/Workday/canvas-kit/pull/1045)) [@svagi](https://github.com/svagi)
- feat(comboxbox):Added default maxHeight to autocomplete container ([#1079](https://github.com/Workday/canvas-kit/pull/1079)) [@sraj](https://github.com/sraj)
- fix(combobox): Fix Combobox RTL issue ([#1064](https://github.com/Workday/canvas-kit/pull/1064)) [@alanbsmith](https://github.com/alanbsmith)
- fix(popup): Allow popups to be owners of each other ([#1054](https://github.com/Workday/canvas-kit/pull/1054)) [@csongnguyen](https://github.com/csongnguyen)
- fix(popup): Allow tooltips to close alongside modals on click outside ([#1074](https://github.com/Workday/canvas-kit/pull/1074)) [@csongnguyen](https://github.com/csongnguyen)
- fix(tabs): Fix aria-selected for unselected tabs ([#1033](https://github.com/Workday/canvas-kit/pull/1033)) [@angadkaflay](https://github.com/angadkaflay)
- fix(tooltip): Allow aria-label pass-through in muted tooltips ([#1037](https://github.com/Workday/canvas-kit/pull/1037)) [@NicholasBoll](https://github.com/NicholasBoll)

### Docs

- docs: Add better documentation to the `as` prop ([#1046](https://github.com/Workday/canvas-kit/pull/1046)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Popup accessible example ([#1056](https://github.com/Workday/canvas-kit/pull/1056)) [@csongnguyen](https://github.com/csongnguyen)

### Infrastructure

- chore: Bump y18n from 3.2.1 to 3.2.2 ([#1011](https://github.com/Workday/canvas-kit/pull/1011)) [@dependabot](https://github.com/dependabot)
- chore: Bump elliptic from 6.5.3 to 6.5.4 ([#993](https://github.com/Workday/canvas-kit/pull/993)) [@dependabot](https://github.com/dependabot)
- chore: Upgrade storybook to v6.2.9 ([#1055](https://github.com/Workday/canvas-kit/pull/1055)) [@anicholls](https://github.com/anicholls)
- chore: Bump ssri, ua-parser-js, handlebars, lodash, and hosted-git-info ([#1049](https://github.com/Workday/canvas-kit/pull/1049)) [@dependabot](https://github.com/dependabot)
- ci: Fix font-loading issue by predownloading [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Fix Tooltip flaky visual test ([#1035](https://github.com/Workday/canvas-kit/pull/1035)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Upgrade to node 14 ([#1044](https://github.com/Workday/canvas-kit/pull/1044)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Add package version in Storybook ([#1082](https://github.com/Workday/canvas-kit/pull/1082)) [@mihaelamiches](https://github.com/mihaelamiches)

## 5.0.0 (2021-06-10)

The changes below include the changes made across all 5.0.0 beta and rc versions (`v5.0.0-beta.0 - v5.0.0-rc.0`).

To review the breaking changes made in this release, check out the [v5.0.0 Upgrade Guide](./modules/docs/mdx/5.0-UPGRADE-GUIDE.mdx). Use our new [codemod utility](./modules/codemod) to make the update as smooth as possible.

### Components

- fix(common): Remove unintended whitespace around bdo tag in IE11 ([#868](https://github.com/Workday/canvas-kit/pull/868)) [@vibdev](https://github.com/vibdev)
- feat(common): Spread additional props on CanvasProvider [@NicholasBoll](https://github.com/NicholasBoll)
- chore(tabs): Convert to a compound component utility functions ([#953](https://github.com/Workday/canvas-kit/pull/953)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(tabs): Update Tabs list model to support passing index position ([#990](https://github.com/Workday/canvas-kit/pull/990)) [@omasrii](https://github.com/omasrii)
- fix: Allow refs to be passed to createComponent components ([#1009](https://github.com/Workday/canvas-kit/pull/1009)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update spacing tokens + codemod ([#1010](https://github.com/Workday/canvas-kit/pull/1010)) [@alanbsmith](https://github.com/alanbsmith)
- chore: Refactor Button to use createComponent ([#1017](https://github.com/Workday/canvas-kit/pull/1017)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Rename core packages to tokens and add codemod ([#1020](https://github.com/Workday/canvas-kit/pull/1020)) [@alanbsmith](https://github.com/alanbsmith)
- chore(card): Convert to a Compound Component and create codemod ([#1028](https://github.com/Workday/canvas-kit/pull/1028)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(tabs): Fix aria-selected for unselected tabs ([#1033](https://github.com/Workday/canvas-kit/pull/1033)) [@angadkaflay](https://github.com/angadkaflay)
- ci: Fix Tooltip flaky visual test ([#1035](https://github.com/Workday/canvas-kit/pull/1035)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(tooltip): Allow aria-label pass-through in muted tooltips ([#1037](https://github.com/Workday/canvas-kit/pull/1037)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Add better documentation to the `as` prop ([#1046](https://github.com/Workday/canvas-kit/pull/1046)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs(tabs): Update single tabs panel example ([#1047](https://github.com/Workday/canvas-kit/pull/1047)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update Create Compound Component docs ([#1048](https://github.com/Workday/canvas-kit/pull/1048)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(popup): Allow popups to be owners of each other ([#1054](https://github.com/Workday/canvas-kit/pull/1054)) [@csongnguyen](https://github.com/csongnguyen)
- fix(combobox): Fix Combobox RTL issue ([#1064](https://github.com/Workday/canvas-kit/pull/1064)) [@alanbsmith](https://github.com/alanbsmith)
- refactor(button): Button recategorization ([#1034](https://github.com/Workday/canvas-kit/pull/1034)) [@anicholls](https://github.com/anicholls)
- fix(popup): Allow tooltips to close alongside modals on click outside ([#1074](https://github.com/Workday/canvas-kit/pull/1074)) [@csongnguyen](https://github.com/csongnguyen)
- refactor: Move InputProvider from tokens to common ([#1076](https://github.com/Workday/canvas-kit/pull/1076)) [@anicholls](https://github.com/anicholls)
- feat(common): Add Box Component ([#1027](https://github.com/Workday/canvas-kit/pull/1027)) [@alanbsmith](https://github.com/alanbsmith)
- feat(comboxbox):Added default maxHeight to autocomplete container ([#1079](https://github.com/Workday/canvas-kit/pull/1079)) [@sraj](https://github.com/sraj)
- feat: Forward refs for input components ([#1068](https://github.com/Workday/canvas-kit/pull/1068)) [@jamesfan](https://github.com/jamesfan)
- feat(checkbox): Add aria-checked for accessibility and testability ([#1045](https://github.com/Workday/canvas-kit/pull/1045)) [@svagi](https://github.com/svagi)
- docs: Popup accessible example ([#1056](https://github.com/Workday/canvas-kit/pull/1056)) [@csongnguyen](https://github.com/csongnguyen)
- chore: Upgrade Card to use Box ([#1086](https://github.com/Workday/canvas-kit/pull/1086)) [@NicholasBoll](https://github.com/NicholasBoll)
- refactor(popup): Convert Popup to a compound component ([#1065](https://github.com/Workday/canvas-kit/pull/1065)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(skeleton): Change skeleton animation to fade in and out ([#1084](https://github.com/Workday/canvas-kit/pull/1084)) [@willklein](https://github.com/willklein)
- fix: Refactor/modal compound component ([#1091](https://github.com/Workday/canvas-kit/pull/1091)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Remove Preview/Tokens & Upgrade CKR Labs Type Hierarchy ([#1078](https://github.com/Workday/canvas-kit/pull/1078)) [@alanbsmith](https://github.com/alanbsmith)
- fix: Fix type upgrade issues ([#1098](https://github.com/Workday/canvas-kit/pull/1098)) [@alanbsmith](https://github.com/alanbsmith)
- docs: Update migration and Popup docs ([#1095](https://github.com/Workday/canvas-kit/pull/1095)) [@NicholasBoll](https://github.com/NicholasBoll)

### Infrastructure

- feat: Add compound component utility functions ([#946](https://github.com/Workday/canvas-kit/pull/946)) [@NicholasBoll](https://github.com/NicholasBoll)
- test: Add verifyComponent test helper and fix test types ([#958](https://github.com/Workday/canvas-kit/pull/958)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Add compound Component Creation Doc ([#950](https://github.com/Workday/canvas-kit/pull/950)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Add slash imports ([#992](https://github.com/Workday/canvas-kit/pull/992)) [@anicholls](https://github.com/anicholls)
- docs: Relocate supplemental docs to new docs module ([#998](https://github.com/Workday/canvas-kit/pull/998)) [@anicholls](https://github.com/anicholls)
- chore: Deprecate CKCSS and update migration guide ([#1000](https://github.com/Workday/canvas-kit/pull/1000)) [@anicholls](https://github.com/anicholls)
- fix: Scope buttonRef codemod to only Button components ([#1022](https://github.com/Workday/canvas-kit/pull/1022)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix slash import paths ([#1038](https://github.com/Workday/canvas-kit/pull/1038)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Remove package.json from create component script ([#1039](https://github.com/Workday/canvas-kit/pull/1039)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Bump y18n from 3.2.1 to 3.2.2 ([#1011](https://github.com/Workday/canvas-kit/pull/1011)) [@dependabot](https://github.com/dependabot)
- chore: Bump elliptic from 6.5.3 to 6.5.4 ([#993](https://github.com/Workday/canvas-kit/pull/993)) [@dependabot](https://github.com/dependabot)
- ci: Upgrade to node 14 ([#1044](https://github.com/Workday/canvas-kit/pull/1044)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Upgrade storybook to v6.2.9 ([#1055](https://github.com/Workday/canvas-kit/pull/1055)) [@anicholls](https://github.com/anicholls)
- chore: Bump ssri, ua-parser-js, handlebars, lodash, and hosted-git-info ([#1049](https://github.com/Workday/canvas-kit/pull/1049)) [@dependabot](https://github.com/dependabot)
- feat: Add Canvas Kit Preview and focus the purpose of CK Labs ([#1069](https://github.com/Workday/canvas-kit/pull/1069)) [@anicholls](https://github.com/anicholls)
- feat: Add package version in Storybook ([#1082](https://github.com/Workday/canvas-kit/pull/1082)) [@mihaelamiches](https://github.com/mihaelamiches)
- docs: Review v5 migration guide ([#1089](https://github.com/Workday/canvas-kit/pull/1089)) [@jamesfan](https://github.com/jamesfan)
- fix: Update canvas-kit-react package.json ([#1099](https://github.com/Workday/canvas-kit/pull/1099)) [@alanbsmith](https://github.com/alanbsmith)

## 5.0.0-rc.0 (2021-06-07)

### Components

- fix(tabs): Fix aria-selected for unselected tabs ([#1033](https://github.com/Workday/canvas-kit/pull/1033)) [@angadkaflay](https://github.com/angadkaflay)
- fix(tooltip): Allow aria-label pass-through in muted tooltips ([#1037](https://github.com/Workday/canvas-kit/pull/1037)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(popup): Allow popups to be owners of each other ([#1054](https://github.com/Workday/canvas-kit/pull/1054)) [@csongnguyen](https://github.com/csongnguyen)
- fix(combobox): Fix Combobox RTL issue ([#1064](https://github.com/Workday/canvas-kit/pull/1064)) [@alanbsmith](https://github.com/alanbsmith)
- refactor: Button recategorization ([#1034](https://github.com/Workday/canvas-kit/pull/1034)) [@anicholls](https://github.com/anicholls)
- fix(popup): Allow tooltips to close alongside modals on click outside ([#1074](https://github.com/Workday/canvas-kit/pull/1074)) [@csongnguyen](https://github.com/csongnguyen)
- fix: Move InputProvider from tokens to common ([#1076](https://github.com/Workday/canvas-kit/pull/1076)) [@anicholls](https://github.com/anicholls)
- feat(common): Add Box Component [@alanbsmith](https://github.com/alanbsmith)
- feat(comboxbox):Added default maxHeight to autocomplete container ([#1079](https://github.com/Workday/canvas-kit/pull/1079)) [@sraj](https://github.com/sraj)
- feat: Forward refs for input components ([#1068](https://github.com/Workday/canvas-kit/pull/1068)) [@jamesfan](https://github.com/jamesfan)
- feat(checkbox): Add aria-checked for accessibility and testability ([#1045](https://github.com/Workday/canvas-kit/pull/1045)) [@svagi](https://github.com/svagi)
- chore: Upgrade Card to use Box ([#1086](https://github.com/Workday/canvas-kit/pull/1086)) [@NicholasBoll](https://github.com/NicholasBoll)
- refactor(popup): Convert Popup to a compound component ([#1065](https://github.com/Workday/canvas-kit/pull/1065)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(skeleton): Change skeleton animation to fade in and out ([#1084](https://github.com/Workday/canvas-kit/pull/1084)) [@willklein](https://github.com/willklein)
- fix: Refactor/modal compound component ([#1091](https://github.com/Workday/canvas-kit/pull/1091)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Remove Preview/Tokens & Upgrade CKR Labs Type Hierarchy ([#1078](https://github.com/Workday/canvas-kit/pull/1078)) [@alanbsmith](https://github.com/alanbsmith)

### Documentation

- docs: Add better documentation to the `as` prop ([#1046](https://github.com/Workday/canvas-kit/pull/1046)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs(tabs): Update single tabs panel example ([#1047](https://github.com/Workday/canvas-kit/pull/1047)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update Create Compound Component docs ([#1048](https://github.com/Workday/canvas-kit/pull/1048)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Popup accessible example ([#1056](https://github.com/Workday/canvas-kit/pull/1056)) [@csongnguyen](https://github.com/csongnguyen)
- docs: Review v5 migration guide ([#1089](https://github.com/Workday/canvas-kit/pull/1089)) [@jamesfan](https://github.com/jamesfan)

### Infrastructure

- chore: Bump y18n from 3.2.1 to 3.2.2 ([#1011](https://github.com/Workday/canvas-kit/pull/1011)) [@dependabot](https://github.com/dependabot)
- chore: Bump elliptic from 6.5.3 to 6.5.4 ([#993](https://github.com/Workday/canvas-kit/pull/993)) [@dependabot](https://github.com/dependabot)
- ci: Fix Tooltip flaky visual test ([#1035](https://github.com/Workday/canvas-kit/pull/1035)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Upgrade to node 14 ([#1044](https://github.com/Workday/canvas-kit/pull/1044)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Upgrade storybook to v6.2.9 ([#1055](https://github.com/Workday/canvas-kit/pull/1055)) [@anicholls](https://github.com/anicholls)
- chore: Bump ssri, ua-parser-js, handlebars, lodash, and hosted-git-info ([#1049](https://github.com/Workday/canvas-kit/pull/1049)) [@dependabot](https://github.com/dependabot)
- fix: Prevent finding matches on the wrong imports (buttons codemod) [@anicholls](https://github.com/anicholls)
- feat: Add Canvas Kit Preview and focus the purpose of CK Labs [@anicholls](https://github.com/anicholls)
- fix: Update yarn.lock [@alanbsmith](https://github.com/alanbsmith)
- ci: Fix font-loading issue by predownloading [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Add package version in Storybook ([#1082](https://github.com/Workday/canvas-kit/pull/1082)) [@mihaelamiches](https://github.com/mihaelamiches)

## 5.0.0-beta.2 (2021-04-26)

### Components

- chore(card): Convert to a Compound Component and create codemod ([#1028](https://github.com/Workday/canvas-kit/pull/1028)) [@NicholasBoll](https://github.com/NicholasBoll)

### Infrastructure

- fix: Fix slash import paths ([#1038](https://github.com/Workday/canvas-kit/pull/1038)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Remove package.json from create component script ([#1039](https://github.com/Workday/canvas-kit/pull/1039)) [@NicholasBoll](https://github.com/NicholasBoll)

## 5.0.0-beta.1 (2021-04-12)

### Components

- feat(common): Spread additional props on CanvasProvider [@NicholasBoll](https://github.com/NicholasBoll)
- chore(tabs): Convert to a compound component utility functions ([#953](https://github.com/Workday/canvas-kit/pull/953)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(tabs): Update Tabs list model to support passing index position ([#990](https://github.com/Workday/canvas-kit/pull/990)) [@omasrii](https://github.com/omasrii)
- fix: Allow refs to be passed to createComponent components ([#1009](https://github.com/Workday/canvas-kit/pull/1009)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Refactor Button to use createComponent ([#1017](https://github.com/Workday/canvas-kit/pull/1017)) [@NicholasBoll](https://github.com/NicholasBoll)

### Codemods

- chore: Add slash imports ([#992](https://github.com/Workday/canvas-kit/pull/992)) [@anicholls](https://github.com/anicholls)
- chore: Update spacing tokens + codemod ([#1010](https://github.com/Workday/canvas-kit/pull/1010)) [@alanbsmith](https://github.com/alanbsmith)
- fix: Scope buttonRef codemod to only Button components ([#1022](https://github.com/Workday/canvas-kit/pull/1022)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Rename core packages to tokens and add codemod [@alanbsmith](https://github.com/alanbsmith)
- fix: Updates jscodeshift build directories [@alanbsmith](https://github.com/alanbsmith)

### Infrastructure

#### Docs

- docs: Add compound Component Creation Doc ([#950](https://github.com/Workday/canvas-kit/pull/950)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update v5 migration TOC and ordering [@anicholls](https://github.com/anicholls)
- docs: Relocate supplemental docs to new docs module ([#998](https://github.com/Workday/canvas-kit/pull/998)) [@anicholls](https://github.com/anicholls)
- chore: Deprecate CKCSS and update migration guide ([#1000](https://github.com/Workday/canvas-kit/pull/1000)) [@anicholls](https://github.com/anicholls)

#### Testing

- test: Add verifyComponent test helper and fix test types ([#958](https://github.com/Workday/canvas-kit/pull/958)) [@NicholasBoll](https://github.com/NicholasBoll)

#### CI

- ci: Fix error in prerelease logic in publish-canary script [@anicholls](https://github.com/anicholls)
- ci: Update setup-node action and remove custom matcher ([#994](https://github.com/Workday/canvas-kit/pull/994)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Fix canary dist-tag for prerelease canaries in slack message ([#1003](https://github.com/Workday/canvas-kit/pull/1003)) [@anicholls](https://github.com/anicholls)

## v4.7.0 (2021-04-12)

### Components
- fix(select): Fix undesired scrolling when activating the menu ([#1016](https://github.com/Workday/canvas-kit/pull/1016)) [@jamesfan](https://github.com/jamesfan)

### Infrastructure
- docs: Fix Github Pages story link in Specifications ([#1005](https://github.com/Workday/canvas-kit/pull/1005)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix specification story links [@NicholasBoll](https://github.com/NicholasBoll)

### CSS

- feat: Add basic primary theme support to CSS components ([#995](https://github.com/Workday/canvas-kit/pull/995)) [@aaronanderson](https://github.com/aaronanderson)

## v4.6.0 (2021-03-19)

### Components

- feat(popup): Add OverflowTooltip and update Popup behaviors to match a11y specs ([#980](https://github.com/Workday/canvas-kit/pull/980)) [@NicholasBoll](https://github.com/NicholasBoll)

### Infrastructure

- fix(modal): Update readme with correct import ([#988](https://github.com/Workday/canvas-kit/pull/988)) [@mannycarrera4](https://github.com/mannycarrera4)
- chore: Bump prismjs from 1.17.1 to 1.23.0 ([#986](https://github.com/Workday/canvas-kit/pull/986)) [@dependabot](https://github.com/dependabot)
- ci: Update setup-node action and remove custom matcher ([#994](https://github.com/Workday/canvas-kit/pull/994)) [@NicholasBoll](https://github.com/NicholasBoll)

## v4.5.1 (2021-02-26)

### Components

- fix(popup): Fix Popup icon RTL bug ([#983](https://github.com/Workday/canvas-kit/pull/983)) [@alanbsmith](https://github.com/alanbsmith)
- fix(side-panel): Fix keyframes animation ([#984](https://github.com/Workday/canvas-kit/pull/984)) [@alanbsmith](https://github.com/alanbsmith)

### Infrastructure

- chore: Update peerDependencies to support React 17 ([#974](https://github.com/Workday/canvas-kit/pull/974)) [@alanbsmith](https://github.com/alanbsmith)
- docs: Update Component Status doc guideline links ([#979](https://github.com/Workday/canvas-kit/pull/979)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs(toast): Update Toast docs ([#982](https://github.com/Workday/canvas-kit/pull/982)) [@alanbsmith](https://github.com/alanbsmith)


## 4.5.0 (2021-02-16)

### Components
- fix(tabs): Remove event.preventDefault from TabList [#969](https://github.com/Workday/canvas-kit/pull/969) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(Pagination): Update Pagination component (see notes) [#954](https://github.com/Workday/canvas-kit/pull/954)  [@alanbsmith](https://github.com/alanbsmith)
- feat: Add closeButtonAriaLabel to Modal Component [#959](https://github.com/Workday/canvas-kit/pull/959) [@UltraTempest](https://github.com/UltraTempest)
- feat(skeleton): Add option for different skeleton colors [#939](https://github.com/Workday/canvas-kit/pull/939) [@stefanuros](https://github.com/stefanuros)
- feat(badge): Add custom limit to CountBadge [#935](https://github.com/Workday/canvas-kit/pull/935) [@alanbsmith](https://github.com/alanbsmith)

### Hooks
- feat(common): Add useIsRTL hook to common module [#971](https://github.com/Workday/canvas-kit/pull/971) [@alanbsmith](https://github.com/alanbsmith)

### Infrastructure
- fix: Add crossorigin to font preloads [#967](https://github.com/Workday/canvas-kit/pull/967) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Use pull_request_target in GH Actions [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Fix Story names and extra imports [#966](https://github.com/Workday/canvas-kit/pull/966) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Improve documentation [#964](https://github.com/Workday/canvas-kit/pull/964) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Remove jest code-coverage threshold [#957](https://github.com/Workday/canvas-kit/pull/957) [@alanbsmith](https://github.com/alanbsmith)
- docs: Add compound component doc [#937](https://github.com/Workday/canvas-kit/pull/937) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Add window config option to inherit or override mono font family [#916](https://github.com/Workday/canvas-kit/pull/916) [@anicholls](https://github.com/anicholls)
- chore: Bump ini from 1.3.5 to 1.3.7 [#931](https://github.com/Workday/canvas-kit/pull/931) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update @workday/canvas-system-icons-web dependency [#940](https://github.com/Workday/canvas-kit/pull/940) [@alanbsmith](https://github.com/alanbsmith)
- chore(form-field): Update FormField Readme [#930](https://github.com/Workday/canvas-kit/pull/930) [@alanbsmith](https://github.com/alanbsmith)
- fix: Fix create component scripts [#929](https://github.com/Workday/canvas-kit/pull/929) [@jamesfan](https://github.com/jamesfan)
- docs: Standardize README badges for Labs components [#928](https://github.com/Workday/canvas-kit/pull/928) [@jamesfan](https://github.com/jamesfan)

### Notes

- Update Pagination component  [#954](https://github.com/Workday/canvas-kit/pull/954)
  - This is a breaking change in this Labs component. Please refer to the [migration guide](https://github.com/Workday/canvas-kit/blob/master/modules/react/pagination/MIGRATION_GUIDE.md) for more information on how to upgrade.

## 5.0.0-beta.0 (2021-01-27)

### Infrastructure
- feat: Add compound component utility functions ([#946](https://github.com/Workday/canvas-kit/pull/946)) [@NicholasBoll](https://github.com/NicholasBoll)
- build: Re-enable canary builds for prerelease/v5 [@anicholls](https://github.com/anicholls)

### Components

- fix(common): Remove unintended whitespace around bdo tag in IE11 ([#868](https://github.com/Workday/canvas-kit/pull/868)) [@vibdev](https://github.com/vibdev)

## 4.4.2 (2020-12-09)

### Components
- fix(menu): Remove minimum width and collapse around the content ([#922](https://github.com/Workday/canvas-kit/pull/922)) [@willklein](https://github.com/willklein)
- fix(common): Fix mouseFocusBehavior type issue ([#926](https://github.com/Workday/canvas-kit/pull/926)) [@NicholasBoll](https://github.com/NicholasBoll)

### Infrastructure
- feat: Upgrade Storybook to v6.1.3 ([#897](https://github.com/Workday/canvas-kit/pull/897)) [@anicholls](https://github.com/anicholls)
- fix: Add Emotion dependency to fix transient dep issue ([#917](https://github.com/Workday/canvas-kit/pull/917)) [@anicholls](https://github.com/anicholls)
- fix: Re-enable postcss for storybook builds to transpile svg-load ([#919](https://github.com/Workday/canvas-kit/pull/919)) [@anicholls](https://github.com/anicholls)

## 4.4.1 (2020-11-20)

### Components
- fix(color-picker): Detect different formats of `#ffffff` ([#884](https://github.com/Workday/canvas-kit/pull/884)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs(popup): Fix usePopup hook example docs ([#911](https://github.com/Workday/canvas-kit/pull/911)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)
- fix(select): Allow a single option ([#914](https://github.com/Workday/canvas-kit/pull/914)) [@NicholasBoll](https://github.com/NicholasBoll)

### Infrastructure
- ci: Use exec instead of node-cmd ([#908](https://github.com/Workday/canvas-kit/pull/908)) [@lychyi](https://github.com/lychyi)
- chore: Fix create component scripts ([#912](https://github.com/Workday/canvas-kit/pull/912)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)

## 4.4.0 (2020-11-13)

### Components
- feat: Add SidePanel to labs ([#866](https://github.com/Workday/canvas-kit/pull/866)) [@lychyi](https://github.com/lychyi)
- fix(button): Fix accent colors on IconButton when toggled on ([#895](https://github.com/Workday/canvas-kit/pull/895)) [@jamesfan](https://github.com/jamesfan)
- fix(side-panel): Update Toggle spacing ([#902](https://github.com/Workday/canvas-kit/pull/902)) [@lychyi](https://github.com/lychyi)
- feat(labs): Add Tabs component ([#569](https://github.com/Workday/canvas-kit/pull/569)) [@darcar31](https://github.com/darcar31)

### Infrastructure
- docs: Remove universal selector for section elements ([#896](https://github.com/Workday/canvas-kit/pull/896)) [@lychyi](https://github.com/lychyi)
- chore: Update publish-canary.js [@lychyi](https://github.com/lychyi)
- ci: Increase buffer size for publish cmd ([#903](https://github.com/Workday/canvas-kit/pull/903)) [@lychyi](https://github.com/lychyi)

### Notes
With the #895, if you're using a toggleable `IconButton` component, you will experience visual diffs for the following icons (they were not rendering properly prior, they should now look correct when "toggled" on):

```
adHocDelivery
alarmClockPlus
alarmClock
boxPlus
boxTextCheck
boxTextPlus
boxTextSearch
boxTextUser
cArea100
cAreaLayered
cAreaStacked
cBar100
cBarClustered
cBarStacked
cBubble
cColumn100
cColumnClustered
cColumnLine
cColumnStacked
cDualLine
cPie
cScatter
calendarUser
cameraPlus
cardView
clipboardBlankCheck
clipboardCheck
commentActive
dashboardExpenses
documentCandidateSearch
documentsCheck
flashAuto
fontSize
highlight
jobInfo
lockPlus
manageDelivery
orderedList
pill
qrCode
receipts
region
reportParameter
rowsCheck
rowsPlus
select
timeOffBalance
time
timelinePerson
unlink
userForward
userPlus
workbook
```
#### Before Fix

![image](https://user-images.githubusercontent.com/146020/97763546-27001e80-1ac9-11eb-854d-58e2fd94637e.png)

#### After Fix

![image](https://user-images.githubusercontent.com/146020/97763552-2a93a580-1ac9-11eb-9988-6eb468fdfeef.png)


## 4.3.1 (2020-10-22)

### Components
- refactor(select): Convert more of Select to FC and improve code style ([#827](https://github.com/Workday/canvas-kit/pull/827)) [@jamesfan](https://github.com/jamesfan)
- fix(popup): Cannot read property 'createContainer' of undefined ([#889](https://github.com/Workday/canvas-kit/pull/889)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(modal): Add exception to modal enter animation ([#867](https://github.com/Workday/canvas-kit/pull/867)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(menu): Update MenuItem icon styles ([#885](https://github.com/Workday/canvas-kit/pull/885)) [@alanbsmith](https://github.com/alanbsmith)

### Infrastructure
- docs: Fix broken links in Storybook ([#876](https://github.com/Workday/canvas-kit/pull/876)) [@NicholasBoll](https://github.com/NicholasBoll)


## 4.3.0 (2020-10-09)

### Components
- fix(popup-stack): Move adapter var to popup-stack global namespace ([#865](https://github.com/Workday/canvas-kit/pull/865)) [@csongnguyen](https://github.com/csongnguyen)
- feat(badge): Add canvas-kit-css-badge to canvas-kit-css ([#860](https://github.com/Workday/canvas-kit/pull/860)) [@alanbsmith](https://github.com/alanbsmith)
- fix(color-picker): Separate popup from color picker ([#846](https://github.com/Workday/canvas-kit/pull/846)) [@mannycarrera4](https://github.com/mannycarrera4)
- docs(core): Update core CSS border-radius docs ([#871](https://github.com/Workday/canvas-kit/pull/871)) [@alanbsmith](https://github.com/alanbsmith)
- docs(popup): Change language around use of usePopupStack ([#874](https://github.com/Workday/canvas-kit/pull/874)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(popup): Add previousFocusRef to useCloseOnEscape hook ([#873](https://github.com/Workday/canvas-kit/pull/873)) [@alanbsmith](https://github.com/alanbsmith)
- fix(drawer): Add support for word wrapping in IE11 ([#879](https://github.com/Workday/canvas-kit/pull/879)) [@alanbsmith](https://github.com/alanbsmith)
- feat(breadcrumbs): Add Breadcrumbs component ([#776](https://github.com/Workday/canvas-kit/pull/776)) [@alanbsmith](https://github.com/alanbsmith)

### Infrastructure
- fix: Revert prismjs from 1.21.0 back to 1.17.1 ([#870](https://github.com/Workday/canvas-kit/pull/870)) [@jamesfan](https://github.com/jamesfan)

## 4.2.0 (2020-09-15)

### Components
- fix(color-picker): Fix IE rendering for color picker swatchbook ([#832](https://github.com/Workday/canvas-kit/pull/832)) [@jtschult](https://github.com/jtschult)
- feat(menu): exported MenuProps ([#829](https://github.com/Workday/canvas-kit/pull/829)) [@rileymiller](https://github.com/rileymiller)
- docs(segmented-control): Remove reference to labs ([#839](https://github.com/Workday/canvas-kit/pull/839)) [@lychyi](https://github.com/lychyi)
- fix(select): Prevent disabled options from being keyboard-focused ([#837](https://github.com/Workday/canvas-kit/pull/837)) [@jamesfan](https://github.com/jamesfan)
- fix(color-picker): Remove data attributes ([#838](https://github.com/Workday/canvas-kit/pull/838)) [@lychyi](https://github.com/lychyi)
- feat(color-picker): Update and export default color set ([#831](https://github.com/Workday/canvas-kit/pull/831)) [@jtschult](https://github.com/jtschult)
- test: Add cypress test for placeholder in input and text area component ([#841](https://github.com/Workday/canvas-kit/pull/841)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(select): Replace disabled attribute on options with aria-disabled ([#844](https://github.com/Workday/canvas-kit/pull/844)) [@jamesfan](https://github.com/jamesfan)
- fix(modal): Bump focus-trap-js to 1.1.0 and add test ([#857](https://github.com/Workday/canvas-kit/pull/857)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(form-field): Fix legend overflow bug (IE11) ([#853](https://github.com/Workday/canvas-kit/pull/853)) [@lychyi](https://github.com/lychyi)

### Infrastructure
- docs: Create suggestion template ([#819](https://github.com/Workday/canvas-kit/pull/819)) [@jpante](https://github.com/jpante)
- docs: Create spike issue template ([#818](https://github.com/Workday/canvas-kit/pull/818)) [@jpante](https://github.com/jpante)
- ci: Add new issues into Backlog project ([#823](https://github.com/Workday/canvas-kit/pull/823)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Update CHANGELOG w/ correct release dates ([#821](https://github.com/Workday/canvas-kit/pull/821)) [@lychyi](https://github.com/lychyi)
- chore: Bump prismjs from 1.17.1 to 1.21.0 ([#826](https://github.com/Workday/canvas-kit/pull/826)) [@dependabot](https://github.com/dependabot)
- chore: Bump node-fetch from 2.6.0 to 2.6.1 ([#854](https://github.com/Workday/canvas-kit/pull/854)) [@dependabot](https://github.com/dependabot)

## 4.1.2 (2020-08-04)

### Components
- fix(skeleton): Remove aria-live and add loading text content ([#804](https://github.com/Workday/canvas-kit/pull/804)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(menu): Auto scroll to selected menu item if necessary ([#812](https://github.com/Workday/canvas-kit/pull/812)) [@NicholasBoll](https://github.com/NicholasBoll)
- test(menu): Fix assertion name to be more clear [@NicholasBoll](https://github.com/NicholasBoll)
- docs(skeleton): Update to remove mention of aria-live ([#814](https://github.com/Workday/canvas-kit/pull/814)) [@lychyi](https://github.com/lychyi)

### Infrastructure
- chore: Upgrade dependencies ([#811](https://github.com/Workday/canvas-kit/pull/811)) [@NicholasBoll](https://github.com/NicholasBoll)

## 4.0.3 (2020-08-04)

### Components
- fix(skeleton): Remove aria-live and add loading text content ([#804](https://github.com/Workday/canvas-kit/pull/804)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(menu): Auto scroll to selected menu item if necessary ([#812](https://github.com/Workday/canvas-kit/pull/812)) [@NicholasBoll](https://github.com/NicholasBoll)
- test(menu): Fix assertion name to be more clear [@NicholasBoll](https://github.com/NicholasBoll)
- docs(skeleton): Update to remove mention of aria-live ([#814](https://github.com/Workday/canvas-kit/pull/814)) [@lychyi](https://github.com/lychyi)

## 3.9.3 (2020-08-04)

### Components
- fix(skeleton): Remove aria-live and add loading text content ([#804](https://github.com/Workday/canvas-kit/pull/804)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(menu): Auto scroll to selected menu item if necessary ([#812](https://github.com/Workday/canvas-kit/pull/812)) [@NicholasBoll](https://github.com/NicholasBoll)
- test(menu): Fix assertion name to be more clear [@NicholasBoll](https://github.com/NicholasBoll)
- docs(skeleton): Update to remove mention of aria-live ([#814](https://github.com/Workday/canvas-kit/pull/814)) [@lychyi](https://github.com/lychyi)

## 4.1.1 (2020-07-27)

### Components

- fix(select): Fix undesired scrolling when activating menu ([#795](https://github.com/Workday/canvas-kit/pull/795)) [@jamesfan](https://github.com/jamesfan)
- fix: Update Popup readme example ([#798](https://github.com/Workday/canvas-kit/pull/798)) [@alanbsmith](https://github.com/alanbsmith)
- fix(select): Support required and aria-required ([#797](https://github.com/Workday/canvas-kit/pull/797)) [@jamesfan](https://github.com/jamesfan)
- fix(color-picker): Prevent enter key forwarding to next focus target ([#799](https://github.com/Workday/canvas-kit/pull/799)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(select): Add cancelAnimationFrame to unmount ([#803](https://github.com/Workday/canvas-kit/pull/803)) [@jamesfan](https://github.com/jamesfan)
- fix(menu): Delay focus to prevent scrolling ([#802](https://github.com/Workday/canvas-kit/pull/802)) [@NicholasBoll](https://github.com/NicholasBoll)

## 4.0.2 (2020-07-24)

### Components
- fix(menu): Delay focus to prevent scrolling ([#802](https://github.com/Workday/canvas-kit/pull/802)) [@NicholasBoll](https://github.com/NicholasBoll)

## 3.9.2 (2020-07-21)

### Components
- fix(button): Remove literal fontFamily ([#787](https://github.com/Workday/canvas-kit/pull/787)) [@lychyi](https://github.com/lychyi)

## 4.1.0 (2020-07-17)

### Components
- test(radio): Fix prop table logic ([#748](https://github.com/Workday/canvas-kit/pull/748)) [@lychyi](https://github.com/lychyi)
- fix(select): Fix theming colors for proper contrast ([#747](https://github.com/Workday/canvas-kit/pull/747)) [@jamesfan](https://github.com/jamesfan)
- test(skeleton): Add stories and enabled snapshots ([#720](https://github.com/Workday/canvas-kit/pull/720)) [@mannycarrera4](https://github.com/mannycarrera4)
- chore: Add iconRef to Icon components ([#707](https://github.com/Workday/canvas-kit/pull/707)) [@alanbsmith](https://github.com/alanbsmith)
- chore(popup-stack): Fix repo url in package.json ([#753](https://github.com/Workday/canvas-kit/pull/753)) [@lychyi](https://github.com/lychyi)
- fix(select): Fix a11y issues ([#764](https://github.com/Workday/canvas-kit/pull/764)) [@jamesfan](https://github.com/jamesfan)
- fix(select): Fix typeahead behavior and scrolling ([#754](https://github.com/Workday/canvas-kit/pull/754)) [@jamesfan](https://github.com/jamesfan)
- feat(popup): Add getAnchorClientRect prop for custom positioning ([#765](https://github.com/Workday/canvas-kit/pull/765)) [@luislikescoffee](https://github.com/luislikescoffee)
- fix: Add explicit arg to initEvent in ComboBox and header SearchBar ([#767](https://github.com/Workday/canvas-kit/pull/767)) [@lychyi](https://github.com/lychyi)
- test(text-area): Added placeholder with value unit test ([#772](https://github.com/Workday/canvas-kit/pull/772)) [@amritbhullar](https://github.com/amritbhullar)
- refactor(form-field): Update error message color ([#774](https://github.com/Workday/canvas-kit/pull/774)) [@jamesfan](https://github.com/jamesfan)
- feat(combobox): Allow grouping of listbox items ([#535](https://github.com/Workday/canvas-kit/pull/535)) [@vibdev](https://github.com/vibdev)
- fix(menu): Fix style so item is not truncated in IE11 ([#777](https://github.com/Workday/canvas-kit/pull/777)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(avatar): Fix undesired halo around Dark variant ([#783](https://github.com/Workday/canvas-kit/pull/783)) [@6r3al](https://github.com/6r3al)

### Infrastructure
- fix: Address various publish-canary.js bugs ([#749](https://github.com/Workday/canvas-kit/pull/749)) [@lychyi](https://github.com/lychyi)
- docs: Added Workday Design page to README file ([#737](https://github.com/Workday/canvas-kit/pull/737)) [@tiarebalbi](https://github.com/tiarebalbi)
- ci: Fix canary regex to grab version ([#758](https://github.com/Workday/canvas-kit/pull/758)) [@anicholls](https://github.com/anicholls)
- feat: Support SSR ([#649](https://github.com/Workday/canvas-kit/pull/649)) [@anicholls](https://github.com/anicholls)

### Theming
- refactor(common): Update pickForegroundColor to use fallback color logic ([#752](https://github.com/Workday/canvas-kit/pull/752)) [@donovangini](https://github.com/donovangini)

### Breaking Changes:
- feat(popup-stack): Add adapter API to integrate with other popup systems ([#782](https://github.com/Workday/canvas-kit/pull/782)) [@NicholasBoll](https://github.com/NicholasBoll)

This is a potentially breaking  change if you use `usePopupStack` and `ReactDOM.createPortal(contents, document.body)`:
We added `createContainer` to `PopupStack`. React no longer controls the element that is given to the the `PopupStack`. The `PopupStack` will now create a containing element that your content should render into. If you recognize this pattern, you'll need to render into `stackRef.current` instead of `document.body`.

Before:
```tsx
const ref = React.createRef<HTMLDivElement>(null);

usePopupStack(ref)

React.createPortal(contents, document.body)
```

Now
```tsx
const stackRef = usePopupStack()

React.createPortal(contents, stackRef.current)
```

## 4.0.1 (2020-07-08)

### Components
- fix(combobox): Add explicit arg to initEvent in ComboBox and header SearchBar ([#767](https://github.com/Workday/canvas-kit/pull/767)) [@lychyi](https://github.com/lychyi)

## 3.9.1 (2020-07-07)

### Components
- fix(combobox): Add explicit arg to initEvent in ComboBox and header SearchBar ([#767](https://github.com/Workday/canvas-kit/pull/767)) [@lychyi](https://github.com/lychyi)

## 4.0.0 (2020-06-15)

The changes below are the consolidation of changes made across all 4.0.0 beta versions (`v4.0.0-beta.0-5`).

To review the breaking changes made in this release, check out the [v4.0.0 Upgrade Guide](./modules/docs/mdx/4.0-UPGRADE-GUIDE.mdx).

### Infrastructure
- ci: Release canary builds for prerelease branches ([#481](https://github.com/Workday/canvas-kit/pull/481)) [@anicholls](https://github.com/anicholls)
- ci: Fix prerelease canary builds ([#501](https://github.com/Workday/canvas-kit/pull/501)) [@anicholls](https://github.com/anicholls)
- feat: Add script for easy promotion of labs components ([#522](https://github.com/Workday/canvas-kit/pull/522)) [@anicholls](https://github.com/anicholls)
- chore: Manage dependencies ([#533](https://github.com/Workday/canvas-kit/pull/533)) [@anicholls](https://github.com/anicholls)
- fix: Remove SyntheticEvent type usage ([#499](https://github.com/Workday/canvas-kit/pull/499)) [@donovangini](https://github.com/donovangini)
- refactor: Destructure default props ([#525](https://github.com/Workday/canvas-kit/pull/525)) [@mannycarrera4](https://github.com/mannycarrera4)
- chore: Upgrade packages to fix vulnerabilities ([#531](https://github.com/Workday/canvas-kit/pull/531)) [@anicholls](https://github.com/anicholls)
- feat(core): Add window configuration option to inherit font family ([#553](https://github.com/Workday/canvas-kit/pull/553)) [@anicholls](https://github.com/anicholls)
- fix: Add type checking to PRs and fix type errors ([#609](https://github.com/Workday/canvas-kit/pull/609)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Use sha in prerelease version to avoid duplicates ([#616](https://github.com/Workday/canvas-kit/pull/616)) [@anicholls](https://github.com/anicholls)
- ci: Trim sha before using it for canary preid ([#619](https://github.com/Workday/canvas-kit/pull/619)) [@anicholls](https://github.com/anicholls)
- ci: Fix version regex for canary publish ([#622](https://github.com/Workday/canvas-kit/pull/622)) [@anicholls](https://github.com/anicholls)
- fix: Clean up ts3.5 files ([#630](https://github.com/Workday/canvas-kit/pull/630)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add script to announce trunk build failures in slack ([#628](https://github.com/Workday/canvas-kit/pull/628)) [@anicholls](https://github.com/anicholls)
- chore: Upgrade Babel and presets to support optional chaining ([#631](https://github.com/Workday/canvas-kit/pull/631)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Fix version issue in beta build ([#644](https://github.com/Workday/canvas-kit/pull/644)) [@anicholls](https://github.com/anicholls)
- chore: Fix create-module and promote-module ([#660](https://github.com/Workday/canvas-kit/pull/660)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix check-lockfile call during precommit linting ([#663](https://github.com/Workday/canvas-kit/pull/663)) [@jamesfan](https://github.com/jamesfan)
- ci: Improve canary builds & publish behavior ([#665](https://github.com/Workday/canvas-kit/pull/665)) [@anicholls](https://github.com/anicholls)
- docs: Clean up 4.0 migration guide ([#677](https://github.com/Workday/canvas-kit/pull/677)) [@anicholls](https://github.com/anicholls)
- fix: Cleanup after merging master into prerelease/v4 [@anicholls](https://github.com/anicholls)
- chore: Update canvas-colors-web dependencies ([#706](https://github.com/Workday/canvas-kit/pull/706)) [@anicholls](https://github.com/anicholls)

### Theming

- chore: Promote theming functions out of labs ([#558](https://github.com/Workday/canvas-kit/pull/558)) [@mannycarrera4](https://github.com/mannycarrera4)
- chore: Move theme functionality from labs to common ([#594](https://github.com/Workday/canvas-kit/pull/594)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(common): Improve theming API stability ([#593](https://github.com/Workday/canvas-kit/pull/593)) [@anicholls](https://github.com/anicholls)
- fix(common): Auto-generate contrast color for partial theme ([#700](https://github.com/Workday/canvas-kit/pull/700)) [@donovangini](https://github.com/donovangini)

### Components
- refactor(button): Simplify Button components and prep for theming ([#471](https://github.com/Workday/canvas-kit/pull/471)) [@anicholls](https://github.com/anicholls)
- refactor: Rename and move IconButtonToggleGroup to SegmentedControl ([#505](https://github.com/Workday/canvas-kit/pull/505)) [@anicholls](https://github.com/anicholls)
- fix(modal): Use React portals for accessibility fixes ([#419](https://github.com/Workday/canvas-kit/pull/419)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Promote SegmentedControl out of labs ([#524](https://github.com/Workday/canvas-kit/pull/524)) [@anicholls](https://github.com/anicholls)
- fix(button): Misc. fixes after refactor ([#509](https://github.com/Workday/canvas-kit/pull/509)) [@anicholls](https://github.com/anicholls)
- feat(button): Add theming support to buttons ([#527](https://github.com/Workday/canvas-kit/pull/527)) [@anicholls](https://github.com/anicholls)
- refactor(button): TextButton design updates ([#540](https://github.com/Workday/canvas-kit/pull/540)) [@anicholls](https://github.com/anicholls)
- feat(button): Add Hyperlink component ([#541](https://github.com/Workday/canvas-kit/pull/541)) [@anicholls](https://github.com/anicholls)
- feat(tooltip): Refactor to a simpler API ([#528](https://github.com/Workday/canvas-kit/pull/528)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(core): Allow InputProvider to use a configurable container ([#546](https://github.com/Workday/canvas-kit/pull/546)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(button): Fix IconButton states and update TextButton CSS ([#577](https://github.com/Workday/canvas-kit/pull/577)) [@anicholls](https://github.com/anicholls)
- ci(tooltip): Fix chromatic flag ([#585](https://github.com/Workday/canvas-kit/pull/585)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Rename prop labels to match aria labels ([#551](https://github.com/Workday/canvas-kit/pull/551)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(modal): Add missing aria-modal=true and add aria-label ([#588](https://github.com/Workday/canvas-kit/pull/588)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- feat(button): Add href support ([#590](https://github.com/Workday/canvas-kit/pull/590)) [@anicholls](https://github.com/anicholls)
- fix(color-picker): Fix accessibility announcement for color input ([#639](https://github.com/Workday/canvas-kit/pull/639)) [@mannycarrera4](https://github.com/mannycarrera4)
- test(toast): Fix chromatic stories for toast ([#625](https://github.com/Workday/canvas-kit/pull/625)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(pagination): Provide aria live attribute for accessbility ([#620](https://github.com/Workday/canvas-kit/pull/620)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(avatar): Combine Avatar & AvatarButton and provide fallback image ([#614](https://github.com/Workday/canvas-kit/pull/614)) [@vibdev](https://github.com/vibdev)
- feat(select): Add theming to select in labs ([#648](https://github.com/Workday/canvas-kit/pull/648)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(avatar): Fix misalignment on ie11 ([#676](https://github.com/Workday/canvas-kit/pull/676)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(toast): Action link align on new line ([#682](https://github.com/Workday/canvas-kit/pull/682)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(button):  Update button readme with toolbar section ([#680](https://github.com/Workday/canvas-kit/pull/680)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(button): Add toolbar dropdown button ([#684](https://github.com/Workday/canvas-kit/pull/684)) [@mannycarrera4](https://github.com/mannycarrera4)
- test(card): Add stories and enable snapshots ([#708](https://github.com/Workday/canvas-kit/pull/708)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat: Add a Popup Stack manager to Canvas Kit ([#670](https://github.com/Workday/canvas-kit/pull/670)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Use theme contrast color for input "checks" ([#719](https://github.com/Workday/canvas-kit/pull/719)) [@anicholls](https://github.com/anicholls)
- fix(button): Misc. styling fixes and update to focusRing API ([#726](https://github.com/Workday/canvas-kit/pull/726)) [@anicholls](https://github.com/anicholls)
- fix(form-field): Fix default prop bug ([#702](https://github.com/Workday/canvas-kit/pull/702)) [@alanbsmith](https://github.com/alanbsmith)
- fix(segmented-control): Misc. fixes and story improvements ([#730](https://github.com/Workday/canvas-kit/pull/730)) [@anicholls](https://github.com/anicholls)
- fix(icon): Fix icon color references ([#733](https://github.com/Workday/canvas-kit/pull/733)) [@anicholls](https://github.com/anicholls)
- feat(select): Render menu using a portal ([#641](https://github.com/Workday/canvas-kit/pull/641)) [@jamesfan](https://github.com/jamesfan)

## 3.9.0 (2020-06-15)

### Infrastructure
- test: Improve snapshot infrastructure and organization ([#687](https://github.com/Workday/canvas-kit/pull/687)) [@anicholls](https://github.com/anicholls)
- chore: Bump websocket-extensions from 0.1.3 to 0.1.4 ([#703](https://github.com/Workday/canvas-kit/pull/703)) [@dependabot](https://github.com/dependabot)
- chore: Remove unneeded dependency ([#721](https://github.com/Workday/canvas-kit/pull/721)) [@NicholasBoll](https://github.com/NicholasBoll)

### Components
- fix(select): Fix miscellaneous UI issues ([#672](https://github.com/Workday/canvas-kit/pull/672)) [@jamesfan](https://github.com/jamesfan)
- test(select): Fix visual testing states for options ([#606](https://github.com/Workday/canvas-kit/pull/606)) [@jamesfan](https://github.com/jamesfan)
- test(avatar): Add snapshot tests for Avatar and AvatarButton ([#690](https://github.com/Workday/canvas-kit/pull/690)) [@anicholls](https://github.com/anicholls)
- test(tooltip): Add snapshot test for various placements ([#691](https://github.com/Workday/canvas-kit/pull/691)) [@anicholls](https://github.com/anicholls)
- test(status-indicator): Add snapshots ([#692](https://github.com/Workday/canvas-kit/pull/692)) [@anicholls](https://github.com/anicholls)
- test(modal): Add modal snapshots ([#693](https://github.com/Workday/canvas-kit/pull/693)) [@anicholls](https://github.com/anicholls)
- test(avatar): Fix visual regression threshold ([#723](https://github.com/Workday/canvas-kit/pull/723)) [@NicholasBoll](https://github.com/NicholasBoll)
- test(core): Add new stories and enable snapshots ([#696](https://github.com/Workday/canvas-kit/pull/696)) [@anicholls](https://github.com/anicholls)
- test(drawer): Add stories and snapshots for drawer ([#727](https://github.com/Workday/canvas-kit/pull/727)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(core): Add window configuration option to inherit font family ([#722](https://github.com/Workday/canvas-kit/pull/722)) [@anicholls](https://github.com/anicholls)
- test(side-panel): Add stories and enable snapshots ([#715](https://github.com/Workday/canvas-kit/pull/715)) [@mannycarrera4](https://github.com/mannycarrera4)
- ci(avatar): Fixed threshold setting ([#731](https://github.com/Workday/canvas-kit/pull/731)) [@NicholasBoll](https://github.com/NicholasBoll)
- test(status-indicator): Fix visual testing story icons ([#732](https://github.com/Workday/canvas-kit/pull/732)) [@anicholls](https://github.com/anicholls)
- chore(core): Update Labs Core stories and add snapshots ([#735](https://github.com/Workday/canvas-kit/pull/735)) [@alanbsmith](https://github.com/alanbsmith)

## 4.0.0-beta.5 (2020-06-12)

### Infrastructure
- docs: Clean up 4.0 migration guide ([#677](https://github.com/Workday/canvas-kit/pull/677)) [@anicholls](https://github.com/anicholls)
- fix: Cleanup after merging master into prerelease/v4 [@anicholls](https://github.com/anicholls)
- chore: Update canvas-colors-web dependencies ([#706](https://github.com/Workday/canvas-kit/pull/706)) [@anicholls](https://github.com/anicholls)

### Components
- fix(avatar): Fix misalignment on ie11 ([#676](https://github.com/Workday/canvas-kit/pull/676)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(toast): Action link align on new line ([#682](https://github.com/Workday/canvas-kit/pull/682)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(button):  Update button readme with toolbar section ([#680](https://github.com/Workday/canvas-kit/pull/680)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(button): Add toolbar dropdown button ([#684](https://github.com/Workday/canvas-kit/pull/684)) [@mannycarrera4](https://github.com/mannycarrera4)
- test(card): Add stories and enable snapshots ([#708](https://github.com/Workday/canvas-kit/pull/708)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(common): Auto-generate contrast color for partial theme ([#700](https://github.com/Workday/canvas-kit/pull/700)) [@donovangini](https://github.com/donovangini)
- feat: Add a Popup Stack manager to Canvas Kit ([#670](https://github.com/Workday/canvas-kit/pull/670)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Use theme contrast color for input "checks" ([#719](https://github.com/Workday/canvas-kit/pull/719)) [@anicholls](https://github.com/anicholls)
- fix(button): Misc. styling fixes and update to focusRing API ([#726](https://github.com/Workday/canvas-kit/pull/726)) [@anicholls](https://github.com/anicholls)
- fix(form-field): Fix default prop bug ([#702](https://github.com/Workday/canvas-kit/pull/702)) [@alanbsmith](https://github.com/alanbsmith)
- fix(segmented-control): Misc. fixes and story improvements ([#730](https://github.com/Workday/canvas-kit/pull/730)) [@anicholls](https://github.com/anicholls)
- fix(icon): Fix icon color references ([#733](https://github.com/Workday/canvas-kit/pull/733)) [@anicholls](https://github.com/anicholls)
- feat(select): Render menu using a portal ([#641](https://github.com/Workday/canvas-kit/pull/641)) [@jamesfan](https://github.com/jamesfan)

## 3.8.0 (2020-05-22)

### Infrastructure
- docs: Remove rebase section for pull requests ([#647](https://github.com/Workday/canvas-kit/pull/647)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Add invalid import rule ([#652](https://github.com/Workday/canvas-kit/pull/652)) [@alanbsmith](https://github.com/alanbsmith)
- fix: Fix incorrect dep listing ([#668](https://github.com/Workday/canvas-kit/pull/668)) [@lychyi](https://github.com/lychyi)
- chore: Add public config to create-component script ([#667](https://github.com/Workday/canvas-kit/pull/667)) [@alanbsmith](https://github.com/alanbsmith)

### Components
- feat(badge): Add CountBadge component ([#566](https://github.com/Workday/canvas-kit/pull/566)) [@alanbsmith](https://github.com/alanbsmith)
- fix: Add public access to Badge publish config ([#653](https://github.com/Workday/canvas-kit/pull/653)) [@alanbsmith](https://github.com/alanbsmith)
- fix: Align hover ripple for checkbox and radio components in IE11 ([#651](https://github.com/Workday/canvas-kit/pull/651)) [@lychyi](https://github.com/lychyi)
- fix(switch): Fix click target for switch ([#671](https://github.com/Workday/canvas-kit/pull/671)) [@mannycarrera4](https://github.com/mannycarrera4)

## 4.0.0-beta.4 (2020-05-20)

### Infrastructure
- chore: Fix create-module and promote-module ([#660](https://github.com/Workday/canvas-kit/pull/660)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix check-lockfile call during precommit linting ([#663](https://github.com/Workday/canvas-kit/pull/663)) [@jamesfan](https://github.com/jamesfan)
- ci: Improve canary builds & publish behavior ([#665](https://github.com/Workday/canvas-kit/pull/665)) [@anicholls](https://github.com/anicholls)

### Components

- fix(avatar): Combine Avatar & AvatarButton and provide fallback image ([#614](https://github.com/Workday/canvas-kit/pull/614)) [@vibdev](https://github.com/vibdev)
- feat(select): Add theming to select in labs ([#648](https://github.com/Workday/canvas-kit/pull/648)) [@mannycarrera4](https://github.com/mannycarrera4)

## 4.0.0-beta.3 (2020-05-12)

### Infrastructure

- chore: Upgrade Babel and presets to support optional chaining ([#631](https://github.com/Workday/canvas-kit/pull/631)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Fix version issue in beta build ([#644](https://github.com/Workday/canvas-kit/pull/644)) [@anicholls](https://github.com/anicholls)

### Components

- fix(pagination): Provide aria live attribute for accessbility ([#620](https://github.com/Workday/canvas-kit/pull/620)) [@mannycarrera4](https://github.com/mannycarrera4)

## 4.0.0-beta.2 (2020-05-11)

### Infrastructure

- chore: Upgrade packages to fix vulnerabilities ([#531](https://github.com/Workday/canvas-kit/pull/531)) [@anicholls](https://github.com/anicholls)
- feat(core): Add window configuration option to inherit font family ([#553](https://github.com/Workday/canvas-kit/pull/553)) [@anicholls](https://github.com/anicholls)
- fix: Add type checking to PRs and fix type errors ([#609](https://github.com/Workday/canvas-kit/pull/609)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Use sha in prerelease version to avoid duplicates ([#616](https://github.com/Workday/canvas-kit/pull/616)) [@anicholls](https://github.com/anicholls)
- ci: Trim sha before using it for canary preid ([#619](https://github.com/Workday/canvas-kit/pull/619)) [@anicholls](https://github.com/anicholls)
- ci: Fix version regex for canary publish ([#622](https://github.com/Workday/canvas-kit/pull/622)) [@anicholls](https://github.com/anicholls)
- fix: Clean up ts3.5 files ([#630](https://github.com/Workday/canvas-kit/pull/630)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add script to announce trunk build failures in slack ([#628](https://github.com/Workday/canvas-kit/pull/628)) [@anicholls](https://github.com/anicholls)

### Theming

- chore: Promote theming functions out of labs ([#558](https://github.com/Workday/canvas-kit/pull/558)) [@mannycarrera4](https://github.com/mannycarrera4)
- chore: Move theme functionality from labs to common ([#594](https://github.com/Workday/canvas-kit/pull/594)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(common): Improve theming API stability ([#593](https://github.com/Workday/canvas-kit/pull/593)) [@anicholls](https://github.com/anicholls)

### Components

- fix(button): Fix IconButton states and update TextButton CSS ([#577](https://github.com/Workday/canvas-kit/pull/577)) [@anicholls](https://github.com/anicholls)
- ci(tooltip): Fix chromatic flag ([#585](https://github.com/Workday/canvas-kit/pull/585)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Rename prop labels to match aria labels ([#551](https://github.com/Workday/canvas-kit/pull/551)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(modal): Add missing aria-modal=true and add aria-label ([#588](https://github.com/Workday/canvas-kit/pull/588)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- feat(button): Add href support ([#590](https://github.com/Workday/canvas-kit/pull/590)) [@anicholls](https://github.com/anicholls)
- fix(color-picker): Fix accessibility announcement for color input ([#639](https://github.com/Workday/canvas-kit/pull/639)) [@mannycarrera4](https://github.com/mannycarrera4)
- test(toast): Fix chromatic stories for toast ([#625](https://github.com/Workday/canvas-kit/pull/625)) [@mannycarrera4](https://github.com/mannycarrera4)

## 3.7.0 (2020-05-06)

### Infrastructure
- ci: Enable Github Actions for pull requests ([#557](https://github.com/Workday/canvas-kit/pull/557)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Fix annotation for extra dependencies ([#578](https://github.com/Workday/canvas-kit/pull/578)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update Lerna ([#583](https://github.com/Workday/canvas-kit/pull/583)) [@lychyi](https://github.com/lychyi)
- fix: Fix eslint for VSCode ([#589](https://github.com/Workday/canvas-kit/pull/589)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update Cypress to 4.4.1 and remove custom TS handling ([#596](https://github.com/Workday/canvas-kit/pull/596)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Refactor control wrapper to hooks for easier examples ([#597](https://github.com/Workday/canvas-kit/pull/597)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Decrease output of build-storybook ([#598](https://github.com/Workday/canvas-kit/pull/598)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix ESLint VSCode plugin ([#599](https://github.com/Workday/canvas-kit/pull/599)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update copyright in license files ([#615](https://github.com/Workday/canvas-kit/pull/615)) [@jpante](https://github.com/jpante)

### Components
- fix(ColorPicker): Export ColorSwatch from the ColorPicker index ([#580](https://github.com/Workday/canvas-kit/pull/580)) [@BlueVajra](https://github.com/BlueVajra)
- fix(table): Remove focus on CSS table rows ([#595](https://github.com/Workday/canvas-kit/pull/595)) [@NicholasBoll](https://github.com/NicholasBoll)
- test(toast): Write test for Toasts ([#584](https://github.com/Workday/canvas-kit/pull/584)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(select): Implement Canvas menu ([#454](https://github.com/Workday/canvas-kit/pull/454)) [@jamesfan](https://github.com/jamesfan)
- test(popup): Add tests for Popup ([#600](https://github.com/Workday/canvas-kit/pull/600)) [@mannycarrera4](https://github.com/mannycarrera4)

## 4.0.0-beta.1 (2020-04-13)

### Infrastructure

- fix: Remove SyntheticEvent type usage ([#499](https://github.com/Workday/canvas-kit/pull/499)) [@donovangini](https://github.com/donovangini)
- refactor: Destructure default props ([#525](https://github.com/Workday/canvas-kit/pull/525)) [@mannycarrera4](https://github.com/mannycarrera4)

### Components
- refactor(button): TextButton design updates ([#540](https://github.com/Workday/canvas-kit/pull/540)) [@anicholls](https://github.com/anicholls)
- feat(button): Add Hyperlink component ([#541](https://github.com/Workday/canvas-kit/pull/541)) [@anicholls](https://github.com/anicholls)
- feat(tooltip): Refactor to a simpler API ([#528](https://github.com/Workday/canvas-kit/pull/528)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(core): Allow InputProvider to use a configurable container ([#546](https://github.com/Workday/canvas-kit/pull/546)) [@mannycarrera4](https://github.com/mannycarrera4)

## 3.6.0 (2020-04-13)

### Infrastructure
- chore: Update thank you on README ([#511](https://github.com/Workday/canvas-kit/pull/511)) [@lychyi](https://github.com/lychyi)
- ci: Quiet Travis build-storybook webpack logs ([#516](https://github.com/Workday/canvas-kit/pull/516)) [@anicholls](https://github.com/anicholls)
- docs: Update Component Status ([#547](https://github.com/Workday/canvas-kit/pull/547)) [@jpante](https://github.com/jpante)

### Components
- feat(color-picker): Add color picker ([#462](https://github.com/Workday/canvas-kit/pull/462)) [@laurenraddatz](https://github.com/laurenraddatz)
- fix: Combobox and search bar not in container ([#513](https://github.com/Workday/canvas-kit/pull/513)) [@vibdev](https://github.com/vibdev)
- test(form-field): Add testing-library/react and cypress tests ([#482](https://github.com/Workday/canvas-kit/pull/482)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(menu): Update aria role for menu ([#520](https://github.com/Workday/canvas-kit/pull/520)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(combobox): Convert to functional component and add translation function for status text ([#532](https://github.com/Workday/canvas-kit/pull/532)) [@vibdev](https://github.com/vibdev)
- fix(color-picker): Design & use case improvements ([#519](https://github.com/Workday/canvas-kit/pull/519)) [@anicholls](https://github.com/anicholls)
- fix(menu): Fix flashing on initial selected index ([#561](https://github.com/Workday/canvas-kit/pull/561)) [@NicholasBoll](https://github.com/NicholasBoll)

## 4.0.0-beta.0 (2020-03-30)

### Infrastructure

- ci: Release canary builds for prerelease branches ([#481](https://github.com/Workday/canvas-kit/pull/481)) [@anicholls](https://github.com/anicholls)
- ci: Fix prerelease canary builds ([#501](https://github.com/Workday/canvas-kit/pull/501)) [@anicholls](https://github.com/anicholls)
- feat: Add script for easy promotion of labs components ([#522](https://github.com/Workday/canvas-kit/pull/522)) [@anicholls](https://github.com/anicholls)
- chore: Manage dependencies ([#533](https://github.com/Workday/canvas-kit/pull/533)) [@anicholls](https://github.com/anicholls)

### Components

- **[BREAKING]** refactor(button): Simplify Button components and prep for theming ([#471](https://github.com/Workday/canvas-kit/pull/471)) [@anicholls](https://github.com/anicholls)
- **[BREAKING]** refactor: Rename and move IconButtonToggleGroup to SegmentedControl ([#505](https://github.com/Workday/canvas-kit/pull/505)) [@anicholls](https://github.com/anicholls)
- **[BREAKING]** fix(modal): Use React portals for accessibility fixes ([#419](https://github.com/Workday/canvas-kit/pull/419)) [@NicholasBoll](https://github.com/NicholasBoll)
- **[BREAKING]** chore: Promote SegmentedControl out of labs ([#524](https://github.com/Workday/canvas-kit/pull/524)) [@anicholls](https://github.com/anicholls)
- fix(button): Misc. fixes after refactor ([#509](https://github.com/Workday/canvas-kit/pull/509)) [@anicholls](https://github.com/anicholls)
- feat(button): Add theming support to buttons ([#527](https://github.com/Workday/canvas-kit/pull/527)) [@anicholls](https://github.com/anicholls)

## 3.5.0 (2020-03-12)

### Infrastructure
- test: Explicitly enable snapshots ([#478](https://github.com/Workday/canvas-kit/pull/478)) [@lychyi](https://github.com/lychyi)
- docs: Update docs for visual testing change ([#490](https://github.com/Workday/canvas-kit/pull/490)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Add lab modules as valid scopes for commit messages ([#491](https://github.com/Workday/canvas-kit/pull/491)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Allow a module's story to self-reference the package ([#494](https://github.com/Workday/canvas-kit/pull/494)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Avoid polyfill requirements ([#492](https://github.com/Workday/canvas-kit/pull/492)) [@anicholls](https://github.com/anicholls)
- chore: Simplify Chromatic CI runs ([#495](https://github.com/Workday/canvas-kit/pull/495)) [@anicholls](https://github.com/anicholls)
- fix: Update contributing readme with correct testing reference ([#498](https://github.com/Workday/canvas-kit/pull/498)) [@anicholls](https://github.com/anicholls)
- build: Improve PR build times ([#500](https://github.com/Workday/canvas-kit/pull/500)) [@lychyi](https://github.com/lychyi)
- chore: Update Storybook to 5.3 ([#453](https://github.com/Workday/canvas-kit/pull/453)) [@lychyi](https://github.com/lychyi)
- chore: Remove unused typescript-eslint depenency ([#502](https://github.com/Workday/canvas-kit/pull/502)) [@anicholls](https://github.com/anicholls)
- ci: Explicit use of yarn for Chromatic cmd ([#503](https://github.com/Workday/canvas-kit/pull/503)) [@lychyi](https://github.com/lychyi)
- ci: Travis build speed improvements ([#504](https://github.com/Workday/canvas-kit/pull/504)) [@lychyi](https://github.com/lychyi)

### Components
- feat(radio): Add theming support ([#457](https://github.com/Workday/canvas-kit/pull/457)) [@anicholls](https://github.com/anicholls)
- feat(switch): Add theming support ([#465](https://github.com/Workday/canvas-kit/pull/465)) [@anicholls](https://github.com/anicholls)
- test(button): Add static state tables for all Button components ([#469](https://github.com/Workday/canvas-kit/pull/469)) [@anicholls](https://github.com/anicholls)
- feat(pagination): Add pagination component to labs ([#301](https://github.com/Workday/canvas-kit/pull/301)) [@nikolasjchaconas](https://github.com/nikolasjchaconas)
- feat(drawer): Make the close icon in DrawerHeader optional ([#507](https://github.com/Workday/canvas-kit/pull/507)) [@devonsoto77](https://github.com/devonsoto77)

## 3.4.0 (2020-02-19)

### Infrastructure
- ci: Add check for missing or unused dependencies ([#437](https://github.com/Workday/canvas-kit/pull/437)) [@anicholls](https://github.com/anicholls)
- chore: Change nvmrc to use lts/dubnium ([#441](https://github.com/Workday/canvas-kit/pull/441)) [@lychyi](https://github.com/lychyi)
- chore: Update Cypress/Storybook integration to use cypress-storybook ([#439](https://github.com/Workday/canvas-kit/pull/439)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add canary build script on master commit/merge ([#443](https://github.com/Workday/canvas-kit/pull/443)) [@anicholls](https://github.com/anicholls)
- ci: Fix canary build null version error ([#444](https://github.com/Workday/canvas-kit/pull/444)) [@anicholls](https://github.com/anicholls)
- ci: Run canary publish on master commit instead of tag ([#446](https://github.com/Workday/canvas-kit/pull/446)) [@anicholls](https://github.com/anicholls)
- test: Add @testing-library/cypress to the project ([#442](https://github.com/Workday/canvas-kit/pull/442)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Use correct module names in readmes for labs components ([#445](https://github.com/Workday/canvas-kit/pull/445)) [@anicholls](https://github.com/anicholls)
- ci: Force publish all modules instead of relying on version check ([#448](https://github.com/Workday/canvas-kit/pull/448)) [@anicholls](https://github.com/anicholls)
- ci: Disable git clone depth ([#449](https://github.com/Workday/canvas-kit/pull/449)) [@anicholls](https://github.com/anicholls)
- chore: Upgrade Cypress to 4.0.0 ([#450](https://github.com/Workday/canvas-kit/pull/450)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Announce canary builds on slack ([#458](https://github.com/Workday/canvas-kit/pull/458)) [@anicholls](https://github.com/anicholls)
- ci: Use node script for publishing canary versions ([#461](https://github.com/Workday/canvas-kit/pull/461)) [@anicholls](https://github.com/anicholls)
- ci: Pull canary version from lerna publish logs instead of lerna.json ([#463](https://github.com/Workday/canvas-kit/pull/463)) [@anicholls](https://github.com/anicholls)
- ci: Fix undefined variable in canary publish ([#464](https://github.com/Workday/canvas-kit/pull/464)) [@anicholls](https://github.com/anicholls)
- ci: Fix testing mistake with canary publish ([#466](https://github.com/Workday/canvas-kit/pull/466)) [@anicholls](https://github.com/anicholls)
- ci: Take quieter lerna output into account in canary publish ([#467](https://github.com/Workday/canvas-kit/pull/467)) [@anicholls](https://github.com/anicholls)

### Components
- test(color-picker): Add tests and convert them to react-testing-library ([#407](https://github.com/Workday/canvas-kit/pull/407)) [@sahlhoff](https://github.com/sahlhoff)
- test(text-area): Change tests to react-testing-library and improve coverage ([#394](https://github.com/Workday/canvas-kit/pull/394)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(popup): Fix responsiveness for popup ([#438](https://github.com/Workday/canvas-kit/pull/438)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(radio): Update checked dot position to scale properly ([#393](https://github.com/Workday/canvas-kit/pull/393)) [@erik-vanlankvelt](https://github.com/erik-vanlankvelt)
- fix(icon): Remove React dependency from CSS kit ([#447](https://github.com/Workday/canvas-kit/pull/447)) [@jamesfan](https://github.com/jamesfan)
- test(radio): Change tests to react-testing-library and improve coverage ([#381](https://github.com/Workday/canvas-kit/pull/381)) [@mannycarrera4](https://github.com/mannycarrera4)
- test(select): Change tests to react-testing-library and improve coverage ([#412](https://github.com/Workday/canvas-kit/pull/412)) [@jamesfan](https://github.com/jamesfan)
- feat(text-input): Add theming to Text Input ([#411](https://github.com/Workday/canvas-kit/pull/411)) [@mannycarrera4](https://github.com/mannycarrera4)
- docs(labs): Fix broken link on  ComboBox Readme ([#455](https://github.com/Workday/canvas-kit/pull/455)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(checkbox): Add theming support ([#456](https://github.com/Workday/canvas-kit/pull/456)) [@anicholls](https://github.com/anicholls)
- fix(button): Avoid using transition: all for buttons ([#460](https://github.com/Workday/canvas-kit/pull/460)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(text-area): Add theming support ([#459](https://github.com/Workday/canvas-kit/pull/459)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(button): Fix Component Selector Issue ([#474](https://github.com/Workday/canvas-kit/pull/474)) [@lychyi](https://github.com/lychyi)
- fix(icon): Support second accent layer ([#475](https://github.com/Workday/canvas-kit/pull/475)) [@mannycarrera4](https://github.com/mannycarrera4)

## 3.3.2 (2020-01-29)

### Infrastructure:
- docs: Add test documentation ([#382](https://github.com/Workday/canvas-kit/pull/382)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Correct Changelog ([#433](https://github.com/Workday/canvas-kit/pull/433)) [@lychyi](https://github.com/lychyi)

### Components:
- fix: Add missing labs-core imports ([#435](https://github.com/Workday/canvas-kit/pull/435)) [@anicholls](https://github.com/anicholls)


## 3.3.1 (2020-01-28)

### Components:
- test(switch): Redo switch tests in react-testing-library ([#386](https://github.com/Workday/canvas-kit/pull/386)) [@lychyi](https://github.com/lychyi)
- fix(labs): Remove global type from useTheme hook ([#430](https://github.com/Workday/canvas-kit/pull/430)) [@lychyi](https://github.com/lychyi)

## 3.3.0 (2020-01-03)

### Infrastructure:
- chore: Update Storybook Chromatic ([#397](https://github.com/Workday/canvas-kit/pull/397)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Add missing rtl-css-js dependency ([#399](https://github.com/Workday/canvas-kit/pull/399)) [@josephnle](https://github.com/josephnle)
- docs: Fix Storybook iframe rendering ([#401](https://github.com/Workday/canvas-kit/pull/401)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Increase storybook test timeout ([#402](https://github.com/Workday/canvas-kit/pull/402)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix Wallaby config for labs components ([#403](https://github.com/Workday/canvas-kit/pull/403)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Upgrade to Chromatic 2.0 ([#405](https://github.com/Workday/canvas-kit/pull/405)) [@NicholasBoll](https://github.com/NicholasBoll)
- test: Fix StaticStatesTable row check ([#415](https://github.com/Workday/canvas-kit/pull/415)) [@anicholls](https://github.com/anicholls)
- refactor: Update StaticStatesTable to be more flexible ([#418](https://github.com/Workday/canvas-kit/pull/418)) [@anicholls](https://github.com/anicholls)
- ci: Add Chroma v1 for cross-browser visual regression ([#421](https://github.com/Workday/canvas-kit/pull/421)) [@NicholasBoll](https://github.com/NicholasBoll)
- test: Add tests for permutateProps utility function ([#424](https://github.com/Workday/canvas-kit/pull/424)) [@anicholls](https://github.com/anicholls)

### Components:
- fix(text-input): Removed the "clear" button on text input in IE 11 ([#396](https://github.com/Workday/canvas-kit/pull/396)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)
- feat: Add bidirectionality support to input components ([#337](https://github.com/Workday/canvas-kit/pull/337)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat(button): Add support for icons in CSS buttons ([#353](https://github.com/Workday/canvas-kit/pull/353)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(select): Includes Select to CKR main exports ([#410](https://github.com/Workday/canvas-kit/pull/410)) [@sahlhoff](https://github.com/sahlhoff)
- fix(combobox): default to using ARIA 1.0 spec ([#380](https://github.com/Workday/canvas-kit/pull/380)) [@vibdev](https://github.com/vibdev)
- test(checkbox): Change tests to react-testing-library and improve coverage ([#372](https://github.com/Workday/canvas-kit/pull/372)) [@anicholls](https://github.com/anicholls)
- fix(toast): Fix typo in success message story ([#417](https://github.com/Workday/canvas-kit/pull/417)) [@zorfling](https://github.com/zorfling)
- docs: Audit prop descriptions ([#326](https://github.com/Workday/canvas-kit/pull/326)) [@sahlhoff](https://github.com/sahlhoff)
- test(text-input): Change tests to react-testing-library and improve coverage ([#390](https://github.com/Workday/canvas-kit/pull/390)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(form-field): Provide translation props for alert and error labels ([#423](https://github.com/Workday/canvas-kit/pull/423)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(button): Address issues with various IconButton states ([#271](https://github.com/Workday/canvas-kit/pull/271)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(header): Allow elements to flex correctly in IE11 ([#427](https://github.com/Workday/canvas-kit/pull/427)) [@lychyi](https://github.com/lychyi)

## 3.2.0 (2020-01-03)

### Infrastructure:
- chore: Use proper prettier file in configs ([#348](https://github.com/Workday/canvas-kit/pull/348)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)
- docs: Update Storybook IA ([#300](https://github.com/Workday/canvas-kit/pull/300)) [@sahlhoff](https://github.com/sahlhoff)
- docs: Update incorrect story category for deprecated CSS buttons ([#355](https://github.com/Workday/canvas-kit/pull/355)) [@sahlhoff](https://github.com/sahlhoff)
- docs: Fix Storybook category for CSS Text Input (Left Label) ([#357](https://github.com/Workday/canvas-kit/pull/357)) [@jamesfan](https://github.com/jamesfan)
- fix: Update storybook so knobs work as expected ([#384](https://github.com/Workday/canvas-kit/pull/384)) [@vibdev](https://github.com/vibdev)
- fix:  Build Storybook for IE11 ([#370](https://github.com/Workday/canvas-kit/pull/370)) [@lychyi](https://github.com/lychyi)
- chore: Add StaticStates wrapper ([#377](https://github.com/Workday/canvas-kit/pull/377)) [@mannycarrera4](https://github.com/mannycarrera4)
- build(deps): Bump handlebars from 4.1.2 to 4.5.3 ([#388](https://github.com/Workday/canvas-kit/pull/388)) [@dependabot](https://github.com/dependabot)
- chore: Update readme with thankyous ([#395](https://github.com/Workday/canvas-kit/pull/395)) [@lychyi](https://github.com/lychyi)

### Components:
- feat(fonts): Add missing CSS fonts module ([#342](https://github.com/Workday/canvas-kit/pull/342)) [@anicholls](https://github.com/anicholls)
- feat(button): Add text button css ([#335](https://github.com/Workday/canvas-kit/pull/335)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(modal): Update focus-trap library to focus-trap-js ([#328](https://github.com/Workday/canvas-kit/pull/328)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(text-input): Update type of inputRef ([#346](https://github.com/Workday/canvas-kit/pull/346)) [@davvidbaker](https://github.com/davvidbaker)
- feat(labs): Theming (react) ([#272](https://github.com/Workday/canvas-kit/pull/272)) [@anicholls](https://github.com/anicholls)
- fix: Allow icon injecting in shadowDOM ([#345](https://github.com/Workday/canvas-kit/pull/345)) [@vibdev](https://github.com/vibdev)
- fix(labs): Fix theming implementation ([#360](https://github.com/Workday/canvas-kit/pull/360)) [@anicholls](https://github.com/anicholls)
- feat: Add bidirectionality support ([#288](https://github.com/Workday/canvas-kit/pull/288)) [@stephanerangaya](https://github.com/stephanerangaya)
- test: Fix modal specs ([#374](https://github.com/Workday/canvas-kit/pull/374)) [@NicholasBoll](https://github.com/NicholasBoll)

## 3.1.1 (2019-12-02)

### Infrastructure:
- ci: Temporarily convert to TravisCI while billing is being figured out ([#318](https://github.com/Workday/canvas-kit/pull/318)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Exit 0 on ChromaticQA changes ([#325](https://github.com/Workday/canvas-kit/pull/325)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Add missing dependencies to CKCSS universal module ([#322](https://github.com/Workday/canvas-kit/pull/322)) [@jamesfan](https://github.com/jamesfan)
- build: Add Mdx support to webpack config ([#296](https://github.com/Workday/canvas-kit/pull/296)) [@sahlhoff](https://github.com/sahlhoff)

### Components:
- fix(side-panel): Add flexibility for aria attributes ([#327](https://github.com/Workday/canvas-kit/pull/327)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(modal): Add z-index to modal ([#331](https://github.com/Workday/canvas-kit/pull/331)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(menu): Fix import of React dependency. ([#334](https://github.com/Workday/canvas-kit/pull/334)) [@jsievenpiper](https://github.com/jsievenpiper)
- docs: Fix Component Status table ([#332](https://github.com/Workday/canvas-kit/pull/332)) [@jpante](https://github.com/jpante)
- fix(common): bad quote marks on accessible hide CSS ([#344](https://github.com/Workday/canvas-kit/pull/344)) [@vibdev](https://github.com/vibdev)

## 3.1.0 (2019-11-11)

### Infrastructure:
- build: Upgrade Storybook to 5.2 ([#267](https://github.com/Workday/canvas-kit/pull/267)) [@sahlhoff](https://github.com/sahlhoff)
- test: Add dependencies sync check ([#292](https://github.com/Workday/canvas-kit/pull/292)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Add wallaby config ([#297](https://github.com/Workday/canvas-kit/pull/297)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update chromatic master job ([#299](https://github.com/Workday/canvas-kit/pull/299)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Add browser support section ([#287](https://github.com/Workday/canvas-kit/pull/287)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Add missing tilde on SASS imports and update Canvas Kit CSS usage README ([#307](https://github.com/Workday/canvas-kit/pull/307)) (#308) [@vibdev](https://github.com/vibdev)

### Components:
- fix(icon): Add index.scss to package.json for css icon ([#306](https://github.com/Workday/canvas-kit/pull/306)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(labs): Add Drawer component ([#277](https://github.com/Workday/canvas-kit/pull/277)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(side-panel): Change width of children container when closed ([#304](https://github.com/Workday/canvas-kit/pull/304)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix: Rename -webkit-font-smoothing- to WebkitFontSmoothing ([#298](https://github.com/Workday/canvas-kit/pull/298)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(common): Port accessible hide styles from JS to CSS ([#310](https://github.com/Workday/canvas-kit/pull/310)) [@vibdev](https://github.com/vibdev)

## 3.0.1 (2019-11-01)

### Infrastructure
- fix(labs): Update incorrect emotion version in labs core ([#290](https://github.com/Workday/canvas-kit/pull/290)) [@anicholls](https://github.com/anicholls)
- fix: Add @emotion/is-prop-valid to components that need it ([#289](https://github.com/Workday/canvas-kit/pull/289)) [@anicholls](https://github.com/anicholls)

## 3.0.0 (2019-10-30)

### Infrastructure:
- ci: Update ChromaticQA for better baselines ([#269](https://github.com/Workday/canvas-kit/pull/269)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Update to use chroma/action ([#273](https://github.com/Workday/canvas-kit/pull/273)) [@NicholasBoll](https://github.com/NicholasBoll)
- test: Add axe to Cypress tests ([#274](https://github.com/Workday/canvas-kit/pull/274)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Resolve lint and test warnings ([#276](https://github.com/Workday/canvas-kit/pull/276)) [@anicholls](https://github.com/anicholls)
- fix: Add authors to 3.0.0-beta release changelog ([#281](https://github.com/Workday/canvas-kit/pull/281)) [@mannycarrera4](https://github.com/mannycarrera4)

### Components:
- fix(layout): Add shouldForwardProp to Layout and Column components ([#265](https://github.com/Workday/canvas-kit/pull/265)) [@sahlhoff](https://github.com/sahlhoff)
- fix(header): Support onMenuClick without menuToggle ([#268](https://github.com/Workday/canvas-kit/pull/268)) [@jamesfan](https://github.com/jamesfan)
- fix(button): Update missed css styles for buttons ([#260](https://github.com/Workday/canvas-kit/pull/260)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat: Add support for translation ([#251](https://github.com/Workday/canvas-kit/pull/251)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(checkbox): Added an indeterminate checkbox type ([#275](https://github.com/Workday/canvas-kit/pull/275)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)
- feat(button): Utilize input provider for mouse input focus ([#280](https://github.com/Workday/canvas-kit/pull/280)) [@anicholls](https://github.com/anicholls)
- refactor(Header): Move search out and create combobox component ([#157](https://github.com/Workday/canvas-kit/pull/157)) [@vibdev](https://github.com/vibdev)

### Breaking Changes:
- chore: Upgrade to Emotion 10 ([#246](https://github.com/Workday/canvas-kit/pull/246)) [@anicholls](https://github.com/anicholls)

## 3.0.0-beta.1 (2019-10-14)

### Infrastructure:
- ci: Fix fork failures ([#241](https://github.com/Workday/canvas-kit/pull/241)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Fix Cypress tests (maybe?) ([#248](https://github.com/Workday/canvas-kit/pull/248)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add ChromaticQA to CI ([#254](https://github.com/Workday/canvas-kit/pull/254)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Remove Travis from pull requests ([#258](https://github.com/Workday/canvas-kit/pull/258)) [@NicholasBoll](https://github.com/NicholasBoll)
- build: Replace TSLint with ESLint ([#242](https://github.com/Workday/canvas-kit/pull/242)) [@anicholls](https://github.com/anicholls)
- chore: Remove snapshot tests ([#259](https://github.com/Workday/canvas-kit/pull/259)) [@NicholasBoll](https://github.com/NicholasBoll)

### Components:
- chore(core): Add react-emotion as a dep ([#256](https://github.com/Workday/canvas-kit/pull/256)) [@lychyi](https://github.com/lychyi)
- fix(toast): Fix background color on Safari ([#245](https://github.com/Workday/canvas-kit/pull/245)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(layout): Compensate column width calculations ([#238](https://github.com/Workday/canvas-kit/pull/238)) [@sahlhoff](https://github.com/sahlhoff)

### Breaking Changes:
- fix(skeleton): Remove z-index ([#257](https://github.com/Workday/canvas-kit/pull/257)) [@lychyi](https://github.com/lychyi)

## 3.0.0-beta.0 (2019-10-07)

### Infrastructure:
- docs: Update component_status.md
- ci: Create github action for CI and add Cypress to CI ([#240](https://github.com/Workday/canvas-kit/pull/240)) [@NicholasBoll](https://github.com/NicholasBoll)

### Components:
- feat(modal): Implement CSS Modal to match React implementation ([#185](https://github.com/Workday/canvas-kit/pull/185)) [@jamesfan](https://github.com/jamesfan)
- refactor: A11y updates for CSS stories and Readmes ([#221](https://github.com/Workday/canvas-kit/pull/221)) [@anicholls](https://github.com/anicholls)
- fix: Address misc. bugs in create-component script ([#232](https://github.com/Workday/canvas-kit/pull/232)) [@anicholls](https://github.com/anicholls)
- fix: Change casing for aria-labelledby attr ([#236](https://github.com/Workday/canvas-kit/pull/236)) [@lychyi](https://github.com/lychyi)
- fix: Move uuid from defaultProps to component instance ([#228](https://github.com/Workday/canvas-kit/pull/228)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(checkbox): Change default id to be unique per instance ([#192](https://github.com/Workday/canvas-kit/pull/192)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(menu): Add Menu example with icons and grow support ([#147](https://github.com/Workday/canvas-kit/pull/147)) [@jamesfan](https://github.com/jamesfan)
- fix(button): Fix accessibility styling for CSS buttons ([#186](https://github.com/Workday/canvas-kit/pull/186)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(menu): Always focus selected menu item and add tab accessibility ([#239](https://github.com/Workday/canvas-kit/pull/239)) [@jayscheidt](https://github.com/jayscheidt)
- refactor(card): Update CSS styles to match React implementation ([#113](https://github.com/Workday/canvas-kit/pull/113)) [@mannycarrera4](https://github.com/mannycarrera4)
- refactor(icon): Update CSS styles to match React implementation ([#159](https://github.com/Workday/canvas-kit/pull/159)) [@jamesfan](https://github.com/jamesfan)
- refactor(tooltip): Update CSS story to match the React version ([#198](https://github.com/Workday/canvas-kit/pull/198)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor: Fix references to react attributes in css readmes

### Breaking Changes:
- fix: Update alert colors and error colors
- test: Add Cypress modal specifications ([#184](https://github.com/Workday/canvas-kit/pull/184)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(button): Promote React beta Button ([#191](https://github.com/Workday/canvas-kit/pull/191)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(button): Add blue css buttons ([#231](https://github.com/Workday/canvas-kit/pull/231)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(core): Add border radius variables to CSS and React ([#204](https://github.com/Workday/canvas-kit/pull/204)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat(banner): Update CSS styles to match React ([#50](https://github.com/Workday/canvas-kit/pull/50)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(tooltip): Update CSS styles to match React implementation ([#49](https://github.com/Workday/canvas-kit/pull/49)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(forms): Split CSS forms module into individual modules ([#24](https://github.com/Workday/canvas-kit/pull/24)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(loading-animation): Update CSS styles to match React implementation ([#83](https://github.com/Workday/canvas-kit/pull/83)) [@jamesfan](https://github.com/jamesfan)
- refactor(menu): Update CSS styles to match React implementation ([#117](https://github.com/Workday/canvas-kit/pull/117)) [@jamesfan](https://github.com/jamesfan)
- refactor(button): Update CSS styles to match React implementation ([#53](https://github.com/Workday/canvas-kit/pull/53)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(button): CSS button fixes ([#156](https://github.com/Workday/canvas-kit/pull/156)) [@anicholls](https://github.com/anicholls)
- refactor(page-header): Refactor CSS to match React implementation ([#151](https://github.com/Workday/canvas-kit/pull/151)) [@mannycarrera4](https://github.com/mannycarrera4)
- refactor(layout): Update CSS naming to match React implementation ([#168](https://github.com/Workday/canvas-kit/pull/168)) [@jamesfan](https://github.com/jamesfan)
- refactor(popup): Refactor CSS to match React implementation ([#155](https://github.com/Workday/canvas-kit/pull/155)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(popup): CSS cleanup ([#188](https://github.com/Workday/canvas-kit/pull/188)) [@anicholls](https://github.com/anicholls)
- refactor(form): Update CSS form styles and structure to match React implementation ([#112](https://github.com/Workday/canvas-kit/pull/112)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(button): Update incorrect delete button colors
- refactor(text-input): Remove error icon in CSS ([#222](https://github.com/Workday/canvas-kit/pull/222)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor: Add components to labs module ([#210](https://github.com/Workday/canvas-kit/pull/210)) [@sahlhoff](https://github.com/sahlhoff)
- fix: Card, Popup and Modal cleanup ([#233](https://github.com/Workday/canvas-kit/pull/233)) [@anicholls](https://github.com/anicholls)
- fix(form): Form field spacing ([#234](https://github.com/Workday/canvas-kit/pull/234)) [@stephanerangaya](https://github.com/stephanerangaya)

## 3.0.0-alpha.9 (2019-09-26)

### Infrastructure:
- feat: Refactor and improve our create-module script ([#211](https://github.com/Workday/canvas-kit/pull/211)) [@anicholls](https://github.com/anicholls)

### Components:
- fix(select): Tighten up onChange typing ([#212](https://github.com/Workday/canvas-kit/pull/212)) [@lychyi](https://github.com/lychyi)
- fix(switch): Hide checkbox input ([#224](https://github.com/Workday/canvas-kit/pull/224)) [@stephanerangaya](https://github.com/stephanerangaya)

### Breaking Changes:
- refactor(text-input): Remove error icon in React ([#218](https://github.com/Workday/canvas-kit/pull/218)) [@MackenzieBerliner-Glasser](https://github.com/MackenzieBerliner-Glasser)

## 3.0.0-alpha.8 (2019-09-24)

### Components:
- fix(avatar): Add AvatarButton component and convert Avatar into ordinary div ([#206](https://github.com/Workday/canvas-kit/pull/206)) [@6r3al](https://github.com/6r3al)

## 3.0.0-alpha.7 (2019-09-19)

### Infrastructure:
- feat: Add Cypress tests to canvas-kit ([#174](https://github.com/Workday/canvas-kit/pull/174)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Bump eslint-utils from 1.3.1 to 1.4.2 ([#176](https://github.com/Workday/canvas-kit/pull/176)) [@dependabot](https://github.com/dependabot)
- chore: Bump lodash-es from 4.17.11 to 4.17.15 ([#177](https://github.com/Workday/canvas-kit/pull/177)) [@dependabot](https://github.com/dependabot)
- chore: Bump lodash.template from 4.4.0 to 4.5.0 ([#178](https://github.com/Workday/canvas-kit/pull/178)) [@dependabot](https://github.com/dependabot)
- chore: Bump jest-axe from 3.1.1 to 3.2.0 ([#179](https://github.com/Workday/canvas-kit/pull/179)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Add faster testing of stories in Cypress ([#183](https://github.com/Workday/canvas-kit/pull/183)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs(core): Fix broken link ([#187](https://github.com/Workday/canvas-kit/pull/187)) [@anicholls](https://github.com/anicholls)

### Components:
- fix: Extend component props with correct interfaces ([#181](https://github.com/Workday/canvas-kit/pull/181)) [@lychyi](https://github.com/lychyi)
- refactor(switch): Add a11y messaging in Readme and move story location ([#197](https://github.com/Workday/canvas-kit/pull/197)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat(form-field): Add red asterisk support for required inputs ([#196](https://github.com/Workday/canvas-kit/pull/196)) [@elliot-at-workday](https://github.com/elliot-at-workday)
- feat(switch): add support for alert and error text ([#203](https://github.com/Workday/canvas-kit/pull/203)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat: Add support for Canvas Kit Labs modules ([#175](https://github.com/Workday/canvas-kit/pull/175)) [@anicholls](https://github.com/anicholls)

### Breaking Changes:
- refactor(side-panel): API update and fixes ([#123](https://github.com/Workday/canvas-kit/pull/123)) [@anicholls](https://github.com/anicholls)
- feat: Standardize elemProps prop spread behavior ([#150](https://github.com/Workday/canvas-kit/pull/150)) [@anicholls](https://github.com/anicholls)
- refactor(table): TableRow API update and cleanup ([#172](https://github.com/Workday/canvas-kit/pull/172)) [@sahlhoff](https://github.com/sahlhoff)
- refactor(button): API Updates ([#129](https://github.com/Workday/canvas-kit/pull/129)) [@anicholls](https://github.com/anicholls)
- refactor(avatar): Change themeColor to variant ([#194](https://github.com/Workday/canvas-kit/pull/194)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(banner): Change BannerTheme to ErrorType ([#195](https://github.com/Workday/canvas-kit/pull/195)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(core): Rename enums to singular ([#199](https://github.com/Workday/canvas-kit/pull/199)) [@mannycarrera4](https://github.com/mannycarrera4)

## 3.0.0-alpha.6 (2019-09-02)

### Infrastructure:
- chore: Fix console warnings in Storybook (#116) @anicholls
- docs: Update contributing git guidelines to reflect new PR strategy (#109) @anicholls
- feat: Reduce number of manual steps required after running create-module.sh (#46) @roblevintennis
- ci: Break out Travis testing to stages (#82) @d-bye
- fix: Add code-coverage to \*.ts files (#148) @NicholasBoll
- chore: Update commit validation to use commitlint (#124) @Patil2099
- feat: Add watch support for faster development (#161) @NicholasBoll

### Components:
- fix(button): Update TextButton focus outline for accessibility (#115) @jstin
- fix(avatar): Update background color when url is defined (#120) @anicholls
- fix(header): Remove duplicate icon buttons (#122) @anicholls
- fix(button): Pass buttonRef to IconButton button element (#128) @mannycarrera4
- fix(menu): Add menu component to universal module (#127) @lychyi
- fix(layout): Add check for null children (#119) @anicholls
- fix(page-header): Add missing dependency (#149) @anicholls
- refactor: Move InputProviderDecorators to Storybook config (#164) @stephanerangaya
- fix: Change positioning of Checkbox and Radio react components to relative (#160) @stephanerangaya
- fix(status-indicator): Export type and emphasis enums (#166) @anicholls

### Breaking Change:
- fix: Add missing static variables and fix Popup padding static variable (#110) @anicholls
- refactor(loading-animation): Deprecate LoadingSpinner (#142) @sahlhoff
- fix(form-field): Add component prefix to exported enums and interfaces #146 @sahlhoff
- refactor(page-header): Update marketing and breakpoint props (#143) @sahlhoff

## 3.0.0-alpha.5 (2019-08-13)

### Infrastructure:

- chore: update lint-staged to v8 (#76) (@Patil2099)

### Components:

- fix(SidePanel): Remove resize event on unmount (#78) (@mannycarrera4)
- fix(Menu): Allow aria role of menu item to be overridden (#75) (@jayscheidt)
- fix(TextArea): Align border color to match other inputs (#66) (@neilpelow)
- fix(Avatar): Change prop spread order to allow for overriding the aria label (#92) (@mannycarrera4)
- feat(Type): Add styled components for type primitives (#106) (@drschulz)
- fix(ActionBar): Match css styles to react action bar (#111) (@mannycarrera4)


## 3.0.0-alpha.4 (2019-08-05)

### Infrastructure:

- fix: Update lodash version to resolve vulnerability (#41)
- ci(travis): Enable tag publishing and re-enable master storybook (#52)
- chore: Pull in version bumps from old release branch (#71)
- build(travis): skip cleanup on npm publish (#79)
- ci(travis): fix npm publish conditional (#81)

### Components:

- fix(Tooltip): Add missing fontFamily property (#47)
- fix(Popper): Spread remainder props on wrapper div (#44)
- feat(menu): Enable MenuItems to skip onClose (#48)
- fix(header): Header search accessibility & prop spread fixes (#43)
- fix(SidePanel): remove resize event handler on unmount (#74)

### Breaking Changes:

- refactor(Icon): Move icon-list from core into icon module (#30)
- refactor(Fonts): Remove @workday/canvas-kit-react-fonts from universal module (#40)
