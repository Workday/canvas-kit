import * as React from 'react';
import styled from '@emotion/styled';

type PropDeclaration = {
  value: any;
  label: string;
};

type PropsDeclaration = {[key: string]: PropDeclaration[]};

type Props = {
  [key: string]: any;
};

type PropCombination = {
  label: string;
  props: Props;
};

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
    textAlign: 'left',
    paddingBottom: 16,
  },
  'td, th': {
    minWidth: 100,
    paddingBottom: 16,
    paddingRight: 16,
    textAlign: 'left',
  },
});

/**
 * Recursively map the prop combinations to get every possible permutation.
 * Optionally filter undesirable combinations using the filter function.
 */
export const permutateProps = (
  allProps: PropsDeclaration,
  filter?: (props: Props) => boolean,
  remainingProps: string[] = Object.keys(allProps),
  values: {[key: string]: PropDeclaration} = {}
): PropCombination[] => {
  // When there are no more props to combine with, return result
  const prop = remainingProps[0];
  if (!prop) {
    const props: Props = {};
    Object.keys(values).forEach(prop => {
      props[prop] = values[prop].value;
    });

    if (filter && !filter(props)) {
      return [];
    }

    const label = Object.keys(values)
      .map(prop => values[prop].label)
      .join(' ');

    return [
      {
        label,
        props,
      },
    ];
  }
  const possiblePropValues = allProps[prop];

  const permutations = possiblePropValues.map((value: PropDeclaration) => {
    const newValues = {...values}; // Required so we don't overwrite previous references
    newValues[prop] = value;

    return permutateProps(
      allProps,
      filter,
      remainingProps!.slice(1, remainingProps!.length),
      newValues
    );
  });

  return (permutations as any).flat();
};

export default class ComponentStatesTable extends React.Component<ComponentStatesTableProps> {
  public static defaultProps = {
    rowProps: [],
    columnProps: [
      {label: 'Default', props: {className: ''}},
      {label: 'Hover', props: {className: 'hover'}},
      {label: 'Focus', props: {className: 'focus'}},
      {label: 'Focus Hover', props: {className: 'focus hover'}},
      {label: 'Active', props: {className: 'active'}},
      {label: 'Active Hover', props: {className: 'active hover'}},
    ],
  };

  render() {
    const {rowProps, columnProps, children} = this.props;

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
  }
}
