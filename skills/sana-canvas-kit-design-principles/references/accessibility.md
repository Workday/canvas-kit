# Canvas Accessibility Guidelines (Snapshot)

> **Snapshot, not a live source.** Captured 2026-09-02. Do not fetch anything at runtime to refresh
> or supplement this content -- not a design site, not an MCP server -- read this file only.
> Component-specific accessibility guidance (keyboard interaction, screen reader behavior, design
> annotations per component) lives in [components.md](components.md); this file covers the
> cross-cutting guidelines.
>
> This is guidance only -- not automated validation or a WCAG compliance certification. For
> implementation-level ARIA/keyboard/focus patterns, see `/sana-canvas-a11y`.

## Introduction to Accessibility

### Design Philosophy

We are guided by the
Web Content Accessibility Guidelines (WCAG) 2.1 A/AA in how users
access and consume our content. The principles of the WCAG are a technology-neutral approach to
ensure that users can find, access, and manipulate information reliably across a range of devices.
Workday strives to ensure those principles are included in every step of our design process.

### Everyone Benefits from Accessibility

Accessibility efforts typically aim to serve users who may have an impairment affecting the
following:

- Vision
- Auditory Sense
- Motor Function
- Cognitive Ability

However, web accessibility is not limited to persons with permanent disabilities. Considering the
needs of users with disabilities when designing makes the experience better and more robust for all
users. For example, using colors that have sufficient contrast to background content is not only an
aid to users with a visual impairment but also beneficial to everyone looking at a screen in bright
daylight.

### Categories of Accessibility

We continually improve our products and services in four key categories of accessibility:

#### Perceivable

Information and user-interface components must be presentable to users in ways they can sense.

- **Example:** Do users know that there is a button on the webpage?

#### Operable

Users must be able to operate the interface. The interface cannot require interaction that a user
cannot perform.

- **Example:** Can users activate the button?

#### Understandable

Users must be able to understand the information as well as the operation of the user interface. The
content or operation cannot be beyond their understanding.

- **Example:** Does the button have a descriptive label? Is it clear to the user what will occur if
  they interact with the button?

#### Robust

Content must be robust enough that it can be interpreted reliably by a wide variety of assistive
technologies. As technologies advance and browser and assistive technologies evolve, the content
should remain accessible.

- **Example:** Does the button work reliably and predictably across broad range of devices?

More detail on these categories and on the rest of the guidelines can be found at
Web Content Accessibility Guidelines (WCAG) 2.1

### Approach

Accessibility is a multifaceted challenge that requires a variety of methods to ensure that all
users can access content in a way that works for them.

As part of our process, Workday fosters understanding of the different experiences that users face.
To do this, we:

- Promote human-centered design and usability for all
- Design products with POUR (perceivable, operable, understandable, and robust) principles in mind
- Work closely with all stakeholders, including our customer partners and end users
- Solicit feedback on features and functionality from a diverse range of people, including those
  with disabilities
- Host workshops facilitated by accessibility specialists
- Encourage use of our accessibility research and training lab

## Accessible Color

### Designing with Color

Using color in a manner that allows all users to understand designs is crucial to creating an
inclusive design. Choose colors that allow optimal usability within your application. Color should
be used to enhance understanding rather than as the primary means to communicate information.
Consider the following when designing with color:

- Using color as the sole means of communicating information is not as clear as using multiple
  methods of communicating information.
- Different user types may not be able to recognize information that is only conveyed using a single
  sensory characteristic such as color.

### Contrast Ratios

All text, images of text, and icons should provide sufficient contrast so that users are able to
navigate and interact with your interface easily. Contrast is displayed as a ratio that ranges from
1:1 to 21:1. The difference between the two numbers indicates how much relative luminance (the
relative brightness of any point in a colorspace) there is between the foreground and background
colors. Contrast ratio requirements ensure that foreground content can easily be seen in front of a
background color.

Color-contrast ratios will vary depending on font size and weight, and will generally be lower as
text gets larger because the strokes on larger letters are wider and easier to read at a
lower-contrast ratio.

Ensuring that contrast ratios are properly met will allow all users to read and understand content.
These W3C guidelines apply to contrast ratios:

- Text that is 14 pt or below must meet a 4.5:1 contrast ratio.
- Text that is 14 pt and bold or larger than 18 pt must meet a 3:1 contrast ratio.
- Contrast ratios also apply to text, non-text content, and images of text.
- Non-text content must meet a 3:1 contrast ratio.

### Do's and Don'ts

- **✅ Do:** Use colors that meet contrast ratios for all text, non-text content, and image of text. Follow color guidelines laid out in Canvas.

- **❌ Don't:** Use color as the sole means of communicating information. Alter colors of logotypes; they are not required to meet color contrast requirements.

## Accessible Forms

### Overview

#### Form Instructions

Accessible forms have clear instructions that are preferably positioned near the top of the form,
before the form’s input fields. Examples include explaining how required fields are represented
visually in the form. Required fields must be indicated visually in a way that does not depend on
color perception, and must be indicated programmatically for assistive technologies that need to
describe such constraints to users.

Field formatting requirements must also be included, preferably as part of a field label to ensure
that assistive technology will describe the necessary formatting. Using placeholder text may be
acceptable, but includes some distinct disadvantages:

1. Assistive technology may not always describe the placeholder value, particularly when there is
   already input entered into the field.
2. Placeholder values typically include low contrast colors and are particularly difficult for low
   vision or color blind users to perceive. When contrast is increased, users are more likely to
   mistake placeholder values for real form input.

For the reasons listed above, we recommend reserving placeholder values specifically for examples of
valid field input.

If additional information is needed to understand or complete a form field, display this information
in context of the form field, rather than as a separate document. Finding “buried” information can
be confusing for some users and may lead to higher form error rate.

#### Hidden, Read-Only, & Disabled Form Controls

All disabled form controls are explicitly exempt from the
minimum contrast guidelines set
in WCAG 2.2. The low contrast colors are likely to be difficult for low vision and color blind users
to perceive the values of the disabled control.

Disabling Buttons that submit a form to block the submission of invalid data carries a risk of
blocking users from submitting the form if they cannot understand what is missing or needs to be
corrected. For this reason, we do not recommend disabled form submit buttons.

- Showing controls on a “need to know” basis, that is, hiding form controls that users do not have
  the required permissions to access, can reduce the complexity of the page and reduce cognitive
  load.
- Setting a control to read-only or replacing it entirely with static text is preferable to disabled
  controls because of the higher contrast when users need to view information about a control and
  don’t have the required permissions to modify it.
- Provide an explanation for why the field is disabled and how to proceed when a field is
  temporarily unavailable or requires action from users to change the disabled status.
- All disabled form controls are removed from the keyboard focus order of the screen. While this is
  standard behavior according to HTML specification, **it is not true** that screen reader users
  won’t be able to access disabled input. All screen readers are capable of detecting disabled form
  controls even if the controls cannot be focused with the keyboard.

#### Keyboard Accessibility

Pointing devices, like a mouse or trackpad, are not universally accessible devices. Why? A pointing
device requires some functional eyesight to perceive the on-screen pointer, and fine motor control
to precisely move the pointer. An accessible form is a form that can be completed accurately using a
variety of alternative input devices including a keyboard, a custom switch control, and even by
interpreting users voice commands.

For more information about various input devices, refer to
Alternate Input Devices.

For more information about keyboard interactions, please refer to the Accessibility Guidelines
section for each individual component.

#### Label Placement

Labels describe the purpose or function of a form control such as a Text Input or Checkbox. Labels
for most form controls must be positioned to the left or directly above the form control; Radio
Button and Checkbox labels must be positioned to the right of the control. The aim should be to
maintain a close and distinct visual relationship between the label and the form control.

Placing labels above the form controls help reduce horizontal scrolling for people with low vision
and mobile device users.

#### Grouping Fields

Grouping fields together isn’t always necessary or recommended. While designing an accessible form,
examine where it is necessary to use repeated sets of identical input fields that need a little
extra context to describe the purpose of each group. For example:

- Using 3 Text Input fields to capture the month, day, and year values of a “start date” and “end
  date”
- Using 2 Text Input fields to capture the time of day
- A form capturing both a billing address and a shipping address

### For Designers

#### Multi-Step Forms / Wizards

Wherever possible, forms must be divided into multiple small sections of related inputs. This helps
make long forms less daunting and easier to understand, particularly for people who are less
experienced using computers or who have various cognitive disabilities.

- Each section of the multi-step form should have 5-10 form controls at most.
- Form level instructions must be repeated at the beginning of every section.
- Multi-step forms must include a progress bar, step count, or percent complete indicator so users
  can understand their progress through the task.
- Optional form controls or groups of controls must be clearly communicated. Optional sections must
  have a mechanism to skip the page.
- If possible, don’t set a time limit to fill out the form. If a time limit is required, users must
  be able to adjust or extend the time limit.

#### Redundant Data Entry

Information that the user has previously entered must be made available to them, so that users are
not entering repetitive information. Previously entered information can be made available through a
select dropdown, or by allowing users to copy-paste or by auto-populating inputs with previously
entered values.

The intent of which is to reduce the cognitive impact to users when information is asked for
repeatedly in multi-step process flows. Allowing browsers to auto-fill commonly entered information,
such as names and addresses, can also help reduce the cognitive load and effort on users.

Examples include ecommerce sites that give users a checkbox to specify that the billing address is
going to be identical to the shipping address.

## Alt-Text and Non-Text Content Labels

### Why Content Labels Matter

Many people who are blind or visually-impaired use an assistive technology called a screen reader to
access a computer or mobile device. A screen reader converts text into speech or Braille output. For
many people who use screen readers, UI text is how they interact with and experience a digital
product.

Text-based experiences are also helpful for people with dyslexia and other cognitive or learning
disabilities who need to see and hear the content to better understand it.

Some users experience situational impairments like a slow internet connection. In this case, images
might not load, and users will need a faster loading content-only experience.

### What Is Alt-Text?

Alternative-text (or alt-text) is a text description of a static image, graphic, illustration, data
visualization, or other visual-content. Providing alt-text ensures that all users are able to have
an equitable experience and receive the same level of information and value from a UI.

In the context of the document, alt-text is the text equivalent to the image and is required if the
image is non-decorative.

Alt-text should be considered early in the design process, not just as an afterthought. When
creating images or graphics, make sure that the content has alt text to ensure an equitable
non-visual experience.

#### Alt-Text Vs. Captions

Alt-text is not the same as a caption. **Alt-text** describes the image for people who can’t see it.
**Captions** are extra information about that image for both users who can and cannot see the image.

A caption is not a substitute for alt-text. If there is a caption for an image, there must also be
alt-text.

#### Example:

_Sticky notes are a great tool for brainstorming._

```

  Sticky notes are a great tool for brainstorming.

```

#### Best Practices for Writing Alt-Text

- **Be Concise:** An image is worth a thousand words, but would you read or listen to them all? 80
  characters is a common width for
  refreshable Braille displays. Don't
  make your users scroll through an essay of your image's description.

- **Keep It Casual:** Describe the image as if you were describing it aloud to a friend.

- **Focus on Value:** Not every detail of the image needs to be described. Only describe parts of
  the image that add information not already available in the UI text. Ask yourself: “Why is this
  image included in the design? What is this image communicating to users?”

- **Use Proper Grammar:** Use punctuation and capitalization correctly as this directly relates to
  the listening experience.

- **Be Specific:** Don't include the word “image” in the description. Consider using more specific
  descriptors like "diagram," "flow chart," “illustration,” or “photo” if additional context is
  needed.

- **Ask, Is It Decorative?:** Images or graphics that are purely decorative and provide no
  additional value to the user do not need alt-text. They can be marked as decorative so they are
  skipped by screen readers.

For more information on how and when to use alt-text, check out
W3C’s alt Decision Tree.

#### Alt-Text Example:

_Photo by You X Ventures via
Unsplash_

- **✅ Do:** Provide a high level overview of the image's value. Ex. "photo of woman placing sticky notes on wall in a meeting"

- **❌ Don't:** Describe every detail of the photo. Ex. "A group of busy coworkers are all working around a messy conference table in an airy room with white walls. One woman wearing a white shirt is placing orange, yellow and pink sticky notes on a wall. There are 3 laptops, a plant, some notebooks and pads of sticky notes on the table."

#### Decorative Image Example:

The gradient banner at the top of the Workday homepage is decorative. It does not provide any
additional information to users so it does not have alt-text and is marked as decorative.

### What Is Non-Text Content?

Non-text content is any
interactive content in the UI, which is not text or an image. Examples include:
icons, icon-only button variants, and
interactive data visualizations. Similar to images, which require alt-text, non-text content
requires descriptive labels in the code to ensure an equitable experience for all users. Like
alt-text, labels for non-text content are not visible in the UI.

#### Best Practices for Writing Non-Text Content Labels

- **Focus on Purpose:** Non-text content labels should explain the value of the content, what it
  does, rather than just what it looks like.

- **Use Proper Grammar:** Use punctuation and capitalization correctly as this directly impacts the
  listening experience.

- **Avoid Duplication:** To avoid audible duplication of interactive elements, don't include the
  state (pressed, disabled, etc...), or the word 'button' or 'link' in the description.

- **Distinguish Functionality:** If multiple buttons on the same page have the same visual, they
  need uniquely distinguishable labels to make their functionality clear.

- **Consider Complexity:** More complicated non-text content like a data visualization may require
  both a short text label or title as well as a longer description of the content’s details.

- **Data Visualization Considerations:** For complex or dynamic data visualizations, the non-text
  content description might be represented with a table. Adding a caption can be useful for
  describing the analysis of, or main take-away from, the data visualization.

For a deep dive into how the brain processes data visually and how you can leverage different senses
to provide an equivalent experience for people with disabilities, check out
Data Verbalization by Doug Scheppers from Tenon’s
Technica11y webcast series.

### Non-Text Content Label Examples:

#### Icon Button Examples

- **✅ Do:** Describe the purpose of the icon or the action that it performs. Ex “Related Actions Allison Hunter”

- **❌ Don't:** Describe what the icon looks like. Ex “rectangle with three dots”

- **✅ Do:** Provide uniquely distinguishable information in the label to contextualize the functionality of the button. Ex “Mark Options”

- **❌ Don't:** Give multiple buttons with different actions the same label on a page. Ex “Options”

#### Chart/Graph Example

- **✅ Do:** Describe the title/purpose for the chart and provide an overview of the data. Ex. “Pie chart of "breakdown of profit by region. USA Central: 605,500; USA Northeast: 611,800; USA Southeast:" 1,323,000” Additionally, consider adding a caption below the data viz to describe in greater detail what its main takeaway is. Ex "USA Southeast accounts for 52% of total profit.”

- **❌ Don't:** Just say it’s a chart or what type of chart it is. That's like setting up a joke, but leaving out the punch line! Ex “This is a pie chart”

### Documenting Alt-Text and Non-Text Content Labels

Now that you have an understanding of how to write alt-text and labels, you’ll need documentation to
align with development teams and ensure the labels are properly included in the code. A great way to
do this is to include labels for non-text content as a part of the design spec.

In the following example from Enter Time, the designer used annotation bubbles to number each piece
of non-text content in the UI screen and then included a legend on the side with the same numbering
system to list out the label that corresponds to each element.

#### Best Practices for Alt-Text and Non-Text Content Label Documentation:

- Focus on the outcome and desired experience.
- Try not to prescribe a technical solution. Annotations should be non-technical in language—avoid
  using specific terms like 'aria-label' as that's not always the best way to add a label.

## Alternate Input Devices

### Overview

#### Examples of Alternative Input

- **Keyboard:** Using a keyboard with a web experience can be faster and more efficient than using a
  mouse pointer for micro-repetitive tasks like copying and pasting text, or moving from a username
  field to a password field. Keyboard navigation is fundamentally linear, users can either move
  forward or backward across the interactive controls, one at a time.
- **Switch:** Custom switch controls can be more useful than keyboards for people with physical
  motor disabilities. They come in a wide variety of shapes, sizes, and complexity even though the
  interaction is very similar to that of a keyboard.
- **Touch:** Multi-touch displays are less precise than a desktop mouse or trackpad device. Larger
  touch targets benefit users with reduced dexterity. Providing the appropriate on-screen keyboards
  (alphanumeric vs numeric) reduces effort and cognitive load required for submitting information on
  the go.
- **Voice Control (speech recognition):** Voice commands can be used for a hands-free computing
  experience. For example, commanding an application to be opened, an on-screen control to be
  clicked, dictation of text into a field.

### For Designers

#### Visible Focus Styling

Users with low vision, color blindness, or any power users who prefer to use a keyboard for
efficiency, must be able to see which interactive control is focused programmatically by the system.

It is recommended to use focus styling that has:

1. A 2 CSS pixel thick perimeter boundary
2. A contrast ratio of at least 3:1 between the same pixels of the focused and not focused states

#### Focus Order

Keyboard navigation is a linear experience, meaning users may only navigate forward through the
interactive controls on a screen, or backward. Navigating among the controls (focus order) is
required to be “logical and predictable.” In most cases, this is interpreted to mean following the
natural flow of content from right-to-left, top-to-bottom in RTL languages.

#### Skip Content

“Skip” links are valuable tools that assist keyboard users’ linear experience by allowing them to
jump past repetitive page header content. Skip links don’t need to be always visible, only when they
are needed and currently focused.

“Skip” links may be useful in complex, split-screen designs that require users to repeatedly
navigate between the two panels of content.

#### Hover Text (Tooltips)

Any information provided on mouse hover must also be accessible without using a mouse. Canvas
provides an accessible Tooltip component with 3 variants
designed for all scenarios that will work with keyboards and screen readers. What are the 3 variants
for?

- **Default:** Use this when the tooltip text is describing the purpose of the applied control
- **Describe:** Use this when tooltip text is supplementary to the applied control
- **Muted:** Use this when tooltip text is redundant to the text displayed from the applied control

- **✅ Do:** Use tooltips to explain purpose of icon buttons

- **❌ Don't:** Use tooltips on truncated headings and paragraphs

Refer to the
Accessibility Guidelines for Tooltips
for more detail.

#### Keyboard Shortcuts

Keyboard shortcuts can be a useful, well considered tool for enhancing a power user’s efficiency,
but shortcuts are not a lifeline for an inaccessible interaction. Custom keyboard shortcuts require
considerable design thinking to ensure the following:

1. Users must be educated on what the keyboard shortcut is, what it is for, and when it can be used.
   This requires clear documentation and in-context help within the experience.
2. Keyboard shortcuts **must not conflict** with any operating system commands, any web browser
   shortcuts, or any commands needed for assistive technology.
3. Users must be able to remap the custom shortcut, or turn off the shortcut entirely, in the event
   it interferes with the way they are using the system.

#### Touch Targets

Increasing the touch target size, and spacing in between touch targets, can improve accuracy for
everyone interacting with your designs on-the-go. This is especially true for people with reduced
fine motor control and other physical disabilities.

- For interactive controls, the tap target should be at least 24 by 24 pixels. Controls smaller than
  24 by 24 pixels should have padding around them to make the selectable area 24 by 24 pixels.
- Consider adding sufficient spacing between controls to prevent accidental selection. Spacing of at
  least 10 px between controls is recommended.

### For Developers

#### Focus Order

The focus order of the interactive controls on screen is derived by the browser’s DOM, and keyboard
navigation is required to be “logical and predictable.” CSS `flex` properties like
`flex-direction=”row-reverse”` can contradict the right-to-left expectation in RTL languages.

- **✅ Do:** Use a negative `tabindex` value when using JavaScript focus methods to focus elements which do not typically appear in focus order, such as a heading or a container.

- **❌ Don't:** Use `tabindex` on static text elements like headings or paragraphs.

#### Sticky Headers and Footers

The **initial position** of the focused control cannot be fully obscured from view by “sticky”
headers and footers. While users may be able to use the arrow keys to scroll elements into view, it
is unreasonable to expect users to micro-adjust the viewport scroll at each form field, and some
inputs require the arrow keys to select values thus interfering with page scroll.

#### Keyboard Traps

A “keyboard trap” occurs when it becomes impossible to leave a section of content without depending
on a mouse or trackpad to proceed. Keyboard traps can be relatively uncommon, but they need to be
taken very seriously as accessibility barriers when they do occur.

Manual end-to-end testing with **only** the keyboard is the most effective way to discover a
keyboard trap in a product or feature, otherwise keyboard traps often go unnoticed.

Keyboard traps can sometimes be intentionally designed:

- Moving keyboard focus and trapping it inside a modal dialog is beneficial to the user experience.
  Allowing the keyboard focus to get lost underneath a modal overlay must be avoided at all costs.
- If a web application necessarily must change the standard navigation behavior of the `Tab` key,
  then providing a well documented alternative means of escaping that section of the web application
  is required to avoid keyboard traps. Examples of such web applications can include a text editor
  that supports indentation with the `Tab` key or a spreadsheet application that uses `Tab` to
  navigate to the next cell.

#### Canvas Kit Tooltip Component

The HTML `title` attribute **is not an acceptable hover text** for two primary reasons:

1. `title` text does not appear visually on keyboard focus and thus, will not be accessible to
   sighted keyboard users.
2. `title` text often causes redundant (double) description by screen readers.

Canvas Kit’s Tooltip component was developed to address these
accessibility gaps. The Tooltip component has three variants:

- `default:` Applies the tooltip text to an `aria-label` string on the wrapped component.
- `describe:` Applies the tooltip text to an `aria-description` string on the wrapped component.
- `muted:` No changes applied to the wrapped component. This variant will not be announced by screen
  readers.

Refer to the
Accessibility Guidelines for Tooltips
for more detail.
