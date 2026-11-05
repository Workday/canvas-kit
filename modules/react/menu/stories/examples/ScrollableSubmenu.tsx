import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Menu, menuCardStencil} from '@workday/canvas-kit-react/menu';
import {PopperProps} from '@workday/canvas-kit-react/popup';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';

const containerStencil = createStencil({
  base: {},
  modifiers: {
    atEnd: {true: {justifyContent: 'flex-end'}},
    alignBottom: {true: {position: 'fixed', bottom: 0, left: 0, right: 0}},
  },
});

// A fixed height makes the parent list scroll independently of the page.
const cardStyles = createStyles({[menuCardStencil.vars.maxHeight]: px2rem(280)});
// Short enough that a Sana submenu cannot fit below the target when the menu is pinned to the
// bottom of the viewport, so placement falls back above the parent.
const bottomEdgeCardStyles = createStyles({[menuCardStencil.vars.maxHeight]: px2rem(160)});

export const ScrollableSubmenu = ({
  dir = 'ltr',
  atEnd = false,
  alignBottom = false,
  submenuPopperProps,
}: {
  dir?: 'ltr' | 'rtl';
  atEnd?: boolean;
  alignBottom?: boolean;
  submenuPopperProps?: Pick<PopperProps, 'placement' | 'fallbackPlacements' | 'popperOptions'>;
}) => (
  <CanvasProvider dir={dir}>
    <Flex cs={containerStencil({atEnd, alignBottom})}>
      <Menu>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card
            cs={alignBottom ? bottomEdgeCardStyles : cardStyles}
            data-testid="scrollable-menu"
          >
            <Menu.List>
              <Menu.Item data-id="first">First Item</Menu.Item>
              <Menu.Item data-id="second">Second Item</Menu.Item>
              <Menu.Submenu>
                <Menu.Submenu.TargetItem data-id="submenu">More Items</Menu.Submenu.TargetItem>
                <Menu.Submenu.Popper {...submenuPopperProps}>
                  <Menu.Submenu.Card>
                    <Menu.Submenu.List data-testid="submenu">
                      {Array.from({length: 6}, (_, index) => (
                        <Menu.Submenu.Item key={index} data-id={`sub-${index}`}>
                          Additional Menu Item {index + 1}
                        </Menu.Submenu.Item>
                      ))}
                    </Menu.Submenu.List>
                  </Menu.Submenu.Card>
                </Menu.Submenu.Popper>
              </Menu.Submenu>
              {Array.from({length: 15}, (_, index) => (
                <Menu.Item key={index} data-id={`item-${index}`}>
                  Item {index + 1}
                </Menu.Item>
              ))}
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    </Flex>
  </CanvasProvider>
);
