import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from '../lib/Header';
import {IconButton} from '@workday/canvas-kit-react-button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';

const nav = (
  <nav>
    <ul>
      <li className="current">
        <a href="#">One</a>
      </li>
      <li>
        <a href="#">Two</a>
      </li>
      <li>
        <a href="#">Three</a>
      </li>
    </ul>
  </nav>
);

describe('Dub Header Snapshots', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });
  test('renders a default header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a default header with title', () => {
    const tree = renderer.create(<Header title="Header Title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders themed headers', () => {
    const tree = {
      blue: renderer.create(<Header themeColor={Header.Theme.Blue} />).toJSON(),
      transparent: renderer.create(<Header themeColor={Header.Theme.Transparent} />).toJSON(),
      white: renderer.create(<Header themeColor={Header.Theme.White} />).toJSON(),
    };
    expect(tree.blue).toMatchSnapshot('<Header /> with blue theme applied');
    expect(tree.transparent).toMatchSnapshot('<Header /> with transparent theme applied');
    expect(tree.white).toMatchSnapshot('<Header /> with white theme applied');
  });
  test('renders a header with custom breakpoints', () => {
    const breakpoints = {
      sm: 1,
      md: 2,
      lg: 3,
    };

    const tree = renderer.create(<Header breakpoints={breakpoints} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a header with a custom brand element', () => {
    const brand = <div>Brand</div>;

    const tree = renderer.create(<Header brand={brand} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a header with nav elements', () => {
    const tree = {
      default: renderer.create(<Header>{nav}</Header>).toJSON(),
      centered: renderer.create(<Header centeredNav={true}>{nav}</Header>).toJSON(),
    };

    expect(tree.default).toMatchSnapshot();
    expect(tree.centered).toMatchSnapshot();
  });

  test('renders a header with SystemIcon and IconButton children', () => {
    const tree = renderer
      .create(
        <Header>
          <SystemIcon icon={notificationsIcon} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Square} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Plain} />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header with a search bar', () => {
    const tree = renderer.create(<Header onSearchSubmit={cb} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header with content with a search bar', () => {
    const tree = renderer
      .create(
        <Header onSearchSubmit={cb}>
          <IconButton icon={notificationsIcon} />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Full Header Snapshots', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });
  test('renders a default header', () => {
    const component = renderer.create(<Header variant={Header.Variant.Full} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a default header with title', () => {
    const tree = renderer
      .create(<Header variant={Header.Variant.Full} title="Header Title" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders themed headers', () => {
    const tree = {
      blue: renderer
        .create(<Header variant={Header.Variant.Full} themeColor={Header.Theme.Blue} />)
        .toJSON(),
      transparent: renderer
        .create(<Header variant={Header.Variant.Full} themeColor={Header.Theme.Transparent} />)
        .toJSON(),
      white: renderer
        .create(<Header variant={Header.Variant.Full} themeColor={Header.Theme.White} />)
        .toJSON(),
    };
    expect(tree.blue).toMatchSnapshot('<Header /> with blue theme applied');
    expect(tree.transparent).toMatchSnapshot('<Header /> with transparent theme applied');
    expect(tree.white).toMatchSnapshot('<Header /> with white theme applied');
  });
  test('renders a header with custom breakpoints', () => {
    const breakpoints = {
      sm: 1,
      md: 2,
      lg: 3,
    };

    const tree = renderer
      .create(<Header variant={Header.Variant.Full} breakpoints={breakpoints} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a header with a custom brand element', () => {
    const brand = <div>Brand</div>;

    const tree = renderer.create(<Header variant={Header.Variant.Full} brand={brand} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a header with nav elements', () => {
    const tree = {
      default: renderer.create(<Header variant={Header.Variant.Full}>{nav}</Header>).toJSON(),
      centered: renderer
        .create(
          <Header variant={Header.Variant.Full} centeredNav={true}>
            {nav}
          </Header>
        )
        .toJSON(),
    };

    expect(tree.default).toMatchSnapshot();
    expect(tree.centered).toMatchSnapshot();
  });

  test('renders a header with system icon children', () => {
    const tree = renderer
      .create(
        <Header variant={Header.Variant.Full}>
          <IconButton icon={notificationsIcon} />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header with a search bar', () => {
    const tree = renderer
      .create(<Header variant={Header.Variant.Full} onSearchSubmit={cb} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a blue header with a search bar and no children', () => {
    const tree = renderer
      .create(
        <Header variant={Header.Variant.Full} themeColor={Header.Theme.Blue} onSearchSubmit={cb} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header with content with a search bar', () => {
    const tree = renderer
      .create(
        <Header variant={Header.Variant.Full} themeColor={Header.Theme.Blue} onSearchSubmit={cb}>
          <IconButton icon={notificationsIcon} />
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header in a lg screen with search', () => {
    // @ts-ignore
    window.innerWidth = 1280;
    const tree = renderer
      .create(
        <Header
          brandUrl={'http://test'}
          onSearchSubmit={() => {
            return;
          }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
