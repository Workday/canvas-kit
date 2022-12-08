import React from 'react';
import headerImage from './storybook-welcome-header.png';
import {Flex, Grid, Box} from '@workday/canvas-kit-react/layout';
import {InstallBlock} from './installBlock';
import {Text, Heading} from '@workday/canvas-kit-react/text';
import {Card} from '@workday/canvas-kit-react/card';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {colors} from '@workday/canvas-kit-react/tokens';
import {rocketIcon, tokensIcon, shapesIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {version} from '.../../../lerna.json';

export const WelcomePage = () => {
  return (
    <Flex flexDirection="column" gap="s">
      <Box borderRadius="m" overflow="hidden" position="relative">
        <Flex position="absolute" flexDirection="column" top="30%" left="10%">
          <Text
            typeLevel="title.medium"
            color={colors.frenchVanilla100}
            fontSize="6vw"
            marginBottom="m"
            style={{lineHeight: '3vw'}}
          >
            Canvas Kit
          </Text>
          <Text
            typeLevel="body.large"
            fontSize="3vw"
            style={{lineHeight: '2vw'}}
            color={colors.frenchVanilla100}
          >
            v{version}
          </Text>
        </Flex>
        <img src={headerImage} alt="test" style={{width: '100%', height: 'auto'}} />
      </Box>
      <Text typeLevel="body.medium">
        {' '}
        This project provides a set of components for the Workday Canvas Design System that can be
        used to implement user experiences consistent with Workday Design Principles.
      </Text>

      <Heading size="medium" borderBottom={`1px solid ${colors.blueberry200}`} paddingBottom="xxs">
        Quick Links
      </Heading>
      <Grid
        gridAutoColumns="auto"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"

        gridGap="s"
      >
        <Grid as={Card} gridTemplateRows='1fr 1fr 2fr 1fr' depth="none" display='grid' >
          <SystemIcon color={colors.cantaloupe400} icon={rocketIcon} size={60}></SystemIcon>
          <Card.Heading>Getting Started</Card.Heading>
          <Card.Body>
            <Text>
              For all things getting started including helpful guides and docs.
            </Text>

          </Card.Body>
          <Grid.Item
            as={Hyperlink}
            alignSelf="end"
            marginTop="xs"
            href="/?path=/docs/guides-getting-started--page"
          >
            {' '}
            Getting Started Guide
          </Grid.Item>
        </Grid>
        <Grid as={Card} gridTemplateRows='1fr 1fr 2fr 1fr' depth="none" display='grid' >
          <SystemIcon color={colors.blueberry400} icon={tokensIcon} size={60}></SystemIcon>
          <Card.Heading>Tokens</Card.Heading>
          <Card.Body>
            <Text>
              Tokens are the smallest pieces of our Design System with the primary function of storing UI information.
            </Text>

          </Card.Body>
          <Grid.Item
            alignSelf="end"
            as={Hyperlink}
            marginTop="xs"
            href="/?path=/docs/tokens--depth"
          >
            {' '}
            View Our Tokens
          </Grid.Item>
        </Grid>
        <Grid as={Card} gridTemplateRows='1fr 1fr 2fr 1fr' depth="none" display='grid' >
          <SystemIcon color={colors.greenApple400} icon={shapesIcon} size={60}></SystemIcon>
          <Card.Heading>Assets</Card.Heading>
          <Card.Body>
            <Text>
            Assets are graphics which help communicate meaning or highlight areas of interaction to our users.
            </Text>

          </Card.Body>
          <Grid.Item
            as={Hyperlink}
            alignSelf="end"
            marginTop="xs"
            href="?path=/docs/guides-creating-compound-components--page"
          >
            {' '}
            View Assets
          </Grid.Item>
        </Grid>
      </Grid>
      <Heading size="medium" borderBottom={`1px solid ${colors.blueberry200}`} paddingBottom="xxs">
        Installation
      </Heading>
      <Text>
        To get started using Canvas kit React first add or install the module to your existing React
        project
      </Text>
      <InstallBlock command="yarn add" packageName="@workday/canvas-kit-react" />
      or
      <InstallBlock command="npm install" packageName="@workday/canvas-kit-react" />
    </Flex>
  );
};
