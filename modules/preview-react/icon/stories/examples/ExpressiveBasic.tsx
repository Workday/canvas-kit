import {searchIcon} from '@workday/canvas-expressive-icons-web';
import {ExpressiveIcon} from '@workday/canvas-kit-preview-react/icon';
import {createStyles} from '@workday/canvas-kit-styling';
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

export const ExpressiveBasic = () => {
  return (
    <>
      <div className={styles}>
        <ExpressiveIcon icon={searchIcon} size="xl" />
        <ExpressiveIcon icon={searchIcon} size="lg" />
        <ExpressiveIcon icon={searchIcon} size="md" />
        <ExpressiveIcon icon={searchIcon} size="sm" />
        <ExpressiveIcon icon={searchIcon} size="xs" />
      </div>
      <div className={styles}>
        <ExpressiveIcon icon={searchIcon} />
        <ExpressiveIcon
          icon={searchIcon}
          color={system.color.fg.success.default}
          accent={base.greenA200}
        />
        <ExpressiveIcon
          icon={searchIcon}
          color={system.color.fg.warning.default}
          accent={base.amberA200}
        />
      </div>
    </>
  );
};
