import {registerWidget, Value} from '../Value';
import {
  BooleanLiteralValue,
  GenericValue,
  InferValue,
  KeyofValue,
  NumberLiteralValue,
  PrimitiveValue,
  StringLiteralValue,
  TypeValue,
} from '../../docgen/docTypes';
import {renderTypeParameters} from '../widgetUtils';

registerWidget<PrimitiveValue>('primitive', ({value}) => (
  <span className="token primitive">{value.value}</span>
));

registerWidget<BooleanLiteralValue>('boolean', ({value}) => (
  <span className="token primitive">{String(value.value)}</span>
));

registerWidget<StringLiteralValue>('string', ({value}) => (
  <span className="token string">'{value.value}'</span>
));

registerWidget<NumberLiteralValue>('number', ({value}) => (
  <span className="token number">{value.value}</span>
));

registerWidget<GenericValue>('generic', ({value}) => (
  <span className="token symbol">{value.name}</span>
));

registerWidget<TypeValue>('type', ({value, doc}) => {
  return (
    <>
      {doc?.name && (
        <>
          <span className="token keyword">type</span>{' '}
          <span className="token symbol">{doc?.name || 'unknown'}</span>
          {renderTypeParameters(value.typeParameters)} <span className="token operator">=</span>{' '}
        </>
      )}
      <Value value={value.value} />
    </>
  );
});

registerWidget<InferValue>('infer', ({value}) => (
  <>
    <span className="token keyword">infer</span> <Value value={value.value} />
  </>
));

registerWidget<KeyofValue>('keyof', ({value}) => (
  <>
    <span className="token keyword">keyof</span> <Value value={value.name} />
  </>
));
