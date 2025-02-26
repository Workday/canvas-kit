# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [v12.4.8](https://github.com/Workday/canvas-kit/releases/tag/v12.4.8) (2025-02-26)

### Documentation

- docs: Fix Firefox hard-fail on markdown-to-jsx bug ([#3153](https://github.com/Workday/canvas-kit/pull/3153)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v12.4.7](https://github.com/Workday/canvas-kit/releases/tag/v12.4.7) (2025-02-25)

### Infrastructure

- fix(styling): Share a global Emotion instance between CK instances ([#3152](https://github.com/Workday/canvas-kit/pull/3152)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This change shares an Emotion cache instance on the window object. This will fix style merge issues in edge cases where a bundle's base styles override override styles of another bundle. It is unlikely that anyone relies on this broken functionality, but if anyone does, styles may be different. This change will only affect style merging from this release on and will not affect any previous version, so it is an opt-in.


## [v12.4.6](https://github.com/Workday/canvas-kit/releases/tag/v12.4.6) (2025-02-24)

### Components

- fix(combobox): Use focus/blur reconfig vs rewrite for testing library ([#3147](https://github.com/Workday/canvas-kit/pull/3147)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v12.4.5](https://github.com/Workday/canvas-kit/releases/tag/v12.4.5) (2025-02-21)

### Components

- fix: Define stable ref reference in `useComboboxInputConstrained` ([#3145](https://github.com/Workday/canvas-kit/pull/3145)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.4.4](https://github.com/Workday/canvas-kit/releases/tag/v12.4.4) (2025-02-21)

### Documentation

- docs: Add stackblitz support to our example ([#3132](https://github.com/Workday/canvas-kit/pull/3132)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.4.3](https://github.com/Workday/canvas-kit/releases/tag/v12.4.3) (2025-02-20)

### Components

- fix(popup): Fix useReturnFocus to respect tabindex=-1 buttons ([#3141](https://github.com/Workday/canvas-kit/pull/3141)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.2.3](https://github.com/Workday/canvas-kit/releases/tag/v11.2.3) (2025-02-20)

### Components

- fix(popup): Fix useReturnFocus to respect tabindex=-1 buttons ([#3141](https://github.com/Workday/canvas-kit/pull/3141)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v12.4.2](https://github.com/Workday/canvas-kit/releases/tag/v12.4.2) (2025-02-19)

### Documentation

- fix: Update tooltip mdx to correctly render ([#3139](https://github.com/Workday/canvas-kit/pull/3139)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.4.1](https://github.com/Workday/canvas-kit/releases/tag/v12.4.1) (2025-02-19)

### Documentation

- fix: Add missing semicolon to tooltip mdx ([#3138](https://github.com/Workday/canvas-kit/pull/3138)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.4.0](https://github.com/Workday/canvas-kit/releases/tag/v12.4.0) (2025-02-19)




## [v12.3.7](https://github.com/Workday/canvas-kit/releases/tag/v12.3.7) (2025-02-11)

### Components

- fix: Ensure width is passed to Select input ([#3130](https://github.com/Workday/canvas-kit/pull/3130)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.2.2](https://github.com/Workday/canvas-kit/releases/tag/v11.2.2) (2025-02-10)

### Components

- fix: Ensure width is passed to Select input ([#3130](https://github.com/Workday/canvas-kit/pull/3130)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v12.3.6](https://github.com/Workday/canvas-kit/releases/tag/v12.3.6) (2025-02-06)

### Theming

- fix: Remove action tokens from CanvasProvider to allow cascading ([#3125](https://github.com/Workday/canvas-kit/pull/3125)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  The `CanvasProvider` created a cascading barrier for our brand tokens. In the case where `brand.action.**` tokens are defined at the root level, say `:root` in a a CSS file, we want those tokens to cascade through the `CanvasProvider` down to our `PrimaryButton`'s.  To allow this, we've removed them from the `CanvasProvider` and `variables.css`.
  - `@workday/canvas-tokens-web@2.1.1` **removed** `--cnvs-brand-action-**` tokens from our `variables.css` to ensure proper cascading of this token to theme our `PrimaryButton`'s.
  - The `CanvasProvider` has **removed** defaulting `brand.action.**` for theming and is longer a valid theme property on `CanvasTheme` type. 
  - In order to ensure proper cascading of the `--cnvs-brand-action-**` token, you **must** upgrade to the latest version of Canvas Kit `v12` **and** whomever is bootstrapping the `variables.css` **must** upgrade  `@workday/canvas-tokens-web` to `@2.1.1` to ensure correct theming.


## [v12.3.5](https://github.com/Workday/canvas-kit/releases/tag/v12.3.5) (2025-01-28)

### Documentation

- chore: Update banner image on welcome page ([#3113](https://github.com/Workday/canvas-kit/pull/3113)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.3.4](https://github.com/Workday/canvas-kit/releases/tag/v12.3.4) (2025-01-28)




## [v12.3.3](https://github.com/Workday/canvas-kit/releases/tag/v12.3.3) (2025-01-13)

### Documentation

- docs: Refreshing preview SidePanel storybook examples ([#3056](https://github.com/Workday/canvas-kit/pull/3056)) ([@williamjstanton](https://github.com/williamjstanton), William Stanton)


## [v12.3.2](https://github.com/Workday/canvas-kit/releases/tag/v12.3.2) (2025-01-09)

### Components

- fix: Rename index file to correctly export ([#3098](https://github.com/Workday/canvas-kit/pull/3098)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.3.1](https://github.com/Workday/canvas-kit/releases/tag/v12.3.1) (2025-01-09)

### Components

- fix: Update Information Highlight folder name for slash imports ([#3097](https://github.com/Workday/canvas-kit/pull/3097)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.3.0](https://github.com/Workday/canvas-kit/releases/tag/v12.3.0) (2025-01-09)




## [v12.2.2](https://github.com/Workday/canvas-kit/releases/tag/v12.2.2) (2025-01-07)

### Components

- fix: Add overflowWrap on MenuItem ([#3094](https://github.com/Workday/canvas-kit/pull/3094)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.2.1](https://github.com/Workday/canvas-kit/releases/tag/v12.2.1) (2025-01-07)

### Components

- fix: Added CKR Dub and Logo References to preview package ([#3093](https://github.com/Workday/canvas-kit/pull/3093)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v11.2.1](https://github.com/Workday/canvas-kit/releases/tag/v11.2.1) (2025-01-07)

### Components

- fix: Added CKR Dub and Logo References to preview package ([#3093](https://github.com/Workday/canvas-kit/pull/3093)) ([@josh-bagwell](https://github.com/josh-bagwell))
## [v12.2.0](https://github.com/Workday/canvas-kit/releases/tag/v12.2.0) (2025-01-07)

### Components

- feat: Update CKR Dub and Logo References ([#3089](https://github.com/Workday/canvas-kit/pull/3089)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Workday has new logos with updated colors. We've added these to the `preview` package for a smooth transition for consumers. 
  
  If you would like to consume these, here is the import:
  ```tsx
  import {dubLogoPrimary, dubLogoReversed} from '@workday/canvas-kit-preview-react/common'
  ```


## [v11.2.0](https://github.com/Workday/canvas-kit/releases/tag/v11.2.0) (2025-01-07)

### Components

- feat: Update CKR Dub and Logo References ([#3089](https://github.com/Workday/canvas-kit/pull/3089)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Workday has new logos with updated colors. We've added these to the `preview` package for a smooth transition for consumers. 
  
  If you would like to consume these, here is the import:
  ```tsx
  import {dubLogoPrimary, dubLogoReversed} from '@workday/canvas-kit-preview-react/common'
  ```
## [v12.1.16](https://github.com/Workday/canvas-kit/releases/tag/v12.1.16) (2024-12-20)

### Components

- fix(side-panel): Filter out invalid DOM prop ([#3080](https://github.com/Workday/canvas-kit/pull/3080)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Dependencies

- fix: Resolve recast dep from jscodeshift to remove extra parens ([#3083](https://github.com/Workday/canvas-kit/pull/3083)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.1.26](https://github.com/Workday/canvas-kit/releases/tag/v11.1.26) (2024-12-20)

### Components

- fix(side-panel): Filter out invalid DOM prop ([#3080](https://github.com/Workday/canvas-kit/pull/3080)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.1.25](https://github.com/Workday/canvas-kit/releases/tag/v11.1.25) (2024-12-20)

### Dependencies

- fix: Resolve recast dep from jscodeshift to remove extra parens ([#3083](https://github.com/Workday/canvas-kit/pull/3083)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v12.1.15](https://github.com/Workday/canvas-kit/releases/tag/v12.1.15) (2024-12-17)

### Components

- fix: Add pointer events none to Select caret ([#3079](https://github.com/Workday/canvas-kit/pull/3079)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.1.14](https://github.com/Workday/canvas-kit/releases/tag/v12.1.14) (2024-12-17)

### Components

- fix(multi-select): Update selected state when pill is removed ([#3076](https://github.com/Workday/canvas-kit/pull/3076)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v12.1.13](https://github.com/Workday/canvas-kit/releases/tag/v12.1.13) (2024-12-16)




## [v12.1.12](https://github.com/Workday/canvas-kit/releases/tag/v12.1.12) (2024-12-10)

### Documentation

- fix: Fixed Welcome Page ([#3069](https://github.com/Workday/canvas-kit/pull/3069)) ([@josh-bagwell](https://github.com/josh-bagwell))
- fix: Addressed Versions Table Update ([#3071](https://github.com/Workday/canvas-kit/pull/3071)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v12.1.11](https://github.com/Workday/canvas-kit/releases/tag/v12.1.11) (2024-12-10)

### Documentation

- fix: Fixes Broken Links from Storybook 7 Upgrade ([#3065](https://github.com/Workday/canvas-kit/pull/3065)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v12.1.10](https://github.com/Workday/canvas-kit/releases/tag/v12.1.10) (2024-12-09)

### Documentation

- docs: Use slash import in first example ([#3066](https://github.com/Workday/canvas-kit/pull/3066)) ([@vibdev](https://github.com/vibdev))


## [v12.1.9](https://github.com/Workday/canvas-kit/releases/tag/v12.1.9) (2024-12-04)

### Documentation

- docs: Add info to create compound component regarding createComponent ([#3057](https://github.com/Workday/canvas-kit/pull/3057)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))


## [v12.1.8](https://github.com/Workday/canvas-kit/releases/tag/v12.1.8) (2024-12-02)

### Components

- fix: Measure offsetHeight vertical overflow ([#3061](https://github.com/Workday/canvas-kit/pull/3061)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.1.7](https://github.com/Workday/canvas-kit/releases/tag/v12.1.7) (2024-11-27)

### Test

- test: Resolve Cypress Flaky fixes ([#3034](https://github.com/Workday/canvas-kit/pull/3034)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v12.1.6](https://github.com/Workday/canvas-kit/releases/tag/v12.1.6) (2024-11-25)

### Components

- fix: Deconstruct typelevel from props and pass to stencil ([#3059](https://github.com/Workday/canvas-kit/pull/3059)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.1.24](https://github.com/Workday/canvas-kit/releases/tag/v11.1.24) (2024-11-22)

### Components

- fix: Deconstruct typelevel from props and pass to stencil ([#3059](https://github.com/Workday/canvas-kit/pull/3059)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v12.1.5](https://github.com/Workday/canvas-kit/releases/tag/v12.1.5) (2024-11-19)

### Components

- fix: Remove default modifier for formfield label ([#3055](https://github.com/Workday/canvas-kit/pull/3055)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.1.4](https://github.com/Workday/canvas-kit/releases/tag/v12.1.4) (2024-11-14)

### Documentation

- chore: Updated README for CK ([#3052](https://github.com/Workday/canvas-kit/pull/3052)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v12.1.3](https://github.com/Workday/canvas-kit/releases/tag/v12.1.3) (2024-11-13)

### Dependencies

- chore: Upgrade storybook to 7.6.20 to fix vulnerabilities ([#3047](https://github.com/Workday/canvas-kit/pull/3047)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)

### Infrastructure

- fix: Prevent build step in modules from running in parallel ([#3053](https://github.com/Workday/canvas-kit/pull/3053)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.1.2](https://github.com/Workday/canvas-kit/releases/tag/v12.1.2) (2024-11-12)

### Documentation, Examples

- docs: Refreshing GlobalHeader Storybook Example ([#2891](https://github.com/Workday/canvas-kit/pull/2891)) ([@williamjstanton](https://github.com/williamjstanton), William Stanton, manuel.carrera)
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.

### Infrastructure

- fix: Remove start server command from forward merge action ([#3040](https://github.com/Workday/canvas-kit/pull/3040)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.1.1](https://github.com/Workday/canvas-kit/releases/tag/v12.1.1) (2024-11-08)

### Dependencies

- chore: SNYK Security upgrade chroma-js from 2.1.1 to 2.2.0 ([#3043](https://github.com/Workday/canvas-kit/pull/3043)) ([@mannycarrera4](https://github.com/mannycarrera4), [@snyk-bot](https://github.com/snyk-bot), manuel.carrera)


## [v12.1.0](https://github.com/Workday/canvas-kit/releases/tag/v12.1.0) (2024-11-07)




## [v12.0.10](https://github.com/Workday/canvas-kit/releases/tag/v12.0.10) (2024-11-06)

### Components

- fix: SystemIcon supports rem by default ([#3031](https://github.com/Workday/canvas-kit/pull/3031)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Dependencies

- chore: SNYK Security upgrade jscodeshift from 0.14.0 to 17.1.0 ([#3016](https://github.com/Workday/canvas-kit/pull/3016)) ([@mannycarrera4](https://github.com/mannycarrera4), [@snyk-bot](https://github.com/snyk-bot), manuel.carrera)

### Infrastructure

- ci: Update node version in our github actions ([#3009](https://github.com/Workday/canvas-kit/pull/3009)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- fix: Fix Style transform stencil variable lookup ([#3038](https://github.com/Workday/canvas-kit/pull/3038)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.1.23](https://github.com/Workday/canvas-kit/releases/tag/v11.1.23) (2024-11-06)

### Infrastructure

- fix: Fix Style transform stencil variable lookup ([#3038](https://github.com/Workday/canvas-kit/pull/3038)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.1.22](https://github.com/Workday/canvas-kit/releases/tag/v11.1.22) (2024-11-05)

### Components

- fix: SystemIcon supports rem by default ([#3031](https://github.com/Workday/canvas-kit/pull/3031)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v12.0.9](https://github.com/Workday/canvas-kit/releases/tag/v12.0.9) (2024-11-04)

### Components

- fix: Add gap to overflow calculations ([#3029](https://github.com/Workday/canvas-kit/pull/3029)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.1.21](https://github.com/Workday/canvas-kit/releases/tag/v11.1.21) (2024-11-04)

### Components

- fix: Add gap to overflow calculations ([#3029](https://github.com/Workday/canvas-kit/pull/3029)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v12.0.8](https://github.com/Workday/canvas-kit/releases/tag/v12.0.8) (2024-11-04)

### Infrastructure

- ci: Updated forward merge yml ([#3027](https://github.com/Workday/canvas-kit/pull/3027)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v12.0.7](https://github.com/Workday/canvas-kit/releases/tag/v12.0.7) (2024-11-04)

### Components

- fix: Update Select to open with spacebar ([#3006](https://github.com/Workday/canvas-kit/pull/3006)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))
- fix: Add flex gap to overflow list calculations ([#3021](https://github.com/Workday/canvas-kit/pull/3021)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.1.20](https://github.com/Workday/canvas-kit/releases/tag/v11.1.20) (2024-11-04)

### Components

- fix: Add flex gap to overflow list calculations ([#3021](https://github.com/Workday/canvas-kit/pull/3021)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.1.19](https://github.com/Workday/canvas-kit/releases/tag/v11.1.19) (2024-10-28)

### Components

- fix: Update Select to open with spacebar ([#3006](https://github.com/Workday/canvas-kit/pull/3006)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))
## [v12.0.6](https://github.com/Workday/canvas-kit/releases/tag/v12.0.6) (2024-10-24)

### Components

- fix: Ensure button label icon uses rem ([#3001](https://github.com/Workday/canvas-kit/pull/3001)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.1.18](https://github.com/Workday/canvas-kit/releases/tag/v11.1.18) (2024-10-23)

### Components

- fix: Ensure button label icon uses rem ([#3001](https://github.com/Workday/canvas-kit/pull/3001)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v12.0.5](https://github.com/Workday/canvas-kit/releases/tag/v12.0.5) (2024-10-23)

### Documentation

- chore: Button CustomStyles Examples Cleanup ([#2918](https://github.com/Workday/canvas-kit/pull/2918)) ([@josh-bagwell](https://github.com/josh-bagwell), [@mannycarrera4](https://github.com/mannycarrera4))


## [v12.0.4](https://github.com/Workday/canvas-kit/releases/tag/v12.0.4) (2024-10-22)

### Infrastructure

- fix: Remove stale Github actions ([#2999](https://github.com/Workday/canvas-kit/pull/2999)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.0.3](https://github.com/Workday/canvas-kit/releases/tag/v12.0.3) (2024-10-22)

### Codemod

- fix: Add codemod to main index file to export ([#2996](https://github.com/Workday/canvas-kit/pull/2996)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.0.2](https://github.com/Workday/canvas-kit/releases/tag/v12.0.2) (2024-10-21)

### Infrastructure

- fix: Remove duplicate keys from routes ([#2994](https://github.com/Workday/canvas-kit/pull/2994)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.0.1](https://github.com/Workday/canvas-kit/releases/tag/v12.0.1) (2024-10-21)

### Components

- chore: Update deprecated urls to CodeshiftCommunity ([#2977](https://github.com/Workday/canvas-kit/pull/2977)) ([@danieldelcore](https://github.com/danieldelcore))
- fix: Clean up Select file structure and move examples to main react ([#2992](https://github.com/Workday/canvas-kit/pull/2992)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v12.0.0](https://github.com/Workday/canvas-kit/releases/tag/v12.0.0) (2024-10-16)

### BREAKING CHANGES

- [#2793](https://github.com/Workday/canvas-kit/pull/2793) - Avatar no longer uses `SystemIconCircle` for sizing.
  - `Avatar.Size` is no longer supported. The `size` prop type has change to accept the following: `"extraExtraLarge" | "extraLarge" | "large" | "medium" | "small" | "extraSmall" | (string{})`
  - `Avatar.Variant` is no longer supported. Enum `AvatarVariant` has been removed. The `variant` type prop now accepts `"dark" | "light"`
  - The `as` prop now accepts any element, not just `div`.
- [#2674](https://github.com/Workday/canvas-kit/pull/2674) Codemods formatting have been updated and users will need to format their files after the codemod has been used.
- [#2934](https://github.com/Workday/canvas-kit/pull/2934) The newly promoted `FormField` is a
  [compound component](https://workday.github.io/canvas-kit/?path=/docs/guides-compound-components--page).
  Due to the different APIs of the component, this change is **not codemodable**. The following shows
  an example of how to **update** your code to match the new compound component API.
  
  ```tsx
  // v11 FormField in Main
  <FormField
    error={FormField.ErrorType.Alert}
    labelPosition={FormField.LabelPosition.Left}
    useFieldSet={true}
    required={true}
    hintId="hint-alert"
    hintText="Please enter a valid email."
    label="Email"
  >
    <TextInput onChange={handleChange} value={value} />
  </FormField>
  
  // v12 Newly promoted FormField from Preview to Main
  <FormField
    error="error"
    orientation="horizontalStart"
    isRequired={true}
  >
  	<FormField.Label>Email</FormField.Label>
  	<FormField.Field>
  		<FormField.Input as={TextInput} onChange={handleChange} value={value} />
  		<FormField.Hint>Please enter a valid email.</FormField.Hint>
  	</FormField.Field>
  </FormField>
  ```
  
  **Noticeable changes:**
  
  - `error` prop takes in the following values: `"error" | "alert"`.
  - `labelPosition` becomes `orientation` with the following values:
    `"horizontal" | "horizontalStart" | "horizontalEnd" | "vertical"`.
  - `useFieldSet` is no longer valid. If you want to group inputs, use
    [`FormFieldGroup`](#form-field-group) component.
  - `required` becomes `isRequired`.
  - `hintId` is no longer needed. The component handles associating the hint text, label and input
    automatically. If you wish to have a unique `id`, you can add one onto the `FormField` element.
  - `hintText` is no longer a valid prop. Use `FormField.Hint` sub component.
  - `errorLabel` and `alertLabel` are no longer valid props. Customizing your hint text inside of
    `FormField.Hint`.
  - `label` is no longer a valid prop. Use `FormField.Label` sub component to render your label text.
  - Instead of rendering an input, ensure you use `FormField.Input` with the `as` prop. This ensures
    proper error handling and aria attributes for accessibility.
- [#2969](https://github.com/Workday/canvas-kit/pull/2969) We've removed the `MenuItemProps` export from `@workday/canvas-kit-react/menu`. Use `ExtractProps<typeof Menu.Item, never>` instead. We don't mean to export prop interfaces of polymorphic components. The `never` means "don't add element props". The second parameter is used to pass the interface that the `as` prop is pointing to.
- [#2980](https://github.com/Workday/canvas-kit/pull/2980) `elemProps` hooks using `composeHooks` have more accurate type signatures which may lead to new type errors. For information, view our [discussion](https://github.com/Workday/canvas-kit/discussions/2979).
- [#2982](https://github.com/Workday/canvas-kit/pull/2982) A list model's `navigation.getItem()` can return `undefined` if no item is found. Previously it threw an error, which cause many problems. It is now up to the caller to decide what to do with an `undefined` return value

### Components

- chore: Removed Select in Preview ([#2796](https://github.com/Workday/canvas-kit/pull/2796)) ([@thunguyen19](https://github.com/thunguyen19), manuel.carrera, [@mannycarrera4](https://github.com/mannycarrera4))
  We've removed the `Select` component that was in `@workday/canvas-kit-preview-react`. Please use the `Select` in Main (https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--basic) which is a compound component and offers more flexibility.
  
  Thank You Picture 
  
  <img width="497" alt="image" src="https://github.com/Workday/canvas-kit/assets/32447341/3372b8dd-c963-4f7e-84bb-791f0889df57">
- chore: Modal, Dialog, Popup and Toast Styles Refactor ([#2795](https://github.com/Workday/canvas-kit/pull/2795)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Updated `Modal, Dialog, Popup and Toast` to use new `system` tokens and style utilities.
- chore: Removal of InputIconContainer ([#2838](https://github.com/Workday/canvas-kit/pull/2838)) ([@josh-bagwell](https://github.com/josh-bagwell))
  We've removed `InputIconContainer` from Main. Please use [`InputGroup`](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-text-input--icons) from Main instead.
- chore: Refactor TextArea and TextInput with new styling utilities ([#2825](https://github.com/Workday/canvas-kit/pull/2825)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))
  We've updated `TextInput` and `TextArea` to use our new Tokens and styling utilities. The React interface **has not changed**, but CSS variables are now used for dynamic properties.
- chore: Update Avatar to use createStencil and createComponent ([#2793](https://github.com/Workday/canvas-kit/pull/2793)) ([@kaconant](https://github.com/kaconant), krissy.conant, [@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  The Avatar component has been refactored to use our new tokens and styling utilities. The changes below highlight the breaking changes to the API.
- feat: Add horizontal start and end label position for form field ([#2881](https://github.com/Workday/canvas-kit/pull/2881)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell))
  The orientation prop on the FormField component will be updated to accept the following values: `vertical`, `horizontalStart`, and `horizontalEnd`. `horizontal` will still be accepted as a value in v12, but it will be deprecated and slated for removal in a future major release. These changes are intended to provide more flexibility with label alignments on FormField elements.
  
  Instances where the orientation prop of the FormField component is set to `horizontal` will automatically default to `horizontalStart` via a codemod. A console warning message will also appear with a message to change the prop value to either horizontalStart or horizontalEnd.
- chore: Updated unique id generation for classnames ([#2913](https://github.com/Workday/canvas-kit/pull/2913)) ([@josh-bagwell](https://github.com/josh-bagwell), [@mannycarrera4](https://github.com/mannycarrera4))
- chore: Add FormFieldGroup component and density example ([#2865](https://github.com/Workday/canvas-kit/pull/2865)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell), [@RayRedGoose](https://github.com/RayRedGoose))
  - We've added a new `FormFieldGroup` component to use when grouping inputs like checkboxes and radio inputs that need to be associated to one another. Its API matches the `FormField` API where you have `error` prop as well as `id` `isRequired` and `orienation`.
  
  - `orientation` has been added back to `useFormFieldModel` to better support sub component styling.
  
  - Styles have been cleaned up to use `gap` for proper spacing between labels, inputs and hint text.
  
  - Added a new `FormField.Field` component to ensure proper alignment between label and inputs regardless of orientation and hint text. Ensure to wrap your inputs and hint text in this component.
- chore: Revert Select Preview Removal ([#2933](https://github.com/Workday/canvas-kit/pull/2933)) ([@josh-bagwell](https://github.com/josh-bagwell))
- feat(text-input): Support CSS Variables in InputGroup ([#2935](https://github.com/Workday/canvas-kit/pull/2935)) ([@NicholasBoll](https://github.com/NicholasBoll))
- feat: Promote FormField from Preview to Main ([#2934](https://github.com/Workday/canvas-kit/pull/2934)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell))
  We've promoted FormField from [Preview](#preview) to [Main](#main). The following changes have been
  made to provide more flexibility and better explicit components when using inputs.
  
  - The orientation prop on the `FormField` component will be updated to accept the following values:
    `vertical`, `horizontalStart`, and `horizontalEnd`. `horizontal` will still be accepted as a value
    in v12, but it will be deprecated and slated for removal in a future major release. These changes
    are intended to provide more flexibility with label alignments on `FormField` elements.
  
  > **Note**: The horizontal alignment of start and end are relative to its container, meaning start
  > and end match the flex property of `flex-start` and `flex-end`. This is especially applicable for
  > moving between RTL (right-to-left) and LTR (left-to-right) languages.
  
  > **Note:** Orientation "horizontal" has been deprecated. You will see a console warn message
  > suggesting to update your types and usage to `horizontalStart`, `horizontalEnd` or `vertical`.
  
  - `useFormFieldModel`: `orientation` has been added back into `useFormFieldModel`. While we still
    support compat mode due to
    [style merging issues](https://github.com/Workday/canvas-kit/discussions/2893), having orientation
    on the model allows for proper styling of sub components.
  
  - Styles clean up. `FormField.Hint` and `FormField.Label` where using `margin` for spacing. We've
    updated styles so that the containing element uses `gap` for proper spacing.
- fix: Add visual testing for inputs after form field promotion ([#2963](https://github.com/Workday/canvas-kit/pull/2963)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- chore(text-input): Convert `InputGroup` to use Stencils ([#2964](https://github.com/Workday/canvas-kit/pull/2964)) ([@NicholasBoll](https://github.com/NicholasBoll))
- feat(form-field): Add a11y links for non-input fields ([#2967](https://github.com/Workday/canvas-kit/pull/2967)) ([@NicholasBoll](https://github.com/NicholasBoll), manuel.carrera)
- feat(menu): Add `MenuOption` and convert to MenuItem to Stencil ([#2969](https://github.com/Workday/canvas-kit/pull/2969)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Add isHidden to FormField label element ([#2973](https://github.com/Workday/canvas-kit/pull/2973)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell))
  If you want to hide the label but maintain accessibility, add the `isHidden` prop on the `FormField.Label` element.
- fix: Fix mergeProps, createElemPropsHook, and composeHooks types ([#2980](https://github.com/Workday/canvas-kit/pull/2980)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Remove useResizeObserver hack ([#2981](https://github.com/Workday/canvas-kit/pull/2981)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Collection navigation getItem can return undefined ([#2982](https://github.com/Workday/canvas-kit/pull/2982)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Fix InputGroup inner end width calculations ([#2984](https://github.com/Workday/canvas-kit/pull/2984)) ([@NicholasBoll](https://github.com/NicholasBoll))
- refactor(select): Fix all syncing issues with the Select component ([#2983](https://github.com/Workday/canvas-kit/pull/2983)) ([@NicholasBoll](https://github.com/NicholasBoll))
- feat: Add a MultiSelect component ([#2911](https://github.com/Workday/canvas-kit/pull/2911)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Documentation

- chore: Upgrade Guide Cleanup  ([#2936](https://github.com/Workday/canvas-kit/pull/2936)) ([@josh-bagwell](https://github.com/josh-bagwell))
- chore: Fix for ExampleCodeBlock ([#2938](https://github.com/Workday/canvas-kit/pull/2938)) ([@josh-bagwell](https://github.com/josh-bagwell), manuel.carrera)
- docs: Fix Markdown tables ([#2986](https://github.com/Workday/canvas-kit/pull/2986)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Storybook sidebar theme ([#2987](https://github.com/Workday/canvas-kit/pull/2987)) ([@jaclynjessup](https://github.com/jaclynjessup))

### Infrastructure

- chore: Upgrade Storybook and Webpack ([#2674](https://github.com/Workday/canvas-kit/pull/2674)) ([@RayRedGoose](https://github.com/RayRedGoose), [@NicholasBoll](https://github.com/NicholasBoll), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell))
  - In Storybook, each component now has a "Docs" page. This is dedicated to documentation of the component and has examples as it did before. 
  - We now use the Cypress Component runner and not e2e.
  - Codemod formatting has been updated with a dependency update and docs have been added to reflect the formatting issue. 
  
  The following have been upgraded:
  - Storybook 7
  - Webpack 5 
  - Typescript 4.9
  - Cypress 13
- fix: Update comment for canary action ([#2950](https://github.com/Workday/canvas-kit/pull/2950)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- fix: Update routes path ([#2966](https://github.com/Workday/canvas-kit/pull/2966)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- fix: Try to fix canary build ([#2970](https://github.com/Workday/canvas-kit/pull/2970)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- ci: Fix build script ([#2985](https://github.com/Workday/canvas-kit/pull/2985)) ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix tspc command ([@NicholasBoll](https://github.com/NicholasBoll))

### Styling

- feat(styling): Add support for fallthrough modifiers ([#2944](https://github.com/Workday/canvas-kit/pull/2944)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.1.17](https://github.com/Workday/canvas-kit/releases/tag/v11.1.17) (2024-10-11)

### Components

- fix: Unbroken String Overflow Menu Item Fix ([#2975](https://github.com/Workday/canvas-kit/pull/2975)) ([@josh-bagwell](https://github.com/josh-bagwell))
  A fix to Menu Item to break a long unbroken string for `Select`.


## [v10.3.63](https://github.com/Workday/canvas-kit/releases/tag/v10.3.63) (2024-10-10)

### Components

- fix: Unbroken String Overflow Menu Item Fix ([#2975](https://github.com/Workday/canvas-kit/pull/2975)) ([@josh-bagwell](https://github.com/josh-bagwell))
  A fix to Menu Item to break a long unbroken string for `Select`.


## [v11.1.16](https://github.com/Workday/canvas-kit/releases/tag/v11.1.16) (2024-10-07)

### Components

- chore: Fixed Button Style Merge Issue ([#2951](https://github.com/Workday/canvas-kit/pull/2951)) ([@josh-bagwell](https://github.com/josh-bagwell), manuel.carrera)
  Updates Button variants to fix merge style issue.


## [v11.1.15](https://github.com/Workday/canvas-kit/releases/tag/v11.1.15) (2024-10-07)

### Infrastructure

- fix: Remove extract docs in canary to prevent exceeding limit ([#2948](https://github.com/Workday/canvas-kit/pull/2948)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)

### Styling

- fix: Support false modifier values ([#2952](https://github.com/Workday/canvas-kit/pull/2952)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.62](https://github.com/Workday/canvas-kit/releases/tag/v10.3.62) (2024-10-02)
## [v11.1.14](https://github.com/Workday/canvas-kit/releases/tag/v11.1.14) (2024-10-02)

### Components

- fix: Update BaseButton to use correct theming color for focus ring ([#2942](https://github.com/Workday/canvas-kit/pull/2942)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Fixes theming for the `BaseButton` within `Pagination`.


## [v10.3.62](https://github.com/Workday/canvas-kit/releases/tag/v10.3.62) (2024-10-02)

### Components

- fix: Update BaseButton to use correct theming color for focus ring ([#2942](https://github.com/Workday/canvas-kit/pull/2942)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Fixes theming for the `BaseButton` within `Pagination`.
## [v11.1.13](https://github.com/Workday/canvas-kit/releases/tag/v11.1.13) (2024-09-19)

### Components

- fix: Allow inherit background color on system icon ([#2932](https://github.com/Workday/canvas-kit/pull/2932)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.1.12](https://github.com/Workday/canvas-kit/releases/tag/v11.1.12) (2024-09-18)

### Components

- fix(search-form): Show ellipsis when placeholder overflows ([#2927](https://github.com/Workday/canvas-kit/pull/2927)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.61](https://github.com/Workday/canvas-kit/releases/tag/v10.3.61) (2024-09-17)

### Components

- fix(search-form): Show ellipsis when placeholder overflows ([#2927](https://github.com/Workday/canvas-kit/pull/2927)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v11.1.11](https://github.com/Workday/canvas-kit/releases/tag/v11.1.11) (2024-09-16)

### Components

- fix: Handle empty stack ref in useAssistiveHideSiblings ([#2920](https://github.com/Workday/canvas-kit/pull/2920)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.60](https://github.com/Workday/canvas-kit/releases/tag/v10.3.60) (2024-09-16)

### Components

- fix: Handle empty stack ref in useAssistiveHideSiblings ([#2920](https://github.com/Workday/canvas-kit/pull/2920)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v11.1.10](https://github.com/Workday/canvas-kit/releases/tag/v11.1.10) (2024-09-16)




## [v11.1.9](https://github.com/Workday/canvas-kit/releases/tag/v11.1.9) (2024-09-16)

### Documentation, examples

- docs: Fixing NotificationBadge storybook example ([#2903](https://github.com/Workday/canvas-kit/pull/2903)) ([@williamjstanton](https://github.com/williamjstanton), William Stanton)


## [v11.1.8](https://github.com/Workday/canvas-kit/releases/tag/v11.1.8) (2024-09-06)

### Components

- fix: Updated ButtonColors interface to deprecated focusRing from focus ([#2906](https://github.com/Workday/canvas-kit/pull/2906)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Deprecated the use of focusRing within focus in the colors prop on buttons as this does not work with our current styling methods. Added support for boxShadowInner and boxShadowOuter within focus in colors prop.


## [v10.3.59](https://github.com/Workday/canvas-kit/releases/tag/v10.3.59) (2024-09-06)

### Components

- fix: Updated ButtonColors interface to deprecated focusRing from focus ([#2906](https://github.com/Workday/canvas-kit/pull/2906)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Deprecated the use of focusRing within focus in the colors prop on buttons as this does not work with our current styling methods. Added support for boxShadowInner and boxShadowOuter within focus in colors prop.
## [v11.1.7](https://github.com/Workday/canvas-kit/releases/tag/v11.1.7) (2024-08-29)

### Accessibility

- fix(color-picker): Add support for a11y labels on color swatches  ([#2894](https://github.com/Workday/canvas-kit/pull/2894)) ([@wooksauce](https://github.com/wooksauce), Kiwook Kwon)


## [v11.1.6](https://github.com/Workday/canvas-kit/releases/tag/v11.1.6) (2024-08-27)

### Components

- fix: Make overflow items inert ([#2886](https://github.com/Workday/canvas-kit/pull/2886)) ([@NicholasBoll](https://github.com/NicholasBoll), manuel.carrera)
- fix(select): Forward ref to Select input ([#2892](https://github.com/Workday/canvas-kit/pull/2892)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)

### Infrastructure

- fix: Enable styling compat mode to ensure proper style merging ([#2890](https://github.com/Workday/canvas-kit/pull/2890)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  We're seeing style merging issues when using createStyles or createStencil. It only happens when every style override of the element uses these utilities and @emotion/react or @emotion/styled is not used on the same element. These utilities rely on module execution order and we're having a few reports where modules are possibly executing out of order. In order to allow everyone to use createStyles and createStencil without worrying about style merge issues, we're going to enable compat mode all the time. We'll look into possible out-of-order execution issues in the future and plan to re-enable full static mode (for better performance) once we know why this is happening and have a proper workaround.
  
  For more information, please read our [discussion](https://github.com/Workday/canvas-kit/discussions/2893)


## [v10.3.58](https://github.com/Workday/canvas-kit/releases/tag/v10.3.58) (2024-08-27)

### Components

- fix(select): Forward ref to Select input ([#2892](https://github.com/Workday/canvas-kit/pull/2892)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.3.57](https://github.com/Workday/canvas-kit/releases/tag/v10.3.57) (2024-08-27)

### Components

- fix: Make overflow items inert ([#2886](https://github.com/Workday/canvas-kit/pull/2886)) ([@NicholasBoll](https://github.com/NicholasBoll), manuel.carrera)


## [v10.3.56](https://github.com/Workday/canvas-kit/releases/tag/v10.3.56) (2024-08-27)

### Infrastructure

- fix: Enable styling compat mode to ensure proper style merging ([#2890](https://github.com/Workday/canvas-kit/pull/2890)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  We're seeing style merging issues when using createStyles or createStencil. It only happens when every style override of the element uses these utilities and @emotion/react or @emotion/styled is not used on the same element. These utilities rely on module execution order and we're having a few reports where modules are possibly executing out of order. In order to allow everyone to use createStyles and createStencil without worrying about style merge issues, we're going to enable compat mode all the time. We'll look into possible out-of-order execution issues in the future and plan to re-enable full static mode (for better performance) once we know why this is happening and have a proper workaround.
  
  For more information, please read our [discussion](https://github.com/Workday/canvas-kit/discussions/2893)
## [v11.1.5](https://github.com/Workday/canvas-kit/releases/tag/v11.1.5) (2024-08-23)

### Components

- fix(combobox): Show selected state when multiple is enabled ([#2882](https://github.com/Workday/canvas-kit/pull/2882)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.55](https://github.com/Workday/canvas-kit/releases/tag/v10.3.55) (2024-08-22)

### Components

- fix(combobox): Show selected state when multiple is enabled ([#2882](https://github.com/Workday/canvas-kit/pull/2882)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v11.1.4](https://github.com/Workday/canvas-kit/releases/tag/v11.1.4) (2024-08-21)

### Documentation

- docs: Update CanvasProvider info on install page ([#2878](https://github.com/Workday/canvas-kit/pull/2878)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@alanbsmith](https://github.com/alanbsmith))


## [v10.3.54](https://github.com/Workday/canvas-kit/releases/tag/v10.3.54) (2024-08-21)

### Documentation

- docs: Update CanvasProvider info on install page ([#2878](https://github.com/Workday/canvas-kit/pull/2878)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@alanbsmith](https://github.com/alanbsmith))
## [v11.1.3](https://github.com/Workday/canvas-kit/releases/tag/v11.1.3) (2024-08-20)

### Components

- fix: Update select to trigger onChange ([#2874](https://github.com/Workday/canvas-kit/pull/2874)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.3.53](https://github.com/Workday/canvas-kit/releases/tag/v10.3.53) (2024-08-20)

### Components

- fix: Update select to trigger onChange ([#2874](https://github.com/Workday/canvas-kit/pull/2874)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v11.1.2](https://github.com/Workday/canvas-kit/releases/tag/v11.1.2) (2024-08-20)




## [v11.1.1](https://github.com/Workday/canvas-kit/releases/tag/v11.1.1) (2024-08-20)

### Components

- fix(select): Clicking the input closes the menu ([#2869](https://github.com/Workday/canvas-kit/pull/2869)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.52](https://github.com/Workday/canvas-kit/releases/tag/v10.3.52) (2024-08-14)

### Components

- fix(select): Clicking the input closes the menu ([#2869](https://github.com/Workday/canvas-kit/pull/2869)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v11.1.0](https://github.com/Workday/canvas-kit/releases/tag/v11.1.0) (2024-08-14)




## [v11.0.27](https://github.com/Workday/canvas-kit/releases/tag/v11.0.27) (2024-08-12)

### Components

- fix(Checkbox): Remove console warning ([#2863](https://github.com/Workday/canvas-kit/pull/2863)) ([@thunguyen19](https://github.com/thunguyen19))


## [v11.0.26](https://github.com/Workday/canvas-kit/releases/tag/v11.0.26) (2024-08-05)

### Accessibility

- fix: Set aria-modal to false for better accessibility ([#2855](https://github.com/Workday/canvas-kit/pull/2855)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.3.51](https://github.com/Workday/canvas-kit/releases/tag/v10.3.51) (2024-08-05)

### Accessibility

- fix: Set aria-modal to false for better accessibility ([#2855](https://github.com/Workday/canvas-kit/pull/2855)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v11.0.25](https://github.com/Workday/canvas-kit/releases/tag/v11.0.25) (2024-08-05)

### Components

- fix(combobox): Use correct state for aria-selected ([#2849](https://github.com/Workday/canvas-kit/pull/2849)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This change fixes `aria-selected` in `Combobox.Menu.Item` components, but this does change the visuals of what is considered "selected". If you have any visual tests that have a screenshot of a selected state, the visual regression will have to be updated. The same is true for DOM-based snapshot tests. `aria-selected="true"` will now be added when an item is selected and not just when the virtual cursor is on the item. If your snapshot captures this DOM state, the snapshot will have to be updated.


## [v10.3.50](https://github.com/Workday/canvas-kit/releases/tag/v10.3.50) (2024-08-05)

### Components

- fix(combobox): Use correct state for aria-selected ([#2849](https://github.com/Workday/canvas-kit/pull/2849)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This change fixes `aria-selected` in `Combobox.Menu.Item` components, but this does change the visuals of what is considered "selected". If you have any visual tests that have a screenshot of a selected state, the visual regression will have to be updated. The same is true for DOM-based snapshot tests. `aria-selected="true"` will now be added when an item is selected and not just when the virtual cursor is on the item. If your snapshot captures this DOM state, the snapshot will have to be updated.
## [v11.0.24](https://github.com/Workday/canvas-kit/releases/tag/v11.0.24) (2024-08-05)

### Components

- fix(SearchForm): Suppress forwarding props warning ([#2850](https://github.com/Workday/canvas-kit/pull/2850)) ([@thunguyen19](https://github.com/thunguyen19), Thu Nguyen)


## [v11.0.23](https://github.com/Workday/canvas-kit/releases/tag/v11.0.23) (2024-07-30)

### Components

- fix: Support marginTop and marginBottom on ListBox ([#2844](https://github.com/Workday/canvas-kit/pull/2844)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.49](https://github.com/Workday/canvas-kit/releases/tag/v10.3.49) (2024-07-29)

### Components

- fix: Support marginTop and marginBottom on ListBox ([#2844](https://github.com/Workday/canvas-kit/pull/2844)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.0.22](https://github.com/Workday/canvas-kit/releases/tag/v11.0.22) (2024-07-29)

### Documentation

- docs: Fix stencil docs typo ([#2847](https://github.com/Workday/canvas-kit/pull/2847)) ([@alanbsmith](https://github.com/alanbsmith))


## [v10.3.48](https://github.com/Workday/canvas-kit/releases/tag/v10.3.48) (2024-07-24)
## [v11.0.21](https://github.com/Workday/canvas-kit/releases/tag/v11.0.21) (2024-07-24)

### Documentation

- fix: Fix Popup ExternalWindow example import ([#2841](https://github.com/Workday/canvas-kit/pull/2841)) ([@jamesfan](https://github.com/jamesfan))


## [v10.3.48](https://github.com/Workday/canvas-kit/releases/tag/v10.3.48) (2024-07-24)

### Documentation

- fix: Fix Popup ExternalWindow example import ([#2841](https://github.com/Workday/canvas-kit/pull/2841)) ([@jamesfan](https://github.com/jamesfan))
## [v11.0.20](https://github.com/Workday/canvas-kit/releases/tag/v11.0.20) (2024-07-22)




## [v10.3.47](https://github.com/Workday/canvas-kit/releases/tag/v10.3.47) (2024-07-22)


## [v11.0.19](https://github.com/Workday/canvas-kit/releases/tag/v11.0.19) (2024-07-19)

### Components

- fix(avatar): Lazy load avatar images ([#2834](https://github.com/Workday/canvas-kit/pull/2834)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Popups render in the target's window ([#2829](https://github.com/Workday/canvas-kit/pull/2829)) ([@NicholasBoll](https://github.com/NicholasBoll), [@mannycarrera4](https://github.com/mannycarrera4))


## [v10.3.46](https://github.com/Workday/canvas-kit/releases/tag/v10.3.46) (2024-07-19)

### Components

- fix: Popups render in the target's window ([#2829](https://github.com/Workday/canvas-kit/pull/2829)) ([@NicholasBoll](https://github.com/NicholasBoll), [@mannycarrera4](https://github.com/mannycarrera4))


## [v10.3.45](https://github.com/Workday/canvas-kit/releases/tag/v10.3.45) (2024-07-18)

### Components

- fix(avatar): Lazy load avatar images ([#2834](https://github.com/Workday/canvas-kit/pull/2834)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v11.0.18](https://github.com/Workday/canvas-kit/releases/tag/v11.0.18) (2024-07-18)

### Components

- fix(avatar): Lazy load avatar images ([#2833](https://github.com/Workday/canvas-kit/pull/2833)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v11.0.17](https://github.com/Workday/canvas-kit/releases/tag/v11.0.17) (2024-07-17)

### Documentation

- docs: Fixing and updating the AriaLiveRegion storybook examples ([#2818](https://github.com/Workday/canvas-kit/pull/2818)) ([@williamjstanton](https://github.com/williamjstanton), William Stanton, [@mannycarrera4](https://github.com/mannycarrera4), [@josh-bagwell](https://github.com/josh-bagwell), manuel.carrera)


## [v11.0.16](https://github.com/Workday/canvas-kit/releases/tag/v11.0.16) (2024-07-17)

### Infrastructure

- chore: SNYK Security upgrade markdown-to-jsx from 6.11.4 to 7.2.0 ([#2826](https://github.com/Workday/canvas-kit/pull/2826)) ([@mannycarrera4](https://github.com/mannycarrera4), [@snyk-bot](https://github.com/snyk-bot), manuel.carrera)


## [v11.0.15](https://github.com/Workday/canvas-kit/releases/tag/v11.0.15) (2024-07-11)

### Components

- fix(select): Add conditional for Select in React.StrictMode ([#2822](https://github.com/Workday/canvas-kit/pull/2822)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.44](https://github.com/Workday/canvas-kit/releases/tag/v10.3.44) (2024-07-10)

### Components

- fix(select): Add conditional for Select in React.StrictMode ([#2822](https://github.com/Workday/canvas-kit/pull/2822)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v11.0.14](https://github.com/Workday/canvas-kit/releases/tag/v11.0.14) (2024-07-10)

### Components

- fix: Upgrade vulnerable packages for security ([#2812](https://github.com/Workday/canvas-kit/pull/2812)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.0.13](https://github.com/Workday/canvas-kit/releases/tag/v11.0.13) (2024-07-09)

### Components

- fix: Prevent style-only props from being forwarded to elements ([#2819](https://github.com/Workday/canvas-kit/pull/2819)) ([@wainokray-ho](https://github.com/wainokray-ho))


## [v11.0.12](https://github.com/Workday/canvas-kit/releases/tag/v11.0.12) (2024-07-08)

### Components

- fix: Fix backwards compatibility with colors prop for buttons ([#2816](https://github.com/Workday/canvas-kit/pull/2816)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)

### Infrastructure

- fix: Revert jscodeshift version ([#2813](https://github.com/Workday/canvas-kit/pull/2813)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.0.11](https://github.com/Workday/canvas-kit/releases/tag/v11.0.11) (2024-06-26)

### Infrastructure

- chore: Update SNYK deps to non vulnerable versions ([#2784](https://github.com/Workday/canvas-kit/pull/2784)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Fix some security issues found by SNYK in our codemod package.


## [v11.0.10](https://github.com/Workday/canvas-kit/releases/tag/v11.0.10) (2024-06-26)

### Components

- fix: Grow Prop Fix for Buttons ([#2790](https://github.com/Workday/canvas-kit/pull/2790)) ([@josh-bagwell](https://github.com/josh-bagwell), [@mannycarrera4](https://github.com/mannycarrera4))


## [v10.3.43](https://github.com/Workday/canvas-kit/releases/tag/v10.3.43) (2024-06-25)

### Components

- fix: Grow Prop Fix for Buttons ([#2790](https://github.com/Workday/canvas-kit/pull/2790)) ([@josh-bagwell](https://github.com/josh-bagwell), [@mannycarrera4](https://github.com/mannycarrera4))
## [v11.0.9](https://github.com/Workday/canvas-kit/releases/tag/v11.0.9) (2024-06-24)

### Documentation

- docs: Add v10 to versions table ([#2792](https://github.com/Workday/canvas-kit/pull/2792)) ([@sheelah](https://github.com/sheelah), Sheelah Brennan)


## [v11.0.8](https://github.com/Workday/canvas-kit/releases/tag/v11.0.8) (2024-06-18)




## [v11.0.7](https://github.com/Workday/canvas-kit/releases/tag/v11.0.7) (2024-06-17)

### Documentation

- chore: Add robust example in storybook for ToolbarDropdown button ([#2782](https://github.com/Workday/canvas-kit/pull/2782)) ([@NehaAhujaa](https://github.com/NehaAhujaa), Neha Ahuja)

### Infrastructure

- fix: Delete unused folder ([#2771](https://github.com/Workday/canvas-kit/pull/2771)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v11.0.6](https://github.com/Workday/canvas-kit/releases/tag/v11.0.6) (2024-06-10)

### Components

- fix: Prevent undefined from overriding model defaultConfig ([#2766](https://github.com/Workday/canvas-kit/pull/2766)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix(select): Update aria-haspopup to 'menu' ([#2760](https://github.com/Workday/canvas-kit/pull/2760)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.42](https://github.com/Workday/canvas-kit/releases/tag/v10.3.42) (2024-06-10)

### Components

- fix(select): Update aria-haspopup to 'menu' ([#2760](https://github.com/Workday/canvas-kit/pull/2760)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.41](https://github.com/Workday/canvas-kit/releases/tag/v10.3.41) (2024-06-10)

### Components

- fix: Prevent undefined from overriding model defaultConfig ([#2766](https://github.com/Workday/canvas-kit/pull/2766)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v11.0.5](https://github.com/Workday/canvas-kit/releases/tag/v11.0.5) (2024-06-10)

### Components

- fix: Fix backwards compatibility for hover state colors in System Icon ([#2764](https://github.com/Workday/canvas-kit/pull/2764)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v11.0.4](https://github.com/Workday/canvas-kit/releases/tag/v11.0.4) (2024-06-10)

### Dependencies

- chore: Updated Canvas Tokens Web Dependency to version 2.0.0 ([#2762](https://github.com/Workday/canvas-kit/pull/2762)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v11.0.3](https://github.com/Workday/canvas-kit/releases/tag/v11.0.3) (2024-05-28)

### Components

- chore: Updated mergeStyles to accept grid styleprops  ([#2759](https://github.com/Workday/canvas-kit/pull/2759)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v11.0.2](https://github.com/Workday/canvas-kit/releases/tag/v11.0.2) (2024-05-28)

### Documentation

- docs: Update v11 upgrade guide ([@alanbsmith](https://github.com/alanbsmith))


## [v11.0.1](https://github.com/Workday/canvas-kit/releases/tag/v11.0.1) (2024-05-24)

### Documentation

- fix: Add explicit info about tokens ([#2754](https://github.com/Workday/canvas-kit/pull/2754)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell))


## [v11.0.0](https://github.com/Workday/canvas-kit/releases/tag/v11.0.0) (2024-05-22)

### BREAKING CHANGES

- [#2472](https://github.com/Workday/canvas-kit/pull/2472) - The prop `hasError` for Preview components `FormField`, `TexInput` and `TextArea` have been renamed to `error` and accepts  the values: `"error" | "alert" | undefined`
- [#2546](https://github.com/Workday/canvas-kit/pull/2546) There may be slight visual changes.
- [#2567](https://github.com/Workday/canvas-kit/pull/2567) There may be slight visual changes.
- [#2583](https://github.com/Workday/canvas-kit/pull/2583) There may be slight visual changes.
- [#2600](https://github.com/Workday/canvas-kit/pull/2600) - `rowState` no longer exists.
  - The component is now a compound component with access to lower level elements.
- [#2615](https://github.com/Workday/canvas-kit/pull/2615) Impacts only internal Canvas Kit code. `Icon` component has been removed and no longer used.
- [#2697](https://github.com/Workday/canvas-kit/pull/2697) Adds `box-sizing: border-box` to all stencils. If your stencil did not add this style already, it may change the way `width` works for the component. Our intent is to make all elements use border box layouts to make width calculations more predictable. This change may change the way your component works if you use the `width` style property.

### <a href="https://camo.githubusercontent.com/1551452433f17e7cb88cbb052252a70d73e7078ce660fdf88d5285443fc0ac6a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656c656173655f63617465676f72792d436f6d706f6e656e74732d626c7565" rel="nofollow"><img src="https://camo.githubusercontent.com/1551452433f17e7cb88cbb052252a70d73e7078ce660fdf88d5285443fc0ac6a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656c656173655f63617465676f72792d436f6d706f6e656e74732d626c7565" alt="category" style="max-width: 100%;"></a>

- chore: Refactor StatusIndicator component ([#2620](https://github.com/Workday/canvas-kit/pull/2620)) ([@harshanarisetty](https://github.com/harshanarisetty))
  `StatusIndicator` now uses [Canvas Tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs) and our [new styling utilities](https://workday.github.io/canvas-kit/?path=/docs/styling-basics--create-modifiers#createstyles-api).
  The component now supports the `cs` prop, but otherwise the API has not changed. It should behave
  identically as it did in previous versions.

### <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/1551452433f17e7cb88cbb052252a70d73e7078ce660fdf88d5285443fc0ac6a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656c656173655f63617465676f72792d436f6d706f6e656e74732d626c7565"><img src="https://camo.githubusercontent.com/1551452433f17e7cb88cbb052252a70d73e7078ce660fdf88d5285443fc0ac6a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656c656173655f63617465676f72792d436f6d706f6e656e74732d626c7565" alt="category" data-canonical-src="https://img.shields.io/badge/release_category-Components-blue" style="max-width: 100%;"></a>

- feat(loading-dots): Use static styling utilities ([#2540](https://github.com/Workday/canvas-kit/pull/2540)) ([@harshanarisetty](https://github.com/harshanarisetty))

### Components

- chore: Update CountBadge styles ([#2442](https://github.com/Workday/canvas-kit/pull/2442)) ([@alanbsmith](https://github.com/alanbsmith), manuel.carrera)
- feat: Update FormField Preview API to support different inputs ([#2472](https://github.com/Workday/canvas-kit/pull/2472)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@RayRedGoose](https://github.com/RayRedGoose))
  - `TextInput` from Preview has been deprecated. Please use `FormField` from Preview.
  - `TextArea` from Preview has been deprecated. Please use `FormField` from Preview.
  - `FormField` from Main has been deprecated. Please use `FormField` from Preview.
  - `orientation` prop defaults to `vertical` and is no longer required.
  - `FormField.Input` can be used by any `input`
  - `FormField` does **not** support the `useFieldSet` prop that the `FormField` in [Main](#main)
    does. In order to achieve the same behavior, set the `as` prop on the `FormField` element to
    `fieldset` and the `as` prop of `FormField.Label` to `legend`
- feat: Text style refactoring ([#2455](https://github.com/Workday/canvas-kit/pull/2455)) ([@RayRedGoose](https://github.com/RayRedGoose), [@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Text related components have been refactored to support the new `cs` prop and v10 styling utilities. Type level components,`Title`, `Heading`, `BodyText` and `Subtext`, as well as `Text` and `LabelText` updated to use the new system level tokens via CSS variables from the CanvasProvider. `LabelText` has been deprecated.
- chore: Refactor Card Styles ([#2471](https://github.com/Workday/canvas-kit/pull/2471)) ([@alanbsmith](https://github.com/alanbsmith), [@RayRedGoose](https://github.com/RayRedGoose))
- feat: Component Style Updates from Audit ([#2485](https://github.com/Workday/canvas-kit/pull/2485)) ([@josh-bagwell](https://github.com/josh-bagwell), [@mannycarrera4](https://github.com/mannycarrera4))
  Style updates will have minor visual changes.
- chore: Bump canvas-kit-styling version ([@alanbsmith](https://github.com/alanbsmith))
- chore: Bump canvas kit styling ([@](https://github.com/))
- fix: Update testing to use preview formfield ([@](https://github.com/))
- test: Add inverse variant visual tests ([#2544](https://github.com/Workday/canvas-kit/pull/2544)) ([@RayRedGoose](https://github.com/RayRedGoose))
- chore: Refactor FormField in Preview to use new styling utilities and tokens ([#2541](https://github.com/Workday/canvas-kit/pull/2541)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Update FormField in Preview to use our new styling utilities and tokens.
- chore: Radio Styles Refactor ([#2546](https://github.com/Workday/canvas-kit/pull/2546)) ([@josh-bagwell](https://github.com/josh-bagwell))
  `Radio` and `RadioGroup` now use Canvas Tokens and our new styling utilities. The component now supports the `cs` prop, but otherwise the API has not changed. It should behave identically as it did in previous versions however, there may be some slight visual changes.
- chore: Refactor Checkbox styles ([#2542](https://github.com/Workday/canvas-kit/pull/2542)) ([@RayRedGoose](https://github.com/RayRedGoose), [@mannycarrera4](https://github.com/mannycarrera4), [@alanbsmith](https://github.com/alanbsmith))
  `Checkbox` now uses Canvas Tokens and our new styling utilities. The component now supports the `cs` prop, but otherwise the API has not changed. It should behave identically as it did in previous versions.
- chore: Table(Preview) Styles Refactor ([#2567](https://github.com/Workday/canvas-kit/pull/2567)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Table now uses Canvas Tokens and our new styling utilities. The component now supports the cs prop, but otherwise the API has not changed. It should behave identically as it did in previous versions however, there may be some slight visual changes.
- fix: Fix build script on css packages ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Switch Styles Refactor ([#2583](https://github.com/Workday/canvas-kit/pull/2583)) ([@josh-bagwell](https://github.com/josh-bagwell))
  Switch now uses Canvas Tokens and our new styling utilities. The component now supports the cs prop, but otherwise the API has not changed. It should behave identically as it did in previous versions however, there may be some slight visual changes.
- chore: Updated Radio(Preview) & Table(Preview) with createStencil ([#2585](https://github.com/Workday/canvas-kit/pull/2585)) ([@josh-bagwell](https://github.com/josh-bagwell))
- chore: Table Promotion from preview ([#2600](https://github.com/Workday/canvas-kit/pull/2600)) ([@josh-bagwell](https://github.com/josh-bagwell))
  We've promoted the compound `Table` component from Preview to Main. This compound component API allows for more flexibility and access to lower level elements.
- feat: Add support for stencil extension ([#2612](https://github.com/Workday/canvas-kit/pull/2612)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Refactor Select and Combobox to use new styling utilities and tokens ([#2570](https://github.com/Workday/canvas-kit/pull/2570)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell), [@RayRedGoose](https://github.com/RayRedGoose))
- chore: Refactor icon components ([#2615](https://github.com/Workday/canvas-kit/pull/2615)) ([@RayRedGoose](https://github.com/RayRedGoose), [@alanbsmith](https://github.com/alanbsmith), [@NicholasBoll](https://github.com/NicholasBoll), [@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Icon components, `Svg`, `SystemIcon`, `AccentIcon`, `AppletIcon`, `Graphic` now uses Canvas Tokens 
  and new styling utilities. Components now supports the `cs` prop instead `styles`, but otherwise the API has not changed. It should behave similar as it did in previous versions.
- chore: Update Text to use system tokens ([#2659](https://github.com/Workday/canvas-kit/pull/2659)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@RayRedGoose](https://github.com/RayRedGoose))
  Update our Text components to use our system tokens.
- fix: Make variable names safe for Emotion ([#2687](https://github.com/Workday/canvas-kit/pull/2687)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Update Card color tokens ([#2682](https://github.com/Workday/canvas-kit/pull/2682)) ([@alanbsmith](https://github.com/alanbsmith))
- chore: Update FormField and Select to use system colors ([#2685](https://github.com/Workday/canvas-kit/pull/2685)) ([@RayRedGoose](https://github.com/RayRedGoose))
- chore: Update checkbox to use system color tokens ([#2683](https://github.com/Workday/canvas-kit/pull/2683)) ([@RayRedGoose](https://github.com/RayRedGoose))
- feat: Add box-sizing:border-box automatically to all stencils ([#2697](https://github.com/Workday/canvas-kit/pull/2697)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Documentation

- fix: Update usage of deprecated form field across examples ([#2491](https://github.com/Workday/canvas-kit/pull/2491)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@RayRedGoose](https://github.com/RayRedGoose))
- fix: Update upgrade guide for 11 ([#2678](https://github.com/Workday/canvas-kit/pull/2678)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- ci: Fix SymbolDoc ([#2696](https://github.com/Workday/canvas-kit/pull/2696)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- feat: Add initial v11 setup ([#2476](https://github.com/Workday/canvas-kit/pull/2476)) ([@RayRedGoose](https://github.com/RayRedGoose))
- ci: Fix missing dependency ([@NicholasBoll](https://github.com/NicholasBoll))
- feat: Generate CSS kits from React kits ([#2578](https://github.com/Workday/canvas-kit/pull/2578)) ([@NicholasBoll](https://github.com/NicholasBoll))
- feat: Add per-module prefix ([#2582](https://github.com/Workday/canvas-kit/pull/2582)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Bump canvas-tokens-web ([#2681](https://github.com/Workday/canvas-kit/pull/2681)) ([@alanbsmith](https://github.com/alanbsmith))
- ci: Run style transform in Storybook ([#2677](https://github.com/Workday/canvas-kit/pull/2677)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Styling

- fix(styling): Fix variables in stencil config ([#2624](https://github.com/Workday/canvas-kit/pull/2624)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.40](https://github.com/Workday/canvas-kit/releases/tag/v10.3.40) (2024-05-17)

### Components

- fix(radio): Spread props to input ([#2747](https://github.com/Workday/canvas-kit/pull/2747)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  StyledRadio was spreading props to the input and it's parent div. This change removed spreading prop to the parent div except for className.


## [v9.1.42](https://github.com/Workday/canvas-kit/releases/tag/v9.1.42) (2024-05-17)

### Components

- fix(radio): Spread props to input ([#2747](https://github.com/Workday/canvas-kit/pull/2747)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  StyledRadio was spreading props to the input and it's parent div. This change removed spreading prop to the parent div except for className.

### Infrastructure

- ci: Fix package.json forward-merge resolution ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.39](https://github.com/Workday/canvas-kit/releases/tag/v10.3.39) (2024-05-15)

### Documentation

- docs: Fix typo ([#2738](https://github.com/Workday/canvas-kit/pull/2738)) ([@aarongarciah](https://github.com/aarongarciah))

### Infrastructure

- chore: SNYK Security upgrade jscodeshift from 0.13.1 to 0.14.0 ([#2739](https://github.com/Workday/canvas-kit/pull/2739)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v10.3.38](https://github.com/Workday/canvas-kit/releases/tag/v10.3.38) (2024-05-09)

### Documentation

- docs: Fix typo in Merging Styles story name ([#2732](https://github.com/Workday/canvas-kit/pull/2732)) ([@josephnle](https://github.com/josephnle))


## [v10.3.37](https://github.com/Workday/canvas-kit/releases/tag/v10.3.37) (2024-05-03)

### Components

- fix(select): Redirect focus to visual input ([#2723](https://github.com/Workday/canvas-kit/pull/2723)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.36](https://github.com/Workday/canvas-kit/releases/tag/v10.3.36) (2024-05-03)

### Components

- fix: Style merging in compat mode ([#2719](https://github.com/Workday/canvas-kit/pull/2719)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This fixes an issue where styles would merge incorrectly in compatibility mode. Compatibility mode is triggered when our component is augmented by a style prop, wrapped with `styled`, passed a `css` prop, or passed a `cs` prop with object styles. This fix ensures that `modifiers` via `createModifiers` or `createStencil` merge styles the same way in both static and compat modes. See the linked issue for more details.


## [v10.3.35](https://github.com/Workday/canvas-kit/releases/tag/v10.3.35) (2024-05-01)

### Components

- fix: CanvasProvider should use JS tokens instead of hard-coded strings ([#2710](https://github.com/Workday/canvas-kit/pull/2710)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.34](https://github.com/Workday/canvas-kit/releases/tag/v10.3.34) (2024-05-01)

### Components

- fix: Remove unused state parameter from getFirst in useCursorListModel ([#2713](https://github.com/Workday/canvas-kit/pull/2713)) ([@gbernert](https://github.com/gbernert), [@NicholasBoll](https://github.com/NicholasBoll), [@RayRedGoose](https://github.com/RayRedGoose))


## [v10.3.33](https://github.com/Workday/canvas-kit/releases/tag/v10.3.33) (2024-04-15)

### Documentation

- docs: Improve the "accessible" example of loading dots ([#2673](https://github.com/Workday/canvas-kit/pull/2673)) ([@williamjstanton](https://github.com/williamjstanton), [@RayRedGoose](https://github.com/RayRedGoose), [@NicholasBoll](https://github.com/NicholasBoll))
  Accessible `LoadingDots` example has been updated, by changing background to a darker color that allows `soap400` to meet the minimum 3:1 contrast ratio and adding better screen reader support with the `AriaLiveRegion` component.


## [v10.3.32](https://github.com/Workday/canvas-kit/releases/tag/v10.3.32) (2024-04-12)

### Documentation

- docs: Add new examples of new AriaLiveRegion component ([#2672](https://github.com/Workday/canvas-kit/pull/2672)) ([@williamjstanton](https://github.com/williamjstanton), [@RayRedGoose](https://github.com/RayRedGoose))


## [v10.3.31](https://github.com/Workday/canvas-kit/releases/tag/v10.3.31) (2024-04-11)

### Documentation

- docs: Clarify and correct Select docs ([#2684](https://github.com/Workday/canvas-kit/pull/2684)) ([@alanbsmith](https://github.com/alanbsmith))


## [v10.3.30](https://github.com/Workday/canvas-kit/releases/tag/v10.3.30) (2024-04-11)

### Infrastructure

- chore: Pin Storybook CLI to v6 for extract docs script ([#2657](https://github.com/Workday/canvas-kit/pull/2657)) ([@alanbsmith](https://github.com/alanbsmith))
- ci: Add @storybook/cli as a dev dependency ([#2691](https://github.com/Workday/canvas-kit/pull/2691)) ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix package.json forward-merge resolution ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.29](https://github.com/Workday/canvas-kit/releases/tag/v10.3.29) (2024-04-11)




## [v10.3.28](https://github.com/Workday/canvas-kit/releases/tag/v10.3.28) (2024-04-11)




## [v9.1.41](https://github.com/Workday/canvas-kit/releases/tag/v9.1.41) (2024-04-10)

### Infrastructure

- chore: Pin Storybook CLI to v6 for extract docs script ([#2657](https://github.com/Workday/canvas-kit/pull/2657)) ([@alanbsmith](https://github.com/alanbsmith))
- ci: Add @storybook/cli as a dev dependency ([#2691](https://github.com/Workday/canvas-kit/pull/2691)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v10.3.27](https://github.com/Workday/canvas-kit/releases/tag/v10.3.27) (2024-04-09)

### Components

- fix: Pass value to visual input in select ([#2676](https://github.com/Workday/canvas-kit/pull/2676)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.26](https://github.com/Workday/canvas-kit/releases/tag/v10.3.26) (2024-04-02)

### Actions

- chore: Automate reviewer lottery for yarn lock changes ([#2667](https://github.com/Workday/canvas-kit/pull/2667)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.3.25](https://github.com/Workday/canvas-kit/releases/tag/v10.3.25) (2024-03-28)

### Actions

- fix: Update scorecard.yml ([#2664](https://github.com/Workday/canvas-kit/pull/2664)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v10.3.24](https://github.com/Workday/canvas-kit/releases/tag/v10.3.24) (2024-03-22)

### Infrastructure

- fix: Fix issue with dynamic keys in stencils for style parser ([#2661](https://github.com/Workday/canvas-kit/pull/2661)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v10.3.23](https://github.com/Workday/canvas-kit/releases/tag/v10.3.23) (2024-03-22)

### Components

- fix: Revert overflow calculation until we find a better solution ([#2651](https://github.com/Workday/canvas-kit/pull/2651)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Reverting the sub pixel calculation on the overflow logic until we find a better solution.

### Dependencies

- chore: Addressing dependency issues ([#2639](https://github.com/Workday/canvas-kit/pull/2639)) ([@josh-bagwell](https://github.com/josh-bagwell))
- fix: Fixed yarnrc ([#2640](https://github.com/Workday/canvas-kit/pull/2640)) ([@josh-bagwell](https://github.com/josh-bagwell))

### Tests

- test: Remove dot only from tests  ([#2644](https://github.com/Workday/canvas-kit/pull/2644)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v9.1.40](https://github.com/Workday/canvas-kit/releases/tag/v9.1.40) (2024-03-22)

### Components

- fix: Revert overflow calculation until we find a better solution ([#2651](https://github.com/Workday/canvas-kit/pull/2651)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Reverting the sub pixel calculation on the overflow logic until we find a better solution.
## [v10.3.22](https://github.com/Workday/canvas-kit/releases/tag/v10.3.22) (2024-03-11)

### Infrastructure

- chore: Create scorecard.yml ([#2632](https://github.com/Workday/canvas-kit/pull/2632)) ([@mannycarrera4](https://github.com/mannycarrera4))
- chore: Addressing vulnerabilities and critical issues ([#2634](https://github.com/Workday/canvas-kit/pull/2634)) ([@josh-bagwell](https://github.com/josh-bagwell))

### Styling

- fix(stencil): TypeScript support for variable/modifier with same key ([#2635](https://github.com/Workday/canvas-kit/pull/2635)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.21](https://github.com/Workday/canvas-kit/releases/tag/v10.3.21) (2024-03-06)

### Infrastructure

- fix: Update forward merge to track remote branch ([#2627](https://github.com/Workday/canvas-kit/pull/2627)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- chore: Add nonce support to styling ([#2629](https://github.com/Workday/canvas-kit/pull/2629)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This change does not introduce any breaking changes, but creating a custom Emotion instance can introduce a breaking change. A custom instance should only be used if all instances of Canvas Kit on the page are above the version this change is released in and no application code is imported directly from `@emotion/css`. This change updates all internal Canvas Kit styling to use the Emotion instance created in `@workday/canvas-kit-styling`. If no custom instance is created, the one created by `@emotion/css` will be used. If the default instance is used, there should be no breaking changes, but everyone should update their application code to use styling functions from `@workday/canvas-kit-styling` and not `@emotion/css`. SSR using `@emotion/css` is unaffected since server to client hydration only cares about the cache key ("css") and the style's hash, which should be the same even with a custom cache instance.


## [v10.3.20](https://github.com/Workday/canvas-kit/releases/tag/v10.3.20) (2024-03-04)

### Components

- fix: Move selected item when scrolling via keyboard in Select ([#2609](https://github.com/Workday/canvas-kit/pull/2609)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.3.19](https://github.com/Workday/canvas-kit/releases/tag/v10.3.19) (2024-03-01)

### Components

- fix(button): Fix icon colors in buttons and SegmentedControl ([#2623](https://github.com/Workday/canvas-kit/pull/2623)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This change may trigger a visual regression with certain icons in buttons and `SegmentedControl` buttons. This change is intentional and fixes an accidental regression between v9 and v10. There should be no other breaking changes.


## [v10.3.18](https://github.com/Workday/canvas-kit/releases/tag/v10.3.18) (2024-02-28)

### Styling

- fix: Fix stencil types to handle vars and deeply nested styles ([#2617](https://github.com/Workday/canvas-kit/pull/2617)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.17](https://github.com/Workday/canvas-kit/releases/tag/v10.3.17) (2024-02-26)

### Components

- fix: Wrap css variables passed into stencil and vars ([#2614](https://github.com/Workday/canvas-kit/pull/2614)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v10.3.16](https://github.com/Workday/canvas-kit/releases/tag/v10.3.16) (2024-02-20)

### Components

- fix(segmented-control): Fix size styling ([#2606](https://github.com/Workday/canvas-kit/pull/2606)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.15](https://github.com/Workday/canvas-kit/releases/tag/v10.3.15) (2024-02-17)

### Infrastructure

- fix: Add CSS fallback to custom transforms ([#2604](https://github.com/Workday/canvas-kit/pull/2604)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.14](https://github.com/Workday/canvas-kit/releases/tag/v10.3.14) (2024-02-15)

### Infrastructure

- ci: Fix package.json fix syntax error ([#2573](https://github.com/Workday/canvas-kit/pull/2573)) ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix resolve-package-json merge file ([#2575](https://github.com/Workday/canvas-kit/pull/2575)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Forward numeric style prop transform handling to Emotion ([#2588](https://github.com/Workday/canvas-kit/pull/2588)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.13](https://github.com/Workday/canvas-kit/releases/tag/v10.3.13) (2024-02-12)

### Components

- fix: Fix keyframes transform for commonjs modules ([#2572](https://github.com/Workday/canvas-kit/pull/2572)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- ci: Fix forward-merge version conflicts ([#2568](https://github.com/Workday/canvas-kit/pull/2568)) ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Fix resolve-package-json merge file ([#2575](https://github.com/Workday/canvas-kit/pull/2575)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.12](https://github.com/Workday/canvas-kit/releases/tag/v10.3.12) (2024-02-12)

### Components

- fix: Add CSS var fallbacks on Preview ([#2571](https://github.com/Workday/canvas-kit/pull/2571)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.11](https://github.com/Workday/canvas-kit/releases/tag/v10.3.11) (2024-02-12)

### Documentation

- docs: Fix Table example ([#2564](https://github.com/Workday/canvas-kit/pull/2564)) ([@alanbsmith](https://github.com/alanbsmith))


## [v10.3.10](https://github.com/Workday/canvas-kit/releases/tag/v10.3.10) (2024-02-08)

### Documentation

- chore: Add versions mdx ([#2553](https://github.com/Workday/canvas-kit/pull/2553)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@alanbsmith](https://github.com/alanbsmith))
  We've added a table of previous versions to storybook


## [v10.3.9](https://github.com/Workday/canvas-kit/releases/tag/v10.3.9) (2024-02-08)

### Components

- fix: Fix FormField required label error ([#2562](https://github.com/Workday/canvas-kit/pull/2562)) ([@alanbsmith](https://github.com/alanbsmith))


## [v9.1.39](https://github.com/Workday/canvas-kit/releases/tag/v9.1.39) (2024-02-08)

### Components

- fix: Fix FormField required label error ([#2562](https://github.com/Workday/canvas-kit/pull/2562)) ([@alanbsmith](https://github.com/alanbsmith))
## [v10.3.8](https://github.com/Workday/canvas-kit/releases/tag/v10.3.8) (2024-02-08)

### Components

- fix: Update isOverflowed logic to account for sub-pixels ([#2548](https://github.com/Workday/canvas-kit/pull/2548)) ([@nonverbal](https://github.com/nonverbal), Lauren Clavell)


## [v9.1.38](https://github.com/Workday/canvas-kit/releases/tag/v9.1.38) (2024-02-08)

### Components

- fix: Update isOverflowed logic to account for sub-pixels ([#2548](https://github.com/Workday/canvas-kit/pull/2548)) ([@nonverbal](https://github.com/nonverbal), Lauren Clavell)
## [v10.3.7](https://github.com/Workday/canvas-kit/releases/tag/v10.3.7) (2024-02-07)

### Documentation

- docs: Add interactive table examples to storybook ([#2457](https://github.com/Workday/canvas-kit/pull/2457)) ([@williamjstanton](https://github.com/williamjstanton), [@alanbsmith](https://github.com/alanbsmith))


## [v10.3.6](https://github.com/Workday/canvas-kit/releases/tag/v10.3.6) (2024-02-07)

### Components

- fix(preview): Changed table justifyContent to start ([#2557](https://github.com/Workday/canvas-kit/pull/2557)) ([@vibdev](https://github.com/vibdev))
- fix: Update `aria-activedescendant` on ComboboxInput ([#2554](https://github.com/Workday/canvas-kit/pull/2554)) ([@josh-bagwell](https://github.com/josh-bagwell))

### Infrastructure

- ci: Fix forward merging with CSS packages deleted ([@NicholasBoll](https://github.com/NicholasBoll))


## [v9.1.37](https://github.com/Workday/canvas-kit/releases/tag/v9.1.37) (2024-02-07)

### Components

- fix: Update `aria-activedescendant` on ComboboxInput ([#2554](https://github.com/Workday/canvas-kit/pull/2554)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v9.1.36](https://github.com/Workday/canvas-kit/releases/tag/v9.1.36) (2024-02-07)

### Components

- fix(preview): Changed table justifyContent to start ([#2557](https://github.com/Workday/canvas-kit/pull/2557)) ([@vibdev](https://github.com/vibdev))
## [v10.3.5](https://github.com/Workday/canvas-kit/releases/tag/v10.3.5) (2024-02-07)

### Components

- fix: Allow fetching of dynamic items on select ([#2535](https://github.com/Workday/canvas-kit/pull/2535)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@alanbsmith](https://github.com/alanbsmith), [@josh-bagwell](https://github.com/josh-bagwell))
  - Allow select to render while fetching items from a server
  - Add initial selected item example with complex object
  - Add placeholder example with select
  - Select will now show your placeholder on initial load.
  - When using select with complex items, `onChange` will return the `id` of the item, not the text.
  - `data-id` is no longer required when your object has an `id` property.


## [v10.3.4](https://github.com/Workday/canvas-kit/releases/tag/v10.3.4) (2024-02-07)

### Documentation

- docs: Update common docs ([#2552](https://github.com/Workday/canvas-kit/pull/2552)) ([@alanbsmith](https://github.com/alanbsmith))
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.


## [v10.3.3](https://github.com/Workday/canvas-kit/releases/tag/v10.3.3) (2024-02-07)

### Components

- fix: Only run focusRing transform inside static styles ([#2549](https://github.com/Workday/canvas-kit/pull/2549)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.3.2](https://github.com/Workday/canvas-kit/releases/tag/v10.3.2) (2024-02-05)

### Documentation

- fix: SidePanel Examples aria-labelledby Update ([#2538](https://github.com/Workday/canvas-kit/pull/2538)) ([@williamjstanton](https://github.com/williamjstanton), [@josh-bagwell](https://github.com/josh-bagwell))
  Updates the Basic example, Alternate example, and Right-to-left example to display a hidden <span/> element when in the collapsed state.


## [v10.3.1](https://github.com/Workday/canvas-kit/releases/tag/v10.3.1) (2024-01-25)

### Components

- fix: Prevent popup from closing when combobox item is clicked ([#2524](https://github.com/Workday/canvas-kit/pull/2524)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Prevents popup or dialog from closing when a combobox menu item is selected.


## [v9.1.35](https://github.com/Workday/canvas-kit/releases/tag/v9.1.35) (2024-01-23)
## [v9.1.35](https://github.com/Workday/canvas-kit/releases/tag/v9.1.35) (2024-01-23)

### Components

- fix: Prevent popup from closing when combobox item is clicked ([#2524](https://github.com/Workday/canvas-kit/pull/2524)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Prevents popup or dialog from closing when a combobox menu item is selected.
## [v10.3.0](https://github.com/Workday/canvas-kit/releases/tag/v10.3.0) (2024-01-18)




## [v10.2.5](https://github.com/Workday/canvas-kit/releases/tag/v10.2.5) (2024-01-09)

### Infrastructure

- fix: Fix stencil types to accept a value as CSS variables ([#2509](https://github.com/Workday/canvas-kit/pull/2509)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v10.2.4](https://github.com/Workday/canvas-kit/releases/tag/v10.2.4) (2024-01-08)

### Infrastructure

- fix: Fix TS error for boolean modifiers in compound stencils styles ([#2507](https://github.com/Workday/canvas-kit/pull/2507)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v10.2.3](https://github.com/Workday/canvas-kit/releases/tag/v10.2.3) (2024-01-05)

### Infrastructure

- ci: Update reviewer-lottery.yml ([#2503](https://github.com/Workday/canvas-kit/pull/2503)) ([@mannycarrera4](https://github.com/mannycarrera4))
- chore: Remove ESLint warning for @emotion/css ([#2505](https://github.com/Workday/canvas-kit/pull/2505)) ([@alanbsmith](https://github.com/alanbsmith))


## [v10.2.2](https://github.com/Workday/canvas-kit/releases/tag/v10.2.2) (2024-01-05)

### Documentation

- fix: Move styling to its own section ([#2498](https://github.com/Workday/canvas-kit/pull/2498)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.2.1](https://github.com/Workday/canvas-kit/releases/tag/v10.2.1) (2023-12-21)

### Components

- fix: Default createStyles vars to empty object ([#2488](https://github.com/Workday/canvas-kit/pull/2488)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.2.0](https://github.com/Workday/canvas-kit/releases/tag/v10.2.0) (2023-12-19)




## [v10.1.4](https://github.com/Workday/canvas-kit/releases/tag/v10.1.4) (2023-12-19)

### Components

- fix: Forward branding CSS variables through portals ([#2482](https://github.com/Workday/canvas-kit/pull/2482)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.1.3](https://github.com/Workday/canvas-kit/releases/tag/v10.1.3) (2023-12-19)

### Components

- fix: Fixed getFirstFocusableElement to recognize RadioGroup ([#2470](https://github.com/Workday/canvas-kit/pull/2470)) ([@thunguyen19](https://github.com/thunguyen19))


## [v9.1.34](https://github.com/Workday/canvas-kit/releases/tag/v9.1.34) (2023-12-18)

### Components

- fix: Fixed getFirstFocusableElement to recognize RadioGroup ([#2470](https://github.com/Workday/canvas-kit/pull/2470)) ([@thunguyen19](https://github.com/thunguyen19))
## [v10.1.2](https://github.com/Workday/canvas-kit/releases/tag/v10.1.2) (2023-12-13)

### Infrastructure

- fix: Make the style transform Emotion safe ([#2468](https://github.com/Workday/canvas-kit/pull/2468)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.1.1](https://github.com/Workday/canvas-kit/releases/tag/v10.1.1) (2023-12-13)

### Components

- fix(Pill): Remove Console Logs ([#2467](https://github.com/Workday/canvas-kit/pull/2467)) ([@jennyy13](https://github.com/jennyy13), jennifer.murray)


## [v10.1.0](https://github.com/Workday/canvas-kit/releases/tag/v10.1.0) (2023-12-13)




## [v10.0.29](https://github.com/Workday/canvas-kit/releases/tag/v10.0.29) (2023-12-12)

### Components

- fix: Extend CSSObject types to support CSS variables ([#2462](https://github.com/Workday/canvas-kit/pull/2462)) ([@alanbsmith](https://github.com/alanbsmith))


## [v10.0.28](https://github.com/Workday/canvas-kit/releases/tag/v10.0.28) (2023-12-12)

### Components

- fix: OverflowTab does not render when no tab is selected ([#2448](https://github.com/Workday/canvas-kit/pull/2448)) ([@thunguyen19](https://github.com/thunguyen19))


## [v9.1.33](https://github.com/Workday/canvas-kit/releases/tag/v9.1.33) (2023-12-11)

### Components

- fix: OverflowTab does not render when no tab is selected ([#2448](https://github.com/Workday/canvas-kit/pull/2448)) ([@thunguyen19](https://github.com/thunguyen19))
## [v10.0.27](https://github.com/Workday/canvas-kit/releases/tag/v10.0.27) (2023-12-11)

### Documentation

- docs(_examples): Add example for basic search form ([#2454](https://github.com/Workday/canvas-kit/pull/2454)) ([@vibdev](https://github.com/vibdev))


## [v10.0.26](https://github.com/Workday/canvas-kit/releases/tag/v10.0.26) (2023-12-08)

### Components

- fix: Remove console.log ([#2451](https://github.com/Workday/canvas-kit/pull/2451)) ([@michaelhabibi](https://github.com/michaelhabibi))


## [v10.0.25](https://github.com/Workday/canvas-kit/releases/tag/v10.0.25) (2023-12-07)

### Components

- fix: Fix forwarding of the style attribute ([#2453](https://github.com/Workday/canvas-kit/pull/2453)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.0.24](https://github.com/Workday/canvas-kit/releases/tag/v10.0.24) (2023-12-07)

### Components

- fix: Fix accessibility tooltip bug ([#2446](https://github.com/Workday/canvas-kit/pull/2446)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v10.0.23](https://github.com/Workday/canvas-kit/releases/tag/v10.0.23) (2023-12-06)

### Components

- fix: Add button vars to pills to overwrite styles ([#2432](https://github.com/Workday/canvas-kit/pull/2432)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v9.1.32](https://github.com/Workday/canvas-kit/releases/tag/v9.1.32) (2023-12-05)

### Components

- fix: Fix accessibility tooltip bug ([#2446](https://github.com/Workday/canvas-kit/pull/2446)) ([@RayRedGoose](https://github.com/RayRedGoose))
## [v10.0.22](https://github.com/Workday/canvas-kit/releases/tag/v10.0.22) (2023-12-04)

### Components

- fix: FormField fix alignment for required asterisk ([#2404](https://github.com/Workday/canvas-kit/pull/2404)) ([@thunguyen19](https://github.com/thunguyen19), manuel.carrera)
  We've wrapped the contents of the `label` element including the asterisk in a `span`. The asterisk now is at the end of the `label`.


## [v9.1.31](https://github.com/Workday/canvas-kit/releases/tag/v9.1.31) (2023-12-04)

### Components

- fix: FormField fix alignment for required asterisk ([#2404](https://github.com/Workday/canvas-kit/pull/2404)) ([@thunguyen19](https://github.com/thunguyen19), manuel.carrera)
  We've wrapped the contents of the `label` element including the asterisk in a `span`. The asterisk now is at the end of the `label`.
## [v10.0.21](https://github.com/Workday/canvas-kit/releases/tag/v10.0.21) (2023-12-01)

### Components

- fix: Fix runtime style merging in handleCsProps ([#2439](https://github.com/Workday/canvas-kit/pull/2439)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.0.20](https://github.com/Workday/canvas-kit/releases/tag/v10.0.20) (2023-12-01)

### Components

- fix(preview): Fix multiline asterisk on preview form field ([#2436](https://github.com/Workday/canvas-kit/pull/2436)) ([@vibdev](https://github.com/vibdev))
  We removed a wrapping flex element so elemProps is now spread directly on the `<label>` element and the asterisk is at the end of the label.


## [v10.0.19](https://github.com/Workday/canvas-kit/releases/tag/v10.0.19) (2023-11-30)

### Components

- fix: Fixes popperOptions rerendering bug ([#2437](https://github.com/Workday/canvas-kit/pull/2437)) ([@alanbsmith](https://github.com/alanbsmith))


## [v10.0.18](https://github.com/Workday/canvas-kit/releases/tag/v10.0.18) (2023-11-28)

### Components

- fix: Check for undefined error in radio group ([#2427](https://github.com/Workday/canvas-kit/pull/2427)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- fix: Quiet InputProvider logs for SSR ([#2431](https://github.com/Workday/canvas-kit/pull/2431)) ([@anicholls](https://github.com/anicholls))


## [v9.1.30](https://github.com/Workday/canvas-kit/releases/tag/v9.1.30) (2023-11-28)

### Components

- fix: Quiet InputProvider logs for SSR ([#2431](https://github.com/Workday/canvas-kit/pull/2431)) ([@anicholls](https://github.com/anicholls))


## [v10.0.17](https://github.com/Workday/canvas-kit/releases/tag/v10.0.17) (2023-11-28)

### Components

- fix: Table in preview export fix ([#2419](https://github.com/Workday/canvas-kit/pull/2419)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v9.1.29](https://github.com/Workday/canvas-kit/releases/tag/v9.1.29) (2023-11-21)

### Components

- fix: Check for undefined error in radio group ([#2427](https://github.com/Workday/canvas-kit/pull/2427)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v10.0.16](https://github.com/Workday/canvas-kit/releases/tag/v10.0.16) (2023-11-21)

### Documentation

- docs: Update README to include latest upgrade guide links ([#2420](https://github.com/Workday/canvas-kit/pull/2420)) ([@vibdev](https://github.com/vibdev))


## [v10.0.15](https://github.com/Workday/canvas-kit/releases/tag/v10.0.15) (2023-11-21)

### Components

- fix(select): Set initial selected id to the text value ([#2421](https://github.com/Workday/canvas-kit/pull/2421)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v9.1.28](https://github.com/Workday/canvas-kit/releases/tag/v9.1.28) (2023-11-20)

### Components

- fix: Table in preview export fix ([#2419](https://github.com/Workday/canvas-kit/pull/2419)) ([@josh-bagwell](https://github.com/josh-bagwell))
## [v10.0.14](https://github.com/Workday/canvas-kit/releases/tag/v10.0.14) (2023-11-17)

### Components

- fix: Update cs prop to create a class instead of style ([#2408](https://github.com/Workday/canvas-kit/pull/2408)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.0.13](https://github.com/Workday/canvas-kit/releases/tag/v10.0.13) (2023-11-17)

### Components

- fix(select): Remove visual selection on Select input ([#2410](https://github.com/Workday/canvas-kit/pull/2410)) ([@vibdev](https://github.com/vibdev))


## [v10.0.12](https://github.com/Workday/canvas-kit/releases/tag/v10.0.12) (2023-11-17)

### Documentation

- docs: Modal example a11y polish ([#2360](https://github.com/Workday/canvas-kit/pull/2360)) ([@williamjstanton](https://github.com/williamjstanton), [@josh-bagwell](https://github.com/josh-bagwell))


## [v10.0.11](https://github.com/Workday/canvas-kit/releases/tag/v10.0.11) (2023-11-16)

### Components

- fix(button): Allow colors to override TertiaryButton ([#2411](https://github.com/Workday/canvas-kit/pull/2411)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v10.0.10](https://github.com/Workday/canvas-kit/releases/tag/v10.0.10) (2023-11-16)

### Test

- test: Skip autocomplete test for now ([#2407](https://github.com/Workday/canvas-kit/pull/2407)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.0.9](https://github.com/Workday/canvas-kit/releases/tag/v10.0.9) (2023-11-16)

### Documentation

- docs(select): Add controlled and uncontrolled Select examples ([#2406](https://github.com/Workday/canvas-kit/pull/2406)) ([@vibdev](https://github.com/vibdev))


## [v10.0.8](https://github.com/Workday/canvas-kit/releases/tag/v10.0.8) (2023-11-16)

### Documentation

- docs: Update Token docs ([#2383](https://github.com/Workday/canvas-kit/pull/2383)) ([@alanbsmith](https://github.com/alanbsmith), [@mannycarrera4](https://github.com/mannycarrera4))


## [v10.0.7](https://github.com/Workday/canvas-kit/releases/tag/v10.0.7) (2023-11-16)

### Components

- fix: Prevent modal from overlapping on mobile devices ([#2385](https://github.com/Workday/canvas-kit/pull/2385)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v9.1.27](https://github.com/Workday/canvas-kit/releases/tag/v9.1.27) (2023-11-14)

### Components

- fix: Prevent modal from overlapping on mobile devices ([#2385](https://github.com/Workday/canvas-kit/pull/2385)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v10.0.6](https://github.com/Workday/canvas-kit/releases/tag/v10.0.6) (2023-11-10)

### Components

- fix: Fix Style prop merging with cs prop ([#2379](https://github.com/Workday/canvas-kit/pull/2379)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This fix adds Emotion's `CacheProvider` to the `CanvasProvider`. Any application that uses the `CacheProvider` will not see this fix within the render tree of the custom `CacheProvider`.  For this fix to be applied everywhere, consider removing any use of Emotion's `CacheProvider`.
  
  Some instances of use of `CacheProvider` were to set the `compat` mode of the cache. You can now do the following instead and not use `CacheProvider` at all:
  
  ```ts
  cache.compat = true
  ```
  
  Also note this fix will break automatic server side rendering because style merging is not creating server-side only `style` tags. Since `createStyles` isn't compatible with automatic server side rendering, the merge style fix isn't compatible either. Use Emotion's solution for server-side `@emotion/css`: https://emotion.sh/docs/ssr#when-using-emotioncss
  
  The only modification is to import `cache` from `@emotion/css` instead of creating a new cache. Their documentation doesn't work:
  
  ```patch
  - import createCache from '@emotion/cache'
  - 
  - const key = 'custom'
  - const cache = createCache({ key })
  + import {cache} from '@emotion/css';
  + const {key} = cache
  ```


## [v10.0.5](https://github.com/Workday/canvas-kit/releases/tag/v10.0.5) (2023-11-09)

### Documentation

- docs: Update README ([#2369](https://github.com/Workday/canvas-kit/pull/2369)) ([@aditya7302](https://github.com/aditya7302))


## [v10.0.4](https://github.com/Workday/canvas-kit/releases/tag/v10.0.4) (2023-11-08)

### Components

- fix(select): Fix circular import statement ([#2386](https://github.com/Workday/canvas-kit/pull/2386)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.0.3](https://github.com/Workday/canvas-kit/releases/tag/v10.0.3) (2023-11-03)




## [v10.0.2](https://github.com/Workday/canvas-kit/releases/tag/v10.0.2) (2023-10-31)

### Components

- fix: Pass colors prop to basebutton and button ([#2381](https://github.com/Workday/canvas-kit/pull/2381)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v10.0.1](https://github.com/Workday/canvas-kit/releases/tag/v10.0.1) (2023-10-30)

### Dependencies

- chore: Update Canvas dependencies ([#2377](https://github.com/Workday/canvas-kit/pull/2377)) ([@alanbsmith](https://github.com/alanbsmith))


## [v10.0.0](https://github.com/Workday/canvas-kit/releases/tag/v10.0.0) (2023-10-25)

### BREAKING CHANGES

- [#2229](https://github.com/Workday/canvas-kit/pull/2229) There is the possibility of breaking changes if users are changing the default browser font size from `16px` to another value. 
  
  You can convert a `px` value to a `rem` value by dividing your `px` value by `16`(if your default browser font size hasn't been updated, the value will be `16`).
  
  For example:
  
  | Equation    | rem Value |
  | ----------- | --------- |
  | `16px/16px` | `1rem`    |
  | `32px/16px` | `2rem`    |
  | `8px/16px`  | `0.5rem`  |
- [#2247](https://github.com/Workday/canvas-kit/pull/2247) To move from the Menu component in Preview to the Menu compound component in Main, please read [this discussion](https://github.com/Workday/canvas-kit/discussions/2063).
  
  Also, see [this](https://codesandbox.io/s/deprecatedmenu-and-menu-migration-gwi1ov) codesandbox that shows the differences between DeprecatedMenu and the Menu compound component.
- [#2318](https://github.com/Workday/canvas-kit/pull/2318) We have removed the useBanner hook, the only function of which was to add `aria-labelledby` and `aria-describedby` references to the text inside of the Banner. This was not required for accessibility, and browsers can compute the `name` of the Banner from the text given inside.
- [#2285](https://github.com/Workday/canvas-kit/pull/2285) - We refactored how we styled Buttons to use our `createStyles` utility function. We don't anticipate
  this as a breaking change but, there may be slight changes to visual test.
  - Icons will no longer be "filled" on toggle. This decision was made to not have the existing icon
  look different in the toggled state from default state.
  - `PrimaryButton`: On the `inverse` variant, the focus ring is now consistent with the default variant of `PrimaryButton`. This will visually change the `inverse` variant to have a larger appearance when focused. 
  - `colors` will no longer support the `focusRing` option:
    ```tsx
    import {focusRing} from '@workday/canvas-kit-react/common';
  
    // before
    <PrimaryButton
      colors={{
        // other colors
        focus: {
          // other colors
        focusRing: focusRing(/* options */)
        }
      }}
    />
  
    // after
    <PrimaryButton
      colors={{
        // other colors
        focus: {
          // other colors
        }
      }}
      css={{
        ':focus-visible': focusRing(/* options */)
      }}
    />;
    ```
- [#2309](https://github.com/Workday/canvas-kit/pull/2309) - We've converted `Select` in Main into a compound component. This component matches our pattern of providing access to lower-level elements and allows for more flexibility. 
  - The spacing between menu and its target element will increase from 0px to 4px
  - We've also [deprecated](https://canvas.workday.com/getting-started/canvas-glossary#deprecation) the `Select` in Preview. You may still consume this component but suggest migrating over to the one in Main.
- [#2368](https://github.com/Workday/canvas-kit/pull/2368) The CSS kit is being removed in v10 and will come back later as derived from our React packages.

### Codemods

- feat: Set initial v10 codemod ([#2239](https://github.com/Workday/canvas-kit/pull/2239)) ([@RayRedGoose](https://github.com/RayRedGoose))

### Components

- feat: Update space and depth tokens to rem ([#2229](https://github.com/Workday/canvas-kit/pull/2229)) ([@josh-bagwell](https://github.com/josh-bagwell), [@alanbsmith](https://github.com/alanbsmith), [@bstanton678](https://github.com/bstanton678), [@mannycarrera4](https://github.com/mannycarrera4))
  Updated `depth` and `space` token values to use `rem` instead of `px`.
- feat: Remove Menu Preview ([#2247](https://github.com/Workday/canvas-kit/pull/2247)) ([@josh-bagwell](https://github.com/josh-bagwell))
  This will not involve a codemod since the API has too many differences between the component being removed in Preview and the component in Main.
- fix: Changing ARIA role to switch ([#2292](https://github.com/Workday/canvas-kit/pull/2292)) ([@williamjstanton](https://github.com/williamjstanton), [@alanbsmith](https://github.com/alanbsmith))
- refactor: Removing aria attributes from Banner component ([#2318](https://github.com/Workday/canvas-kit/pull/2318)) ([@williamjstanton](https://github.com/williamjstanton), [@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- fix: Revert removal of Menu in Preview ([#2335](https://github.com/Workday/canvas-kit/pull/2335)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  We're going to continue supporting the Menu in Preview until we implement grouped menu items (with virtualization) for the Menu in Main.
- feat: Deprecate InputIconContainer ([#2332](https://github.com/Workday/canvas-kit/pull/2332)) ([@dgubko](https://github.com/dgubko), [@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  `InputIconContainer` has been deprecated, because it does not handle bidirectionally or icons at the start of an input. Please use [`InputGroup`](https://workday.github.io/canvas-kit/?path=/story/components-inputs-text-input--icons) instead.
- feat: Deprecated Table in Main ([#2344](https://github.com/Workday/canvas-kit/pull/2344)) ([@thunguyen19](https://github.com/thunguyen19), [@mannycarrera4](https://github.com/mannycarrera4))
- feat: Add CSS styling function ([#2273](https://github.com/Workday/canvas-kit/pull/2273)) ([@NicholasBoll](https://github.com/NicholasBoll))
  This change introduces an intermediate step towards static styling. The style function takes in statically analyzable style definitions with modifiers, variables, and static styles to create styling to be used in components. It can later be interpreted at build time to create CSS packages.
- chore: Refactored Button styles to use `createStyles` utility ([#2285](https://github.com/Workday/canvas-kit/pull/2285)) ([@josh-bagwell](https://github.com/josh-bagwell))
- feat: Convert Select from Main into a compound component ([#2309](https://github.com/Workday/canvas-kit/pull/2309)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@RayRedGoose](https://github.com/RayRedGoose), [@jamesfan](https://github.com/jamesfan))
- chore: Remove CSS packages ([#2368](https://github.com/Workday/canvas-kit/pull/2368)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Set a default theme in canvas provider ([#2371](https://github.com/Workday/canvas-kit/pull/2371)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- chore(button): Add CSS Variable fallbacks ([#2372](https://github.com/Workday/canvas-kit/pull/2372)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Documentation

- chore: Adding v10 upgrade guide ([#2237](https://github.com/Workday/canvas-kit/pull/2237)) ([@jaclynjessup](https://github.com/jaclynjessup))
- docs: Fix Select examples ([#2370](https://github.com/Workday/canvas-kit/pull/2370)) ([@jamesfan](https://github.com/jamesfan))
- docs: Clean up v10 Upgrade Guide ([#2358](https://github.com/Workday/canvas-kit/pull/2358)) ([@jamesfan](https://github.com/jamesfan), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- chore: Make the styling package publish ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Fix version numbers ([#2373](https://github.com/Workday/canvas-kit/pull/2373)) ([@NicholasBoll](https://github.com/NicholasBoll))
- feat: Add static style transform ([#2374](https://github.com/Workday/canvas-kit/pull/2374)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Fix commonjs styling transform ([#2375](https://github.com/Workday/canvas-kit/pull/2375)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Tokens

- fix: Revert spaceNumber values to pixel values and deprecate it ([#2345](https://github.com/Workday/canvas-kit/pull/2345)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@josh-bagwell](https://github.com/josh-bagwell))
  We've [deprecated](https://canvas.workday.com/getting-started/canvas-glossary#deprecation) `spaceNumbers` and encourage users to use our [rem](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) based `space` tokens.


## [v9.1.26](https://github.com/Workday/canvas-kit/releases/tag/v9.1.26) (2023-10-20)

### Components

- fix: Force PrimaryButton text color in all states ([#2364](https://github.com/Workday/canvas-kit/pull/2364)) ([@anicholls](https://github.com/anicholls))


## [v9.1.25](https://github.com/Workday/canvas-kit/releases/tag/v9.1.25) (2023-10-20)

### Components

- fix(collection): Set correct aria-setsize in virtualized collections ([#2362](https://github.com/Workday/canvas-kit/pull/2362)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.25](https://github.com/Workday/canvas-kit/releases/tag/v8.6.25) (2023-10-20)

### Components

- fix(collection): Set correct aria-setsize in virtualized collections ([#2362](https://github.com/Workday/canvas-kit/pull/2362)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v9.1.24](https://github.com/Workday/canvas-kit/releases/tag/v9.1.24) (2023-10-16)

### Components

- fix(tabs): Slugify Tabs.Item aria-controls attribute ([#2354](https://github.com/Workday/canvas-kit/pull/2354)) ([@biplobsd](https://github.com/biplobsd))


## [v9.1.23](https://github.com/Workday/canvas-kit/releases/tag/v9.1.23) (2023-10-11)

### Components

- fix(popup): Include document.body in useReturnFocus bound check ([#2351](https://github.com/Workday/canvas-kit/pull/2351)) ([@Ebin-Benny](https://github.com/Ebin-Benny), [@ebin-benny-wd](https://github.com/ebin-benny-wd))


## [v8.6.24](https://github.com/Workday/canvas-kit/releases/tag/v8.6.24) (2023-10-11)

### Components

- fix(popup): Include document.body in useReturnFocus bound check ([#2351](https://github.com/Workday/canvas-kit/pull/2351)) ([@Ebin-Benny](https://github.com/Ebin-Benny), [@ebin-benny-wd](https://github.com/ebin-benny-wd))
## [v9.1.22](https://github.com/Workday/canvas-kit/releases/tag/v9.1.22) (2023-10-02)

### Documentation

- fix: Add jsdoc element in backticks for Avatar ([#2350](https://github.com/Workday/canvas-kit/pull/2350)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v8.6.23](https://github.com/Workday/canvas-kit/releases/tag/v8.6.23) (2023-10-02)

### Documentation

- fix: Add jsdoc element in backticks for Avatar ([#2350](https://github.com/Workday/canvas-kit/pull/2350)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v9.1.21](https://github.com/Workday/canvas-kit/releases/tag/v9.1.21) (2023-09-26)

### Documentation

- docs: Update the docParser to prevent max call stack errors ([#2342](https://github.com/Workday/canvas-kit/pull/2342)) ([@NicholasBoll](https://github.com/NicholasBoll))
- docs: Add info to maintaining doc about deprecations ([#2339](https://github.com/Workday/canvas-kit/pull/2339)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@jamesfan](https://github.com/jamesfan))


## [v9.1.20](https://github.com/Workday/canvas-kit/releases/tag/v9.1.20) (2023-09-20)

### Components

- fix(Avatar): Support for Non-Square Input Image for Avatar component ([#2337](https://github.com/Workday/canvas-kit/pull/2337)) ([@thunguyen19](https://github.com/thunguyen19), [@mannycarrera4](https://github.com/mannycarrera4))


## [v8.6.22](https://github.com/Workday/canvas-kit/releases/tag/v8.6.22) (2023-09-20)

### Components

- fix(Avatar): Support for Non-Square Input Image for Avatar component ([#2337](https://github.com/Workday/canvas-kit/pull/2337)) ([@thunguyen19](https://github.com/thunguyen19), [@mannycarrera4](https://github.com/mannycarrera4))
## [v9.1.19](https://github.com/Workday/canvas-kit/releases/tag/v9.1.19) (2023-09-18)

### Documentation

- docs: Render type parameters in external SymbolDoc symbols ([#2340](https://github.com/Workday/canvas-kit/pull/2340)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- ci: Remove non-collaborator from reviewer lottery ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.21](https://github.com/Workday/canvas-kit/releases/tag/v8.6.21) (2023-09-18)

### Documentation

- docs: Render type parameters in external SymbolDoc symbols ([#2340](https://github.com/Workday/canvas-kit/pull/2340)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v9.1.18](https://github.com/Workday/canvas-kit/releases/tag/v9.1.18) (2023-09-06)

### Components

- fix(popup): Allow SVG elements in focus calculations ([#2331](https://github.com/Workday/canvas-kit/pull/2331)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.20](https://github.com/Workday/canvas-kit/releases/tag/v8.6.20) (2023-09-06)

### Components

- fix(popup): Allow SVG elements in focus calculations ([#2331](https://github.com/Workday/canvas-kit/pull/2331)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v9.1.17](https://github.com/Workday/canvas-kit/releases/tag/v9.1.17) (2023-09-06)

### Components

- fix(color-picker): Disable submit button when custom hex is invalid ([#2328](https://github.com/Workday/canvas-kit/pull/2328)) ([@kennethjang34](https://github.com/kennethjang34))


## [v9.1.16](https://github.com/Workday/canvas-kit/releases/tag/v9.1.16) (2023-08-29)

### Documentation

- fix: Accessibility enhancements to preview table examples ([#2321](https://github.com/Workday/canvas-kit/pull/2321)) ([@williamjstanton](https://github.com/williamjstanton))


## [v9.1.15](https://github.com/Workday/canvas-kit/releases/tag/v9.1.15) (2023-08-29)

### Components

- test: Add cypress tests for Pill component ([#2325](https://github.com/Workday/canvas-kit/pull/2325)) ([@dgubko](https://github.com/dgubko))


## [v9.1.14](https://github.com/Workday/canvas-kit/releases/tag/v9.1.14) (2023-08-24)

### Components

- fix(Tabs): Fix tab item icon accent styles ([#2323](https://github.com/Workday/canvas-kit/pull/2323)) ([@alanbsmith](https://github.com/alanbsmith), emma.okeeffe)


## [v8.6.19](https://github.com/Workday/canvas-kit/releases/tag/v8.6.19) (2023-08-24)

### Components

- fix(Tabs): Fix tab item icon accent styles ([#2323](https://github.com/Workday/canvas-kit/pull/2323)) ([@alanbsmith](https://github.com/alanbsmith), emma.okeeffe)
## [v9.1.13](https://github.com/Workday/canvas-kit/releases/tag/v9.1.13) (2023-08-14)

### Components

- fix: Table cell empty fix ([#2313](https://github.com/Workday/canvas-kit/pull/2313)) ([@kennethjang34](https://github.com/kennethjang34))


## [v9.1.12](https://github.com/Workday/canvas-kit/releases/tag/v9.1.12) (2023-08-11)

### Documentation

- docs: Add documentation guidelines ([#2310](https://github.com/Workday/canvas-kit/pull/2310)) ([@jamesfan](https://github.com/jamesfan))


## [v9.1.11](https://github.com/Workday/canvas-kit/releases/tag/v9.1.11) (2023-08-04)

### Documentation

- fix: Fix color util typo ([#2312](https://github.com/Workday/canvas-kit/pull/2312)) ([@alanbsmith](https://github.com/alanbsmith))


## [v9.1.10](https://github.com/Workday/canvas-kit/releases/tag/v9.1.10) (2023-08-03)

### Components

- fix: Breadcrumbs first item gets cut-off when two items in array ([#2308](https://github.com/Workday/canvas-kit/pull/2308)) ([@thelightbringer](https://github.com/thelightbringer), Abhijit Misra)


## [v8.6.18](https://github.com/Workday/canvas-kit/releases/tag/v8.6.18) (2023-08-03)

### Components

- fix: Breadcrumbs first item gets cut-off when two items in array ([#2308](https://github.com/Workday/canvas-kit/pull/2308)) ([@thelightbringer](https://github.com/thelightbringer), Abhijit Misra)
## [v9.1.9](https://github.com/Workday/canvas-kit/releases/tag/v9.1.9) (2023-08-01)

### Documentation

- fix(preview): Fixes undefined id and aria-describedby in TextInput ([#2305](https://github.com/Workday/canvas-kit/pull/2305)) ([@vibdev](https://github.com/vibdev), [@mannycarrera4](https://github.com/mannycarrera4))


## [v9.1.8](https://github.com/Workday/canvas-kit/releases/tag/v9.1.8) (2023-07-31)

### Components

- fix(preview): Blur firing incorrectly onClick ([#2304](https://github.com/Workday/canvas-kit/pull/2304)) ([@vibdev](https://github.com/vibdev))


## [v9.1.7](https://github.com/Workday/canvas-kit/releases/tag/v9.1.7) (2023-07-27)

### Documentation

- fix: Adding landmark regions to Action Bar examples ([#2291](https://github.com/Workday/canvas-kit/pull/2291)) ([@bstanton678](https://github.com/bstanton678))


## [v9.1.6](https://github.com/Workday/canvas-kit/releases/tag/v9.1.6) (2023-07-25)

### Components

- fix: Polishing the expandable container component ([#2293](https://github.com/Workday/canvas-kit/pull/2293)) ([@bstanton678](https://github.com/bstanton678))
  Update aria attributes on example for expandable container for better accessibility and remove alt text on avatar.


## [v9.1.5](https://github.com/Workday/canvas-kit/releases/tag/v9.1.5) (2023-07-21)




## [v9.1.4](https://github.com/Workday/canvas-kit/releases/tag/v9.1.4) (2023-07-19)

### Components

- chore: Ditch a few console logs from useActionBarModel that can clutter up test logs ([#2295](https://github.com/Workday/canvas-kit/pull/2295)) ([@ahayes91](https://github.com/ahayes91))


## [v9.1.3](https://github.com/Workday/canvas-kit/releases/tag/v9.1.3) (2023-07-18)

### Documentation

- docs: Update w3.org links ([#2287](https://github.com/Workday/canvas-kit/pull/2287)) ([@willklein](https://github.com/willklein))


## [v9.1.2](https://github.com/Workday/canvas-kit/releases/tag/v9.1.2) (2023-07-17)

### Components

- fix(combobox): Do not clear the input when no item is selected ([#2289](https://github.com/Workday/canvas-kit/pull/2289)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v9.1.1](https://github.com/Workday/canvas-kit/releases/tag/v9.1.1) (2023-07-14)

### Documentation

- fix: Add ids to docs headings ([#2284](https://github.com/Workday/canvas-kit/pull/2284)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@jamesfan](https://github.com/jamesfan))


## [v9.1.0](https://github.com/Workday/canvas-kit/releases/tag/v9.1.0) (2023-07-12)




## [v9.0.21](https://github.com/Workday/canvas-kit/releases/tag/v9.0.21) (2023-07-07)

### Components

- fix(checkbox): Fix indeterminate state not getting correctly applied ([#2281](https://github.com/Workday/canvas-kit/pull/2281)) ([@vibdev](https://github.com/vibdev))


## [v9.0.20](https://github.com/Workday/canvas-kit/releases/tag/v9.0.20) (2023-06-30)

### Components

- fix: Fix for useFocusRedirect ([#2258](https://github.com/Workday/canvas-kit/pull/2258)) ([@pablobirukov](https://github.com/pablobirukov), Pavel Birukov, [@mannycarrera4](https://github.com/mannycarrera4))
  `useFocusRedirect` handles focus leave from radio group within Popup


## [v9.0.19](https://github.com/Workday/canvas-kit/releases/tag/v9.0.19) (2023-06-29)

### Components

- fix: Update status indicator icon color on hover ([#2278](https://github.com/Workday/canvas-kit/pull/2278)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v8.6.17](https://github.com/Workday/canvas-kit/releases/tag/v8.6.17) (2023-06-29)

### Components

- fix: Update status indicator icon color on hover ([#2278](https://github.com/Workday/canvas-kit/pull/2278)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v9.0.18](https://github.com/Workday/canvas-kit/releases/tag/v9.0.18) (2023-06-27)

### Components

- fix: Move spreading of CSS styles to the top of a style block ([#2244](https://github.com/Workday/canvas-kit/pull/2244)) ([@thunguyen19](https://github.com/thunguyen19))


## [v9.0.17](https://github.com/Workday/canvas-kit/releases/tag/v9.0.17) (2023-06-26)

### Documentation

- docs: Update comments about Select options prop to match actual use ([#2271](https://github.com/Workday/canvas-kit/pull/2271)) ([@JeffreyRuder](https://github.com/JeffreyRuder))


## [v9.0.16](https://github.com/Workday/canvas-kit/releases/tag/v9.0.16) (2023-06-20)

### Documentation

- docs: Fixed Doc Parser Naming Collision ([#2261](https://github.com/Workday/canvas-kit/pull/2261)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v9.0.15](https://github.com/Workday/canvas-kit/releases/tag/v9.0.15) (2023-06-16)

### Documentation

- docs: Add codemod preamble ([#2252](https://github.com/Workday/canvas-kit/pull/2252)) ([@alanbsmith](https://github.com/alanbsmith), [@jamesfan](https://github.com/jamesfan))


## [v9.0.14](https://github.com/Workday/canvas-kit/releases/tag/v9.0.14) (2023-06-15)

### Documentation

- docs: Update comment describing accessibleHide utility ([#2260](https://github.com/Workday/canvas-kit/pull/2260)) ([@vibdev](https://github.com/vibdev))


## [v9.0.13](https://github.com/Workday/canvas-kit/releases/tag/v9.0.13) (2023-06-14)

### Components

- fix: Popper placements export in fallbackPlacements ([#2255](https://github.com/Workday/canvas-kit/pull/2255)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.16](https://github.com/Workday/canvas-kit/releases/tag/v8.6.16) (2023-06-14)

### Components

- fix: Popper placements export in fallbackPlacements ([#2255](https://github.com/Workday/canvas-kit/pull/2255)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v9.0.12](https://github.com/Workday/canvas-kit/releases/tag/v9.0.12) (2023-06-14)

### Components

- fix: Change Popup imports to prevent circular dependencies ([#2251](https://github.com/Workday/canvas-kit/pull/2251)) ([@MarcoASedano](https://github.com/MarcoASedano), marco.sedano)
- fix(collection): Default `T` to `any` to allow overriding children types ([#2254](https://github.com/Workday/canvas-kit/pull/2254)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.15](https://github.com/Workday/canvas-kit/releases/tag/v8.6.15) (2023-06-14)

### Components

- fix(collection): Default `T` to `any` to allow overriding children types ([#2254](https://github.com/Workday/canvas-kit/pull/2254)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.14](https://github.com/Workday/canvas-kit/releases/tag/v8.6.14) (2023-06-12)

### Components

- fix: Change Popup imports to prevent circular dependencies ([#2251](https://github.com/Workday/canvas-kit/pull/2251)) ([@MarcoASedano](https://github.com/MarcoASedano), marco.sedano)
## [v9.0.11](https://github.com/Workday/canvas-kit/releases/tag/v9.0.11) (2023-06-12)

### Documentation

- docs: Add accessible example for LoadingDots ([#2248](https://github.com/Workday/canvas-kit/pull/2248)) ([@dgubko](https://github.com/dgubko))


## [v8.6.13](https://github.com/Workday/canvas-kit/releases/tag/v8.6.13) (2023-06-12)

### Documentation

- docs: Add accessible example for LoadingDots ([#2248](https://github.com/Workday/canvas-kit/pull/2248)) ([@dgubko](https://github.com/dgubko))
## [v9.0.10](https://github.com/Workday/canvas-kit/releases/tag/v9.0.10) (2023-06-07)

### Components

- fix: Fix Popper imports ([#2245](https://github.com/Workday/canvas-kit/pull/2245)) ([@alanbsmith](https://github.com/alanbsmith))


## [v8.6.12](https://github.com/Workday/canvas-kit/releases/tag/v8.6.12) (2023-06-07)

### Components

- fix: Fix Popper imports ([#2245](https://github.com/Workday/canvas-kit/pull/2245)) ([@alanbsmith](https://github.com/alanbsmith))
## [v9.0.9](https://github.com/Workday/canvas-kit/releases/tag/v9.0.9) (2023-06-05)

### Components

- docs: Add Media Modal to examples ([#2226](https://github.com/Workday/canvas-kit/pull/2226)) ([@dgubko](https://github.com/dgubko))
- fix: Add custom fallback placements modifier ([#2200](https://github.com/Workday/canvas-kit/pull/2200)) ([@clarehuang](https://github.com/clarehuang), clare.huang, [@NicholasBoll](https://github.com/NicholasBoll))
  This fix adds additional fallback placements to prevent popups from rendering off screen. This behavior is different than before and might result in a popup rendering in an unexpected position. `fallbackPlacements` was added as a prop to `Popper` and `Popup.Popper` to allow you to override the default fallback placements (which are top/right/bottom/left in that order). This shouldn't be considered a breaking change unless your popup position needs to be restricted.


## [v8.6.11](https://github.com/Workday/canvas-kit/releases/tag/v8.6.11) (2023-06-05)

### Components

- fix: Add custom fallback placements modifier ([#2200](https://github.com/Workday/canvas-kit/pull/2200)) ([@clarehuang](https://github.com/clarehuang), clare.huang, [@NicholasBoll](https://github.com/NicholasBoll))
  This fix adds additional fallback placements to prevent popups from rendering off screen. This behavior is different than before and might result in a popup rendering in an unexpected position. `fallbackPlacements` was added as a prop to `Popper` and `Popup.Popper` to allow you to override the default fallback placements (which are top/right/bottom/left in that order). This shouldn't be considered a breaking change unless your popup position needs to be restricted.


## [v9.0.8](https://github.com/Workday/canvas-kit/releases/tag/v9.0.8) (2023-06-01)

### Components

- fix: Replace overflow on Table ([#2240](https://github.com/Workday/canvas-kit/pull/2240)) ([@dgubko](https://github.com/dgubko))
  We replaced overflow: scroll with overflow: auto to hide scrollbars unless needed. It would allow Table to not have scrollbars unless needed.


## [v8.6.10](https://github.com/Workday/canvas-kit/releases/tag/v8.6.10) (2023-05-25)

### Components

- docs: Add Media Modal to examples ([#2226](https://github.com/Workday/canvas-kit/pull/2226)) ([@dgubko](https://github.com/dgubko))
## [v9.0.7](https://github.com/Workday/canvas-kit/releases/tag/v9.0.7) (2023-05-25)

### Components

- fix: Fixing Alert and Error radio button examples ([#2197](https://github.com/Workday/canvas-kit/pull/2197)) ([@bstanton678](https://github.com/bstanton678))


## [v9.0.6](https://github.com/Workday/canvas-kit/releases/tag/v9.0.6) (2023-05-24)

### Component

- fix: Fixing focus blur problem on basic radio group example ([#2198](https://github.com/Workday/canvas-kit/pull/2198)) ([@bstanton678](https://github.com/bstanton678), [@mannycarrera4](https://github.com/mannycarrera4))


## [v9.0.5](https://github.com/Workday/canvas-kit/releases/tag/v9.0.5) (2023-05-23)

### Infrastructure

- ci: Support fast-forward-merges [skip-release] ([#2232](https://github.com/Workday/canvas-kit/pull/2232)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.9](https://github.com/Workday/canvas-kit/releases/tag/v8.6.9) (2023-05-23)

### Infrastructure

- ci: Support fast-forward-merges [skip-release] ([#2232](https://github.com/Workday/canvas-kit/pull/2232)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v9.0.4](https://github.com/Workday/canvas-kit/releases/tag/v9.0.4) (2023-05-23)

### Components

- fix: Associating FormField hint while not in error state ([#2199](https://github.com/Workday/canvas-kit/pull/2199)) ([@bstanton678](https://github.com/bstanton678))


## [v9.0.3](https://github.com/Workday/canvas-kit/releases/tag/v9.0.3) (2023-05-19)

### Examples

- fix: Add Side Panel with Navigation Example ([#2106](https://github.com/Workday/canvas-kit/pull/2106)) ([@myvuuu](https://github.com/myvuuu), manuel.carrera, [@mannycarrera4](https://github.com/mannycarrera4))


## [v9.0.2](https://github.com/Workday/canvas-kit/releases/tag/v9.0.2) (2023-05-18)

### Components

- fix(collection): Fix SSR focus and multiple tab stops ([#2223](https://github.com/Workday/canvas-kit/pull/2223)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.8](https://github.com/Workday/canvas-kit/releases/tag/v8.6.8) (2023-05-17)

### Components

- fix(collection): Fix SSR focus and multiple tab stops ([#2223](https://github.com/Workday/canvas-kit/pull/2223)) ([@NicholasBoll](https://github.com/NicholasBoll))
## [v9.0.1](https://github.com/Workday/canvas-kit/releases/tag/v9.0.1) (2023-05-17)

### Components

- fix: Fix Checkbox label padding to support RTL ([#2216](https://github.com/Workday/canvas-kit/pull/2216)) ([@alanbsmith](https://github.com/alanbsmith), Alex Nicholls)
- fix: Focusable elements not always focused ([#2204](https://github.com/Workday/canvas-kit/pull/2204)) ([@TylerCharlesworth](https://github.com/TylerCharlesworth), [@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.7](https://github.com/Workday/canvas-kit/releases/tag/v8.6.7) (2023-05-17)

### Components

- fix: Focusable elements not always focused ([#2204](https://github.com/Workday/canvas-kit/pull/2204)) ([@TylerCharlesworth](https://github.com/TylerCharlesworth), [@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.6](https://github.com/Workday/canvas-kit/releases/tag/v8.6.6) (2023-05-12)

### Components

- fix: Fix Checkbox label padding to support RTL ([#2216](https://github.com/Workday/canvas-kit/pull/2216)) ([@alanbsmith](https://github.com/alanbsmith), Alex Nicholls)
## [v9.0.0](https://github.com/Workday/canvas-kit/releases/tag/v9.0.0) (2023-05-10)

### BREAKING CHANGES

- [#1970](https://github.com/Workday/canvas-kit/pull/1970) The `Drawer` component was hard deprecated and fully removed from Canvas Kit. Please replace the deprecated `Drawer` component with `SidePanel` from the Preview package.
- [#1978](https://github.com/Workday/canvas-kit/pull/1978) If you expected a button to submit by default, you'll have to add the attribute `type="submit"` in order to submit.
- [#2018](https://github.com/Workday/canvas-kit/pull/2018) We have hard deprecated the Layout and Column components and they have been fully removed from our codebase in v9. We recommend using the `Grid` component as an alternative.
- [#2012](https://github.com/Workday/canvas-kit/pull/2012) We've hard deprecated the `Stack`, `HStack` and `VStack` components. We recommend using the `Flex` component as a replacement and replacing the `spacing` prop with the `gap` prop. You can also run `npx @workday/canvas-kit-codemod softDeprecate/Stack` as well.
- [#2034](https://github.com/Workday/canvas-kit/pull/2034) - Lodash is no longer required for Canvas kit
  - memoized is removed from FocusRingOptions
- [#2044](https://github.com/Workday/canvas-kit/pull/2044) If you're using Toast from Labs already, the package will be updated to point to `@workday/canvas-kit-react/toast`. If you're using the Toast from Main, we've replaced it with the compound Toast from labs. `v9` codemod should handle these changes for you or you can reference our v9 upgrade guide for more details.
- [#2120](https://github.com/Workday/canvas-kit/pull/2120) - We've removed `getCanvasTheme` and `useCanvasTheme`.
  - Use `useTheme` when you have a `CanvasProvider` or you're inside of a functional component
  - Use `getTheme` when inside a styled component and you need access to theme.
- [#2180](https://github.com/Workday/canvas-kit/pull/2180) - Removed `composeModelHooks` from `@workday/canvas-kit-react/common`
- [#2190](https://github.com/Workday/canvas-kit/pull/2190) The type signature of `composeHooks` was changed to give more accurate return prop types. This may cause issues with Typescript if your code expected the incorrect return types.
- [#2194](https://github.com/Workday/canvas-kit/pull/2194) The signature of the `NavigationManaget` and `NavigationRequestor` was changed to use numeric indexes instead of string identifiers. This will only break for those who created a custom navigation manager.

### Codemod

- test: Update Toast codemod to transform before promote ([#2125](https://github.com/Workday/canvas-kit/pull/2125)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)

### Codemods

- fix: Stack Codemod Fix ([#2127](https://github.com/Workday/canvas-kit/pull/2127)) ([@josh-bagwell](https://github.com/josh-bagwell))

### Components

- chore: Hard deprecate Drawer component ([#1970](https://github.com/Workday/canvas-kit/pull/1970)) ([@RayRedGoose](https://github.com/RayRedGoose), [@mannycarrera4](https://github.com/mannycarrera4))
- fix: Update button type for all canvas kit buttons ([#1978](https://github.com/Workday/canvas-kit/pull/1978)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  We've changed the default button type for all of our buttons from `submit` to `button`
- chore: Hard deprecate Layout and Column components ([#2018](https://github.com/Workday/canvas-kit/pull/2018)) ([@RayRedGoose](https://github.com/RayRedGoose))
- feat: Remove Stack, HStack and VStack ([#2012](https://github.com/Workday/canvas-kit/pull/2012)) ([@josh-bagwell](https://github.com/josh-bagwell))
- feat: Promote labs Toast to Main ([#2044](https://github.com/Workday/canvas-kit/pull/2044)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@RayRedGoose](https://github.com/RayRedGoose))
  We've promoted Toast from labs to the main package. This is a replacement from what was in the main package to our compound component version in labs.
- feat: Update useTheme hook ([#2120](https://github.com/Workday/canvas-kit/pull/2120)) ([@RayRedGoose](https://github.com/RayRedGoose), [@mannycarrera4](https://github.com/mannycarrera4))
- feat: Tables Component ([#2118](https://github.com/Workday/canvas-kit/pull/2118)) ([@josh-bagwell](https://github.com/josh-bagwell))
  We've built a new `Table` compound component that will have more flexibility and has access to lower level components like [Grid](https://canvas.workdaydesign.com/components/layout/grid) and [Flex](https://canvas.workdaydesign.com/components/layout/flex).
- feat: Add 'as' method with a stable reference to all component utilities ([#2166](https://github.com/Workday/canvas-kit/pull/2166)) ([@NicholasBoll](https://github.com/NicholasBoll))
- fix: Only pass correct model to model components when using 'as' ([#2168](https://github.com/Workday/canvas-kit/pull/2168)) ([@NicholasBoll](https://github.com/NicholasBoll), [@josh-bagwell](https://github.com/josh-bagwell))
- chore: Remove unused composeModelHooks function ([#2180](https://github.com/Workday/canvas-kit/pull/2180)) ([@NicholasBoll](https://github.com/NicholasBoll))
- feat: Add more layout examples ([#2178](https://github.com/Workday/canvas-kit/pull/2178)) ([@RayRedGoose](https://github.com/RayRedGoose))
- feat(text-input): Add InputGroup component ([#2182](https://github.com/Workday/canvas-kit/pull/2182)) ([@NicholasBoll](https://github.com/NicholasBoll))
  `InputGroup` will replace `InputIconContainer`. `InputIconContainer` does not handle bidirectionality or icons at the start of an input. `InputIconContainer` will be deprecated and later removed in future versions.
  
  Before:
  ```tsx
  <InputIconContainer icon={<SystemIcon icon={exclamationCircleIcon} />} />
  ```
  
  After
  ```tsx
  <InputGroup>
    <InputGroup.Input />
    <InputGroup.InnerEnd>
      <SystemIcon icon={exclamationCircleIcon} />
    </InputGroup.InnerEnd>
  </InputGroup>
  ```
- fix: Return the correct props from composeHooks ([#2190](https://github.com/Workday/canvas-kit/pull/2190)) ([@NicholasBoll](https://github.com/NicholasBoll), [@alanbsmith](https://github.com/alanbsmith))
- chore: Simplify composeHooks function ([#2191](https://github.com/Workday/canvas-kit/pull/2191)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Rename Combobox.spec to ComboboxLabs.spec ([#2193](https://github.com/Workday/canvas-kit/pull/2193)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Extract keyUtils to be used in other key-based collection hooks ([#2192](https://github.com/Workday/canvas-kit/pull/2192)) ([@NicholasBoll](https://github.com/NicholasBoll))
- chore: Use index instead of identifier for cursor navigation ([#2194](https://github.com/Workday/canvas-kit/pull/2194)) ([@NicholasBoll](https://github.com/NicholasBoll))
- feat(collection): Add support for string items ([#2195](https://github.com/Workday/canvas-kit/pull/2195)) ([@NicholasBoll](https://github.com/NicholasBoll), [@alanbsmith](https://github.com/alanbsmith))

### Dependencies

- chore: Remove lodash dependency from canvas-kit ([#2034](https://github.com/Workday/canvas-kit/pull/2034)) ([@jaslloyd](https://github.com/jaslloyd), [@NicholasBoll](https://github.com/NicholasBoll))

### Documentation

- docs: Revert removal of Layout section ([#2094](https://github.com/Workday/canvas-kit/pull/2094)) ([@RayRedGoose](https://github.com/RayRedGoose))
- fix: Clean up toast documentation ([#2108](https://github.com/Workday/canvas-kit/pull/2108)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@jamesfan](https://github.com/jamesfan))
- docs: Clean up v9 Upgrade Guide ([#2132](https://github.com/Workday/canvas-kit/pull/2132)) ([@jamesfan](https://github.com/jamesfan), manuel.carrera)
- docs: Fix Preview Table docs ([#2159](https://github.com/Workday/canvas-kit/pull/2159)) ([@jamesfan](https://github.com/jamesfan))
- fix: Removed Table Container Example ([#2164](https://github.com/Workday/canvas-kit/pull/2164)) ([@josh-bagwell](https://github.com/josh-bagwell))
- fix: Replaced Soft and Hard Deprecation Naming ([#2165](https://github.com/Workday/canvas-kit/pull/2165)) ([@josh-bagwell](https://github.com/josh-bagwell), manuel.carrera)
  Changed definition of `soft-deprecation` and `hard-deprecation` to `deprecation/deprecate` and `removal/remove`.
- feat: Dialog Update to MDX ([#2184](https://github.com/Workday/canvas-kit/pull/2184)) ([@josh-bagwell](https://github.com/josh-bagwell), [@jamesfan](https://github.com/jamesfan))

### Infrastructure

- chore: Add initial V9 codemod ([#2021](https://github.com/Workday/canvas-kit/pull/2021)) ([@alanbsmith](https://github.com/alanbsmith), [@willklein](https://github.com/willklein))
- test: Modify visual testing ([#2028](https://github.com/Workday/canvas-kit/pull/2028)) ([@RayRedGoose](https://github.com/RayRedGoose))
- chore: Update the TSconfig target to es2019 ([#2135](https://github.com/Workday/canvas-kit/pull/2135)) ([@NicholasBoll](https://github.com/NicholasBoll))
  We're updating our build target from `es5` to `es2019`. This changes the syntax generated by allowing syntax supported up to `es2019`. This may impact older environments that do not support `es2019` syntax like older versions of nodejs. This could also impact older AST build parsers that don't understand newer JavasScript syntax. This could include old versions of Webpack or outdated babel parsers for Jest. If you see a message like "Syntax Error", you may have to upgrade your bundler or babel parser.
- chore: Add option to skip docgen ([#2176](https://github.com/Workday/canvas-kit/pull/2176)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Tokens

- fix: Modify depth values to improve visual design ([#2091](https://github.com/Workday/canvas-kit/pull/2091)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  We've updated our `depth` tokens to be more subtle rather than harsh. Any component using these depth tokens will be updated, including `Card, Menu, Toast, Box, Dialog, Popup`.

### Utilities

- chore: Move useThemedRing to main package and deprecate useThemeRTL ([#2119](https://github.com/Workday/canvas-kit/pull/2119)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  - We've promoted `useThemedRing` to our Main package.
  - We've deprecated `useThemeRTL` from our Labs package. You may still use this utility but we encourage consumers to use [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).


## [v8.6.5](https://github.com/Workday/canvas-kit/releases/tag/v8.6.5) (2023-05-10)

### Infrastructure

- chore: Add actions for major release ([#2211](https://github.com/Workday/canvas-kit/pull/2211)) ([@RayRedGoose](https://github.com/RayRedGoose), [@mannycarrera4](https://github.com/mannycarrera4))


## [v8.6.4](https://github.com/Workday/canvas-kit/releases/tag/v8.6.4) (2023-05-01)

### BREAKING CHANGES

- [#2173](https://github.com/Workday/canvas-kit/pull/2173) Optional breaking changes message. If your PR includes breaking changes. It is extremely rare to put breaking changes outside a `prerelease/major` branch. Anything in this section will show up in release notes. Remove this section if no breaking changes are present.

### Documentation

- fix: Basic Grid Example with landmark regions for screen readers ([#2173](https://github.com/Workday/canvas-kit/pull/2173)) ([@bstanton678](https://github.com/bstanton678))
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.


## [v8.6.3](https://github.com/Workday/canvas-kit/releases/tag/v8.6.3) (2023-05-01)

### Dependencies

- chore: Upgrade fsevents to a non-vulnerable version ([#2181](https://github.com/Workday/canvas-kit/pull/2181)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.6.2](https://github.com/Workday/canvas-kit/releases/tag/v8.6.2) (2023-04-27)

### Components

- fix: BaseButton and ButtonLabelIcon extend SystemIconProps ([#2157](https://github.com/Workday/canvas-kit/pull/2157)) ([@thunguyen19](https://github.com/thunguyen19))


## [v7.4.12](https://github.com/Workday/canvas-kit/releases/tag/v7.4.12) (2023-04-27)

### Components

- fix: BaseButton and ButtonLabelIcon extend SystemIconProps ([#2157](https://github.com/Workday/canvas-kit/pull/2157)) ([@thunguyen19](https://github.com/thunguyen19))


## [v7.4.11](https://github.com/Workday/canvas-kit/releases/tag/v7.4.11) (2023-04-26)
## [v8.6.1](https://github.com/Workday/canvas-kit/releases/tag/v8.6.1) (2023-04-26)

### Components

- fix(menu): Menu does not close with aria-disabled=true ([#2128](https://github.com/Workday/canvas-kit/pull/2128)) ([@NicholasBoll](https://github.com/NicholasBoll), manuel.carrera)
- fix(form-field): Forward required prop to input ([#2154](https://github.com/Workday/canvas-kit/pull/2154)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Dependencies

- fix: Add react-dom peer-dep to main package ([#2162](https://github.com/Workday/canvas-kit/pull/2162)) ([@alanbsmith](https://github.com/alanbsmith))

### Infrastructure

- fix: Update release action to support node 16 ([#2170](https://github.com/Workday/canvas-kit/pull/2170)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.4.11](https://github.com/Workday/canvas-kit/releases/tag/v7.4.11) (2023-04-26)

### Components

- fix(menu): Menu does not close with aria-disabled=true ([#2128](https://github.com/Workday/canvas-kit/pull/2128)) ([@NicholasBoll](https://github.com/NicholasBoll), manuel.carrera)
- fix(form-field): Forward required prop to input ([#2154](https://github.com/Workday/canvas-kit/pull/2154)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Dependencies

- fix: Add react-dom peer-dep to main package ([#2162](https://github.com/Workday/canvas-kit/pull/2162)) ([@alanbsmith](https://github.com/alanbsmith))

### Infrastructure

- fix: Update release action to support node 16 ([#2170](https://github.com/Workday/canvas-kit/pull/2170)) ([@RayRedGoose](https://github.com/RayRedGoose))
## [v8.6.0](https://github.com/Workday/canvas-kit/releases/tag/v8.6.0) (2023-04-20)

### Components

- feat: Added inset to PositionStyleProps ([#2129](https://github.com/Workday/canvas-kit/pull/2129)) ([@thunguyen19](https://github.com/thunguyen19))
- feat: Allow Icon components to use color tokens ([#2097](https://github.com/Workday/canvas-kit/pull/2097)) ([@thunguyen19](https://github.com/thunguyen19))
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.

### Infrastructure

- ci: Fix minor release action ([@RayRedGoose](https://github.com/RayRedGoose))


## [v8.5.13](https://github.com/Workday/canvas-kit/releases/tag/v8.5.13) (2023-04-17)

### Components

- fix: PopupCard maxHeight calc function ([#2130](https://github.com/Workday/canvas-kit/pull/2130)) ([@thunguyen19](https://github.com/thunguyen19), [@alanbsmith](https://github.com/alanbsmith))


## [v8.5.12](https://github.com/Workday/canvas-kit/releases/tag/v8.5.12) (2023-04-14)

### Components

- fix(menu): Fix MenuItem icon spacing ([#2145](https://github.com/Workday/canvas-kit/pull/2145)) ([@alanbsmith](https://github.com/alanbsmith), [@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Updated spacing between icon and text in our menus from `8px` to `16px` to match our design specs.


## [v8.5.11](https://github.com/Workday/canvas-kit/releases/tag/v8.5.11) (2023-04-12)

### Infrastructure

- ci: Replace install steps by composite actions ([#2146](https://github.com/Workday/canvas-kit/pull/2146)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v8.5.10](https://github.com/Workday/canvas-kit/releases/tag/v8.5.10) (2023-04-11)

### Codemods

- fix(codemod): Pass codemod options to jscodeshift script ([#2137](https://github.com/Workday/canvas-kit/pull/2137)) ([@alanbsmith](https://github.com/alanbsmith))

### Infrastructure

- chore: Upgrade to Node 16 ([#2139](https://github.com/Workday/canvas-kit/pull/2139)) ([@alanbsmith](https://github.com/alanbsmith))
- fix: Update release actions to use node 16 ([#2142](https://github.com/Workday/canvas-kit/pull/2142)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v8.5.9](https://github.com/Workday/canvas-kit/releases/tag/v8.5.9) (2023-03-30)

### Components

- fix: Extract the correct ref with a styled component ([#2122](https://github.com/Workday/canvas-kit/pull/2122)) ([@NicholasBoll](https://github.com/NicholasBoll))
  The following is now allowed:
  
  ```tsx
  const StyledComponent = styled('button')({})
  
  const MyComponnent = createComponent(StyledComponent)({
    Component(elemProps, ref, Element) {
      return <Box as={Element} ref={ref} {...elemProps} />
    }
  })
  ```


## [v8.5.8](https://github.com/Workday/canvas-kit/releases/tag/v8.5.8) (2023-03-27)

### Documentation

- docs: Added doc for Delete Button story ([#2113](https://github.com/Workday/canvas-kit/pull/2113)) ([@thunguyen19](https://github.com/thunguyen19))


## [v8.5.7](https://github.com/Workday/canvas-kit/releases/tag/v8.5.7) (2023-03-23)

### Infrastructure

- chore: Update release workflows ([#2102](https://github.com/Workday/canvas-kit/pull/2102)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v8.5.6](https://github.com/Workday/canvas-kit/releases/tag/v8.5.6) (2023-03-21)

### Components

- fix(collection): Correctly use custom getId ([#2096](https://github.com/Workday/canvas-kit/pull/2096)) ([@NicholasBoll](https://github.com/NicholasBoll))
  An example was incorrectly using the wrong id. Note that `state.items` in a dynamic collection wraps your provided items so there is a `.id` property on `state.items`. `model.getId` is no longer needed and will be removed in the future to avoid confusion.


## [v7.4.10](https://github.com/Workday/canvas-kit/releases/tag/v7.4.10) (2023-03-21)

### Components

- fix(collection): Correctly use custom getId ([#2096](https://github.com/Workday/canvas-kit/pull/2096)) ([@NicholasBoll](https://github.com/NicholasBoll))
  An example was incorrectly using the wrong id. Note that `state.items` in a dynamic collection wraps your provided items so there is a `.id` property on `state.items`. `model.getId` is no longer needed and will be removed in the future to avoid confusion.
## [v8.5.5](https://github.com/Workday/canvas-kit/releases/tag/v8.5.5) (2023-03-16)

### Components

- docs: Move Box, Flex, and Grid to a new Layout Folder in Storybook ([#2078](https://github.com/Workday/canvas-kit/pull/2078)) ([@thunguyen19](https://github.com/thunguyen19))


## [v8.5.4](https://github.com/Workday/canvas-kit/releases/tag/v8.5.4) (2023-03-15)

### Documentation

- docs: Filter out model props in container components ([#2085](https://github.com/Workday/canvas-kit/pull/2085)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.5.3](https://github.com/Workday/canvas-kit/releases/tag/v8.5.3) (2023-03-13)

### Documentation

- docs: Add breadcrumbs to symbol doc dialog for nested symbols ([#2072](https://github.com/Workday/canvas-kit/pull/2072)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))


## [v8.5.2](https://github.com/Workday/canvas-kit/releases/tag/v8.5.2) (2023-03-09)

### Infrastructure

- ci: Add logging to the merge step in forward-merge ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.5.1](https://github.com/Workday/canvas-kit/releases/tag/v8.5.1) (2023-03-09)

### Components

- fix: Remove style attribute on Expandable Title ([#2074](https://github.com/Workday/canvas-kit/pull/2074)) ([@vibdev](https://github.com/vibdev))
  Not explicitly a breaking change for `Expandable.Title`, but does alter the specificity for fontFamily, fontSize, lineHeight, fontWeight, color, and textAlign.

### Infrastructure

- chore: Update browserlist config for eslint compat/compat ([#2075](https://github.com/Workday/canvas-kit/pull/2075)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.5.0](https://github.com/Workday/canvas-kit/releases/tag/v8.5.0) (2023-03-08)

### Components

- feat: Allow SystemIcon to use token colors ([#1988](https://github.com/Workday/canvas-kit/pull/1988)) ([@thunguyen19](https://github.com/thunguyen19))
  Allow SystemIcon to use token colors for any color related props.
- fix: Update modal padding to match mobile specs ([#2008](https://github.com/Workday/canvas-kit/pull/2008)) ([@seans-cummin](https://github.com/seans-cummin), [@mannycarrera4](https://github.com/mannycarrera4))
  - Updating padding from 16px to 24px for smaller screen sizes, bringing the total padding between edge and content to 24px.
  - Reduced padding between title and body from 16px to 8px for smaller screen sizes.

### Documentation

- docs: Add custom docgen parsing ([#1962](https://github.com/Workday/canvas-kit/pull/1962)) ([@NicholasBoll](https://github.com/NicholasBoll))
- docs: Ignore dist directories when documenting symbols ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.4.13](https://github.com/Workday/canvas-kit/releases/tag/v8.4.13) (2023-03-07)

### Components

- fix: Allow overriding aria-describedby in useTooltip ([#2064](https://github.com/Workday/canvas-kit/pull/2064)) ([@EugeneCib](https://github.com/EugeneCib), [@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- ci: Block fontawesome in Cypress tests to prevent failures ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add logging to the merge step in forward-merge ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.4.12](https://github.com/Workday/canvas-kit/releases/tag/v8.4.12) (2023-03-01)




## [v8.4.11](https://github.com/Workday/canvas-kit/releases/tag/v8.4.11) (2023-02-28)

### Infrastructure

- ci: Changing assign reviewer action to a lottery system ([#2039](https://github.com/Workday/canvas-kit/pull/2039)) ([@jaclynjessup](https://github.com/jaclynjessup))
- ci: Updating project board action ([#2026](https://github.com/Workday/canvas-kit/pull/2026)) ([@jaclynjessup](https://github.com/jaclynjessup))
- ci: Fix to invalid yml error ([#2040](https://github.com/Workday/canvas-kit/pull/2040)) ([@jaclynjessup](https://github.com/jaclynjessup))
- ci: Updates to lottery and project actions ([#2054](https://github.com/Workday/canvas-kit/pull/2054)) ([@jaclynjessup](https://github.com/jaclynjessup))

### Testing

- test: Update tooltip testing story to render properly ([#2047](https://github.com/Workday/canvas-kit/pull/2047)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v7.4.9](https://github.com/Workday/canvas-kit/releases/tag/v7.4.9) (2023-02-24)

### Testing

- test: Update tooltip testing story to render properly ([#2047](https://github.com/Workday/canvas-kit/pull/2047)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v8.4.10](https://github.com/Workday/canvas-kit/releases/tag/v8.4.10) (2023-02-14)

### Codemods

- fix: Fixed an issue with codemod not recognizing VStack or HStack ([#2036](https://github.com/Workday/canvas-kit/pull/2036)) ([@josh-bagwell](https://github.com/josh-bagwell))

### Infrastructure

- chore: Adding step to add label for PR review ([#2027](https://github.com/Workday/canvas-kit/pull/2027)) ([@jaclynjessup](https://github.com/jaclynjessup))
- ci: Adding action to auto assign PR reviewer on label ([#2031](https://github.com/Workday/canvas-kit/pull/2031)) ([@jaclynjessup](https://github.com/jaclynjessup))


## [v8.4.9](https://github.com/Workday/canvas-kit/releases/tag/v8.4.9) (2023-02-07)

### Documentation

- docs: Add docs on model hooks and create utilities ([#1881](https://github.com/Workday/canvas-kit/pull/1881)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll))
  To better support our consumers, we're adding documentation on our Compound Component utilities and hooks. You can find the docs under Hooks and Utilities -> Compound Components


## [v8.4.8](https://github.com/Workday/canvas-kit/releases/tag/v8.4.8) (2023-02-07)

### Components

- fix: Allow overriding of return focus when closing a popup ([#1991](https://github.com/Workday/canvas-kit/pull/1991)) ([@christine-m](https://github.com/christine-m), christine.mullins)


## [v7.4.8](https://github.com/Workday/canvas-kit/releases/tag/v7.4.8) (2023-02-07)

### Components

- fix: Allow overriding of return focus when closing a popup ([#1991](https://github.com/Workday/canvas-kit/pull/1991)) ([@christine-m](https://github.com/christine-m), christine.mullins)
## [v8.4.7](https://github.com/Workday/canvas-kit/releases/tag/v8.4.7) (2023-02-07)

### Documentation

- docs: Cards, adding notice under 'as' usage ([#2000](https://github.com/Workday/canvas-kit/pull/2000)) ([@bstanton678](https://github.com/bstanton678), william.stanton, [@myvuuu](https://github.com/myvuuu), [@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v8.4.6](https://github.com/Workday/canvas-kit/releases/tag/v8.4.6) (2023-02-06)

### Documentation

- fix: Update broken link in CONTRIBUTING.md ([#2019](https://github.com/Workday/canvas-kit/pull/2019)) ([@thunguyen19](https://github.com/thunguyen19))


## [v8.4.5](https://github.com/Workday/canvas-kit/releases/tag/v8.4.5) (2023-02-03)

### Documentation

- docs: Fix Expandable prop tables ([#2016](https://github.com/Workday/canvas-kit/pull/2016)) ([@alanbsmith](https://github.com/alanbsmith))


## [v8.4.4](https://github.com/Workday/canvas-kit/releases/tag/v8.4.4) (2023-02-01)

### Testing

- test: Increase font delay to make chromatic happy ([#1996](https://github.com/Workday/canvas-kit/pull/1996)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v8.4.3](https://github.com/Workday/canvas-kit/releases/tag/v8.4.3) (2023-02-01)

### Documentation

- docs: Fix typo in react-font README ([#2010](https://github.com/Workday/canvas-kit/pull/2010)) ([@sheelah](https://github.com/sheelah), Sheelah Brennan)


## [v8.4.2](https://github.com/Workday/canvas-kit/releases/tag/v8.4.2) (2023-01-30)

### Codemods

- fix: Update to soft dep stack codemod for styled component ([#2007](https://github.com/Workday/canvas-kit/pull/2007)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v8.4.1](https://github.com/Workday/canvas-kit/releases/tag/v8.4.1) (2023-01-26)

### Documentation

- docs: Add example for a simple compound component ([#1998](https://github.com/Workday/canvas-kit/pull/1998)) ([@vibdev](https://github.com/vibdev))


## [v8.4.0](https://github.com/Workday/canvas-kit/releases/tag/v8.4.0) (2023-01-25)

### Codemods

- feat: Soft Deprecate Stack ([#1981](https://github.com/Workday/canvas-kit/pull/1981)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v8.3.12](https://github.com/Workday/canvas-kit/releases/tag/v8.3.12) (2023-01-24)

### Components

- fix: Radio button navigation does not stay within its form ([#1995](https://github.com/Workday/canvas-kit/pull/1995)) ([@thunguyen19](https://github.com/thunguyen19))


## [v8.3.11](https://github.com/Workday/canvas-kit/releases/tag/v8.3.11) (2023-01-17)

### Components

- fix(tabs): Use mask image to display fade effect on tabs ([#1705](https://github.com/Workday/canvas-kit/pull/1705)) ([@anishatulai](https://github.com/anishatulai), Anisha Tulai)


## [v8.3.10](https://github.com/Workday/canvas-kit/releases/tag/v8.3.10) (2023-01-13)

### Documentation

- docs(TextArea): Update installation package name ([#1987](https://github.com/Workday/canvas-kit/pull/1987)) ([@roydelgado](https://github.com/roydelgado))


## [v8.3.9](https://github.com/Workday/canvas-kit/releases/tag/v8.3.9) (2023-01-13)

### Components

- chore: Fix issue with changing wrong Layout ([#1986](https://github.com/Workday/canvas-kit/pull/1986)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v8.3.8](https://github.com/Workday/canvas-kit/releases/tag/v8.3.8) (2023-01-10)

### Documentation

- fix: Remove react sub folder for form field ([#1979](https://github.com/Workday/canvas-kit/pull/1979)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v8.3.7](https://github.com/Workday/canvas-kit/releases/tag/v8.3.7) (2023-01-10)

### Storybook

- fix: Update links on welcome and brand logo ([#1976](https://github.com/Workday/canvas-kit/pull/1976)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v8.3.6](https://github.com/Workday/canvas-kit/releases/tag/v8.3.6) (2023-01-09)

### Infrastructure

- fix: Storybook sidebar highlight styling ([#1975](https://github.com/Workday/canvas-kit/pull/1975)) ([@jaclynjessup](https://github.com/jaclynjessup))


## [v8.3.5](https://github.com/Workday/canvas-kit/releases/tag/v8.3.5) (2023-01-09)

### Documentation

- chore: Re organize storybook ([#1943](https://github.com/Workday/canvas-kit/pull/1943)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@jaclynjessup](https://github.com/jaclynjessup))
  We've updated our categories and organization on storybook to better surface information.


## [v8.3.4](https://github.com/Workday/canvas-kit/releases/tag/v8.3.4) (2023-01-09)

### Testing

- test(tooltip): Add delay to fix flaky placement tests on tooltips ([#1968](https://github.com/Workday/canvas-kit/pull/1968)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v7.4.7](https://github.com/Workday/canvas-kit/releases/tag/v7.4.7) (2023-01-06)

### Testing

- test(tooltip): Add delay to fix flaky placement tests on tooltips ([#1968](https://github.com/Workday/canvas-kit/pull/1968)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
## [v8.3.3](https://github.com/Workday/canvas-kit/releases/tag/v8.3.3) (2022-12-21)

### Documentation

- docs: Add Pagination responsive range example ([#1966](https://github.com/Workday/canvas-kit/pull/1966)) ([@alanbsmith](https://github.com/alanbsmith), Will Klein)


## [v8.3.2](https://github.com/Workday/canvas-kit/releases/tag/v8.3.2) (2022-12-19)

### Components

- fix: Set Pagination GoTo TextInput to use current page as initial value ([#1930](https://github.com/Workday/canvas-kit/pull/1930)) ([@alanbsmith](https://github.com/alanbsmith), manuel.carrera)


## [v8.3.1](https://github.com/Workday/canvas-kit/releases/tag/v8.3.1) (2022-12-16)

### Components

- chore: Remove conventional-recommended-bump from release.yml ([#1961](https://github.com/Workday/canvas-kit/pull/1961)) ([@alanbsmith](https://github.com/alanbsmith))

### Dependencies

- chore: Remove @emotion/jest ([#1957](https://github.com/Workday/canvas-kit/pull/1957)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- chore: Remove question template and dead links ([#1958](https://github.com/Workday/canvas-kit/pull/1958)) ([@jaclynjessup](https://github.com/jaclynjessup))


## [v8.3.0](https://github.com/Workday/canvas-kit/releases/tag/v8.3.0) (2022-12-09)

### Components

- fix: Fix Expandable exports and types ([#1953](https://github.com/Workday/canvas-kit/pull/1953)) ([@alanbsmith](https://github.com/alanbsmith))
  `useExpandableModel` wasn't properly exported with the other hooks. It's been moved into the `/hooks` directory and exported from there. If you were importing this hook from `dist`, you'll  need to update the import.
  
  ```tsx
  // before
  import { useExpandableModel } from "@workday/canvas-kit-labs-react/dist/es6/expandable/lib/useExpandableModel";
  
  // after
  import { useExpandableModel } from "@workday/canvas-kit-labs-react/expandable";
  ```


## [v7.4.6](https://github.com/Workday/canvas-kit/releases/tag/v7.4.6) (2022-12-09)

### Components

- fix: Fix Expandable exports and types ([#1953](https://github.com/Workday/canvas-kit/pull/1953)) ([@alanbsmith](https://github.com/alanbsmith))
  `useExpandableModel` wasn't properly exported with the other hooks. It's been moved into the `/hooks` directory and exported from there. If you were importing this hook from `dist`, you'll  need to update the import.
  
  ```tsx
  // before
  import { useExpandableModel } from "@workday/canvas-kit-labs-react/dist/es6/expandable/lib/useExpandableModel";
  
  // after
  import { useExpandableModel } from "@workday/canvas-kit-labs-react/expandable";
  ```
## [v8.2.4](https://github.com/Workday/canvas-kit/releases/tag/v8.2.4) (2022-12-06)




## [v8.2.3](https://github.com/Workday/canvas-kit/releases/tag/v8.2.3) (2022-12-01)

### Documentation

- docs: Responsive Codeblock Fix ([#1937](https://github.com/Workday/canvas-kit/pull/1937)) ([@josh-bagwell](https://github.com/josh-bagwell))


## [v8.2.2](https://github.com/Workday/canvas-kit/releases/tag/v8.2.2) (2022-11-22)

### Documentation

- docs: Update create compound component docs ([#1883](https://github.com/Workday/canvas-kit/pull/1883)) ([@NicholasBoll](https://github.com/NicholasBoll), [@jamesfan](https://github.com/jamesfan))


## [v8.2.1](https://github.com/Workday/canvas-kit/releases/tag/v8.2.1) (2022-11-21)

### Dependencies

- fix: Allow installing Canvas Kit with React 16.14 ([#1917](https://github.com/Workday/canvas-kit/pull/1917)) ([@willklein](https://github.com/willklein))


## [v8.2.0](https://github.com/Workday/canvas-kit/releases/tag/v8.2.0) (2022-11-18)

### Documentation

- fix: Made changes to docs for Tertiary button ([#1923](https://github.com/Workday/canvas-kit/pull/1923)) ([@mannycarrera4](https://github.com/mannycarrera4), [@josh-bagwell](https://github.com/josh-bagwell))


## [v7.4.5](https://github.com/Workday/canvas-kit/releases/tag/v7.4.5) (2022-11-18)

### Documentation

- fix: Made changes to docs for Tertiary button ([#1923](https://github.com/Workday/canvas-kit/pull/1923)) ([@mannycarrera4](https://github.com/mannycarrera4), [@josh-bagwell](https://github.com/josh-bagwell))
## [v8.1.2](https://github.com/Workday/canvas-kit/releases/tag/v8.1.2) (2022-11-17)

### Components

- fix: Make sure to use theme in modals ([#1900](https://github.com/Workday/canvas-kit/pull/1900)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)


## [v8.1.1](https://github.com/Workday/canvas-kit/releases/tag/v8.1.1) (2022-11-16)

### Documentation

- docs: Update major release documentation ([#1888](https://github.com/Workday/canvas-kit/pull/1888)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.1.0](https://github.com/Workday/canvas-kit/releases/tag/v8.1.0) (2022-11-14)

### Components

- fix(search-form): Enable overriding the generated labelId ([#1909](https://github.com/Workday/canvas-kit/pull/1909)) ([@willklein](https://github.com/willklein))


## [v7.4.4](https://github.com/Workday/canvas-kit/releases/tag/v7.4.4) (2022-11-14)

### Components

- fix(search-form): Enable overriding the generated labelId ([#1909](https://github.com/Workday/canvas-kit/pull/1909)) ([@willklein](https://github.com/willklein))

### Infrastructure

- ci: Attempt to fix forward-merge Chromatic ([@NicholasBoll](https://github.com/NicholasBoll))
## [v8.0.9](https://github.com/Workday/canvas-kit/releases/tag/v8.0.9) (2022-11-09)

### Components

- fix: Remove dividers and headers from preview MenuItem Voice Over count ([#1901](https://github.com/Workday/canvas-kit/pull/1901)) ([@vibdev](https://github.com/vibdev))


## [v8.0.8](https://github.com/Workday/canvas-kit/releases/tag/v8.0.8) (2022-11-08)

### Components

- fix: Security access error on `typeof localStorage` ([#1902](https://github.com/Workday/canvas-kit/pull/1902)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.0.7](https://github.com/Workday/canvas-kit/releases/tag/v8.0.7) (2022-11-08)

### Components

- fix(text): Update text component imports ([#1906](https://github.com/Workday/canvas-kit/pull/1906)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v8.0.6](https://github.com/Workday/canvas-kit/releases/tag/v8.0.6) (2022-11-03)

### Components

- fix: Fail gracefully if localStorage is blocked in useModalityType ([#1898](https://github.com/Workday/canvas-kit/pull/1898)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.0.5](https://github.com/Workday/canvas-kit/releases/tag/v8.0.5) (2022-11-03)

### Codemods

- fix(codemod): Fix codemod for Breadcrumbs promotion ([#1895](https://github.com/Workday/canvas-kit/pull/1895)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v8.0.4](https://github.com/Workday/canvas-kit/releases/tag/v8.0.4) (2022-11-03)

### Documentation

- docs: Update URL rewriting to support anchor tags ([#1893](https://github.com/Workday/canvas-kit/pull/1893)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v8.0.3](https://github.com/Workday/canvas-kit/releases/tag/v8.0.3) (2022-11-03)

### Documentaion

- chore: Remove deadlinks, add v8 upgrade guide to README ([#1891](https://github.com/Workday/canvas-kit/pull/1891)) ([@jaclynjessup](https://github.com/jaclynjessup))


## [v8.0.2](https://github.com/Workday/canvas-kit/releases/tag/v8.0.2) (2022-11-03)

### Codemods

- fix(codemod): Fix promote components to testing codemod ([#1890](https://github.com/Workday/canvas-kit/pull/1890)) ([@alanbsmith](https://github.com/alanbsmith))


## [v8.0.1](https://github.com/Workday/canvas-kit/releases/tag/v8.0.1) (2022-11-02)

### BREAKING CHANGES

- [#1636](https://github.com/Workday/canvas-kit/pull/1636) Canvas Kit will require teams to be on version ^18.x or at least ^17.0 for backwards compatibility. To use have all React 18 features would require teams to upgrade root API, otherwise they will be ignored.
- [#1646](https://github.com/Workday/canvas-kit/pull/1646) Some component will now have to be imported like this: `import { export1 } from "module-name";`
  
  * chore: Bump csstype to v3 and update style prop types (#1673)
  
  We removed csstype in [a previous update](https://github.com/Workday/canvas-kit/commit/026b66731361064192c405e99eb0e1412c7dd09f#diff-3be175031a0046a5ad6ec23a2bfdea7e7d8e996dc4e6846a8f8d885ddc4b0edeL57), but we need to add it back. I also updated the version and corrected the style prop types to match. You can read about the V3 changes [here](https://github.com/frenic/csstype#version-30).
  
  [category:Components]
  
  * feat: Added gridStyleProps to Box
  
  * fix: Adjusting items
  
  * feat: Added unit tests and chromatic tests
  
  * feat: Added chromatic test
  
  * fix: Adjusted props in UI Example
  
  * fix: Made adjustments per suggestions
  
  * chore: Updated docs with suggestions made in PR
  
  * fix: Adjusted UI Example for 12 columns
  
  * fix: Fixed docs with suggestions made
- [#1722](https://github.com/Workday/canvas-kit/pull/1722) Some component will now have to be imported like this: `import { export1 } from "module-name";`
  
  * chore: Bump csstype to v3 and update style prop types (#1673)
  
  We removed csstype in [a previous update](https://github.com/Workday/canvas-kit/commit/026b66731361064192c405e99eb0e1412c7dd09f#diff-3be175031a0046a5ad6ec23a2bfdea7e7d8e996dc4e6846a8f8d885ddc4b0edeL57), but we need to add it back. I also updated the version and corrected the style prop types to match. You can read about the V3 changes [here](https://github.com/frenic/csstype#version-30).
  
  [category:Components]
  
  * feat: Added gridStyleProps to Box
  
  * fix: Adjusting items
  
  * feat: Added unit tests and chromatic tests
  
  * feat: Added chromatic test
  
  * fix: Adjusted props in UI Example
  
  * fix: Made adjustments per suggestions
  
  * chore: Updated docs with suggestions made in PR
  
  * fix: Adjusted UI Example for 12 columns
  
  * fix: Fixed docs with suggestions made
  
  * feat: Added token intake to specific grid props
  
  * fix: Added tokens to tests and added docs
  
  * fix: Added export for GridSpacePropsValues
  
  * chore: Added gridItem props to Box
  
  * chore: Updated grid and gridItem from comments
  
  * fix: Added continue on line 119 of grid util
  
  * fix: Made adjustment to gridSpaceStyleProps to fix visual test
- [#1747](https://github.com/Workday/canvas-kit/pull/1747) This update soft-deprecates all exports from `canvas-kit-labs-react/drawer`, `canvas-kit-preview-react/menu` and `Layout` and `Column` imports from `canvas-kit-react/layout`. 
  🤖 These changes are handled automatically by the codemod transform included in this PR. 
  Please refer to the v8 upgrade guide for more information.
- [#1724](https://github.com/Workday/canvas-kit/pull/1724) - `Breadcrumbs` has been promoted and now it lives in main react package
  - `Breadcrumbs.Nav` has been removed and replaced by `Breadcrumbs`
  - `Breadcrumbs.Nav` prop of `aria-label` has been removed to `Breadcrumbs`
  - `Breadcrumbs.CollapsibleList` has been renamed to `Breadcrumbs.List`
  - `Breadcrumbs.ListItem` has been renamed to `Breadcrumbs.Item`
  
  🤖 All the above changes can be handled by running codemod
  
  ⚠️ As `onAction` has been removed from `Breadcrumbs.Item`, it requires to change manually `onAction` usage based on examples provided in the v8 upgrade guide.
  
  ⚠️ As `Breadcrumbs.CollapsibleList` has been removed, all overflow functionality provided by this component has been removed too. Now overflow functionality is provided by List system and requires to switch to `BreadcrumbsModel` manually.
- [#1785](https://github.com/Workday/canvas-kit/pull/1785) We've removed any IE11 specific code including any polyfills. This means your application will no longer run in IE11 and fail to bootstrap with an error and a white screen. Do not upgrade to this version if your application needs to support IE11.
- [#1800](https://github.com/Workday/canvas-kit/pull/1800) - `ComponentStatesTable`, `permutateProps`, `StaticStates` and `propTypes` have been moved to `@workday/canvas-kit-react/testing`. 
  - `StaticStates` and `convertToStaticStates` have been moved from `@workday/canvas-kit-react/common` to `@workday/canvas-kit-react/testing`
  🤖 All the above changes can be handled by running codemod
- [#1863](https://github.com/Workday/canvas-kit/pull/1863) Optional breaking changes message. If your PR includes breaking changes. It is extremely rare to put breaking changes outside a `prerelease/major` branch. Anything in this section will show up in release notes. Remove this section if no breaking changes are present.
- [#1861](https://github.com/Workday/canvas-kit/pull/1861) We've updated all popup `CloseIcon` and `CloseButton` to default to `type=button`. We did this so
  these close buttons did not submit the forms unintentionally. Without this change, you have to
  manually add `type="button"` to these components if you wrap popup contents in a `form` element.
  While this is a very unlikely that a `CloseButton` was intentionally used as an implicit submit
  button, it is still a breaking change. This change effects the following components:
  
  - `Popup.CloseIcon`
  - `Dialog.CloseIcon`
  - `Modal.CloseIcon`
  - `Popup.CloseButton`
  - `Dialog.CloseButton`
  - `Modal.CloseButton`
- [#1874](https://github.com/Workday/canvas-kit/pull/1874) `ActionBar.OverflowButton` inside `ActionBar.List` is replaced with an `overflowButton` prop. So, now `ActionBar.List` with overflow behavior requires to pass an overflow button component as a `overflowButton` prop. 
  
  ```tsx
  <ActionBar.List overflowButton={<ActionBar.OverflowButton aria-label="More actions" />} />
  ```
  
  🤖 This change can be handled by using codemod.
- [#1880](https://github.com/Workday/canvas-kit/pull/1880) The `LoadingAnimation` component has been renamed to `LoadingDots` and its slash import is now `@workday/canvas-kit-react/loading-dots` instead of `@workday/canvas-kit-react/loading-animation`.

### Components

- fix: Remove default imports from components ([#1634](https://github.com/Workday/canvas-kit/pull/1634)) ([@mannycarrera4](https://github.com/mannycarrera4))
  We've updated some of our components to remove default exports. This matches what most of our component are doing.
  
  Some component will now have to be imported like this: `import { export1 } from "module-name";`
- chore: Bump csstype to v3 and update style prop types ([#1673](https://github.com/Workday/canvas-kit/pull/1673)) ([@alanbsmith](https://github.com/alanbsmith))
- feat: Add Grid component ([#1646](https://github.com/Workday/canvas-kit/pull/1646)) ([@josh-bagwell](https://github.com/josh-bagwell), Manuel Carrera, Alan B Smith)
  We've updated some of our components to remove default exports. This matches what most of our component are doing.
- feat(preview): Create type components ([#1626](https://github.com/Workday/canvas-kit/pull/1626)) ([@RayRedGoose](https://github.com/RayRedGoose))
  The next changes have been made:
  - Added new `Box` component props to support font and text styles, added variant name value support to `color` prop.
  - Created basic `Text` component with `level`, `size` props to set type levels and `isTruncated` prop to have ellipsis overflow text.
  - Created specific level components: `Title`, `Heading`, `BodyText` and `Subtext`. 
  - Created `Label` text component.
- feat: Add responsive styles to Modal ([#1700](https://github.com/Workday/canvas-kit/pull/1700)) ([@mannycarrera4](https://github.com/mannycarrera4))
- docs(layout): Improve Grid documentation ([#1716](https://github.com/Workday/canvas-kit/pull/1716)) ([@jamesfan](https://github.com/jamesfan), Raisa Primerova, Manuel Carrera)
- feat: Grid Space Tokens ([#1722](https://github.com/Workday/canvas-kit/pull/1722)) ([@josh-bagwell](https://github.com/josh-bagwell), Manuel Carrera, Alan B Smith)
  We've updated some of our components to remove default exports. This matches what most of our component are doing.
- fix(menu): Update CKR Menu (Main) to use depth 3  ([#1768](https://github.com/Workday/canvas-kit/pull/1768)) ([@RayRedGoose](https://github.com/RayRedGoose), Alan B Smith, Alan B Smith)
- feat: Soft deprecation of Drawer, Menu (preview), Layout ([#1747](https://github.com/Workday/canvas-kit/pull/1747)) ([@RayRedGoose](https://github.com/RayRedGoose))
- feat(breadcrumbs): Add List system to Breadcrumbs with promotion to main ([#1724](https://github.com/Workday/canvas-kit/pull/1724)) ([@RayRedGoose](https://github.com/RayRedGoose), [@jamesfan](https://github.com/jamesfan), [@alanbsmith](https://github.com/alanbsmith), [@mannycarrera4](https://github.com/mannycarrera4))
- chore: Remove IE11 specific code ([#1785](https://github.com/Workday/canvas-kit/pull/1785)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- fix: Update Modal styles on smaller screen sizes ([#1815](https://github.com/Workday/canvas-kit/pull/1815)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  On smaller screen sizes (min-width of 320px to a max-width of 767px) the follow styles change on the Modal:
  - borderRadius on the `Modal.Card` has been reduced: `8px` -> `24px`
  - Overall padding between the edge of the card and its contents has been reduced: `32px` -> `24px`
  - Spacing between `Moda.Heading` and `Modal.Body` has been reduced: `24px` -> `16px`
- feat: Refactor, reorganize, and expand style props ([#1827](https://github.com/Workday/canvas-kit/pull/1827)) ([@alanbsmith](https://github.com/alanbsmith))
- feat: Components and utilities to testing package ([#1800](https://github.com/Workday/canvas-kit/pull/1800)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@alanbsmith](https://github.com/alanbsmith))
- fix: Add style prop doc examples to build-mdx script ([#1848](https://github.com/Workday/canvas-kit/pull/1848)) ([@alanbsmith](https://github.com/alanbsmith))
- feat(breadcrumbs): Update Breadcrumbs aria props, examples, and a11y guidance ([#1850](https://github.com/Workday/canvas-kit/pull/1850)) ([@RayRedGoose](https://github.com/RayRedGoose))
  Changes: 
  - Added requirement of `aria-label` for `nav` element in `Breadcrumbs` component.
  - Added requirement of `aria-label` for overflow button.
  - Limited overflow button render: it renders only when `overflowButtonProps` containing at least `aria-label` prop passed to `Breadcrumbs.List`.
- feat: Add `useCloseOnTargetHidden` popup hook ([#1836](https://github.com/Workday/canvas-kit/pull/1836)) ([@stefano-puzzuoli](https://github.com/stefano-puzzuoli), [@NicholasBoll](https://github.com/NicholasBoll))
  If you need a popup to close when the target element is no longer visible (useful for tooltips and dropdown menus), there's now a 'useCloseOnTargetHidden` popup hook. This will close the popup when less than 50% of the target element is visible. This hook uses an [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
- feat: Add new compound status indicator ([#1851](https://github.com/Workday/canvas-kit/pull/1851)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera, [@NicholasBoll](https://github.com/NicholasBoll), [@jamesfan](https://github.com/jamesfan), [@willklein](https://github.com/willklein))
  We've created a compound component version of our `StatusIndicator` which you can find under our `preview` components. This new API will allow for more composability and ergonomic API. With the new component, the default styling is to have sentenced cased text for better accessibility.
- fix: Update modal padding and event keys to match modern browsers ([#1863](https://github.com/Workday/canvas-kit/pull/1863)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
  Optional release note message. Changelog and release summaries will contain a pull request title. This section will add additional notes under that title. This section is not a summary, but something extra to point out in release notes. An example might be calling out breaking changes in a labs component or minor visual changes that need visual regression updates. Remove this section if no additional release notes are required.
- feat: New Segmented Control component ([#1819](https://github.com/Workday/canvas-kit/pull/1819)) ([@RayRedGoose](https://github.com/RayRedGoose), [@mannycarrera4](https://github.com/mannycarrera4), [@NicholasBoll](https://github.com/NicholasBoll))
- fix: Popup close buttons no longer interfere with forms ([#1861](https://github.com/Workday/canvas-kit/pull/1861)) ([@NicholasBoll](https://github.com/NicholasBoll), [@mannycarrera4](https://github.com/mannycarrera4))
- refactor(preview): Remove equal size hook in SegmentedControl ([#1869](https://github.com/Workday/canvas-kit/pull/1869)) ([@RayRedGoose](https://github.com/RayRedGoose))
- fix: Update modal padding and margin on smaller screen sizes ([#1867](https://github.com/Workday/canvas-kit/pull/1867)) ([@mannycarrera4](https://github.com/mannycarrera4), manuel.carrera)
- refactor(action-bar): Overflow button replacement by a prop ([#1874](https://github.com/Workday/canvas-kit/pull/1874)) ([@RayRedGoose](https://github.com/RayRedGoose))
- feat: Responsive Styles Support ([#1779](https://github.com/Workday/canvas-kit/pull/1779)) ([@josh-bagwell](https://github.com/josh-bagwell), [@alanbsmith](https://github.com/alanbsmith))
- chore(loading-dots): Rename Loading Animation to be Loading Dots ([#1880](https://github.com/Workday/canvas-kit/pull/1880)) ([@willklein](https://github.com/willklein))

### Dependencies

- chore: Upgrade to React 18 ([#1636](https://github.com/Workday/canvas-kit/pull/1636)) ([@RayRedGoose](https://github.com/RayRedGoose))
- chore: Bump Storybook to 6.5 version with react 18 support ([#1655](https://github.com/Workday/canvas-kit/pull/1655)) ([@RayRedGoose](https://github.com/RayRedGoose))

### Documentation

- docs: Separate Text MDX into separate MDXes ([#1843](https://github.com/Workday/canvas-kit/pull/1843)) ([@jamesfan](https://github.com/jamesfan))
- docs: Clean up v8 Upgrade Guide ([#1788](https://github.com/Workday/canvas-kit/pull/1788)) ([@jamesfan](https://github.com/jamesfan))
- docs: Add React 18 Upgrade to v8 upgrade guide ([#1857](https://github.com/Workday/canvas-kit/pull/1857)) ([@RayRedGoose](https://github.com/RayRedGoose), [@mannycarrera4](https://github.com/mannycarrera4), [@NicholasBoll](https://github.com/NicholasBoll), [@jamesfan](https://github.com/jamesfan))
- docs: Updating Responsive Styles Support Section of V8 Guide ([#1853](https://github.com/Workday/canvas-kit/pull/1853)) ([@josh-bagwell](https://github.com/josh-bagwell))
- docs: Fix examples for Menu (Main) ([#1860](https://github.com/Workday/canvas-kit/pull/1860)) ([@jamesfan](https://github.com/jamesfan))
- docs: Update Segmented Control (Preview) docs ([#1870](https://github.com/Workday/canvas-kit/pull/1870)) ([@jamesfan](https://github.com/jamesfan), [@RayRedGoose](https://github.com/RayRedGoose))
- chore: Removing component status page ([#1886](https://github.com/Workday/canvas-kit/pull/1886)) ([@jaclynjessup](https://github.com/jaclynjessup))
- docs: Improve Text component docs ([#1840](https://github.com/Workday/canvas-kit/pull/1840)) ([@alanbsmith](https://github.com/alanbsmith), James Fan)

### Infrastructure

- fix(codemod): Add support for v8 param to codemod ([#1787](https://github.com/Workday/canvas-kit/pull/1787)) ([@jamesfan](https://github.com/jamesfan))
- ci: Attempt to fix forward-merge Chromatic ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Add cypress version to canary builds ([@NicholasBoll](https://github.com/NicholasBoll))

### Types

- feat: Add StyleProp types ([#1868](https://github.com/Workday/canvas-kit/pull/1868)) ([@alanbsmith](https://github.com/alanbsmith))
- fix: Fix a model's TConfig type and add tests ([#1875](https://github.com/Workday/canvas-kit/pull/1875)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Utilities

- chore: Deprecate old utility functions and minor type updates ([#1884](https://github.com/Workday/canvas-kit/pull/1884)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.4.3](https://github.com/Workday/canvas-kit/releases/tag/v7.4.3) (2022-10-31)

### Components

- fix: Correctly call keyboard click events when Preview Menu has headers ([#1879](https://github.com/Workday/canvas-kit/pull/1879)) ([@vibdev](https://github.com/vibdev))


## [v7.4.2](https://github.com/Workday/canvas-kit/releases/tag/v7.4.2) (2022-10-25)

### Documentation

- docs: Fix multiSelectionManager import in Collections example ([#1871](https://github.com/Workday/canvas-kit/pull/1871)) ([@jamesfan](https://github.com/jamesfan))

### Infrastructure

- ci: Add debug logging to forward merge workflow ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.4.1](https://github.com/Workday/canvas-kit/releases/tag/v7.4.1) (2022-10-13)

### Documentation

- docs: Remove dependency on Storybook utils from CustomStyles example ([#1844](https://github.com/Workday/canvas-kit/pull/1844)) ([@jamesfan](https://github.com/jamesfan))

### Infrastructure

- ci: Fix popup tests and ci bugs ([#1846](https://github.com/Workday/canvas-kit/pull/1846)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.4.0](https://github.com/Workday/canvas-kit/releases/tag/v7.4.0) (2022-10-12)

### Components

- feat: Add menu headers for grouping items ([#1822](https://github.com/Workday/canvas-kit/pull/1822)) ([@vibdev](https://github.com/vibdev), [@NicholasBoll](https://github.com/NicholasBoll))
  Adds the ability to mark `<MenuItems>` as headers using the `isHeader` attribute. This allows users to group menu items logically. It updates the code used for keyboard shortcuts to ignore any items marked as a header.
- feat: Add support for opening stories in Tesseract ([#1829](https://github.com/Workday/canvas-kit/pull/1829)) ([@anicholls](https://github.com/anicholls))

### Infrastructure

- ci: Fixing to make workflow valid-name needed for each if ([#1842](https://github.com/Workday/canvas-kit/pull/1842)) ([@jaclynjessup](https://github.com/jaclynjessup))
- ci: Forward merge commits that skip releases ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.3.18](https://github.com/Workday/canvas-kit/releases/tag/v7.3.18) (2022-10-10)

### Infrastructure

- ci: Updates to Project Board Actions ([#1834](https://github.com/Workday/canvas-kit/pull/1834)) ([@jaclynjessup](https://github.com/jaclynjessup))

### Test

- test: Fix flaky Cypress popup specification ([#1837](https://github.com/Workday/canvas-kit/pull/1837)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.3.17](https://github.com/Workday/canvas-kit/releases/tag/v7.3.17) (2022-10-07)

### Components

- fix: Error handling to fix TypeError bug on models used in responsive modals/popups ([#1831](https://github.com/Workday/canvas-kit/pull/1831)) ([@ahayes91](https://github.com/ahayes91))

### Infrastructure

- ci: Add token to close-related-issues workflow ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.3.16](https://github.com/Workday/canvas-kit/releases/tag/v7.3.16) (2022-10-06)

### Documentation

- docs: Add uncontrolled input example using React Hook Form ([#1820](https://github.com/Workday/canvas-kit/pull/1820)) ([@vibdev](https://github.com/vibdev))


## [v7.3.15](https://github.com/Workday/canvas-kit/releases/tag/v7.3.15) (2022-10-04)

### Components

- fix: Update `useReturnFocus` to change focus if target is visible ([#1709](https://github.com/Workday/canvas-kit/pull/1709)) ([@NicholasBoll](https://github.com/NicholasBoll), [@alanbsmith](https://github.com/alanbsmith))


## [v7.3.14](https://github.com/Workday/canvas-kit/releases/tag/v7.3.14) (2022-10-04)

### Documentation

- docs: Update Modal examples ([#1621](https://github.com/Workday/canvas-kit/pull/1621)) ([@emroller16](https://github.com/emroller16), [@jamesfan](https://github.com/jamesfan))

### Infrastruture

- ci: Close related issues with pull requests ([#1817](https://github.com/Workday/canvas-kit/pull/1817)) ([@NicholasBoll](https://github.com/NicholasBoll))


## [v7.3.13](https://github.com/Workday/canvas-kit/releases/tag/v7.3.13) (2022-09-28)

### Tests

- test(menu): Add missing test case for tabbing out of a control ([#1733](https://github.com/Workday/canvas-kit/pull/1733)) ([@smopur](https://github.com/smopur))


## [v7.3.12](https://github.com/Workday/canvas-kit/releases/tag/v7.3.12) (2022-09-28)

### Components

- fix(popup): Fix return focus timing for tooltips and focus events ([#1806](https://github.com/Workday/canvas-kit/pull/1806)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Documentation

- docs: Remove stale references to Icon Buttons ([#1814](https://github.com/Workday/canvas-kit/pull/1814)) ([@jamesfan](https://github.com/jamesfan))

### Infrastructure

- chore: Adding Epic issue template ([#1811](https://github.com/Workday/canvas-kit/pull/1811)) ([@jaclynjessup](https://github.com/jaclynjessup), [@NicholasBoll](https://github.com/NicholasBoll))


## [v7.3.11](https://github.com/Workday/canvas-kit/releases/tag/v7.3.11) (2022-09-27)

### Components

- fix(combobox): Override z-index only when focus state ([#1752](https://github.com/Workday/canvas-kit/pull/1752)) ([@chaiwattsw](https://github.com/chaiwattsw))

### Documentation

- docs: Make release category easier to change in PR template ([#1804](https://github.com/Workday/canvas-kit/pull/1804)) ([@NicholasBoll](https://github.com/NicholasBoll))

### Infrastructure

- chore: Update pull request template ([#1750](https://github.com/Workday/canvas-kit/pull/1750)) ([@alanbsmith](https://github.com/alanbsmith))


## [v7.3.10](https://github.com/Workday/canvas-kit/releases/tag/v7.3.10) (2022-09-23)

### Components

- fix: Remove use of style to style border radius on TertiaryButton ([#1803](https://github.com/Workday/canvas-kit/pull/1803)) ([@mannycarrera4](https://github.com/mannycarrera4))
  We were using `style` to apply border radius which prevent users from overwriting styles. Using `borderRadius` allows for customization.


## [v7.3.9](https://github.com/Workday/canvas-kit/releases/tag/v7.3.9) (2022-09-23)

### Infrastructure

- fix: Update create-component scripts ([#1719](https://github.com/Workday/canvas-kit/pull/1719)) ([@vibdev](https://github.com/vibdev))
  Updates the create create-component script to generate components using the new 7.x functions. It also updates the generated stories to use mdx.


## [v7.3.8](https://github.com/Workday/canvas-kit/releases/tag/v7.3.8) (2022-09-22)

### Components

- fix: Extend BaseButtonProps to our buttons and export utility functions ([#1775](https://github.com/Workday/canvas-kit/pull/1775)) ([@mannycarrera4](https://github.com/mannycarrera4))
  - You can now overwrite styles using style properties from `Box` on `PrimaryButton`, `SecondaryButton`, `TertiaryButton` and `DeleteButton`. This allows you to customize styles more easily.
  - We're exporting utility functions `getMinWidthStyles` and `getPaddingStyles` to help those making custom buttons


## [v7.3.7](https://github.com/Workday/canvas-kit/releases/tag/v7.3.7) (2022-09-21)

### Infrastructure

- fix(common): Add support for class components to createComponent ([#1786](https://github.com/Workday/canvas-kit/pull/1786)) ([@anicholls](https://github.com/anicholls))


## [v7.3.6](https://github.com/Workday/canvas-kit/releases/tag/v7.3.6) (2022-09-21)

### Documentation

- fix: Remove spellcheck from togglable password field ([#1782](https://github.com/Workday/canvas-kit/pull/1782)) ([@vibdev](https://github.com/vibdev))


## [v7.3.5](https://github.com/Workday/canvas-kit/releases/tag/v7.3.5) (2022-09-20)

### Components

- fix: Add PopperProps to PopupPopper props ([#1772](https://github.com/Workday/canvas-kit/pull/1772)) ([@alanbsmith](https://github.com/alanbsmith))


## [v7.3.4](https://github.com/Workday/canvas-kit/releases/tag/v7.3.4) (2022-09-16)

### Components

- chore: Add custom lint rule to encourage CK slash imports ([#1762](https://github.com/Workday/canvas-kit/pull/1762)) ([@alanbsmith](https://github.com/alanbsmith))


## [v6.8.15](https://github.com/Workday/canvas-kit/releases/tag/v6.8.15) (2022-09-15)

### Components

- fix: Add PopperProps to PopupPopper props ([#1772](https://github.com/Workday/canvas-kit/pull/1772)) ([@alanbsmith](https://github.com/alanbsmith))
## [v7.3.3](https://github.com/Workday/canvas-kit/releases/tag/v7.3.3) (2022-09-15)

### Components

- fix: Enable to use size prop in SegmentedControl.Button component ([#1766](https://github.com/Workday/canvas-kit/pull/1766)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.3.2](https://github.com/Workday/canvas-kit/releases/tag/v7.3.2) (2022-09-15)

### Documentation

- docs: Add initial maintaining doc ([#1764](https://github.com/Workday/canvas-kit/pull/1764)) ([@alanbsmith](https://github.com/alanbsmith))


## [v7.3.1](https://github.com/Workday/canvas-kit/releases/tag/v7.3.1) (2022-09-09)

### Components

- fix: Prevent focus ring from getting cut off in Popup.Body ([#1727](https://github.com/Workday/canvas-kit/pull/1727)) ([@mannycarrera4](https://github.com/mannycarrera4))


## [v7.3.0](https://github.com/Workday/canvas-kit/releases/tag/v7.3.0) (2022-08-31)

### Components

- feat(labs): Add expandable container component ([#1562](https://github.com/Workday/canvas-kit/pull/1562)) ([@giulialubet](https://github.com/giulialubet))
- fix: Update avatar on expandable component ([#1739](https://github.com/Workday/canvas-kit/pull/1739)) ([@mannycarrera4](https://github.com/mannycarrera4))
- feat(labs): New compound toast component ([#1432](https://github.com/Workday/canvas-kit/pull/1432)) ([@ckaptan](https://github.com/ckaptan))
- fix: Update Toast import statements ([#1760](https://github.com/Workday/canvas-kit/pull/1760)) ([@alanbsmith](https://github.com/alanbsmith))


## [v7.2.11](https://github.com/Workday/canvas-kit/releases/tag/v7.2.11) (2022-08-31)

### Components

- fix(pagination): Fixes onPageChange regression ([#1748](https://github.com/Workday/canvas-kit/pull/1748)) ([@alanbsmith](https://github.com/alanbsmith))

### Infastructure

- ci: Update secret to new token for project board actions ([#1757](https://github.com/Workday/canvas-kit/pull/1757)) ([@jaclynjessup](https://github.com/jaclynjessup))

### Infrastructure

- ci: Update project board automations ([@jaclynjessup](https://github.com/jaclynjessup))


## [v7.2.10](https://github.com/Workday/canvas-kit/releases/tag/v7.2.10) (2022-08-29)

### Components

- fix(menu): Fix issue with color change on menu item icon hover ([#1744](https://github.com/Workday/canvas-kit/pull/1744)) ([@RayRedGoose](https://github.com/RayRedGoose))


## [v7.2.9](https://github.com/Workday/canvas-kit/releases/tag/v7.2.9) (2022-08-16)

### Infrastructure

- ci: Add project board automations ([#1729](https://github.com/Workday/canvas-kit/pull/1729)) ([@jaclynjessup](https://github.com/jaclynjessup))


## [v7.2.8](https://github.com/Workday/canvas-kit/releases/tag/v7.2.8) (2022-08-15)

### Components

- fix: Change link URL to non-interactive examples ([#1731](https://github.com/Workday/canvas-kit/pull/1731)) ([@stefano-puzzuoli](https://github.com/stefano-puzzuoli))


## [v7.2.7](https://github.com/Workday/canvas-kit/releases/tag/v7.2.7) (2022-08-12)

### Components

- fix: Ignore tabIndex to take elements out of the focus order ([#1723](https://github.com/Workday/canvas-kit/pull/1723)) ([@smopur](https://github.com/smopur))
  Fixes tabbing out of a a control where elements in the control are excluded from the tab order


## [v7.2.6](https://github.com/Workday/canvas-kit/releases/tag/v7.2.6) (2022-08-11)

### Documentation

- docs: Fix RadioGroup Basic example ([#1726](https://github.com/Workday/canvas-kit/pull/1726)) ([@alanbsmith](https://github.com/alanbsmith))


## [v7.2.5](https://github.com/Workday/canvas-kit/releases/tag/v7.2.5) (2022-07-28)

### Infrastructure

- fix: Remove circular dependencies between monorepo packages ([#1697](https://github.com/Workday/canvas-kit/pull/1697)) ([@NicholasBoll](https://github.com/NicholasBoll))
  In order to remove circular dependencies without any breaking changes, we removed the restriction on `SearchForm`, `Combobox`, and `AutoCompleteList` (labs components) that restricted children to `MenuItem` components (preview component). This removes the Typescript error if you feed these components children that are not `MenuItem`.


## [v7.2.4](https://github.com/Workday/canvas-kit/releases/tag/v7.2.4) (2022-07-27)

### Infrastructure

- ci: Allow auto-merging of the yarn.lock file ([@NicholasBoll](https://github.com/NicholasBoll))


## [v6.8.14](https://github.com/Workday/canvas-kit/releases/tag/v6.8.14) (2022-07-27)

### Infrastructure

- ci: Allow auto-merging of the yarn.lock file ([@NicholasBoll](https://github.com/NicholasBoll))
## [v7.2.3](https://github.com/Workday/canvas-kit/releases/tag/v7.2.3) (2022-07-27)

### Documentation

- fix: Set types import direction for sub-directory packages ([#1695](https://github.com/Workday/canvas-kit/pull/1695)) ([@RayRedGoose](https://github.com/RayRedGoose))

### Infrastructure

- ci: Fix forward-merge script and optimize release/forward-merge jobs ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Ignore Storybook test on forward-merge ([@NicholasBoll](https://github.com/NicholasBoll))
- ci: Remove extra manual bump step ([@NicholasBoll](https://github.com/NicholasBoll))


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
