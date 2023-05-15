import * as React from 'react';
import {styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors, space, gradients, type} from '@workday/canvas-kit-react/tokens';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Subtext} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {birthdayIcon, ribbonIcon} from '@workday/canvas-system-icons-web';

const StyledPanel = styled(SidePanel)({
  backgroundColor: colors.soap200,
  zIndex: 1,
});

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
  {value: 'Lemon Rhubarb Bars', linkValue: '#LemonRhubarbBars'},
  {value: 'Pistachio Rosewater Cake', linkValue: '#PistachioRosewaterCake'},
  {value: 'Triple Chocolate Chip Muffins', linkValue: '#TripleChocolateChipMuffins'},
  {value: 'Brownie Cheesecake Bites', linkValue: '#BrownieCheesecakeBites'},
];

const gettingStarted = [
  'Extended Systems',
  'Canvas Glossary',
  'Frequently Asked Questions',
  'Canvas Support',
];

export const WithNavigation = () => {
  const {labelProps} = useSidePanel();

  return (
    <Flex height={800} position="relative" backgroundColor="frenchVanilla100">
      <StyledPanel touched={true} variant="alternate">
        <Flex flexDirection="column" rowGap="zero" paddingTop="m">
          <Flex.Item>
            <Expandable padding="zero">
              <StyledExpandable paddingTop="m" paddingBottom="xxs" paddingX="s" textAlign="center">
                <SystemIcon icon={ribbonIcon} marginX="xxs" />
                <Expandable.Title padding="zero">
                  <BodyText
                    as="h2"
                    size="small"
                    fontWeight="bold"
                    color="blackpepper300"
                    marginY="zero"
                  >
                    Bestsellers
                  </BodyText>
                  <Subtext size="small" color="blackpepper300" marginY="zero">
                    Award winning sweet treats
                  </Subtext>
                </Expandable.Title>
                <Expandable.Icon iconPosition="end" />
              </StyledExpandable>
              <Expandable.Content paddingY="zero" paddingX="zero">
                {bestsellers.map(item => {
                  return (
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
                  );
                })}
              </Expandable.Content>
            </Expandable>
          </Flex.Item>
          <Flex.Item>
            <Expandable padding="zero">
              <StyledExpandable paddingTop="m" paddingBottom="xxs" paddingX="s" textAlign="center">
                <SystemIcon icon={birthdayIcon} marginX="xxs" />
                <Expandable.Title padding="zero">
                  <BodyText
                    as="h2"
                    size="small"
                    fontWeight="bold"
                    color="blackpepper300"
                    marginY="zero"
                  >
                    Custom Cakes
                  </BodyText>
                  <Subtext size="small" color="blackpepper300" marginY="zero">
                    To celebrate all the milestones in life!
                  </Subtext>
                </Expandable.Title>
                <Expandable.Icon iconPosition="end" />
              </StyledExpandable>
              <Expandable.Content paddingY="zero" paddingX="zero">
                {cakes.map(item => {
                  return (
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
                  );
                })}
              </Expandable.Content>
            </Expandable>
          </Flex.Item>
        </Flex>
      </StyledPanel>
    </Flex>
  );
};
