import React from 'react';

import {FunctionValue, FunctionParameter} from '../../docgen/docTypes';
import {DescriptionTooltip} from '../DescriptionTooltip';
import {MdxJSToJSX} from '../MDXElements';
import {registerWidget, Value} from '../Value';
import {RenderContext, IndentLevelContext, space, renderTypeParameters} from '../widgetUtils';

registerWidget<FunctionValue>('function', ({value}) => {
  const level = React.useContext(IndentLevelContext);
  return (
    <RenderContext.Provider value="inline">
      {value.name && <Value value={value.name} />}
      {renderTypeParameters(value.typeParameters)}
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
      <span className="token operator">)&nbsp;=&gt;&nbsp;</span>
      <Value value={value.returnType} />
    </RenderContext.Provider>
  );
});

registerWidget<FunctionParameter>('parameter', ({value}) => {
  return (
    <RenderContext.Provider value="inline">
      {value.description ? (
        <DescriptionTooltip
          style={{maxWidth: '50em'}}
          title={<MdxJSToJSX>{value.description}</MdxJSToJSX>}
        >
          <span
            className="token property"
            style={{
              cursor: 'pointer',
              textDecoration: 'underline',
              textDecorationStyle: 'dotted',
            }}
          >
            {value.name}
          </span>
        </DescriptionTooltip>
      ) : (
        <span className="token property">{value.name}</span>
      )}
      <span className="token punctuation">:</span>&nbsp;
      <Value value={value.type} />
    </RenderContext.Provider>
  );
});
