# Color Palette

## Global Palette

The Canvas palette is Workday's shared color palette meant for use across all products and
platforms. It includes 11 colors and 2 neutrals, each with 13 shades.

Colors are designed in the okLCH (lightness, chroma, hue) color space to feel perceptually balanced,
meaning that colors with the same step value appear similar in brightness. This uniformity makes
accessible contrast ratios more predictable between steps and helps create smooth transitions when
switching between different contexts, such as themes and modes.

The global palette extends Workday's brand colors to create functional tones and tints meant for use
in interface and product design. Colors are organized into color families ('blue', 'red', 'green')
and a tonal scale from lightest (0) to darkest (1000), with each step serving a specific role in the
interface.

Color scales follow a gradual progression in vibrancy, peaking at the midpoint, before decreasing
again. This progression creates softer surface colors at the tailends, and more vibrant accents in
the middle.

### Accent Colors

Accent colors are saturated colors - like blue, red, orange, purple. Accent colors are used to draw
attention towards them and should be used sparingly, and for a specific purpose.

**Do:**

- Use accent colors to highlight important information
- Use existing color roles to inform selection
- Use accent colors sparingly
- for important actions, alerts, or states


**Dont:**

- Avoid decorative use of accent colors
- Avoid applying accent colors to secondary or supporting content


### Neutral Colors

Neutrals are greyscale colors, used for backgrounds, foregrounds, or as a base for alpha colors. The
palette includes 2 neutrals meant for different purposes.

- Slate is a tinted neutral built from Workday's brand blue. It's meant for secondary backgrounds,
  borders, and text for subtle styling that pairs well with brand accents.
- Neutral is an achromatic greyscale with no hue or chroma, from white to black. It's meant for
  consistent contrast against backgrounds, such as prose text.

**Do:**

- Use Neutral for prose and structural content - Use Slate for secondary UI elements, borders, and
  text


**Dont:**

- Use Neutral and Slate interchangeably


### Alpha Colors

Alpha colors are colors with transparency that adaptive dynamically to background colors. This
creates a natural layering effect on the background without requiring new color definitions for each
background.

**Do:**

- Use alpha colors when elements need to adapt to different backgrounds - Use alpha colors in a
  consistent way throughout the experience - Ensure sufficient contrast for underlying content


## Brand Palette

Brand colors represent Workday's core brand and identity. Reserve use for brand moments, marketing
materials, and other use cases specific to the Workday brand.

For more information, see
[Workday's brand guidelines](https://brand.workday.com/document/89#/-/workday-brand-guide).

## Product Palette

The product palette is a subset of the global palette meant for use when designing Workday features
and interfaces. Colors in the product palette are assigned
[color roles](/guidelines/color/color-roles) through the use of
[design tokens](/styles/tokens/color).

### Color Roles

Color roles assign a purpose to colors in the palette, specifying when and how to use that color.
When building Workday interfaces, use system design tokens to ensure that color roles are
consistently applied throughout the admin. For example, the `positive` color role is used to
indicate success and task completion.

To learn more about color roles, see [Color Roles](/guidelines/color/color-roles).

### Design Tokens

Design tokens represent a design decision as structured data. Tokens store visual properties like
color and spacing in a platform-agnostic format, such as JSON. Those decisions are then transformed
into platform specific pacakges in a format ready to be consumed by each platform.

Defining colors as tokens removes the need to redefine colors for each platform. Instead, colors are
defined in a single location and distributed to each platform, enabling more consistent,
maintainable, and systemic change over time.

#### Base Tokens

Base tokens are static colors whose values do not change. All colors in the
[global palette](#global-palette) are represented as base tokens. Base colors are organized using a
tonal scale, from lightest to darkest.

#### Brand Tokens

Brand tokens are used to enable brand/tenant level theming. This means that colors are subject to
change depending on the customer's brand.

They are not connected to system tokens, which are meant for application-wide use.

For a full list of brand tokens, see [Brand Tokens](/styles/tokens/color#brand-color-tokens).

#### System Tokens

System tokens applies a role to a color. For example, `sys.color.bg.critical.default` can be read as
"the default background color for critical elements".

System colors are mapped to Base colors. For example, `sys.color.bg.critical.default` is mapped to
`base.palette.red.600`. This is how theming is applied. Creating a new theme means that the value of
the system color is swapping with another color.

Approaching color this way makes the process part of a larger system instead of an isolated choice.
Instead of asking "what color should this be?", the question becomes "what role does this element
play in the interface?".

For a full list of system tokens, see [System Tokens](/styles/tokens/color#system-color-tokens).
