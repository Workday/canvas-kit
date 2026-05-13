import {DeleteButton, SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {configureIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export const DescriptionType = () => {
  return (
    <Flex cs={{gap: system.gap.sm}}>
      <Tooltip type="description" title="Search using additional criteria">
        <TertiaryButton icon={configureIcon}>Advanced Search</TertiaryButton>
      </Tooltip>
      <Tooltip type="description" title="Create saved search">
        <SecondaryButton>Save</SecondaryButton>
      </Tooltip>
      <Tooltip type="description" title="The service will restart after this action">
        <DeleteButton>Delete</DeleteButton>
      </Tooltip>
    </Flex>
  );
};
