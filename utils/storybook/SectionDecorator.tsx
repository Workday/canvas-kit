import * as React from 'react';
import {StoryDecorator} from '@storybook/react';

const sectionDecorator: (t: string) => StoryDecorator = title => {
  return storyFn => (
    <div className="story">
      <h1 className="section-label">{title}</h1>
      {storyFn()}
    </div>
  );
};

export default sectionDecorator;
