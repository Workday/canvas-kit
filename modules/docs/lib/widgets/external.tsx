import React from 'react';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';

import {renderTypeParameters} from '../widgetUtils';
import {ExternalSymbolValue} from '../../docgen/docTypes';

import {registerWidget} from '../Value';

registerWidget<ExternalSymbolValue>('external', ({value}) => (
  <>
    <ExternalHyperlink href={value.url}>{value.name}</ExternalHyperlink>
    {renderTypeParameters(value.typeParameters)}
  </>
));
