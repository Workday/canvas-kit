import {QualifiedNameValue} from '../../docgen/docTypes';
import {Value, registerWidget} from '../Value';

registerWidget<QualifiedNameValue>('qualifiedName', ({value}) => {
  return (
    <>
      <Value value={value.left} />
      <span className="token punctuation">.</span>
      <Value value={value.right} />
    </>
  );
});
