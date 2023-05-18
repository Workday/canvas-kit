import React from 'react';

import {IntersectionValue} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';
import {RenderContext} from '../widgetUtils';

registerWidget<IntersectionValue>('intersection', ({value}) => {
  return (
    <RenderContext.Provider value="inline">
      {value.value.map((v, i) => (
        <React.Fragment key={i}>
          {i !== 0 && <span className="token punctuation"> &amp; </span>}
          <Value value={v} />
        </React.Fragment>
      ))}
    </RenderContext.Provider>
  );
});
