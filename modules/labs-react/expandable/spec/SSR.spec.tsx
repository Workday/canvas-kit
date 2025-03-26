/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';
import {Expandable} from '../';

describe('ExpandableContainer', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Expandable>
          <Expandable.Target headingLevel="h3">Target</Expandable.Target>
          <Expandable.Content>Content</Expandable.Content>
        </Expandable>
      );
    expect(ssrRender).not.toThrow();
  });
});
