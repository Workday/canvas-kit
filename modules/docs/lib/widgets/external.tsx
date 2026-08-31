import {ExternalHyperlink} from '@workday/canvas-kit-react/button';

import {ExternalSymbolValue} from '../../docgen/docTypes';
import {registerWidget} from '../Value';
import {renderTypeParameters} from '../widgetUtils';

registerWidget<ExternalSymbolValue>('external', ({value}) => (
  <>
    <ExternalHyperlink href={value.url} iconLabel="Open link in new window">
      {value.name}
    </ExternalHyperlink>
    {renderTypeParameters(value.typeParameters)}
  </>
));
