import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Popups/Popup',
  component: Popup,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const PopupStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Default',
            props: {},
          },
          {
            label: 'On Close',
            props: {
              hasCloseIcon: true,
            },
          },
          {
            label: 'With Heading',
            props: {
              heading: 'Delete Item',
            },
          },
          {
            label: 'With zero padding',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {padding: '0'},
            },
          },
          {
            label: 'With small padding',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {padding: system.padding.sm},
            },
          },
          {
            label: 'With no depth',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {boxShadow: 'none'},
            },
          },
          {
            label: 'With depth value set to 1',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {boxShadow: system.depth[1]},
            },
          },
          {
            label: 'With depth value set to 2',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {boxShadow: system.depth[2]},
            },
          },
          {
            label: 'With depth value set to 3',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {boxShadow: system.depth[3]},
            },
          },
          {
            label: 'With depth value set to 4',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {boxShadow: system.depth[4]},
            },
          },
          {
            label: 'With depth value set to 5',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {boxShadow: system.depth[5]},
            },
          },
          {
            label: 'With depth value set to 6',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {boxShadow: system.depth[6]},
            },
          },
          {
            label: 'With custom width',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {width: px2rem(300)},
            },
          },
          {
            label: 'With small close icon',
            props: {
              heading: 'Delete Item',
              hasCloseIcon: true,
              cs: {width: px2rem(300)},
              closeIconSize: 'small',
            },
          },
        ]}
        columnProps={[{label: 'Default', props: {}}]}
      >
        {({heading, hasCloseIcon, closeIconSize, cs, ...props}) => (
          <Popup.Card cs={[{animation: 'none'}, cs]} {...props}>
            {hasCloseIcon ? <Popup.CloseIcon aria-label="" size={closeIconSize} /> : null}
            {heading ? <Popup.Heading>{heading}</Popup.Heading> : null}
            <Popup.Body>Your workbook was successfully processed.</Popup.Body>
          </Popup.Card>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const PopupRTL = {
  render: () => {
    const model = usePopupModel({
      initialVisibility: 'visible',
    });
    return (
      <CanvasProvider dir="rtl">
        <Popup model={model}>
          <Popup.Target cs={{display: 'none'}}></Popup.Target>
          <Popup.Popper>
            <Popup.Card cs={{animation: 'none', width: px2rem(300)}}>
              <Popup.CloseIcon aria-label="" />
              <Popup.Heading>למחוק פריט</Popup.Heading>
              <Popup.Body>האם ברצונך למחוק פריט זה</Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </CanvasProvider>
    );
  },
};

export const PopupThemed = {
  render: () => {
    const model = usePopupModel({
      initialVisibility: 'visible',
    });
    return (
      <CanvasProvider theme={{canvas: {palette: {primary: {main: base.magenta600}}}}}>
        <Popup model={model}>
          <Popup.Target as={PrimaryButton}>Primary Button</Popup.Target>
          <Popup.Popper>
            <Popup.Card cs={{animation: 'none', width: px2rem(300)}}>
              <Popup.CloseIcon aria-label="" />
              <Popup.Heading>Title</Popup.Heading>
              <Popup.Body>Body</Popup.Body>
              <PrimaryButton>Primary Button</PrimaryButton>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </CanvasProvider>
    );
  },
};
