export const ACCESSIBILITY_SCENARIOS = [
  'overview',
  'page-structure',
  'tables',
  'popups',
  'aria-live',
  'headers',
  'side-panel',
  'windows-high-contrast',
  'forms',
  'color-contrast',
] as const;

export type AccessibilityScenario = (typeof ACCESSIBILITY_SCENARIOS)[number];

export const ACCESSIBILITY_COMPONENTS = [
  'action-bar',
  'ai-ingress-button-(ai)',
  'avatar-(promoted)',
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
  'side-panel-(new)',
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
  'side-panel-(new)',
  'tabs',
]);

const STATUS_COMPONENTS = new Set<string>([
  'ai-ingress-button-(ai)',
  'avatar-(promoted)',
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
    return [...new Set([...getAccessibilityScenarioSlugsForComponent(component), scenario])];
  }

  if (component) {
    return getAccessibilityScenarioSlugsForComponent(component);
  }

  if (scenario) {
    return [scenario];
  }

  return [];
}
