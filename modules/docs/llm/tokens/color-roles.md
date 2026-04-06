# Color Roles

Color roles provide a systematic approach to applying color across interfaces. Each role serves a
specific purpose and includes modifiers to control visual emphasis and hierarchy.

![Color roles system overview showing all semantic roles mapped to interface components with proper contrast relationships](color-roles-system-overview.png)

Canvas components use standardized color roles for visual consistency. Whether building standard or
custom components, follow these role definitions for predictable results.

Color roles guarantee accessible combinations—each pairing meets WCAG 2.1 AA standards. Roles are
implemented as system design tokens, creating a shared language between design and development teams
that enables theming and customization.

## How to Apply Colors

Use color roles instead of raw palette colors to ensure consistency and accessibility at scale.
Color roles map semantic meaning to specific colors through system tokens.

The product palette assigns roles to these color families: `red` (critical), `blue` (primary),
`green` (positive), `amber` (caution), `slate`, and `neutral`.

## Design Tokens

Design tokens like `bg.primary.soft` shift the question from "what color should this be?" to "what
role does this element fill?" This prevents isolated color decisions and ensures color is being
applied as large of a larger system.

When possible, always use system tokens to apply colors. Avoid raw palette colors to prevent
inconsistencies in the app and potential accessibility violations.

System tokens follow a three-part naming structure: `{property}-{role}-{modifier}`

![System token naming convention breakdown showing property-role-modifier structure](color-roles-token-naming-convention.png)

- **Property**: What the color applies to (`bg`, `fg`, `text`, `border`)
- **Role**: How to use the color (`primary`, `positive`, `caution`)
- **Modifier**: Intensity or variation (`default`, `strong`, `stronger`)

For example, `bg-primary-soft` can be read as a "soft primary background color".

## Usage Guidance

When choosing colors, consider:

- **What** will the color be applied to (property)
- **Why** color should be used in the first place (role)
- **How** much emphasis is needed for the color (modifier)

## Properties

![Token naming convention showing property highlighted in bg-primary-default structure](color-roles-property-highlighted.png)

Properties indicate what the color should be applied to, like a background or icon. `Static` and
`brand` tokens may be applied to any property.

| **Property** | **Description**                                                                 |
| ------------ | ------------------------------------------------------------------------------- |
| `bg`         | Background colors for surfaces and containers                                   |
| `fg`         | Foreground colors that exist on top of backgrounds, inclusive of text and icons |
| `text`       | Used for text elements that need differentiation from icon colors               |
| `icon`       | Used for icons that need differentiation from text colors                       |
| `border`     | Used for borders and dividers                                                   |
| `shadow`     | Used for box-shadows                                                            |
| `static`     | Static colors are non-dynamic colors that don't change                          |
| `brand`      | Brand indicates colors that are tenant themeable                                |

### Background Colors

Background colors are used to create the foundation for other elements. Use these for page
backgrounds, card surfaces, and container fills. All content, such as text, buttons, forms, and
icons should be on top of a background.

### Foreground Colors

Foreground colors are applied to elements that appear on top of backgrounds, inclusive of both text
and icons.

### Text Colors

Text colors should be used for standalone text, for example, headings, body text, and labels. Use
these colors intead of foreground colors when text colors may need to be different than the icon
color.

### Icon Colors

Icon colors may be used for System Icons if text elements are not used. Use these for interface
icons, indicators, and symbols.

### Border Colors

Border colors are used to define boundaries against a background, or to separate content areas.

### Shadow Colors

Shadow colors are used in Depth tokens to create a sense of depth and hierarchy between surfaces.

### Static Colors

Static colors maintain consistent colors regardless of tenant theming.

### Brand Colors

Brand colors are tenant-themeable colors that are subject to change. These colors are used to match
a tenant's brand identity.

## Roles

![Token naming convention showing role highlighted in bg-primary-default structure](color-roles-role-highlighted.png)

Roles define colors by assigning semantic purpose to colors rather than categorizing them by
appearance. Each role is a collection of tokens that specify when and how to use colors in the
interface. Choose roles based on purpose, not preference.

Role can be grouped into the following categories:

- **Interactive**: `primary`, `focus` — guide user actions
- **Status**: `positive`, `caution`, `critical` — communicate system feedback
- **Hierarchy**: `alt`, `muted`, `contrast` — level of emphasis
- **Functional**: `disabled`, `translucent`, `overlay` — serve specific interface needs

Some roles like `default` include tokens for all properties. Others like `overlay` include only
tokens relevant to a specific use case.

| **Role**      | **Description**                                                     |
| ------------- | ------------------------------------------------------------------- |
| `default`     | Baseline color for that property or role, like `bg.primary.default` |
| `primary`     | Brand color for main actions and interactive elements               |
| `alt`         | Secondary surfaces and alternate states                             |
| `muted`       | Subtle elements with reduced emphasis                               |
| `positive`    | Success states and completion feedback                              |
| `caution`     | Warning messages and non-blocking alerts                            |
| `critical`    | Error states and destructive actions                                |
| `inverse`     | High contrast text on dark backgrounds                              |
| `contrast`    | Enhanced contrast on default backgrounds                            |
| `hint`        | Placeholder and helper text                                         |
| `disabled`    | Non-interactive and unavailable elements                            |
| `static`      | Theme-independent colors                                            |
| `error`       | Blocking errors and failed states                                   |
| `info`        | Informational messages and notifications                            |
| `ai`          | AI-powered features and content                                     |
| `focus`       | Keyboard navigation indicators                                      |
| `transparent` | Invisible elements for spacing                                      |
| `translucent` | Semi-transparent overlays                                           |
| `overlay`     | Modal scrims and background dimming                                 |

### Primary Colors

Primary brand color for main actions and interactions. Use sparingly for maximum impact.

![Primary Button component showing primary background and text colors](color-roles-primary-role.png)

**Do:**

- Apply to brand elements and main actions


**Dont:**

- Use for secondary UI or informational content
- Apply to decorative elements


### Positive Colors

Success states and completion feedback. Provides immediate confirmation when tasks are completed.

![Success Alert component with positive background and text colors](color-roles-positive-role.png)

**Do:**

- Use for success messages and completed states
- Apply to confirmation feedback


### Alt Colors

Alternative styling for secondary elements that need visual distinction from primary elements.

**Do:**

- Use to create subtle differences against the default background color


**Dont:**

- Use on foregrounds, text or icons
- Use on main actions


### Muted Colors

Subtle elements with reduced emphasis. Present but not prominent.

**Do:**

- Use on interactive secondary UI borders


**Dont:**

- Use for main actions
- Apply to non-interactive surfaces


### Caution Colors

Non-blocking warnings and alerts. Informs the user of potential risk without blocking them.

![Warning Alert component and TextInput with caution border showing validation error](color-roles-caution-role.png)

**Do:**

- Use for alerts in forms
- Use for non-critical messaging


**Dont:**

- Use for blocking errors or destructive actions


### Critical Colors

Blocking errors and destructive actions. Reserved for situations that call for immediate attention.

![Error Alert component and Destructive Button with critical background and text colors](color-roles-critical-role.png)

**Do:**

- Use for blocking errors and to confirm destructive actions
- Apply to system failures


**Dont:**

- Use for warnings or informational messages
- Apply to non-destructive actions


### Info Colors

System announcements and informational messages that provide context or status updates.

**Do:**

- Use for system announcements and status updates
- Apply to informational banners and notices
- Use for contextual information about features or changes


**Dont:**

- Use for errors, warnings, or success messages
- Apply to instructional or helper content
- Use for placeholder text or form guidance


### AI Colors

Highlights AI-powered content and features. Use consistently for all AI functionality.

![AI Badge and Button components with AI-specific background and accent colors](color-roles-ai-role.png)

**Do:**

- Use for AI-driven features and ML-powered content
- Apply to intelligent assistance widgets


**Dont:**

- Use for standard automation or manual processes
- Apply to features not powered by AI


### Focus Colors

Used for focus indicators. Shows the interactive element currently has focus.

![Button and TextInput components with focus ring outlines for keyboard navigation](color-roles-focus-role.png)

**Do:**

- Use for focus rings and keyboard navigation indicators


**Dont:**

- Use for active or selected states


### Transparent Colors

Colors that are fully or slightly transparent. Consistent behavior across dynamic backgrounds.

**Do:**

- Use for invisible borders and spacing elements
- Use when backgrounds are unpredictable/dynamic


**Dont:**

- Apply to content that should be visible


### Inverse Colors

High contrast text on dark backgrounds. May be used when backgrounds use a color greater than 600.

![Dark Card component with inverse text color for high contrast on dark backgrounds](color-roles-inverse-role.png)

**Do:**

- Use for text on dark backgrounds (step 600+)
- Apply when high contrast is required


**Dont:**

- Use on backgrounds lighter than 600
- Apply solely as a means to draw attention


### Contrast Colors

Contrast tokens are used to stand out strongly against the default page or surface background. Use
them for situations that require high contrast.

**Do:**

- Use for strong contrast on the default page background


**Dont:**

- Use for standard prose


### Input Colors

Form field borders ensuring 3:1 contrast against surface backgrounds.

**Do:**

- Use for form field borders and input outlines
- Apply to interactive form elements


**Dont:**

- Use on non-interactive surfaces


### Container Colors

Surfaces that exist on top of the page background.

**Do:**

- Use for cards, side panels, and dialogs, popups
- Add a border or some other treatment (e.g. Depth) to visually separate from page backgrounds


**Dont:**

- Use for page sections or content areas


### Divider Colors

Content separators that organize information between sections.

**Do:**

- Use to create visual separation between page sections or content areas
- Apply consistently between sections in a group


**Dont:**

- Apply to Containers


### Overlay Colors

Semi-transparent scrims that dim the background to focus attention on a modal view.

![Modal Dialog with semi-transparent overlay background dimming page content](color-roles-overlay-role.png)

**Do:**

- Use to focus attention on modals
- Apply consistent opacity (`opacity.overlay`) for all scrims


**Dont:**

- Use for non-modal views or when content visibility is a priority
- Stack overlays on top of each other


### Disabled Colors

Non-interactive elements that are unavailable. Some disabled elements use opacity instead.

![Disabled Button and TextInput components with reduced opacity disabled colors](color-roles-disabled-role.png)

**Do:**

- Use to indicate disabled elements, like Buttons or FormFields


**Dont:**

- Use for interactive elements
- Apply when opacity works better


### Translucent Colors

Slightly opaque overlays for dynamic surfaces. More opaque than transparent.

**Do:**

- Use on dynamic surfaces like video players
- Apply to tooltips and overlays needing background visibility


**Dont:**

- Use when full transparency is needed
- Apply to static surfaces


### Hint Colors

Helper text and instructional content that guides users through tasks and interactions.

**Do:**

- Use for placeholder text in form fields
- Apply to instructional content and step-by-step guidance
- Use for tooltips and contextual help
- Apply to field descriptions and input formatting requirements


**Dont:**

- Use for system announcements or status updates
- Apply to error or critical messages
- Use for informational banners or notices


## Modifiers

Modifiers specify the intensity or variation of a color role, creating a hierarchy through different
emphasis levels.

![Modifier scale showing bg-primary from softest (most subtle) to strongest (most intense) with visual progression of intensity](color-roles-modifier-scale.png)

| **Modifier** | **Description**                                           |
| ------------ | --------------------------------------------------------- |
| `softest`    | Minimal intensity for subtle backgrounds                  |
| `softer`     | Low intensity for reduced emphasis                        |
| `soft`       | Gentle intensity for understated applications             |
| `default`    | Standard color for most use cases                         |
| `strong`     | Increased intensity for more emphasis                     |
| `stronger`   | High intensity for important elements                     |
| `strongest`  | Maximum intensity for active states and critical elements |

Modifiers are named to clearly differentiate between levels of emphasis, but flexible enough to
accomodate a number of use cases, like interaction states (hover, active), and levels in typography
(heading, body text, captions). The table below shows examples of applying emphasis modifiers to
functional use cases.

| Use Case                            | Design Token            |
| ----------------------------------- | ----------------------- |
| PrimaryButton Background Hover      | `bg.primary.strong`     |
| Inverse Secondary Background Active | `bg.transparent.strong` |
| Heading Text                        | `bg.primary.strong`     |
| TextInput Border Hover              | `border.input.strong`   |
