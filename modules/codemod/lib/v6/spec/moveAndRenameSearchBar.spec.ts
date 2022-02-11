import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../moveAndRenameSearchBar';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Move and Rename Search Bar Codemod', () => {
  context('when transforming Search Bar imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {SearchBar} from "@workday/some-other-library"`;
      const expected = `import {SearchBar} from "@workday/some-other-library"`;

      expectTransform(input, expected);
    });

    it('should transform named imports from @workday/canvas-kit-labs-react', () => {
      const input = `import {SearchBar, SearchBarProps, SearchBarState} from "@workday/canvas-kit-labs-react";`;
      const expected = `import {SearchForm, SearchFormProps, SearchFormState} from "@workday/canvas-kit-labs-react";`;

      expectTransform(input, expected);
    });

    it('should transform named imports from @workday/canvas-kit-labs-react/header', () => {
      const input = `
        import {
          SearchBar,
          SearchBarProps,
          SearchBarState,
          SearchThemeAttributes,
          SearchThemes,
        } from "@workday/canvas-kit-labs-react/header";`;
      const expected = `
        import {
          SearchForm,
          SearchFormProps,
          SearchFormState,
          SearchThemeAttributes,
          SearchThemes,
        } from "@workday/canvas-kit-labs-react/search-form";`;

      expectTransform(input, expected);
    });

    it('should transform and separate imports from @workday/canvas-kit-labs-react/header', () => {
      const input = `
        import Header, { GlobalHeader, SearchBar, SearchBarProps, SearchBarState } from "@workday/canvas-kit-labs-react/header";`;
      const expected = `
        import Header, { GlobalHeader } from "@workday/canvas-kit-labs-react/header";
        import { SearchForm, SearchFormProps, SearchFormState } from "@workday/canvas-kit-labs-react/search-form";
      `;

      expectTransform(input, expected);
    });

    it('should not alter header imports from @workday/canvas-kit-labs-react/header', () => {
      const input = `import Header, { GlobalHeader } from "@workday/canvas-kit-labs-react/header";`;
      const expected = `import Header, { GlobalHeader } from "@workday/canvas-kit-labs-react/header";`;

      expectTransform(input, expected);
    });
  });
  context('when transforming identifiers', () => {
    it('should transform JSX identifiers', () => {
      const input = `
        import {SearchBar} from "@workday/canvas-kit-labs-react";

        const CustomSearch = () => {
          return <SearchBar />;
        }
      `;
      const expected = `
        import {SearchForm} from "@workday/canvas-kit-labs-react";

        const CustomSearch = () => {
          return <SearchForm />;
        }
      `;

      expectTransform(input, expected);
    });
    it('should transform type reference identifiers', () => {
      const input = `
        import { SearchBarProps } from "@workday/canvas-kit-labs-react/header";
    
        type CustomSearchProps = SearchBarProps;
        interface AnotherSearchProps extends SearchBarProps {
          specialProp?: boolean;
        }
      `;
      const expected = `
        import { SearchFormProps } from "@workday/canvas-kit-labs-react/search-form";
    
        type CustomSearchProps = SearchFormProps;
        interface AnotherSearchProps extends SearchFormProps {
          specialProp?: boolean;
        }
      `;

      expectTransform(input, expected);
    });
  });
});
