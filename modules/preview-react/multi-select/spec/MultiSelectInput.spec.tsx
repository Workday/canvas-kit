import {render, screen, within} from '@testing-library/react';

import {MultiSelect} from '../lib/MultiSelect';

describe.each([
  ['Input', MultiSelect.Input],
  ['SearchInput', MultiSelect.SearchInput],
] as const)('MultiSelect.%s selected items', (_, Input) => {
  it.each(['aria-label', 'aria-labelledby'] as const)(
    'should use %s to label the removal toolbar',
    labelProp => {
      render(
        <MultiSelect items={['Apple']} initialSelectedIds={['Apple']}>
          <span id="fruits-label">Fruits</span>
          <Input
            {...{[labelProp]: labelProp === 'aria-label' ? 'Fruits' : 'fruits-label'}}
            removeLabel="Remove"
          />
        </MultiSelect>
      );

      expect(screen.getByRole('combobox', {name: 'Fruits'})).toBeInTheDocument();
      const toolbar = screen.getByRole('toolbar', {name: 'Fruits'});
      const button = within(toolbar).getByRole('button', {name: 'Remove Apple'});
      expect(button).not.toHaveAttribute('aria-selected');
      expect(button).toHaveAttribute('type', 'button');
      expect(screen.queryByRole('grid')).not.toBeInTheDocument();
    }
  );
});
