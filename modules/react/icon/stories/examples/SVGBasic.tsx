import {Svg} from '@workday/canvas-kit-react/icon';
import {createStencil} from '@workday/canvas-kit-styling';
import {CanvasIconTypes, imageIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const styles = createStencil({
  vars: {
    size: '',
  },
  base: ({size}) => ({
    svg: {
      width: size,
      height: size,
    },
    '.wd-icon-fill': {
      fill: system.color.fg.success.default,
    },
    '.wd-icon-accent': {
      fill: system.color.fg.success.strong,
    },
    '.wd-icon-background': {
      fill: system.color.surface.success.default,
    },
  }),
});

export const SVGBasic = () => {
  return <Svg src={imageIcon} type={CanvasIconTypes.System} cs={styles({size: system.size.xs})} />;
};
