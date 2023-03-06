import {expectTransformFactory} from './expectTransformFactory';
import transform from '../compoundToast';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Toast', () => {
  it.only('should restructure Toast usages with props', () => {
    const input = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast'

      <Toast actionText="View more details">Your workbook was successfully processed.</Toast>
    `;

    const expected = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast'

      <Toast>
        <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
      </Toast>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Toast usages with default props', () => {
    const input = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast'

      <Toast actionText="View more details" onActionClick={handleActionClick} onClose={handleClose}>Your workbook was successfully processed.</Toast>
    `;

    const expected = stripIndent`
      import {Toast} from '@workday/canvas-kit-react/toast'

      <Toast>
        <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
      </Toast>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Banner usages with no props', () => {
    const input = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner';

      <Banner />
    `;

    const expected = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner';

      <Banner><Banner.Icon /><Banner.Label /><Banner.ActionText /></Banner>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Banner expression props', () => {
    const input = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      <Banner error={numErrors ? Banner.ErrorType.Error : Banner.ErrorType.Alert} variant={shouldStick ? Banner.Variant.Sticky : Banner.Variant.Full} label='3 Warnings' />
    `;

    const expected = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      <Banner hasError={numErrors ? true : false} isSticky={shouldStick ? true : false}><Banner.Icon /><Banner.Label>3 Warnings</Banner.Label><Banner.ActionText /></Banner>
    `;

    expectTransform(input, expected);
  });

  it('should not restructure Banner usages already transformed', () => {
    const input = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner';

      <Banner>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
    `;

    const expected = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner';

      <Banner>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
    `;

    expectTransform(input, expected);
  });

  it('should restructure a renamed Banner', () => {
    const input = stripIndent`
      import {Banner as StyledBanner} from '@workday/canvas-kit-react/banner'

      <StyledBanner onClick={() => {}} label="3 Warnings" actionText="Show Details" variant={Banner.Variant.Sticky} error={Banner.ErrorType.Error} />
    `;

    const expected = stripIndent`
      import {Banner as StyledBanner} from '@workday/canvas-kit-react/banner'

      <StyledBanner onClick={() => {}} isSticky={true} hasError={true}><StyledBanner.Icon /><StyledBanner.Label>3 Warnings</StyledBanner.Label><StyledBanner.ActionText>Show Details</StyledBanner.ActionText></StyledBanner>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Banner usages with JSX Element label', () => {
    const input = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      <Banner label={<span>Banner Label</span>} />
    `;

    const expected = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      <Banner><Banner.Icon /><Banner.Label><span>Banner Label</span></Banner.Label><Banner.ActionText /></Banner>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Banner usages with call expression heading', () => {
    const input = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      <Banner label={getLabel()} />
    `;

    const expected = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      <Banner><Banner.Icon /><Banner.Label>{getLabel()}</Banner.Label><Banner.ActionText /></Banner>
    `;

    expectTransform(input, expected);
  });

  it('should restructure styled Banner usages', () => {
    const input = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      const StyledBanner = styled(Banner)({});

      <StyledBanner label="2 Warnings" />
    `;

    const expected = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      const StyledBanner = styled(Banner)({});

      <StyledBanner><Banner.Icon /><Banner.Label>2 Warnings</Banner.Label><Banner.ActionText /></StyledBanner>
    `;

    expectTransform(input, expected);
  });

  it('should restructure styled template string Banner usages', () => {
    const input = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      const StyledBanner = styled(Banner)\`
        padding: 1px;
      \`;

      <StyledBanner label="4 Warnings" />
    `;

    const expected = stripIndent`
      import {Banner} from '@workday/canvas-kit-react/banner'

      const StyledBanner = styled(Banner)\`
        padding: 1px;
      \`;

      <StyledBanner><Banner.Icon /><Banner.Label>4 Warnings</Banner.Label><Banner.ActionText /></StyledBanner>
    `;

    expectTransform(input, expected);
  });
});
