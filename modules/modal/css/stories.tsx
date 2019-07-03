import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {xIcon} from '@workday/canvas-system-icons-web';

let modalOpen = false;
enum modalSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  any = '',
}

function toggleModal(size: modalSize) {
  const wdcModalContainer = document.getElementById('wdc-modal-demo');
  console.log(size);
  if (wdcModalContainer) {
    const wdcModal = wdcModalContainer.children[0];

    modalOpen = !modalOpen;
    document.body.className = modalOpen ? 'wdc-overlay' : '';
    wdcModalContainer.className = modalOpen
      ? 'wdc-modal-container wdc-modal-visible'
      : 'wdc-modal-container';

    if (modalOpen) {
      wdcModal.className = `wdc-modal wdc-modal-${size}`;
    }
  }
}

function closeModal() {
  if (modalOpen) {
    toggleModal(modalSize.any);
  }
}

storiesOf('CSS/Modal', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div id="canvas-modal-root">
      <div className="story">
        <button id="wdc-btn-open-sm" className="wdc-btn" onClick={() => toggleModal(modalSize.sm)}>
          Small Modal Demo
        </button>
        <button id="wdc-btn-open-md" className="wdc-btn" onClick={() => toggleModal(modalSize.md)}>
          Medium Modal Demo
        </button>
        <button id="wdc-btn-open-lg" className="wdc-btn" onClick={() => toggleModal(modalSize.lg)}>
          Large Modal Demo
        </button>
        <div
          id="wdc-modal-demo"
          className="wdc-modal-container"
          onClick={closeModal}
          aria-hidden="true"
        >
          <div className="wdc-modal">
            <div className="wdc-modal-header">
              <div className="wdc-modal-title">Discard Changes?</div>
              <div
                id="wdc-btn-close"
                className="wdc-modal-close-btn"
                onClick={closeModal}
                onKeyDown={e => {
                  if (e.key === '27') {
                    closeModal();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <SystemIcon icon={xIcon} />
              </div>
            </div>
            <div className="wdc-modal-body">
              If you cancel, you&apos;ll lose any changes you&apos;ve made. They won&apos;t be
              recoverable if you discard now.
            </div>
            <div className="wdc-modal-footer">
              <button id="wdc-btn-primary" className="wdc-btn wdc-btn-primary" onClick={closeModal}>
                Discard
              </button>
              <button id="wdc-btn-cancel" className="wdc-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
