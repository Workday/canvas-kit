import {space} from '../lib/spacing';

describe('Space Function', () => {
  test('returns styled object', () => {
    const styles = space({mt: 12});

    expect(styles).toMatchObject({marginTop: '12px'});
  });

  test('returns negative styled object', () => {
    const styles = space({mt: -12});

    expect(styles).toMatchObject({marginTop: '-12px'});
  });
});
