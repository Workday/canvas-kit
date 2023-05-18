import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {Modal} from '@workday/canvas-kit-react/modal';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {spaceNumbers} from '@workday/canvas-kit-react/tokens';

const Image = (elemProps: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Box backgroundColor="frenchVanilla200">
      <img
        {...elemProps}
        alt={elemProps.alt}
        style={{
          ...elemProps.style,
          transition: 'opacity ease 200ms',
          opacity: loaded ? 1 : 0,
          display: 'block',
        }}
        onLoad={() => setLoaded(true)}
      />
    </Box>
  );
};

const MediaContainer = styled('div')({
  // offset the padding of the Modal
  width: `calc(100% + ${spaceNumbers.l * 2}px)`,
  marginLeft: -spaceNumbers.l,
  marginTop: spaceNumbers.s,
  marginBottom: spaceNumbers.s,
});

export const Basic = () => {
  return (
    <Modal>
      <Modal.Target>Open Media Modal</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" size="small" />
          <MediaContainer>
            <Image
              src="https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg"
              alt="Sunrise in the mountains"
              style={{
                width: '100%',
                height: 293,
              }}
            />
          </MediaContainer>
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
