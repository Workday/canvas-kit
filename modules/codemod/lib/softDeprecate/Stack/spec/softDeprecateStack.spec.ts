import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../softDeprecateStack';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate Stack Codemod', () => {
  context('when transforming Stack imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {Stack} from '@workday/some-other-library'`;
      const expected = `import {Stack} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react', () => {
      const input = `
        import {
          Stack,
          HStack,
          VStack,
          StackProps,
          HStackProps,
          VStackProps,
          StackStyleProps,
        } from '@workday/canvas-kit-react'
      `;
      const expected = `
        import {
          Flex,
          Flex,
          Flex,
          FlexProps,
          FlexProps,
          FlexProps,
          FlexProps,
        } from '@workday/canvas-kit-react'
      `;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react/layout', () => {
      const input = `
        import {
          Stack,
          HStack,
          VStack,
          StackProps,
          HStackProps,
          VStackProps,
          StackStyleProps,
        } from '@workday/canvas-kit-react/layout'
      `;
      const expected = `
        import {
          Flex,
          Flex,
          Flex,
          FlexProps,
          FlexProps,
          FlexProps,
          FlexProps,
        } from '@workday/canvas-kit-react/layout'
      `;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform Stack JSX identifiers', () => {
      const input = `
      import {Stack} from '@workday/canvas-kit-react/layout';

      const CustomStack = () => {
        return (
          <Stack>
            Hello World
          </Stack>
        );
      };

      const AnotherStack = (props) => {
        return <Stack {...props} />;
      }
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      const CustomStack = () => {
        return (
          <Flex>
            Hello World
          </Flex>
        );
      };

      const AnotherStack = (props) => {
        return <Flex {...props} />;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform HStack JSX identifiers', () => {
      const input = `
      import {HStack} from '@workday/canvas-kit-react/layout';

      const CustomHStack = () => {
        return (
          <HStack>
            Hello World
          </HStack>
        );
      };

      const AnotherHStack = (props) => {
        return <HStack {...props} />;
      }
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      const CustomHStack = () => {
        return (
          <Flex>
            Hello World
          </Flex>
        );
      };

      const AnotherHStack = (props) => {
        return <Flex {...props} />;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform VStack JSX identifiers', () => {
      const input = `
      import {VStack} from '@workday/canvas-kit-react/layout';

      const CustomVStack = () => {
        return (
          <VStack>
            Hello World
          </VStack>
        );
      };

      const AnotherVStack = (props) => {
        return <VStack {...props} />;
      }
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      const CustomVStack = () => {
        return (
          <Flex>
            Hello World
          </Flex>
        );
      };

      const AnotherVStack = (props) => {
        return <Flex {...props} />;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform StackProps type reference identifiers', () => {
      const input = `
      import { StackProps } from '@workday/canvas-kit-react/layout';

      type CustomStackProps = StackProps;
      interface AnotherStackProps extends StackProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { FlexProps } from '@workday/canvas-kit-react/layout';

      type CustomStackProps = FlexProps;
      interface AnotherStackProps extends FlexProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform HStackProps type reference identifiers', () => {
      const input = `
      import { HStackProps } from '@workday/canvas-kit-react/layout';

      type CustomHStackProps = HStackProps;
      interface AnotherHStackProps extends HStackProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { FlexProps } from '@workday/canvas-kit-react/layout';

      type CustomHStackProps = FlexProps;
      interface AnotherHStackProps extends FlexProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform VStackProps type reference identifiers', () => {
      const input = `
      import { VStackProps } from '@workday/canvas-kit-react/layout';

      type CustomVStackProps = VStackProps;
      interface AnotherVStackProps extends VStackProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { FlexProps } from '@workday/canvas-kit-react/layout';

      type CustomVStackProps = FlexProps;
      interface AnotherVStackProps extends FlexProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform StackStyleProps type reference identifiers', () => {
      const input = `
      import { StackStyleProps } from '@workday/canvas-kit-react/layout';

      type CustomStyleProps = StackStyleProps;
      interface AnotherStyleProps extends StackStyleProps {
        specialProp?: boolean;
      }
      `;
      const expected = `
      import { FlexProps } from '@workday/canvas-kit-react/layout';

      type CustomStyleProps = FlexProps;
      interface AnotherStyleProps extends FlexProps {
        specialProp?: boolean;
      }
      `;

      expectTransform(input, expected);
    });

    it('should properly transform shouldWrapChildren identifiers', () => {
      const input = `
      import {Stack} from '@workday/canvas-kit-react/layout';

      const CustomStack = () => {
        return (
          <Stack shouldWrapChildren>
            Hello World
          </Stack>
        );
      };

      const AnotherStack = (props) => {
        return <Stack {...props} />;
      }
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      const CustomStack = () => {
        return (
          <Flex flexWrap="wrap">
            Hello World
          </Flex>
        );
      };

      const AnotherStack = (props) => {
        return <Flex {...props} />;
      }
      `;

      expectTransform(input, expected);
    });
  });
});
