import {Tooltip, TooltipProps} from '@workday/canvas-kit-react/tooltip';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const descriptionTooltipStencil = createStencil({
  base: {
    ':before': {
      borderWidth: px2rem(1),
      borderStyle: 'solid',
      borderColor: system.color.border.contrast.strong,
      backgroundColor: system.color.bg.translucent,
    },
  },
});

export const DescriptionTooltip = ({...props}: TooltipProps) => {
  return <Tooltip {...handleCsProp(props, descriptionTooltipStencil())} />;
};
