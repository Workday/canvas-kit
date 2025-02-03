import React from 'react';

import {PopupStack} from '@workday/canvas-kit-popup-stack';

export const Basic = () => {
  const containerRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    document.querySelector('#open-button').addEventListener('click', event => {
      const {x, y} = containerRef.current.getBoundingClientRect();
      const number = document.body.querySelectorAll('.wdc-card').length;
      const div = document.createElement('div');
      div.className = 'example-popup';
      div.style.position = 'absolute';
      div.style.width = '200px';
      div.style.background = 'white';
      div.style.border = '1px black solid';
      div.style.padding = '8px';
      div.style.top = `${document.documentElement.scrollTop + y + 20 + 30 * number}px`;
      div.style.left = `${x + 30 * number}px`;

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
    <div ref={containerRef} style={{position: 'relative'}}>
      <button className="wdc-btn" id="open-button">
        Create new popup stack item
      </button>
    </div>
  );
};
