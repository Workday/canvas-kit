import {TypeParameter} from '../../docgen/docTypes';
import {registerWidget, Value} from '../Value';

registerWidget<TypeParameter>('typeParameter', ({value}) => {
  return (
    <>
      <span className="token symbol">{value.name}</span>
      {value.constraint && (
        <>
          {' '}
          <span className="token keyword">extends</span> <Value value={value.constraint} />
        </>
      )}
      {value.defaultValue && (
        <>
          {' '}
          <span className="token operator">=</span> <Value value={value.defaultValue} />
        </>
      )}
    </>
  );
});
