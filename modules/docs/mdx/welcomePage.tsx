import React from 'react';
// @ts-ignore: Cannot find module error
import headerImage from './CK-banner-temp.jpg';
import {Flex, Grid, Box} from '@workday/canvas-kit-react/layout';
import {InstallBlock} from './installBlock';
import {Text, Heading} from '@workday/canvas-kit-react/text';
import {Card} from '@workday/canvas-kit-react/card';
import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {rocketIcon, tokensIcon, shapesIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {system, base} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';
// @ts-ignore: Cannot find module error
import {version} from '../../../lerna.json';

const parentFlexStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x4,
  marginBottom: system.space.x6,
});

const textStyles = createStyles({
  color: system.color.text.inverse,
  fontSize: '5vmin',
  lineHeight: '5vmin',
});

const versionStyles = createStyles({
  fontWeight: base.fontFamily100,
  marginInlineStart: system.space.x4,
});

const imageStyles = createStyles({
  width: '100%',
  height: 'auto',
});

const borderStyles = createStyles({
  borderBottom: `1px solid ${base.blueberry200}`,
  marginBottom: system.space.x2,
});

const gridStyles = createStyles({
  maxHeight: 320,
  gridTemplateRows: '1fr 1fr 2fr 1fr',
  display: 'grid',
});

const linkStyles = createStyles({
  alignSelf: 'end',
  marginTop: system.space.x3,
});

export const WelcomePage = () => {
  return (
    <div className="sb-unstyled">
      <div className={parentFlexStyles}>
        <Box cs={{overflow: 'hidden', position: 'relative'}}>
          <Flex cs={{flexDirection: 'row', position: 'absolute', top: '45%', left: '10%'}}>
            <Text typeLevel="title.medium" cs={textStyles}>
              Canvas Kit
            </Text>
            <Text typeLevel="title.medium" cs={[textStyles, versionStyles]}>
              v{version}
            </Text>
          </Flex>
          <img
            src={headerImage}
            alt="banner with canvas kit logo and version"
            className={imageStyles}
          />
        </Box>
        <Text typeLevel="body.medium">
          This project provides a set of components for the Workday Canvas Design System that can be
          used to implement user experiences consistent with
          <ExternalHyperlink
            href="https://canvas.workdaydesign.com/"
            iconLabel="Open docs in new window"
          >
            Workday Design Principles.
          </ExternalHyperlink>
        </Text>
        <Heading size="medium" className={borderStyles}>
          Quick Links
        </Heading>
        <Grid
          gridAutoColumns="auto"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gridGap="s"
        >
          <Grid as={Card} className={gridStyles}>
            <SystemIcon
              color={base.cantaloupe400}
              colorHover={base.cantaloupe400}
              icon={rocketIcon}
              size={60}
            ></SystemIcon>
            <Card.Heading>Getting Started</Card.Heading>
            <Card.Body>
              <Text>For all things getting started including helpful guides and docs.</Text>
            </Card.Body>
            <Grid.Item
              as={Hyperlink}
              className={linkStyles}
              href="https://workday.github.io/canvas-kit/?path=/docs/guides-getting-started--docs"
            >
              Getting Started Guide
            </Grid.Item>
          </Grid>
          <Grid as={Card} className={gridStyles}>
            <SystemIcon
              color={base.blueberry400}
              icon={tokensIcon}
              colorHover={base.blueberry400}
              size={60}
            ></SystemIcon>
            <Card.Heading>Tokens</Card.Heading>
            <Card.Body>
              <Text>
                Tokens are the smallest pieces of our Design System with the primary function of
                storing UI information.
              </Text>
            </Card.Body>
            <Grid.Item
              as={Hyperlink}
              className={linkStyles}
              href="https://workday.github.io/canvas-kit/?path=/docs/tokens--overview"
            >
              View Our Tokens
            </Grid.Item>
          </Grid>
          <Grid as={Card} className={gridStyles}>
            <SystemIcon
              color={base.greenApple400}
              icon={shapesIcon}
              size={60}
              colorHover={base.greenApple400}
            ></SystemIcon>
            <Card.Heading>Assets</Card.Heading>
            <Card.Body>
              <Text>
                Assets are graphics which help communicate meaning or highlight areas of interaction
                to our users.
              </Text>
            </Card.Body>
            <Grid.Item
              as={Hyperlink}
              className={linkStyles}
              href="https://workday.github.io/canvas-kit/?path=/docs/assets-icons--overview"
            >
              View Assets
            </Grid.Item>
          </Grid>
        </Grid>
        <Heading size="medium" className={borderStyles}>
          Installation
        </Heading>
        <Text>
          To get started using Canvas Kit React first add or install the module to your existing
          React project
        </Text>
        <InstallBlock command="yarn add" packageName="@workday/canvas-kit-react" />
        or
        <InstallBlock command="npm install" packageName="@workday/canvas-kit-react" />
      </div>
    </div>
  );
};
