import React from 'react';
import styled from '@emotion/styled';

import {colors, type} from '@workday/canvas-kit-react/tokens';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Text} from '@workday/canvas-kit-react/text';
import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

import {MDX, MdxJSToJSX} from './MDXElements';
import * as types from '../docgen/docTypes';
import {defaultJSDoc} from '../docgen/docParser';

import {docs} from './docs';
import {Table} from './Table';
import {
  CanvasColorValue,
  ComposedElemPropsHookValue,
  ElemPropsHookValue,
  EnhanceComponentValue,
  ModelHookValue,
  ModelValue,
} from '../docgen/customTypes';
import {createComponent} from '@workday/canvas-kit-react';

export interface SymbolDocProps {
  name: string;
  fileName?: string;
  headingStart?: number;
}

const fileNameToCategoryMap: Record<string, string[]> = {
  Layout: [
    'utils/layout',
    'utils/gridArea',
    'utils/gridItem',
    'utils/flexItem',
    'utils/position',
    'utils/space',
    'utils/stack',
  ],
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

  // clear out categories that don't have anything in them
  return Object.keys(categories).reduce((result, key) => {
    if (categories[key].length) {
      result[key] = categories[key];
    }
    return result;
  }, {} as typeof categories);
}

const RenderContext = React.createContext<'table' | 'inline'>('table');
const HeadingLevelContext = React.createContext(3);
const ParentComponentNameContext = React.createContext('');
/**
 * Used to keep track of JSDoc in subcomponent definitions.
 *
 * For example:
 * ```tsx
 * subComponents: {
 *   // JSDoc goes here instead of on `TabsItem` for better dev experience
 *   Item: TabsItem
 * }
 * ```
 */
const ParentComponentJSDocContext = React.createContext(defaultJSDoc);

const SymbolDialog = ({value}: {value: types.SymbolValue}) => {
  const [symbol, setSymbol] = React.useState<types.ExportedSymbol | undefined>(undefined);
  const model = useDialogModel({
    onShow() {
      setSymbol(docs.find(d => value.name === d.name) || undefined);
    },
  });

  return (
    <Dialog model={model}>
      <>
        <Dialog.Target as={Hyperlink} className="value-symbol" href="#" aria-haspopup="true">
          {value.name}
        </Dialog.Target>
        {value.typeParameters && value.typeParameters.length ? (
          <RenderContext.Provider value="inline">
            <span>&lt;</span>
            {value.typeParameters.map((p, index) => {
              return (
                <React.Fragment key={index}>
                  {index !== 0 && <span className="value-punctuation">, </span>}
                  <Value value={p} />
                </React.Fragment>
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
                <>
                  <MdxJSToJSX>{symbol.description}</MdxJSToJSX>
                  <SymbolDoc name={value.name} headingStart={3} />
                </>
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

interface HeadingProps {
  headingOffset?: number;
}
/**
 * Special heading component that uses @mdx-js/react heading components, but is also aware of
 * relative heading levels.
 */
const Heading = createComponent('h4')({
  displayName: 'MDXHeading',
  Component({headingOffset = 0, ...elemProps}: HeadingProps) {
    const headingLevel = React.useContext(HeadingLevelContext);
    const as = `h${headingLevel + headingOffset}` as 'h4'; // Make Typescript happy
    return <MDX as={as} {...elemProps} />;
  },
});

function space(level: number) {
  return [...Array(level * 2)].map(v => '\u00A0').join('');
}

const Value = ({
  value,
  doc,
}: {
  value:
    | types.Value
    | ModelHookValue
    | ModelValue
    | EnhanceComponentValue
    | CanvasColorValue
    | ElemPropsHookValue
    | ComposedElemPropsHookValue;
  doc?: types.ExportedSymbol<any>;
}) => {
  const parentComponentName = React.useContext(ParentComponentNameContext);
  const parentComponentJSDoc = React.useContext(ParentComponentJSDocContext);
  parentComponentJSDoc && console.log('doc', parentComponentJSDoc);
  const renderContext = React.useContext(RenderContext);
  const level = React.useContext(LevelContext);
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
                <React.Fragment key={index}>
                  {index !== 0 && <span className="union-separator"> |&nbsp;</span>}
                  <Value value={v} />
                </React.Fragment>
              );
            })}
          </span>
        </RenderContext.Provider>
      );
    case 'parenthesis':
      return (
        <span>
          <span className="value-punctuation">(</span>
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
            <React.Fragment key={i}>
              {i !== 0 && <span className="value-amp"> &amp; </span>}
              <Value value={v} />
            </React.Fragment>
          ))}
        </RenderContext.Provider>
      );
    case 'conditional':
      return (
        <>
          <Value value={value.check} /> extends <Value value={value.extends} /> ?{' '}
          <Value value={value.trueType} /> : <Value value={value.falseType} />
        </>
      );
    case 'function':
      return (
        <RenderContext.Provider value="inline">
          {value.name && <span>{value.name}</span>}
          <span className="value-punctuation">(</span>
          <>
            {value.parameters.map((p, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <span className="value-punctuation">, </span>}
                {value.parameters.length > 1 && (
                  <>
                    <br />
                    {space(level + 1)}
                  </>
                )}
                {value.parameters.length > 1 ? (
                  <LevelContext.Provider value={level + 1}>
                    <Value value={p} />
                  </LevelContext.Provider>
                ) : (
                  <Value value={p} />
                )}
                {index === value.parameters.length - 1 && index > 0 && (
                  <>
                    <br />
                    {space(level)}
                  </>
                )}
              </React.Fragment>
            ))}
          </>
          <span className="value-punctuation">
            )&nbsp;=&gt;&nbsp;
            <Value value={value.returnType} />
          </span>
        </RenderContext.Provider>
      );
    case 'parameter':
      return (
        <RenderContext.Provider value="inline">
          {value.description ? (
            <Tooltip
              style={{maxWidth: '50em'}}
              title={<MdxJSToJSX>{value.description}</MdxJSToJSX>}
            >
              <span className="value-parameter">{value.name}</span>
            </Tooltip>
          ) : (
            <span className="value-parameter">{value.name}</span>
          )}
          :&nbsp;
          <Value value={value.type} />
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
          {doc ? <MdxJSToJSX>{doc.description}</MdxJSToJSX> : null}
          <Heading>State</Heading>
          <PropertiesTable properties={value.state} showDefault={false} />
          <Heading>Events</Heading>
          <PropertiesTable properties={value.events} showDefault={false} />
          <Heading>Additional Properties</Heading>
          <PropertiesTable properties={value.modelProperties} showDefault={false} />
        </>
      );
    case 'elemPropsHook':
      return (
        <code>
          {value.name ? (
            <>
              <span>const</span> <span>{value.name}</span> <span>=</span>{' '}
            </>
          ) : (
            <>
              <span>function</span>
            </>
          )}
          <span className="value-punctuation">(</span>
          <span className="value-punctuation">)</span>
          <span className="value-punctuation"> =&gt; </span> {}
        </code>
      );
    case 'composedElemPropsHook':
      return (
        <code>
          {value.name} = <Value value={{kind: 'symbol', name: 'composeHooks'}} />
          <span className="value-punctuation">(</span>
          <>
            {value.composes.map((p, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <span className="value-punctuation">, </span>}
                {value.composes.length > 1 && (
                  <>
                    <br />
                    {space(level + 1)}
                  </>
                )}
                {value.composes.length > 1 ? (
                  <LevelContext.Provider value={level + 1}>
                    <Value value={p} />
                  </LevelContext.Provider>
                ) : (
                  <Value value={p} />
                )}
                {index === value.composes.length - 1 && index > 0 && (
                  <>
                    <br />
                    {space(level)}
                  </>
                )}
              </React.Fragment>
            ))}
          </>
          <span className="value-punctuation">)</span>
        </code>
      );
    case 'enhancedComponent':
      const groups = groupProps(value.props);
      return (
        <>
          {!parentComponentName && value.displayName ? (
            <Heading>{value.displayName}</Heading>
          ) : null}
          <Heading headingOffset={1}>Usage</Heading>
          <MdxJSToJSX>{doc?.description || parentComponentJSDoc.description || ''}</MdxJSToJSX>
          {value.styleComponent ? (
            <>
              <Heading headingOffset={1}>Style Component</Heading>
              <MDX as="p">
                <code>
                  <ParentComponentJSDocContext.Provider value={defaultJSDoc}>
                    <Value value={value.styleComponent} />
                  </ParentComponentJSDocContext.Provider>
                </code>
              </MDX>
            </>
          ) : null}
          <Heading headingOffset={1}>Props</Heading>
          {value.componentType === 'container' && value.model ? (
            <MDX as="p">
              Props extends <SymbolDialog value={{kind: 'symbol', name: `${value.model}Config`}} />.
              If a <MDX as="code">model</MDX> is passed, model config is ignored.
            </MDX>
          ) : null}
          {Object.keys(groups).map(key => {
            return (
              <React.Fragment key={key}>
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
              </React.Fragment>
            );
          })}
          {value.elemPropsHook ? (
            <>
              <Heading headingOffset={1}>elemProps Hook</Heading>
              <code>
                <SymbolDoc name={value.elemPropsHook} />
              </code>
            </>
          ) : null}
          {value.subComponents
            ? value.subComponents.map((c, i) => {
                return (
                  <React.Fragment key={i}>
                    <Heading>
                      {value.displayName || parentComponentName}.{c.name}
                    </Heading>
                    <ParentComponentNameContext.Provider
                      value={`${value.displayName || parentComponentName}.${c.name}`}
                    >
                      <ParentComponentJSDocContext.Provider value={c}>
                        <SymbolDoc name={c.symbol} />
                      </ParentComponentJSDocContext.Provider>
                    </ParentComponentNameContext.Provider>
                  </React.Fragment>
                );
              })
            : null}
          {value.componentType === 'container' && value.model ? (
            <>
              <Heading headingOffset={-1}>Model</Heading>
              <SymbolDoc name={value.model} />
            </>
          ) : null}
        </>
      );
  }
  return (
    <code className="value-unknown">
      unknown {JSON.stringify(value, null, '  ').replace(/\n/g, '\n' + space(level))}
    </code>
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
    const title = property.declarations?.[0]?.filePath;
    console.log('title', title);
    const propName = (
      <Text as="code" whiteSpace={'nowrap !important' as any}>
        {space(level)}
        {level > 0 && '\u2514\u00A0'}
        {property.name}
        {showRequired && property.required ? <Text color="chiliMango600">*</Text> : ''}
      </Text>
    );
    return [
      <Table.Row key={index + i}>
        <Table.Data color="plum600">
          {/* Use a tooltip to help with debugging where the type sources are coming from */}
          {title ? <Tooltip title={title}>{propName}</Tooltip> : propName}
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
          <MdxJSToJSX>{property.description || ''}</MdxJSToJSX>
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
  console.log('level', level);

  return (
    <>
      <span>&#123;</span>
      {properties.map((p, index) => {
        return (
          <React.Fragment key={index}>
            <br />
            {space(level)}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {p.description ? (
              <Tooltip style={{maxWidth: '50em'}} title={<MdxJSToJSX>{p.description}</MdxJSToJSX>}>
                <span>{p.name}:</span>
              </Tooltip>
            ) : (
              <span>{p.name}:</span>
            )}
            &nbsp;
            <LevelContext.Provider value={level + 1}>
              <Value value={p.type} />
            </LevelContext.Provider>
            <span>;</span>
          </React.Fragment>
        );
      })}
      <br />
      {space(level)}
      <span>&#125;</span>
    </>
  );
};

const PropertiesTable = ({
  properties,
  showDefault = true,
  showRequired = false,
}: {
  properties: types.ObjectProperty[];
  showDefault?: boolean;
  showRequired?: boolean;
}) => {
  if (properties.length === 0) {
    return <span>&#123;&#125;</span>;
  }

  const tableBody = getTableRows(properties, showDefault, showRequired, 0, 0);

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
    return <Value value={doc.type} doc={doc} />;
  }

  return <div>Not Found</div>;
}

export const SymbolDoc = ({name, fileName, headingStart = 3, ...elemProps}: SymbolDocProps) => {
  const [doc] = React.useState(() => {
    return docs.find(d => {
      return d.name === name && (fileName ? d.fileName.includes(fileName) : true);
    });
  });

  const children = getSymbolDocChildren(doc);

  return (
    <StyledSymbolDoc>
      <HeadingLevelContext.Provider value={headingStart}>{children}</HeadingLevelContext.Provider>
    </StyledSymbolDoc>
  );
};
