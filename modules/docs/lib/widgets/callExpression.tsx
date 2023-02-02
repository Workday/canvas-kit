import React from 'react';

import {CallExpression} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';

import {IndentLevelContext, space} from '../widgetUtils';

registerWidget<CallExpression>('callExpression', ({value}) => {
  const level = React.useContext(IndentLevelContext);
  return (
    <>
      {value.name && <Value value={value.name} />}
      <span className="token punctuation">(</span>
      <>
        {value.parameters.map((p, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <span className="token punctuation">, </span>}
            {value.parameters.length > 1 && (
              <>
                <br />
                {space(level + 1)}
              </>
            )}
            {value.parameters.length > 1 ? (
              <IndentLevelContext.Provider value={level + 1}>
                <Value value={p} />
              </IndentLevelContext.Provider>
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
      <span className="token punctuation">)</span>
    </>
  );
});
