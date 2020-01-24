import * as React from 'react';
import {render} from '@testing-library/react';
import Hint from '../lib/Hint';

describe('Hint', () => {
  describe('when rendered with an ErrorType', () => {
    it('should render an error label when error type is Error', async () => {
      const {getByText} = render(<Hint error={Hint.ErrorType.Error} />);
      expect(getByText('Error:')).toBeDefined();
    });
    it('should render an alert label when error type is Alert', async () => {
      const {getByText} = render(<Hint error={Hint.ErrorType.Alert} />);
      expect(getByText('Alert:')).toBeDefined();
    });
  });
  describe('when rendered with a custom Error string', () => {
    it('should render a custom label for type Error', async () => {
      const {getByText} = render(<Hint errorLabel={'Hay un error'} error={Hint.ErrorType.Error} />);
      expect(getByText('Hay un error:')).toBeDefined();
    });
  });
});
