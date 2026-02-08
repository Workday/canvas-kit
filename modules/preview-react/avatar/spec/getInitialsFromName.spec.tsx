import {getInitialsFromName} from '../lib/getInitialsFromName';

describe('getInitialsFromName', () => {
  it('should return initials from a simple first and last name', () => {
    expect(getInitialsFromName('Logan McNeil')).toBe('LM');
  });

  it('should return initials from a single name', () => {
    expect(getInitialsFromName('Logan')).toBe('L');
  });

  it('should remove parenthetical content', () => {
    expect(getInitialsFromName('Logan McNeil (SFV, VP Director)')).toBe('LM');
  });

  it('should filter out Roman numeral suffixes', () => {
    expect(getInitialsFromName('Logan McNeil III')).toBe('LM');
    expect(getInitialsFromName('John Smith IV')).toBe('JS');
    expect(getInitialsFromName('Mary Johnson II')).toBe('MJ');
  });

  it('should handle multiple middle names', () => {
    expect(getInitialsFromName('John Paul Jones')).toBe('JJ');
  });

  it('should handle names with both parenthetical content and suffixes', () => {
    expect(getInitialsFromName('Logan McNeil III (VP Director)')).toBe('LM');
  });

  it('should handle extra whitespace', () => {
    expect(getInitialsFromName('  Logan   McNeil  ')).toBe('LM');
  });

  it('should return empty string for empty input', () => {
    expect(getInitialsFromName('')).toBe('');
  });

  it('should handle names with only parenthetical content', () => {
    expect(getInitialsFromName('(VP Director)')).toBe('');
  });

  it('should handle names with numeric suffixes', () => {
    expect(getInitialsFromName('Logan McNeil 3')).toBe('LM');
  });

  it('should work with names from various cultures', () => {
    expect(getInitialsFromName('José García')).toBe('JG');
    expect(getInitialsFromName('Mohammed Al-Rashid')).toBe('MA');
  });

  it('should handle mixed case Roman numerals', () => {
    expect(getInitialsFromName('Logan McNeil iii')).toBe('LM');
    expect(getInitialsFromName('Logan McNeil Iii')).toBe('LM');
  });
});
