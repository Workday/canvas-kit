import * as PopperJS from '@popperjs/core';

export type Placement = PopperJS.Placement; // Use template literals to make documentation list them out

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
      PopperJS.placements.find(placement => placement.includes(`${oppositePlacement}-${second}`)) ??
      oppositePlacement;
  }
  return oppositePlacement;
};

const choseAvailablePlacement = (
  placements: Placement[],
  state: PopperJS.State,
  preferredPlacement: Placement
): Placement => {
  if (placements.length === 0 || placements[0].split('-')[0] === 'auto') {
    return preferredPlacement;
  }

  const {reference, popper} = state.rects;
  const overflow = PopperJS.detectOverflow({...state, placement: placements[0]});
  const direction = /left|right/.test(placements[0].split('-')[0]) ? 'horizontal' : 'vertical';
  const isOverflowed =
    direction === 'horizontal'
      ? popper.height / 2 - overflow.top < reference.height ||
        popper.height / 2 - overflow.bottom < reference.height
      : popper.width - overflow.left < reference.width ||
        popper.width - overflow.right < reference.width;
  const key = placements[0].split('-')[0] as keyof PopperJS.SideObject;

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

export const fallbackPlacementsModifier: PopperJS.Modifier<typeof name, Options> = {
  name: name,
  enabled: true,
  phase: 'main',
  data: {
    _skip: false,
  },
  fn({state, options}: PopperJS.ModifierArguments<Options>) {
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
