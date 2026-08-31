import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {externalLinkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const NoTargetRTL = () => {
  const model = useModalModel();
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <CanvasProvider dir="rtl">
      <PrimaryButton onClick={() => model.events.show()}>פתח רישיון</PrimaryButton>
      <Modal model={model}>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>MIT License</Modal.Heading>
            <Modal.Body>
              <Box as="p" cs={{marginBlock: '0'}}>
                בזאת ניתנת רשות, ללא תשלום, לכל אדם לקבל עותק של תוכנה זו וקבצי התיעוד הנלווים
                ("התוכנה").
              </Box>
            </Modal.Body>
            <Flex cs={{gap: system.gap.md, paddingBlock: system.padding.xs}}>
              <Modal.CloseButton
                as={PrimaryButton}
                onClick={handleAcknowledge}
                icon={externalLinkIcon}
                iconPosition="end"
                shouldMirrorIconInRTL
              >
                לְהוֹדוֹת
              </Modal.CloseButton>
              <Modal.CloseButton onClick={handleCancel}>לְבַטֵל</Modal.CloseButton>
            </Flex>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </CanvasProvider>
  );
};
