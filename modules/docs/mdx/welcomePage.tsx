import React from 'react';
import canvasKitImage from './canvas-kit-1.png';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';
import {InstallBlock} from './installBlock';
import {Text, Heading} from '@workday/canvas-kit-react/text';
import {Card} from '@workday/canvas-kit-react/card';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {colors} from '@workday/canvas-kit-react/tokens';
import {rocketIcon, flagIcon, shapesIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export const WelcomePage = () => {
  return (
    <Flex flexDirection="column" gap="s">
      <img src={canvasKitImage} alt="test" style={{width: '100%', height: 'auto'}} />
      <Text typeLevel="body.medium">
        {' '}
        This project provides a set of components for the Workday Canvas Design System that can be
        used to implement user experiences consistent with Workday Design Principles.
      </Text>
      {/* <InstallBlock command="yarn add" packageName="@workday/canvas-kit-react" />
      or
      <InstallBlock command="npm install" packageName="@workday/canvas-kit-react" />
      After installing Canvas Kit, you need to set up the CanvasProvider at the root of your
      application. This can be either in your `index.jsx`,`index.tsx` or `App.jsx` depending on the
      framework you use. This ensures from styling, theming, and focus on our components. */}
      <Heading size="medium" borderBottom={`1px solid ${colors.blueberry200}`} paddingBottom="xxs">
        Quick Links
      </Heading>
      <Grid
        gridAutoColumns="auto"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        // gridTemplateColumns="1fr 1fr 1fr"
        gridGap="s"
      >
        <Card depth="none">
          <SystemIcon color={colors.cantaloupe400} icon={rocketIcon} size={60}></SystemIcon>
          <Card.Heading>Getting Started</Card.Heading>
          <Card.Body>
            <Text>
              For all things getting started including helpful guides and docs you can reference our
              repository.
            </Text>
            {/* <Grid.Item alignSelf="start"></Grid.Item> */}
          </Card.Body>
          <Grid.Item
            as={ExternalHyperlink}
            alignSelf="end"
            marginTop="xs"
            href="https://github.com/Workday/canvas-kit"
          >
            {' '}
            Canvas Kit Github
          </Grid.Item>
        </Card>
        <Card depth="none">
          <SystemIcon color={colors.blueberry400} icon={flagIcon} size={60}></SystemIcon>
          <Card.Heading>Design Principles</Card.Heading>
          <Card.Body>
            <Text>
              Our design system is a collection of rules, principles, constraints and best
              practices.
            </Text>
            {/* <Grid.Item alignSelf="start"></Grid.Item> */}
          </Card.Body>
          <Grid.Item
            as={ExternalHyperlink}
            alignSelf="end"
            marginTop="xs"
            href="https://canvas.workdaydesign.com/"
          >
            {' '}
            Learn More
          </Grid.Item>
        </Card>
        <Card depth="none">
          <SystemIcon color={colors.greenApple400} icon={shapesIcon} size={60}></SystemIcon>
          <Card.Heading>Building Components</Card.Heading>
          <Card.Body>
            <Text>
              Our design system is a collection of rules, principles, constraints and best
              practices.
            </Text>
            {/* <Grid.Item alignSelf="start"></Grid.Item> */}
          </Card.Body>
          <Grid.Item
            as={ExternalHyperlink}
            alignSelf="end"
            marginTop="xs"
            href="https://canvas.workdaydesign.com/"
          >
            {' '}
            Learn More
          </Grid.Item>
        </Card>
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
