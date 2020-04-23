import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';

export default {
  title: 'Components|Badge/CountBadge/CSS/',
  decorators: [withReadme(README)],
};

export const Default = () => (
  <>
    <div className="story" style={{display: 'flex'}}>
      <span className="wdc-count-badge" aria-label="1 new notification">
        1
      </span>
      <span className="wdc-count-badge" aria-label="100 new notifications">
        100
      </span>
      <span className="wdc-count-badge" aria-label="999+ new notifications">
        999+
      </span>
    </div>
    <div className="story" style={{display: 'flex'}}>
      <span className="wdc-count-badge-inverse" aria-label="1 new notification">
        1
      </span>
      <span className="wdc-count-badge-inverse" aria-label="100 new notifications">
        100
      </span>
      <span className="wdc-count-badge-inverse" aria-label="1000 new notifications">
        999+
      </span>
    </div>
  </>
);
