import * as React from 'react';
import {styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors, gradients, type} from '@workday/canvas-kit-react/tokens';
import {system} from '@workday/canvas-tokens-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {birthdayIcon, ribbonIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '../../../../button';
import {createStyles} from '@workday/canvas-kit-styling';

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
      <Flex as="ul" flexDirection="column" rowGap="zero" paddingInlineStart="zero">
        <Flex.Item as="li" listStyle="none">
          <Expandable padding="zero">
            <StyledExpandable paddingTop="m" paddingBottom="xxs" paddingX="m" textAlign="center">
              <SystemIcon icon={ribbonIcon} paddingRight="s" />
              <Expandable.Title padding="zero">
                <BodyText size="small" fontWeight="bold" color="blackpepper300" marginY="zero">
                  Bestsellers
                </BodyText>
                <Subtext size="medium" color="blackpepper300" marginY="zero">
                  Award winning sweet treats
                </Subtext>
              </Expandable.Title>
              <Expandable.Icon iconPosition="end" />
            </StyledExpandable>
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
        <Flex.Item as="li" listStyle="none">
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
    <Flex height={800} position="relative" backgroundColor="frenchVanilla100">
      <SidePanel {...panelProps}>
        <SidePanel.ToggleButton {...controlProps} />
        {expanded ? <ExpandedView /> : <CompactView />}
      </SidePanel>
    </Flex>
  );
};
