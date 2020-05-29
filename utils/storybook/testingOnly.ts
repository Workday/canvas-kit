export function testingOnly(fn: any) {
  if (!(window as any).Cypress) {
    fn.story = fn.story || {};
    fn.story.name = `_hidden_`; // hides via style in .storybook/manager-head.html
  }

  return fn;
}
