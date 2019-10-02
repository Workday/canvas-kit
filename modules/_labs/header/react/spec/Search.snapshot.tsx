import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from '../lib/Header';
import {Search} from '../lib/parts/Search';

describe('Header Search Snapshots', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('Renders a collapsed search bar', () => {
    const component = renderer.create(<Search collapse={true} />);

    expect(component).toMatchSnapshot();
  });

  test('Renders a search bar with a value', () => {
    const component = renderer.create(<Search value="Hello World" />);

    expect(component).toMatchSnapshot();
  });

  test('Renders a search bar with a value', () => {
    const component = renderer.create(<Search value="Hello World" />);
    expect(component).toMatchSnapshot();
  });

  test('renders themed search bars', () => {
    const tree = {
      blue: renderer.create(<Search themeColor={Header.Theme.Blue} />).toJSON(),
      transparent: renderer.create(<Search themeColor={Header.Theme.Transparent} />).toJSON(),
      white: renderer.create(<Search themeColor={Header.Theme.White} />).toJSON(),
    };

    expect(tree.blue).toMatchSnapshot('<Search /> with blue theme applied');
    expect(tree.transparent).toMatchSnapshot('<Search /> with transparent theme applied');
    expect(tree.white).toMatchSnapshot('<Search /> with white theme applied');
  });

  test('renders themed search bars', () => {
    const tree = {
      blue: renderer.create(<Search themeColor={Header.Theme.Blue} />).toJSON(),
      transparent: renderer.create(<Search themeColor={Header.Theme.Transparent} />).toJSON(),
      white: renderer.create(<Search themeColor={Header.Theme.White} />).toJSON(),
    };
    expect(tree.blue).toMatchSnapshot('<Search /> with blue theme applied');
    expect(tree.transparent).toMatchSnapshot('<Search /> with transparent theme applied');
    expect(tree.white).toMatchSnapshot('<Search /> with white theme applied');
  });

  test('renders themed, collapsed search bars', () => {
    const tree = {
      blue: renderer.create(<Search themeColor={Header.Theme.Blue} collapse={true} />).toJSON(),
      transparent: renderer
        .create(<Search themeColor={Header.Theme.Transparent} collapse={true} />)
        .toJSON(),
      white: renderer.create(<Search themeColor={Header.Theme.White} collapse={true} />).toJSON(),
    };
    expect(tree.blue).toMatchSnapshot('<Search /> with blue theme applied');
    expect(tree.transparent).toMatchSnapshot('<Search /> with transparent theme applied');
    expect(tree.white).toMatchSnapshot('<Search /> with white theme applied');
  });
});
