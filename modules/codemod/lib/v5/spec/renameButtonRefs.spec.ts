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
});
