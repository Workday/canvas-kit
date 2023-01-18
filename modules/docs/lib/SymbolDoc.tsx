import React from 'react';
import styled from '@emotion/styled';
import MarkdownToJSX from 'markdown-to-jsx';

import {colors, type} from '@workday/canvas-kit-react/tokens';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

import * as types from '../docgen/docTypes';

import {docs, subscribe} from './docs';
import {Table} from './Table';
import {
  CanvasColorValue,
  EnhanceComponentValue,
  ModelHookValue,
  ModelValue,
} from '../docgen/customTypes';

export interface SymbolDocProps {
  name: string;
  fileName?: string;
}

const fileNameToCategoryMap: Record<string, string[]> = {
  Layout: ['utils/layout', 'utils/gridArea', 'utils/flexItem', 'utils/position', 'utils/space'],
  Color: ['utils/color', 'utils/background'],
  Border: ['utils/border'],
  Depth: ['utils/depth'],
  Text: ['utils/text'],
  Other: ['utils/other'],
};

function groupProps(props: types.ObjectProperty[]): Record<string, types.ObjectProperty[]> {
  const categories: Record<string, types.ObjectProperty[]> = {Local: []};
  for (const key in fileNameToCategoryMap) {
    categories[key] = [];
  }
  for (const prop of props) {
    let found = false;
    for (const key in fileNameToCategoryMap) {
      if (
        fileNameToCategoryMap[key].find(match => prop.declarations[0]?.filePath.includes(match))
      ) {
        found = true;
        categories[key].push(prop);
      }
    }
    if (!found) {
      categories.Local.push(prop);
    }
  }

  return categories;
}

const RenderContext = React.createContext<'table' | 'inline'>('table');

const SymbolDialog = ({value}: {value: types.SymbolValue}) => {
  const [symbol, setSymbol] = React.useState<types.ExportedSymbol | null>(null);
  const model = useDialogModel({
    onShow() {
      setSymbol(docs.find(d => value.name === d.name) || null);
    },
  });

  return (
    <Dialog model={model}>
      <>
        <Dialog.Target as={Hyperlink} className="value-symbol">
          {value.name}
        </Dialog.Target>
        {value.typeParameters && value.typeParameters.length ? (
          <RenderContext.Provider value="inline">
            <span>&lt;</span>
            {value.typeParameters.map((p, index) => {
              return (
                <>
                  {index !== 0 && (
                    <span className="value-punctuation" key={index}>
                      ,{' '}
                    </span>
                  )}
                  <Value value={p} />
                </>
              );
            })}
            <span>&gt;</span>
          </RenderContext.Provider>
        ) : (
          ''
        )}
      </>
      <Dialog.Popper>
        <Dialog.Card maxHeight="50vh" maxWidth="90vh">
          <Dialog.CloseIcon />
          <Dialog.Heading>{value.name}</Dialog.Heading>
          <Dialog.Body>
            <RenderContext.Provider value="table">
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
            </RenderContext.Provider>
          </Dialog.Body>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};

const Value = ({
  value,
}: {
  value: types.Value | ModelHookValue | ModelValue | EnhanceComponentValue | CanvasColorValue;
}) => {
  const renderContext = React.useContext(RenderContext);
  switch (value.kind) {
    case 'object':
    case 'interface':
    case 'typeLiteral':
      if (value.properties === undefined) {
        debugger;
      }
      return renderContext === 'inline' ? (
        <PropertiesInline properties={value.properties} />
      ) : (
        <RenderContext.Provider value="inline">
          <PropertiesTable properties={value.properties} />
        </RenderContext.Provider>
      );
    case 'type':
      return <Value value={value.value} />;
    case 'primitive':
      return <span className="value-primitive">{value.value}</span>;
    case 'boolean':
      return <span className="value-primitive">{String(value.value)}</span>;
    case 'string':
      return <span className="value-string">'{value.value}'</span>;
    case 'number':
      return <span className="value-number">{value.value}</span>;
    case 'generic':
      return <span className="value-number">{value.name}</span>;
    case 'union':
      return (
        <RenderContext.Provider value="inline">
          <span className="value-union">
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
          </span>
        </RenderContext.Provider>
      );
    case 'parenthesis':
      return (
        <span>
          <span className="value-punctuation">\(</span>
          <Value value={value.value} />
          <span className="value-punctuation">)</span>
        </span>
      );
    case 'array':
      return (
        <RenderContext.Provider value="inline">
          <Value value={value.value} />
          <span className="value-punctuation">[]</span>
        </RenderContext.Provider>
      );
    case 'tuple':
      return (
        <RenderContext.Provider value="inline">
          <span className="value-punctuation">[</span>
          {value.value.map((v, i) => (
            <Value key={i} value={v} />
          ))}
          <span className="value-punctuation">]</span>
        </RenderContext.Provider>
      );
    case 'intersection':
      return (
        <RenderContext.Provider value="inline">
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
        </RenderContext.Provider>
      );
    case 'modelHook':
      return (
        <code>
          <span>function </span>
          <span>{value.name}</span> <span className="value-punctuation">(</span>
          <span className="value-parameter">config</span>:{' '}
          <Value value={{kind: 'symbol', name: `${value.name.replace('use', '')}Config`}} />
          <span className="value-punctuation">): </span>
          <Value value={{kind: 'symbol', name: `${value.name.replace('use', '')}`}} />
        </code>
      );
    case 'model':
      return (
        <>
          <Heading size="medium" as="h5">
            State
          </Heading>
          <PropertiesTable properties={value.state} showDefault={false} />
          <Heading size="medium" as="h5">
            Events
          </Heading>
          <PropertiesTable properties={value.events} showDefault={false} />
          <Heading size="medium" as="h5">
            Additional Properties
          </Heading>
          <PropertiesTable properties={value.modelProperties} showDefault={false} />
        </>
      );
    case 'enhancedComponent':
      const groups = groupProps(value.props);
      return (
        <>
          {Object.keys(groups).map(key => {
            return (
              <>
                {key === 'Local' ? (
                  <>
                    <PropertiesTable properties={groups[key]}></PropertiesTable>
                  </>
                ) : (
                  <Expandable>
                    <Expandable.Target headingLevel="h5">
                      <Expandable.Title>{key}</Expandable.Title>
                      <Expandable.Icon iconPosition="end" />
                    </Expandable.Target>
                    <Expandable.Content>
                      <PropertiesTable properties={groups[key]}></PropertiesTable>
                    </Expandable.Content>
                  </Expandable>
                )}
              </>
            );
          })}
        </>
      );
    case 'function':
      return (
        <RenderContext.Provider value="inline">
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
        </RenderContext.Provider>
      );
    case 'parameter':
      return (
        <RenderContext.Provider value="inline">
          <span className="value-parameter">{value.name}</span>: <Value value={value.type} />
        </RenderContext.Provider>
      );
    case 'symbol':
      return <SymbolDialog value={value} />;
    case 'external':
      return <ExternalHyperlink href={value.url}>{value.name}</ExternalHyperlink>;
    case 'canvasColor':
      return (
        <ColorPicker
          style={{width: 170}}
          colorSet={Object.values(colors)}
          onColorChange={() => {}}
        />
      );
  }
  return <code className="value-unknown">unknown {JSON.stringify(value, null, '  ')}</code>;
};

function getTableRows(
  properties: types.ObjectProperty[],
  showDefault = true,
  level: number,
  index: number
): JSX.Element[] {
  return properties.flatMap((property, i) => {
    return [
      <Table.Row key={index + i}>
        <Table.Data color="plum600">
          {/* Use a tooltip to help with debugging where the type sources are coming from */}
          <Tooltip title={property.declarations?.[0]?.filePath || ''}>
            <span>
              {[...Array(level * 6)].map(v => '\u00A0') /* non-breaking space */}
              {level > 0 && '\u2514\u00A0'}
              {property.name}
              {property.required ? <Text color="chiliMango600">*</Text> : ''}
            </span>
          </Tooltip>
        </Table.Data>
        <Table.Data>
          <code>
            {
              /*property.type.kind === 'typeLiteral' ||
            property.type.kind === 'interface' ||
            property.type.kind === 'object' ? null : */ <Value
                value={property.type}
              />
            }
          </code>
        </Table.Data>
        <Table.Data>
          <MarkdownToJSX>{property.description || ''}</MarkdownToJSX>
        </Table.Data>
        {showDefault ? (
          <Table.Data>
            <code>{property.defaultValue ? <Value value={property.defaultValue} /> : null}</code>
          </Table.Data>
        ) : null}
      </Table.Row>,
    ]; /*.concat(
      property.type.kind === 'typeLiteral' ||
        property.type.kind === 'interface' ||
        property.type.kind === 'object'
        ? [
            ...getTableRows(
              property.type.properties,
              showDefault,
              level + 1,
              index + properties.length
            ),
          ]
        : []
    );*/
  });
}

const LevelContext = React.createContext(0);

const PropertiesInline = ({properties}: {properties: types.ObjectProperty[]}) => {
  if (properties.length === 0) {
    return <span>&#123;&#125;</span>;
  }
  const level = React.useContext(LevelContext);

  return (
    <>
      <span>&#123;</span>
      {properties.map((p, index) => {
        return (
          <>
            <br />
            {[...Array(level * 4)].map(v => '\u00A0') /* non-breaking space */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {p.description ? (
              <Tooltip
                style={{maxWidth: '50em'}}
                title={<MarkdownToJSX>{p.description}</MarkdownToJSX>}
              >
                <span>{p.name}:</span>
              </Tooltip>
            ) : (
              <span>{p.name}:</span>
            )}
            &nbsp;
            <LevelContext.Provider value={level + 1}>
              <Value value={p.type} />
            </LevelContext.Provider>
          </>
        );
      })}
      <br />
      {[...Array(level * 4)].map(v => '\u00A0') /* non-breaking space */}
      <span>&#125;</span>
    </>
  );
};

const PropertiesTable = ({
  properties,
  showDefault = true,
}: {
  properties: types.ObjectProperty[];
  showDefault?: boolean;
}) => {
  if (properties.length === 0) {
    return <span>&#123;&#125;</span>;
  }

  console.log('properties', properties);

  const tableBody = getTableRows(properties, showDefault, 0, 0);

  return (
    <Table>
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
    return (
      <>
        <p>
          <MarkdownToJSX>{doc.description}</MarkdownToJSX>
        </p>
        <Value value={doc.type} />
      </>
    );
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
