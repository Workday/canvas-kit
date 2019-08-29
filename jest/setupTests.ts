import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import {toHaveNoViolations} from 'jest-axe';
import serializer from 'jest-emotion';
import '@testing-library/jest-dom/extend-expect';

expect.addSnapshotSerializer(serializer);
expect.extend(toHaveNoViolations);
configure({adapter: new Adapter()});

const mockComponentImpl = (clazz: any, name: string) => {
  return class MockClass extends clazz {
    render() {
      let mockObject = `${name}`;
      Object.keys(this.props).map((key) => {
        const value = this.props[key];
        if ((typeof value === 'string' && value.trim()) || typeof value === 'boolean' || typeof value === 'number') {
          mockObject += `\n\t${key}: ${value}`;
        }
      });
      return mockObject;
    }
  };
};

(global as any).mockComponentImpl = mockComponentImpl;

(global as any).mockButtonModule = () => {
  const realImplementation = require.requireActual('@workday/canvas-kit-react-button');
  return {
    ...realImplementation,
    IconButton: mockComponentImpl(realImplementation.IconButton, 'MockIconButton')
  };
};
