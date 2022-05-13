import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateTabs';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('updateModelSignatures', () => {
  it('should replace the "name" attribute in Tabs.Items and Tabs.Panel with "data-id"', () => {
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

  it('should replace the "name" attribute in Tabs.Panel with "data-id"', () => {
    const input = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.Panel name="first">First Panel</Tabs.Panel>
          </Tabs>
        );
      }
    `;

    const expected = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.Panel data-id="first">First Panel</Tabs.Panel>
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

  it('should replace the "name" attribute in Tabs.Menu.Item with "data-id"', () => {
    const input = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.Menu.List>
              {(item: MyTabItem) => <Tabs.Menu.Item name={item.id}>{item.text}</Tabs.Menu.Item>}
            </Tabs.Menu.List>
          </Tabs>
        );
      }
    `;

    const expected = stripIndent`
      import {Tabs} from '@workday/canvas-kit-react/tabs'

      const Component = () => {
        return (
          <Tabs>
            <Tabs.Menu.List>
              {(item: MyTabItem) => <Tabs.Menu.Item data-id={item.id}>{item.text}</Tabs.Menu.Item>}
            </Tabs.Menu.List>
          </Tabs>
        );
      }
    `;

    expectTransform(input, expected);
  });
});
