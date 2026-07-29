// @ts-ignore: Cannot find module error
import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Box, Flex, Grid} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {formattingIcon, rocketIcon, tokensIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

// @ts-ignore: Cannot find module error
import {version} from '../../../lerna.json';
import {InstallBlock} from './installBlock';
import headerImage from './sana-canvas-header.jpg';

const parentFlexStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
  marginBlockEnd: system.gap.lg,
});

const bannerTextStyles = createStyles({
  color: system.color.fg.inverse,
  fontSize: '5vmin',
  lineHeight: '5vmin',
});

const versionStyles = createStyles({
  ...system.type.body.md,
  marginInlineStart: system.gap.md,
});

const imageStyles = createStyles({
  width: '100%',
  height: 'auto',
});

const cardHeaderStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.xs,
});

const cardStyles = createStyles({
  height: '100%',
});

const cardBodyStyles = createStyles({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

const linkStyles = createStyles({
  marginBlockStart: 'auto',
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
            cs={{marginInlineStart: system.gap.xs}}
          >
            Workday Design Principles.
          </ExternalHyperlink>
        </Text>
        <Heading size="medium">Quick Links</Heading>
        <Grid
          cs={{
            gridAutoColumns: 'auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gridGap: system.gap.sm,
            alignItems: 'stretch',
          }}
        >
          <Card className={cardStyles}>
            <Flex className={cardHeaderStyles}>
              <SystemIcon icon={rocketIcon} />
              <Card.Heading>Getting Started</Card.Heading>
            </Flex>
            <Card.Body className={cardBodyStyles}>
              <Text>For all things getting started including helpful guides and docs.</Text>
              <Hyperlink
                className={linkStyles}
                href="https://workday.github.io/canvas-kit/?path=/docs/guides-getting-started--docs"
              >
                Getting Started Guide
              </Hyperlink>
            </Card.Body>
          </Card>
          <Card className={cardStyles}>
            <Flex className={cardHeaderStyles}>
              <SystemIcon icon={tokensIcon} />
              <Card.Heading>Tokens</Card.Heading>
            </Flex>
            <Card.Body className={cardBodyStyles}>
              <Text>
                Tokens are the smallest pieces of our Design System with the primary function of
                storing UI information.
              </Text>
              <ExternalHyperlink
                className={linkStyles}
                href="https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs"
              >
                View Our Tokens
              </ExternalHyperlink>
            </Card.Body>
          </Card>
          <Card className={cardStyles}>
            <Flex className={cardHeaderStyles}>
              <SystemIcon icon={formattingIcon} />
              <Card.Heading>Styling</Card.Heading>
            </Flex>
            <Card.Body className={cardBodyStyles}>
              <Text>
                Learn how to style Canvas components using tokens, theming, and custom CSS
                approaches.
              </Text>
              <Hyperlink
                className={linkStyles}
                href="https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs"
              >
                Get Started
              </Hyperlink>
            </Card.Body>
          </Card>
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
