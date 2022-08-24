import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../deprecateDrawer';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate Drawer Codemod', () => {
  context('when transforming Drawer imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {Drawer} from '@workday/some-other-library'`;
      const expected = `import {Drawer} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-labs-react', () => {
      const input = `import {Drawer, DrawerProps, DrawerHeader, DrawerHeaderProps} from '@workday/canvas-kit-labs-react'`;
      const expected = `import {DeprecatedDrawer, DeprecatedDrawerProps, DeprecatedDrawerHeader, DeprecatedDrawerHeaderProps} from '@workday/canvas-kit-labs-react'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-labs-react/drawer', () => {
      const input = `import {Drawer, DrawerHeader, DrawerHeaderProps} from '@workday/canvas-kit-labs-react/drawer'`;
      const expected = `import {DeprecatedDrawer, DeprecatedDrawerHeader, DeprecatedDrawerHeaderProps} from '@workday/canvas-kit-labs-react/drawer'`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform Drawer JSX identifiers', () => {
      const input = `
      import {Drawer} from '@workday/canvas-kit-labs-react/drawer';
  
      const CustomDrawer = () => {
        return <Drawer>Hello World</Drawer>;
      };

      const AnotherDrawer = (props) => {
        return <Drawer {...props} />;
      }
      `;

      const expected = `
      import {DeprecatedDrawer} from '@workday/canvas-kit-labs-react/drawer';
  
      const CustomDrawer = () => {
        return <DeprecatedDrawer>Hello World</DeprecatedDrawer>;
      };

      const AnotherDrawer = (props) => {
        return <DeprecatedDrawer {...props} />;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform Drawer JSX identifiers', () => {
      const input = `
        import {Drawer, DrawerHeader} from '@workday/canvas-kit-labs-react/drawer';

        <Drawer
          header={
            <DrawerHeader
              closeIconAriaLabel="Close"
              onClose={() => console.log('onClose callback')}
              title="Deprecated Drawer Header"
            />
          }
        />;
      `;

      const expected = `
        import {DeprecatedDrawer, DeprecatedDrawerHeader} from '@workday/canvas-kit-labs-react/drawer';

        <DeprecatedDrawer
          header={
            <DeprecatedDrawerHeader
              closeIconAriaLabel="Close"
              onClose={() => console.log('onClose callback')}
              title="Deprecated Drawer Header"
            />
          }
        />;
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
      import { DrawerProps } from '@workday/canvas-kit-labs-react/drawer';
  
      type CustomDrawerProps = DrawerProps;
      interface AnotherDrawerProps extends DrawerProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { DeprecatedDrawerProps } from '@workday/canvas-kit-labs-react/drawer';
  
      type CustomDrawerProps = DeprecatedDrawerProps;
      interface AnotherDrawerProps extends DeprecatedDrawerProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
      import { DrawerHeaderProps } from '@workday/canvas-kit-labs-react/drawer';
  
      type CustomDrawerHeaderProps = DrawerHeaderProps;
      interface AnotherDrawerHeaderProps extends DrawerHeaderProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { DeprecatedDrawerHeaderProps } from '@workday/canvas-kit-labs-react/drawer';
  
      type CustomDrawerHeaderProps = DeprecatedDrawerHeaderProps;
      interface AnotherDrawerHeaderProps extends DeprecatedDrawerHeaderProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });
  });
});
