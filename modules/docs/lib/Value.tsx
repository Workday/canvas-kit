import React from 'react';

import {Flex} from '@workday/canvas-kit-react';
import {Table} from '@workday/canvas-kit-react/table';
import {Text} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';

import * as types from '../docgen/docTypes';
import {DescriptionTooltip} from './DescriptionTooltip';
import {MdxJSToJSX} from './MDXElements';
import {IndentLevelContext, RenderContext, capitalize, indent} from './widgetUtils';

const widgets: Record<string, React.FC<ValueProps>> = {};

export function registerWidget<V extends {kind: string}>(
  key: V['kind'],
  widget: React.FC<ValueProps<V>>
): void {
  widget.displayName = `${capitalize(key)}Widget`;
  widgets[key] = widget as any;
}

export interface ValueProps<T extends {kind: string} = types.Value> {
  value: T;
  doc?: types.ExportedSymbol<T>;
  meta?: any;
}

export const Value = <T extends {kind: string} = types.Value>(props: ValueProps<T>) => {
  const level = React.useContext(IndentLevelContext);

  if (widgets[props.value.kind]) {
    return React.createElement(widgets[props.value.kind], props as any);
  }
  return (
    <span className="token unknown" style={{whiteSpace: 'pre-wrap'}}>
      unknown {JSON.stringify(props.value, null, '  ').replace(/\n/g, '\n' + indent(level))}
    </span>
  );
};

export const PropertiesInline = ({properties}: {properties: types.ObjectProperty[]}) => {
  if (properties.length === 0) {
    return <span className="token punctuation">&#123;&#125;</span>;
  }
  const level = React.useContext(IndentLevelContext);

  return (
    <>
      <span className="token punctuation">&#123;</span>
      {properties.map((p, index) => {
        return (
          <React.Fragment key={index}>
            <br />
            {indent(level + 1)}
            {p.description || p.tags.deprecated ? (
              <DescriptionTooltip
                type="describe"
                style={{maxWidth: '50em'}}
                title={<MdxJSToJSX>{p.description || p.tags.deprecated}</MdxJSToJSX>}
              >
                <span
                  className="token property"
                  style={{
                    cursor: 'pointer',
                    textDecoration: p.tags.deprecated ? 'line-through' : 'underline',
                    textDecorationStyle: 'dotted',
                    color: p.tags.deprecated ? colors.cinnamon600 : colors.plum600,
                  }}
                >
                  {p.name}
                </span>
              </DescriptionTooltip>
            ) : (
              <span className="token property">{p.name}</span>
            )}
            <span className="token punctuation">:</span>&nbsp;
            <IndentLevelContext.Provider value={level + 1}>
              <Value value={p.type} />
            </IndentLevelContext.Provider>
            <span className="token punctuation">;</span>
          </React.Fragment>
        );
      })}
      <br />
      {indent(level)}
      <span className="token punctuation">&#125;</span>
    </>
  );
};

function getTableRows(
  properties: types.ObjectProperty[],
  showDefault = true,
  showRequired = false,
  level: number,
  index: number
): JSX.Element[] {
  return properties.flatMap((property, i) => {
    if (!property) {
      return [];
    }
    const title = property.declarations?.[0]?.filePath;

    const propName = (
      <Text as="code" whiteSpace={'nowrap !important' as any}>
        {indent(level)}
        {level > 0 && '\u2514\u00A0'}
        {property.name}
        {showRequired && property.required ? <Text color="chiliMango600">*</Text> : ''}
      </Text>
    );
    return [
      <Table.Row key={index + i}>
        <Table.Cell color="plum600">
          {/* Use a tooltip to help with debugging where the type sources are coming from */}
          {title ? (
            <Tooltip type="describe" title={title}>
              {propName}
            </Tooltip>
          ) : (
            propName
          )}
        </Table.Cell>
        <Table.Cell>
          <Flex as="code" cs={{flexWrap: 'wrap'}}>
            {
              <RenderContext.Provider value="inline">
                <Value value={property.type} />
              </RenderContext.Provider>
            }
          </Flex>
        </Table.Cell>
        <Table.Cell>
          <MdxJSToJSX>{property.description || ''}</MdxJSToJSX>
        </Table.Cell>
        {showDefault ? (
          <Table.Cell>
            {property.defaultValue ? (
              property.defaultValue.kind === 'primitive' &&
              property.defaultValue.value === 'undefined' ? null : (
                <code>
                  <Value value={property.defaultValue} />
                </code>
              )
            ) : null}
          </Table.Cell>
        ) : null}
      </Table.Row>,
    ];
  });
}

const tableStyles = createStyles({
  tableLayout: 'fixed',
});

export const PropertiesTable = ({
  properties,
  showDefault = true,
  showRequired = false,
}: {
  properties: types.ObjectProperty[];
  showDefault?: boolean;
  showRequired?: boolean;
}) => {
  if (properties.length === 0) {
    return <span className="token punctuation">&#123;&#125;</span>;
  }

  const tableBody = getTableRows(properties, showDefault, showRequired, 0, 0);

  return (
    <IndentLevelContext.Provider value={0}>
      <Table cs={tableStyles}>
        <Table.Head>
          <Table.Row>
            <Table.Header>Name</Table.Header>
            <Table.Header>Type</Table.Header>
            <Table.Header>Description</Table.Header>
            {showDefault ? <Table.Header>Default</Table.Header> : null}
          </Table.Row>
        </Table.Head>
        <Table.Body>{tableBody}</Table.Body>
      </Table>
    </IndentLevelContext.Provider>
  );
};
