import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameButtonRefs';

const expectTransform = expectTransformFactory(transform);

describe('renameButtonRefs', () => {
  it('should replace "buttonRef" with "ref" on Button components', () => {
    const input = `
      import {Button} from '@workday/canvas-kit-react/button'

      <Button buttonRef={ref} />
    `;

    const expected = `
      import {Button} from '@workday/canvas-kit-react/button'

      <Button ref={ref} />
    `;

    expectTransform(input, expected);
  });

  it('should replace "buttonRef" with "ref" on renamed Button components', () => {
    const input = `
      import {Button as CanvasButton} from '@workday/canvas-kit-react/button'

      <CanvasButton buttonRef={ref} />
    `;

    const expected = `
      import {Button as CanvasButton} from '@workday/canvas-kit-react/button'

      <CanvasButton ref={ref} />
    `;

    expectTransform(input, expected);
  });

  it('should not replace "buttonRef" with "ref" on non-Button components', () => {
    const input = `
      import {Button} from '@workday/canvas-kit-react/button'
      import {SomeOtherButton} from '../Button'

      <SomeOtherButton buttonRef={ref} />
    `;

    const expected = `
      import {Button} from '@workday/canvas-kit-react/button'
      import {SomeOtherButton} from '../Button'

      <SomeOtherButton buttonRef={ref} />
    `;

    expectTransform(input, expected);
  });

  it('should replace "buttonRef" with "ref" on all Button components', () => {
    const input = `
      import {
        Button,
        DeleteButton,
        deprecated_Button as DeprecatedButton,
        DropdownButton,
        HighlightButton,
        Hyperlink,
        IconButton,
        OutlineButton,
        TextButton,
        ToolbarDropdownButton,
        ToolbarIconButton,
      } from '@workday/canvas-kit-react/button'

      <>
        <Button buttonRef={ref} />
        <DeleteButton buttonRef={ref} />
        <DeprecatedButton buttonRef={ref} />
        <DropdownButton buttonRef={ref} />
        <HighlightButton buttonRef={ref} />
        <Hyperlink buttonRef={ref} />
        <IconButton buttonRef={ref} />
        <OutlineButton buttonRef={ref} />
        <TextButton buttonRef={ref} />
        <ToolbarDropdownButton buttonRef={ref} />
        <ToolbarIconButton buttonRef={ref} />
      </>
    `;

    const expected = `
      import {
        Button,
        DeleteButton,
        deprecated_Button as DeprecatedButton,
        DropdownButton,
        HighlightButton,
        Hyperlink,
        IconButton,
        OutlineButton,
        TextButton,
        ToolbarDropdownButton,
        ToolbarIconButton,
      } from '@workday/canvas-kit-react/button'

      <>
        <Button ref={ref} />
        <DeleteButton ref={ref} />
        <DeprecatedButton ref={ref} />
        <DropdownButton ref={ref} />
        <HighlightButton ref={ref} />
        <Hyperlink ref={ref} />
        <IconButton ref={ref} />
        <OutlineButton ref={ref} />
        <TextButton ref={ref} />
        <ToolbarDropdownButton ref={ref} />
        <ToolbarIconButton ref={ref} />
      </>
    `;

    expectTransform(input, expected);
  });
});
