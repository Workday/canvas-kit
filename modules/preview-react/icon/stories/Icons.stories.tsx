import {imageIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {SystemIcon, SystemIconCircle, systemIconStencil} from '../index';

export default {
  title: 'Tokens/Preview/Icon',
};

export const SystemIconStory = {
  name: 'System Icon',
  component: SystemIcon,
  render: () => (
    <div className="story">
      <SystemIcon icon={imageIcon} />
      <SystemIcon icon={imageIcon} color={system.color.fg.success.default} />
      <SystemIcon
        icon={imageIcon}
        color={system.color.fg.success.default}
        cs={{
          '&:hover': {
            [systemIconStencil.vars.color]: system.color.fg.success.strong,
          },
        }}
      />
      <SystemIcon
        icon={imageIcon}
        color={system.color.fg.info.default}
        cs={{
          '&:hover': {
            [systemIconStencil.vars.color]: system.color.fg.info.strong,
          },
        }}
      />
      <SystemIcon
        className="custom-class"
        icon={imageIcon}
        accent={system.color.fg.warning.default}
        color={system.color.fg.info.strong}
        background={system.color.surface.info.default}
      />
      <br />
      <SystemIcon icon={imageIcon} size="lg" />
      <SystemIconCircle icon={imageIcon} />
      <SystemIconCircle icon={imageIcon} shouldMirror={true} />
      <SystemIconCircle icon={imageIcon} size={120} shouldMirror={true} />
      <SystemIconCircle icon={imageIcon} size={120} inverse={true} />
    </div>
  ),
};
