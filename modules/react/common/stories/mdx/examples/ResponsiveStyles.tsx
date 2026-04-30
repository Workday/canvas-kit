import * as React from 'react';

import {useResizeObserver, useResponsiveContainerStyles} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Box, Flex, Grid} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';
import {Text} from '@workday/canvas-kit-react/text';

const HeadingText = ({children, ...props}) => (
  <Text as="p" fontSize={20} fontWeight="bold" color="frenchVanilla100" margin={0} {...props}>
    {children}
  </Text>
);

const Header = ({children, ...props}) => (
  <Grid gridArea="Header" backgroundColor="blueberry400" {...props}>
    {children}
  </Grid>
);

const ContentRight = ({children, ...props}) => (
  <Grid gridArea="ContentRight" backgroundColor="blueberry300" {...props}>
    {children}
  </Grid>
);

const ContentLeft = ({children, ...props}) => (
  <Grid gridArea="ContentLeft" backgroundColor="plum300" {...props}>
    {children}
  </Grid>
);

const Footer = ({children, ...props}) => (
  <Grid gridArea="Footer" backgroundColor="berrySmoothie300" {...props}>
    {children}
  </Grid>
);

export const ResponsiveContainer = () => {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  useResizeObserver({
    ref: ref,
    onResize: data => {
      setWidth(data.width || 0);
    },
  });

  const responsiveStyles = useResponsiveContainerStyles(
    {
      parentContainer: {
        gridGap: 's',
        display: 'inline-grid',
        gridTemplateAreas: "'Header' 'ContentLeft' 'ContentRight ' 'Footer'",
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto auto auto',
        m: {
          gridTemplateAreas: "'Header Header' 'ContentLeft ContentRight ' 'Footer Footer'",
          gridGap: 's',
          gridTemplateColumns: '1fr 3fr',
          gridTemplateRows: 'auto 200px auto',
        },
      },
      childrenContainers: {
        depth: 1,
        borderRadius: 'm',
        padding: 's',
      },
      box: {
        padding: 's',
      },
    },
    width
  );

  const desktop = 1024;

  const [contWidth, setContWidth] = React.useState(desktop);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line radix
    setContWidth(parseInt(event.target.value));
  };

  return (
    <Box ref={ref} width={contWidth}>
      <FormField>
        <FormField.Label>Container Size</FormField.Label>
        <Select items={['1024px', '768px', '320px']} initialSelectedIds={['1024px']}>
          <FormField.Input as={Select.Input} onChange={handleChange} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
      <Grid as="section">
        <Grid {...responsiveStyles.parentContainer}>
          <Header {...responsiveStyles.childrenContainers}>
            <HeadingText>Header</HeadingText>
          </Header>
          <ContentLeft {...responsiveStyles.childrenContainers}>
            <HeadingText>Content Left</HeadingText>
          </ContentLeft>
          <ContentRight {...responsiveStyles.childrenContainers}>
            <HeadingText>Content Right</HeadingText>
          </ContentRight>
          <Footer {...responsiveStyles.childrenContainers}>
            <HeadingText>Footer</HeadingText>
          </Footer>
        </Grid>
      </Grid>
    </Box>
  );
};
