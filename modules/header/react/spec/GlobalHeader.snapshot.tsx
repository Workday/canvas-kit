import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GlobalHeader from '../lib/GlobalHeader';
import {IconButton} from '@workday/canvas-kit-react-button';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';
import {Avatar} from '@workday/canvas-kit-react';
import {WorkdayLogoTitle} from '../lib/parts';
import {HeaderVariant} from '../lib/shared/types';

describe('App GlobalHeader Snapshots', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('renders an app header', () => {
    const tree = renderer.create(<GlobalHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders an app header width Workday Logo', () => {
    const tree = renderer
      .create(
        <GlobalHeader brand={<WorkdayLogoTitle variant={HeaderVariant.Global} />}>
          <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Square} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Square} />
        </GlobalHeader>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header with SystemIcon and IconButton children', () => {
    const tree = renderer
      .create(
        <GlobalHeader>
          <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Plain} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Plain} />
          <Avatar />
        </GlobalHeader>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header with a search bar', () => {
    const tree = renderer.create(<GlobalHeader onSearchSubmit={cb} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a header with content with a search bar', () => {
    const tree = renderer
      .create(
        <GlobalHeader onSearchSubmit={cb}>
          <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Plain} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Plain} />
          <Avatar />
        </GlobalHeader>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
