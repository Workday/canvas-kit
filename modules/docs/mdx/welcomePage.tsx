// @ts-ignore: Cannot find module error
import headerImage from './ck-banner.jpg';
// @ts-ignore: Cannot find module error
import componentsImage from './Components.png';
// @ts-ignore: Cannot find module error
import tokensImage from './Tokens.png';
// @ts-ignore: Cannot find module error
import stylingImage from './Styling.png';
import {Flex, Grid, Box} from '@workday/canvas-kit-react/layout';
import {InstallBlock} from './installBlock';
import {Text, Heading} from '@workday/canvas-kit-react/text';
import {Card} from '@workday/canvas-kit-react/card';
import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {Graphic} from '@workday/canvas-kit-react/icon';
// @ts-ignore: Cannot find module error
import {version} from '../../../lerna.json';

const parentFlexStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x4,
  marginBottom: system.space.x6,
});

const bannerTextStyles = createStyles({
  color: system.color.text.inverse,
  fontSize: '5vmin',
  lineHeight: '5vmin',
});

const versionStyles = createStyles({
  ...system.type.body.medium,
  marginInlineStart: system.space.x4,
});

const imageStyles = createStyles({
  width: '100%',
  height: 'auto',
});

const gridStyles = createStyles({
  maxHeight: 400,
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
          <img
            src={headerImage}
            alt="banner with canvas kit logo and version"
            className={imageStyles}
          />
          <Flex cs={{flexDirection: 'row', position: 'absolute', top: '45%', right: '5%'}}>
            <Text typeLevel="title.medium" cs={[bannerTextStyles, versionStyles]}>
              v{version}
            </Text>
          </Flex>
        </Box>
        <Text typeLevel="body.medium">
          This project provides a set of components for the Workday Canvas Design System that can be
          used to implement user experiences consistent with
          <ExternalHyperlink
            href="https://canvas.workdaydesign.com/"
            iconLabel="Open docs in new window"
            cs={{marginInlineStart: system.space.x1}}
          >
            Workday Design Principles.
          </ExternalHyperlink>
        </Text>
        <Heading size="medium">Quick Links</Heading>
        <Grid
          gridAutoColumns="auto"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gridGap="s"
        >
          <Grid as={Card} className={gridStyles}>
            <Graphic src={{url: componentsImage}} />
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
            <Graphic src={{url: tokensImage}} />
            <Card.Heading>Tokens</Card.Heading>
            <Card.Body>
              <Text>
                Tokens are the smallest pieces of our Design System with the primary function of
                storing UI information.
              </Text>
            </Card.Body>
            <Grid.Item
              as={ExternalHyperlink}
              className={linkStyles}
              href="https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs"
            >
              View Our Tokens
            </Grid.Item>
          </Grid>
          <Grid as={Card} className={gridStyles}>
            <Graphic src={{url: stylingImage}} />
            <Card.Heading>Styling</Card.Heading>
            <Card.Body>
              <Text>
                Learn how to style Canvas components using tokens, theming, and custom CSS
                approaches.
              </Text>
            </Card.Body>
            <Grid.Item
              as={Hyperlink}
              className={linkStyles}
              href="https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs"
            >
              Get Started
            </Grid.Item>
          </Grid>
        </Grid>
        <Heading size="medium">Installation</Heading>
        <Text>
          To get started using Canvas Kit React first add or install the module to your existing
          React project
        </Text>
        <InstallBlock
          command="yarn add"
          packageName="@workday/canvas-kit-react @workday/canvas-tokens-web"
        />
        or
        <InstallBlock
          command="npm install"
          packageName="@workday/canvas-kit-react @workday/canvas-tokens-web"
        />
      </div>
    </div>
  );
};
