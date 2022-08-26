import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../deprecateLayout';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate Layout Codemod', () => {
  context('when transforming Layout imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {Layout} from '@workday/some-other-library'`;
      const expected = `import {Layout} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react', () => {
      const input = `import {Layout, LayoutProps, Column, ColumnProps} from '@workday/canvas-kit-react'`;
      const expected = `import {DeprecatedLayout, DeprecatedLayoutProps, DeprecatedColumn, DeprecatedColumnProps} from '@workday/canvas-kit-react'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react/layout', () => {
      const input = `import {Layout, Column, ColumnProps} from '@workday/canvas-kit-react/layout'`;
      const expected = `import {DeprecatedLayout, DeprecatedColumn, DeprecatedColumnProps} from '@workday/canvas-kit-react/layout'`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform Layout JSX identifiers', () => {
      const input = `
      import {Layout} from '@workday/canvas-kit-react/layout';
  
      const CustomLayout = () => {
        return <Layout>Hello World</Layout>;
      };

      const AnotherLayout = (props) => {
        return <Layout {...props} />;
      }
      `;

      const expected = `
      import {DeprecatedLayout} from '@workday/canvas-kit-react/layout';
  
      const CustomLayout = () => {
        return <DeprecatedLayout>Hello World</DeprecatedLayout>;
      };

      const AnotherLayout = (props) => {
        return <DeprecatedLayout {...props} />;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform Layout JSX identifiers', () => {
      const input = `
        import {Layout, Column} from '@workday/canvas-kit-react/layout';

        <Layout
          header={
            <Column
              closeIconAriaLabel="Close"
              onClose={() => console.log('onClose callback')}
              title="Deprecated Layout Header"
            />
          }
        />;
      `;

      const expected = `
        import {DeprecatedLayout, DeprecatedColumn} from '@workday/canvas-kit-react/layout';

        <DeprecatedLayout
          header={
            <DeprecatedColumn
              closeIconAriaLabel="Close"
              onClose={() => console.log('onClose callback')}
              title="Deprecated Layout Header"
            />
          }
        />;
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
      import { LayoutProps } from '@workday/canvas-kit-react/layout';
  
      type CustomLayoutProps = LayoutProps;
      interface AnotherLayoutProps extends LayoutProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { DeprecatedLayoutProps } from '@workday/canvas-kit-react/layout';
  
      type CustomLayoutProps = DeprecatedLayoutProps;
      interface AnotherLayoutProps extends DeprecatedLayoutProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
      import { ColumnProps } from '@workday/canvas-kit-react/layout';
  
      type CustomColumnProps = ColumnProps;
      interface AnotherColumnProps extends ColumnProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { DeprecatedColumnProps } from '@workday/canvas-kit-react/layout';
  
      type CustomColumnProps = DeprecatedColumnProps;
      interface AnotherColumnProps extends DeprecatedColumnProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });
  });
});
