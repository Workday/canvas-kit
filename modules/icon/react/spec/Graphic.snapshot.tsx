import * as renderer from 'react-test-renderer';
import Graphic from '../lib/Graphic';
import * as React from 'react';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';

describe('Graphic Snapshots', () => {
  test('renders as expected', () => {
    const mockGraphic: CanvasGraphic = {
      name: 'mockGraphic',
      type: CanvasIconTypes.Graphic,
      svg: '<svg></svg>',
      filename: 'mock-graphic.svg',
    };

    const component = renderer.create(<Graphic src={mockGraphic} />);
    expect(component).toMatchSnapshot();
  });
});
