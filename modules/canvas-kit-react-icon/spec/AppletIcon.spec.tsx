import {appletIconStyles} from '../lib/AppletIcon';

describe('Applet Icon', () => {
  test('Throws error if using unofficial color names', () => {
    const unknownColor = 'peachpuff';

    const iconOfUnknownColor = () => {
      // @ts-ignore TS catches error, so we have to squelch to test the throw
      appletIconStyles({color: unknownColor});
      // in case it doesn't throw
    };

    expect(iconOfUnknownColor).toThrow();
  });
});
