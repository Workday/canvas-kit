import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const DescriptionTooltip = (props: TooltipProps) => (
  <Tooltip
    cs={{
      ':before': {
        borderWidth: px2rem(1),
        borderStyle: 'solid',
        borderColor: system.color.border.contrast.default,
        backgroundColor: `oklch(from ${cssVar(system.color.surface.default)} / ${system.opacity.contrast})`,
      },
    }}
    {...props}
  />
);
