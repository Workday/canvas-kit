import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../deprecateHeader';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate Header Codemod', () => {
  context('when transforming header imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import Header, {GlobalHeader} from "@workday/some-other-library";`;
      const expected = `import Header, {GlobalHeader} from "@workday/some-other-library";`;

      expectTransform(input, expected);
    });

    it('should transform named imports from @workday/canvas-kit-labs-react', () => {
      const input = `import {Header, GlobalHeader} from '@workday/canvas-kit-labs-react';`;
      const expected = `import {DeprecatedHeader, DeprecatedGlobalHeader} from '@workday/canvas-kit-labs-react';`;

      expectTransform(input, expected);
    });

    it('should transform named imports from @workday/canvas-kit-labs-react/header', () => {
      const input = `import {Header, GlobalHeader} from '@workday/canvas-kit-labs-react/header';`;
      const expected = `import {DeprecatedHeader, DeprecatedGlobalHeader} from '@workday/canvas-kit-labs-react/header';`;

      expectTransform(input, expected);
    });

    it('should transform default imports from @workday/canvas-kit-labs-react/header', () => {
      const input = `import Header from '@workday/canvas-kit-labs-react/header';`;
      const expected = `import DeprecatedHeader from '@workday/canvas-kit-labs-react/header';`;

      expectTransform(input, expected);
    });

    it('should transform mixed imports from @workday/canvas-kit-labs-react/header', () => {
      const input = `import Header, {Themes} from '@workday/canvas-kit-labs-react/header';`;
      const expected = `import DeprecatedHeader, {DeprecatedHeaderThemes} from '@workday/canvas-kit-labs-react/header';`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should transform JSX identifiers', () => {
      const input = `
        import Header, {DubLogoTitle, GlobalHeader} from '@workday/canvas-kit-labs-react/header';

        const CustomHeader = (props) => {
          return <Header {...props}/>;
        }

        const CustomGlobalHeader = (props) => {
          return (
            <GlobalHeader
              brand={
                <a href="#">
                  <DubLogoTitle themeColor={Header.Theme.White} />
                </a>
              }
              {...props}
            />
          );
        }
        `;
      const expected = `
        import DeprecatedHeader, {DeprecatedDubLogoTitle, DeprecatedGlobalHeader} from '@workday/canvas-kit-labs-react/header';

        const CustomHeader = (props) => {
          return <DeprecatedHeader {...props}/>;
        }

        const CustomGlobalHeader = (props) => {
          return (
            <DeprecatedGlobalHeader
              brand={
                <a href="#">
                  <DeprecatedDubLogoTitle themeColor={DeprecatedHeader.Theme.White} />
                </a>
              }
              {...props}
            />
          );
        }
      `;

      expectTransform(input, expected);
    });

    it('should transform type reference identifiers', () => {
      const input = `
        import {Themes} from '@workday/canvas-kit-labs-react/header';
    
        type CustomThemes = Themes;
      `;
      const expected = `
        import {DeprecatedHeaderThemes} from '@workday/canvas-kit-labs-react/header';
    
        type CustomThemes = DeprecatedHeaderThemes;
      `;

      expectTransform(input, expected);
    });

    it('should transform type interface declaration identifiers', () => {
      const input = `
        import {ThemeAttributes} from '@workday/canvas-kit-labs-react/header';
    
        interface CustomThemeAttributes extends ThemeAttributes {
          specialAttribute?: string;
        }
      `;
      const expected = `
        import {DeprecatedHeaderThemeAttributes} from '@workday/canvas-kit-labs-react/header';
    
        interface CustomThemeAttributes extends DeprecatedHeaderThemeAttributes {
          specialAttribute?: string;
        }
      `;
    });

    it('should transform member expression identifiers', () => {
      const input = `
        import Header, {HeaderHeight, HeaderTheme, HeaderVariant, themes} from '@workday/canvas-kit-labs-react/header';

        const height = HeaderHeight.Small;
        const theme = HeaderTheme.White;
        const variant = HeaderVariant.Full;
        const blueTheme = themes.Blue;
        const headerVariant = Header.Variant.Global;
      `;
      const expected = `
        import DeprecatedHeader, {DeprecatedHeaderHeight, DeprecatedHeaderTheme, DeprecatedHeaderVariant, deprecatedHeaderThemes} from '@workday/canvas-kit-labs-react/header';

        const height = DeprecatedHeaderHeight.Small;
        const theme = DeprecatedHeaderTheme.White;
        const variant = DeprecatedHeaderVariant.Full;
        const blueTheme = deprecatedHeaderThemes.Blue;
        const headerVariant = DeprecatedHeader.Variant.Global;
      `;

      expectTransform(input, expected);
    });
  });
});
