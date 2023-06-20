import {
  Placement as PopperJSPlacement,
  State,
  detectOverflow,
  SideObject,
  Modifier,
  ModifierArguments,
} from '@popperjs/core';

export type Placement = PopperJSPlacement; // Use template literals to make documentation list them out

// We must use our own copy because the commonjs version of Popper doesn't export enums
// https://github.com/floating-ui/floating-ui/issues/1325
const placements: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
  'auto',
  'auto-start',
  'auto-end'
];

const getOppositePlacement = (popperPlacement: Placement): Placement => {
  const [first, second] = popperPlacement.split('-');
  let oppositePlacement: Placement;
  switch (first) {
    case 'top':
      oppositePlacement = 'bottom';
      break;
    case 'bottom':
      oppositePlacement = 'top';
      break;
    case 'left':
      oppositePlacement = 'right';
      break;
    case 'right':
      oppositePlacement = 'left';
      break;
    default:
      oppositePlacement = 'auto';
  }
  if (second) {
    oppositePlacement =
      placements.find(placement => placement.includes(`${oppositePlacement}-${second}`)) ??
      oppositePlacement;
  }
  return oppositePlacement;
};

const choseAvailablePlacement = (
  placements: Placement[],
  state: State,
  preferredPlacement: Placement
): Placement => {
  if (placements.length === 0 || placements[0].split('-')[0] === 'auto') {
    return preferredPlacement;
  }

  const {reference, popper} = state.rects;
  const overflow = detectOverflow({...state, placement: placements[0]});
  const direction = /left|right/.test(placements[0].split('-')[0]) ? 'horizontal' : 'vertical';
  const isOverflowed =
    (overflow.top > 0 || overflow.bottom > 0 || overflow.left > 0 || overflow.right > 0) &&
    (direction === 'horizontal'
      ? popper.height / 2 - overflow.top < reference.height ||
        popper.height / 2 - overflow.bottom < reference.height
      : popper.width - overflow.left < reference.width ||
        popper.width - overflow.right < reference.width);
  const key = placements[0].split('-')[0] as keyof SideObject;

  if (!isOverflowed && overflow[key] <= 0) {
    return placements[0];
  } else {
    return choseAvailablePlacement(placements.slice(1), state, preferredPlacement);
  }
};

export type Options = {
  fallbackPlacements: Placement[];
};

const name = 'fallbackModifier';

export const fallbackPlacementsModifier: Modifier<typeof name, Options> = {
  name: name,
  enabled: true,
  phase: 'main',
  data: {
    _skip: false,
  },
  fn({state, options}: ModifierArguments<Options>) {
    const preferredPlacement = state.options.placement;
    const {fallbackPlacements} = options;

    const placements = [
      preferredPlacement,
      getOppositePlacement(preferredPlacement),
      ...(fallbackPlacements || []),
    ];

    const placementOverride = choseAvailablePlacement(placements, state, preferredPlacement);
    if (state.placement !== placementOverride) {
      state.modifiersData[name]._skip = true;
      state.placement = placementOverride;
      state.reset = true;
    }
  },
};
