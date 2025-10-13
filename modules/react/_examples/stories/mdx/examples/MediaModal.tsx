import * as React from 'react';
import {Modal} from '@workday/canvas-kit-react/modal';
import {Box, BoxProps, Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';
import {calc, createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';

const mediaImageStencil = createStencil({
  base: {
    display: 'block',
    backgroundColor: system.color.bg.alt.softer,
    transition: 'opacity ease 200ms',
    width: '100%',
    height: px2rem(293),
    opacity: 0,
  },
  modifiers: {
    loaded: {
      true: {
        opacity: 1,
      },
    },
  },
});

const mediaStyles = createStyles({
  width: calc.add(calc.multiply(system.space.x8, 2), '100%'),
  marginInlineStart: calc.negate(system.space.x8),
  marginTop: system.space.x6,
  marginBottom: system.space.x4,
});

const MediaImage = createComponent('img')({
  displayName: 'Media.Image',
  Component: (elemProps: React.ImgHTMLAttributes<HTMLImageElement>, ref, Element) => {
    const [loaded, setLoaded] = React.useState(false);

    return (
      <Box
        as={Element}
        ref={ref}
        onLoad={() => setLoaded(true)}
        cs={mediaImageStencil({loaded})}
        {...elemProps}
      />
    );
  },
});

const Media = createComponent('div')({
  displayName: 'Media',
  subComponents: {Image: MediaImage},
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Box as={Element} ref={ref} cs={mediaStyles} {...elemProps}>
        {children}
      </Box>
    );
  },
});

const styles = {
  text: createStyles({
    marginTop: system.space.zero,
    marginBottom: system.space.x6,
  }),
  flex: createStyles({
    gap: system.space.x4,
  }),
};

export const BasicExample = () => {
  return (
    <Modal>
      <Modal.Target>Open Media Modal</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" size="small" />
          <Media>
            <Media.Image
              src="https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg"
              alt="Sunrise in the mountains"
            />
          </Media>
          <Modal.Heading>TED's Secret to Public Speaking</Modal.Heading>
          <Modal.Body>
            <Text as="p" cs={styles.text}>
              The secret to great public speaking, according to former actor Martin Danielson, is as
              simple as one, two, three.
            </Text>
            <Flex cs={styles.flex}>
              <Modal.CloseButton as={PrimaryButton}>Learn More</Modal.CloseButton>
            </Flex>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
