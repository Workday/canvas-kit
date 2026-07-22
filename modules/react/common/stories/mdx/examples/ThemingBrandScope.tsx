import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {base} from '@workday/canvas-tokens-web';

export const ThemingBrandScope = () => (
  <CanvasProvider theme={{brand: {primary: {'600': base.magenta600}}}}>
    <Card>
      <Card.Heading>Brand scope</Card.Heading>
      <Card.Body>
        <p>
          Only primary is set — buttons and selected menu items update. Focus rings stay default.
        </p>
        <PrimaryButton>Primary</PrimaryButton>
        <Menu initialSelectedIds={['selected']}>
          <Menu.Card>
            <Menu.List>
              <Menu.Item id="other">Other item</Menu.Item>
              <Menu.Item id="selected">Selected item</Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu>
      </Card.Body>
    </Card>
  </CanvasProvider>
);
