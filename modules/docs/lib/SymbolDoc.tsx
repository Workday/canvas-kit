import React from 'react';
import styled from '@emotion/styled';
import MarkdownToJSX from 'markdown-to-jsx';

import {colors, type} from '@workday/canvas-kit-react/tokens';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Heading} from '@workday/canvas-kit-react/text';

import * as types from '../docgen/docTypes';

import {docs, subscribe} from './docs';
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
  return (
    <Dialog model={model}>
      <Dialog.Target as={Hyperlink} className="value-symbol">
        {value.name}
      </Dialog.Target>
      <Dialog.Popper>
        <Dialog.Card>
          <Dialog.CloseIcon />
          <Dialog.Heading>{value.name}</Dialog.Heading>
          <Dialog.Body>
            {symbol ? (
              <SymbolDoc name={value.name} />
            ) : (
              <>
                <p>Basic type information:</p>
                <pre>
                  <code>{value.value}</code>
                </pre>
              </>
            )}
          </Dialog.Body>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};

const Value = ({value}: {value: types.Value}) => {
  switch (value.kind) {
    case 'interface':
    case 'typeLiteral':
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
                {index !== 0 && (
                  <span className="union-separator" key={index}>
                    {' '}
                    |&nbsp;
                  </span>
                )}
                <Value value={v} key={index} />
              </>
            );
          })}
        </code>
      );
    case 'parenthesis':
      return (
        <code>
          <span className="value-punctuation">\(</span>
          <Value value={value.value} />
          <span className="value-punctuation">)</span>
        </code>
      );
    case 'intersection':
      return (
        <>
          {value.value.map((v, i) => (
            <>
              {i !== 0 && (
                <span className="value-amp" key={i}>
                  {' '}
                  &amp;{' '}
                </span>
              )}
              <Value key={i} value={v} />
            </>
          ))}
        </>
      );
    /*{
  "kind": "function",
  "parameters": [
    {
      "kind": "parameter",
      "name": "key",
      "type": {
        "kind": "symbol",
        "name": "BreakpointFnParam",
        "value": "BreakpointFnParam"
      },
      "required": true,
      "rest": false,
      "description": "",
      "declarations": [
        {
          "name": "key",
          "filePath": "/Users/nicholas.boll/projects/canvas-kit/modules/react/common/lib/theming/types.ts"
        }
      ],
      "tags": {}
    }
  ],
  "members": [],
  "returnType": {
    "kind": "primitive",
    "value": "string"
  }
}
       */
    // case 'function':
    case 'function':
      return (
        <>
          <span className="value-punctuation">(</span>
          <>
            {value.parameters.map((p, index) => (
              <>
                {index !== 0 && (
                  <span className="value-punctuation" key={index}>
                    ,{' '}
                  </span>
                )}
                <Value value={p} key={index} />
              </>
            ))}
          </>
          <span className="value-punctuation">
            ) =&gt; <Value value={value.returnType} />
          </span>
        </>
      );
    case 'parameter':
      return (
        <>
          <span className="value-parameter">{value.name}</span>: <Value value={value.type} />
        </>
      );
    case 'symbol':
      return <SymbolDialog value={value} />;
    case 'external':
      return (
        <Hyperlink href={value.url} target="_blank">
          {value.name}
        </Hyperlink>
      );
  }
  return <code className="value-unknown">unknown {JSON.stringify(value, null, '  ')}</code>;
};

function getTableRows(properties: types.TypeMember[], level: number, index: number): JSX.Element[] {
  return properties.flatMap((property, i) => {
    return [
      <Table.Row key={index + i}>
        <Table.Data color="plum600">
          {/* Use a tooltip to help with debugging where the type sources are coming from */}
          <Tooltip title={property.declarations[0]?.filePath}>
            <span>
              {[...Array(level * 6)].map(v => '\u00A0') /* non-breaking space */}
              {level > 0 && '\u2514\u00A0'}
              {property.name}
            </span>
          </Tooltip>
        </Table.Data>
        <Table.Data>
          <code>
            {['interface', 'typeLiteral'].includes(property.type.kind) ? null : (
              <Value value={property.type} />
            )}
          </code>
        </Table.Data>
        <Table.Data></Table.Data>
        <Table.Data>
          <MarkdownToJSX>{property.description || ''}</MarkdownToJSX>
        </Table.Data>
      </Table.Row>,
    ].concat(
      ['interface', 'typeLiteral'].includes(property.type.kind)
        ? [...getTableRows(property.type.properties, level + 1, index + properties.length)]
        : []
    );
  });
}

const InterfaceTable = ({value}: {value: types.InterfaceValue | types.TypeLiteralValue}) => {
  if (value.properties.length === 0) {
    return <span>&#123;&#125;</span>;
  }

  const tableBody = getTableRows(value.properties, 0, 0);

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
      <Table.Body>{tableBody}</Table.Body>
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
  const [doc] = React.useState(() => {
    return docs.find(d => {
      return d.name === name && (fileName ? d.fileName.includes(fileName) : true);
    });
  });

  const children = getSymbolDocChildren(doc);

  return <StyledSymbolDoc>{children}</StyledSymbolDoc>;
};
