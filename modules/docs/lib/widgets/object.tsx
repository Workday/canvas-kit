import React from 'react';

import {ObjectValue} from '../../docgen/docTypes';
import {PropertiesInline, PropertiesTable, registerWidget} from '../Value';
import {RenderContext} from '../widgetUtils';

registerWidget<ObjectValue>('object', ({value}) => {
  const renderContext = React.useContext(RenderContext);
  return renderContext === 'inline' ? (
    <PropertiesInline properties={value.properties} />
  ) : (
    <RenderContext.Provider value="inline">
      <PropertiesTable properties={value.properties} />
    </RenderContext.Provider>
  );
});
