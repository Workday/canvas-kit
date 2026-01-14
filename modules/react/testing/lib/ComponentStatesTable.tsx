import React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {PropCombination, Props} from './propTypes';

/**
 * A helper to generate a table of all possible states for component visual testing.
 */
export interface ComponentStatesTableProps {
  /**
   * The props that will be passed to the component when it is rendered and the corresponding
   * row label for that permutation. It is encouraged to use the result of permutateProps()
   * rather than passing in a list so we don't miss any combinations.
   */
  rowProps: PropCombination[];
  /**
   * The props that will be passed to the component when it is rendered and the corresponding
   * column label for that permutation. It is encouraged to use the result of permutateProps()
   * rather than passing in a list so we don't miss any combinations.
   */
  columnProps: PropCombination[];
  /**
   * The render function called to render the component in each cell of the table. This gives you
   * the ability to add extra styling or markup (a blue background for an inverse variant, for example).
   */
  children(props: Props): React.ReactNode;
}

const Table = styled('table')({
  width: '100%',
  thead: {
    textAlign: 'start',
    paddingBlockEnd: 16,
  },
  'td, th': {
    minWidth: 100,
    paddingBlockEnd: 16,
    paddingInlineEnd: 16,
    textAlign: 'start',
  },
});

export const ComponentStatesTable = ({
  rowProps,
  columnProps,
  children,
}: ComponentStatesTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Variants</th>
          {columnProps.map(col => (
            <th key={`component-table-heading-${col.label.toLowerCase().replace(' ', ',')}`}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowProps.map(row => {
          return (
            <tr key={row.label.toLowerCase().replace(' ', '-')}>
              <td>{row.label}</td>
              {columnProps.map(col => {
                return (
                  <td key={col.label.toLowerCase().replace(' ', '-')}>
                    {children({
                      ...row.props,
                      ...col.props,
                      // join class names between rows and columns
                      className: [row.props.className, col.props.className]
                        .filter(c => c)
                        .join(' '),
                    })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
