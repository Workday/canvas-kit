import React from 'react';

import {ComponentValue} from '../../docgen/plugins/customTypes';
import {PropertiesTable, registerWidget} from '../Value';
import {Heading} from '../widgetUtils';

registerWidget<ComponentValue>('component', ({value, doc, meta}) => {
  return (
    <>
      <Heading headingOffset={1}>Props</Heading>
      <PropertiesTable properties={value.props}></PropertiesTable>
    </>
  );
});
