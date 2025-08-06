import {ModelHookValue, ModelValue} from '../../docgen/plugins/customTypes';
import {PropertiesTable, registerWidget, Value} from '../Value';
import {Heading} from '../widgetUtils';

registerWidget<ModelValue>('model', ({value}) => {
  return (
    <>
      <Heading>State</Heading>
      <PropertiesTable properties={value.state} showDefault={false} />
      <Heading>Events</Heading>
      <PropertiesTable properties={value.events} showDefault={false} />
      {value.modelProperties.length > 0 && (
        <>
          <Heading>Additional Properties</Heading>
          <PropertiesTable properties={value.modelProperties} showDefault={false} />
        </>
      )}
    </>
  );
});

registerWidget<ModelHookValue>('modelHook', ({value, doc}) => {
  return (
    <code>
      <span className="token symbol">{value.name}</span>{' '}
      <span className="token punctuation">(</span>
      <span className="value symbol">config</span>:{' '}
      <Value value={{kind: 'symbol', name: `${value.name.replace('use', '')}Config`}} />
      <span className="token punctuation">): </span>
      <Value value={{kind: 'symbol', name: `${value.name.replace('use', '')}`}} />
    </code>
  );
});
