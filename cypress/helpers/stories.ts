declare global {
  interface Window {
    /**
     * Load a story. This will invoke the storybook router,
     * unmount a previous story, mount the current story and force a rerender
     * This should be in a `beforeEach` block to force a fresh new story
     * @param story Name of the story found in the `.add` function
     * @param variation Variation of the story found in the `.add` function
     */
    setCurrentStory(story: string, variation: string);
  }
}

/**
 * Load a story. This will invoke the storybook router,
 * unmount a previous story, mount the current story and force a rerender
 * This should be in a `beforeEach` block to force a fresh new story
 * @param story Name of the story found in the `.add` function
 * @param variation Variation of the story found in the `.add` function
 */
export function load(story: string, variation: string) {
  cy.window().then(win => {
    win.setCurrentStory(story, variation);
  });
}

/**
 * Visit the blank test page. This should be in a `before` block of every test page
 * To load a story, use h.stories.load(storyName, variation)
 */
export function visit() {
  cy.visit('iframe.html');
}
