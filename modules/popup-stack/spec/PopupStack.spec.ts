import {PopupStack, PopupStackItem, resetStack, getValue, createAdapter} from '../lib/PopupStack';

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
    describe('with elements', () => {
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

      it('should return false if the element is not in the stack', () => {
        const element = document.createElement('div');

        expect(PopupStack.isTopmost(element)).toEqual(false);
      });
    });

    describe('without elements', () => {
      const element = document.createElement('div');

      expect(PopupStack.isTopmost(element)).toEqual(false);
    });
  });

  it('getElement() should return a list of element', () => {
    const elements = [1, 2, 3, 4].map(_ => document.createElement('div'));
    elements.forEach(element => PopupStack.add({element}));

    expect(PopupStack.getElements()).toEqual(elements);
  });

  describe('bringToTop()', () => {
    it('should bring element to the top to the stack', () => {
      const elements = [1, 2, 3, 4].map(_ => document.createElement('div'));
      elements.forEach(element => document.body.appendChild(element));
      elements.forEach(element => PopupStack.add({element}));

      PopupStack.bringToTop(elements[0]);

      expect(PopupStack.isTopmost(elements[0])).toEqual(true);
    });

    it('should bring child popup elements to the top of the stack by owner reference', () => {
      const elements = [1, 2, 3, 4].map(_ => document.createElement('div'));
      elements.forEach(element => PopupStack.add({element}));

      const element = document.createElement('div');
      const owner = document.createElement('div');
      elements[0].appendChild(owner); // ensure we look up the DOM tree
      PopupStack.add({element, owner});

      PopupStack.bringToTop(elements[0]);
      expect(PopupStack.isTopmost(element)).toEqual(true);
      expect(PopupStack.getElements()).toEqual([
        elements[1],
        elements[2],
        elements[3],
        elements[0],
        element,
      ]);
    });
  });

  describe('contains()', () => {
    it('should return true when the eventTarget is a child of the stack element', () => {
      const element = document.createElement('div');
      const eventTarget = document.createElement('div');
      element.appendChild(eventTarget);

      PopupStack.add({element});

      expect(PopupStack.contains(element, eventTarget)).toEqual(true);
    });

    it('should return false when an eventTarget is outside the stack element', () => {
      const element = document.createElement('div');
      const eventTarget = document.createElement('div');

      PopupStack.add({element});

      expect(PopupStack.contains(element, eventTarget)).toEqual(false);
    });

    it('should return true when the owning element is the eventTarget', () => {
      const owner = document.createElement('div');
      const element = document.createElement('div');

      PopupStack.add({element, owner});

      expect(PopupStack.contains(element, owner)).toEqual(true);
    });

    it('should return true when the owning element contains the eventTarget', () => {
      const owner = document.createElement('div');
      const element = document.createElement('div');
      const eventTarget = document.createElement('div');
      owner.appendChild(eventTarget);

      PopupStack.add({element, owner});

      expect(PopupStack.contains(element, eventTarget)).toEqual(true);
    });

    it('should return false if the element is not in the stack', () => {
      const element = document.createElement('div');
      const eventTarget = document.createElement('div');

      expect(PopupStack.contains(element, eventTarget)).toEqual(false);
    });
  });

  describe('createAdapter()', () => {
    let adapterItems: PopupStackItem[] = [];

    const customAdapter = {
      transferOwnership: (items: PopupStackItem[]) => {
        if (items) {
          items.forEach((item, index) => {
            console.log('transfer item ', index);
            adapterItems.push(item);
          });
        }
      },
      getPopupStackItems: () => {
        return adapterItems;
      },
    };

    afterEach(() => {
      adapterItems = [];

      // Reset the adapter with the default adapter.
      createAdapter({});
    });

    describe('without items', () => {
      it('should not call transfer any items to the new adapter', () => {
        createAdapter(customAdapter);

        expect(PopupStack.getPopupStackItems().length).toEqual(0);
      });
    });

    describe('with items', () => {
      it('should move item ownership from the old adapter to the new adapter', () => {
        // Add one popup so it exists in the old adapter.
        PopupStack.add({
          element: document.createElement('div'),
          owner: document.createElement('button'),
        });

        expect(PopupStack.getPopupStackItems().length).toEqual(1);

        createAdapter(customAdapter);

        expect(PopupStack.getPopupStackItems().length).toEqual(1);
      });
    });
  });

  describe('transferOwnership()', () => {
    describe('without items', () => {
      it('should not transfer any items to the new adapter', () => {
        PopupStack.transferOwnership([]);
        expect(PopupStack.getPopupStackItems().length).toEqual(0);
      });
    });

    describe('with items', () => {
      it('should move item ownership from the old adapter to the new adapter', () => {
        PopupStack.transferOwnership([
          {
            element: document.createElement('div'),
            owner: document.createElement('button'),
          },
          {
            element: document.createElement('div'),
            owner: document.createElement('span'),
          },
        ]);

        expect(PopupStack.getPopupStackItems().length).toEqual(2);
      });
    });
  });

  it('getPopupStackItems() should return a list of popup stack items', () => {
    PopupStack.add({
      element: document.createElement('div'),
      owner: document.createElement('input'),
    });
    PopupStack.add({
      element: document.createElement('div'),
      owner: document.createElement('h2'),
    });
    PopupStack.add({
      element: document.createElement('div'),
      owner: document.createElement('button'),
    });

    expect(PopupStack.getPopupStackItems().length).toEqual(3);
  });

  describe('defaultGetValue()', () => {
    [
      {index: 0, length: 20, output: 30},
      {index: 1, length: 20, output: 31},
      {index: 2, length: 20, output: 32},
      // If we have too many popups to fit in the range, stack at 30 rather than at 50
      {index: 0, length: 50, output: 30},
      {index: 1, length: 50, output: 30},
      {index: 2, length: 50, output: 30},
      {index: 19, length: 50, output: 30},
      {index: 20, length: 50, output: 30},
      {index: 21, length: 50, output: 30},
      {index: 29, length: 50, output: 30},
      {index: 30, length: 50, output: 31},
      {index: 48, length: 50, output: 49},
      {index: 49, length: 50, output: 50},
      {index: 0, length: 20, output: 30},
      {index: 19, length: 20, output: 49},
      {index: 0, length: 21, output: 30},
      {index: 20, length: 21, output: 50},
    ].forEach(({index, length, output}) => {
      it(`should assign index of ${index} and a length of ${length} a z-index of ${output}`, () => {
        expect(getValue(index, length)).toEqual(output);
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
