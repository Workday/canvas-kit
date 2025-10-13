import {DeleteButton, SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Flex} from '@workday/canvas-kit-react/layout';
import {chartConfigIcon} from '@workday/canvas-system-icons-web';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const DescriptionType = () => {
  return (
    <Flex cs={{gap: cssVar(system.space.x4)}}>
      <Tooltip type="description" title="Search using additional criteria">
        <TertiaryButton icon={chartConfigIcon}>Advanced Search</TertiaryButton>
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
