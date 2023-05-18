import {slugify} from '../lib/utils/slugify';

describe('slugify', () => {
  it('should remove leading spaces', () => {
    expect(slugify(' a')).toEqual('a');
  });

  it('should remove trailing spaces', () => {
    expect(slugify('a ')).toEqual('a');
  });

  it('should lowercase all letters', () => {
    expect(slugify('Ab')).toEqual('ab');
  });

  it('should add dashes for all spaces', () => {
    expect(slugify('a b')).toEqual('a-b');
  });

  it('should remove all non-alphanumeric characters', () => {
    expect(slugify('a.b')).toEqual('ab');
  });

  it('should collapse multiple spaces into a single dash', () => {
    expect(slugify('a       b')).toEqual('a-b');
  });

  it('should remove leading dashes', () => {
    expect(slugify('-ab')).toEqual('ab');
  });

  it('should remove trailing dashes', () => {
    expect(slugify('ab-')).toEqual('ab');
  });

  it('should collapse spaces and dashes to a single dash', () => {
    expect(slugify('a--  --b')).toEqual('a-b');
  });
});
