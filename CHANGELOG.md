# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0-alpha.9 (2019-09-26)

### Infrastructure:
- feat: Refactor and improve our create-module script ([#211](https://github.com/Workday/canvas-kit/pull/211)) [@anicholls](https://github.com/anicholls)

### Components:
- fix(select): Tighten up onChange typing ([#212](https://github.com/Workday/canvas-kit/pull/212)) [@lychyi](https://github.com/lychyi)
- fix(switch): Hide checkbox input ([#224](https://github.com/Workday/canvas-kit/pull/224)) [@stephanerangaya](https://github.com/stephanerangaya)

### Breaking Changes:
- refactor(text-input): Remove error icon in React ([#218](https://github.com/Workday/canvas-kit/pull/218)) [@MackenzieBerliner-Glasser](https://github.com/MackenzieBerliner-Glasser)

# 3.0.0-alpha.8 (2019-09-24)

### Components:
- fix(avatar): Add AvatarButton component and convert Avatar into ordinary div ([#206](https://github.com/Workday/canvas-kit/pull/206)) [@6r3al](https://github.com/6r3al)

# 3.0.0-alpha.7 (2019-09-19)

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

# 3.0.0-alpha.6 (2019-09-02)

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

# 3.0.0-alpha.5 (2019-08-13)

### Infrastructure:

- chore: update lint-staged to v8 (#76) (@Patil2099)

### Components:

- fix(SidePanel): Remove resize event on unmount (#78) (@mannycarrera4)
- fix(Menu): Allow aria role of menu item to be overridden (#75) (@jayscheidt)
- fix(TextArea): Align border color to match other inputs (#66) (@neilpelow)
- fix(Avatar): Change prop spread order to allow for overriding the aria label (#92) (@mannycarrera4)
- feat(Type): Add styled components for type primitives (#106) (@drschulz)
- fix(ActionBar): Match css styles to react action bar (#111) (@mannycarrera4)


# 3.0.0-alpha.4 (2019-08-05)

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
