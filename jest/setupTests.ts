import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import {toHaveNoViolations} from 'jest-axe';
import serializer, {matchers} from 'jest-emotion';
import '@testing-library/jest-dom/extend-expect';

expect.addSnapshotSerializer(serializer);
expect.extend(toHaveNoViolations);
expect.extend(matchers);
configure({adapter: new Adapter()});
