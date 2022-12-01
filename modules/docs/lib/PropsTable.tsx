import React from 'react';
import styled from '@emotion/styled';
import MarkdownToJSX from 'markdown-to-jsx';

import {space, colors} from '@workday/canvas-kit-react/tokens';

import {componentPropMap} from './componentPropMap';

import {Table} from './Table';
import {MoreTooltip} from './MoreTooltip';

interface PropsTableProps {
  of: {
    __PROPS__: [
      {
        defaultValue: null | {value: string};
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
        parent: {
          fileName: string;
          name: string;
        };
      }
    ];
    name?: string;
    displayName?: string;
    __IMPORT_NAME__: string;
  };
}

const RequiredAsterisk = styled('abbr')({
  color: colors.cinnamon500,
  fontWeight: 700,
  paddingLeft: space.xxxs,
  textDecoration: 'unset',
  position: 'relative',
  top: '-2px',
});

export const PropsTable1 = ({of}: PropsTableProps) => {
  // const props = of.__PROPS__ || [];
  // if (!of.__PROPS__) {
  //   console.warn(`Could not find props for ${of.name || of.displayName}`);
  // }
  if (!componentPropMap[of.__IMPORT_NAME__]?.[of.displayName || of.name || '']) {
    console.warn(
      `Could not find props for ${of.name || of.displayName}. Module: ${of.__IMPORT_NAME__}`
    );
  }
  const props =
    componentPropMap[of.__IMPORT_NAME__]?.[of.displayName || of.name || '']?.props || {};
  console.log(componentPropMap, of);
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>Name</Table.Header>
          <Table.Header>Type</Table.Header>
          <Table.Header>Default</Table.Header>
          <Table.Header>Description</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.keys(props).map((propName, index) => {
          const prop = props[propName];
          const type = (prop.type.name === 'enum' ? prop.type.raw : prop.type.name) || '';
          return (
            <Table.Row key={index}>
              <Table.Data>
                <code>
                  {prop.name}{' '}
                  {prop.required && <RequiredAsterisk title="required">*</RequiredAsterisk>}
                </code>
              </Table.Data>
              <MoreTooltip title={prop.type.value}>
                <Table.Data tabIndex={type.includes('more') ? 0 : undefined}>
                  <code>{type}</code>
                </Table.Data>
              </MoreTooltip>
              <Table.Data>{prop.defaultValue?.value || null}</Table.Data>
              <Table.Data>
                <MarkdownToJSX>{prop.description}</MarkdownToJSX>
              </Table.Data>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
