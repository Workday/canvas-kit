import * as React from 'react';
import {styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors, gradients, type} from '@workday/canvas-kit-react/tokens';
import {base, system} from '@workday/canvas-tokens-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {birthdayIcon, ribbonIcon} from '@workday/canvas-system-icons-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const StyledExpandable = styled(Expandable.Target)({
  borderRadius: 0,
  ':hover': {
    backgroundColor: colors.soap500,
  },
});

const StyledLink = styled(Subtext.as('a'))<StyledType>({
  color: colors.blackPepper300,
  ':hover': {
    backgroundColor: colors.soap500,
  },
});

const cakes = [
  {value: 'Anniversary', linkValue: '#AnniversaryCakes'},
  {value: 'Birthday', linkValue: '#BirthdayCakes'},
  {value: 'Graduation', linkValue: '#GraduationCakes'},
  {value: 'Wedding', linkValue: 'WeddingCakes'},
];

const bestsellers = [
  {value: 'Mango Coco Sago', linkValue: '#LemonRhubarbBars'},
  {value: 'Matcha Creme Pie', linkValue: '#MatchaCremePie'},
  {value: 'Key Lime Cheesecake', linkValue: '#KeyLimeCheesecake'},
  {value: 'Tiramisu', linkValue: '#Tiramisu'},
];

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
    <>
      <Heading size="small">Cake or Death</Heading>
      <Flex as="ul" cs={stylesOverride.accordionContainer}>
        <Flex.Item as="li">
          <Expandable>
            <Expandable.Target>
              <SystemIcon icon={ribbonIcon} />
              <Expandable.Title>
                Bestsellers
                <Subtext size="medium" cs={stylesOverride.accordionSubText}>
                  Award winning sweet treats
                </Subtext>
              </Expandable.Title>
              <Expandable.Icon iconPosition="end" />
            </Expandable.Target>
            <Expandable.Content paddingY="zero" paddingX="zero" as="ul">
              {bestsellers.map(item => {
                return (
                  <li>
                    <StyledLink
                      size="large"
                      display="flex"
                      textDecoration="none"
                      paddingLeft="xxl"
                      paddingTop="xxs"
                      paddingBottom="zero"
                      href={item.linkValue}
                    >
                      {item.value}
                    </StyledLink>
                  </li>
                );
              })}
            </Expandable.Content>
          </Expandable>
        </Flex.Item>
        <Flex.Item as="li">
          <Expandable padding="zero">
            <StyledExpandable paddingTop="m" paddingBottom="xxs" paddingX="m" textAlign="center">
              <SystemIcon icon={birthdayIcon} paddingRight="s" />
              <Expandable.Title padding="zero">
                <BodyText size="small" fontWeight="bold" color="blackpepper300" marginY="zero">
                  Custom Cakes
                </BodyText>
                <Subtext size="medium" color="blackpepper300" marginY="zero">
                  To celebrate your life milestones
                </Subtext>
              </Expandable.Title>
              <Expandable.Icon iconPosition="end" />
            </StyledExpandable>
            <Expandable.Content paddingY="zero" paddingX="zero" as="ul">
              {cakes.map(item => {
                return (
                  <li>
                    <StyledLink
                      size="large"
                      display="flex"
                      textDecoration="none"
                      paddingLeft="xxl"
                      paddingTop="xxs"
                      paddingBottom="zero"
                      href={item.linkValue}
                    >
                      {item.value}
                    </StyledLink>
                  </li>
                );
              })}
            </Expandable.Content>
          </Expandable>
        </Flex.Item>
      </Flex>
    </>
  );
};

export const WithNavigation = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <Flex cs={stylesOverride.navContainer}>
      <SidePanel {...panelProps}>
        <SidePanel.ToggleButton {...controlProps} />
        {expanded ? <ExpandedView /> : <CompactView />}
      </SidePanel>
    </Flex>
  );
};
