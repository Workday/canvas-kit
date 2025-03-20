import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export const Basic = () => {
  return (
    <Breadcrumbs aria-label="Breadcrumbs">
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/menus">Menus</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/lunch">Lunch</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/house-specialty-pies" maxWidth={100}>
            House Specialty Pies
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.CurrentItem maxWidth={100}>Canvas Supreme</Breadcrumbs.CurrentItem>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};
