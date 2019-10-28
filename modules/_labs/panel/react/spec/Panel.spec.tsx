import * as React from 'react';
import Panel, {PanelHeader} from '../index';
import {mount} from 'enzyme';
// import ReactDOMServer from 'react-dom/server';
// import {axe} from 'jest-axe';

fdescribe('Panel', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });
  test('render a div with id', () => {
    const component = mount(<Panel id="myPanel" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('id')).toBe('myPanel');
    component.unmount();
  });

  test('Panel should spread extra props', () => {
    const component = mount(<Panel data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });

  test('should call a close function when a Panel Header is passed', () => {
    const component = mount(
      <Panel header={<PanelHeader onClose={cb} headerTitle={'Title'}></PanelHeader>} />
    );
    const panel = component.find('button');
    panel.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });
});
