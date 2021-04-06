import {expectTransformFactory} from './expectTransformFactory';
import transform from '../removeButtonEnums';

const expectTransform = expectTransformFactory(transform);

describe('removeButtonEnum', () => {
  it('should remove variant, size, and position enum imports since they no longer exist', () => {
    const input = `
      import {
        Button,
        ButtonVariant,
        IconButtonVariant,
        OutlineButtonVariant,
        DropdownButtonVariant,
        TextButtonVariant,
        DeprecatedButtonVariant,
        ButtonIconPosition,
        ButtonSize,
      } from '@workday/canvas-kit-react/button';
    `;

    const expected = `
      import { Button } from '@workday/canvas-kit-react/button';
    `;

    expectTransform(input, expected);
  });

  it('should replace enum types with the equivalent type union of string literals', () => {
    const input = `
      import '@workday/canvas-kit-react/button'

      export interface MyButtonProps {
        buttonVariant?: ButtonVariant
        buttonIconPosition?: ButtonIconPosition
        buttonIconSize?: ButtonIconSize
        outlineButtonVariant?: OutlineButtonVariant
        dropdownButtonVariant?: DropdownButtonVariant
        iconButtonVariant?: IconButtonVariant
        textButtonVariant?: TextButtonVariant
        deprecatedButtonVariant?: DeprecatedButtonVariant
      }
    `;

    const expected = `
      import '@workday/canvas-kit-react/button'

      export interface MyButtonProps {
        buttonVariant?: "primary" | "secondary"
        buttonIconPosition?: "left" | "right"
        buttonIconSize?: "small" | "medium" | "large"
        outlineButtonVariant?: "primary" | "secondary" | "inverse"
        dropdownButtonVariant?: "primary" | "secondary"
        iconButtonVariant?: "square" | "squareFilled" | "plain" | "circle" | "circleFilled" | "inverse" | "inverseFilled"
        textButtonVariant?: "text" | "inverse"
        deprecatedButtonVariant?: "primary" | "secondary" | "delete"
      }
    `;

    expectTransform(input, expected);
  });

  it('should replace enum types in a "type" construct', () => {
    const input = `
      import '@workday/canvas-kit-react/button'

      export type MyButtonProps = {
        variant?: ButtonVariant
      }
    `;

    const expected = `
      import '@workday/canvas-kit-react/button'

      export type MyButtonProps = {
        variant?: "primary" | "secondary"
      }
    `;

    expectTransform(input, expected);
  });

  it('should replace enum types in a function declaration', () => {
    const input = `
      import '@workday/canvas-kit-react/button'

      function foo(variant: ButtonVariant) {
        return variant
      }
    `;

    const expected = `
      import '@workday/canvas-kit-react/button'

      function foo(variant: "primary" | "secondary") {
        return variant
      }
    `;

    expectTransform(input, expected);
  });

  it('should replace enum types that have been renamed', () => {
    const input = `
      import { Button, ButtonVariant as CanvasButtonVariant } from '@workday/canvas-kit-react/button';

      function foo(variant: CanvasButtonVariant) {
        return variant
      }
    `;

    const expected = `
      import { Button } from '@workday/canvas-kit-react/button';

      function foo(variant: "primary" | "secondary") {
        return variant
      }
    `;

    expectTransform(input, expected);
  });

  it('should handle type reference rewriting', () => {
    const input = `
      import { ButtonVariant, Button } from '@workday/canvas-kit-react/button';

      export interface MyButtonProps {
        variant?: ButtonVariant
      }

      function foo(variant: ButtonVariant) {
        return foo;
      }
    `;

    const expected = `
      import { Button } from '@workday/canvas-kit-react/button';

      export interface MyButtonProps {
        variant?: "primary" | "secondary"
      }

      function foo(variant: "primary" | "secondary") {
        return foo;
      }
    `;

    expectTransform(input, expected);
  });

  it('should handle renaming of named imports', () => {
    const input = `
      import { Button as StyledButton } from '@workday/canvas-kit-react/button';

      const MyComponent = () => {
        return <>
          <StyledButton variant={StyledButton.Variant.Primary} />
        </>;
      }
    `;

    const expected = `
      import { Button as StyledButton } from '@workday/canvas-kit-react/button';

      const MyComponent = () => {
        return <>
          <StyledButton variant={"primary"} />
        </>;
      }
    `;

    expectTransform(input, expected);
  });

  it('should handle renaming of a MemberExpression of an enum to a string literal', () => {
    const input = `
      import '@workday/canvas-kit-react/button'

      const foo = {
        variant: ButtonVariant.Primary
      }
    `;

    const expected = `
      import '@workday/canvas-kit-react/button'

      const foo = {
        variant: "primary"
      }
    `;

    expectTransform(input, expected);
  });

  it('should remove `beta_Button` in favor of `Button', () => {
    const input = `
      import { beta_Button as Button } from '@workday/canvas-kit-react/button';
    `;

    const expected = `
      import { Button } from '@workday/canvas-kit-react/button';
    `;

    expectTransform(input, expected);
  });

  it('should rename beta Button if it is locally renamed', () => {
    const input = `
      import { beta_Button as BetaButton } from '@workday/canvas-kit-react/button';
    `;

    const expected = `
      import { Button as BetaButton } from '@workday/canvas-kit-react/button';
    `;

    expectTransform(input, expected);
  });

  it('should handle all variant renaming', () => {
    const input = `
      import {
        Button,
        beta_Button as BetaButton,
        DeleteButton,
        deprecated_Button as DeprecatedButton,
        DropdownButton,
        HighlightButton,
        OutlineButton,
        IconButton,
        TextButton,
        Hyperlink,
        ButtonVariant,
        IconButtonVariant,
        OutlineButtonVariant,
        DropdownButtonVariant,
        TextButtonVariant,
        DeprecatedButtonVariant,
        ButtonIconPosition,
        ButtonSize,
      } from '@workday/canvas-kit-react/button';

      const MyComponent = () => {
        return <>
          <Button variant={ButtonVariant.Primary} />
          <Button variant={ButtonVariant.Secondary} />
          <Button variant={Button.Variant.Primary} />
          <Button variant={Button.Variant.Secondary} />
          <OutlineButton variant={OutlineButtonVariant.Primary} />
          <OutlineButton variant={OutlineButtonVariant.Secondary} />
          <OutlineButton variant={OutlineButtonVariant.Inverse} />
          <OutlineButton variant={OutlineButton.Variant.Primary} />
          <OutlineButton variant={OutlineButton.Variant.Secondary} />
          <OutlineButton variant={OutlineButton.Variant.Inverse} />
          <DropdownButton variant={DropdownButtonVariant.Primary} />
          <DropdownButton variant={DropdownButtonVariant.Secondary} />
          <DropdownButton variant={DropdownButton.Variant.Primary} />
          <DropdownButton variant={DropdownButton.Variant.Secondary} />
          <IconButton variant={IconButtonVariant.Square} />
          <IconButton variant={IconButtonVariant.SquareFilled} />
          <IconButton variant={IconButtonVariant.Plain} />
          <IconButton variant={IconButtonVariant.Circle} />
          <IconButton variant={IconButtonVariant.CircleFilled} />
          <IconButton variant={IconButtonVariant.Inverse} />
          <IconButton variant={IconButtonVariant.InverseFilled} />
          <IconButton variant={IconButton.Variant.Square} />
          <IconButton variant={IconButton.Variant.SquareFilled} />
          <IconButton variant={IconButton.Variant.Plain} />
          <IconButton variant={IconButton.Variant.Circle} />
          <IconButton variant={IconButton.Variant.CircleFilled} />
          <IconButton variant={IconButton.Variant.Inverse} />
          <IconButton variant={IconButton.Variant.InverseFilled} />
          <TextButton variant={TextButtonVariant.Default} />
          <TextButton variant={TextButtonVariant.Inverse} />
          <TextButton variant={TextButton.Variant.Default} />
          <TextButton variant={TextButton.Variant.Inverse} />
          <Hyperlink variant={Hyperlink.Variant.Default} />
          <Hyperlink variant={Hyperlink.Variant.Inverse} />
          <DeprecatedButton variant={DeprecatedButtonVariant.Primary} />
          <DeprecatedButton variant={DeprecatedButtonVariant.Secondary} />
          <DeprecatedButton variant={DeprecatedButtonVariant.Delete} />
          <DeprecatedButton variant={DeprecatedButton.Variant.Primary} />
          <DeprecatedButton variant={DeprecatedButton.Variant.Secondary} />
          <DeprecatedButton variant={DeprecatedButton.Variant.Delete} />
          <Button iconPosition={ButtonIconPosition.Left} />
          <Button iconPosition={ButtonIconPosition.Right} />
          <TextButton iconPosition={TextButton.IconPosition.Left} />
          <TextButton iconPosition={TextButton.IconPosition.Right} />
          <Button size={ButtonSize.Small} />
          <Button size={ButtonSize.Medium} />
          <Button size={ButtonSize.Large} />
          <Button size={Button.Size.Small} />
          <Button size={Button.Size.Medium} />
          <Button size={Button.Size.Large} />
          <IconButton size={IconButton.Size.Small} />
          <IconButton size={IconButton.Size.Medium} />
          <IconButton size={IconButton.Size.Large} />
          <DeleteButton size={DeleteButton.Size.Small} />
          <DeleteButton size={DeleteButton.Size.Medium} />
          <DeleteButton size={DeleteButton.Size.Large} />
          <OutlineButton size={OutlineButton.Size.Small} />
          <OutlineButton size={OutlineButton.Size.Medium} />
          <OutlineButton size={OutlineButton.Size.Large} />
          <TextButton size={TextButton.Size.Small} />
          <TextButton size={TextButton.Size.Medium} />
          <HighlightButton size={HighlightButton.Size.Small} />
          <HighlightButton size={HighlightButton.Size.Medium} />
          <HighlightButton size={HighlightButton.Size.Large} />
          <DropdownButton size={DropdownButton.Size.Medium} />
          <DropdownButton size={DropdownButton.Size.Large} />
          <DeprecatedButton size={ButtonSize.Small} />
          <DeprecatedButton size={ButtonSize.Medium} />
          <DeprecatedButton size={ButtonSize.Large} />
          <DeprecatedButton size={DeprecatedButton.Size.Small} />
          <DeprecatedButton size={DeprecatedButton.Size.Medium} />
          <DeprecatedButton size={DeprecatedButton.Size.Large} />
        </>;
      }
    `;

    const expected = `
      import {
        Button,
        Button as BetaButton,
        DeleteButton,
        deprecated_Button as DeprecatedButton,
        DropdownButton,
        HighlightButton,
        OutlineButton,
        IconButton,
        TextButton,
        Hyperlink,
      } from '@workday/canvas-kit-react/button';

      const MyComponent = () => {
        return <>
          <Button variant={"primary"} />
          <Button variant={"secondary"} />
          <Button variant={"primary"} />
          <Button variant={"secondary"} />
          <OutlineButton variant={"primary"} />
          <OutlineButton variant={"secondary"} />
          <OutlineButton variant={"inverse"} />
          <OutlineButton variant={"primary"} />
          <OutlineButton variant={"secondary"} />
          <OutlineButton variant={"inverse"} />
          <DropdownButton variant={"primary"} />
          <DropdownButton variant={"secondary"} />
          <DropdownButton variant={"primary"} />
          <DropdownButton variant={"secondary"} />
          <IconButton variant={"square"} />
          <IconButton variant={"squareFilled"} />
          <IconButton variant={"plain"} />
          <IconButton variant={"circle"} />
          <IconButton variant={"circleFilled"} />
          <IconButton variant={"inverse"} />
          <IconButton variant={"inverseFilled"} />
          <IconButton variant={"square"} />
          <IconButton variant={"squareFilled"} />
          <IconButton variant={"plain"} />
          <IconButton variant={"circle"} />
          <IconButton variant={"circleFilled"} />
          <IconButton variant={"inverse"} />
          <IconButton variant={"inverseFilled"} />
          <TextButton variant={"text"} />
          <TextButton variant={"inverse"} />
          <TextButton variant={"text"} />
          <TextButton variant={"inverse"} />
          <Hyperlink variant={"text"} />
          <Hyperlink variant={"inverse"} />
          <DeprecatedButton variant={"primary"} />
          <DeprecatedButton variant={"secondary"} />
          <DeprecatedButton variant={"delete"} />
          <DeprecatedButton variant={"primary"} />
          <DeprecatedButton variant={"secondary"} />
          <DeprecatedButton variant={"delete"} />
          <Button iconPosition={"left"} />
          <Button iconPosition={"right"} />
          <TextButton iconPosition={"left"} />
          <TextButton iconPosition={"right"} />
          <Button size={"small"} />
          <Button size={"medium"} />
          <Button size={"large"} />
          <Button size={"small"} />
          <Button size={"medium"} />
          <Button size={"large"} />
          <IconButton size={"small"} />
          <IconButton size={"medium"} />
          <IconButton size={"large"} />
          <DeleteButton size={"small"} />
          <DeleteButton size={"medium"} />
          <DeleteButton size={"large"} />
          <OutlineButton size={"small"} />
          <OutlineButton size={"medium"} />
          <OutlineButton size={"large"} />
          <TextButton size={"small"} />
          <TextButton size={"medium"} />
          <HighlightButton size={"small"} />
          <HighlightButton size={"medium"} />
          <HighlightButton size={"large"} />
          <DropdownButton size={"medium"} />
          <DropdownButton size={"large"} />
          <DeprecatedButton size={"small"} />
          <DeprecatedButton size={"medium"} />
          <DeprecatedButton size={"large"} />
          <DeprecatedButton size={"small"} />
          <DeprecatedButton size={"medium"} />
          <DeprecatedButton size={"large"} />
        </>;
      }
    `;

    expectTransform(input, expected);
  });
});
