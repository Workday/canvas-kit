import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Expandable, useExpandableModel} from '@workday/canvas-kit-react/expandable';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const listStyles = createStyles({
  flexDirection: 'column',
  gap: system.space.x2,
  padding: system.space.zero,
  marginX: system.space.x4,
  marginY: system.space.zero,
});

export const HoistedModel = () => {
  const modelOne = useExpandableModel();
  const modelTwo = useExpandableModel();
  const modelThree = useExpandableModel();

  const idOne = useUniqueId();
  const idTwo = useUniqueId();
  const idThree = useUniqueId();

  const handleExpandAll = () => {
    modelOne.events.show();
    modelTwo.events.show();
    modelThree.events.show();
  };

  const handleCollapseAll = () => {
    modelOne.events.hide();
    modelTwo.events.hide();
    modelThree.events.hide();
  };

  return (
    <Flex gap={system.space.x6} flexDirection="column">
      <Flex gap={system.space.x4}>
        <SecondaryButton onClick={handleExpandAll}>Expand All</SecondaryButton>
        <SecondaryButton onClick={handleCollapseAll}>Collapse All</SecondaryButton>
      </Flex>
      <Flex flexDirection="column">
        <Expandable model={modelOne}>
          <Expandable.Target headingLevel="h4">
            <Expandable.Title id={idOne}>Usage Guidance</Expandable.Title>
            <Expandable.Icon iconPosition="end" />
          </Expandable.Target>

          <Expandable.Content as="section" aria-labelledby={idOne}>
            This component highlights the most important details of a section and reveals more when
            a user taps or clicks on the header part of the container. Enabling users to hide and
            show information ensures the design remains focused and relevant to their expectations.
            Scanning through the most critical information first makes processing more efficient
            without compromising the ability to access additional information.
          </Expandable.Content>
        </Expandable>
        <Expandable model={modelTwo}>
          <Expandable.Target headingLevel="h4">
            <Expandable.Title id={idTwo}>Accessibility Guidelines</Expandable.Title>
            <Expandable.Icon iconPosition="end" />
          </Expandable.Target>

          <Expandable.Content as="section" aria-labelledby={idTwo}>
            <Flex as="ul" cs={listStyles}>
              <li>
                The state of a component being open or closed must be conveyed to assistive
                technologies.
              </li>
              <li>A Button must be used as the control to toggle the display of any content.</li>
              <li>
                If there are multiple toggle Buttons on the same page, provide additional
                information in their labels to make them uniquely distinguishable to a screen
                reader.
              </li>
              <li>
                Do not change the toggle Button label to convey state. An exception to this would be
                a scenario where a visual hint text is decoupled from both the state and the label
                for a control so the hint text is not announced by assistive technologies.
              </li>
              <li>
                Avoid keyboard traps when adding components to the accordion panel. For example, the
                user expands an accordion, but is unable to tab to the next focusable element.
              </li>
              <li>
                Hidden content must be hidden correctly from keyboard, screen reader, and touch
                interaction.
              </li>
              <li>
                Changing the label of something to indicate its state will not always be accounted
                for in live time for a screen reader user. For example, a play button should have a
                non-changing, persistent label and the state (pressed or unpressed) is conveyed
                visually as well as to assistive technology once the state is changed.
              </li>
            </Flex>
          </Expandable.Content>
        </Expandable>
        <Expandable model={modelThree}>
          <Expandable.Target headingLevel="h4">
            <Expandable.Title id={idThree}>Content Guidelines</Expandable.Title>
            <Expandable.Icon iconPosition="end" />
          </Expandable.Target>
          <Expandable.Content as="section" aria-labelledby={idThree}>
            Titles should be short and concise, yet long enough to explain what the user would
            expect to see when the content is expanded. If titles must be long, make sure it doesn't
            wrap more than two lines.
          </Expandable.Content>
        </Expandable>
      </Flex>
    </Flex>
  );
};
