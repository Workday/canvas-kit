---
title: Color Tokens
preamble: true
platform: web, ios, android
tags: color, scale, palette, lightness, contrast, semantic, system, tokens
description: Color tokens assign color roles through design tokens
rank: 5
source_file: guidelines/color/color-tokens.mdx
live_url: https://canvas.workdaydesign.com/guidelines/color/color-tokens
---

Design tokens represent design decisions as reusable, named values that drive consistency across
product teams. Tokens work as a shared language between design and development teams, replacing
isolated color decisions with systematic choices that carry meaning and adapt to different contexts.

![Design token system diagram showing base palette mapping to system tokens across different platforms](color-tokens-dev-handoff.png)

## Token Types

| **Token Type** | **Example Name**                     | **Purpose**            |
| -------------- | ------------------------------------ | ---------------------- |
| Base Palette   | `blue-50`, `gray-100`                | Raw color values       |
| System Tokens  | `bg.default`, `text.primary.default` | Intent-driven UI usage |

### Base Palette

Raw `oklch` colors from the [global palette](/guidelines/color/color-palette), categorized in color
families using the [tonal scale](/guidelines/color/color-scale) from 0 to 1000. Each number
represents lightness, creating perceptual uniformity across families.

### System Colors

Purpose-driven names that describe intended use rather than appearance. Follow the
`[property].[role].[modifier]` pattern and map to base tokens based on theme.

## Token Naming System

**`[property].[role].[modifier]`**

![Token naming structure diagram showing element, role, and state components with examples](color-tokens-naming-structure.png)

1. **Property**: What gets colored
2. **Role**: Semantic purpose
3. **Modifier**: Intensity or state (optional)

### Property Types

| **Property** | **Description**                               | **Examples**                             |
| ------------ | --------------------------------------------- | ---------------------------------------- |
| `bg`         | Background colors for surfaces and containers | `bg.default`, `bg.primary.default`       |
| `text`       | Text and content colors                       | `text.default`, `text.primary.default`   |
| `border`     | Border and divider colors                     | `border.input.default`, `border.divider` |
| `icon`       | Icon-specific colors when different from text | `icon.default`, `icon.primary.default`   |
| `fg`         | Foreground colors for content elements        | `fg.default`, `fg.primary.default`       |
| `shadow`     | Shadow colors for depth and elevation         | `shadow.default`, `shadow.1`             |
| `static`     | Static colors that don't change with themes   | `static.blue.default`, `static.white`    |

### Role Types

| **Role**      | **Usage**                                     | **Examples**                                   |
| ------------- | --------------------------------------------- | ---------------------------------------------- |
| `default`     | Main content and standard elements            | `bg.default`, `text.default`                   |
| `primary`     | Main brand and primary actions                | `bg.primary.default`, `text.primary.default`   |
| `positive`    | Success states and positive feedback          | `bg.positive.default`, `text.positive.default` |
| `critical`    | Error states and destructive actions          | `bg.critical.default`, `text.critical.default` |
| `caution`     | Warning states and caution messages           | `bg.caution.default`, `text.caution.default`   |
| `info`        | Informational messages and neutral feedback   | `bg.info.default`, `text.info.default`         |
| `alt`         | Secondary surfaces and alternate states       | `bg.alt.default`, `bg.alt.soft`                |
| `muted`       | Secondary content and subtle elements         | `bg.muted.default`, `fg.muted.default`         |
| `contrast`    | High contrast elements                        | `bg.contrast.default`, `fg.contrast.default`   |
| `ai`          | AI-powered features and content               | `bg.ai.default`, `text.ai`                     |
| `focus`       | Keyboard navigation indicators                | `border.primary.default` (focus)               |
| `disabled`    | Non-interactive and unavailable elements      | `text.disabled`, `icon.disabled`               |
| `inverse`     | High contrast text on dark backgrounds        | `text.inverse`, `icon.inverse`                 |
| `hint`        | Placeholder and helper text                   | `text.hint`                                    |
| `input`       | Form field borders and interactive elements   | `border.input.default`                         |
| `container`   | Surfaces that exist on top of page background | `border.container`                             |
| `divider`     | Content separators between sections           | `border.divider`                               |
| `transparent` | Invisible elements for spacing                | `bg.transparent.default`                       |
| `translucent` | Semi-transparent overlays                     | `bg.translucent`                               |
| `overlay`     | Modal scrims and background dimming           | `bg.overlay`                                   |

### Modifier Variations

| **Modifier** | **Usage**                                | **Examples**            |
| ------------ | ---------------------------------------- | ----------------------- |
| `default`    | Standard intensity or base state         | `bg.primary.default`    |
| `soft`       | Reduced intensity or subtle appearance   | `bg.primary.soft`       |
| `softer`     | More reduced intensity                   | `bg.primary.softer`     |
| `softest`    | Minimum intensity or lightest appearance | `bg.primary.softest`    |
| `strong`     | Increased intensity or emphasis          | `bg.primary.strong`     |
| `stronger`   | Higher intensity or more emphasis        | `bg.primary.stronger`   |
| `strongest`  | Maximum intensity or strongest emphasis  | `static.blue.strongest` |
| `disabled`   | Disabled element states                  | `text.disabled`         |
| `inverse`    | Inverted color for contrast              | `text.inverse`          |

## Theming and Adaptation

Tokens enable flexible theming by separating purpose from appearance. System tokens maintain
consistent names across themes while colors adapt to match visual style.

![Light and dark theme comparison showing same tokens with different color values](color-tokens-theming.png)

Create multiple theme variations—light/dark modes, brand customizations, high-contrast
themes—without changing design logic or token names.

## Benefits of Tokens

**Consistency:** Clear relationships between colors and purposes make interfaces predictable.

**Efficiency:** Centralized decisions enable systematic updates across all platforms automatically.

**Collaboration:** Teams focus on semantic meaning rather than debating specific values.

## Working with Tokens

### Figma

Canvas tokens sync to Figma Libraries as organized color variables. Designers search by name, apply
to designs, and receive automatic updates when values change.

![Figma color variables showing organized system tokens with search functionality](color-tokens-figma.png)

### Design-to-Development Handoff

Shared vocabulary between teams. Designers apply variables to their designs, developers view those
designs in Figma's Developer Mode. Tokens can be viewed as either CSS variables, SwiftUI view
modifiers, or Jetpack Compose theme properties - making it easy for developers to choose correct
colors for the platform they build for.

![Design-to-development workflow showing Figma design with token annotations matching React component code implementation](color-tokens-dev-handoff.png)

### Brand Customization

Brand tokens let you change the brand expression by modifying those token values without changing
semantic structure. This enables white-label solutions, reskinning UI without needing to completely
redesign the interfaces.

![Brand customization showing same interface with different brand color tokens applied](color-tokens-customization.png)
