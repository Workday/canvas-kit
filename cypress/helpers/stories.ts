/**
 * Load a story. This will invoke the storybook router,
 * unmount a previous story, mount the current story and force a rerender
 * This should be in a `beforeEach` block to force a fresh new story
 * @param categorization Categorization information found in the `.add` function - usually used for menu navigation
 * @param story Variant of the story example in the `.add` function
 * @example
 * h.stories.load('Button', 'Primary')
 */
export function load(categorization: string, story: string) {
  return cy.loadStory(categorization, story);
}

/**
 * Visit the blank test page. This should be in a `before` block of every test page
 * To load a story, use h.stories.load(storyName, variant)
 */
export function visit() {
  cy.visitStorybook();
  cy.injectAxe();
  cy.configureAxe({
    rules: [
      {id: 'landmark-one-main', enabled: false}, // stories don't require navigation rules
      {id: 'page-has-heading-one', enabled: false}, // stories don't require a single heading
    ],
  });
}
