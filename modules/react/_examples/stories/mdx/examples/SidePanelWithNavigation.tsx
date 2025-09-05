import * as React from 'react';
import {base, system} from '@workday/canvas-tokens-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Subtext, Text} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Menu} from '@workday/canvas-kit-react/menu';
import {birthdayIcon, checkIcon, ribbonIcon} from '@workday/canvas-system-icons-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {Tooltip} from '../../../../tooltip';

const data = {
  bestsellers: {
    icon: ribbonIcon,
    title: 'Best Sellers',
    subtitle: 'Award winning sweet treats',
    items: ['Mango Coco Sago', 'Matcha Creme Pie', 'Key Lime Cheesecake', 'Tiramisu'],
  },
  cakes: {
    icon: birthdayIcon,
    title: 'Custom Cakes',
    subtitle: 'To celebrate your life milestones',
    items: ['Anniversary', 'Birthday', 'Graduation', 'Wedding'],
  },
};

const stylesOverride = {
  navContainer: createStyles({
    height: px2rem(800),
    positio: 'relative',
    backgroundColor: base.frenchVanilla100,
  }),
  accordionContainer: createStyles({
    flexDirection: 'column',
    rowGap: system.space.zero,
    paddingInlineStart: system.space.zero,
  }),
  accordionIcon: createStyles({
    verticalAlign: 'middle',
    padding: system.space.x1,
  }),
  accordionSubText: createStyles({
    margin: system.space.zero,
  }),
  listContainer: createStyles({
    listStyle: 'none',
    padding: system.space.x4,
    paddingTop: system.space.x16,
    flexDirection: 'column',
  }),
  links: createStyles({
    textDecoration: 'none',
    padding: system.space.x4,
  }),
  linkCheck: createStyles({
    marginLeft: 'auto',
  }),
  flyOut: createStyles({
    marginTop: '8rem',
  }),
};

const Accordion = ({config}) => {
  const [currentPage, setCurrentPage] = React.useState('');

  const handleClick = e => {
    e.preventDefault();
    setCurrentPage(e.target.textContent);
  };

  return (
    <Expandable>
      <Expandable.Target>
        <SystemIcon cs={stylesOverride.accordionIcon} icon={config.icon} />
        <Expandable.Title>
          {config.title}
          <Subtext size="medium" cs={stylesOverride.accordionSubText}>
            {config.subtitle}
          </Subtext>
        </Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>
      <Expandable.Content as="ul" cs={stylesOverride.listContainer}>
        {config.items.map(i => {
          return (
            <li key={i}>
              <Flex
                as="a"
                href="#"
                aria-current={i === currentPage ? 'true' : undefined}
                className={stylesOverride.links}
                onClick={handleClick}
              >
                {i}
                {i === currentPage && <SystemIcon icon={checkIcon} cs={stylesOverride.linkCheck} />}
              </Flex>
            </li>
          );
        })}
      </Expandable.Content>
    </Expandable>
  );
};

const IconButtonMenu = ({config}) => {
  return (
    <Menu>
      <Tooltip title={config.title} placement="right">
        <Menu.Target as={TertiaryButton}>
          <SystemIcon icon={config.icon} />
        </Menu.Target>
      </Tooltip>
      <Menu.Popper placement="right">
        <Menu.Card cs={stylesOverride.flyOut}>
          <Menu.List>
            {config.items.map(i => (
              <Menu.Item>{i}</Menu.Item>
            ))}
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
    </Menu>
  );
};

const CompactView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.listContainer}>
      <Flex.Item as="li">
        <IconButtonMenu config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <IconButtonMenu config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

const ExpandedView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.accordionContainer}>
      <Flex.Item as="li">
        <Accordion config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <Accordion config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

export const WithNavigation = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <Flex cs={stylesOverride.navContainer}>
      <SidePanel as="nav" {...panelProps}>
        <Heading size="small" {...labelProps} hidden={!expanded ? true : undefined}>
          Cake or Death Bakery
        </Heading>
        <SidePanel.ToggleButton {...controlProps} />
        {expanded ? <ExpandedView /> : <CompactView />}
      </SidePanel>
    </Flex>
  );
};
