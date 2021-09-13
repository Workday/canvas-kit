import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../deprecateCookieBanner';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate CookieBanner Codemod', () => {
  context('when transforming CookieBanner imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {CookieBanner} from '@workday/some-other-library'`;
      const expected = `import {CookieBanner} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react', () => {
      const input = `import {CookieBanner, CookieBannerProps} from '@workday/canvas-kit-react'`;
      const expected = `import {DeprecatedCookieBanner, DeprecatedCookieBannerProps} from '@workday/canvas-kit-react'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react/cookie-banner', () => {
      const input = `import {CookieBanner} from '@workday/canvas-kit-react/cookie-banner'`;
      const expected = `import {DeprecatedCookieBanner} from '@workday/canvas-kit-react/cookie-banner'`;

      expectTransform(input, expected);
    });

    it('should properly transform default imports from @workday/canvas-kit-react/cookie-banner', () => {
      const input = `import CookieBanner from '@workday/canvas-kit-react/cookie-banner'`;
      const expected = `import DeprecatedCookieBanner from '@workday/canvas-kit-react/cookie-banner'`;

      expectTransform(input, expected);
    });

    it('should properly transform mixed imports from @workday/canvas-kit-react/cookie-banner', () => {
      const input = `import CookieBanner, { CookieBannerProps } from '@workday/canvas-kit-react/cookie-banner'`;
      const expected = `import DeprecatedCookieBanner, { DeprecatedCookieBannerProps } from '@workday/canvas-kit-react/cookie-banner'`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform CookieBanner JSX identifiers', () => {
      const input = `
      import {CookieBanner} from '@workday/canvas-kit-react/cookie-banner';
  
      const CustomCookieBanner = () => {
        return (
          <CookieBanner
            onAccept={() => console.log('accecpted')}
            notice={CookieBanner.DefaultNotice}
          >
            Hello World
          </CookieBanner>
        );
      };

      const AnotherCookieBanner = (props) => {
        return <CookieBanner {...props} />;
      }
      `;
      const expected = `
      import {DeprecatedCookieBanner} from '@workday/canvas-kit-react/cookie-banner';
  
      const CustomCookieBanner = () => {
        return (
          <DeprecatedCookieBanner
            onAccept={() => console.log('accecpted')}
            notice={DeprecatedCookieBanner.DefaultNotice}
          >
            Hello World
          </DeprecatedCookieBanner>
        );
      };

      const AnotherCookieBanner = (props) => {
        return <DeprecatedCookieBanner {...props} />;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform type reference identifiers', () => {
      const input = `
      import { CookieBannerProps } from '@workday/canvas-kit-react/cookie-banner';
  
      type CustomCookieBannerProps = CookieBannerProps;
      interface AnotherCookieBannerProps extends CookieBannerProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { DeprecatedCookieBannerProps } from '@workday/canvas-kit-react/cookie-banner';
  
      type CustomCookieBannerProps = DeprecatedCookieBannerProps;
      interface AnotherCookieBannerProps extends DeprecatedCookieBannerProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });
  });
});
