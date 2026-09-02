export const ACCESSIBILITY_SCENARIOS = [
  'overview',
  'page-structure',
  'tables',
  'expandable-rows',
  'nested-rows',
  'selectable-rows',
  'filterable-column-headers',
  'sortable-column-headers',
  'popups',
  'aria-live',
  'headers',
  'side-panel',
  'windows-high-contrast',
  'forms',
  'color-contrast',
] as const;

export type AccessibilityScenario = (typeof ACCESSIBILITY_SCENARIOS)[number];

/** Pattern pages under Guides/Accessibility/Table Patterns, including the overview index. */
export const TABLE_PATTERN_SCENARIOS: readonly AccessibilityScenario[] = [
  'tables',
  'expandable-rows',
  'nested-rows',
  'selectable-rows',
  'filterable-column-headers',
  'sortable-column-headers',
  'forms',
];

function expandAccessibilityScenarioSlugs(slugs: AccessibilityScenario[]): AccessibilityScenario[] {
  const result: AccessibilityScenario[] = [];
  const seen = new Set<AccessibilityScenario>();

  const add = (slug: AccessibilityScenario) => {
    if (!seen.has(slug)) {
      seen.add(slug);
      result.push(slug);
    }
  };

  for (const slug of slugs) {
    if (slug === 'tables') {
      TABLE_PATTERN_SCENARIOS.forEach(add);
    } else {
      add(slug);
    }
  }

  return result;
}

export const ACCESSIBILITY_COMPONENTS = [
  'action-bar',
  'ai-ingress-button-(ai)',
  'avatar',
  'banner',
  'body-text',
  'box',
  'breadcrumbs',
  'buttons',
  'card',
  'checkbox',
  'color-input',
  'color-picker',
  'color-preview',
  'countbadge',
  'dialog',
  'divider',
  'expandable',
  'flex',
  'form-field',
  'grid',
  'heading',
  'hyperlink',
  'information-highlight',
  'loading-dots',
  'loading-sparkles-(ai)',
  'menu',
  'modal',
  'multi-select',
  'pagination',
  'pill',
  'popper',
  'popup',
  'radio',
  'radio-(deprecated)',
  'segmented-control',
  'select',
  'side-panel-(deprecated)',
  'side-panel',
  'skeleton',
  'status-indicator',
  'status-indicator-(deprecated)',
  'subtext',
  'switch-(new)',
  'switch-(deprecated)',
  'table',
  'tabs',
  'text',
  'text-area',
  'text-input',
  'title',
  'toast',
  'toolbar',
  'tooltip',
] as const;

export type AccessibilityComponent = (typeof ACCESSIBILITY_COMPONENTS)[number];

const FORM_COMPONENTS = new Set<string>([
  'checkbox',
  'color-input',
  'color-picker',
  'color-preview',
  'form-field',
  'multi-select',
  'radio',
  'radio-(deprecated)',
  'segmented-control',
  'select',
  'switch-(new)',
  'switch-(deprecated)',
  'text-area',
  'text-input',
]);

const POPUP_COMPONENTS = new Set<string>(['dialog', 'menu', 'modal', 'popper', 'popup', 'tooltip']);

const STRUCTURE_COMPONENTS = new Set<string>([
  'box',
  'breadcrumbs',
  'card',
  'divider',
  'expandable',
  'flex',
  'grid',
  'heading',
  'hyperlink',
  'pagination',
  'side-panel-(deprecated)',
  'side-panel',
  'tabs',
]);

const STATUS_COMPONENTS = new Set<string>([
  'ai-ingress-button-(ai)',
  'avatar',
  'banner',
  'body-text',
  'countbadge',
  'information-highlight',
  'loading-dots',
  'loading-sparkles-(ai)',
  'pill',
  'skeleton',
  'status-indicator',
  'status-indicator-(deprecated)',
  'subtext',
  'text',
  'title',
  'toast',
  'toolbar',
  'action-bar',
]);

export function getAccessibilityScenarioSlugsForComponent(
  component: string
): AccessibilityScenario[] {
  if (FORM_COMPONENTS.has(component)) {
    return ['forms', 'overview'];
  }

  if (POPUP_COMPONENTS.has(component)) {
    return ['popups', 'overview'];
  }

  if (component === 'table') {
    return ['tables', 'overview'];
  }

  if (STRUCTURE_COMPONENTS.has(component)) {
    return ['page-structure', 'overview'];
  }

  if (STATUS_COMPONENTS.has(component)) {
    return ['aria-live', 'color-contrast', 'overview'];
  }

  return ['overview'];
}

export function resolveAccessibilityScenarioSlugs({
  component,
  scenario,
}: {
  component?: string;
  scenario?: AccessibilityScenario;
}): AccessibilityScenario[] {
  if (component && scenario) {
    return expandAccessibilityScenarioSlugs([
      ...getAccessibilityScenarioSlugsForComponent(component),
      scenario,
    ]);
  }

  if (component) {
    return expandAccessibilityScenarioSlugs(getAccessibilityScenarioSlugsForComponent(component));
  }

  if (scenario) {
    return expandAccessibilityScenarioSlugs([scenario]);
  }

  return [];
}
