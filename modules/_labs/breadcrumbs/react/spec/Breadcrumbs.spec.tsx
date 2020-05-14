import * as React from 'react';
import {render, waitForElement, act, fireEvent, createEvent} from '@testing-library/react';
import Breadcrumbs from '../lib/Breadcrumbs';

export const enterEvent = {
  key: `Enter`,
  code: `Enter`,
  keyCode: 13,
};

export const downEvent = {
  key: `ArrowDown`,
  code: `ArrowDown`,
  keyCode: 40,
};

export const tabEvent = {
  key: `Tab`,
  code: `Tab`,
  keyCode: 9,
};

const exampleBreadcrumbs = [
  {
    name: 'Root',
    onAction: () => {
      window.alert(`Root`);
    },
  },
  {
    name: 'Folder1',
    onAction: () => {
      window.alert(`Folder1`);
    },
  },
  {
    name: 'Folder2',
    onAction: () => {
      window.alert(`Folder2`);
    },
  },
  {
    name: 'Folder3',
    onAction: () => {
      window.alert(`Folder3`);
    },
  },
  {
    name: 'Folder4',
    onAction: () => {
      window.alert(`Folder4`);
    },
  },
  {
    name: 'Folder5',
    onAction: () => {
      window.alert(`Folder5`);
    },
  },
];

describe(`<Breadcrumbs />`, () => {
  beforeEach(() => {
    jest
      .spyOn(window.HTMLCanvasElement.prototype, `getContext`)
      .mockImplementation((contextId: string, options?: any): any => {
        return {
          measureText: () => {
            return {width: 50};
          },
          font: ``,
        };
      });
  });
  test(`properly renders text in breadcrumbs with no truncation`, async () => {
    // Arrange:
    const {findByText, queryByTestId} = render(
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={600} />
    );

    // Act:
    const root = await findByText(`Root`);
    const first = await findByText(`Folder1`);
    const second = await findByText(`Folder2`);
    const third = await findByText(`Folder3`);
    const fourth = await findByText(`Folder4`);
    const fifth = await findByText(`Folder5`);

    const ellipsis = queryByTestId(`more-breadcrumbs`);
    expect(ellipsis).toBe(null);
  });

  test(`properly renders truncation icon if container is too small`, async () => {
    // Arrange:
    const {findByTestId} = render(
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={300} />
    );

    // Act:
    const ellipsis = await waitForElement(() => findByTestId(`more-breadcrumbs`));

    // Assert:
    expect(ellipsis).toBeDefined();
  });

  test(`dropdown calls action when clicked`, async () => {
    // Arrange:
    const alert = jest.spyOn(window, `alert`).mockImplementation(() => {}); // eslint-disable-line no-empty-function
    const {findByTestId, findByText} = render(
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={300} />
    );

    // Act:
    const ellipsis = await waitForElement(() => findByTestId(`more-breadcrumbs`));
    act(() => {
      fireEvent.click(ellipsis);
    });

    const secondOption = await findByText(`Folder2`);
    act(() => {
      fireEvent.click(secondOption);
    });

    // Assert:
    expect(alert).toHaveBeenCalledTimes(1);
  });

  test(`dropdown calls action on enter press and is navigable through arrow keys`, async () => {
    // Arrange:
    const alert = jest.spyOn(window, `alert`).mockImplementation(() => {}); // eslint-disable-line no-empty-function
    const {findByTestId, findByText} = render(
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={300} />
    );

    // Act:
    const ellipsis = await waitForElement(() => findByTestId(`more-breadcrumbs`));
    act(() => {
      const event = createEvent.keyUp(ellipsis, enterEvent);
      fireEvent(ellipsis, event);
    });

    const firstOption = await findByText(`Folder1`);
    const secondOption = await findByText(`Folder2`);

    act(() => {
      const event = createEvent.keyUp(firstOption, downEvent);
      fireEvent(firstOption, event);
    });

    act(() => {
      const event = createEvent.keyUp(secondOption, enterEvent);
      fireEvent(secondOption, event);
    });

    // Assert:
    expect(alert).toHaveBeenCalledTimes(1);
  });

  test(`crumb calls action on enter press and is navigable through tab`, async () => {
    // Arrange:
    const alert = jest.spyOn(window, `alert`).mockImplementation(() => {}); // eslint-disable-line no-empty-function
    const {findByText} = render(
      <Breadcrumbs breadcrumbs={exampleBreadcrumbs} containerWidth={600} />
    );

    // Act:
    const firstOption = await findByText(`Folder1`);
    const secondOption = await findByText(`Folder2`);
    firstOption.focus();

    act(() => {
      const event = createEvent.keyDown(firstOption, tabEvent);
      fireEvent(firstOption, event);
    });

    act(() => {
      const event = createEvent.keyDown(secondOption, enterEvent);
      fireEvent(secondOption, event);
    });

    // Assert:
    expect(alert).toHaveBeenCalledTimes(1);
  });
});
