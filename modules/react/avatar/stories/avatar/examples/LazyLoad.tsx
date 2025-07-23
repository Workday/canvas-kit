import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const LazyLoad = () => (
  <div className="story">
    {Array.from({length: 5}, (v, index) => (
      <div>
        <Avatar
          altText="Avatar"
          key={index}
          as="div"
          size="medium"
          url={testAvatar + '?v=' + index}
        />
        <br />
      </div>
    ))}
  </div>
);
