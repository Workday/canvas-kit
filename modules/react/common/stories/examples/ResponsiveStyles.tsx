import * as React from 'react';
import {Box, Grid, Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {useResponsiveContainerStyles, useResizeObserver} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, SelectOption} from '@workday/canvas-kit-react/select';

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

  const [value, setValue] = React.useState('desktop');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItemWidth = event.target[event.target.selectedIndex].label;
    setValue(event.target.value);
    // eslint-disable-next-line radix
    setContWidth(parseInt(selectedItemWidth));
  };

  return (
    <Box ref={ref} maxWidth={contWidth}>
      <FormField label={'Container Size'}>
        <Select onChange={handleChange} value={value}>
          <SelectOption label="1024px" value="desktop" />
          <SelectOption label="768px" value="tablet" />
          <SelectOption label="320px" value="mobile" />
        </Select>
      </FormField>
      <Grid as="section" display="inline-grid">
        <Flex display="inline-flex" />
        <Box display="inline-block" />
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
