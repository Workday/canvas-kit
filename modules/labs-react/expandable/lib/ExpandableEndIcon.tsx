import React from 'react';

import {
  createComponent,
  ExtractProps,
  styled,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {chevronUpIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export interface ExpandableEndIconProps
  extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  model?: DisclosureModel;
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`
   * @default chevronUpIcon
   */
  icon?: CanvasSystemIcon;
}

const StyledEndIcon = styled(SystemIcon)<{visible: boolean}>(
  {
    marginLeft: 'auto',
  },
  ({visible}) => ({
    transform: !visible ? 'rotate(-180deg)' : undefined,
    padding: !visible
      ? `${space.xxxs} ${space.xs} ${space.xxxs} ${space.xxxs}`
      : `${space.xxxs} ${space.xxxs} ${space.xxxs} ${space.xs}`,
  })
);

export const ExpandableEndIcon = createComponent('span')({
  displayName: 'Expandable.StartIcon',
  Component: ({icon = chevronUpIcon, model, ...elemProps}: ExpandableEndIconProps, ref) => {
    const localModel = useModelContext(ExpandableModelContext, model);
    const props = useExpandableIcon(localModel, elemProps, ref);

    return <StyledEndIcon fill={colors.licorice200} icon={icon} {...props} />;
  },
});
