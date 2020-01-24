import * as React from 'react';
import {render} from '@testing-library/react';
import Hint from '../lib/Hint';

describe('Hint', () => {
  describe('when rendered with an ErrorType', () => {
    it('should render an error label when error type is Error', async () => {
      const {getByTestId} = render(<Hint data-testid="hintError" error={Hint.ErrorType.Error} />);
      expect(getByTestId('hintError').children[0].textContent).toEqual('Error: ');
    });
    it('should render an alert label when error type is Alert', async () => {
      const {getByTestId} = render(<Hint data-testid="hintError" error={Hint.ErrorType.Alert} />);
      expect(getByTestId('hintError').children[0].textContent).toEqual('Alert: ');
    });
  });
  describe('when rendered with a custom Error string', () => {
    it('should render a custom label for type Error', async () => {
      const {getByTestId} = render(
        <Hint errorLabel={'Hay un Error'} data-testid="hintError" error={Hint.ErrorType.Error} />
      );
      expect(getByTestId('hintError').children[0].textContent).toEqual('Hay un Error: ');
    });
  });
});
