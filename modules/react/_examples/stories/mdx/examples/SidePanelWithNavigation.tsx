import * as React from 'react';
import {base, system} from '@workday/canvas-tokens-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
import {birthdayIcon, checkIcon, ribbonIcon} from '@workday/canvas-system-icons-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

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
        <SystemIcon icon={config.icon} />
        <Expandable.Title>
          {config.title}
          <Subtext size="medium" cs={stylesOverride.accordionSubText}>
            {config.subTitle}
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

const CompactView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.listContainer}>
      <Flex.Item as="li">
        <TertiaryButton>
          <SystemIcon icon={ribbonIcon} />
        </TertiaryButton>
      </Flex.Item>
      <Flex.Item as="li">
        <TertiaryButton>
          <SystemIcon icon={birthdayIcon} />
        </TertiaryButton>
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
          Cake or Death
        </Heading>
        <SidePanel.ToggleButton {...controlProps} />
        {expanded ? <ExpandedView /> : <CompactView />}
      </SidePanel>
    </Flex>
  );
};
