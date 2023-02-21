import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {Box} from '@workday/canvas-kit-react/layout';

import {defaultJSDoc} from '../../docgen/docParser';
import {EnhancedComponentValue} from '../../docgen/plugins/customTypes';
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

registerWidget<EnhancedComponentValue>('enhancedComponent', ({value, doc, meta}) => {
  const groups = groupProps(value.props);
  const parentComponentName = React.useContext(ParentComponentNameContext);
  const parentComponentJSDoc = React.useContext(ParentComponentJSDocContext);
  const hideHeader = meta && meta.hideHeader === true;

  const intro = (
    <>
      {!parentComponentName && !hideHeader && value.displayName ? (
        <Heading>{value.displayName}</Heading>
      ) : null}

      <ParentComponentNameContext.Provider value="">
        <ParentComponentJSDocContext.Provider value={defaultJSDoc}>
          <MdxJSToJSX>{parentComponentJSDoc.description || doc?.description || ''}</MdxJSToJSX>
        </ParentComponentJSDocContext.Provider>
      </ParentComponentNameContext.Provider>
    </>
  );

  // We don't want to re-document a subcomponent that is a container component with a different
  // model. If we detect another container, only render the intro and a link to the container
  // component
  if (parentComponentName && value.componentType === 'container') {
    return (
      <>
        {intro}
        <MDX as="p">
          This component references the{' '}
          <ParentComponentNameContext.Provider value="">
            <ParentComponentJSDocContext.Provider value={defaultJSDoc}>
              <SymbolDialog value={{kind: 'symbol', name: value.displayName || ''}} />
            </ParentComponentJSDocContext.Provider>
          </ParentComponentNameContext.Provider>{' '}
          component.
        </MDX>
      </>
    );
  }

  return (
    <>
      {intro}
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
      {value.baseElement && (
        <MDX as="p">
          Props extend from <Value value={value.baseElement} />. Changing the <code>as</code> prop
          will change the element interface.
        </MDX>
      )}
      {value.componentType === 'container' && value.model ? (
        <MDX as="p">
          Props extend from <SymbolDialog value={{kind: 'symbol', name: `${value.model}Config`}} />.
          If a <code>model</code> is passed, model config is ignored.
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
          <Heading headingOffset={1}>{value.elemPropsHook}</Heading>
          <Box marginBottom="m">
            <SymbolDoc name={value.elemPropsHook} />
          </Box>
        </>
      ) : null}
      {value.subComponents
        ? value.subComponents.map((c, i) => {
            return (
              <React.Fragment key={i}>
                <Heading>
                  {parentComponentName ? parentComponentName : value.displayName}.{c.name}
                </Heading>
                <ParentComponentNameContext.Provider
                  value={`${parentComponentName ? parentComponentName : value.displayName}.${
                    c.name
                  }`}
                >
                  <ParentComponentJSDocContext.Provider value={c}>
                    <SymbolDoc name={c.symbol} hideDescription />
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
