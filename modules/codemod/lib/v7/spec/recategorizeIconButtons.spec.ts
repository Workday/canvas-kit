import {expectTransformFactory} from './expectTransformFactory';
import transform from '../recategorizeIconButtons';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('recategorizeIconButtons', () => {
  it('should replace "IconButton" with "TertiaryButton" as default use case', () => {
    const input = `
      import {IconButton} from '@workday/canvas-kit-react/button'

      <IconButton />
    `;

    const expected = `
      import {TertiaryButton} from '@workday/canvas-kit-react/button'

      <TertiaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "IconButton" with "TertiaryButton" when imported from main package', () => {
    const input = `
      import {IconButton} from '@workday/canvas-kit-react';

      <IconButton />
    `;

    const expected = `
      import {TertiaryButton} from '@workday/canvas-kit-react';

      <TertiaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "IconButton" with "TertiaryButton" if variant "circle" is defined', () => {
    const input = `
      import {IconButton} from '@workday/canvas-kit-react/button'

      <IconButton variant="circle" />
    `;

    const expected = `
      import {TertiaryButton} from '@workday/canvas-kit-react/button'

      <TertiaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "IconButton" with the correct mapping of buttons', () => {
    const input = stripIndent`
        import {IconButton} from '@workday/canvas-kit-react/button';
        <>
            <IconButton variant="circle" />
            <IconButton variant="circleFilled" />
            <IconButton variant="inverse" />
            <IconButton variant="inverseFilled" />
        </>
    `;
    const expected = stripIndent`
        import { TertiaryButton, SecondaryButton } from '@workday/canvas-kit-react/button';
        <>
            <TertiaryButton />
            <SecondaryButton />
            <TertiaryButton variant="inverse" />
            <SecondaryButton variant="inverseFilled" />
        </>
    `;

    expectTransform(input, expected);
  });

  it('should restructure styled IconButton usages', () => {
    const input = stripIndent`
      import {IconButton} from '@workday/canvas-kit-react/button';

      const StyledIconButton = styled(IconButton)({});

      <StyledIconButton icon={plusIcon}/>
    `;

    const expected = stripIndent`
      import {TertiaryButton} from '@workday/canvas-kit-react/button';

      const StyledIconButton = styled(TertiaryButton)({});

      <StyledIconButton icon={plusIcon}/>
    `;

    expectTransform(input, expected);
  });

  it('should import correct button based on styled IconButton', () => {
    const input = stripIndent`
      import {IconButton} from '@workday/canvas-kit-react/button';

      const StyledIconButton = styled(IconButton)({});
      
      <StyledIconButton variant="circleFilled" icon={plusIcon} />
      
      
    `;

    const expected = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button';

      const StyledIconButton = styled(SecondaryButton)({});

      <StyledIconButton icon={plusIcon} />
      
    `;

    expectTransform(input, expected);
  });

  it.only('wdc eexample', () => {
    const input = stripIndent`
      import {IconButton} from '@workday/canvas-kit-react/button';

      <IconButton
        {...previousAutoId}
        data-uxi-widget-type={'wd-datepicker'}
        data-uxi-datepicker-action={'prevMonth'}
        aria-label={identifiers.previousAriaLabel}
        autoFocus={true}
        variant='inverseFilled'
        size={'small'}
        onKeyDown={this.props.onKeyDown}
        onClick={this.handlePreviousMonthChange}
        tabIndex={0}
      >
        <SystemIcon icon={!!isRTL ? chevronRightIcon : chevronLeftIcon} />
      </IconButton>
    `;

    const expected = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button';

      <SecondaryButton
        {...previousAutoId}
        data-uxi-widget-type={'wd-datepicker'}
        data-uxi-datepicker-action={'prevMonth'}
        aria-label={identifiers.previousAriaLabel}
        autoFocus={true}
        variant={'inverseFilled'}
        size={'small'}
        onKeyDown={this.props.onKeyDown}
        onClick={this.handlePreviousMonthChange}
        tabIndex={0}
      >
        <SystemIcon icon={!!isRTL ? chevronRightIcon : chevronLeftIcon} />
      </SecondaryButton>
      
    `;

    expectTransform(input, expected);
  });
});
