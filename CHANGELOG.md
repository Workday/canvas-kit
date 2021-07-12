# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

## 5.0.0 (2021-06-10)

The changes below include the changes made across all 5.0.0 beta and rc versions (`v5.0.0-beta.0 - v5.0.0-rc.0`).

To review the breaking changes made in this release, check out the [v5.0.0 Migration Guide](./modules/docs/mdx/5.0-MIGRATION-GUIDE.mdx). Use our new [codemod utility](./modules/codemod) to make the update as smooth as possible.

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

## v4.8.1 (2021-07-09)

### Components

- fix(combobox): Modify combobox to accept empty string as initialValue ([#1116](https://github.com/Workday/canvas-kit/pull/1116)) [@bsaggese14](https://github.com/bsaggese14)
- fix(tooltip): Fix overflow ellipsis detection ([#1132](https://github.com/Workday/canvas-kit/pull/1132)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(modal): Fix focus trap when Modal contains an iframe ([#1135](https://github.com/Workday/canvas-kit/pull/1135)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix(breadcrumbs): Fix onAction bugs in Breadcrumbs ([#1073](https://github.com/Workday/canvas-kit/pull/1073)) [@alanbsmith](https://github.com/alanbsmith)
- fix(checkbox): Fix Checkbox width bug ([#1139](https://github.com/Workday/canvas-kit/pull/1139)) [@alanbsmith](https://github.com/alanbsmith)

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

## Infrastructure

- chore: Bump y18n from 3.2.1 to 3.2.2 ([#1011](https://github.com/Workday/canvas-kit/pull/1011)) [@dependabot](https://github.com/dependabot)
- chore: Bump elliptic from 6.5.3 to 6.5.4 ([#993](https://github.com/Workday/canvas-kit/pull/993)) [@dependabot](https://github.com/dependabot)
- chore: Upgrade storybook to v6.2.9 ([#1055](https://github.com/Workday/canvas-kit/pull/1055)) [@anicholls](https://github.com/anicholls)
- chore: Bump ssri, ua-parser-js, handlebars, lodash, and hosted-git-info ([#1049](https://github.com/Workday/canvas-kit/pull/1049)) [@dependabot](https://github.com/dependabot)
- ci: Fix font-loading issue by predownloading [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Fix Tooltip flaky visual test ([#1035](https://github.com/Workday/canvas-kit/pull/1035)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Upgrade to node 14 ([#1044](https://github.com/Workday/canvas-kit/pull/1044)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Add package version in Storybook ([#1082](https://github.com/Workday/canvas-kit/pull/1082)) [@mihaelamiches](https://github.com/mihaelamiches)

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
  - This is a breaking change in this Labs component. Please refer to the [migration guide](https://github.com/Workday/canvas-kit/blob/master/modules/labs-react/pagination/react/MIGRATION_GUIDE.md) for more information on how to upgrade.

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

To review the breaking changes made in this release, check out the [v4.0.0 Migration Guide](./modules/docs/mdx/4.0-MIGRATION-GUIDE.mdx).

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
