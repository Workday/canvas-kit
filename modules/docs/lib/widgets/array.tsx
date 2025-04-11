import {ArrayValue} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';
import {RenderContext} from '../widgetUtils';

registerWidget<ArrayValue>('array', ({value}) => {
  return (
    <RenderContext.Provider value="inline">
      <Value value={value.value} />
      <span className="token punctuation">[]</span>
    </RenderContext.Provider>
  );
});
