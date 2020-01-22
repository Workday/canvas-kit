import * as React from 'react';
import styled from '@emotion/styled';
import {StaticStates} from '@workday/canvas-kit-labs-react-core/lib/StaticStates';

interface ComponentPropValue {
  value: any;
  label: string;
}

interface ComponentProps {
  [key: string]: any;
}

/**
 * A helper to generate a table of all possible states for component visual testing.
 *
 * This uses our `StaticStates` system. Note: This system requires the use of Canvas'
 * `styled` wrapper within the component, instead of the default emotion one.
 */
export interface StaticStatesTableProps {
  /**
   * The pseudo states + disabled state of the component. These correspond to the columns of the table.
   * @default [ 'default', 'hover', 'focus', 'focus hover', 'active', 'active hover', 'disabled', 'disabled hover' ]
   */
  states: string[];
  /**
   * The props that will be passed to the component when it is rendered. The combinations of these will
   * correspond to the rows of the table.
   * @default {}
   */
  componentProps: {
    [key: string]: ComponentPropValue[];
  };
  /**
   * The render function called to render the component in each cell of the table. This gives you
   * the ability to add extra styling or markup (a blue background for an inverse variant, for example).
   */
  renderComponent(props: ComponentProps, disabled: boolean, className: string): React.ReactNode;
  /**
   * The validation function called to check the validity of the current prop combination.
   * Return false if you would like to skip this prop combination (table row).
   * Return true otherwise.
   */
  shouldRenderRow?(props: ComponentProps): boolean;
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

export default class StaticStatesTable extends React.Component<StaticStatesTableProps> {
  public static defaultProps = {
    componentProps: {},
    states: [
      'default',
      'hover',
      'focus',
      'focus hover',
      'active',
      'active hover',
      'disabled',
      'disabled hover',
    ],
  };

  renderPropCombination = (componentProps: {[key: string]: ComponentPropValue}) => {
    const {shouldRenderRow, states, renderComponent} = this.props;

    const key = Object.keys(componentProps)
      .map(prop => componentProps[prop].label.toLowerCase())
      .join('-');
    const title = Object.keys(componentProps)
      .map(prop => componentProps[prop].label)
      .join(' ');

    const props: {[key: string]: any} = {};
    Object.keys(componentProps).forEach(prop => {
      props[prop] = componentProps[prop].value;
    });

    if (shouldRenderRow && !shouldRenderRow(props)) {
      return;
    }

    return (
      <tr key={key}>
        <td>{title}</td>
        {states.map(className => {
          const disabled = className.includes('disabled');
          return <td key={`${key}-${className}`}>{renderComponent(props, disabled, className)}</td>;
        })}
      </tr>
    );
  };

  /**
   * Recursively map the prop combinations to get every possible combination.
   * For each possible combination call `renderPropCombination`
   * @returns React.ReactNode
   */
  mapProps = (
    values: {[key: string]: ComponentPropValue} = {},
    remainingProps: string[] = Object.keys(this.props.componentProps)
  ): React.ReactNode => {
    const prop = remainingProps[0];
    if (!prop) {
      return this.renderPropCombination(values);
    }
    const newValues = this.props.componentProps[prop];

    return newValues.map(value => {
      values[prop] = value;
      return this.mapProps(values, remainingProps!.slice(1, remainingProps!.length));
    });
  };

  render() {
    return (
      <StaticStates>
        <Table>
          <thead>
            <tr>
              <th>Variants</th>
              {this.props.states.map((state, index) => {
                const name = state.replace(
                  /\w\S*/g,
                  txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );

                return <th key={`StateHeading${index}`}>{name}</th>;
              })}
            </tr>
          </thead>
          <tbody>{this.mapProps()}</tbody>
        </Table>
      </StaticStates>
    );
  }
}
