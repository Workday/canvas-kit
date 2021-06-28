const RESERVED = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|await|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
const isReserved = (name: string) => RESERVED.exec(name);

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
  // Account for CSF sanitization of stories with reserved keywords (https://github.com/storybookjs/storybook/blob/63b287aa55f96e3b575e7174f7e1583069b3c3ac/lib/csf-tools/src/mdx/sb-mdx-plugin.ts#L57)
  if (isReserved(story)) {
    return cy.loadStory(categorization, `${story}Story`);
  }
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
