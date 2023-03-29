import * as React from 'react';
import {styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors, space, gradients, type} from '@workday/canvas-kit-react/tokens';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Subtext} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon, notificationsIcon} from '@workday/canvas-system-icons-web';

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

const forDesigners = [
  {value: 'Understanding Canvas', linkValue: '#UnderstandingCanvas'},
  {value: 'Customizing Canvas', linkValue: '#CustomizingCanvas'},
  {value: 'Contributing to Canvas', linkValue: '#ContributingtoCanvas'},
  {value: 'Resources', linkValue: '#Resources'},
];

const forDevelopers = [
  {value: 'Using Canvas', linkValue: '#UsingCanvas'},
  {value: 'Contributing', linkValue: '#Contributing'},
  {value: 'Resources', linkValue: '#Resources'},
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
              <StyledExpandable paddingY="s" paddingX="m" textAlign="center">
                <SystemIcon icon={rocketIcon} marginX="xxs" />
                <Expandable.Title padding="zero">
                  <BodyText
                    as="h4"
                    size="small"
                    fontWeight="bold"
                    color="blackpepper300"
                    marginY="zero"
                  >
                    Getting Started
                  </BodyText>
                  <Subtext size="small" color="blackpepper300" marginY="zero">
                    Guidance for beginners to pros
                  </Subtext>
                </Expandable.Title>
                <Expandable.Icon iconPosition="end" />
              </StyledExpandable>
              <Expandable.Content paddingY="zero" paddingX="zero">
                <StyledLink
                  as="a"
                  href="#"
                  size="large"
                  color={colors.blackpepper300}
                  textDecoration="none"
                  marginY="zero"
                  display="flex"
                  paddingTop="10px"
                  paddingBottom="9px"
                  paddingLeft="xxl"
                >
                  Introduction
                </StyledLink>
                <Expandable paddingBottom="9px" paddingX="zero" paddingTop="zero">
                  <StyledExpandable
                    alignItems="center"
                    paddingLeft="xxl"
                    paddingTop="10px"
                    paddingBottom="zero"
                  >
                    <Expandable.Icon iconPosition="start" size="16px" padding="zero" />
                    <Expandable.Title>
                      <Subtext
                        as="a"
                        href="#"
                        size="large"
                        color={colors.blackpepper300}
                        textDecoration="none"
                      >
                        For Designers
                      </Subtext>
                    </Expandable.Title>
                  </StyledExpandable>
                  <Expandable.Content padding="zero">
                    {forDesigners.map(item => {
                      return (
                        <StyledLink
                          size="large"
                          display="flex"
                          textDecoration="none"
                          paddingLeft="112px"
                          paddingTop="6px"
                          paddingBottom="5px"
                          href={item.linkValue}
                        >
                          {item.value}
                        </StyledLink>
                      );
                    })}
                  </Expandable.Content>
                </Expandable>
                <Expandable paddingBottom="9px" paddingX="zero" paddingTop="zero">
                  <StyledExpandable
                    alignItems="center"
                    paddingLeft="xxl"
                    paddingTop="10px"
                    paddingBottom="zero"
                  >
                    <Expandable.Icon iconPosition="start" size="16px" padding="zero" />
                    <Expandable.Title>
                      <Subtext
                        as="a"
                        href="#"
                        size="large"
                        color={colors.blackpepper300}
                        textDecoration="none"
                      >
                        For Developers
                      </Subtext>
                    </Expandable.Title>
                  </StyledExpandable>
                  <Expandable.Content padding="zero">
                    {forDevelopers.map(item => {
                      return (
                        <StyledLink
                          size="large"
                          display="flex"
                          textDecoration="none"
                          paddingLeft="112px"
                          paddingTop="6px"
                          paddingBottom="5px"
                          href={item.linkValue}
                        >
                          {item.value}
                        </StyledLink>
                      );
                    })}
                  </Expandable.Content>
                </Expandable>
                <StyledLink
                  as="a"
                  href="#"
                  size="large"
                  textDecoration="none"
                  marginY="zero"
                  display="flex"
                  paddingTop="10px"
                  paddingBottom="9px"
                  paddingLeft="xxl"
                >
                  Extended Systems
                </StyledLink>
              </Expandable.Content>
            </Expandable>
          </Flex.Item>
          <Flex.Item>
            <Expandable padding="zero">
              <StyledExpandable paddingY="s" paddingX="m" textAlign="center">
                <SystemIcon icon={notificationsIcon} marginX="xxs" />
                <Expandable.Title padding="zero">
                  <BodyText
                    as="h4"
                    size="small"
                    fontWeight="bold"
                    color="blackpepper300"
                    marginY="zero"
                  >
                    What's New
                  </BodyText>
                  <Subtext size="small" color="blackpepper300" marginY="zero">
                    Announcements and more
                  </Subtext>
                </Expandable.Title>
                <Expandable.Icon iconPosition="end" />
              </StyledExpandable>
              <Expandable.Content paddingY="zero" paddingX="zero">
                <StyledLink
                  as="a"
                  href="#"
                  size="large"
                  textDecoration="none"
                  marginY="zero"
                  display="flex"
                  paddingTop="10px"
                  paddingBottom="9px"
                  paddingLeft="xxl"
                >
                  Announcements
                </StyledLink>
                <StyledLink
                  as="a"
                  href="#"
                  size="large"
                  textDecoration="none"
                  marginY="zero"
                  display="flex"
                  paddingTop="10px"
                  paddingBottom="9px"
                  paddingLeft="xxl"
                >
                  Upgrade Guides
                </StyledLink>
              </Expandable.Content>
            </Expandable>
          </Flex.Item>
        </Flex>
      </StyledPanel>
    </Flex>
  );
};
