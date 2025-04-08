import {Avatar} from '@workday/canvas-kit-react/avatar';
import {px2rem} from '@workday/canvas-kit-styling';

export const ObjectFit = () => (
  <div className="story">
    <h3>Original Rectangle Image</h3>
    <img alt="" src="https://picsum.photos/id/237/300/200" />
    <h3>Object fit on a Rectangle Image</h3>
    <Avatar altText="Avatar" as="div" url="https://picsum.photos/id/237/300/200" />
    <h3>Object fit on a Rectangle Image using Dynamic Size</h3>
    <Avatar
      altText="Avatar"
      as="div"
      size={px2rem(200)}
      url="https://picsum.photos/id/237/300/200"
      objectFit="contain"
    />
    <h3>Original Square Image</h3>
    <img alt="" src="https://picsum.photos/id/237/300/300" />
    <h3>Object fit on a Square Image</h3>
    <Avatar altText="Avatar" as="div" url="https://picsum.photos/id/237/300/300" />
    <h3>Object fit on a Square Image using Dynamic Size</h3>
    <Avatar
      altText="Avatar"
      as="div"
      size={px2rem(200)}
      url="https://picsum.photos/id/237/300/300"
    />
  </div>
);
