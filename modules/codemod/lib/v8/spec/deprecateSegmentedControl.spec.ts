import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../deprecateSegmentedControl';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate SegmentedControl Codemod', () => {
  context('when transforming SegmentedControl imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {SegmentedControl} from '@workday/some-other-library'`;
      const expected = `import {SegmentedControl} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react', () => {
      const input = `import {SegmentedControl, SegmentedControlProps} from '@workday/canvas-kit-react'`;
      const expected = `import {DeprecatedSegmentedControl, DeprecatedSegmentedControlProps} from '@workday/canvas-kit-react'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react/segmented-control', () => {
      const input = `import {SegmentedControl, SegmentedControlProp} from '@workday/canvas-kit-react/segmented-control'`;
      const expected = `import {DeprecatedSegmentedControl, DeprecatedSegmentedControlProp} from '@workday/canvas-kit-react/segmented-control'`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform SegmentedControl JSX identifiers', () => {
      const input = `
        import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

        <SegmentedControl>
          <SegmentedControl.Button
            icon={deviceTabletIcon}
            value="device-view"
            aria-label="Device View"
          />
        </SegmentedControl>
      `;

      const expected = `
        import {DeprecatedSegmentedControl} from '@workday/canvas-kit-react/segmented-control';

        <DeprecatedSegmentedControl>
          <DeprecatedSegmentedControl.Button
            icon={deviceTabletIcon}
            value="device-view"
            aria-label="Device View"
          />
        </DeprecatedSegmentedControl>
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
          import { SegmentedControlProps } from '@workday/canvas-kit-react/segmented-control';

          type CustomSegmentedControlProps = SegmentedControlProps;
          interface AnotherSegmentedControlProps extends SegmentedControlProps {
            specialProp?: boolean;
          }
        `;
      const expected = `
          import { DeprecatedSegmentedControlProps } from '@workday/canvas-kit-react/segmented-control';

          type CustomSegmentedControlProps = DeprecatedSegmentedControlProps;
          interface AnotherSegmentedControlProps extends DeprecatedSegmentedControlProps {
            specialProp?: boolean;
          }
        `;

      expectTransform(input, expected);
    });
  });
});
