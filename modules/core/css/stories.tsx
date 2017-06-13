import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Core', module)
  .addDecorator(withReadme(README))
  .add('Typography', () => {
    const inverseStyle = {
      display: 'inline-block',
      background: '#667380',
      padding: '2px 8px',
      borderRadius: '3px',
      marginTop: 0,
    };

    return (
      <div className="story">
        <h3>Type Hierarchy</h3>

        <section className="wdc-type">
          <h1 className="wdc-type-data-viz-1">Data Viz 1</h1>
          <h1 className="wdc-type-data-viz-2">Data Viz 2</h1>
          <h1 className="wdc-type-h1">H1 Header</h1>
          <h2 className="wdc-type-h2">H2 Header</h2>
          <h3 className="wdc-type-h3">H3 Header</h3>
          <h4 className="wdc-type-h4">H4 Header</h4>
          <h5 className="wdc-type-h5">H5 Header</h5>
          <p className="wdc-type-body-1">
            <strong>Body 1: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
            ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
            kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim
            laboris sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid
            try-hard raw denim, thundercats salvia intelligentsia jean shorts officia. Heirloom
            craft beer put a bird on it occaecat
          </p>
          <p className="wdc-type-body-2">
            <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
            ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
            kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim
            laboris sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid
            try-hard raw denim, thundercats salvia intelligentsia jean shorts officia. Heirloom
            craft beer put a bird on it occaecat
          </p>
          <p className="wdc-type-small">
            <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
            ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
            kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim
            laboris sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid
            try-hard raw denim, thundercats salvia intelligentsia jean shorts officia. Heirloom
            craft beer put a bird on it occaecat
          </p>
        </section>

        <h3>Type Variations</h3>

        <section className="wdc-type">
          <div>
            <p className="wdc-type-variant-label">Label</p>
            <p className="wdc-type-variant-button">Button</p>
            <p className="wdc-type-variant-caps">Caps</p>
            <p className="wdc-type-variant-hint">Hint</p>
            <p className="wdc-type-variant-error">Error</p>
            <a className="wdc-type-variant-link" href="#">
              Link
            </a>
            <p className="wdc-type-variant-mono">Mono</p>
            <p className="wdc-type-variant-inverse" style={inverseStyle}>
              Inverse
            </p>
          </div>
        </section>
      </div>
    );
  });

storiesOf('CSS/Core', module)
  .addDecorator(withReadme(README))
  .add('Depth', () => {
    const cardStyle = {
      width: 200,
      height: 200,
      margin: 20,
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <div className="story">
        <div style={{display: 'flex'}}>
          <div className="wdc-depth-inset" style={cardStyle}>
            <h4 className="wdc-type-h5">Depth -1</h4>
          </div>
          <div className="wdc-depth-1" style={cardStyle}>
            <h4 className="wdc-type-h5">Depth 1</h4>
          </div>
          <div className="wdc-depth-2" style={cardStyle}>
            <h4 className="wdc-type-h5">Depth 2</h4>
          </div>
          <div className="wdc-depth-3" style={cardStyle}>
            <h4 className="wdc-type-h5">Depth 3</h4>
          </div>
          <div className="wdc-depth-4" style={cardStyle}>
            <h4 className="wdc-type-h5">Depth 4</h4>
          </div>
        </div>
      </div>
    );
  });

storiesOf('CSS/Core', module)
  .addDecorator(withReadme(README))
  .add('Accessibility', () => (
    <div className="story">
      <div className="wdc-type">
        <div>
          <button tabIndex={0}>Default Behavior</button>
        </div>
      </div>

      <div className="wdc-type wdc-a11y">
        <div>
          <button tabIndex={0}>What-input Behavior</button>
        </div>
      </div>
    </div>
  ));
