import {stripIndent} from 'common-tags';

import transform from '../replaceDeprecatedStyleProps';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('replace deprecated style props', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
      import {Flex} from "any-other-package";

      <Flex width={100} />
    `;

    const expected = stripIndent`
      import {Flex} from "any-other-package";

      <Flex width={100} />
    `;

    expectTransform(input, expected);
  });

  it('should change deprecated style props in main package', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex width={100} />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex cs={{
        width: 100
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should change deprecated style props in preview package', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-preview-react/layout";

      <Flex width={100} />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-preview-react/layout";

      <Flex cs={{
        width: 100
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should change deprecated style props in labs package', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-labs-react/layout";

      <Flex width={100} />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-labs-react/layout";

      <Flex cs={{
        width: 100
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should change multiple deprecated style props', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex width={100} height={100} />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex
        cs={{
          width: 100,
          height: 100
        }} />
    `;

    expectTransform(input, expected);
  });

  it('should add deprecated style props to existing cs prop', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex height={100} cs={{
        width: 100
      }} />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex cs={{
        width: 100,
        height: 100
      }} />
    `;
  });

  it('should change shorthand to token values', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex depth={1} marginX={10} background='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      import { system } from "@workday/canvas-tokens-web";

      <Flex
        cs={{
          boxShadow: system.depth[1],
          marginInline: 10,
          background: system.color.bg.default
        }} />
    `;

    expectTransform(input, expected);
  });

  it('should change shorthand to token values', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex background='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      import { system } from "@workday/canvas-tokens-web";

      <Flex cs={{
        background: system.color.bg.default
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should change shorthand to token values', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex padding='s' />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      import { system } from "@workday/canvas-tokens-web";

      <Flex cs={{
        padding: system.space.x4
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should change inline and block values to correct property', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      <Flex paddingX='s' />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";

      import { system } from "@workday/canvas-tokens-web";

      <Flex cs={{
        paddingInline: system.space.x4
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should not change style prop that related to stencils', () => {
    const input = stripIndent`
      import {Graphic} from "@workday/canvas-kit-react/icon";

      <Graphic width={100} height={100} />
    `;

    const expected = stripIndent`
      import {Graphic} from "@workday/canvas-kit-react/icon";

      <Graphic width={100} height={100} />
    `;

    expectTransform(input, expected);
  });

  it('should handle styled component correctly', () => {
    const input = stripIndent`
      import {Menu} from "@workday/canvas-kit-react/menu";

      const StyledMenu = styled(Menu)({});

      <StyledMenu width={100} background='frenchVanilla100' cs={{height: '1rem'}} />
    `;

    const expected = stripIndent`
      import {Menu} from "@workday/canvas-kit-react/menu";

      import { system } from "@workday/canvas-tokens-web";

      const StyledMenu = styled(Menu)({});

      <StyledMenu
        cs={{
          height: '1rem',
          width: 100,
          background: system.color.bg.default
        }} />
    `;

    expectTransform(input, expected);
  });

  it('should handle subcomponent correctly', () => {
    const input = stripIndent`
      import {Menu} from "@workday/canvas-kit-react/form-field";

      <Menu.Card minWidth={100} background='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {Menu} from "@workday/canvas-kit-react/form-field";

      import { system } from "@workday/canvas-tokens-web";

      <Menu.Card minWidth={100} cs={{
        background: system.color.bg.default
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should handle component with as correctly', () => {
    const input = stripIndent`
      import {FormField} from "@workday/canvas-kit-react/form-field";
      import {TextInput} from "@workday/canvas-kit-react/text-input";

      <FormField.Input as={TextInput} width={100} background='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {FormField} from "@workday/canvas-kit-react/form-field";
      import { system } from "@workday/canvas-tokens-web";
      import {TextInput} from "@workday/canvas-kit-react/text-input";

      <FormField.Input as={TextInput} width={100} cs={{
        background: system.color.bg.default
      }} />
    `;

    expectTransform(input, expected);
  });

  it('should handle component with as as subcomponent correctly', () => {
    const input = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";
      import {Skeleton} from "@workday/canvas-kit-react/skeleton";

      <Flex as={Skeleton.Header} width={100} backgroundColor='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {Flex} from "@workday/canvas-kit-react/layout";
      import {Skeleton} from "@workday/canvas-kit-react/skeleton";

      <Flex as={Skeleton.Header} width={100} backgroundColor='frenchVanilla100' />
    `;

    expectTransform(input, expected);
  });

  it('should handle renamed component correctly', () => {
    const input = stripIndent`
      import {Flex as CanvasFlex} from "@workday/canvas-kit-react/layout";

      <CanvasFlex width={100} backgroundColor='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {Flex as CanvasFlex} from "@workday/canvas-kit-react/layout";

      import { system } from "@workday/canvas-tokens-web";

      <CanvasFlex
        cs={{
          width: 100,
          backgroundColor: system.color.bg.default
        }} />
    `;

    expectTransform(input, expected);
  });

  it('should handle renamed component correctly', () => {
    const input = stripIndent`
      import {Skeleton as CanvasSkeleton} from "@workday/canvas-kit-react/skeleton";

      <CanvasSkeleton.Header width={100} backgroundColor='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {Skeleton as CanvasSkeleton} from "@workday/canvas-kit-react/skeleton";

      <CanvasSkeleton.Header width={100} backgroundColor='frenchVanilla100' />
    `;

    expectTransform(input, expected);
  });

  it('should handle renamedcomponent with as correctly', () => {
    const input = stripIndent`
      import {FormField as CanvasFormField} from "@workday/canvas-kit-react/form-field";
      import {TextInput as CanvasTextInput} from "@workday/canvas-kit-react/text-input";

      <CanvasFormField.Input as={CanvasTextInput} width={100} background='frenchVanilla100' />
    `;

    const expected = stripIndent`
      import {FormField as CanvasFormField} from "@workday/canvas-kit-react/form-field";
      import { system } from "@workday/canvas-tokens-web";
      import {TextInput as CanvasTextInput} from "@workday/canvas-kit-react/text-input";

      <CanvasFormField.Input as={CanvasTextInput} width={100} cs={{
        background: system.color.bg.default
      }} />
    `;

    expectTransform(input, expected);
  });
});
