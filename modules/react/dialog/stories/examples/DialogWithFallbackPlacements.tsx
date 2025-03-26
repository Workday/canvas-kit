import {Dialog} from '@workday/canvas-kit-react/dialog';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Popups/Dialog',
  component: Dialog,
};

const grid = createStyles({
  gridTemplateAreas: "'topButton topButton''leftButton rightButton''bottomButton bottomButton'",
  height: calc.subtract('100vh', system.space.x16),
  width: calc.subtract('100vw', system.space.x20),
});

const topButton = createStyles({
  gridArea: 'topButton',
  justifySelf: 'center',
});
const rightButton = createStyles({
  gridArea: 'rightButton',
  justifySelf: 'right',
  alignSelf: 'center',
});
const bottomButton = createStyles({
  gridArea: 'bottomButton',
  justifySelf: 'center',
  alignSelf: 'end',
});
const leftButton = createStyles({
  gridArea: 'leftButton',
  justifySelf: 'left',
  alignSelf: 'center',
});

export const DialogWithFallbackPlacements = () => {
  return (
    <div data-testid="scroll-area-fallback-placement">
      <Grid cs={grid}>
        <Dialog>
          <Dialog.Target cs={topButton} as={PrimaryButton}>
            Placement Top
          </Dialog.Target>
          <Dialog.Popper placement="top">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading paddingTop="m">This is dialog heading</Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex gap="s" padding="xxs" marginTop="xxs">
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
        <Dialog>
          <Dialog.Target cs={leftButton} as={PrimaryButton}>
            Placement Left
          </Dialog.Target>
          <Dialog.Popper placement="left">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading paddingTop="m">This is dialog heading</Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex gap="s" padding="xxs" marginTop="xxs">
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
        <Dialog>
          <Dialog.Target cs={rightButton} as={PrimaryButton}>
            Placement Right
          </Dialog.Target>
          <Dialog.Popper placement="right">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading paddingTop="m">This is dialog heading</Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex gap="s" padding="xxs" marginTop="xxs">
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
        <Dialog>
          <Dialog.Target cs={bottomButton} as={PrimaryButton}>
            Placement Bottom
          </Dialog.Target>
          <Dialog.Popper placement="bottom">
            <Dialog.Card>
              <Dialog.CloseIcon aria-label="Close" />
              <Dialog.Heading paddingTop="m">This is dialog heading</Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex gap="s" padding="xxs" marginTop="xxs">
                <Dialog.CloseButton as={PrimaryButton}>Submit</Dialog.CloseButton>
                <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              </Flex>
            </Dialog.Card>
          </Dialog.Popper>
        </Dialog>
      </Grid>
    </div>
  );
};
