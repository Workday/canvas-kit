import {PopupStack, PopupStackItem, resetStack, defaultGetValue} from '../lib/PopupStack';

describe('PopupStack', () => {
  afterEach(() => {
    resetStack();
  });

  it('add() should add items to the stack', () => {
    const div = document.createElement('div');
    PopupStack.add({element: div});

    expect(PopupStack.getElements()).toEqual([div]);
  });

  it('remove() should remove items from the stack', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    PopupStack.add({element: div1});
    PopupStack.add({element: div2});

    PopupStack.remove(div1);

    expect(PopupStack.getElements()).toEqual([div2]);
  });

  describe('isTopmost()', () => {
    const elements = [1, 2, 3, 4].map(_ => document.createElement('div'));

    beforeEach(() => {
      elements.forEach(element => PopupStack.add({element}));
    });

    it('should return false for non-top elements', () => {
      expect(PopupStack.isTopmost(elements[0])).toEqual(false);
      expect(PopupStack.isTopmost(elements[1])).toEqual(false);
      expect(PopupStack.isTopmost(elements[2])).toEqual(false);
    });

    it('should return true for top element', () => {
      expect(PopupStack.isTopmost(elements[3])).toEqual(true);
    });

    it('should return false if there are no items in the stack', () => {
      expect(PopupStack.isTopmost(document.createElement('div'))).toEqual(false);
    });
  });

  it('getElement() should return a list of element', () => {
    const elements = [1, 2, 3, 4].map(_ => document.createElement('div'));
    elements.forEach(element => PopupStack.add({element}));

    expect(PopupStack.getElements()).toEqual(elements);
  });

  it('bringToTop() should bring request element to the top to the stack', () => {
    const elements = [1, 2, 3, 4].map(_ => document.createElement('div'));
    elements.forEach(element => PopupStack.add({element}));

    PopupStack.bringToTop(elements[0]);

    expect(PopupStack.isTopmost(elements[0])).toEqual(true);
  });

  describe('defaultGetValue()', () => {
    [
      {index: 0, length: 4, output: 30},
      {index: 2, length: 4, output: 32},
      {index: 3, length: 4, output: 33},
      {index: 49, length: 50, output: 50},
    ].forEach(({index, length, output}) => {
      it(`should assign index of ${index} and a length of ${length} a z-index of ${output}`, () => {
        expect(defaultGetValue(index, length)).toEqual(output);
      });
    });
  });

  describe('z-index', () => {
    const elements = [1, 2].map(_ => document.createElement('div'));

    it('should set an element to a z-index of 30 when added', () => {
      PopupStack.add({element: elements[0]});

      expect(elements[0].style.zIndex).toEqual('30');
    });

    it('should reset z-indexes when 2 elements are added', () => {
      elements.forEach(element => PopupStack.add({element}));

      expect(elements[0].style.zIndex).toEqual('30');
      expect(elements[1].style.zIndex).toEqual('31');
    });

    it('should reset z-indexes when an element is removed', () => {
      elements.forEach(element => PopupStack.add({element}));
      PopupStack.remove(elements[0]);

      expect(elements[1].style.zIndex).toEqual('30');
    });

    it('should reset z-indexes when an element is brought to the top of the stack', () => {
      elements.forEach(element => PopupStack.add({element}));
      PopupStack.bringToTop(elements[0]);

      expect(elements[0].style.zIndex).toEqual('31');
      expect(elements[1].style.zIndex).toEqual('30');
    });
  });
});
