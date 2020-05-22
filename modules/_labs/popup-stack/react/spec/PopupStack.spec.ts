import {PopupStack, PopupStackItem, resetStack, defaultGetValue} from '../lib/PopupStack';

describe('PopupStack', () => {
  afterEach(() => {
    resetStack();
  });

  it('add() should add items to the stack', () => {
    const div = document.createElement('div');
    PopupStack.add({element: div, type: 'ephemeral'});

    expect(PopupStack.getElements()).toEqual([div]);
  });

  it('remove() should remove items from the stack', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    PopupStack.add({element: div1, type: 'ephemeral'});
    PopupStack.add({element: div2, type: 'ephemeral'});

    PopupStack.remove(div1);

    expect(PopupStack.getElements()).toEqual([div2]);
  });

  it('getTopItem() should get the top item from the stack', () => {
    const item1 = {element: document.createElement('div'), type: 'ephemeral'};
    const item2 = {element: document.createElement('div'), type: 'persistent'};
    const item3 = {element: document.createElement('div'), type: 'ephemeral'};
    const item4 = {element: document.createElement('div'), type: 'persistent'};

    [item1, item2, item3, item4].forEach(item => PopupStack.add(item as PopupStackItem));

    expect(PopupStack.getTopItem()).toEqual(item4);
  });

  describe('isTopmost()', () => {
    const item1 = {element: document.createElement('div'), type: 'ephemeral'};
    const item2 = {element: document.createElement('div'), type: 'persistent'};
    const item3 = {element: document.createElement('div'), type: 'ephemeral'};
    const item4 = {element: document.createElement('div'), type: 'persistent'};

    beforeEach(() => {
      [item1, item2, item3, item4].forEach(item => PopupStack.add(item as PopupStackItem));
    });

    it('should return false for non-top elements', () => {
      expect(PopupStack.isTopmost(item1.element)).toEqual(false);
      expect(PopupStack.isTopmost(item2.element)).toEqual(false);
      expect(PopupStack.isTopmost(item3.element)).toEqual(false);
    });

    it('should return true for top element', () => {
      expect(PopupStack.isTopmost(item4.element)).toEqual(true);
    });

    it('should return false for non-top ephemeral elements', () => {
      expect(PopupStack.isTopmost(item1.element, 'ephemeral')).toEqual(false);
      expect(PopupStack.isTopmost(item2.element, 'ephemeral')).toEqual(false);
      expect(PopupStack.isTopmost(item4.element, 'ephemeral')).toEqual(false);
    });

    it('should return true for top ephemeral element', () => {
      expect(PopupStack.isTopmost(item3.element, 'ephemeral')).toEqual(true);
    });

    it('should return false for non-top persistent elements', () => {
      const item5 = {element: document.createElement('div'), type: 'ephemeral'};
      expect(PopupStack.isTopmost(item1.element, 'persistent')).toEqual(false);
      expect(PopupStack.isTopmost(item2.element, 'persistent')).toEqual(false);
      expect(PopupStack.isTopmost(item3.element, 'persistent')).toEqual(false);
      expect(PopupStack.isTopmost(item5.element, 'persistent')).toEqual(false);
    });

    it('should return true for top persistent element', () => {
      const item5 = {element: document.createElement('div'), type: 'ephemeral'};
      PopupStack.add(item5 as PopupStackItem);
      expect(PopupStack.isTopmost(item4.element, 'persistent')).toEqual(true);
    });

    it('should return false if there are no items in the stack', () => {
      expect(PopupStack.isTopmost(document.createElement('div'))).toEqual(false);
    });
  });

  it('getElement() should return a list of element', () => {
    const elements = [1, 2, 3, 4].map(_ => document.createElement('div'));
    elements.forEach(element => PopupStack.add({element, type: 'ephemeral'}));

    expect(PopupStack.getElements()).toEqual(elements);
  });

  it('bringToTop() should bring request element to the top to the stack', () => {
    const elements = [1, 2, 3, 4].map(item => document.createElement('div'));
    elements.forEach(element => PopupStack.add({element, type: 'ephemeral'}));

    PopupStack.bringToTop(elements[0]);

    expect(PopupStack.isTopmost(elements[0])).toEqual(true);
  });

  describe('defaultGetValue()', () => {
    [
      {index: 3, length: 4, output: 50},
      {index: 2, length: 4, output: 49},
      {index: 0, length: 50, output: 30},
    ].forEach(({index, length, output}) => {
      it(`should assign index of ${index} and a length of ${length} a z-index of ${output}`, () => {
        expect(defaultGetValue(index, length)).toEqual(output);
      });
    });
  });

  describe('z-index', () => {
    const elements = [1, 2].map(_ => document.createElement('div'));

    it('should set an element to a z-index of 50 when added', () => {
      PopupStack.add({element: elements[0], type: 'ephemeral'});

      expect(elements[0].style.zIndex).toEqual('50');
    });

    it('should reset z-indexes when 2 elements are added', () => {
      elements.forEach(element => PopupStack.add({element, type: 'ephemeral'}));

      expect(elements[0].style.zIndex).toEqual('49');
      expect(elements[1].style.zIndex).toEqual('50');
    });

    it('should reset z-indexes when an element is removed', () => {
      elements.forEach(element => PopupStack.add({element, type: 'ephemeral'}));
      PopupStack.remove(elements[0]);

      expect(elements[1].style.zIndex).toEqual('50');
    });

    it('should reset z-indexes when an element is brought to the top of the stack', () => {
      elements.forEach(element => PopupStack.add({element, type: 'ephemeral'}));
      PopupStack.bringToTop(elements[0]);

      expect(elements[0].style.zIndex).toEqual('50');
      expect(elements[1].style.zIndex).toEqual('49');
    });
  });
});
