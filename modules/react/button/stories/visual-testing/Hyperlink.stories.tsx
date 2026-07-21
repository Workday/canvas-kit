import {Hyperlink} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {system} from '@workday/canvas-tokens-web';

import {Container} from './utils';

export default {
  title: 'Testing/Buttons/Button/Hyperlink',
  component: Hyperlink,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const HyperlinkStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={permutateProps({
          variant: [
            {label: 'Default', value: undefined},
            {label: 'Inverse', value: 'inverse'},
            {label: 'Secondary', value: 'secondary'},
          ],
          linkType: [
            {label: 'Inline', value: undefined},
            {label: 'Standalone', value: 'standalone'},
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
            <Box cs={{...system.type.subtext.lg}}>
              <Box
                as="span"
                cs={{color: props.variant === 'inverse' ? system.color.fg.inverse : undefined}}
              >
                Here's a <Hyperlink {...props}>Link</Hyperlink> to something
              </Box>
            </Box>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
