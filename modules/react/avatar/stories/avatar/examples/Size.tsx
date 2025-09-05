import {Avatar} from '@workday/canvas-kit-react/avatar';
import {px2rem} from '@workday/canvas-kit-styling';

export const Size = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar altText="Avatar" as="div" size="extraExtraLarge" />
    <h3>Extra Large</h3>
    <Avatar altText="Avatar" as="div" size="extraLarge" />
    <h3>Large</h3>
    <Avatar altText="Avatar" as="div" size="large" />
    <h3>Medium</h3>
    <Avatar altText="Avatar" as="div" size="medium" />
    <h3>Small</h3>
    <Avatar altText="Avatar" as="div" size="small" />
    <h3>Extra Small</h3>
    <Avatar altText="Avatar" as="div" size="extraSmall" />
    <h3>30px</h3>
    <Avatar altText="Avatar" as="div" size={px2rem(30)} />
    <h3>40px</h3>
    <Avatar altText="Avatar" as="div" size={px2rem(40)} />
    <h3>3rem</h3>
    <Avatar altText="Avatar" as="div" size="3rem" />
    <h3>4rem</h3>
    <Avatar altText="Avatar" as="div" size="4rem" />
  </div>
);
