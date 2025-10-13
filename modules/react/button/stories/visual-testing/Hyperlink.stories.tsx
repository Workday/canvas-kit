import {Box} from '@workday/canvas-kit-react/layout';
import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Container} from './utils';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Buttons/Button/Hyperlink',
  component: Hyperlink,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const parentContainerStyles = createStencil({
  base: {
    ...system.type.subtext.large,
  },
  modifiers: {
    inverse: {
      true: {
        '> *': {
          color: system.color.fg.inverse,
        },
      },
    },
  },
});

export const HyperlinkStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          variant: [
            {label: 'Default', value: undefined},
            {label: 'Inverse', value: 'inverse'},
          ],
        })}
        columnProps={permutateProps({
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
            {label: 'Visited', value: 'visited'},
          ],
        })}
      >
        {(props: any) => (
          <Container blue={props.variant === 'inverse'}>
            <Box cs={parentContainerStyles({inverse: props.variant === 'inverse'})}>
              <Box as="span">
                Here's a <Hyperlink {...props}>Link</Hyperlink> to something
              </Box>
            </Box>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
