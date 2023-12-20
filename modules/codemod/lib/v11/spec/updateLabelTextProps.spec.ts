import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../updateLabelTextProps';

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Transfor Label Codemod', () => {
  it('should ignore non-canvas-kit imports', () => {
    const input = `
        import {LabelText} from '@workday/any-other-package';

        const Label = () => {
          return (
            <LabelText typeLevel="body.medium">My Label</LabelText>
          );
        };
      `;

    const expected = `
        import {LabelText} from '@workday/any-other-package';

        const Label = () => {
          return (
            <LabelText typeLevel="body.medium">My Label</LabelText>
          );
        };
      `;

    expectTransform(input, expected);
  });

  it('should transform LabelText from main package', () => {
    const input = `
        import {LabelText} from '@workday/canvas-kit-react';

        const Label = () => {
          return <LabelText typeLevel="body.medium">My Label</LabelText>;
        };
      `;

    const expected = `
        import {Text} from '@workday/canvas-kit-react';

        const Label = () => {
          return <Text as="label" typeLevel="body.medium">My Label</Text>;
        };
      `;

    expectTransform(input, expected);
  });

  it('should transform LabelText from text package', () => {
    const input = `
        import {LabelText} from '@workday/canvas-kit-react/text';

        const Label = () => {
          return <LabelText typeLevel="body.medium">My Label</LabelText>;
        };
      `;

    const expected = `
        import {Text} from '@workday/canvas-kit-react/text';

        const Label = () => {
          return <Text as="label" typeLevel="body.medium">My Label</Text>;
        };
      `;

    expectTransform(input, expected);
  });

  it('should transform renamed LabelText from text package', () => {
    const input = `
        import {LabelText as CanvasLabel} from '@workday/canvas-kit-react/text';

        const Label = () => {
          return <CanvasLabel typeLevel="body.medium">My Label</CanvasLabel>;
        };
      `;

    const expected = `
        import {Text as CanvasLabel} from '@workday/canvas-kit-react/text';

        const Label = () => {
          return <CanvasLabel as="label" typeLevel="body.medium">My Label</CanvasLabel>;
        };
      `;

    expectTransform(input, expected);
  });

  it('should transform styled LabelText from text package', () => {
    const input = `
        import {LabelText} from '@workday/canvas-kit-react/text';

        const StyledLabel = styled(LabelText)({color: "#red"});

        const Label = () => {
          return <StyledLabel typeLevel="body.medium">My Label</StyledLabel>;
        };
      `;

    const expected = `
        import {Text} from '@workday/canvas-kit-react/text';

        const StyledLabel = styled(Text)({color: "#red"});

        const Label = () => {
          return <StyledLabel as="label" typeLevel="body.medium">My Label</StyledLabel>;
        };
      `;

    expectTransform(input, expected);
  });

  it('should transform multiple styled LabelText from text package', () => {
    const input = `
        import {LabelText} from '@workday/canvas-kit-react/text';

        const StyledLabel = styled(LabelText)({color: "#red"});

        <>
          <StyledLabel>My Label</StyledLabel>;
          <StyledLabel typeLevel="body.medium">My Label</StyledLabel>;
        </>
      `;

    const expected = `
        import { LabelText, Text } from '@workday/canvas-kit-react/text';

        const StyledLabel = styled(LabelText)({color: "#red"});

        const StyledModifiedText = styled(Text)({color: "#red"});

        <>
          <StyledLabel>My Label</StyledLabel>;
          <StyledModifiedText as="label" typeLevel="body.medium">My Label</StyledModifiedText>;
        </>
      `;

    expectTransform(input, expected);
  });

  it('should not remove LabelText from import if there are other LabelText components', () => {
    const input = `
        import { LabelText } from '@workday/canvas-kit-react/text';

        <>
          <LabelText>Original Label</LabelText>
          <LabelText typeLevel="body.medium">My Label</LabelText>
        </>
      `;

    const expected = `
        import { LabelText, Text } from '@workday/canvas-kit-react/text';

        <>
          <LabelText>Original Label</LabelText>
          <Text as="label" typeLevel="body.medium">My Label</Text>
        </>
      `;

    expectTransform(input, expected);
  });

  it('should not change other props', () => {
    const input = `
      import {LabelText} from '@workday/canvas-kit-react/text';

      const Label = () => {
        return (
          <LabelText typeLevel="body.medium" as="p" aria-label="My accessible text" className="my-label">
            My Label
          </LabelText>
        );
      };

      const OtherLabel = () => {
        return (
          <LabelText 
            as="p" 
            aria-label="My accessible text" 
            className="my-label"
            color={colors.blueberry400}
            typeLevel="body.medium" 
          >
            My Label
          </LabelText>
        );
      };
    `;

    const expected = `
      import {Text} from '@workday/canvas-kit-react/text';

      const Label = () => {
        return (
          <Text typeLevel="body.medium" as="p" aria-label="My accessible text" className="my-label">
            My Label
          </Text>
        );
      };

      const OtherLabel = () => {
        return (
          <Text 
            as="p" 
            aria-label="My accessible text" 
            className="my-label"
            color={colors.blueberry400}
            typeLevel="body.medium" 
          >
            My Label
          </Text>
        );
      };
    `;

    expectTransform(input, expected);
  });

  it('should apply correct cursor, disabled, variant styles', () => {
    const input = `
        import { LabelText } from '@workday/canvas-kit-react/text';

        <LabelText typeLevel="body.medium" disabled={disabled} cursor="pointer">My Label</LabelText>
      `;

    const expected = `
        import { Text } from '@workday/canvas-kit-react/text';

        <Text as="label" typeLevel="body.medium" style={{
                color: disabled ? "#a1aab3" : undefined,
                cursor: disabled ? "default" : "pointer"
        }}>My Label</Text>
      `;

    expectTransform(input, expected);
  });

  it('should apply correct cursor, disabled, variant styles', () => {
    const input = `
    import { LabelText } from '@workday/canvas-kit-react/text';

    <>
      <LabelText typeLevel="body.medium" disabled={disabled}>Original Label</LabelText>
    </>
    `;

    const expected = `
    import { Text } from '@workday/canvas-kit-react/text';

    <>
      <Text
        as="label"
        typeLevel="body.medium"
        style={{
          color: disabled ? "#a1aab3" : undefined
        }}>Original Label</Text>
    </>
    `;

    expectTransform(input, expected);
  });

  it('should apply correct cursor, disabled, variant styles', () => {
    const input = `
    import { LabelText } from '@workday/canvas-kit-react/text';

    <>
      <LabelText typeLevel="body.medium" variant={variant} disabled={disabled}>Original Label</LabelText>
    </>
    `;

    const expected = `
    import { Text } from '@workday/canvas-kit-react/text';

    <>
      <Text
        as="label"
        typeLevel="body.medium"
        variant={variant}
        style={{
          color: disabled && variant !== "inverse" ? "#a1aab3" : undefined,
          opacity: disabled && variant === "inverse" ? "0.4" : 1
        }}>Original Label</Text>
    </>
    `;

    expectTransform(input, expected);
  });

  it('should apply correct cursor, disabled, variant styles', () => {
    const input = `
    import { LabelText } from '@workday/canvas-kit-react/text';

    <>
      <LabelText typeLevel="body.medium" disabled={disabled} variant="inverse">Original Label</LabelText>
    </>
    `;

    const expected = `
    import { Text } from '@workday/canvas-kit-react/text';

    <>
      <Text
        as="label"
        typeLevel="body.medium"
        variant="inverse"
        style={{
          opacity: disabled ? "0.4" : 1
        }}>Original Label</Text>
    </>
    `;

    expectTransform(input, expected);
  });
});
