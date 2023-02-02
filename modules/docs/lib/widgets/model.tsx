import React from 'react';

import {ModelHookValue, ModelValue} from '../../docgen/plugins/customTypes';
import {MdxJSToJSX} from '../MDXElements';
import {PropertiesTable, registerWidget, Value} from '../Value';
import {Heading} from '../widgetUtils';

registerWidget<ModelValue>('model', ({value}) => {
  return (
    <>
      <Heading>State</Heading>
      <PropertiesTable properties={value.state} showDefault={false} />
      <Heading>Events</Heading>
      <PropertiesTable properties={value.events} showDefault={false} />
      <Heading>Additional Properties</Heading>
      <PropertiesTable properties={value.modelProperties} showDefault={false} />
    </>
  );
});

registerWidget<ModelHookValue>('modelHook', ({value, doc}) => {
  return (
    <>
      {doc && <MdxJSToJSX>{doc.description}</MdxJSToJSX>}
      <code>
        <span className="token symbol">{value.name}</span>{' '}
        <span className="token punctuation">(</span>
        <span className="value symbol">config</span>:{' '}
        <Value value={{kind: 'symbol', name: `${value.name.replace('use', '')}Config`}} />
        <span className="token punctuation">): </span>
        <Value value={{kind: 'symbol', name: `${value.name.replace('use', '')}`}} />
      </code>
    </>
  );
});
