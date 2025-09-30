import React from 'react';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {SearchForm, SearchTheme} from '@workday/canvas-kit-labs-react/search-form';
import {Flex} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';

export default {
  title: 'Testing/Labs/SearchForm',
  component: SearchForm,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Search submitted');
};

const Container = ({children, background}: {children: React.ReactNode; background?: string}) => (
  <Flex
    padding="s"
    backgroundColor={background || 'transparent'}
    minHeight={64}
    alignItems="center"
    width="100%"
  >
    {children}
  </Flex>
);

export const SearchFormThemes = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Light Theme',
            props: {searchTheme: SearchTheme.Light},
          },
          {
            label: 'Dark Theme',
            props: {searchTheme: SearchTheme.Dark, background: colors.blueberry500},
          },
          {
            label: 'Transparent Theme',
            props: {searchTheme: SearchTheme.Transparent},
          },
          {
            label: 'Custom Theme',
            props: {
              searchTheme: {
                background: colors.cantaloupe100,
                backgroundFocus: colors.cantaloupe200,
                backgroundHover: colors.cantaloupe300,
                color: colors.blackPepper400,
                colorFocus: colors.blackPepper400,
                placeholderColor: colors.licorice300,
                placeholderColorFocus: colors.licorice300,
                boxShadow: 'none',
                boxShadowFocus: `0 0 0 2px ${colors.cantaloupe400}`,
              },
            },
          },
        ]}
        columnProps={[
          {label: 'Default', props: {}},
          {label: 'Collapsed', props: {isCollapsed: true}},
          {label: 'With initialValue', props: {initialValue: 'Search terms'}},
          {label: 'Right Aligned', props: {rightAlign: true}},
        ]}
      >
        {({searchTheme, background, isCollapsed, initialValue, rightAlign}) => (
          <Container background={background}>
            <SearchForm
              onSubmit={handleSubmit}
              searchTheme={searchTheme}
              isCollapsed={isCollapsed}
              initialValue={initialValue}
              rightAlign={rightAlign}
            />
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const SearchFormSizes = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Default Height (40px)',
            props: {height: 40},
          },
          {
            label: 'Small Height (32px)',
            props: {height: 32},
          },
          {
            label: 'Large Height (48px)',
            props: {height: 48},
          },
        ]}
        columnProps={[
          {label: 'Light Theme', props: {searchTheme: SearchTheme.Light}},
          {
            label: 'Dark Theme',
            props: {searchTheme: SearchTheme.Dark, background: colors.blueberry500},
          },
          {label: 'Transparent Theme', props: {searchTheme: SearchTheme.Transparent}},
        ]}
      >
        {({height, searchTheme, background}) => (
          <Container background={background}>
            <SearchForm onSubmit={handleSubmit} searchTheme={searchTheme} height={height} />
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const SearchFormCollapsedStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Light Theme',
            props: {searchTheme: SearchTheme.Light},
          },
          {
            label: 'Dark Theme',
            props: {searchTheme: SearchTheme.Dark, background: colors.blueberry500},
          },
          {
            label: 'Transparent Theme',
            props: {searchTheme: SearchTheme.Transparent},
          },
        ]}
        columnProps={[
          {label: 'Collapsed', props: {isCollapsed: true}},
          // Note: This is just for visual testing - in real application, you would show the form programmatically
          {label: 'Collapsed (Open)', props: {isCollapsed: true, showForm: true}},
        ]}
      >
        {({searchTheme, background, isCollapsed, showForm}) => (
          <Container background={background}>
            {showForm ? (
              // For testing purposes, we're rendering a component that simulates the open state
              <SearchForm
                onSubmit={handleSubmit}
                searchTheme={searchTheme}
                isCollapsed={isCollapsed}
                // @ts-ignore - This is just for testing purposes
                showForm={true}
              />
            ) : (
              <SearchForm
                onSubmit={handleSubmit}
                searchTheme={searchTheme}
                isCollapsed={isCollapsed}
              />
            )}
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const SearchFormGrowStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'With Grow',
            props: {grow: true},
          },
          {
            label: 'Without Grow',
            props: {grow: false},
          },
        ]}
        columnProps={[
          {label: 'Light Theme', props: {searchTheme: SearchTheme.Light}},
          {
            label: 'Dark Theme',
            props: {searchTheme: SearchTheme.Dark, background: colors.blueberry500},
          },
          {label: 'Transparent Theme', props: {searchTheme: SearchTheme.Transparent}},
        ]}
      >
        {({grow, searchTheme, background}) => (
          <Container background={background}>
            <Flex width="100%">
              <SearchForm onSubmit={handleSubmit} searchTheme={searchTheme} grow={grow} />
            </Flex>
          </Container>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
