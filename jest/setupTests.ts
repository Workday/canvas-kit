import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import {toHaveNoViolations} from 'jest-axe';
import serializer from 'jest-emotion';
import '@testing-library/jest-dom/extend-expect';

expect.addSnapshotSerializer(serializer);
expect.extend(toHaveNoViolations);
configure({adapter: new Adapter()});
