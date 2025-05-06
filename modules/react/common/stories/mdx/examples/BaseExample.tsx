import {Base} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';

export const BaseExample = () => {
  return (
    <Base
      cs={{padding: system.space.x4, boxShadow: system.depth[1], borderRadius: system.shape.x2}}
    >
      <Base as="h2" cs={{color: system.color.fg.caution.default}}>
        Pangolins are Fascinating
      </Base>
      <Base as="p">
        Pangolins are the only mammals covered in keratin scales (the same material as human nails
        and hair). These scales protect them from predators.
      </Base>
    </Base>
  );
};
