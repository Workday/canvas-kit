import React from 'react';
import styled from '@emotion/styled';

import {colors, type} from '@workday/canvas-kit-react/tokens';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {Hyperlink} from '@workday/canvas-kit-react/button';

console.log('Dialog', Dialog);

import * as types from '../docgen/docTypes';

import {docs} from './docs';
import {Table} from './Table';

export interface SymbolDocProps {
  name: string;
  fileName?: string;
}

const SymbolDialog = ({value}: {value: types.SymbolValue}) => {
  const [symbol, setSymbol] = React.useState<types.ExportedSymbol | null>(null);
  const model = useDialogModel({
    onShow() {
      setSymbol(docs.find(d => value.name === d.name) || null);
    },
  });
  console.log('symbol', symbol?.name);
  return (
    <Dialog model={model}>
      <Dialog.Target as={Hyperlink} className="value-symbol">
        {value.name}
      </Dialog.Target>
      <Dialog.Popper>
        <Dialog.Card>
          <Dialog.CloseIcon />
          <Dialog.Heading>{value.name}</Dialog.Heading>
          <Dialog.Body>{symbol && <SymbolDoc name={value.name} />}</Dialog.Body>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};

const Value = ({value}: {value: types.Value}) => {
  console.log('value', value);
  switch (value.kind) {
    case 'interface':
      return <InterfaceTable value={value} />;
    case 'type':
      return <Value value={value.value} />;
    case 'primitive':
      return <code className="value-primitive">{value.value}</code>;
    case 'string':
      return <code className="value-string">'{value.value}'</code>;
    case 'number':
      return <code className="value-number">{value.value}</code>;
    case 'union':
      return (
        <code className="value-union">
          {value.value.map((v, index) => {
            return (
              <>
                {index !== 0 && <span className="union-separator"> |&nbsp;</span>}
                <Value value={v} />
              </>
            );
          })}
        </code>
      );
    case 'symbol':
      return <SymbolDialog value={value} />;
  }
  return <code className="value-unknown">unknown</code>;
};

const InterfaceTable = ({value}: {value: types.InterfaceValue}) => {
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
        {value.properties.map((property, index) => {
          return (
            <Table.Row key={index}>
              <Table.Data color="plum600">{property.name}</Table.Data>
              <Table.Data>
                <Value value={property.type} />
              </Table.Data>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

const StyledSymbolDoc = styled('div')({
  '& code': {
    fontFamily: type.properties.fontFamilies.monospace,
    whiteSpace: 'pre-wrap',
  },
  '& .value-string': {
    color: colors.juicyPear600,
  },
  '& .value-primitive': {
    color: colors.grapeSoda600,
  },
});

function getSymbolDocChildren(doc?: types.ExportedSymbol) {
  if (!doc) {
    return <div>Not Found</div>;
  }
  if (doc && doc.type) {
    return <Value value={doc.type} />;
  }

  return <div>Not Found</div>;
}

export const SymbolDoc = ({name, fileName, ...elemProps}: SymbolDocProps) => {
  console.log('name', name);
  const doc = React.useMemo(() => {
    return docs.find(d => {
      return d.name === name && (fileName ? d.fileName.includes(fileName) : true);
    });
  }, [name]);
  console.log('doc', doc);
  const children = getSymbolDocChildren(doc);

  return <StyledSymbolDoc>{children}</StyledSymbolDoc>;
};
