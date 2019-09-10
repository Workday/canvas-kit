import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TableRow, {TableRowState} from '../lib/TableRow';

describe('Table Row Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <TableRow>
        <td>cell</td>
      </TableRow>
    );
    expect(component).toMatchSnapshot();
  });

  test('header mode', () => {
    const component = renderer.create(
      <TableRow header={true}>
        <th>cell</th>
      </TableRow>
    );
    expect(component).toMatchSnapshot();
  });

  describe('states', () => {
    function createStateComponent(state: TableRowState) {
      return renderer.create(
        <TableRow state={state}>
          <td>cell</td>
        </TableRow>
      );
    }
    test('Error', () => {
      const component = createStateComponent(TableRowState.Error);
      expect(component).toMatchSnapshot();
    });

    test('Alert', () => {
      const component = createStateComponent(TableRowState.Alert);
      expect(component).toMatchSnapshot();
    });

    test('Input Error', () => {
      const component = createStateComponent(TableRowState.InputError);
      expect(component).toMatchSnapshot();
    });

    test('Input Alert', () => {
      const component = createStateComponent(TableRowState.InputAlert);
      expect(component).toMatchSnapshot();
    });

    test('Hover', () => {
      const component = createStateComponent(TableRowState.Hover);
      expect(component).toMatchSnapshot();
    });

    test('Selected', () => {
      const component = createStateComponent(TableRowState.Selected);
      expect(component).toMatchSnapshot();
    });
  });
});
