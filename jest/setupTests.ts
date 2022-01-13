import {toHaveNoViolations} from 'jest-axe';
import serializer, {matchers} from 'jest-emotion';
import '@testing-library/jest-dom/extend-expect';
import {verifyComponent} from './verifyComponent';
import {jest} from '@jest/globals';

expect.addSnapshotSerializer(serializer);
expect.extend(toHaveNoViolations);
expect.extend(matchers);

// add convenience variables to the global context
(global as any).verifyComponent = verifyComponent;
(global as any).jest = jest;
