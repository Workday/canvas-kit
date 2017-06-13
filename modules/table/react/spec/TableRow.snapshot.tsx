import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TableRow, {TableRowStates} from '../lib/TableRow';

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
    function createStateComponent(state: TableRowStates) {
      return renderer.create(
        <TableRow state={state}>
          <td>cell</td>
        </TableRow>
      );
    }
    test('Error', () => {
      const component = createStateComponent(TableRowStates.Error);
      expect(component).toMatchSnapshot();
    });

    test('Alert', () => {
      const component = createStateComponent(TableRowStates.Alert);
      expect(component).toMatchSnapshot();
    });

    test('Input Error', () => {
      const component = createStateComponent(TableRowStates.InputError);
      expect(component).toMatchSnapshot();
    });

    test('Input Alert', () => {
      const component = createStateComponent(TableRowStates.InputAlert);
      expect(component).toMatchSnapshot();
    });

    test('Hover', () => {
      const component = createStateComponent(TableRowStates.Hover);
      expect(component).toMatchSnapshot();
    });

    test('Selected', () => {
      const component = createStateComponent(TableRowStates.Selected);
      expect(component).toMatchSnapshot();
    });
  });
});
