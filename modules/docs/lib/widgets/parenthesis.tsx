import {ParenthesisValue} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';

registerWidget<ParenthesisValue>('parenthesis', ({value}) => {
  return (
    <span>
      <span className="token punctuation">(</span>
      <Value value={value.value} />
      <span className="token punctuation">)</span>
    </span>
  );
});
