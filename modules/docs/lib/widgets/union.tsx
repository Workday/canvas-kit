import React from 'react';

import {UnionValue} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';
import {IndentLevelContext, RenderContext, indent} from '../widgetUtils';

registerWidget<UnionValue>('union', ({value}) => {
  const level = React.useContext(IndentLevelContext);
  return (
    <RenderContext.Provider value="inline">
      {value.value.map((v, index) => {
        return (
          <React.Fragment key={index}>
            {' '}
            {value.value.length > 3 && (
              <>
                <br />
                {indent(level + 1)}
              </>
            )}
            {index !== 0 && <span className="token punctuation"> |&nbsp;</span>}
            <IndentLevelContext.Provider value={level + 1}>
              <Value value={v} />
            </IndentLevelContext.Provider>
          </React.Fragment>
        );
      })}
    </RenderContext.Provider>
  );
});
