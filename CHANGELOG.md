# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.1.0 (2019-11-11)

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

# 3.0.1 (2019-11-01)

### Infrastructure
- fix(labs): Update incorrect emotion version in labs core ([#290](https://github.com/Workday/canvas-kit/pull/290)) [@anicholls](https://github.com/anicholls)
- fix: Add @emotion/is-prop-valid to components that need it ([#289](https://github.com/Workday/canvas-kit/pull/289)) [@anicholls](https://github.com/anicholls)

# 3.0.0 (2019-10-30)

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

# 3.0.0-beta.1 (2019-10-14)

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

# 3.0.0-beta.0 (2019-10-07)

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
