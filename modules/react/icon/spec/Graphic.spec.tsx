import * as React from 'react';
import {render} from '@testing-library/react';

import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';
import {Graphic, graphicStyles} from '../lib/Graphic';

const mockGraphic: CanvasGraphic = {
  name: 'mockGraphic',
  type: CanvasIconTypes.Graphic,
  svg: '<svg></svg>',
  filename: 'mock-graphic.svg',
};

describe('Graphic', () => {
  it('should render an svg with a graphic type', () => {
    const {container} = render(<Graphic src={mockGraphic} />);

    // container is not a semantic element
    expect(container.firstChild).toContainHTML('svg');
  });

  test('No default sizing', () => {
    const componentStyle = graphicStyles({});
    expect(componentStyle).toMatchObject({});
  });

  test('Can set width', () => {
    const componentStyle = graphicStyles({width: 24});
    expect(componentStyle['& svg']).toEqual(expect.objectContaining({width: 24, height: '100%'}));
  });

  test('Can set height', () => {
    const componentStyle = graphicStyles({height: 24});
    expect(componentStyle['& svg']).toEqual(expect.objectContaining({height: 24, width: '100%'}));
  });

  test('Width overrides height', () => {
    const componentStyle = graphicStyles({width: 48, height: 24});
    expect(componentStyle['& svg']).toEqual(expect.objectContaining({width: 48, height: '100%'}));
  });

  test('Grow', () => {
    const componentStyle = graphicStyles({grow: true});
    expect(componentStyle).toEqual(
      expect.objectContaining({
        width: '100%',
        '& svg': {
          width: '100%',
          height: '100%',
        },
      })
    );
  });

  it('should forward extra props to containing element', () => {
    const {container} = render(<Graphic src={mockGraphic} data-propspread="test" />);

    // container is not a semantic element
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
