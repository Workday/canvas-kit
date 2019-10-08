import * as React from 'react';
import {storiesOf} from '@storybook/react';

// TODO import markdown/mdx files and render in the following stories:

storiesOf('Welcome', module)
  .add('Getting Started', () => (
    <div className="story">
      <h1>Welcome To Canvas Kit</h1>
    </div>
  ))
  .add('Contributor Guidelines', () => (
    <div className="story">
      <h1>Contributor Guidelines</h1>
    </div>
  ))
  .add('Component Status', () => (
    <div className="story">
      <h1>Component Status</h1>
    </div>
  ))
  .add('API Guidelines', () => (
    <div className="story">
      <h1>API Guidelines</h1>
    </div>
  ))
  .add('Changelog', () => (
    <div className="story">
      <h1>Changelog</h1>
    </div>
  ));
