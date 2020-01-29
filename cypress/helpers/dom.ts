export const getByLabelText = (label: string) =>
  function getByLabelText($container?: JQuery) {
    const $label = ($container || Cypress.$('body')).find(`label:contains(${label})`);

    if (!$label.length) {
      throw Error(`Could not find a label containing "${label}"`);
    }
    const id = $label.attr('for');
    try {
      const $input = Cypress.$(`[id="${id}"]`);
      return $input;
    } catch (e) {
      throw Error(`Could not find an element labelled by "${label}`);
    }
  };
