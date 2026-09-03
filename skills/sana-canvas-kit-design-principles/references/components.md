# Canvas Kit Component Usage & Dos/Don'ts (Snapshot)

> **Snapshot, not a live source.** Captured 2026-09-02. Do not fetch anything at runtime to refresh
> or supplement this content -- not a design site, not an MCP server -- read this file only. If
> this snapshot goes stale, refresh it manually as a deliberate maintenance task (see the SKILL.md
> note in `sana-canvas-kit-design-principles`).
>
> Content below is trimmed to Usage Guidance, When to Use / When to Use Something Else, Do's and
> Don'ts, and accessibility guidance. Anatomy diagrams, Content Guidelines (writing style), and
> Mobile-only sections are omitted -- those are out of scope for this skill.

## Action Bar

### Usage Guidance

- Primary Buttons should only be used once per screen. If there are other buttons on screen, use the
  Secondary or Tertiary Buttons. However, Tertiary Buttons should not be on the Action Bar unless
  it's in the Overflow Menu.
- Action Bars are placed at the bottom of the screen, and will stick as the user scrolls.
- Although actions may change, the placement of the Action Bar should persist until the task is
  successfully submitted.
- Action Bars can contain up to 3 actions and an Overflow Menu when appropriate.
- If there are more than 3 actions, hide the 4th and other remaining actions in an Overflow Menu
  that is launched by clicking the
  Icon Only Secondary Button Variant.
- There should be between 1-7 items to choose from in an Overflow Menu.
- Buttons placed in Action Bars should be grouped logically,
  either by usage or importance.

#### When to Use

- Use Action Bars for tasks that require navigating between pages, saving progress, submitting a
  task, or cancelling a task.

#### When to Use Something Else

- Consider taking a Button outside of the Action Bar if the
  action is not related to the progress or status of a task.
- Consider using a Text Button instead of an Action Bar if an action is less popular or less
  important.

## Avatar

### Usage Guidance

#### When to Use

- Use Avatars to provide a user with a stronger identity or when an access point into their profile
  provides reasonable benefit.

#### When to Use Something Else

- If the data is not a user, and a symbolic representation is needed, use an icon component instead.

Avatars vary on the basis of version, sizing, background, and default color.

#### Version

Avatars default to their initial-based version unless a user manually uploads a profile photo. The
lettering inside the Avatar is based on the two letter English initials of the Western equivalent of
a user name.

#### Sizing

Avatars should feel appropriately sized based on their importance and nearby content. They vary on a
scale from XXS to XXL to accommodate an array of different possible use cases:

- XXS: 24 x 24. Please note that it is recommended to use a larger size than XXS for all uses
  outside of pills.

- XS: 32 x 32
- S: 40 x 40
- M: 48 x 48
- L: 72 x 72
- XL: 96 x 96
- XXL: 120 x 120

Regardless of Avatar sizing, all tap targets are 48x48 or larger.

#### Color

Initial-based avatars are randomly assigned a gender neutral and contrast friendly color on a
per-user basis.

## Badge

### Usage Guidance

#### When to Use

- Use a Badge to indicate quantitative data associated with a parent element (e.g., icons, applets,
  Avatars, text, etc.).

#### When to Consider Something Else

- Consider using a Status Indicator to identify the
  status of a task.

### Behaviors

#### Expansion

A Low Emphasis Badge should always expand rightwards from its absolute position when featuring a
larger count and / or descriptive metadata. When expanding beyond 99, the count cuts off at 99+.

#### Screen Readers

When a Low Emphasis Badge is used in-line with text, the order in which it is read should be
configurable, so it can be read how it makes the most logical sense. High Emphasis Badges do not
have focus stops, since they do not support text.

#### High Emphasis

High Emphasis Badges are intended for usage as an indicator of notification.

After navigating resolving the source of the notification, the Badge should no longer appear.
However, High Emphasis Badges may not always disappear after resolving an item if it is
representative of multiple pieces of data.

#### Low Emphasis

Low Emphasis Badges are intended for conveying less pertinent numerical information. By accepting
text, these Badges also allow for additional descriptive text to be passed in to compliment the
numerical data.

Low Emphasis Badges could be used in the place of using parentheses to convey quantitative data.

After resolving the source of the indicator, the Badge should either augment down or not appear if
it is representative of a standalone piece of data.

## Banner

### Usage Guidance

Banners consist of errors and alerts:

- Typically appearing in response to user action, errors prevent the user from moving forward in
  their process until the error is corrected. Common error triggers include failing to enter a value
  for required fields, entering values in a form that are incompatible, or when user input is not
  understood.
- Alerts convey information the user should be aware of to help prevent a future error, but allow
  the user to proceed without addressing the alert.

#### When to Use

- Use Banners to notify users of missteps that happen within a workflow and describe how the user
  can take appropriate action to resolve them.
- Banners should bring a user’s attention to problems or mistakes either before they happen, or
  before the user can move on.

#### When to Use Something Else

- Ideally, a design won’t create a scenario that causes the need for a Banner. If you can avoid
  these scenarios by mentioning information that will help in hint text, or by simplifying your
  design, always do so.

#### Do's and Don'ts

- **✅ Do:** Combine error and alert messages into a single error Banner.
- **❌ Don't:** Do not use separate error and alert Banners if there are both errors and alerts on the same page.

### Accessibility Guidelines

#### How Banners Impact the Accessible Experience

Banner components can introduce accessibility barriers to successfully and accurately completing
forms when accessibility is neglected. Users must be able to navigate to, and activate, a Banner
component without using a mouse or trackpad. Banners must be keyboard focusable in the order they
are appearing visually on screen. (Logical, left to right, top to bottom for left to right
languages.)

When Banners appear on form submission, or from another explicit action by the user, setting
keyboard focus onto the Banner can be a helpful way of guiding the interaction.

When Banners are generated by the system, or when users focus out of form fields, then it is not
appropriate to move keyboard focus in these scenarios. This can be very disruptive, and may block
users from completing their task.

#### Keyboard Interaction

Each Banner must have a focus indicator that is highly visible against the background and against
the non-focused state. Refer to
Accessible Colors for more
information.

Keyboard focus must be set to the Banner component when it appears after a form submission, but do
not force any focus movements on other events such as `blur` or `change`.

Banners must support the following keyboard interactions:

- `Tab`: focus the Banner element
- `Enter` or `Space`: activate the Banner element

#### Screen Reader Interaction

Banners must communicate the following to users:

- The text displayed inside the Banner
- The Banner is either an “alert” or an “error”
- The Banner is an interactive “button” element

#### Design Annotations Needed

- Specify the Banner’s error type: Alert or Error
- Specify the keyboard focus order for the Banner in context of the page
- Write the text alternative for the Icon when it conveys information to users. Read more about
  Non-Text Content

#### Implementation Markup Needed

- When the Banner Icon requires text alternative, set ARIA `role=”img”` and an `aria-label` string
  describing the Icon.
- Banner must be rendered in the DOM structure relative to where it is positioned visually on screen
  for the best keyboard focus accessibility.
- When a Banner is generated from a user action, set keyboard focus to the Banner.
- When a Banner is generated by the system, avoid moving the keyboard focus away from users’
  context. Instead, use an `aria-live` region in the DOM to send the Banner message for screen
  readers to announce in real-time.

## Breadcrumbs

### Usage Guidance

- Breadcrumbs help to orient the user and keep track of their location as they navigate through a
  site’s information hierarchy.
- The component should be used to supplement the primary or main navigation - not replace them.
- Breadcrumb trails always start with a root page that subsequent pages trace back to.
- Using Breadcrumbs should enable users to backtrack and jump to previous pages with ease.

**Placement**

- Breadcrumbs are represented as a trail of links anchored at the top left of a page, above the page
  title but below the header.
- The position of Breadcrumbs should not move as the user navigates through different pages.

**Truncation**

- Although truncation behavior is built into the component, be thoughtful about the width of each
  page title and how to collapse and truncate page items.
- Page titles and items will truncate after hitting a specified width (all items are set to truncate
  at 350px, but can be customized).
- If truncation is required, truncated items will collapse into an Icon Only Tertiary Button
  Variant, placed in-between the first item (root page) and last item (current page).
- Users can access truncated pages by clicking into the collapsible Icon Only Tertiary Button
  Variant and selecting the desired page within the Menu.

**Responsive Behavior**

- On responsive or smaller screens, leverage the collapsible menu to shorten the Breadcrumb trail.
- Only truncate the root page if absolutely necessary.
- The current page is always visible and should never collapse into the overflow Menu.

#### When to Use

- Use Breadcrumbs when users must navigate through a complex site or product.
- Use Breadcrumbs to track hierarchical navigation.

#### When to Use Something Else

- Use other components for primary navigation. Breadcrumbs are used to supplement a global or
  primary navigation.
- Consider removing Breadcrumbs altogether if you have a flat hierarchy that is only 1 or 2 levels
  deep.

### Accessibility Guidelines

#### Keyboard Interaction

Each link in the breadcrumbs must have a focus indicator that is highly visible against the
background and against the non-focused state. Refer to
Accessible Colors for more
information.

Breadcrumbs must support the following keyboard interactions:

- `Tab`: Focuses each link in the breadcrumb navigation
- `Enter`: Activates the currently focused link, or expands the truncated breadcrumb overflow menu
- `Up Arrow` or `Down Arrow`: Navigates up or down the truncated breadcrumb menu

#### Screen Reader Interaction

Breadcrumbs must communicate the following to users:

- Breadcrumbs are a navigation landmark, that can be distinguished from other site navigation
  provided on a page
- How many breadcrumb links are shown
- Which breadcrumb link represents the current page
- There is a menu of “more links” when the breadcrumb component is truncated.

#### Design Annotations Needed

No annotations required for Breadcrumbs.

#### Implementation Markup Needed

- If the last element in the Breadcrumbs component is a link, an `aria-current="page"` attribute
  must be added to the link.
- [Included in component] Breadcrumb container must be a `<nav>` element with an `aria-label` string
  `“Breadcrumbs”`.
- [Included in component] Inside of the `<nav>` element, breadcrumb links must be structured with
  `<ul>` and `<li>` list markup.
- [Included in component] Chevron icons are decorative and should be hidden from screen readers.
- [Included in component] Truncated breadcrumbs use an icon button with an `aria-label` string set
  to `“More links”` and an `aria-haspopup=”true”` attribute to signal an attached menu will appear.

## Button

### Usage Guidance

- Buttons should indicate an action.
- They should be discoverable, easy to identify, and specific.
- Make Buttons look and feel clickable.
- Icons can be used alone or added to the left or right of the label. If used, the icon should
  signify what the Button does.
- Use icon-only variants in dense environments or when space is limited.
- Use accessible tooltips with icon-only variants to help
  explain ambiguous icons for everyone.
- When deciding which Button to use, consider the level of priority of the action, as well as how
  much visual emphasis the Button should have in the context of the page it will live on. Be
  intentional and refer to the examples below to determine which is right for your use case.

#### When to Use Something Else

- Use Hyperlinks within a paragraph to navigate to another page.
- Consider using checkbox,
  switch, or
  segmented control when a component is needed that
  can capture 2 togglable states.

#### Design Annotations for Accessibility

- Write accessible name for icon-only button variants. Read more about
  non-text content.

### How Buttons Impact the Accessible Experience

When buttons are disabled on the UI, color contrast guidelines do not apply to disabled components.
Minimum contrast guidelines set in WCAG 2.1 explicitly state
disabled components are exempt
from the guideline.

When identical buttons are used repeatedly on a screen, users must correctly identify the context
around the buttons that cannot be distinguished from one another.

- For example: Pencil icon buttons used repeatedly on a profile screen, each designed to edit a
  section of the profile. Providing uniquely descriptive names (e.g. “Edit photo”, “Edit contact
  info”) for each icon button can be valuable for screen reader users.

When icons are used inside of buttons containing text, a text alternative is only necessary when the
icon is communicating something about the button.

- For example: A ‘+’ icon used in a skill pill named “communication” signals an action that is not
  expressed in the text.
- On the other hand: An icon of an eye used to decorate a “View Details” button is redundant and
  should be hidden from screen readers.

## Card

### Usage Guidance

- Cards hold a variety of content types, such as a combination of text, icons, imagery and actions
  related to a single topic.
- Cards should be easy to digest, providing relevant information and available actions.
- Text and visual elements should be placed in a way that clearly indicates hierarchy.
- Cards should be placed inside a layout grid to help with alignment and sizing.
- Most cards are created and maintained by specific product teams. The Canvas card is a generic
  container which you can leverage when creating new cards. Check out the
  Canvas Kit card
  container to see what’s available in Canvas now.

#### When to Use

- Use Cards when you need to group information in a digestible form.
- Use Cards when you need to offer a short entry point that is linked to more detailed content or a
  complex task.
- Use Cards to lay out single or multiple sets of related information in the same region of the
  page. Cards may include an image, a text summary, pills, and actions. Cards typically have similar
  widths, but heights should accommodate varying content.

#### When to Use Something Else

- When you need to show unrelated content types or actions in a single container.
- When you need to show content in multiple columns.
- When you need to display content in a table format.

### Accessibility Guidelines

#### Keyboard Interaction

Any interactive elements in the Card must have a focus indicator that is highly visible against the
background and against the non-focused state. Refer to
Accessible Colors for more
information.

Cards must support the following keyboard interactions:

- `Tab`: Focuses interactive elements included in the card (e.g. buttons, links, inputs, selects,
  etc.)

#### Screen Reader Interaction

Cards must communicate the following to users:

- The title (heading) of a Card represents the beginning of the content in a card.
- Calls to action in a Card are uniquely distinguishable from other cards on the screen.

#### Design Annotations Needed

- Decide heading level for the Card title in context of the page. Read more about
  meaningful page structure
  for more information.
- Write accessible name for icon-only button variants. Read more about
  non-text content.
- Write unique accessible names for generic call to action buttons.
- Write text alternatives for images and illustrations, unless they are for decorative purposes
  only.

#### Implementation Markup Needed

- Cards must begin with a heading element `<h2>` - `<h6>`.
- When using multiple cards together in a group, use `<ul>` and `<li>` elements to build card
  containers as list items in an unordered list.
- An `aria-label` string is required for icon-only buttons and accessible
  tooltips can show the icon's name for everyone.
- Images, illustrations, and icons that may be considered decorative or redundant can be hidden from
  screen readers by setting a null `alt=””` attribute for `<img>` elements.
- [Included in component] Decorative `<svg>` icons are hidden from assistive technology with
  `role=”presentation”` and `focusable=”false”`.

## Checkbox

### Usage Guidance

- The Form Field Label can be positioned in two places; above or left of the checkbox group for LTR
  languages. Form Field Labels are aligned to the right of the checkbox group for RTL languages.
- Checkbox Labels are positioned to the right of Checkboxes for LTR languages or to the left of
  Checkboxes for RTL languages.
- Checkboxes allow users to select one or many options. Selected options are shown as a white check
  with blue fill. Clicking it again will deselect the choice.
- Each Checkbox is tied to a distinct value. Label for each selection should describe the choice and
  be kept as concise as possible. See these
  guidelines for more
  information on writing Checkbox labels.

#### When to Use

- Use Checkboxes when the user is allowed to select 0, 1, or multiple values from a predefined list
  of 7 or less options.

#### When to Use Something Else

- Consider using a Switch if the only options are yes or no.
- For a list between 2 to 7 predefined options, consider using
  Radio Buttons or a Select
  to select one option.
- Use a Prompt when the number of list items is large or unknown. Prompts have search capabilities
  and folders which provide users with the means to browse options. Prompts can be configured to
  support single or multi-select.

## Color Input

### Color Input Anatomy

1. **Label:** Title of the input. Label position could be set to the top or left of the Color Input.
2. **Active Color Swatch:** Square container that shows what the color looks like. Checkmark is
   optional and could be set on when a valid hex value is entered in the text input.
3. **Text Input:** Placeholder text of the Color Input is “#FFFFFF”. Placeholder text is replaced
   when the user enters a different hex value.

### Color Input Usage Guidance

- Color Input lets a user apply a specific color to an element.
- The user should enter a value in hexadecimal format (6 digits).

#### When to Use

- Use Color Input to apply a custom color to an element such as text or background color using
  hexadecimal numbers. This is commonly used for theming.

### Color Preview Anatomy

1. **Label:** Title of the input. Label position could be set to the top or left of the Color
   Preview.
2. **Active Color Swatch:** Square container that shows what the color looks like.
3. **Value:** 6 digit hexadecimal that corresponds to the active color swatch.

### Color Preview Usage Guidance

- Color Preview is the read-only version of a Color Input
- It lets a user see what the color looks like in addition to displaying the hex value.

#### When to Use

- When the color value of an element needs to be displayed, but should not be editable.

### Accessibility Guidelines

- Color Input and Color Preview must have visual labels that clearly indicate the purpose of the
  input.
- When possible, error and alert states should provide information on how to fix issues or provide
  hints on how to fix formatting.
- Do not use color alone to differentiate between errors and alerts. Although color is a great
  visual indicator for users without disabilities, “Error” or “Alert” text should always be used to
  distinguish errors and alerts on a page. Use icons as supplementary visual indicators for
  different message states.

## Dialog

### Usage Guidance

- Dialogs allow for entry of data or alert users on any given page after an action has been
  initiated and it doesn't require immediate attention.
- On web platforms with browser windows 767px or wider, Dialogs show up next to the button that
  activated it.
- On web platforms with browser windows less than 767px width, Dialogs show up at the bottom of the
  screen and in front of an overlay.
- Dialogs are often used to display media, alerts, dialogs, and/or task-oriented flows. Links,
  buttons, field sets, icons, text inputs, and prompts can all exist within Dialogs.
- In-line buttons used in Dialogs can be aligned Left (Default), Center, Full Width & Full Width
  Stacked, or Right aligned.

#### When to Use

- Use Dialog to gather input from the user without blocking interaction with the rest of the page.
- Use Dialog when alert content and text are too large for a standard Toast or Pop-up notification.

#### When to Use Something Else

- Use Modal to gather immediate input from the user by blocking
  interaction with the rest of the page.
- Do not use Dialogs to serve up easily accessible links or simple messages that can be dismissed
  quickly (use Toasts or
  Popups for this).
- Do not use Dialogs to display dense information, such as Tables or Multi-View Containers.
- Consider a Toast if you are communicating status or
  confirmation of the application process to the user.
- Consider a Menu if the input is a single selection of options.

#### Responsive View

Dialog components adjust width and content presentation based on screen size. When content exceeds
the length of the screen, the Dialog content will become scrollable in the body section of the
Dialog. For long content on a small screen, inline buttons will continue to scroll with the content.

#### Touch Based Behavior

The overlay on Dialogs are not click or touch enabled to close the Dialog component view on small
screens between 320-767px. This accounts for accidental touch on mobile devices. Background overlays
will close the Dialog when clicked on larger devices when the screen reaches the minimum width.

## Expandable Container

### Usage Guidance

- This component highlights the most important details of a section and reveals more when a user
  taps or clicks on the header part of the container.
- Enabling users to hide and show information ensures the design remains focused and relevant to
  their expectations.
- Scanning through the most critical information first makes processing more efficient without
  compromising the ability to access additional information.

#### When to Use

Use an Expandable Container when there is a lot of information to be shown on a page, but some
details can initially be hidden from view.

#### When to Use Something Else

Be cautious of hiding critical information or burdening the user with an extra click if they are
likely to read all the content. There is a chance that content hidden within the collapsed state
will not be read or immediately noticed by users.

#### Design Annotations Needed

- Specify the heading level for the Expandable Container title

### How Expandable Containers Impact the Accessible Experience

Any pattern that can show and hide content in a design must support the non-visual screen reading
experience. Users must be able to perceive whether the content is expanded or collapsed, and users
need to know where they can find the new expanded content.

The reading order of the expanded content must logically follow the target button controlling the
content’s visibility for non-visual users to find and understand the content change. A non-visual
screen reading experience is fundamentally linear, like reading a book.

## Form Field

### Usage Guidance

The Form Field is a wrapper component intended to be used with Canvas Kit input components when
designing a form to ensure they meet accessibility standards. Inputs collect data from users within
a form. It’s important to choose the right input to elicit a response in the format you want. For
more information on best practices for designing forms, reference the
Form pattern.

#### When to Use

- Use the Form Field component as a wrapper for most inputs on a form. From a designer perspective,
  it is not a visible component but something to be aware of when working with developers on a form
  as the Canvas Kit Form Field should encapsulate input components on a form.
- Use form fields to ensure forms meet accessibility guidelines.

#### When to Use Something Else

- Consider using a Table when presenting and editing sets of
  repeating data with the same structure.
- Consider using a Popup or
  Toast component to display confirmation messages or validate
  user inputs in the context of a user action.

## Grid

### Usage Guidance

The Grid system should be used when designing any layout within your product. If you think of your
UI elements like blocks then these blocks can span across the 12 column grid in any number of ways
as illustrated below. The 12 column grid system gives you a lot of flexibility when arranging UI
elements.

Not all UI elements within your layout need to align with the column. As long as the parent element
aligns to the assigned number of columns, that’s okay!

The cards within the above container do not need to align with the layout columns. You can use the
8pt grid to align the cards.

#### Responsive Layouts

Responsive layouts change the appearance of a layout, depending on the screen size and orientation
of the device being used to view it. We recommend using the following grids to cater for these
different screen sizes below.

| Breakpoint  | Value  | Columns | Margin | Gutter |
| ----------- | ------ | ------- | ------ | ------ |
| Small       | 320px  | 4       | 16px   | 16px   |
| Medium      | 768px  | 8       | 40px   | 24px   |
| Large       | 1024px | 12      | 40px   | 32px   |
| Extra Large | 1440px | 12      | 80px   | 40px   |

#### Layout Regions

Grids should always be used to layout your designs, even when working with different layout regions.
Grids give you greater control over different regions and how you can position UI elements within
your screen layout.

_Main content region spanning across 12 columns_

_Multiple grids used to accommodate layouts with side panel regions_

_Grids used to accommodate layouts with left and right side panels regions that overlays the main
page content_

In the cases illustrated above, side panels can reduce the width of the main page content or overlay
the page content. Grids of varying columns e.g 4, 8 or 12 can be used to accommodate your layout,
but we recommend reducing the number of columns as the width decreases in order to prevent the
layout becoming cluttered.

#### Density

The grid system can help you design for both high and low density layouts. The important thing to
remember when working with density is to increase the margin and gutter space on high density
layouts and decrease the margin and gutter space on low density layouts. This allows the user to
easily scan groups of content.

- **✅ Do:** Increase the width of the gutters when laying out components with high density content.
- **❌ Don't:** Decrease the width of the gutters when laying out components with high density content.

#### When to Use

- To help you make decisions when designing high or low density layouts.
- Create visual hierarchy and rhythm in your layouts.
- Create consistent layouts across your product.

## Hyperlink

### Usage Guidance

Hyperlinks (also known as links) are interactive elements that navigate somewhere else, such as
another page, or a different site entirely. Links may also act as anchor tags that navigate to users
to sections on the same page, like in a table of contents.

Hyperlinks may appear inline with body text or as a standalone link. When a hyperlink is used inline
with body text, an underline is used to differentiate it from surrounding text to avoid relying on
color alone to communicate interactivity.

#### When to Use

- Use a Hyperlink to navigate to a different page or view within the app
- Use an External Hyperlink to navigate to a different site entirely. External Hyperlinks are
  indicated by an `extLink` system icon placed at the end.
- Hyperlinks may be used as anchor tags to navigate to different sections on a page.
- Use a standalone Hyperlink when you need to place a Hyperlink outside of a paragraph or body text.
  This will remove the underline.

#### When to Use Something Else

- Use a Button for any action that changes state or triggers a
  process or workflow.
- Use Tabs to organize and switch between related sections on the
  same page. Tabs hide content to preserve screen real estate.
- Use Breadcrumbs to expose and navigate a hierarchy of
  pages.

## Loading Dots

### Usage Guidance

- Use Loading Dots to identify when a specific area of the page is loading (i.e. the content within
  a card).
- Motion should be applied to the Loading Dots to reinforce that the content on the page is loading
  behind the scenes.
- Avoid increasing the size of the Loading Dots to maintain consistency with other indicators
  accross the application.
- Always center the Loading Dots and position it close to where you want the user's attention to be
  once loading is complete.
- Use for specific elements on a page that are still loading while other content has already loaded.
- If only a portion of the interface is displaying new content or being updated, place the Loading
  Dots in that specific part of the interface.
- In immediate response to an executed action when there is excessive time before the expected
  results occur.
- Ideally used on a white background.

#### When to Use

- Use on page elements where the visual layout/format of the content being loaded is unknown.
- Use to indicate processing, or that change will occur on the page (rather than loading UI
  elements).

#### When to Use Something Else

- Consider using a Skeleton if the visual layout/format of the
  content being loaded is known ahead of time (preferred).

### Accessibility Guidelines

- Loading Dots should announce to users using a screen reader that a page or a portion of the page
  is currently being loaded.

## Menu

### Usage Guidance

- Popup Menus can appear next to, in front of, above, or below the element that launched them, such
  as Dropdown Buttons, Dropdown Icons,
  icon only Primary/Secondary/Tertiary Button variants or by
  right-clicking a contextual item.
- Popup Menus should overlap and visually look like they are in front of other UI elements. They
  should always be positioned within the viewable areas of the screen and be 8px away from the
  element that launched them.
- Popup Menus should always contain a list of menu selections, which are options users can choose
  from. The list should be scannable, kept as concise as possible, and written in title case instead
  of sentences.
- Consider how important each option is. The list of options should be sorted in a logical order,
  such as alphabetical, chronological, order of importance, and so on.

#### When to Use

- In most cases, as with Overflow Menus, where there aren't enough space on screen to show all the
  actions, there could be between 1-7 items to choose from. However, there shouldn't be more than 15
  items listed at once on a single Popup Menu.
- When users must make a single selection from the list of options.

#### When to Use Something Else

- Consider using a Switch if the only options are yes or no.
- For a list between 2 to 7 predefined options, consider using
  a Radio input to select one option or
  Checkboxes to select multiple options. Radio and Checkbox
  groups display all options upfront and do not require the user to interact with the input to view
  the list of options.
- Use a Prompt when the number of list items is large or unknown. Prompts have search capabilities
  and folders which provide users with the means to browse options. Prompts can be configured to
  support single or multi-select.

#### Design Annotations for Accessibility

- Write an accessible name for icon-only button variants invoking menus.
- Declare whether any icons used in menu items are decorative, or require additional text
  alternatives.

## Modal

### Usage Guidance

- Modals allow for entry of data or alert users on any given page after an action has been initiated
  and require immediate attention.
- On web platforms with browser windows wider than 766px, Modals show up in the center of the screen
  and in front of an overlay.
- On web platforms with browser windows less than 767px width, Dialogs show up at the bottom of the
  screen and in front of an overlay.
- In-line buttons used in modal dialogs and non-user input modals, the alignment could be Left
  (Default), Center, Full Width & Full Width Stacked, or Right aligned.

#### When to Use

- Use Modal to gather immediate input from the user by blocking interaction with the rest of the
  page.
- Use Modal when alert content and text are too large for a standard Toast or Pop-up notification.

#### When to Use Something Else

- Consider a Dialog to gather non-critical input from the user
  without blocking interaction with the rest of the page.
- Do not use Modals to serve up easily accessible links or simple messages that can be dismissed
  quickly (use Toasts or
  Popups for this).
- Do not use Modals to display dense information, such as Tables or Multi-View Containers.
- Consider a Toast if you are communicating status or
  confirmation of the application process to the user.
- Consider a Menu if the input is a single selection of options.

#### Responsive View

Modal components adjust width and content presentation based on screen size. When content exceeds
the length of the screen, the modal content will become scrollable in the body section of the modal.
For long content on a small screen, inline buttons will continue to scroll with the content.

#### Touch Based Behavior

The overlay on modals are not click or touch enabled to close the modal component view on small
screens between 320-767px. This accounts for accidental touch on mobile devices. Background overlays
will close the modal when clicked on larger devices when the screen reaches the minimum width.

## MultiSelect

### Usage Guidance

- MultiSelect inputs feature a caret icon on the right side of the field.
- Clicking or tapping anywhere in the MultiSelect opens the Menu.
- A checkmark icon indicates selected values in the list.
- Each Menu option should be distinct; combine similar options if necessary.
- Sort Menu options logically: alphabetically, chronologically, or by importance.
- Display placeholder text (e.g., "Choose Items") in the MultiSelect field.
- When focused, the placeholder becomes “Search,” and typed words replace it. An “x” icon appears to
  clear the search term.
- Clicking outside the input or Menu returns the MultiSelect to its default state.
- After making selections and dismissing the Menu, the input displays selected items as removable
  Pills in the same container.

#### When to use

- Use MultiSelect for selecting multiple items from a list of more than 7 predefined options.
- Ideal for lists between 7 to 100 items to prevent overwhelming users.

#### When to consider something else

- For yes/no options, use a Switch.
- For 2-7 predefined options, consider Radio Group for a single
  selection or Checkbox Group for multiple selections.
- Use a Prompt for large or unknown list sizes. Prompts offer search and folder navigation,
  supporting single or multiple selection.

### Accessibility Guidelines

#### Keyboard Interaction

Each MultiSelect must have a focus indicator that is highly visible against the background and
against the non-focused state. Refer to
Accessible Colors for more
information.

MultiSelect must support the following keyboard interactions:

- `Tab`: focus the MultiSelect component
- `Enter` or `Space`: open the Menu and focus on the first option
- `Enter` or `Space`: selects and deselects the item currently in focus
- `Esc`: dismiss the MultiSelect Menu and focus the MultiSelect component
- `Up Arrow` or `Down Arrow`: focus the previous or next option respectively
- `Character Key`: focus options matching character key
- `Home` or `Fn + Up Arrow`: focus first option
- `End` or `Fn + Down Arrow`: focus last option

MultiSelect Keyboard Navigation when Search feature is enabled:

- `Space`: when typing a search term, will add a space
- `Enter` or `Space`: selects and deselects the item currently in focus
- All other keyboard interaction remains the same

#### Screen Reader Interaction

MultiSelect must communicate the following to users:

- This component is a “combobox”
- The associated label
- The currently selected value
- The “collapsed” or “expanded” state
- When opened, there is a list of ‘X’ items
- When opened, the name of the active option
- When opened, the position “X of Y” for the active option

## Pagination

### Usage Guidance

- Pagination is a highly configurable navigation component composed of the following elements:
  - **Page Numbers:** Provide context about what page the user is on in relation to other pages.
  - **Page Navigation:** Navigational controls allow users to navigate back or forward through
    pages. If applicable, they are also able to jump to the first or last page.
  - **Numeric Input:** Enables users to jump to a specific page.
  - **Label:** Communicates the number of pages and total number of items. The word “items” is
    customizable.
- Although the component is typically placed below the corresponding content or data, there is
  flexibility on placement depending on your use case.
- Pagination is typically used with Tables.
- In responsive experiences, Pagination condenses to its most basic elements (Left/Right Controls,
  Current Page Number).

#### When to Use

- To divide large quantities of data or content into chunks.
- To improve the loading performance of a system.
- To make user comprehension of data/content less overwhelming.
- To enable all users to navigate to through pages or locate a specific page number.
- To show how many pages of content there are and how many results have been returned.

#### Best Practices

- Display at least one way for users to navigate through pages. If possible, provide more than one
  option (eg. Previous/Next controls _and_ a Numeric Input).
- Display the Current Page to provide awareness of location in relation to the other pages.
- If feasible, display additional details (number of pages and total number of items) to communicate
  even more context about the content or data the user is paging through.

Each element of Pagination has been built separately so you may compose it in a variety of ways. How
you decide to put this component together will likely depend on the reality of the technical
constraints that exist and your user needs.

Below are some examples of how you can configure Pagination based on screen size or technical
considerations. These recommendations are not exhaustive.

#### Based on Screen Size:

- For smaller screens, it’s recommended to show page navigation controls with no more than 3 pages.
- For larger screens, you can show up to 5 pages, both types of page navigation controls, and a
  numeric input with additional details.

#### Based on Technical Considerations:

- If your API is unable to return a total page number, we recommend showing the Previous/Next page
  navigation controls, the Current Page Number, and up to 4 other Page Numbers (if possible).
- If your API is able to return a known number of pages, composability options are endless. You can
  essentially pair any combination of elements together to create a solution that is best for your
  use case.

### Accessibility Guidelines

#### How Pagination Impacts the Accessible Experience

Pagination controls can be a more accessible alternative to infinitely scrolling content which may
introduce accessibility barriers for some users. Respecting users’ preference for how much content
they’d like to consume at one time sets the stage for more accessible UI and reducing cognitive
load.

For screen readers, users are going to expect a confirmation, or validation, that the screen has
been updated after interacting with Pagination controls. This has been historically accomplished by
HTTP requests that refresh the page and reset users to the top of the screen. Today, this can be
accomplished by setting keyboard focus to a target above the updated content, or by leveraging ARIA
live region status updates.

#### Keyboard Interaction

Each Pagination component must have a focus indicator that is highly visible against the background
and against the non-focused state. Refer to
Accessible Colors for more
information.

Pagination must support the following keyboard interactions:

- `Tab`: focus each button in the Pagination component
- `Enter` or `Space`: activate the focused button

#### Screen Reader Interaction

Pagination must communicate the following to users:

- Pagination is a navigation landmark that can be distinguished from other navigation landmarks
  provided on a page.
- Which page is actively selected in Pagination, out of the total number of pages available.
- The screen content has been updated after selecting a different page.

#### Design Annotations Needed

- Write the accessible names of each icon button in Pagination
- Write the label for the text input in the pagination component

#### Implementation Markup Needed

- Use accessible tooltips to show the icon button’s name for
  everyone. The `Tooltip` component will apply the text automatically as an `aria-label` for the
  icon button.
- When not using the `Tooltip` component, assigning an `aria-label` string is required for icon-only
  buttons and the GoTo Form text input.
- Set keyboard focus to a target at the top of the updated content after users interact with
  Pagination controls.
- Set `aria-describedby` property on the GoTo Form text input, referencing the unique `id` of the
  GoTo Form label.
- [Included in component] Pagination container must be a `<nav>` element with an `aria-label` string
  describing Pagination context. For example, “Search results” when paginating a list of search
  results.
- [Included in component] Pagination must be structured as a semantic ordered list of button
  elements.
- [Included in component] The Next and Previous page controls must use the `aria-disabled` property
  when those controls are unavailable.
- [Included in component] The currently selected page control must use the `aria-current` property.
- [Included in component] The Additional Details text below Pagination must use the `role=”status”`,
  `aria-live=”polite”`, and `aria-atomic=”true”` properties for real-time updates to screen readers.

## Pill

### Usage Guidance

Pills are used to visually label objects on a page for quick recognition. They’re offered as both
static, read-only and interactive elements. They allow users to input a section, filter a list or
table, or label information to help with scanning and organization.

#### Pills with Icon or Avatar

- There are considerations specifically for leading and trailing icons.
- All leading elements (icons or avatars) are intended to be descriptive, helping support the label.
  Do not rely on the leading element to indicate the interaction behavior.
- All trailing elements are reserved for removable Pills and Pills with count. The X icon indicates
  the expected interaction, and appears after the label to assure the user is aware what is being
  removed. The count appears after indicating the action is directly related to the count of that
  label.

#### Pills that are Removable

- Pills that are removable display the X icon following after the label.
- Removable pills have a smaller, more specific focus state and click target to be more intentional
  about its action and to avoid unintended removal of a Pill.
- Pills are aligned either left or right and the flow of the removal will move existing Pills
  towards that alignment. If a Pill is removed, there should be a way for the user to add the Pill
  again.

#### Pills Used as a Filter

- Filters appearing as a Pill allow for the user to scan and organize their filters more easily.
- Pills fit the type of filter into a small space and allows users to quickly see if the filter is
  applied and/or remove it.
- Pills add progressive disclosure to your filters by increasing learnability and reducing filter
  errors.

#### Responsive Treatment

Pills should fill their container, inline. For smaller screens and smaller containers wrap Pills so
they stack to multiple lines when necessary.

#### When To Use

- To show and label selected inputs that can be added and removed.
- Pills are meant for displaying in a small space as a group. Use them to communicate labels,
  selections, and categories.
- Pills can increase the amount of visual noise on a page so use them in moderation.
- Pills can be used to input complex information in a compact Form Field. Input Pills allow users to
  verify input by converting content or text into a Pill. They can produce suggested responses, such
  as in a Workday Prompt.

#### When To Use Something Else

- For static labels that communicate a status use the Status Indicator component.
- For actions that affect anything else use a Button. Buttons
  are expected to appear consistently and with familiar calls to action, Pills should appear
  dynamically as a group of multiple interactive elements.
- For labels that don’t appear in multiples and in a group, consider using simple body text or a
  header.
- If you have more content than a simple label to display, consider using simple body text or a
  header.

### Accessibility Guidelines

- If the content exceeds the max-width, an ellipses must appear to communicate overflow. Full
  content will appear on hover or focus within a Tooltip.
- Pills are intended to be placed on white UI backgrounds. Consider contrast requirements when
  placing elsewhere.
- The click and touch targets for Pills are expanded beyond the Pill container to better support
  responsive, touch screen devices.
- Removable Pills have an intentionally small, more specific touch target to avoid accidental Pill
  removal.
- Pill names must be clear and distinctive from one another. Avoid using many Pills on the page with
  generic identical names. This places additional burden on users to correctly understand the
  surrounding context for each of the identical pills on the screen.
- When a Pill is disabled, it typically will not appear in the keyboard focus order. However, this
  can make it more difficult for users to discover, especially with reduced contrast. If a disabled
  Pill is blocking users' progress through a flow, it's be beneficial to add it back into keyboard
  focus order. Also, when a lengthy, disabled Pill is truncated, then keyboard users will not have
  access to the full length text if they cannot focus it.
- Screen-readers must announce the entire Pill Label, regardless of width or truncation.

For more accessibility considerations, refer to the
Accessibility Guide.

## Popup

### Usage Guidance

Popup components are generally used in place of Non-Modal Dialogs. Because Non-Modal Dialogs only
minimally obstruct the page, they are ideal for drawing attention to optional, non-critical
information or new features while keeping page content still visible. Popups appear within the
context of a page and do not interrupt normal workflow.

#### When to use

- Use Popups when needing to customize a popup element beyond the offerings of other popup
  components such as a Modal, Tooltip, etc.
- Do make Popups easily dismissible in context of the trigger element.
- The popup component is used to display content that doesn’t fit the use cases of more specific
  notification components such as Tooltips, Modals, Dropdown menus, etc.
- Popups can be used to display confirmation messages, validate user inputs, or display short
  informational content in the context of a user action.

#### When to Use Something Else

- Do not use Popups to display dense information, such as Tables or Multi-View Containers.
- Popups are easy to dismiss. Consider using a Modal if you
  require more user attention or interactive form components in your popup.
- Consider a Toast if you are communicating status or
  confirmation of the application process to the user.
- Consider a Menu if the input is a single selection of options.
- Use a Tooltip to add context a button, link, to other
  element.
- See
  Error and Alert Notifications
  for more information on types of notifications and their use cases.

## Radio

> **Radio (Preview) vs. Radio (Main):** We recommend you use the Radio component in the Preview package (`@workday/canvas-kit-preview-react`) documented here on this page. The Radio component in the Main package (`@workday/canvas-kit-react`) will eventually be replaced with the Radio component in the Preview package.

### Usage Guidance

- The Form Field Label can be positioned in two places; above or left of Radio group for LTR
  languages. Form Field Labels are aligned to the right of Radio group for RTL languages.
- Radio Labels are positioned to the right of Radio Buttons for LTR languages or to the left of
  Radio Buttons for RTL languages.
- You can configure one Radio Button in the group preselected by default. This default option should
  be the safest option presenting the least risk to the user, or be the option most commonly
  selected.
- If the user is allowed to not select any of the options, provide a “None” option.
- If the list doesn't encompass all possible values in 7 or less options, provide a Radio Button
  marked “Other.”

#### When to Use

- Use Radio Buttons when a user is only allowed to select 1 value from a list of 7 or less options.

#### When to Use Something Else

- Consider using a Switch if the only options are yes or no.
- If a user is allowed to select 0, 1, or multiple values from a predefined list of 7 or less
  options, consider using Checkboxes or a
  Select to select one option.
- Use a Prompt when the number of list items is large or unknown. Prompts have search capabilities
  and folders which provide users with the means to browse options. Prompts can be configured to
  support single or multi-select.

### Accessibility Guidelines

#### How Radio Buttons Impact the Accessible Experience

While associating labels to each radio button input is critical, radio buttons are used in groups of
mutually exclusive choices. A group of choices requires context, such as, selecting your pizza
crust. Designing a clear legend and building the context of the group is a key foundation for
accessible radio buttons when users cannot visually perceive the layout.

> **Accessibility of Disabled Radio Buttons:** Disabled radio buttons will not be accessible with the keyboard. While this is very standard, pre-selecting the disabled radio button will block keyboard access to the entire group of radio buttons. Furthermore, screen reader software will describe the total number of radio buttons in the group regardless of the disabled state.

#### Keyboard Interaction

Each Radio Button must have a focus indicator that is highly visible against the background and
against the non-focused state. Refer to
Accessible Colors for more
information.

Radio Buttons must support the following keyboard interactions:

- `Tab`: focus the group of radio buttons
- `Space`: select focused radio button
- `Down Arrow` or `Right Arrow`: select the next radio button
- `Up Arrow` or `Left Arrow`: select the previous radio button

#### Screen Reader Interaction

Radio Buttons must communicate the following to users:

- The name (Form Field Label) of the radio button grouping
- The accessible name (label) of the focused radio button
- Which Radio Button in the group is selected
- The total number of radio buttons in the grouping

#### Design Annotations Needed

- Write the context (legend) of the radio button grouping.

#### Implementation Markup Needed

- Radio buttons must have a `required` attribute when the Radio Group is required for submission.
- Radio buttons must have an `aria-invalid=”true”` attribute when the Radio Group has an error
  condition.
- [Included in component] A `<label>` element is required with a `for` attribute referencing the
  unique `id` value of the associated radio button.
- [Included in component] A `<fieldset>` element establishes the group of related Radio Buttons. The
  child `<legend>` element describes the context of the grouping.
- [Included in component] A `disabled` attribute is set when the radio button is disabled.

## Segmented Control

### Usage Guidance

- Only one control option can be selected and active at a time.
- Once a user selects an option, the results should be displayed immediately.
- Each Button must clearly identify its purpose. Text variants will already have their labels
  displayed visually, but tooltips should be used for icon only
  variants.
- All the buttons in the group to be the same size regardless of text length. Length of segments is
  determined by the longest text label.

#### When to Use

- Use Segmented Control to switch between alternate views of similar or related content.
- Use icon-only variant when there is limited space or when the icons are intuitive and easy to
  understand.

#### When to Use Something Else

- Use Tabs to display different, unrelated content.
- Use Hyperlinks within a paragraph to navigate to another page.
- Use Checkboxes when the user is able to select multiple
  values from a predefined list of 7 or less options.
- Use Multi-select Prompts when the user is able to select multiple values from a predefined list of
  more than 7 options.
- Use Radio when the user is able to select a single value from a
  predefined list of 2 to 7 options that will not alter the page content.
- Use Single-select Prompts when the user is able to select a single value from a predefined list of
  more than 7 options that will not alter the page content. Alternatively,
  Select can also be used when there are 7 to 15 single-select
  options.

#### Dos and Don’ts

- **✅ Do:** Labels should be short and succinct. If a label is too long to fit within its segment, consider using an icon- only variant.
- **❌ Don't:** Wrap or truncate text

- **✅ Do:** Segmented buttons should have adequate margins from the edge of the viewport or frame. The container shouldn’t reach the edge of the viewport.
- **❌ Don't:** Avoid using a segmented control to enable actions, such as adding, removing, or editing content.

#### Design Annotations for Accessibility

- Accessible name for the group describing the purpose of the Segmented Control
- When using Icon Only Button, an accessible name for each Icon Button in the Segmented Control

## Select

### Usage Guidance

- Clicking or tapping anywhere in a Select opens the Menu.
- A checkmark icon indicates which value is currently selected in the list.
- Each Menu option should be distinct. If the option isn’t discrete, combine it with another option.
- The list of Menu options should be sorted in a logical order alphabetically, chronologically, or
  by order of importance.

#### When to Use

- Use Select as a form element where users are only allowed to select one item from a list of more
  than 7 predefined options.
- Typically, Selects work best when the list is between 7 to 15 items to prevent overwhelming the
  user with too many options.

#### When to Use Something Else

- Consider using a Switch if the only options are yes or no.
- For a list between 2 to 7 predefined options, consider using
  Radio Buttons to select one option or
  Checkboxes to select multiple options. Radio and Checkbox
  groups display all options upfront and do not require the user to interact with the input to view
  the list of options.
- Use a Prompt when the number of list items is large or unknown. Prompts have search capabilities
  and folders which provide users with the means to browse options. Prompts can be configured to
  support single or multi-select.

### Accessibility Guidelines

#### Keyboard Interaction

Each Select must have a focus indicator that is highly visible against the background and against
the non-focused state. Refer to
Accessible Colors for more
information.

Select must support the following keyboard interactions:

- `Tab`: focus the Select component
- `Enter` or `Space`: open the Select list box and focus the first option
- `Esc`: dismiss the Select list box and focus the Select component
- `Up Arrow` or `Down Arrow`: focus the previous or next option respectively
- `Character Key`: focus options matching character key
- `Home` or `Fn + Up Arrow`: focus first option
- `End` or `Fn + Down Arrow`: focus last option

#### Screen Reader Interaction

Select must communicate the following to users:

- This component is a “combo” or “combobox”
- The associated label
- The currently selected value
- The “collapsed” or “expanded” state
- When opened, there is a list of ‘X’ items
- When opened, the name of the active option
- When opened, the position “X of Y” for the active option

#### Design Annotations Needed

No design annotations required for Select.

#### Implementation Markup Needed

The Select component is built around the
ARIA Combobox v1.2 specification for Select-Only.
**Support for this component may be limited by browser vendors and/or screen readers.** Also, note
any reference to “menu” on this page does not refer to an ARIA `menu` pattern. The Select component
is using an ARIA `listbox` pattern for the options.

- A `<label>` element must be used with a `for` attribute referencing the unique `id` value of the
  Select input.
- Select input must have a `required` attribute when the field is required for form submission.
- Select input must have an `aria-describedby` attribute referencing the unique `id` value of the
  inline hint text below the field.
- Select input must have an `aria-invalid=”true”` attribute when the field has an error condition.
- Select input must have a `disabled` attribute when the field is disabled.

## Side Panel

> **Side Panel (Main) vs. Side Panel (Preview):** We recommend you use the Side Panel in the Main package (`@workday/canvas-kit-react`) documented here on this page. The Side Panel in the Preview package (`@workday/canvas-kit-preview-react`) will eventually be removed.

### Usage Guidance

- Side Panels can either push and resize content as it expands within a page or float over page
  content. See the Expandable pattern (coming soon!) for more detailed information on horizontal
  animation.
- When the content of the Side Panel exceeds the height of the viewport, overflow behavior such as a
  scrollbar is introduced.
- Consider the behavior of Side Panels at different responsive breakpoints and in different use
  cases. In use cases where the Side Panel is used to edit content within the page, keeping the Side
  Panel open and resizing the page content may be ideal. For use cases where a Side Panel is not
  required to remain open, enabling a Side Panel to automatically collapse when it reaches smaller
  screen sizes will prevent the panel from taking up too much of the screen until the user wants to
  take action on it.
- When using the Expand/Collapse Button within the Side Panel, use a
  Tooltip to provide additional affordance that the icon is
  interactive and to improve accessibility for the Side Panel. When the Side Panel is expanded,
  tooltip text reads "Collapse" and when collapsed, the tooltip reads "Expand."

#### When to Use

Although the elements within a Side Panel are highly configurable to support various use cases, they
are commonly used in the following ways:

#### Local Page Navigation

- Provides users with a way to navigate within an area of your product.
- Typically tied to the main content region.
- Often collapsible but not closeable, meaning the Panel remains on the page and cannot be
  dismissed.

#### Editing and Displaying Additional Information

- Ideal for editing specific content within the page or displaying additional information that
  supports the main content area.
- Can be temporary, meaning the Panel may disappear when the associated content on the main page is
  no longer in focus.

#### Panel Overlays

- When Panels open over an overlay, the user cannot interact with the main page. The overlay helps
  users focus attention on the contents of the Panel, making it ideal for higher-level navigation
  and editing or displaying additional information while minimizing distractions.
- A Side Panel that opens over an overlay has a close Button but not a collapse. Activating the
  Button closes the Panel and the Overlay so the user can return focus to the main page.

#### Do's and Don'ts

- **⚠️ Caution:** Consider screen real estate when multiple Side Panels are present within a page. When multiple Side Panels are open at the same time, it may be overwhelming to users as their page content shrinks.
- **✅ Do:** When using the Expand / Collapse Button with the Side Panel, provide a Tooltip to label the icon only Tertiary Button variant. When the Side Panel is expanded, the Tooltip contains the text "Collapse" and when collapsed, the Tooltip reads "Expand."

### Accessibility Guidelines

#### How Side Panels Impact the Accessible Experience

One of the most important aspects of Side Panel is understanding when the Side Panel’s content
begins and ends in the context of the holistic design. Side Panel uses a “landmark region” to help
establish such boundaries of the Side Panel’s content for non-visual screen reader users. Including
semantic heading text at the top of the Side Panel is recommended to help reinforce the beginning of
Side Panel content, and convey the intended purpose of the section. Finally, users must be able to
understand whether the Side Panel content is expanded or collapsed on the screen.

#### Keyboard Interaction

Each interactive component inside Side Panel must have a focus indicator that is highly visible
against the background and against the non-focused state. Refer to
Accessible Colors for more
information.

Side Panel must support the following keyboard interactions:

- `Tab`: focus the Side Panel toggle button, and any other interactive components inside Side Panel
- `Enter` or `Space`: activates Side Panel toggle button

#### Screen Reader Interaction

Side Panel must communicate the following to users:

- The Side Panel is a landmark region, named by the Side Panel’s heading text
- The “expanded” or “collapsed” state of the Side Panel

#### Design Annotations Needed

- Specify when the Side Panel is used for navigation
- Specify heading level at the top of SIde Panel

#### Implementation Markup Needed

- Use semantic heading text at the top of Side Panel to describe the purpose of the content included
  inside of Side Panel.
- [Included in component] Use a semantic `<section>` element and an `aria-labelledby` reference to
  create a landmark region for screen readers.
- When Side Panel is used for navigation purposes, use the `as` prop to change the rendered element
  from the default `<section>` to a `<nav>` element.
- [Included in component] An accessible `Tooltip` component is included on the Side Panel toggle
  button describing what the icon button will do when activated.
- [Included in component] The toggle button must have an accessible name using either an
  `aria-labelledby` reference or an `aria-label` string.
- [Included in component] The toggle button must convey the Side Panel state using the
  `aria-expanded` property.

## Skeleton

### Usage Guidance

- A Skeleton should provide a close representation of the ultimate page layout and content once
  loaded.
- Use motion within the Skeleton to reinforce that the page is loading behind the scenes.
- Ideal for pages that require longer initial load times.
- Use for pages where all content loads at the same time.
- Meant to be used specifically on a white background.

#### When to Use

- Use Skeleton if the visual layout/format of the content being loaded is known ahead of time.
- Use specifically on pages where all or a majority of the page will be taking time to load.

#### When to Use Something Else

- If the visual layout/format of the content being loaded is unknown; or you need to indicate
  processing or that change will occur on the page (rather than loading UI elements), consider using
  a Loading Dots instead.

### Accessibility Guidelines

- A Skeleton should announce to users using a screen reader that content or a page is being loaded.

## Status Indicator

> **Status Indicator (Preview) vs. Status Indicator (Main):** We recommend you use the Status Indicator in the Preview package (`@workday/canvas-kit-preview-react`) documented here on this page. The Status Indicator in the Main package (`@workday/canvas-kit-react`) will eventually be replaced with the Status Indicator in the Preview package.

### Usage Guidance

- A Status Indicator is a way of making an element on the page stand out to inform the user that
  there is something special about it that warrants the user’s attention.
- Status Indicators are non-interactive visual cues that highlight a change in the system or task.
  They are read-only, passive elements that should not take the place of an action or button.
- Although Status Indicators are commonly used to signal validation feedback or notifications, they
  can also be used on their own, such as within a Table.
- Status Indicators have a max-width of 200px so that users can easily scan and recognize status
  quickly. Status text should be short, direct, and preferable a single word.
- Status Indicator text should not wrap.
- In general, try to avoid relying on overflow solutions like tooltips - instead, keep text concise
  to avoid truncation from happening in the first place.
- Combine background color variation with logical status text.
- When competing with other visual labelling elements, status indicators can be distracting. Use
  them in moderation, and consider how many (if any) indicators should be used in your design.

#### When To Use

- To attract user attention to a particular piece of content or UI element whose status has changed
  or may change in the future.
- Use low-emphasis indicators in instances where they may dominate the screen, such as in a table
  when they appear alongside many other Indicators.
- Use high-emphasis Status Indicators sparingly. Reserve these to pair with headers or page section
  titles.
- Reserve transparent Status Indicators to communicate status on top of imagery and video.

#### When To Use Something Else

- If one or two words is not enough to convey the status, consider using body text or a header with
  detail text to communicate the status.
- If a status is less important to the user or task, consider using body text or a header to
  communicate the status.
- Status Indicators are not interactive components. If a status needs to be interactive, consider
  using a Hyperlink or
  Tertiary Button.

### Variations

Status Indicators have a background color to help users recognize the meaning of a status across
applications. Each indicator background type has two variations, one to support both high and low
emphasis indicators. Keep in mind that Status Indicators can increase the amount of visual noise or
add unwanted emphasis when used repetitively. Take this into consideration when selecting your
background variation.

The examples below outline the suggested purpose of each indicator color and variation.

### Accessibility Guidelines

#### How Status Indicators Impact the Accessible Experience?

Status Indicators do not have any keyboard interaction because they represent static text on the UI.
However, when the text inside Status Indicator is truncated (overflow), users must be able to
display the full text using a keyboard only.

When using icons in Status Indicators, the icons may be considered decorative in most cases and will
not require any text alternatives for screen readers. In cases where the icon communicates something
about the status that is not conveyed by the text of the status, then the icon will need to be
augmented with a text alternative.

#### Keyboard Interaction

When the Status Indicator text overflows, it must have a focus indicator that is highly visible
against the background and against the non-focused state. Refer to
Accessible Colors for more
information.

Status Indicator with overflow must support the following keyboard interactions:

- `Tab`: focus the status indicator, tooltip displays when status indicator is focused
- `Esc`: dismiss tooltip

#### Design Annotations Needed

No annotations required for Status Indicators

#### Implementation Markup Needed

- Multiple Status Indicators can be grouped together using unordered list markup, `<ul>` and `<li>`
  elements.
- Status Indicator with overflow must have a `tabindex` attribute and an
  OverflowTooltip to display
  the full text on hover and keyboard focus.
- [Included in component] Decorative `<svg>` icons are hidden from assistive technology with
  `role=“presentation”` and `focusable=“false”`

## Switch

> **Switch (Preview) vs. Switch (Main):** We recommend you use the Switch in the Preview package (`@workday/canvas-kit-preview-react`) documented here on this page. The Switch in the Main package (`@workday/canvas-kit-react`) will eventually be replaced with the Switch in the Preview package.

### Usage Guidance

- Use a Switch to enable or disable a mode, feature, or function.
- Switches take effect immediately and no confirmation step required.
- A Switch only has two states: on and off.
- The Form Label can be positioned above or to the left of the Switch for LTR languages, and above
  or to the right for RTL languages.
- The Switch Label is aligned to the right of the Switch for LTR languages, and to the left for RTL
  languages.

#### When to Use

- Use to turn a mode on or off.

#### When to Use Something Else

- Consider using Radio Buttons if users need to select one item
  from a list of options.
- Consider using a Checkbox if users need to confirm a
  statement such as an agreement.
- Consider using a Checkbox or Multi-select Prompt if users can select multiple items from a list of
  options.

### Accessibility Guidelines

#### Keyboard Interaction

Each Switch must have a focus indicator that is highly visible against the background and against
the non-focused state. Refer to
Accessible Colors for more
information.

Checkboxes must support the following keyboard interactions:

- `Tab`: focus a Switch
- `Space`: change the state of a focused switch

#### Screen Reader Interaction

Switch must communicate the following to users:

- The accessible name (label) of the focused Switch
- The state of the Switch

#### Design Annotations Needed

No design annotations needed for Switch

#### Implementation Markup Needed

- Switch must have a `required` attribute when the Switch is required for submission.
- Switch must have an `aria-invalid=”true”` attribute when it has an error condition
- [Included in component] Switch is based on an HTML Checkbox Input, which already supports the “on”
  and “off” states of this component without the `aria-checked` property.
- [Included in component] Switch must have an ARIA `role=“switch”` attribute augmenting the checkbox
  input element.
- [Included in component] A `<label>` element is required with a `for` attribute referencing the
  unique `id` value of the associated Switch.
- [Included in component] A `disabled` attribute is set when the Switch is disabled.

## Table

### Usage Guidance

Data Tables are intended to display data that can be easily scanned and compared.

- Conceptually, each row in a Table represents an item, and each cell of that row is an attribute of
  that item.
- This means that all the cells in a particular column will be the same data type such as dates,
  numerals, text, etc.
- Ideally, there should be one value per cell. Field sets are discouraged.
- Nested Tables are highly discouraged.

#### When to Use

Use tables to allow users to:

- Easily scan and compare data
- View and edit data
- Manipulate and navigate through a large amount of data
- Preview data

#### When to Use Something Else

Consider another component when:

- You only have a small data set.
- A more detailed amount of information needs to be displayed by default.
- There is more than one piece of information within a cell.

#### Design Annotations for Accessibility

- Specify the column header for every column
- Specify the row headers, if applicable
- Specify the caption of the table

#### Dos and Don'ts

- **✅ Do:** Right align numeric data in tables.
- **✅ Do:** Right align actions in tables.

- **✅ Do:** Allow cell text to wrap where possible, giving users access to the full contents of the cell by default.
- **✅ Do:** We recommend wrapping text where possible, but if needed, cell text may be truncated, showing full text in a tooltip on hover.

## Tabs

> **Tabs (Preview) vs. Tabs (Main):** We recommend you use the Tabs component in the Preview package (`@workday/canvas-kit-preview-react`) documented here on this page. The Tabs component in the Main package (`@workday/canvas-kit-react`) will eventually be replaced with the Tabs component in the Preview package.

### Usage Guidance

- Tabs are used to help the user navigate through information while remaining in context of the
  page. This is the most important reason to use Tabs. Users should not navigate to a different page
  when interacting with Tabs.
- Content that is grouped within a Tab should always be related so that the user knows what to
  expect when they navigate each Tab. Never force users to switch back and forth between Tabs to
  complete a task.
- Tab labels should be concise, scannable, and descriptive of their contents. Avoid using multiple
  words for Tab labels. Never use icons. To reduce cognitive load and a cluttered UI, avoid using
  more than 6 Tabs.
- Tabs should directly relate to the page section they’re within.
- The Tab divider line should span the full width of its container and create a clear distinction
  between what’s under the Tab sections and the rest of the page.
- Do not use Tabs as a primary form of navigation.
- When there are too many tabs to display at once, use the overflow menu to indicate that more Tabs
  are available.
- The recommended minimum width of a tab is 88px, standard padding to the left and right is 24px,
  and minimum padding is 16px.
- You can place most components within Tabs, because they operate like mini-pages. For example,
  Grids, Field Sets, and Prompts can all be added within a tabbed page.
- You can use fixed Tabs, especially when the contents of a tab is scrollable.

#### When To Use

- When content can be grouped into logical sections in order to avoid overwhelming the user with a
  lot of information. Tabs should cater for distinct groups of information.
- To alternate between two or more sections of organized content while keeping the user in-context
  of the greater UI.
- Use Tabs to help section off and organize related content.
- When you have an abundance of related content to house in a small container.

#### When To Use Something Else

- Consider an alternative solution if the information within multiple Tabs needs to be viewed
  simultaneously. Tabs are not suitable for comparing information or data, as it forces the user to
  rely on short term memory when switching back and forth between Tabs.
- Consider using a more prominent, alternative form of navigation when there is a need for more than
  6 or 7 Tabs.
- Avoid using Tabs within a card UI.
- If the content on a page is cohesive and doesn’t take up too much space, Tabs are likely
  unnecessary.
- When Tabs are already being used on the page.

#### Variations

| Type             | Purpose                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default/Standard | Should be used in most use cases for tabs.                                                                                                                                                                                                                                                                                                                                                                       |
| Full-Width       | Exclusively used in smaller containers ~300-400px width (e.g. within side panels or responsive UI).<ul><li>No margin between Tabs. Tab widths are evenly proportioned, defined by its container.</li><li>Active chip spans full-width of the active Tab.</li><li>2-3 Tabs max for this variation.</li><li>Do not use on large desktop experiences. More suitable for container widths less than 400px.</li></ul> |
| Wrapped Tabs     | Edge case for when there is a requirement to have lengthy or multiple words for a Tab label.<ul><li>Max of two lines wrapped.</li><li>This variation increases the overall Tab set height.</li></ul>                                                                                                                                                                                                             |

#### Touch Based Behavior

Touch Based behavior for Tab compnents on web adapt and mimic the mobile experience to allow
overflow when the tab text stretches past the width of the users’ screen. These Tabs support mobile
behavior based on modality and help support WebView users. Touch Based behavior for Tabs will switch
from displaying an overflow menu to become scrollable from left to right in order to replicate a
mobile experience when viewing a WebView screen (not a native mobile screen) on a mobile device.

#### States and Behavior

- By default, Tabs should always contain one Tab with an active state.
- Only one Tab can have an active state at a time.
- The inactive state of a Tab can inherit a hover, focus, and selected state.
- The active state of a Tab can only inherit a focus state.

### Accessibility Guidelines

#### Keyboard Interaction

Each tab must have a focus indicator that is highly visible against the background and against the
non-focused state. Refer to
Accessible Colors for more
information.

Tabs must support the following keyboard interactions:

- `Tab`: focus the active tab element
- `Left Arrow` or `Right Arrow`: move focus to the previous or next tab element
- `Enter` and `Space`: activate the focused tab element
- [Alternative Tab Stop](#alternative-tab-stop) : `tabpanel` can optionally be included in focus
  order to improve discoverability for screen readers, and allow scrolling with the keyboard when
  the height is fixed.

#### Screen Reader Interaction

Tabs must communicate the following to users:

- The focus is placed on a tab control
- Which page tab in the set is currently selected
- How many total number of tabs are available

#### Design Annotations Needed

No design annotations needed.

#### Implementation Markup Needed

- Interactive elements are not allowed inside of a `tablist` or `tab` element.
- [Included in component] All tab buttons must have a `role="tab"`, inside of a parent element with
  `role="tablist"` attribute.
- [Included in component] All tabs are required to have an `aria-selected="false"` attribute, except
  for the actively selected tab, must be set to `“true”`.
- [Included in component] The content area container for the `tablist`, must have a
  `role="tabpanel"` attribute and an `aria-labelledby` attribute referencing the unique `id` of the
  active tab element.

#### Resources

- Tabs | APG | WAI | W3C

## Text Area

### Usage Guidance

- Use the Text Area component when you need to let users enter an amount of text that’s longer than
  a single line.
- To ensure we don’t overwhelm users, there shouldn’t be more than two Wide Text Areas on a page.
- For all Text Areas on Web, a user clicking into a field or label that's not disabled will trigger
  the text cursor to appear, allowing users the ability to type. As the user types in the Text Area,
  the placeholder text is replaced with the user’s input.

#### When to Use

- Use the Text Area to fit longer text descriptions, usually around one paragraph.

#### When to Use Something Else

- Use a Rich Text Editor to give users the ability to format text.
- Use a Text Input for single line of text.

## Text Input

### Usage Guidance

- Text Inputs can only support words, numbers or characters.
- Standard and Wide Text Inputs does not support images or any text styling.
- To ensure we don’t overwhelm users, there shouldn’t be more than two Wide Text Inputs on a page.
- For all Text Inputs on Web, a user clicking into an input or label that is not disabled will
  trigger the text cursor to appear, allowing users the ability to type. As the user types in the
  Text Input, the placeholder text is replaced with the user’s input.

#### When to Use

- Text Input is typically a form element used to collect user data that includes words, numbers or
  characters.

#### When to Use Something Else

- If styling is needed, such as for configuring email messages, you can use a Rich Text Editor
  instead.
- Use a Text Area when you need to let users enter an amount
  of text that’s longer than a single line.
- Consider using a Select,
  Radio or Checkboxes if
  there are predetermined data that a user should not input themselves.

## Toast

### Usage Guidance

- Toasts should communicate information about the status of an application’s process, like
  confirmation that a task has been successfully submitted.
- They are low-emphasis and meant to be temporary, but can also be dismissed manually with a Close
  Button.
- Toasts should overlap and visually look like they are in front of other UI elements without
  blocking important actions.
- Action Links should be short. Including a non-required action, such as “View More,” is optional.
- For more information on Toast placement, please reference the
  Banner
  variant of the Error and Alert Notifications pattern.

#### When to Use

- Use Toasts when communicating updates about the process of an application.
- Use Toasts for lower priority messages that do not require user action.

#### When to Use Something Else

- Consider using Banners if communicating messages about system
  errors or alerts.
- Consider using Dialogs when informing users about critical information that requires user action
  or decision.

| Type    | Emphasis | Purpose                                                                                                                          |
| ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Toasts  | Low      | Although Toasts communicate low priority information, user action is still required to dismiss Toasts.                           |
| Banners | Medium   | Banners should be used for messages about errors and alerts. They do not disappear unless the user resolves the required action. |
| Dialogs | High     | Dialogs are reserved for messages of the highest priority. They command user action.                                             |

### Accessibility Guidelines

#### How Toasts Impact the Accessible Experience

Toasts can be easy for users to miss and they will not be the most robust way to send users
information. Toasts might dynamically appear and disappear outside of a low vision user’s magnified
view. Screen readers must announce passive toasts as they appear on screen in real-time, and users
must be able to navigate to an actionable toast without relying on a mouse pointer.

Alert notifications should be reserved for time-sensitive and urgent information. Alerts are
disruptive, and are intended to interrupt screen reader speech output. Status notifications are
recommended for most cases because they will “politely” wait for users to finish what they are
doing.

#### Keyboard Interaction

Interactive elements in a Toast must have a focus indicator that is highly visible against the
background and against the non-focused state. Refer to
Accessible Colors for more
information.

User-generated actionable Toasts must move keyboard focus to the first interactive element inside
the Toast.

Toast must support the following keyboard interactions:

- `Tab`: focus the close button or action link in the Toast
- `Enter` or `Space`: activate the close button or action link in the Toast

#### Screen Reader Interaction

Toast must communicate the following to users:

- Text content of the Toast when it appears in real-time

#### Design Annotations Needed

- Define notification type “status” or “alert”

#### Implementation Markup Needed

- ARIA live regions work by dynamically inserting content updates inside of an element with the
  `aria-live` attribute set.
- When an Actionable Toast is generated from a user action, set keyboard focus to the first
  interactive element in the toast.
- When a toast is generated by the system, avoid moving the keyboard focus away from users’ context.
  Use an ARIA live region instead.
- [Included in component] For time-sensitive notifications, set `aria-live=”assertive”` and
  `role=”alert”` to interrupt screen reader users. Otherwise, set `aria-live=“polite”` and
  `role=”status”` when the notification is not urgent.

## Tooltip

### Usage Guidance

- Tooltips provide relevant and descriptive information about an element.
- They appear when a user hovers over or interacts with the related element.
- Tooltip text should be descriptive, yet short and succinct.
- Tooltips should always be positioned next to the element it is connected to. The Tooltip’s
  position will vary depending on where the element is in relation to the edge of the screen.

#### When to Use

- Use Tooltips to help users differentiate between similar elements.
- Pair Tooltips with
  icon only Primary/Secondary/Tertiary Buttons variants to help
  communicate the meaning or purpose of the icon.

### Accessibility Guidelines

#### How Tooltips Impact the Accessible Experience

Tooltip “hover” text is a great way to help users understand the intent of ambiguous icons, and
provide further detail about some elements in a design. A hovering interaction however, is not going
to be available to all users at all times. Mobile devices don’t support hovering interactions, and
desktop users may not be willing or able to use a pointing device to hover on an element.

Alternatives to the hover interaction must be considered, and tooltip content must be displayed
visually on keyboard focus. Tooltips can be used for showing truncated text, but only in scenarios
where the keyboard can focus the component. Applying tooltips to truncated heading or paragraph text
will lead to accessibility problems.

Refer to
tooltips and toasts
for more information about writing tooltip content.

#### Keyboard Interaction

Tooltips must only be used on elements that can be focused with the keyboard. Sighted users must be
able to access the content in a tooltip without the use of a mouse.

Tooltips must support the following keyboard interactions:

- `Tab`: focuses an element, tooltip displays when element is focused
- `Esc`: dismiss tooltip

#### Screen Reader Interaction

Tooltips must communicate the following to users:

- The text content of the tooltip as the name of an element (default)
- The text content of the tooltip as an element’s description (describe)
- Nothing, when the tooltip text content matches text content already on screen. (muted)

#### Design Annotations Needed

- Specify which tooltip variant should be used: default, describe, or muted.

#### Implementation Markup Needed

- [Included in component] Default tooltips will set an `aria-label` string to the element.
- [Included in component] Describe variant will instead set an `aria-describedby` attribute to the
  element, referencing an `id` of the tooltip text content.
- [Included in component] Muted variant will be hidden from screen readers and other assistive
  technology.
