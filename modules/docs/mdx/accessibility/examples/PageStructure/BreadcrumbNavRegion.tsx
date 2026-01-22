import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const regionStyles = createStyles({
  border: `${px2rem(1)} solid ${system.color.border.contrast.default}`,
  borderRadius: system.shape.x2,
  paddingLeft: system.space.x4,
});

export const BreadcrumbNavRegion = () => {
  return (
    <Breadcrumbs className={regionStyles} aria-label="Breadcrumbs">
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Menus</Breadcrumbs.Link>
        </Breadcrumbs.Item>

        <Breadcrumbs.CurrentItem>Dinner</Breadcrumbs.CurrentItem>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};
