import * as React from 'react';
import {shallow} from 'enzyme';
import Graphic, {graphicStyles} from '../lib/Graphic';
import Svg from '../lib/Svg';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';

describe('Graphic', () => {
  test('Icon is of type graphic', () => {
    const mockGraphic: CanvasGraphic = {
      name: 'mockGraphic',
      type: CanvasIconTypes.Graphic,
      svg: '<svg></svg>',
      filename: 'mock-graphic.svg',
    };

    const component = shallow(<Graphic src={mockGraphic} />);
    expect(component.find(Svg).prop('type')).toEqual('graphic');
    component.unmount();
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
});
