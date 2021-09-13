import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../deprecatePageHeader';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate PageHeader Codemod', () => {
  context('when transforming PageHeader imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {PageHeader} from '@workday/some-other-library'`;
      const expected = `import {PageHeader} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react', () => {
      const input = `import {PageHeader, PageHeaderProps} from '@workday/canvas-kit-react'`;
      const expected = `import {DeprecatedPageHeader, DeprecatedPageHeaderProps} from '@workday/canvas-kit-react'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react/page-header', () => {
      const input = `import {PageHeader} from '@workday/canvas-kit-react/page-header'`;
      const expected = `import {DeprecatedPageHeader} from '@workday/canvas-kit-react/page-header'`;

      expectTransform(input, expected);
    });

    it('should properly transform default imports from @workday/canvas-kit-react/page-header', () => {
      const input = `import PageHeader from '@workday/canvas-kit-react/page-header'`;
      const expected = `import DeprecatedPageHeader from '@workday/canvas-kit-react/page-header'`;

      expectTransform(input, expected);
    });

    it('should properly transform mixed imports from @workday/canvas-kit-react/page-header', () => {
      const input = `import PageHeader, { PageHeaderProps } from '@workday/canvas-kit-react/page-header'`;
      const expected = `import DeprecatedPageHeader, { DeprecatedPageHeaderProps } from '@workday/canvas-kit-react/page-header'`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform PageHeader JSX identifiers', () => {
      const input = `
      import {PageHeader} from '@workday/canvas-kit-react/page-header';
  
      const CustomPageHeader = () => {
        return <PageHeader>Hello World</PageHeader>;
      };

      const AnotherPageHeader = (props) => {
        return <PageHeader {...props} />;
      }
      `;
      const expected = `
      import {DeprecatedPageHeader} from '@workday/canvas-kit-react/page-header';
  
      const CustomPageHeader = () => {
        return <DeprecatedPageHeader>Hello World</DeprecatedPageHeader>;
      };

      const AnotherPageHeader = (props) => {
        return <DeprecatedPageHeader {...props} />;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
      import { PageHeaderProps } from '@workday/canvas-kit-react/page-header';
  
      type CustomPageHeaderProps = PageHeaderProps;
      interface AnotherPageHeaderProps extends PageHeaderProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { DeprecatedPageHeaderProps } from '@workday/canvas-kit-react/page-header';
  
      type CustomPageHeaderProps = DeprecatedPageHeaderProps;
      interface AnotherPageHeaderProps extends DeprecatedPageHeaderProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });
  });
});
