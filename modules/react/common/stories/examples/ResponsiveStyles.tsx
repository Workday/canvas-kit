import * as React from 'react';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-react/tokens';
import {
  useResponsiveContainerStyles,
  useResizeObserver,
  ResponsiveContextProvider,
} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, SelectOption} from '@workday/canvas-kit-react/select';

const StyledHeading = styled(Box.as('h3'))({
  ...type.levels.body.large,
  ...type.variants.inverse,
  margin: 0,
  fontWeight: type.properties.fontWeights.bold,
});

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
        gridTemplateAreas: "'Header' 'ContentLeft' 'ContentRight ' 'Footer'",
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto auto auto',
        s: {
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
  const tablet = 768;
  const mobile = 320;

  const [contWidth, setContWidth] = React.useState(desktop);

  const [value, setValue] = React.useState('desktop');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    if (event.currentTarget.value === 'tablet') {
      setContWidth(tablet);
    } else if (event.currentTarget.value === 'mobile') {
      setContWidth(mobile);
    } else {
      setContWidth(desktop);
    }
  };

  return (
    <ResponsiveContextProvider width={width}>
      <Box ref={ref} {...responsiveStyles.box} maxWidth={contWidth}>
        <FormField label="Container Size">
          <Select onChange={handleChange} value={value}>
            <SelectOption label="1024px" value="desktop" />
            <SelectOption label="768px" value="tablet" />
            <SelectOption label="320px" value="mobile" />
          </Select>
        </FormField>
        <Grid as="section">
          <Grid {...responsiveStyles.parentContainer}>
            <Header {...responsiveStyles.childrenContainers}>
              <StyledHeading>Header</StyledHeading>
            </Header>
            <ContentLeft {...responsiveStyles.childrenContainers}>
              <StyledHeading>Content Left</StyledHeading>
            </ContentLeft>
            <ContentRight {...responsiveStyles.childrenContainers}>
              <StyledHeading>Content Right</StyledHeading>
            </ContentRight>
            <Footer {...responsiveStyles.childrenContainers}>
              <StyledHeading>Footer</StyledHeading>
            </Footer>
          </Grid>
        </Grid>
      </Box>
    </ResponsiveContextProvider>
  );
};
