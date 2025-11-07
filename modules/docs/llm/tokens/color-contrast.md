---
title: Color Contrast
preamble: true
platform: web, ios, android
description:
tags: color, contrast, accessibility
rank: 6
source_file: guidelines/color/color-contrast.mdx
live_url: https://canvas.workdaydesign.com/guidelines/color/color-contrast
---

Color pairings should pass contrast requirements to ensure content is readable for everyone. Colors
in the palette are built with contrast baked in to make it simple to create accessible color
combinations.

Canvas believes that designing for accessible experience benefits everyone. Improved contrast
improves readability in bright sunlight, low-quality displays, and for users experiencing temporary
vision impairment. Using the color system can help reduce the guesswork in choosing colors and
ensure contrast ratios when applied.

## Understanding Contrast

Contrast measures the difference in brightness between two colors, ensuring that content is
perceivable and readable against backgrounds. WCAG 2.1 guidelines specify a minimum contrast ratio
of 4.5:1 for text, 3:1 for interactive elements, and 7:1 for high contrast. The
[global palette](/guidelines/color/color-palette) and [tonal scale](/guidelines/color/color-scale)
are designed with target contrast ratios baked in, making it straightforward to achieve compliant
color combinations without a separate calculator.

![Color contrast demonstration showing different step differences and their compliance levels](color-contrast-overview.png)

![Text examples showing AA compliance (4.5:1) with black text on light gray, and AAA compliance (7:1) with white text on dark blue backgrounds](color-contrast-text-on-white.png)

## Usage Guidance

1. **Use [color roles](/guidelines/color/color-roles)** to guarantee accessibility through design
   tokens.
2. **Use the contrast framework**: If you need to choose colors from directly from the palette, make
   sure to choose accessible color combinations. Use the
   [contrast framework](#accessible-color-combinations) to make it easy to select accessible pairs
   just from the step number.
3. **Check your designs** against color-blindness and low-vision simulators to get a feel for what
   your design might look like in different scenarios.
4. **Avoid the use of color alone** to communicate information.

![Color role examples showing bg-primary and text-primary automatically maintaining proper contrast ratios across light and dark themes](color-contrast-color-blind.png)

## Accessible Color Combinations

Colors are graded using a 15 step tonal scale. Each step is assigned to a number that represents the
lightness of that color relative to other colors in the scale. For example, 0 is the lightest color
in the scale (white), and 1000 is the darkest color (black). A 500 color would have a lightness
value between the two, with lighter and darker variations on both sides. To determine if a color
will pass contrast, compare step numbers and the difference between the two.

Regular text requires a 500+ step difference to achieve the 4.5:1 ratio needed for AA compliance.
For enhanced accessibility, text can use a 700+ step difference to achieve the 7:1 ratio that
exceeds AAA compliance standards. For non-text contrast, a 400+ step difference is needed (if both
colors have step numbers greater than 200+|)

### Overview

| **Content**  | **WCAG Level** | **Target Ratio** | **Step Difference** | **Example**                |
| ------------ | -------------- | ---------------- | ------------------- | -------------------------- |
| **Text**     | AA             | 4.5:1            | 500+                | `slate-100` on `slate-600` |
| **Text**     | AAA            | 7:1              | 700+                | `slate-100` on `slate-800` |
| **Non-text** | AA             | 3:1              | 400+ (>200)         | `blue-600` on `blue-100`   |
| **Non-text** | AAA            | 4.5:1            | 500+                | `blue-100` on `blue-600`   |

### Text Contrast

Normal sized text should have at least at 4.5:1 contrast to meet Level AA compliance. A difference
of 500 or more between steps guarentees it passes text contrast guidelines.

![Step difference examples showing 500+ differences guarantee 4.5:1 text contrast across various background and text color combinations](color-contrast-text-between.png)

| **Background** | **Foreground Step** | **Step Difference** | **Compliance Level** |
| -------------- | ------------------- | ------------------- | -------------------- |
| 0(white)       | 600                 | 600                 | AA Text              |
| 100            | 600                 | 500                 | AA Text              |
| 200            | 700                 | 500                 | AA Text              |
| 300            | 800                 | 500                 | AA Text              |
| 400            | 900                 | 500                 | AA Text              |
| 500            | 1000 (black)        | 500                 | AA Text              |

### Non-text Contrast

Interactive elements and non-decorative visuals (icons) should have a contrast of 3:1 to meet Level
AA compliance.

A difference of 400 or more between steps guarantees a contrast of 3:1 for steps greater than 200.

![Interactive elements showing buttons, form inputs, and icons meeting 3:1 contrast requirements with 400+ step differences](color-contrast-nontext-between.png)

| **Background** | **Foreground Step** | **Step Difference** | **Compliance Level** |
| -------------- | ------------------- | ------------------- | -------------------- |
| 0(white)       | 500                 | 500                 | AA Non-text          |
| 25             | 500                 | 475                 | AA Non-text          |
| 200            | 600                 | 400                 | AA Non-text          |
| 300            | 700                 | 400                 | AA Non-text          |
| 400            | 800                 | 400                 | AA Non-text          |
| 500            | 900                 | 400                 | AA Non-text          |
| 600            | 1000 (black)        | 400                 | AA Non-text          |

### High Contrast (> 7:1)

Level AAA contrast should be targeted when you are designing for low vision or colorblindness. For
both text and non-text contrast, this means the target difference is increased (text increases to
700+, non-text increases to 500+).

![High contrast interface examples showing AAA compliance with 7:1+ ratios for enhanced accessibility and low vision support](color-contrast-nontext-on-white.png)

| **Background** | **AA Contrast** | **AAA Contrast** | **AA Difference** | **AAA Difference** |
| -------------- | --------------- | ---------------- | ----------------- | ------------------ |
| 0(white)       | 700             | 500              | 700               | 500                |
| 100            | 800             | 600              | 700               | 500                |
| 200            | 900             | 700              | 700               | 500                |
| 300            | 1000 (black)    | 800              | 700               | 500                |
| 400            | 1000 (black)    | 900              | 600               | 500                |
| 500            | 0(white)        | 0(white)         | 500               | 500                |
| 600            | 0(white)        | 0(white)         | 600               | 600                |
| 700            | 0(white)        | 100              | 700               | 600                |
| 800            | 100             | 200              | 700               | 600                |
| 900            | 200             | 300              | 700               | 600                |
| 1000 (black)   | 300             | 400              | 700               | 600                |
