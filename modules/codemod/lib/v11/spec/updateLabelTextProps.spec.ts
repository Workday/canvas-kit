import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../updateLabelTextProps';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Transfor Label Codemod', () => {
  context('should replace LabelText with typeLevel prop by type level component', () => {
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

      expectTransform(input, expected); //?
    });

    it('should transform LabelText from main package', () => {
      const input = `
        import {LabelText} from '@workday/canvas-kit-react';

        const Label = () => {
          return <LabelText typeLevel="body.medium">My Label</LabelText>;
        };
      `;

      const expected = `
        import {BodyText} from '@workday/canvas-kit-react';

        const Label = () => {
          return <BodyText size="medium">My Label</BodyText>;
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
        import {BodyText} from '@workday/canvas-kit-react/text';

        const Label = () => {
          return <BodyText size="medium">My Label</BodyText>;
        };
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
        import { LabelText, BodyText } from '@workday/canvas-kit-react/text';

        <>
          <LabelText>Original Label</LabelText>
          <BodyText size="medium">My Label</BodyText>
        </>
      `;

      expectTransform(input, expected);
    });
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
      import {BodyText} from '@workday/canvas-kit-react/text';

      const Label = () => {
        return (
          <BodyText as="p" aria-label="My accessible text" className="my-label" size="medium">
            My Label
          </BodyText>
        );
      };

      const OtherLabel = () => {
        return (
          <BodyText 
            as="p" 
            aria-label="My accessible text" 
            className="my-label"
            color={colors.blueberry400}
            size="medium" 
          >
            My Label
          </BodyText>
        );
      };
    `;

    expectTransform(input, expected);
  });

  it.only('should transform LabelText by multiple tokens', () => {
    const input = `
      import { LabelText } from '@workday/canvas-kit-react/text';

      <>
        <LabelText>Original Label</LabelText>
        <LabelText typeLevel="subtext.small" variant="hint">My Label</LabelText>
        <LabelText id="label" typeLevel="body.small">My Label</LabelText>
        <LabelText as="p" typeLevel="heading.medium">My Label</LabelText>
        <LabelText typeLevel="title.large">My Label</LabelText>
      </>
    `;

    const expected = `
      import { LabelText, Subtext, BodyText, Heading, Title } from '@workday/canvas-kit-react/text';

      <>
        <LabelText>Original Label</LabelText>
        <Subtext variant="hint" size="small">My Label</Subtext>
        <BodyText id="label" size="small">My Label</BodyText>
        <Heading as="p" size="medium">My Label</Heading>
        <Title size="large">My Label</Title>
      </>
    `;

    expectTransform(input, expected);
  });
});
