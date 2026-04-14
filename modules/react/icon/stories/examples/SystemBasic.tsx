import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createStyles} from '@workday/canvas-kit-styling';
import {imageIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  display: 'flex',
  gap: system.gap.md,
  margin: system.gap.md,
  alignItems: 'center',
  '&>span': {
    height: 'fit-content',
  },
});

export const SystemBasic = () => {
  return (
    <>
      <div className={styles}>
        <SystemIcon icon={imageIcon} size="xl" />
        <SystemIcon icon={imageIcon} size="lg" />
        <SystemIcon icon={imageIcon} size="md" />
        <SystemIcon icon={imageIcon} size="sm" />
        <SystemIcon icon={imageIcon} size="xs" />
        <SystemIcon icon={imageIcon} size="xxs" />
      </div>
      <div className={styles}>
        <SystemIcon icon={imageIcon} />
        <SystemIcon icon={imageIcon} color={system.color.fg.success.default} />
        <SystemIcon
          icon={imageIcon}
          color={system.color.fg.success.default}
          accent={system.color.fg.success.strong}
        />
        <SystemIcon
          icon={imageIcon}
          color={system.color.fg.warning.default}
          accent={system.color.fg.warning.strong}
          background={system.color.surface.warning.default}
        />
      </div>
    </>
  );
};
