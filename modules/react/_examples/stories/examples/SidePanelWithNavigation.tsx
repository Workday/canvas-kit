import * as React from 'react';
import {styled, StyledType} from '@workday/canvas-kit-react/common';
import {depth, colors, space, gradients, type} from '@workday/canvas-kit-react/tokens';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Subtext} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon, notificationsIcon} from '@workday/canvas-system-icons-web';

const StyledPanel = styled(SidePanel)({
  depth: 2,
  backgroundColor: colors.soap200,
  zIndex: 1,
});

const StyledLink = styled(Subtext.as('a'))<StyledType>({
  ':hover': {
    backgroundColor: 'blue',
  },
});

const baseStyles = {
  color: 'blackPepper300',
  minHeight: 'xxl', //idk
  minWidth: 'xs', //idk
  padding: 'xs', //all around padding for individual cells?
};

export const Basic = () => {
  const {labelProps} = useSidePanel();

  return (
    <Flex height={600} position="relative" backgroundColor="frenchVanilla100">
      <StyledPanel touched={true} variant="alternate">
        <Flex flexDirection="column" rowGap="zero">
          <Flex.Item height={24}></Flex.Item>
          <Flex.Item>
            <Expandable padding="zero">
              <Expandable.Target paddingY="s" paddingX="m" textAlign="center">
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
              </Expandable.Target>
              <Expandable.Content paddingY="zero">
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
                  <Expandable.Target alignItems="center" paddingLeft="xxl" paddingTop="10px">
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
                  </Expandable.Target>
                  <Expandable.Content padding="zero">
                    <StyledLink
                      as="a"
                      href="#"
                      size="large"
                      color={colors.blackpepper300}
                      textDecoration="none"
                      display="flex"
                      paddingLeft="112px"
                      paddingTop="6px"
                      paddingBottom="5px"
                    >
                      Understanding Canvas
                    </StyledLink>
                    <StyledLink
                      as="a"
                      href="#"
                      size="large"
                      color={colors.blackpepper300}
                      textDecoration="none"
                      display="flex"
                      paddingLeft="112px"
                      paddingTop="6px"
                      paddingBottom="5px"
                    >
                      Customizing Canvas
                    </StyledLink>
                    <StyledLink
                      as="a"
                      href="#"
                      size="large"
                      color={colors.blackpepper300}
                      textDecoration="none"
                      display="flex"
                      paddingLeft="112px"
                      paddingTop="6px"
                      paddingBottom="5px"
                    >
                      Contributing to Canvas
                    </StyledLink>
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
                      Resources
                    </StyledLink>
                  </Expandable.Content>
                </Expandable>
                <Expandable paddingBottom="9px" paddingX="zero" paddingTop="zero">
                  <Expandable.Target alignItems="center" paddingLeft="xxl" paddingTop="10px">
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
                  </Expandable.Target>
                  <Expandable.Content padding="zero">
                    <Subtext
                      as="a"
                      href="#"
                      size="large"
                      color={colors.blackpepper300}
                      textDecoration="none"
                      display="flex"
                      marginLeft="112px"
                      paddingTop="6px"
                      paddingBottom="5px"
                    >
                      Using Canvas
                    </Subtext>
                    <Subtext
                      as="a"
                      href="#"
                      size="large"
                      color={colors.blackpepper300}
                      textDecoration="none"
                      display="flex"
                      marginLeft="112px"
                      paddingTop="6px"
                      paddingBottom="5px"
                    >
                      Contributing
                    </Subtext>
                    <Subtext
                      as="a"
                      href="#"
                      size="large"
                      color={colors.blackpepper300}
                      textDecoration="none"
                      display="flex"
                      marginLeft="112px"
                      paddingTop="6px"
                      paddingBottom="5px"
                    >
                      Resources
                    </Subtext>
                  </Expandable.Content>
                </Expandable>
                <Subtext
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
                  Extended Systems
                </Subtext>
              </Expandable.Content>
            </Expandable>
          </Flex.Item>
          <Flex.Item>
            <Expandable padding="zero">
              <Expandable.Target paddingY="s" paddingX="m" textAlign="center">
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
              </Expandable.Target>
              <Expandable.Content paddingY="zero">
                <Subtext
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
                  Announcements
                </Subtext>
                <Subtext
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
                  Upgrade Guides
                </Subtext>
              </Expandable.Content>
            </Expandable>
          </Flex.Item>
        </Flex>
      </StyledPanel>
    </Flex>
  );
};
