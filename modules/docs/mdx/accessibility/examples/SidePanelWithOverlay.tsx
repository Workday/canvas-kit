import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  panelContainer: createStyles({
    height: px2rem(320),
    backgroundColor: system.color.bg.alt.soft,
    position: 'relative',
  }),
  panelContent: createStyles({
    alignItems: 'center',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  panel: createStyles({
    zIndex: 1,
  }),
  overlay: createStyles({
    position: 'absolute',
    background: system.color.bg.overlay,
    height: '100%',
    width: '100%',
  }),
};

export const WithOverlay = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <Flex cs={stylesOverride.panelContainer}>
      <SidePanel className={stylesOverride.panel} {...panelProps} variant="alternate">
        <Flex cs={stylesOverride.panelContainer}>
          <Heading size="small" {...labelProps} hidden={!expanded ? true : undefined}>
            Alternate Panel
          </Heading>
          <SidePanel.ToggleButton {...controlProps} />
        </Flex>
      </SidePanel>
      {expanded && <Box cs={stylesOverride.overlay} />}
    </Flex>
  );
};
