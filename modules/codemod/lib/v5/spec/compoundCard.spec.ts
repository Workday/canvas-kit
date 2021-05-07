import {expectTransformFactory} from './expectTransformFactory';
import transform from '../compoundCard';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('card', () => {
  it('should restructure Card usages with a literal heading', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card heading="Card Heading" headingId={id}>Card Contents</Card>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card><Card.Heading id={id}>Card Heading</Card.Heading><Card.Body>Card Contents</Card.Body></Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Card usages with no props', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      <Card>
        No Props
      </Card>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      <Card><Card.Body>No Props</Card.Body></Card>
    `;

    expectTransform(input, expected);
  });

  it('should not restructure Card usages already transformed', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      <Card>
        <Card.Body>No Padding</Card.Body>
      </Card>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card';

      <Card>
        <Card.Body>No Padding</Card.Body>
      </Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure a renamed Card', () => {
    const input = stripIndent`
      import {Card as StyledCard} from '@workday/canvas-kit-react/card'

      <StyledCard heading="Card Heading" headingId={id}>Card Contents</StyledCard>
    `;

    const expected = stripIndent`
      import {Card as StyledCard} from '@workday/canvas-kit-react/card'

      <StyledCard><StyledCard.Heading id={id}>Card Heading</StyledCard.Heading><StyledCard.Body>Card Contents</StyledCard.Body></StyledCard>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Card usages with JSX Element heading', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card heading={<span>Card Heading</span>} headingId={id}>Card Contents</Card>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card><Card.Heading id={id}><span>Card Heading</span></Card.Heading><Card.Body>Card Contents</Card.Body></Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Card usages with call expression heading', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card heading={getHeading()} headingId={id}>Card Contents</Card>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card><Card.Heading id={id}>{getHeading()}</Card.Heading><Card.Body>Card Contents</Card.Body></Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Card usages with complex children', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card heading="Card Heading" headingId={id}><span>Card Contents</span></Card>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      <Card><Card.Heading id={id}>Card Heading</Card.Heading><Card.Body><span>Card Contents</span></Card.Body></Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure styled Card usages', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      const StyledCard = styled(Card)({});

      <StyledCard heading="Card Heading" headingId={id}>Card Contents</StyledCard>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      const StyledCard = styled(Card)({});

      <StyledCard><Card.Heading id={id}>Card Heading</Card.Heading><Card.Body>Card Contents</Card.Body></StyledCard>
    `;

    expectTransform(input, expected);
  });

  it('should restructure styled template string Card usages', () => {
    const input = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      const StyledCard = styled(Card)\`
        padding: 1px;
      \`;

      <StyledCard heading="Card Heading" headingId={id}>Card Contents</StyledCard>
    `;

    const expected = stripIndent`
      import {Card} from '@workday/canvas-kit-react/card'

      const StyledCard = styled(Card)\`
        padding: 1px;
      \`;

      <StyledCard><Card.Heading id={id}>Card Heading</Card.Heading><Card.Body>Card Contents</Card.Body></StyledCard>
    `;

    expectTransform(input, expected);
  });
});
