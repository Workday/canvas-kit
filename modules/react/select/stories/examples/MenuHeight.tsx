import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const selectCardStyles = createStyles({
  maxHeight: px2rem(200),
});

const cities = [
  'Atlanta (United States)',
  'Amsterdam (Europe)',
  'Austin (United States)',
  'Beaverton (United States)',
  'Belfast (Europe)',
  'Berlin (Europe)',
  'Boston (United States)',
  'Boulder (United States)',
  'Chicago (United States)',
  'Dallas (United States)',
  'Denver (United States)',
  'Dublin (Europe)',
  'Irvine (United States)',
  'Minneapolis (United States)',
  'New York (United States)',
  'Orlando (United States)',
  'Palo Alto (United States)',
  'Philadelphia (United States)',
  'Pleasanton (United States)',
  'Raleigh (United States)',
  'San Francisco (United States)',
  'San Mateo (United States)',
  'Stockholm (Europe)',
  'Toronto (Canada)',
  'Victoria (Canada)',
  'Vienna (Europe)',
  'Warsaw (Europe)',
  'Washington, DC (United States)',
  'Zurich (Europe)',
];

export const MenuHeight = () => {
  return (
    <Box>
      <FormField>
        <FormField.Label>Choose a City</FormField.Label>
        <FormField.Field>
          <Select items={cities}>
            <FormField.Input as={Select.Input} />
            <Select.Popper>
              <Select.Card cs={selectCardStyles}>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
    </Box>
  );
};
