# Color Scale

Colors are organized into scales with steps from 0 (lightest) to 1000 (darkest). Colors are designed
to be perceptually balanced, ensuring consistent lightness across color families. Colors with the
same step number serve similar purposes, regardless of hue.

![Complete color scale showing 0-1000 progression across multiple color families demonstrating consistent lightness relationships](color-scale-overview.png)

Scales are designed using the okLCH color space to create perceptually balanced colors. Color peak
in vividness at the midpoint (500) and decrease at the tail-ends to create softer surface colors and
more vibrant accents.
![Vividness curve diagram showing how color intensity peaks at step 500 and decreases toward extremes](color-scale-vividness-curve.png)

**Amber Exception:** Due to amber's natural color properties, its chroma peaks at lighter values
(around step 300) rather than 500. This means amber uses step 400 for primary colors to maintain
accessibility compliance while preserving vibrancy.

![Amber vividness exception showing higher chroma around step 300–400](color-scale-400-amber.png)

![Perceptual uniformity demonstration showing how step 500 appears equally bright across all color families](color-scale-500.png)

<Do>

- Apply consistent steps for similar UI elements across all color families
- When choosing color combinations, use the [contrast framework](/guidelines/color/color-contrast)
  to ensure accessible contrast ratios
- Use steps to create visual hierarchy

</Do>

<Dont>

- Use steps for different purposes
- Mix steps randomly, always consider visual hierarchy
- Ignore contrast requirements when choosing steps

</Dont>

![Visual hierarchy example showing how step 100 applies consistently to secondary buttons across blue, green, and red color families](color-scale-100-to-300.png)

## Step Guidelines

Choose the right step for your UI elements:

![Step usage examples showing how different steps apply to common interface elements](color-scale-step-examples.png)

| **Step** | **Primary Use Case**  | **Description**                                                   |
| -------- | --------------------- | ----------------------------------------------------------------- |
| 0        | Page backgrounds      | Lightest color (white in light mode, black in dark mode)          |
| 25       | Input backgrounds     | Subtle differentiation that maintains text contrast               |
| 50       | Subtle backgrounds    | Light surface backgrounds that don't compete with primary content |
| 100      | Secondary backgrounds | Clear hierarchy between subtle and primary content                |
| 200      | Divider borders       | Gentle separation, less harsh than stronger borders               |
| 300      | Container borders     | Structural definition while remaining lightweight                 |
| 400      | Disabled states       | Reduced contrast for disabled input borders and text              |
| 500      | Input borders         | Meets 3:1 contrast for interactive boundaries                     |
| 600      | Accent text           | Balances vividness with readability on white backgrounds          |
| 700      | Hover states          | Increased weight provides interaction feedback                    |
| 800      | Body text             | Comfortable contrast for extended reading                         |
| 900      | Heading text          | Strong contrast creates content hierarchy                         |
| 950      | Display text          | Maximum contrast demands immediate attention                      |
| 975      | Dark mode backgrounds | Reserved for dark mode page backgrounds                           |
| 1000     | Maximum contrast      | Strongest emphasis for overlays, rarely used                      |

### Steps 0–100 - Page Backgrounds

![Interface showing default white page background (step 0) and subtle gray alternative background (step 50) in side-by-side layouts](color-scale-page-backgrounds.png)

Use the default page background for most use cases, especially if colors will be used on top of it.

A secondary option is needed when subtle differentiaton is needed against the background.

<Do>

- Use default background for most page layouts
- Choose subtle alternatives when background differentiation is needed
- Apply very light backgrounds for disabled and error states

</Do>

<Dont>

- Use subtle backgrounds when color overlays will be present
- Apply alternative backgrounds without clear purpose

</Dont>

| **Color**  | **Usage**                          |
| ---------- | ---------------------------------- |
| `base.0`   | Default background color for pages |
| `slate.50` | Subtle background color for pages  |

### Step 50 - Subtle Backgrounds

Light surfaces that don't compete with primary content.

![Step 50 subtle background examples](color-scale-50.png)

<Do>

- Use for low emphasis status indicators
- Create subtle content zones that don't compete with primary content
- Apply when minimal visual presence is desired

</Do>

<Dont>

- Use when content needs to stand out or grab attention
- Apply to elements requiring clear visibility

</Dont>

### Step 100 - Secondary Backgrounds

Clear hierarchy between subtle and primary content.

![Step 100 secondary background examples](color-scale-100-to-300.png)

<Do>

- Use for secondary button backgrounds
- Apply to hover states for light content
- Choose for UI elements needing moderate prominence

</Do>

<Dont>

- Use for primary actions or main content
- Apply when subtle emphasis is sufficient

</Dont>

### Step 200, 300 - Surface Borders

Visual structures for non-interactive surfaces.

<FormattedImage caption="Step 200 - Gentle separation between content.">

![Step 200 divider borders examples](color-scale-200-to-300-borders.png)

</FormattedImage>

<FormattedImage caption="Step 300** - Container borders indicating modular sections.">

![Step 300 container borders examples](color-scale-300.png)

</FormattedImage>

<Do>

- Use lighter borders for list dividers and lightweight boundaries
- Apply stronger borders for container definition and modular sections
- Choose based on visual separation needs

</Do>

<Dont>

- Use for interactive elements requiring higher contrast
- Apply to elements needing accessibility compliance

</Dont>

### Step 400, 500 - Interactive Elements

<FormattedImage caption="Step 400 - Disabled states with reduced contrast.">

![Step 400 disabled foregrounds/borders examples](color-scale-400.png)

</FormattedImage>

<FormattedImage caption="Step 500 - Interactive boundaries meeting 3:1 contrast. Midpoint with peak saturation for vibrant accents.">

![Step 500 input borders examples](color-scale-500.png)

</FormattedImage>

<Do>

- Use reduced contrast for disabled states and non-interactive elements
- Apply accessible contrast for input borders and interactive elements
- Meet minimum WCAG 2.1 AA compliance requirements
- Leverage peak saturation for vibrant accent colors

</Do>

<Dont>

- Use disabled state colors for interactive elements
- Apply interactive colors below minimum contrast requirements
- Use low contrast colors for accessibility-critical elements

</Dont>

### Step 600, 700 - Accent Backgrounds

Vibrant interactive elements with guarenteed readability with inverse text or top of default
backgrounds (4.5:1 contrast).

![Step 600–800 accents and 700 hover examples](color-scale-600-800.png)
![Step 700 hover examples](color-scale-700-hover.png)

<Do>

- Use for interactive accent colors, like PrimaryButton backgrounds
- Apply to link text, error text, and hint text on default backgrounds
- Use the next step (700) for hover states and 800 for active states

</Do>

<Dont>

- Apply to secondary UI or prose text - Use when something more subtle is more appropriate

</Dont>

### Step 800, 900, 950 - Text Hierarchy

Text contrast levels for content hierarchy and readability.

![Step 800–950 text hierarchy examples](color-scale-800-950.png)

**Step 800** - Comfortable contrast for extended reading and body text. **Step 900** - Strong
contrast for headings and important text. **Step 950** - Maximum contrast for display text and hero
headlines.

<Do>

- Use on prose content
- Match level of contrast to typographic hierarchy

</Do>

<Dont>

- Use for secondary or instructional text (use 600 instead)
- Use for accent text, like links (use 600 intead)

</Dont>

### Step 975 - Dark Mode Backgrounds

Reserved for dark mode page backgrounds to maintain consistent color relationships.

![Step 975 dark mode backgrounds](color-scale-975.png)

<Do>

- Use exclusively for dark mode page backgrounds

</Do>

<Dont>

- Use in light mode interfaces

</Dont>

### Step 1000 - Overlay Backgrounds

Strongest emphasis color for alpha overlays and modal dialogs.

![Step 1000 overlay backgrounds](color-scale-1000.png)

<Do>

- Use for alpha overlays and modal dialog scrims

</Do>

<Dont>

- Use as solid color in interfaces

</Dont>
