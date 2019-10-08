import * as React from 'react';
import {DecoratorFn} from '@storybook/react';

const sectionDecorator: (t: string) => DecoratorFn = title => {
  return storyFn => (
    <div className="story">
      <h1 className="section-label">{title}</h1>
      {storyFn()}
    </div>
  );
};

export default sectionDecorator;
