import {ConditionalTypeValue} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';

registerWidget<ConditionalTypeValue>('conditional', ({value}) => {
  return (
    <>
      <Value value={value.check} /> <span className="token keyword">extends</span>{' '}
      <Value value={value.extends} /> ? <Value value={value.trueType} /> :{' '}
      <Value value={value.falseType} />
    </>
  );
});
