/// <reference path="../../../typings.d.ts" />

import React from 'react';

import withReadme from 'storybook-readme/with-readme';

import README from '../README.md';
import {PopupStack} from '../lib/PopupStack';

export default {
  title: 'Components/Popups/Popup Stack',
  decorators: [withReadme(README)],
};

export const Default = () => {
  React.useEffect(() => {
    document.querySelector('#open-button').addEventListener('click', event => {
      const number = document.body.querySelectorAll('.wdc-card').length;
      const div = document.createElement('div');
      div.className = 'example-popup';
      div.style.position = 'absolute';
      div.style.width = '200px';
      div.style.top = `${70 + 30 * number}px`;
      div.style.left = `${60 + 30 * number}px`;

      div.innerHTML = `
        <div class="wdc-card">
          <h3 class="wdc-card-heading">Card Header</h3>
          <div class="wdc-card-body">Contents of Stack UI</div>
          <div><button class="wdc-btn close-button">Close</button></div>
        </div>`;
      document.body.appendChild(div);
      PopupStack.add({element: div, owner: event.currentTarget as HTMLElement});

      div.querySelector('.close-button').addEventListener('click', () => {
        document.body.removeChild(div);
        PopupStack.remove(div);
      });
    });

    return () => {
      // manual cleanup
      document.body.querySelectorAll('.example-popup').forEach(popup => {
        PopupStack.remove(popup as HTMLElement);
        document.body.removeChild(popup);
      });
    };
  }, []); // do all DOM manipulation once

  return (
    <div>
      <button className="wdc-btn" id="open-button">
        Create new popup stack item
      </button>
    </div>
  );
};
