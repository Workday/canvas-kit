import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../softDeprecatePreviewMenu';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate Preview Menu Codemod', () => {
  context('when transforming Menu imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {Menu} from '@workday/some-other-library'`;
      const expected = `import {Menu} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-preview-react', () => {
      const input = `import {Menu, MenuProps, MenuState, MenuItem, MenuItemProps} from '@workday/canvas-kit-preview-react'`;
      const expected = `import {DeprecatedMenu, DeprecatedMenuProps, DeprecatedMenuState, DeprecatedMenuItem, DeprecatedMenuItemProps} from '@workday/canvas-kit-preview-react'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-preview-react/menu', () => {
      const input = `import {Menu, MenuItem, MenuItemProps} from '@workday/canvas-kit-preview-react/menu'`;
      const expected = `import {DeprecatedMenu, DeprecatedMenuItem, DeprecatedMenuItemProps} from '@workday/canvas-kit-preview-react/menu'`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform Menu JSX identifiers', () => {
      const input = `
        import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
    
        const CustomMenu = () => {
          return (
            <Menu>
              <MenuItem>First Item</MenuItem>
            </Menu>
          );
        };

        const AnotherMenu = (props) => {
          return <Menu {...props} />;
        }
      `;

      const expected = `
        import {DeprecatedMenu, DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';
    
        const CustomMenu = () => {
          return (
            <DeprecatedMenu>
              <DeprecatedMenuItem>First Item</DeprecatedMenuItem>
            </DeprecatedMenu>
          );
        };

        const AnotherMenu = (props) => {
          return <DeprecatedMenu {...props} />;
        }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
        import { MenuProps } from '@workday/canvas-kit-preview-react/menu';
    
        type CustomMenuProps = MenuProps;
        interface AnotherMenuProps extends MenuProps {
          specialProp?: boolean;
        }
      `;
      const expected = `
        import { DeprecatedMenuProps } from '@workday/canvas-kit-preview-react/menu';
    
        type CustomMenuProps = DeprecatedMenuProps;
        interface AnotherMenuProps extends DeprecatedMenuProps {
          specialProp?: boolean;
        }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
        import { MenuItemProps } from '@workday/canvas-kit-preview-react/menu';
    
        type CustomMenuItemProps = MenuItemProps;
        interface AnotherMenuItemProps extends MenuItemProps {
          specialProp?: boolean;
        }
      `;
      const expected = `
        import { DeprecatedMenuItemProps } from '@workday/canvas-kit-preview-react/menu';
    
        type CustomMenuItemProps = DeprecatedMenuItemProps;
        interface AnotherMenuItemProps extends DeprecatedMenuItemProps {
          specialProp?: boolean;
        }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
        import { MenuState } from '@workday/canvas-kit-preview-react/menu';
    
        type CustomMenuState = MenuState;
        interface AnotherMenuState extends MenuState {
          specialProp?: boolean;
        }
      `;
      const expected = `
        import { DeprecatedMenuState } from '@workday/canvas-kit-preview-react/menu';
    
        type CustomMenuState = DeprecatedMenuState;
        interface AnotherMenuState extends DeprecatedMenuState {
          specialProp?: boolean;
        }
      `;

      expectTransform(input, expected);
    });
  });
});
