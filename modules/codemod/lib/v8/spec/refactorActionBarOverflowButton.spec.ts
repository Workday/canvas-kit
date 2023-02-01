import {expectTransformFactory} from './expectTransformFactory';
import transform from '../refactorActionBarOverflowButton';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('ActionBar', () => {
  it('should ignore non-canvas-kit imports', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/some-other-package';

      <ActionBar model={model}>
        <ActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/some-other-package';

      <ActionBar model={model}>
        <ActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    expectTransform(input, expected);
  });

  it('should add overflowButton prop to ActionBar.List if ActionBar imported from main package', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react';

      <ActionBar model={model}>
        <ActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react';

      <ActionBar model={model}>
        <ActionBar.List
          position="relative"
          overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}>
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    expectTransform(input, expected);
  });

  it('should add overflowButton prop to ActionBar.List if ActionBar imported from named package', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      <ActionBar items={items}>
        <ActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      <ActionBar items={items}>
        <ActionBar.List
          position="relative"
          overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}>
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    expectTransform(input, expected);
  });

  it('should update styled component', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      const StyledActionBar = styled(ActionBar)({
        display: "grid",
      });

      <StyledActionBar items={items}>
        <ActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </StyledActionBar>
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      const StyledActionBar = styled(ActionBar)({
        display: "grid",
      });

      <StyledActionBar items={items}>
        <ActionBar.List
          position="relative"
          overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}>
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </StyledActionBar>
    `;

    expectTransform(input, expected);
  });

  it('should update renamed component', () => {
    const input = stripIndent`
      import {ActionBar as CanvasActionBar} from '@workday/canvas-kit-react/action-bar';

      <CanvasActionBar items={items}>
        <CanvasActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <CanvasActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </CanvasActionBar.Item>
          )}
        </CanvasActionBar.List>
      </CanvasActionBar>
    `;

    const expected = stripIndent`
      import {ActionBar as CanvasActionBar} from '@workday/canvas-kit-react/action-bar';

      <CanvasActionBar items={items}>
        <CanvasActionBar.List
          position="relative"
          overflowButton={<CanvasActionBar.OverflowButton aria-label="More actions" />}>
          {(item: MyActionItem, index) => (
            <CanvasActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </CanvasActionBar.Item>
          )}
        </CanvasActionBar.List>
      </CanvasActionBar>
    `;

    expectTransform(input, expected);
  });

  it('should not add overflowButton prop to ActionBar.List if ActionBar does not have model prop', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      <ActionBar>
        <ActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar';

      <ActionBar>
        <ActionBar.List position="relative">
          {(item: MyActionItem, index) => (
            <ActionBar.Item
              as={index === 0 ? PrimaryButton : undefined}
              onClick={() => console.log(item.id)}
            >
              {item.text}
            </ActionBar.Item>
          )}
        </ActionBar.List>
      </ActionBar>
    `;

    expectTransform(input, expected);
  });
});
