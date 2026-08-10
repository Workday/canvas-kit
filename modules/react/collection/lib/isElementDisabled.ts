/**
 * Checks whether an element is disabled, either via the native `disabled` DOM property (set, for
 * example, by `useListItemRegister` when an item's id is included in `state.nonInteractiveIds`) or
 * via the `aria-disabled="true"` attribute (set by consumers directly on an item, e.g.
 * `<Menu.Item aria-disabled>`).
 *
 * Collection items should use this check instead of testing `aria-disabled` alone so that items
 * disabled through either mechanism are consistently blocked from activating (click, Enter/Space,
 * hover-intent, etc.).
 */
export const isElementDisabled = (element: Element | null | undefined): boolean => {
  if (!element) {
    return false;
  }
  return (
    element.getAttribute('aria-disabled') === 'true' ||
    (element as HTMLButtonElement | HTMLInputElement).disabled === true
  );
};
