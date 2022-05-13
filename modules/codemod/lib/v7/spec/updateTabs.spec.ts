import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateTabs';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('updateModelSignatures', () => {
  it('should replace the "name" attribute in Tabs.Items with "data-id"', () => {
    const input = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.List>
              <Tabs.Item name="first">First</Tabs.Item>
            </Tabs.List>
          </Tabs>
        );
      }
    `;

    const expected = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.List>
              <Tabs.Item data-id="first">First</Tabs.Item>
            </Tabs.List>
          </Tabs>
        );
      }
    `;

    expectTransform(input, expected);
  });

  it('should replace the "name" attribute in Tabs.Items with "data-id"', () => {
    const input = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.List>
              {item => <Tabs.Item name={item.id}>{item.text}</Tabs.Item>}
            </Tabs.List>
          </Tabs>
        );
      }
    `;

    const expected = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.List>
              {item => <Tabs.Item data-id={item.id}>{item.text}</Tabs.Item>}
            </Tabs.List>
          </Tabs>
        );
      }
    `;

    expectTransform(input, expected);
  });
});
