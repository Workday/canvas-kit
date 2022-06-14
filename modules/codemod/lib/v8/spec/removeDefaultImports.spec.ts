import {expectTransformFactory} from './expectTransformFactory';
import transform from '../removeDefaultImports';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameIconRefs', () => {
  it('should replace default export with a named export', () => {
    const input = stripIndent`
      import ComboBox from '@workday/canvas-kit-labs-react/combobox';
      import TextInput from '@workday/canvas-kit-react/text-input';
    `;

    const expected = stripIndent`
      import { ComboBox } from '@workday/canvas-kit-labs-react/combobox';
      import { TextInput } from '@workday/canvas-kit-react/text-input';
    `;

    expectTransform(input, expected);
  });
});
