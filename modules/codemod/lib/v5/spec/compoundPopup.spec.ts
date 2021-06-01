import {expectTransformFactory} from './expectTransformFactory';
import transform from '../compoundPopup';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('popup', () => {
  it('should restructure Popup usages with a literal heading', () => {
    const input = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup heading="Popup Heading" headingId={id}>Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup.Card><Popup.Heading id={id}>Popup Heading</Popup.Heading><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Popup usages with a literal heading when import is remapped', () => {
    const input = stripIndent`
      import {Popup as CanvasPopup} from '@workday/canvas-kit-react/popup'

      <CanvasPopup heading="Popup Heading" headingId={id}>Popup Contents</CanvasPopup>
    `;

    const expected = stripIndent`
      import {Popup as CanvasPopup} from '@workday/canvas-kit-react/popup'

      <CanvasPopup.Card><CanvasPopup.Heading id={id}>Popup Heading</CanvasPopup.Heading><CanvasPopup.Body>Popup Contents</CanvasPopup.Body></CanvasPopup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Popup usages with a "handleClose" prop', () => {
    const input = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup handleClose={closePopup}>Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup.Card><Popup.CloseIcon onClick={closePopup} /><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Popup usages with a "handleClose" prop as an expression', () => {
    const input = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup handleClose={() => setOpen(false)}>Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup.Card><Popup.CloseIcon onClick={() => setOpen(false)} /><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Popup usages with a "handleClose" prop and move the "closeButtonAriaLabel" to the "CloseIcon"', () => {
    const input = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup handleClose={closePopup} closeButtonAriaLabel="Close">Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup.Card><Popup.CloseIcon onClick={closePopup} aria-label="Close" /><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Popup usages with an "closeIconSize"', () => {
    const input = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup handleClose={closePopup} closeIconSize="small">Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup'

      <Popup.Card><Popup.CloseIcon onClick={closePopup} size="small" /><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should restructure Popup usages with an "ariaLabel"', () => {
    const input = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup';

      <Popup ariaLabel="Popup Title">Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup';

      <Popup.Card aria-label="Popup Title"><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should rewrite Popup.Padding usages to use Box spacing instead', () => {
    const input = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup';

      <Popup padding={Popup.Padding.s}>Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import {Popup} from '@workday/canvas-kit-react/popup';

      <Popup.Card padding="s"><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should rewrite PopupPadding usages to use Box spacing instead when PopupPadding is imported', () => {
    const input = stripIndent`
      import {Popup, PopupPadding} from '@workday/canvas-kit-react/popup';

      <Popup padding={PopupPadding.s}>Popup Contents</Popup>
    `;

    const expected = stripIndent`
      import { Popup } from '@workday/canvas-kit-react/popup';

      <Popup.Card padding="s"><Popup.Body>Popup Contents</Popup.Body></Popup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should rewrite Popup.Padding usages to use Box spacing instead when import is renamed', () => {
    const input = stripIndent`
      import {Popup as CanvasPopup} from '@workday/canvas-kit-react/popup'

      <CanvasPopup padding={CanvasPopup.Padding.s}>Popup Contents</CanvasPopup>
    `;

    const expected = stripIndent`
      import {Popup as CanvasPopup} from '@workday/canvas-kit-react/popup'

      <CanvasPopup.Card padding="s"><CanvasPopup.Body>Popup Contents</CanvasPopup.Body></CanvasPopup.Card>
    `;

    expectTransform(input, expected);
  });

  it('should add "model" to the object pattern structure of a "usePopup" variable declarator', () => {
    const input = stripIndent`
      import { usePopup } from '@workday/canvas-kit-react/popup';

      const Temp = () => {
        const {targetProps, closePopup, popperProps, stackRef} = usePopup();
      }
    `;

    const expected = stripIndent`
      import { usePopup } from '@workday/canvas-kit-react/popup';

      const Temp = () => {
        const {
          targetProps,
          closePopup,
          popperProps,
          stackRef,
          model
        } = usePopup();
      }
    `;

    expectTransform(input, expected);
  });

  it('should update usages of all Popup hooks', () => {
    const input = stripIndent`
      import {
        Popup,
        usePopup,
        useAlwaysCloseOnOutsideClick,
        useAssistiveHideSiblings,
        useBringToTopOnClick,
        useCloseOnOutsideClick,
        useCloseOnEscape,
        useFocusTrap,
      } from '@workday/canvas-kit-react/popup';
      import {Button} from '@workday/canvas-kit-react/button';

      const Temp = () => {
        const {targetProps, closePopup, popperProps, stackRef} = usePopup();

        useAlwaysCloseOnOutsideClick(stackRef, closePopup);
        useAssistiveHideSiblings(popperProps.ref);
        useBringToTopOnClick(stackRef);
        useCloseOnOutsideClick(stackRef, closePopup);
        useCloseOnEscape(stackRef, closePopup);
        useFocusTrap(stackRef);

        return <>
          <Button {...targetProps}>Open Popup</Button>
          <Popper {...popperProps}>
            <Popup handleClose={closePopup}>
              <Button onClick={closePopup}>Close</Button>
            </Popup>
          </Popper>
        </>;
      }
    `;

    const expected = stripIndent`
      import {
        Popup,
        usePopup,
        useAlwaysCloseOnOutsideClick,
        useAssistiveHideSiblings,
        useBringToTopOnClick,
        useCloseOnOutsideClick,
        useCloseOnEscape,
        useFocusTrap,
      } from '@workday/canvas-kit-react/popup';
      import {Button} from '@workday/canvas-kit-react/button';

      const Temp = () => {
        const {
          targetProps,
          closePopup,
          popperProps,
          stackRef,
          model
        } = usePopup();

        useAlwaysCloseOnOutsideClick(model);
        useAssistiveHideSiblings(model);
        useBringToTopOnClick(model);
        useCloseOnOutsideClick(model);
        useCloseOnEscape(model);
        useFocusTrap(model);

        return <>
          <Button {...targetProps}>Open Popup</Button>
          <Popper {...popperProps}>
            <Popup.Card><Popup.CloseIcon onClick={closePopup} /><Popup.Body>
                <Button onClick={closePopup}>Close</Button>
              </Popup.Body></Popup.Card>
          </Popper>
        </>;
      }
    `;

    expectTransform(input, expected);
  });
});
