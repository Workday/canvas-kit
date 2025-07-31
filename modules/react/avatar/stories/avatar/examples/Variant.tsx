import {Avatar} from '@workday/canvas-kit-react/avatar';

export const Variant = () => (
  <div className="story">
    <h3>Light</h3>
    <Avatar altText="Avatar" as="div" size="medium" />
    <h3>Dark</h3>
    <Avatar altText="Avatar" as="div" size="medium" variant="dark" />
  </div>
);
