import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {css} from 'react-emotion';
import canvas from '../index';

export const inverseStyle = {
  display: 'inline-block',
  background: '#667380',
  padding: '2px 8px',
  borderRadius: '3px',
};
export const type = (hierarchy: any) => (
  <div>
    <h1 style={hierarchy.h1}>H1 Header</h1>
    <h2 style={hierarchy.h2}>H2 Header</h2>
    <h3 style={hierarchy.h3}>H3 Header</h3>
    <h4 style={hierarchy.h4}>H4 Header</h4>
    <h5 style={hierarchy.h5}>H5 Header</h5>
    <p style={hierarchy.body}>
      <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={hierarchy.body2}>
      <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={hierarchy.small}>
      <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <hr />

    <h3 style={hierarchy.h3}>Variants</h3>

    <span className={css(hierarchy.body, hierarchy.variant.button)}>Button Text</span>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.caps)}>Caps Text</span>
    <br />
    <label className={css(hierarchy.body, hierarchy.variant.label)}>Label Text</label>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.hint)}>Hint Text</span>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.error)}>Error Text</span>
    <br />
    <a href="#" className={css(hierarchy.body, hierarchy.variant.link)}>
      Link Text
    </a>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.inverse, inverseStyle)}>
      Inverse Text
    </span>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.mono)}>Mono Text</span>
  </div>
);

describe('Type Snapshots', () => {
  test('renders current type hierarchy', () => {
    const component = renderer.create(
      <div>
        <h1 style={canvas.type.dataViz1}>Data Viz 1 Header</h1>
        <h1 style={canvas.type.dataViz2}>Data Viz 2 Header</h1>
        {type(canvas.type)}
      </div>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders beta type hierarchy', () => {
    const component = renderer.create(
      <div>
        <h1 style={canvas.beta_type.brand1}>Brand 1 Header</h1>
        <h1 style={canvas.beta_type.brand2}>Brand 2 Header</h1>
        {type(canvas.beta_type)}
      </div>
    );
    expect(component).toMatchSnapshot();
  });
});
