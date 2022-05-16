import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateModelSignatures';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('updateModelSignatures', () => {
  it('should replace destructured ObjectMethod {data} in "on*" callback names', () => {
    const input = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect({ data }) {
          // do something
        }
      })
    `;

    const expected = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect(data) {
          // do something
        }
      })
    `;

    expectTransform(input, expected);
  });

  it('should replace destructured ObjectMethod {data} in "on*" callback names', () => {
    const input = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect({ data: {id} }) {
          // do something
        }
      })
    `;

    const expected = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect({id}) {
          // do something
        }
      })
    `;

    expectTransform(input, expected);
  });

  it('should replace destructured ObjectMethod {data, state} in "on*" callback names', () => {
    const input = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect({ data, state }) {
          // do something
        }
      })
    `;

    const expected = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect(data, state) {
          // do something
        }
      })
    `;

    expectTransform(input, expected);
  });

  it('should replace destructured ObjectProperty with ArrowFunctionExpression {data} in "on*" callback names', () => {
    const input = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect: ({ data: { id } }) => setActiveTab(id)
      })
    `;

    const expected = stripIndent`
      import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs'

      const model = useTabsModel({
        onSelect: ({ id }) => setActiveTab(id)
      })
    `;

    expectTransform(input, expected);
  });
});
