import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../deprecateStack';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Deprecate Stack Codemod', () => {
  context('when transforming Stack import declaration', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {Stack} from '@workday/some-other-library'`;
      const expected = `import {Stack} from '@workday/some-other-library'`;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react', () => {
      const input = `
        import { Stack, StackProps } from '@workday/canvas-kit-react';
      `;
      const expected = `
        import { Flex, FlexProps } from '@workday/canvas-kit-react';
      `;

      expectTransform(input, expected);
    });

    it('should ignore non-Stack imports transform named imports from @workday/canvas-kit-react', () => {
      const input = `
        import { Grid, Stack, StackProps } from '@workday/canvas-kit-react';
      `;
      const expected = `
        import { Grid, Flex, FlexProps } from '@workday/canvas-kit-react';
      `;

      expectTransform(input, expected);
    });

    it('should not add Flex if it already exists in imports from @workday/canvas-kit-react', () => {
      const input = `
        import { Flex, Stack, StackProps } from '@workday/canvas-kit-react';
      `;
      const expected = `
        import { Flex, FlexProps } from '@workday/canvas-kit-react';
      `;

      expectTransform(input, expected);
    });

    it('should properly transform mutliple imports from @workday/canvas-kit-react into one', () => {
      const input = `
        import {
          Grid,
          Stack,
          HStack,
          VStack,
          StackProps,
          HStackProps,
          VStackProps,
          StackStyleProps,
        } from '@workday/canvas-kit-react';
      `;
      const expected = `
        import { Grid, Flex, FlexProps } from '@workday/canvas-kit-react';
      `;

      expectTransform(input, expected);
    });

    it('should properly transform named imports from @workday/canvas-kit-react/layout', () => {
      const input = `
        import { Stack, StackProps } from '@workday/canvas-kit-react';
      `;
      const expected = `
        import { Flex, FlexProps } from '@workday/canvas-kit-react';
      `;

      expectTransform(input, expected);
    });

    it('should ignore non-Stack transforms named imports from @workday/canvas-kit-react/layout', () => {
      const input = `
        import { Grid, Stack, StackProps } from '@workday/canvas-kit-react';
      `;
      const expected = `
        import { Grid, Flex, FlexProps } from '@workday/canvas-kit-react';
      `;

      expectTransform(input, expected);
    });

    it('should properly transform mutliple imports from @workday/canvas-kit-react/layout into one', () => {
      const input = `
        import {Grid,
          Stack,
          HStack,
          VStack,
          StackProps,
          HStackProps,
          VStackProps,
          StackStyleProps,
        } from '@workday/canvas-kit-react';
      `;
      const expected = `
        import { Grid, Flex, FlexProps } from '@workday/canvas-kit-react';
      `;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should properly transform Stack JSX identifiers', () => {
      const input = `
      import {Stack, HStack} from '@workday/canvas-kit-react/layout';

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
      import { Flex } from '@workday/canvas-kit-react/layout';

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

    it('should properly transform styled Stack JSX identifiers', () => {
      const input = `
      import {Stack} from '@workday/canvas-kit-react/layout';

      const StyledStack = styled(Stack)({
        alignItems: 'center',
        justifyContent: 'space-between'
      });
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      const StyledStack = styled(Flex)({
        alignItems: 'center',
        justifyContent: 'space-between'
      });
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

    it('should properly transform VStack JSX identifiers and add flexDirection attr', () => {
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
          <Flex flexDirection="column">
            Hello World
          </Flex>
        );
      };

      const AnotherVStack = (props) => {
        return <Flex {...props} flexDirection="column" />;
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

    it('should properly transform spacing keys reference identifiers', () => {
      const input = `
      import { StackProps } from '@workday/canvas-kit-react/layout';

      type CustomStackProps = StackProps;
      interface AnotherStackProps extends StackProps {};
      `;
      const expected = `
      import { FlexProps } from '@workday/canvas-kit-react/layout';

      type CustomStackProps = FlexProps;
      interface AnotherStackProps extends FlexProps {};
      `;

      expectTransform(input, expected);
    });

    it('should properly transform spacing expression reference identifiers', () => {
      const input = `
      import { Stack } from '@workday/canvas-kit-react/layout';

      <Card as={Stack} spacing="s"/>
      `;
      const expected = `
      import { Flex } from '@workday/canvas-kit-react/layout';

      <Card as={Flex} gap="s"/>
      `;

      expectTransform(input, expected);
    });

    it('should properly transform the spacing prop on specific components that extend Stack', () => {
      const input = `
      import { Breadcrumbs } from '@workday/canvas-kit-react/breadcrumbs';

      <Breadcrumbs>
        <Breadcrumbs.List spacing="s"/>
      </Breadcrumbs>
      `;
      const expected = `
      import { Breadcrumbs } from '@workday/canvas-kit-react/breadcrumbs';

      <Breadcrumbs>
        <Breadcrumbs.List gap="s"/>
      </Breadcrumbs>
      `;

      expectTransform(input, expected);
    });

    it('should properly transform the spacing prop on specific components that extend Stack', () => {
      const input = `
      import { ActionBar } from '@workday/canvas-kit-react/action-bar';

      <ActionBar>
        <ActionBar.List spacing="s"/>
      </ActionBar>
      `;
      const expected = `
      import { ActionBar } from '@workday/canvas-kit-react/action-bar';

      <ActionBar>
        <ActionBar.List gap="s"/>
      </ActionBar>
      `;

      expectTransform(input, expected);
    });

    it('should not effect specific components that do not extend Stack', () => {
      const input = `
      import { Grid, Flex } from '@workday/canvas-kit-react/layout';
      import { ActionBar } from '@workday/canvas-kit-react/action-bar';

      <Grid gridGap="l">
        <ActionBar>
          <ActionBar.List spacing="s"/>
        </ActionBar>
      </Grid>
      `;
      const expected = `
      import { Grid, Flex } from '@workday/canvas-kit-react/layout';
      import { ActionBar } from '@workday/canvas-kit-react/action-bar';

      <Grid gridGap="l">
        <ActionBar>
          <ActionBar.List gap="s"/>
        </ActionBar>
      </Grid>
      `;

      expectTransform(input, expected);
    });

    it('should properly transform spacing props in createComponent', () => {
      const input = `
      import { StackProps } from '@workday/canvas-kit-react/layout';

      export const Container = createComponent('div')({
        displayName: 'Container',
        Component: (
          {
            children,
            flexDirection = 'row',
            width = '100%',
            spacing,
            marginRight,
            ...elemProps
          }: StackProps,
          ref,
          Element
        ) => {

          return (
            <StyledContainer
              as={Element}
              ref={ref}
              flexDirection={flexDirection}
              spacing={spacing}
              {...elemProps}
            >
              {items}
            </StyledContainer>
          );
        },
      })
      `;
      const expected = `
      import { FlexProps } from '@workday/canvas-kit-react/layout';

      export const Container = createComponent('div')({
        displayName: 'Container',
        Component: (
          {
            children,
            flexDirection = 'row',
            width = '100%',
            gap,
            marginRight,
            ...elemProps
          }: FlexProps,
          ref,
          Element
        ) => {

          return (
            <StyledContainer
              as={Element}
              ref={ref}
              flexDirection={flexDirection}
              gap={gap}
              {...elemProps}
            >
              {items}
            </StyledContainer>
          );
        },
      })
      `;

      expectTransform(input, expected);
    });

    it('should not transform other keys reference identifiers', () => {
      const input = `
      import { GridProps } from '@workday/canvas-kit-react/layout';

      type CustomStackProps = GridProps;
      interface AnotherStackProps extends GridProps {
        children?: GridProps['gridColumnGap'];
      }
      `;
      const expected = `
      import { GridProps } from '@workday/canvas-kit-react/layout';

      type CustomStackProps = GridProps;
      interface AnotherStackProps extends GridProps {
        children?: GridProps['gridColumnGap'];
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

      export const BasicStack = () => (
        <Stack border="solid 2px" shouldWrapChildren>
          Hello World
        </Stack>
      );
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Flex border="solid 2px" >
          Hello World
        </Flex>
      );
      `;

      expectTransform(input, expected);
    });

    it('should properly transform shouldWrapChildren identifiers', () => {
      const input = `
      import {HStack} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <HStack border="solid 2px" shouldWrapChildren>
          Hello World
        </HStack>
      );
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Flex border="solid 2px" >
          Hello World
        </Flex>
      );
      `;

      expectTransform(input, expected);
    });

    it('should properly transform shouldWrapChildren identifiers', () => {
      const input = `
      import {VStack} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <VStack border="solid 2px" shouldWrapChildren>
          Hello World
        </VStack>
      );
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Flex border="solid 2px"  flexDirection="column">
          Hello World
        </Flex>
      );
      `;

      expectTransform(input, expected);
    });

    it('should properly transform spacing identifiers to gap', () => {
      const input = `
      import {Stack} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Stack border="solid 2px" spacing="l">
          Hello World
        </Stack>
      );
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Flex border="solid 2px" gap="l">
          Hello World
        </Flex>
      );
      `;

      expectTransform(input, expected);
    });

    it('should properly transform spacing identifiers to gap', () => {
      const input = `
      import {VStack} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <VStack border="solid 2px" spacing="l">
          Hello World
        </VStack>
      );
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Flex border="solid 2px" gap="l" flexDirection="column">
          Hello World
        </Flex>
      );
      `;

      expectTransform(input, expected);
    });

    it('should properly transform spacing identifiers to gap', () => {
      const input = `
      import {HStack} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <HStack border="solid 2px" spacing="l">
          Hello World
        </HStack>
      );
      `;

      const expected = `
      import {Flex} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Flex border="solid 2px" gap="l">
          Hello World
        </Flex>
      );
      `;

      expectTransform(input, expected);
    });

    it('should properly transform spacing identifiers to gap in nested components', () => {
      const input = `
      import {HStack, Stack} from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <VStack spacing='xxxs'>
          <Stack spacing='s' >
            Hello World
          </Stack>
        </VStack>
      );
      `;

      const expected = `
      import { Flex } from '@workday/canvas-kit-react/layout';

      export const BasicStack = () => (
        <Flex gap='xxxs' flexDirection="column">
          <Flex gap='s' >
            Hello World
          </Flex>
        </Flex>
      );
      `;

      expectTransform(input, expected);
    });
  });
});
