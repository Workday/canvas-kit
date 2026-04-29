import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const grid = createStyles({
  gridTemplateAreas: "'topButton topButton''leftButton rightButton''bottomButton bottomButton'",
  height: calc.subtract('100vh', system.size.xxl),
  width: calc.subtract('100vw', base.size1000),
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

export default {
  title: 'Testing/Popups/Dialog',
  component: Dialog,
};

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
              <Dialog.Heading cs={{paddingTop: system.padding.md}}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs, marginTop: system.gap.sm}}>
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
              <Dialog.Heading cs={{paddingTop: system.padding.md}}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs, marginTop: system.gap.sm}}>
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
              <Dialog.Heading cs={{paddingTop: system.padding.md}}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs, marginTop: system.gap.sm}}>
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
              <Dialog.Heading cs={{paddingTop: system.padding.md}}>
                This is dialog heading
              </Dialog.Heading>
              <Dialog.Body>This is dialog body.</Dialog.Body>
              <Flex cs={{gap: system.gap.sm, padding: system.padding.xs, marginTop: system.gap.sm}}>
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
