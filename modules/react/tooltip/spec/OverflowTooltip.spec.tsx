import {findEllipsisElement, findOverflowElement} from '..';

describe('findEllipsisElement', () => {
  it('returns null if element has no children attribute [SVG in IE 11]', () => {
    const el = document.createElement('svg');
    expect(findEllipsisElement(el)).toBeNull();
  });
});

describe('findOverflowElement', () => {
  it('returns null if element has no children attribute [SVG in IE 11]', () => {
    const el = document.createElement('svg');
    expect(findOverflowElement(el)).toBeNull();
  });
});
