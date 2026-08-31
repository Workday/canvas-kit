import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
});

export const Basic = () => {
  return (
    <div className={containerStyles}>
      <BodyText size="small" cs={{marginBlock: 0}}>
        Press
        <KBD cs={{marginInline: system.padding.xxs}}>
          <KBD.Item>F</KBD.Item>
        </KBD>
        to pay respects.
      </BodyText>
      <KBD>
        <KBD.Item aria-label="Command">⌘</KBD.Item>
        <KBD.Item>C</KBD.Item>
      </KBD>
      <KBD aria-keyshortcuts="Shift+P">
        <KBD.Item>Shift</KBD.Item>
        <span>+</span>
        <KBD.Item>P</KBD.Item>
      </KBD>
      <KBD aria-keyshortcuts="Shift+P">
        <KBD.Item>
          <KBD variant="plain">
            <KBD.Item>Shift</KBD.Item>
            <span>+</span>
            <KBD.Item>P</KBD.Item>
          </KBD>
        </KBD.Item>
      </KBD>
    </div>
  );
};
