# Design Token Migration: v2 to v3

## Overview

This document outlines the migration from design tokens v2 to v3. Many color tokens from previous
versions have been deprecated or replaced in v3 to align with the new color system and improve
consistency, accessibility, and brand alignment.

### Important Notes

- Deprecated tokens are mapped to new palette values or system tokens where possible
- New color values may not be exact visual matches due to the switch to OKLCH color space and
  expanded palette scale
- We recommend updating usage to system tokens for best results and future compatibility
- Tokens marked with "withWhiteText: true" indicate sufficient contrast for white text overlay

## Deprecated Base Palette Tokens

| Token Name                           | Old Value | New Value                 | System Token Replacement                                                                        |
| ------------------------------------ | --------- | ------------------------- | ----------------------------------------------------------------------------------------------- |
| base.palette.cinnamon.100            | #ffefee   | base.palette.red.50       | sys.color.bg.critical.softer                                                                    |
| base.palette.cinnamon.200            | #FCC9C5   | base.palette.red.100      | sys.color.bg.critical.soft                                                                      |
| base.palette.cinnamon.300            | #ff867d   | base.palette.red.300      | -                                                                                               |
| base.palette.cinnamon.400            | #ff5347   | base.palette.red.400      | sys.color.fg.critical.soft                                                                      |
| base.palette.cinnamon.500            | #de2e21   | base.palette.red.600      | sys.color.bg.critical.default, sys.color.fg.critical.default, sys.color.border.critical.default |
| base.palette.cinnamon.600            | #a31b12   | base.palette.red.700      | sys.color.bg.critical.strong, sys.color.fg.critical.strong                                      |
| base.palette.peach.100               | #fff3f0   | base.palette.coral.50     | -                                                                                               |
| base.palette.peach.200               | #ffc2b3   | base.palette.coral.200    | -                                                                                               |
| base.palette.peach.300               | #ff957a   | base.palette.coral.300    | -                                                                                               |
| base.palette.peach.400               | #ff643d   | base.palette.red.400      | -                                                                                               |
| base.palette.peach.500               | #de4721   | base.palette.coral.600    | -                                                                                               |
| base.palette.peach.600               | #b53413   | base.palette.coral.700    | -                                                                                               |
| base.palette.chili-mango.100         | #ffe6d9   | base.palette.coral.25     | -                                                                                               |
| base.palette.chili-mango.200         | #ffc7ab   | base.palette.coral.200    | -                                                                                               |
| base.palette.chili-mango.300         | #ff9b69   | base.palette.coral.300    | -                                                                                               |
| base.palette.chili-mango.400         | #ff671b   | base.palette.orange.500   | -                                                                                               |
| base.palette.chili-mango.500         | #e04b00   | base.palette.orange.500   | -                                                                                               |
| base.palette.chili-mango.600         | #a33600   | base.palette.orange.700   | -                                                                                               |
| base.palette.cantaloupe.100          | #ffeed9   | base.palette.amber.50     | sys.color.bg.caution.softer                                                                     |
| base.palette.cantaloupe.200          | #fcd49f   | base.palette.amber.200    | sys.color.bg.caution.soft, sys.color.fg.caution.softer                                          |
| base.palette.cantaloupe.300          | #ffbc63   | base.palette.amber.300    |                                                                                                 |
| base.palette.cantaloupe.400          | #ffa126   | base.palette.amber.400    | sys.color.bg.caution.default, sys.color.border.caution.default                                  |
| base.palette.cantaloupe.500          | #f38b00   | base.palette.amber.500    | sys.color.bg.caution.strong, sys.color.fg.caution.softer,                                       |
| base.palette.cantaloupe.600          | #c06c00   | base.palette.amber.600    | sys.color.bg.caution.stronger, sys.color.border.caution.strong                                  |
| base.palette.sour-lemon.100          | #fff9e6   | base.palette.amber.25     | -                                                                                               |
| base.palette.sour-lemon.200          | #ffecab   | base.palette.amber.100    | -                                                                                               |
| base.palette.sour-lemon.300          | #ffda61   | base.palette.amber.200    | -                                                                                               |
| base.palette.sour-lemon.400          | #ffc629   | base.palette.amber.300    | -                                                                                               |
| base.palette.sour-lemon.500          | #ebb400   | base.palette.amber.300    | -                                                                                               |
| base.palette.sour-lemon.600          | #bd9100   | base.palette.amber.500    | -                                                                                               |
| base.palette.juicy-pear.100          | #f7fae6   | base.palette.amber.25     | -                                                                                               |
| base.palette.juicy-pear.200          | #e2f391   | base.palette.amber.100    | -                                                                                               |
| base.palette.juicy-pear.300          | #c4de40   | base.palette.amber.200    | -                                                                                               |
| base.palette.juicy-pear.400          | #a8c224   | base.palette.amber.200    | -                                                                                               |
| base.palette.juicy-pear.500          | #8ea618   | base.palette.green.500    | -                                                                                               |
| base.palette.juicy-pear.600          | #687818   | base.palette.green.700    | -                                                                                               |
| base.palette.kiwi.100                | #ecfcd7   | base.palette.green.50     | -                                                                                               |
| base.palette.kiwi.200                | #caf593   | base.palette.green.100    | -                                                                                               |
| base.palette.kiwi.300                | #a7e05c   | base.palette.green.200    | -                                                                                               |
| base.palette.kiwi.400                | #77bc1f   | base.palette.green.500    | -                                                                                               |
| base.palette.kiwi.500                | #609915   | base.palette.green.500    | -                                                                                               |
| base.palette.kiwi.600                | #537824   | base.palette.green.700    | -                                                                                               |
| base.palette.green-apple.100         | #ebfff0   | base.palette.green.50     | sys.color.bg.positive.softer                                                                    |
| base.palette.green-apple.200         | #acf5be   | base.palette.green.100    | sys.color.bg.positive.soft                                                                      |
| base.palette.green-apple.300         | #5fe380   | base.palette.green.200    | sys.color.fg.positive.soft                                                                      |
| base.palette.green-apple.400         | #43c463   | base.palette.green.600    | sys.color.bg.positive.default, sys.color.fg.positive.default                                    |
| base.palette.green-apple.500         | #319c4c   | base.palette.green.700    | sys.color.bg.positive.strong, sys.color.fg.positive.strong                                      |
| base.palette.green-apple.600         | #217a37   | base.palette.green.800    | sys.color.bg.positive.stronger, sys.color.fg.positive.stronger                                  |
| base.palette.watermelon.100          | #ebfdf8   | base.palette.neutral.50   | -                                                                                               |
| base.palette.watermelon.200          | #b7edde   | base.palette.neutral.100  | -                                                                                               |
| base.palette.watermelon.300          | #65ccaf   | base.palette.green.100    | -                                                                                               |
| base.palette.watermelon.400          | #12a67c   | base.palette.green.600    | -                                                                                               |
| base.palette.watermelon.500          | #0b7a5c   | base.palette.green.700    | -                                                                                               |
| base.palette.watermelon.600          | #08513d   | base.palette.green.900    | -                                                                                               |
| base.palette.jewel.100               | #ebfdff   | base.palette.teal.25      | -                                                                                               |
| base.palette.jewel.200               | #acecf3   | base.palette.teal.200     | -                                                                                               |
| base.palette.jewel.300               | #44c8d7   | base.palette.teal.400     | -                                                                                               |
| base.palette.jewel.400               | #1ea4b3   | base.palette.teal.500     | -                                                                                               |
| base.palette.jewel.500               | #1a818c   | base.palette.teal.600     | -                                                                                               |
| base.palette.jewel.600               | #156973   | base.palette.teal.700     | -                                                                                               |
| base.palette.toothpaste.100          | #d7f1fc   | base.palette.azure.50     | -                                                                                               |
| base.palette.toothpaste.200          | #99e0ff   | base.palette.azure.200    | -                                                                                               |
| base.palette.toothpaste.300          | #40b4e5   | base.palette.azure.300    | -                                                                                               |
| base.palette.toothpaste.400          | #1894c9   | base.palette.azure.400    | -                                                                                               |
| base.palette.toothpaste.500          | #0271a1   | base.palette.azure.700    | -                                                                                               |
| base.palette.toothpaste.600          | #005B82   | base.palette.azure.800    | -                                                                                               |
| base.palette.blueberry.100           | #D7EAFC   | base.palette.blue.25      | -                                                                                               |
| base.palette.blueberry.200           | #A6D2FF   | base.palette.blue.100     | sys.color.bg.primary.soft                                                                       |
| base.palette.blueberry.300           | #40A0FF   | base.palette.blue.400     | sys.color.fg.primary.soft                                                                       |
| base.palette.blueberry.400           | #0875E1   | base.palette.blue.600     | sys.color.bg.primary.default, sys.color.fg.primary.default, sys.color.border.primary.default    |
| base.palette.blueberry.500           | #005cb9   | base.palette.blue.700     | sys.color.bg.primary.strong, sys.color.fg.primary.strong                                        |
| base.palette.blueberry.600           | #004387   | base.palette.blue.800     | sys.color.bg.primary.stronger, sys.color.text.primary.stronger                                  |
| base.palette.plum.100                | #e6f1ff   | base.palette.blue.100     | -                                                                                               |
| base.palette.plum.200                | #A6CDFF   | base.palette.blue.200     | -                                                                                               |
| base.palette.plum.300                | #529bfa   | base.palette.blue.400     | -                                                                                               |
| base.palette.plum.400                | #3881E1   | base.palette.blue.600     | -                                                                                               |
| base.palette.plum.500                | #3166ab   | base.palette.blue.700     | -                                                                                               |
| base.palette.plum.600                | #264a7a   | base.palette.blue.800     | -                                                                                               |
| base.palette.berry-smoothie.100      | #e8edff   | base.palette.indigo.50    | -                                                                                               |
| base.palette.berry-smoothie.200      | #c2cfff   | base.palette.indigo.200   | -                                                                                               |
| base.palette.berry-smoothie.300      | #7891FF   | base.palette.indigo.400   | -                                                                                               |
| base.palette.berry-smoothie.400      | #5E77E6   | base.palette.blue.500     | -                                                                                               |
| base.palette.berry-smoothie.500      | #4b5eb3   | base.palette.blue.700     | -                                                                                               |
| base.palette.berry-smoothie.600      | #3b4987   | base.palette.blue.800     | -                                                                                               |
| base.palette.blackberry.100          | #f0f0ff   | base.palette.indigo.25    | -                                                                                               |
| base.palette.blackberry.200          | #c3c2ff   | base.palette.indigo.200   | -                                                                                               |
| base.palette.blackberry.300          | #8483e6   | base.palette.indigo.400   | -                                                                                               |
| base.palette.blackberry.400          | #5c59e6   | base.palette.indigo.500   | -                                                                                               |
| base.palette.blackberry.500          | #413fcc   | base.palette.indigo.700   | -                                                                                               |
| base.palette.blackberry.600          | #2e2d91   | base.palette.indigo.900   | -                                                                                               |
| base.palette.island-punch.100        | #f5f0ff   | base.palette.purple.25    | -                                                                                               |
| base.palette.island-punch.200        | #d2befa   | base.palette.purple.200   | -                                                                                               |
| base.palette.island-punch.300        | #a88ae6   | base.palette.indigo.400   | -                                                                                               |
| base.palette.island-punch.400        | #8660d1   | base.palette.purple.500   | -                                                                                               |
| base.palette.island-punch.500        | #6345a1   | base.palette.purple.700   | -                                                                                               |
| base.palette.island-punch.600        | #503882   | base.palette.purple.800   | -                                                                                               |
| base.palette.grape-soda.100          | #feebff   | base.palette.magenta.50   | -                                                                                               |
| base.palette.grape-soda.200          | #fac0ff   | base.palette.magenta.200  | -                                                                                               |
| base.palette.grape-soda.300          | #de8ae6   | base.palette.purple.400   | -                                                                                               |
| base.palette.grape-soda.400          | #c860d1   | base.palette.purple.500   | -                                                                                               |
| base.palette.grape-soda.500          | #97499e   | base.palette.purple.600   | -                                                                                               |
| base.palette.grape-soda.600          | #7C3882   | base.palette.purple.800   | -                                                                                               |
| base.palette.pomegranate.100         | #ffebf3   | base.palette.magenta.50   | -                                                                                               |
| base.palette.pomegranate.200         | #ffbdd6   | base.palette.magenta.100  | -                                                                                               |
| base.palette.pomegranate.300         | #ff5c9a   | base.palette.magenta.500  | -                                                                                               |
| base.palette.pomegranate.400         | #f31167   | base.palette.red.400      | -                                                                                               |
| base.palette.pomegranate.500         | #c70550   | base.palette.red.700      | -                                                                                               |
| base.palette.pomegranate.600         | #99003a   | base.palette.red.800      | -                                                                                               |
| base.palette.fruit-punch.100         | #FFEEEE   | base.palette.red.25       | -                                                                                               |
| base.palette.fruit-punch.200         | #ffbdbd   | base.palette.red.200      | -                                                                                               |
| base.palette.fruit-punch.300         | #FF7E7E   | base.palette.red.300      | -                                                                                               |
| base.palette.fruit-punch.400         | #ff4c4c   | base.palette.red.400      | -                                                                                               |
| base.palette.fruit-punch.500         | #e12f2f   | base.palette.red.400      | -                                                                                               |
| base.palette.fruit-punch.600         | #b82828   | base.palette.red.700      | -                                                                                               |
| base.palette.root-beer.100           | #faf3f0   | base.palette.coral.25     | -                                                                                               |
| base.palette.root-beer.200           | #EBD7CF   | base.palette.coral.100    | -                                                                                               |
| base.palette.root-beer.300           | #dcbbad   | base.palette.coral.200    | -                                                                                               |
| base.palette.root-beer.400           | #ba9a8c   | base.palette.coral.200    | -                                                                                               |
| base.palette.root-beer.500           | #8C7266   | base.palette.coral.200    | -                                                                                               |
| base.palette.root-beer.600           | #664d42   | base.palette.amber.950    | -                                                                                               |
| base.palette.toasted-marshmallow.100 | #fdf6e6   | base.palette.amber.25     | -                                                                                               |
| base.palette.toasted-marshmallow.200 | #ebd6a9   | base.palette.orange.100   | -                                                                                               |
| base.palette.toasted-marshmallow.300 | #e6bf6c   | base.palette.orange.200   | -                                                                                               |
| base.palette.toasted-marshmallow.400 | #CC9E3B   | base.palette.orange.300   | -                                                                                               |
| base.palette.toasted-marshmallow.500 | #b37f10   | base.palette.amber.500    | -                                                                                               |
| base.palette.toasted-marshmallow.600 | #8C6000   | base.palette.amber.600    | -                                                                                               |
| base.palette.licorice.100            | #A1AAB3   | base.palette.slate.400    | sys.color.bg.muted.softer, sys.color.fg.disabled, sys.color.border.input.disabled               |
| base.palette.licorice.200            | #7b858f   | base.palette.slate.500    | sys.color.bg.muted.soft, sys.color.fg.muted.soft, sys.color.border.input.default                |
| base.palette.licorice.300            | #5E6A75   | base.palette.slate.600    | sys.color.bg.muted.default, sys.color.fg.muted.default, sys.color.text.hint                     |
| base.palette.licorice.400            | #4a5561   | base.palette.slate.700    | sys.color.fg.muted.strong                                                                       |
| base.palette.licorice.500            | #333d47   | base.palette.slate.800    | sys.color.bg.muted.strong, sys.color.fg.muted.stronger, sys.color.border.input.strong           |
| base.palette.licorice.600            | #1f262e   | base.palette.slate.900    | -                                                                                               |
| base.palette.soap.100                | #f6f7f8   | base.palette.slate.25     | sys.color.bg.alt.softer                                                                         |
| base.palette.soap.200                | #F0F1F2   | base.palette.slate.50     | sys.color.bg.alt.soft                                                                           |
| base.palette.soap.300                | #e8ebed   | base.palette.slate.100    | sys.color.bg.alt.default, sys.color.border.input.inverse                                        |
| base.palette.soap.400                | #DFE2E6   | base.palette.slate.200    | sys.color.bg.alt.strong, sys.color.border.divider                                               |
| base.palette.soap.500                | #ced3d9   | base.palette.slate.300    | sys.color.bg.alt.stronger, sys.color.border.container                                           |
| base.palette.soap.600                | #B9C0C7   | base.palette.slate.600    | -                                                                                               |
| base.palette.french-vanilla.100      | #ffffff   | base.palette.neutral.0    | sys.color.bg.default, sys.color.fg.inverse, sys.color.border.inverse                            |
| base.palette.french-vanilla.200      | #ebebeb   | base.palette.neutral.50   | -                                                                                               |
| base.palette.french-vanilla.300      | #d4d4d4   | base.palette.neutral.100  | -                                                                                               |
| base.palette.french-vanilla.400      | #bdbdbd   | base.palette.neutral.200  | -                                                                                               |
| base.palette.french-vanilla.500      | #a6a6a6   | base.palette.neutral.300  | -                                                                                               |
| base.palette.french-vanilla.600      | #8f8f8f   | base.palette.neutral.400  | -                                                                                               |
| base.palette.black-pepper.100        | #787878   | base.palette.neutral.500  | -                                                                                               |
| base.palette.black-pepper.200        | #616161   | base.palette.neutral.700  | -                                                                                               |
| base.palette.black-pepper.300        | #494949   | base.palette.neutral.900  | sys.color.fg.default                                                                            |
| base.palette.black-pepper.400        | #333333   | base.palette.neutral.950  | sys.color.bg.contrast.default, sys.color.fg.strong, sys.color.border.contrast.default           |
| base.palette.black-pepper.500        | #1e1e1e   | base.palette.neutral.975  | sys.color.bg.contrast.strong, sys.color.fg.stronger, sys.color.border.contrast.strong           |
| base.palette.black-pepper.600        | #000000   | base.palette.neutral.1000 | -                                                                                               |
| base.palette.coconut.100             | #F0EEEE   | DEPRECATED                | -                                                                                               |
| base.palette.coconut.200             | #e3dfdf   | DEPRECATED                | -                                                                                               |
| base.palette.coconut.300             | #d1cbcc   | DEPRECATED                | -                                                                                               |
| base.palette.coconut.400             | #b3acac   | DEPRECATED                | -                                                                                               |
| base.palette.coconut.500             | #9e9595   | DEPRECATED                | -                                                                                               |
| base.palette.coconut.600             | #8F8687   | DEPRECATED                | -                                                                                               |
| base.palette.cappuccino.100          | #7A7374   | DEPRECATED                | -                                                                                               |
| base.palette.cappuccino.200          | #706869   | DEPRECATED                | -                                                                                               |
| base.palette.cappuccino.300          | #5E5757   | DEPRECATED                | -                                                                                               |
| base.palette.cappuccino.400          | #4A4242   | DEPRECATED                | -                                                                                               |
| base.palette.cappuccino.500          | #352f2f   | DEPRECATED                | -                                                                                               |
| base.palette.cappuccino.600          | #231f20   | DEPRECATED                | -                                                                                               |
| base.palette.dragon-fruit.100        | #FBF1FF   | base.palette.purple.25    | -                                                                                               |
| base.palette.dragon-fruit.200        | #EFD3FF   | base.palette.purple.100   | -                                                                                               |
| base.palette.dragon-fruit.300        | #BE61F6   | base.palette.indigo.500   | sys.color.bg.ai.default                                                                         |
| base.palette.dragon-fruit.400        | #8C17D2   | base.palette.indigo.600   | sys.color.bg.ai.strong                                                                          |
| base.palette.dragon-fruit.500        | #6B11A3   | base.palette.indigo.700   | sys.color.bg.ai.stronger                                                                        |
| base.palette.dragon-fruit.600        | #4A0D71   | base.palette.indigo.900   | sys.color.bg.ai.strongest, sys.color.border.ai, sys.color.text.ai                               |

## Migration Strategy

### Phase 1: Assessment

1. Audit existing token usage in your codebase
2. Identify deprecated tokens that need replacement
3. Map current usage to appropriate system tokens

### Phase 2: Replacement

1. Replace deprecated base palette tokens with System Token Replacement values
2. If system value is not provided uses new base palette value
3. Update brand tokens to new references
4. Migrate to system tokens where possible for semantic clarity

### Phase 3: Testing

1. Verify color contrast ratios meet WCAG guidelines
2. Test with assistive technologies
3. Validate visual consistency across components
4. Test color perception for color-blind users

### Phase 4: Documentation

1. Update design system documentation
2. Create migration guides for teams
3. Establish guidelines for future token usage

## Accessibility Considerations

- **Contrast Ratios**: New OKLCH color space may affect contrast. Verify all text meets WCAG AA
  standards (4.5:1 for normal text, 3:1 for large text)
- **Color Blindness**: Test with color blindness simulators, especially for status indicators
- **System Tokens**: Prefer semantic system tokens over direct palette references for better
  accessibility support
- **White Text Overlay**: Tokens marked "withWhiteText" have sufficient contrast for white text
- **Focus Indicators**: Ensure focus states remain visible with new color values

## Best Practices

1. **Use System Tokens First**: Always prefer sys.color._ tokens over base.palette._ tokens
2. **Semantic Meaning**: Choose tokens based on semantic meaning rather than visual appearance
3. **Consistent Patterns**: Use consistent token patterns across similar UI elements
4. **Future-Proof**: System tokens will adapt better to future theme changes
5. **Test Thoroughly**: Colors may appear different due to OKLCH color space changes
