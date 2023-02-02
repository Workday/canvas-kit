import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

import {defaultJSDoc} from '../../docgen/docParser';
import {EnhanceComponentValue} from '../../docgen/plugins/customTypes';
import {MdxJSToJSX, MDX} from '../MDXElements';
import {SymbolDoc} from '../SymbolDoc';
import {PropertiesTable, registerWidget, Value} from '../Value';
import {Heading, SymbolDialog} from '../widgetUtils';
import * as types from '../../docgen/docTypes';

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

registerWidget<EnhanceComponentValue>('enhancedComponent', ({value, doc}) => {
  const groups = groupProps(value.props);
  const parentComponentName = React.useContext(ParentComponentNameContext);
  const parentComponentJSDoc = React.useContext(ParentComponentJSDocContext);

  return (
    <>
      {!parentComponentName && value.displayName ? <Heading>{value.displayName}</Heading> : null}
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
          Props extends <SymbolDialog value={{kind: 'symbol', name: `${value.model}Config`}} />. If
          a <MDX as="code">model</MDX> is passed, model config is ignored.
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
            <span className="token symbol">{value.elemPropsHook}</span>{' '}
            <span className="token operator">=</span>{' '}
            <SymbolDoc name={value.elemPropsHook} as="span" className="token symbol" />
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
          <SymbolDoc name={`use${value.model}`} />
        </>
      ) : null}
    </>
  );
});

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
