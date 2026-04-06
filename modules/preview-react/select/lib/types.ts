/**
 * The placement of the menu relative to its corresponding button. This type is a
 * subset of the PopperJS.Placement type limited to the `bottom` and `top` values.
 *
 * We need to use `top` and `bottom` instead of `top-start` and `bottom-start` for
 * placements because PopperJS incorrectly rounds the `start` and `end` modifiers:
 * https://github.com/popperjs/popper-core/blob/38914aae7a2e91715c6eb2b563517082a40cfa64/src/utils/computeOffsets.js#L68-L81
 * This rounding causes problems with browsers that allow subpixel values for elements
 * like Firefox and Edge.
 *
 * @deprecated ⚠️ `MenuPlacement` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export type MenuPlacement = 'bottom' | 'top';

/**
 * The visibility state of the menu.
 *
 * `closed`: The menu is completely closed (not present in the DOM).
 * `open`: The menu was previously `closed` and has just been instructed to open.
 *   The menu has been added to the DOM, but it's not yet visible. This state is
 *   necessary in order to apply an opacity of 0 to the menu before transitioning it
 *   to an opacity of 1.0 in the opening state.
 * `opening`: The menu is in the process of opening.
 * `opened`: The menu is completely open.
 * `close`: The menu was previously `open` and has just been instructed to close.
 * `closing`: The menu is in the process of closing.
 *
 * Typically, a menu will transition through states in the following order:
 * `closed` > `open` > `opening` > `opened` > `close` > `closing` > `closed`
 *
 * However, it's possible for a user to open a menu while it's in the process of
 * closing in which case the menu can transition from `closing` > `opening` (and
 * vice-versa).
 *
 * @deprecated ⚠️ `MenuVisibility` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export type MenuVisibility = 'closed' | 'open' | 'opening' | 'opened' | 'close' | 'closing';
