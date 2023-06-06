import * as React from 'react';
import {Modal} from '@workday/canvas-kit-react/modal';
import {Box, BoxProps, Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {spaceNumbers} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';

const MediaImage = createComponent('img')({
  displayName: 'Media.Image',
  Component: (elemProps: React.ImgHTMLAttributes<HTMLImageElement>, ref, Element) => {
    const [loaded, setLoaded] = React.useState(false);

    return (
      <Box
        as={Element}
        ref={ref}
        display="block"
        backgroundColor="frenchVanilla200"
        transition="opacity ease 200ms"
        width="100%"
        height={293}
        style={{opacity: loaded ? 1 : 0}}
        onLoad={() => setLoaded(true)}
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
      <Box
        as={Element}
        ref={ref}
        width={`calc(100% + ${spaceNumbers.l * 2}px)`}
        marginLeft={`-${spaceNumbers.l}px`}
        marginTop="m"
        marginBottom="s"
        {...elemProps}
      >
        {children}
      </Box>
    );
  },
});

export const Basic = () => {
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
            <Text as="p" marginTop={0} marginBottom="m">
              The secret to great public speaking, according to former actor Martin Danielson, is as
              simple as one, two, three.
            </Text>
            <Flex gap="s">
              <Modal.CloseButton as={PrimaryButton}>Learn More</Modal.CloseButton>
            </Flex>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
