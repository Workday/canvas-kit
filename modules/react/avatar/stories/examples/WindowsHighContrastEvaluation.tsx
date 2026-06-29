import {Avatar, BaseAvatar} from '@workday/canvas-kit-react/avatar';
import {Pill} from '@workday/canvas-kit-react/pill';
import {PropCombination} from '@workday/canvas-kit-react/testing';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const PHOTO_URL = 'https://picsum.photos/id/237/300/200';

export type WhcmStrategy = 'none' | 'permanentOutline' | 'permanentBorder' | 'recommended';
export type WhcmComposition = 'initials' | 'photo' | 'button' | 'pill';

export interface WhcmEvaluationProps {
  strategy?: WhcmStrategy;
  composition?: WhcmComposition;
  className?: string;
}

// Use && to override BaseAvatar's `border: none` when styles are merged as separate classes.
const permanentOutlineStyles = createStyles({
  '&&': {
    outline: `${px2rem(1)} solid transparent`,
  },
});

const permanentBorderStyles = createStyles({
  '&&': {
    border: `${px2rem(1)} solid transparent`,
  },
});

// Simulates proposed BaseButton-style focus when Avatar is the interactive element.
const recommendedFocusStyles = createStyles({
  '&&.focus, &&:focus-visible': {
    outline: `${px2rem(2)} solid transparent`,
    outlineOffset: px2rem(2),
  },
});

const buttonStyles = createStyles({
  cursor: 'pointer',
  padding: 0,
  margin: 0,
});

/**
 * Returns boundary styles for the Avatar based on the column strategy and row composition.
 *
 * - none: production behavior (no WHCM boundary)
 * - permanentOutline / permanentBorder: always apply — shows the clash scenarios
 * - recommended: outline on static avatars only; suppress when nested in or rendered as a button;
 *   focus-only outline when Avatar is the button and focused
 */
function getAvatarBoundaryCs(
  strategy: WhcmStrategy = 'none',
  composition: WhcmComposition = 'initials',
  className?: string
) {
  const isFocused = className?.includes('focus');

  switch (strategy) {
    case 'permanentOutline':
      return permanentOutlineStyles;
    case 'permanentBorder':
      return permanentBorderStyles;
    case 'recommended':
      if (composition === 'initials' || composition === 'photo') {
        return permanentOutlineStyles;
      }
      if (composition === 'button' && isFocused) {
        return recommendedFocusStyles;
      }
      // Suppressed when Avatar is the button (unfocused) or nested inside a button (e.g. Pill).
      return undefined;
    case 'none':
    default:
      return undefined;
  }
}

export const whcmStrategyColumnProps: PropCombination[] = [
  {label: 'No boundary (current)', props: {strategy: 'none'}},
  {label: 'Permanent outline', props: {strategy: 'permanentOutline'}},
  {label: 'Permanent border', props: {strategy: 'permanentBorder'}},
  {
    label: 'Recommended (static only)',
    props: {strategy: 'recommended'},
    description: [
      '1px transparent outline on static avatars only',
      'No boundary when Avatar is or is inside a button',
      'Focus-only 2px outline when Avatar is the button',
    ],
  },
];

export const whcmEvaluationRowProps: PropCombination[] = [
  {label: 'Initials', props: {composition: 'initials'}},
  {label: 'Photo', props: {composition: 'photo'}},
  {label: 'As button', props: {composition: 'button'}},
  {label: 'As button, focus', props: {composition: 'button', className: 'focus'}},
  {label: 'Inside Pill', props: {composition: 'pill'}},
  {label: 'Inside Pill, focus', props: {composition: 'pill', className: 'focus'}},
];

export function renderWhcmEvaluationCell({
  strategy = 'none',
  composition = 'initials',
  className,
}: WhcmEvaluationProps) {
  const boundaryCs = getAvatarBoundaryCs(strategy, composition, className);

  switch (composition) {
    case 'photo':
      return <Avatar name="Happy Doggo" url={PHOTO_URL} objectFit="cover" cs={boundaryCs} />;
    case 'button':
      return (
        <BaseAvatar
          as="button"
          type="button"
          className={className}
          cs={[buttonStyles, boundaryCs]}
          aria-label="John Doe"
        >
          <BaseAvatar.Name name="John Doe" />
        </BaseAvatar>
      );
    case 'pill':
      return (
        <Pill className={className} onClick={() => undefined}>
          <Pill.Avatar name="John Doe" cs={boundaryCs} />
          <Pill.Label>John Doe</Pill.Label>
        </Pill>
      );
    case 'initials':
    default:
      return <Avatar name="John Doe" cs={boundaryCs} />;
  }
}
