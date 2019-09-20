import 'cypress-pipe';
import 'cypress-plugin-tab';

// TODO: Remove when https://github.com/Bkucera/cypress-plugin-tab/issues/5 is fixed
Cypress.Commands.overwrite('tab', (originalFn, subject) => {
  return originalFn(subject).then(s => s || (cy as any).state('window').document.activeElement);
});
