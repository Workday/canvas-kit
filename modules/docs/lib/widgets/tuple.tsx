import {TupleValue} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';
import {RenderContext} from '../widgetUtils';

registerWidget<TupleValue>('tuple', ({value}) => {
  return (
    <RenderContext.Provider value="inline">
      <span className="token punctuation">[</span>
      {value.value.map((v, i) => (
        <Value key={i} value={v} />
      ))}
      <span className="token punctuation">]</span>
    </RenderContext.Provider>
  );
});
