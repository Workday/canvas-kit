import {
  SystemIcon,
  SystemIconCircle,
  systemIconCircleStencil,
} from '@workday/canvas-kit-preview-react/icon';
import {createStyles} from '@workday/canvas-kit-styling';
import {imageIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  display: 'flex',
  gap: system.gap.md,
  margin: system.gap.md,
  alignItems: 'center',
  '&>span': {
    height: 'fit-content',
  },
});

export const SystemCircleBasic = () => {
  return (
    <div className={styles}>
      <SystemIconCircle icon={imageIcon} />
      <SystemIconCircle icon={imageIcon} inverse={true} />
      <SystemIconCircle
        icon={imageIcon}
        background={system.color.fg.success.default}
        color={system.color.fg.inverse}
      />
      <SystemIconCircle icon={imageIcon} size={base.size1200} />
      <SystemIconCircle
        icon={imageIcon}
        size={base.size1200}
        cs={{[systemIconCircleStencil.vars.size]: base.size1000}}
      />
    </div>
  );
};
