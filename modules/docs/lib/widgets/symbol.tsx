import {SymbolValue} from '../../docgen/docTypes';
import {registerWidget} from '../Value';
import {SymbolDialog} from '../widgetUtils';

registerWidget<SymbolValue>('symbol', ({value}) => {
  return <SymbolDialog value={value} />;
});
