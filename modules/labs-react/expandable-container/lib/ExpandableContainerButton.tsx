import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useIsRTL,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ExpandableContainerModelContext} from './ExpandableContainer';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {type, space, colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {chevronDownIcon, chevronUpIcon} from '@workday/canvas-system-icons-web';

export interface ExpandableContainerTargetProps {
  model?: DisclosureModel;
  children: React.ReactNode;
  rightChevron?: boolean;
}

interface ChevronProps {
  isVisible: boolean;
  isRTL?: boolean;
}

const useDiscloseTarget = (
  {state, events}: DisclosureModel,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  return {
    onClick(event: React.MouseEvent<HTMLElement>) {
      elemProps.onClick?.(event);

      if (state.visibility === 'visible') {
        events.hide({event});
      } else {
        events.show({event});
      }
    },
  };
};

const StyledButton = styled('button')<ExpandableContainerTargetProps & StyledType>(
  {
    fontFamily: type.properties.fontFamilies.default,
    fontSize: type.properties.fontSizes[18],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    background: colors.frenchVanilla100,
    borderRadius: space.xxxs,
    border: 'none',
    padding: '0',
    margin: '0',
    '&:hover': {
      background: colors.soap300,
    },
    '&:focus': {
      outline: `1px solid ${colors.blueberry400}`,
    },
  },
  ({rightChevron}) => {
    return {
      justifyContent: rightChevron ? 'space-between' : 'flex-start',
    };
  }
);

const RightChevron = styled(SystemIcon)<ChevronProps & StyledType>(
  {padding: space.xxs},
  ({isVisible}) => {
    return {
      transform: !isVisible ? 'rotate(180deg)' : undefined,
    };
  }
);

const LeftChevron = styled(SystemIcon)<ChevronProps & StyledType>(
  {padding: space.xxs},
  ({isVisible, isRTL}) => {
    if (!isVisible) {
      return {
        transform: isRTL ? 'rotate(90deg)' : 'rotate(-90deg)',
      };
    }
    return undefined;
  }
);

export const ExpandableContainerButton = createComponent('button')({
  displayName: 'ExpandableContainer.Header.Button',
  Component: (
    {children, model, rightChevron = false, ...elemProps}: ExpandableContainerTargetProps,
    ref,
    Element
  ) => {
    const expandableContainerModel = useModelContext(ExpandableContainerModelContext, model);
    const target = useDiscloseTarget(expandableContainerModel, elemProps);

    const state = expandableContainerModel.state;
    const isVisible = state.visibility === 'visible';

    const isRTL = useIsRTL();

    return (
      <StyledButton
        aria-controls={isVisible ? state.id : undefined}
        aria-expanded={isVisible}
        as={Element}
        ref={ref}
        rightChevron={rightChevron}
        {...target}
      >
        {!rightChevron && (
          <LeftChevron isRTL={isRTL} isVisible={isVisible} icon={chevronDownIcon} />
        )}
        {children}
        {rightChevron && <RightChevron isRTL={isRTL} isVisible={isVisible} icon={chevronUpIcon} />}
      </StyledButton>
    );
  },
});
