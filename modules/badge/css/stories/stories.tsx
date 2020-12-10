import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';

export default {
  title: 'Components/Indicators/Badge/CountBadge/CSS',
  decorators: [withReadme(README)],
};

export const Default = () => (
  <>
    <div className="story" style={{display: 'flex'}}>
      <span className="wdc-count-badge">1</span>
      <span className="wdc-count-badge">100</span>
      <span className="wdc-count-badge">999+</span>
    </div>
    <div className="story" style={{display: 'flex'}}>
      <span className="wdc-count-badge-inverse">1</span>
      <span className="wdc-count-badge-inverse">100</span>
      <span className="wdc-count-badge-inverse">999+</span>
    </div>
  </>
);
