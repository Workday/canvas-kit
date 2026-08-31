import {stripIndent} from 'common-tags';

import transform from '../replaceFormFieldContainer';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('Replace FormField.Container with FormField.Field', () => {
  it('should replace FormField.Container with FormField.Field', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Container>
            <FormField.Input as={TextInput} />
            <FormField.Hint>You must provide an email</FormField.Hint>
          </FormField.Container>
        </FormField>
      );
    `;

    const expected = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} />
            <FormField.Hint>You must provide an email</FormField.Hint>
          </FormField.Field>
        </FormField>
      );
    `;

    expectTransform(input, expected);
  });

  it('should replace multiple FormField.Container instances', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <>
          <FormField>
            <FormField.Label>Email</FormField.Label>
            <FormField.Container>
              <FormField.Input as={TextInput} />
              <FormField.Hint>Email hint</FormField.Hint>
            </FormField.Container>
          </FormField>
          <FormField>
            <FormField.Label>Password</FormField.Label>
            <FormField.Container>
              <FormField.Input as={TextInput} type="password" />
              <FormField.Hint>Password hint</FormField.Hint>
            </FormField.Container>
          </FormField>
        </>
      );
    `;

    const expected = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <>
          <FormField>
            <FormField.Label>Email</FormField.Label>
            <FormField.Field>
              <FormField.Input as={TextInput} />
              <FormField.Hint>Email hint</FormField.Hint>
            </FormField.Field>
          </FormField>
          <FormField>
            <FormField.Label>Password</FormField.Label>
            <FormField.Field>
              <FormField.Input as={TextInput} type="password" />
              <FormField.Hint>Password hint</FormField.Hint>
            </FormField.Field>
          </FormField>
        </>
      );
    `;

    expectTransform(input, expected);
  });

  it('should handle FormField.Container with props', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Container cs={{marginTop: 'x2'}}>
            <FormField.Input as={TextInput} />
            <FormField.Hint>Email hint</FormField.Hint>
          </FormField.Container>
        </FormField>
      );
    `;

    const expected = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Field cs={{marginTop: 'x2'}}>
            <FormField.Input as={TextInput} />
            <FormField.Hint>Email hint</FormField.Hint>
          </FormField.Field>
        </FormField>
      );
    `;

    expectTransform(input, expected);
  });

  it('should handle FormField with horizontal orientation', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField orientation="horizontalStart">
          <FormField.Label>Password</FormField.Label>
          <FormField.Container>
            <FormField.Input as={TextInput} type="password" />
            <FormField.Hint>Must contain a number and capital letter</FormField.Hint>
          </FormField.Container>
        </FormField>
      );
    `;

    const expected = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField orientation="horizontalStart">
          <FormField.Label>Password</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} type="password" />
            <FormField.Hint>Must contain a number and capital letter</FormField.Hint>
          </FormField.Field>
        </FormField>
      );
    `;

    expectTransform(input, expected);
  });

  it('should handle FormField.Container with RadioGroup', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {RadioGroup} from '@workday/canvas-kit-react/radio';

      const MyComponent = () => (
        <FormField as="fieldset" orientation="horizontalStart">
          <FormField.Label as="legend">Radio Group Legend</FormField.Label>
          <FormField.Container>
            <FormField.Input as={RadioGroup}>
              <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
              <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
            </FormField.Input>
            <FormField.Hint>Error Message</FormField.Hint>
          </FormField.Container>
        </FormField>
      );
    `;

    const expected = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {RadioGroup} from '@workday/canvas-kit-react/radio';

      const MyComponent = () => (
        <FormField as="fieldset" orientation="horizontalStart">
          <FormField.Label as="legend">Radio Group Legend</FormField.Label>
          <FormField.Field>
            <FormField.Input as={RadioGroup}>
              <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
              <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
            </FormField.Input>
            <FormField.Hint>Error Message</FormField.Hint>
          </FormField.Field>
        </FormField>
      );
    `;

    expectTransform(input, expected);
  });

  it('should not transform if FormField.Container is not present', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Input as={TextInput} />
        </FormField>
      );
    `;

    const expected = input;

    expectTransform(input, expected);
  });

  it('should not transform other Container components', () => {
    const input = stripIndent`
      import {OtherComponent} from '@some/package';

      const MyComponent = () => (
        <OtherComponent.Container>
          <div>Content</div>
        </OtherComponent.Container>
      );
    `;

    const expected = input;

    expectTransform(input, expected);
  });

  it('should handle nested FormField.Container components', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <div>
          <FormField>
            <FormField.Label>Email</FormField.Label>
            <FormField.Container>
              <FormField.Input as={TextInput} />
            </FormField.Container>
          </FormField>
          <div>
            <FormField>
              <FormField.Label>Name</FormField.Label>
              <FormField.Container>
                <FormField.Input as={TextInput} />
              </FormField.Container>
            </FormField>
          </div>
        </div>
      );
    `;

    const expected = stripIndent`
      import {FormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <div>
          <FormField>
            <FormField.Label>Email</FormField.Label>
            <FormField.Field>
              <FormField.Input as={TextInput} />
            </FormField.Field>
          </FormField>
          <div>
            <FormField>
              <FormField.Label>Name</FormField.Label>
              <FormField.Field>
                <FormField.Input as={TextInput} />
              </FormField.Field>
            </FormField>
          </div>
        </div>
      );
    `;

    expectTransform(input, expected);
  });

  it('should handle FormField.Container with renamed imports', () => {
    const input = stripIndent`
      import {FormField as CustomFormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <CustomFormField>
          <CustomFormField.Label>Email</CustomFormField.Label>
          <CustomFormField.Container>
            <CustomFormField.Input as={TextInput} />
            <CustomFormField.Hint>Email hint</CustomFormField.Hint>
          </CustomFormField.Container>
        </CustomFormField>
      );
    `;

    const expected = stripIndent`
      import {FormField as CustomFormField} from '@workday/canvas-kit-react/form-field';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <CustomFormField>
          <CustomFormField.Label>Email</CustomFormField.Label>
          <CustomFormField.Field>
            <CustomFormField.Input as={TextInput} />
            <CustomFormField.Hint>Email hint</CustomFormField.Hint>
          </CustomFormField.Field>
        </CustomFormField>
      );
    `;

    expectTransform(input, expected);
  });

  it('should NOT change imports from non Canvas imports', () => {
    const input = stripIndent`
      import {FormField} from '@other-package';
    `;

    const expected = stripIndent`
      import {FormField} from '@other-package';
    `;

    expectTransform(input, expected);
  });

  it('should handle FormField.Container from main package import', () => {
    const input = stripIndent`
      import {FormField} from '@workday/canvas-kit-react';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Container>
            <FormField.Input as={TextInput} />
            <FormField.Hint>Email hint</FormField.Hint>
          </FormField.Container>
        </FormField>
      );
    `;

    const expected = stripIndent`
      import {FormField} from '@workday/canvas-kit-react';
      import {TextInput} from '@workday/canvas-kit-react/text-input';

      const MyComponent = () => (
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} />
            <FormField.Hint>Email hint</FormField.Hint>
          </FormField.Field>
        </FormField>
      );
    `;

    expectTransform(input, expected);
  });
});
