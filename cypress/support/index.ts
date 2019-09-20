import 'cypress-pipe';
import 'cypress-plugin-tab';

const raf = () =>
  new Cypress.Promise(resolve => {
    (cy as any).state('window').requestAnimationFrame(resolve);
  });

Cypress.Commands.overwrite('tab', (originalFn, subject) => {
  return raf().then(() =>
    originalFn(subject).then(s => s || (cy as any).state('window').document.activeElement)
  );
});
