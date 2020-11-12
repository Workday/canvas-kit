/** @jsx jsx */
import * as React from 'react';
import {styled} from '@workday/canvas-kit-react-common';
import {css, CSSObject, jsx, keyframes} from '@emotion/core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {spacing, colors, depth} from '@workday/canvas-kit-react-core';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';

export type SidePanelVariant = 'standard' | 'alternate';
export type SidePanelTransitionStates = 'collapsed' | 'collapsing' | 'expanded' | 'expanding';

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The element the side panel will render as (e.g. 'div').
   *
   * @default 'section'
   */
  as?: React.ElementType;
  /**
   * The width of the component (in `px` if it's a `number`) when it is collapsed.
   *
   * @default 64
   */
  collapsedWidth?: number | string;
  /**
   * If true, sets the expanded state of the side panel
   * @default true
   */
  expanded?: boolean;
  /**
   * The width of the component (in `px` if it's a `number`) when it is expanded.
   *
   * @default 320
   */
  expandedWidth?: number | string;
  /**
   * Which side the side panel is meant to originate from.
   *
   * @default 'left'
   */
  origin?: 'left' | 'right';
  /**
   * The function called when the side panel's `expanded` state changes. States like `'collapsing'` and `'expanding'` are tracked in another callback: `onStateTransition`
   *
   * @param boolean
   */
  onExpandedChange?: (expanded?: boolean) => void;
  /**
   * The function called when the side panel is transitioning between states.
   * Use this to track when the side panel is animating between `'collapsed'`, `'collapsing'`, `'expanded'`, and `'expanding'` states.
   * This can be particularly helpful if child components need to react specifically to these states.
   *
   * @param SidePanelTransitionStates
   */
  onStateTransition?: (state?: SidePanelTransitionStates) => void;
  /**
   * The style variant of the side panel. 'standard' is with a `soap100` background, no depth. 'alternate' is a `frenchVanilla100` background with a level 3 depth.
   *
   * @default 'standard'
   */
  variant?: SidePanelVariant;
}

const createKeyframes = (from: number | string, to: number | string) => {
  const normalized = {
    from: typeof from === 'number' ? from + 'px' : from,
    to: typeof to === 'number' ? to + 'px' : to,
  };

  return keyframes`
    from {
      width: ${normalized.from};
      min-width: ${normalized.from};
      max-width: ${normalized.from};
    } to {
      width: ${normalized.to};
      min-width: ${normalized.to};
      max-width: ${normalized.to};
    }
  `;
};

const containerVariantStyle: Record<SidePanelVariant, CSSObject> = {
  alternate: {
    backgroundColor: colors.frenchVanilla100,
    ...depth[3],
  },
  standard: {
    backgroundColor: colors.soap100,
  },
};

const Panel = styled('section')<Pick<SidePanelProps, 'as'>>({
  overflow: 'hidden',
  position: 'relative',
  boxSizing: 'border-box',
  height: '100%',
});

export const SidePanelContext = React.createContext({
  state: 'expanded',
  origin: 'left',
});

const SidePanel = ({
  as = 'section',
  children,
  collapsedWidth = 64,
  expanded = true,
  expandedWidth = 320,
  onAnimationEnd,
  onAnimationStart,
  onExpandedChange,
  onStateTransition,
  origin = 'left',
  variant = 'standard',
  ...elemProps
}: SidePanelProps) => {
  const mounted = React.useRef(false);
  const [state, setState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  // This is meant to prevent animations when the component renders for the first time.
  // mounted.current will only be false on the first pass
  React.useEffect(() => {
    mounted.current = true;
  }, []);

  React.useEffect(() => {
    if (typeof onExpandedChange !== 'undefined') {
      onExpandedChange(expanded);
    }
  }, [expanded, onExpandedChange]);

  React.useEffect(() => {
    if (typeof onStateTransition !== 'undefined') {
      onStateTransition(state);
    }
  }, [state, onStateTransition]);

  const motion = {
    collapse: createKeyframes(expandedWidth, collapsedWidth),
    expand: createKeyframes(collapsedWidth, expandedWidth),
  };

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      if (event.animationName === motion.collapse.name) {
        setState('collapsed');
      }

      if (event.animationName === motion.expand.name) {
        setState('expanded');
      }
    }

    if (typeof onAnimationEnd !== 'undefined') {
      onAnimationEnd(event);
    }
  };

  const handleAnimationStart = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      if (
        event.animationName === motion.collapse.name ||
        event.animationName === motion.expand.name
      ) {
        setState(expanded ? 'expanding' : 'collapsing');
      }
    }

    if (typeof onAnimationStart !== 'undefined') {
      onAnimationStart(event);
    }
  };

  return (
    <Panel
      as={as}
      css={[
        {
          width: expanded ? expandedWidth : collapsedWidth,
          maxWidth: expanded ? expandedWidth : collapsedWidth,
          // mounted.current will be false on the first render, thus you won't get an unwanted animation here
          // Will animate again if you force a re-render (like in Storybook)
          animation: mounted.current
            ? `${expanded ? motion.expand : motion.collapse} 200ms ease-out`
            : undefined,
        },
        containerVariantStyle[variant],
      ]}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
      {...elemProps}
    >
      <SidePanelContext.Provider
        value={{
          state,
          origin,
        }}
      >
        {children}
      </SidePanelContext.Provider>
    </Panel>
  );
};

type IconButtonPropsWithoutAriaLabel = Omit<IconButtonProps, 'aria-label'> &
  Partial<Pick<IconButtonProps, 'aria-label'>>;

interface IconButtonPropsWithLabelledBy extends IconButtonPropsWithoutAriaLabel {
  'aria-labelledby': string;
}

// ToggleButtonProps are IconButtonProps but 'aria-labelledby' will also satisify the constraint
export type ToggleButtonProps = IconButtonProps | IconButtonPropsWithLabelledBy;

/**
 * A toggle button styled specifically for the side panel container.
 */
const ToggleButton = ({
  variant = IconButton.Variant.Plain,
  icon = transformationImportIcon,
  ...rest
}: ToggleButtonProps) => {
  const context = React.useContext(SidePanelContext);

  // Note: Depending on the collapsed width, the button could "jump" to it's final position.
  const buttonStyle = css({
    position: 'absolute',
    top: spacing.m,
    right: context.state === 'collapsed' ? 0 : context.origin === 'left' ? spacing.s : undefined,
    left: context.state === 'collapsed' ? 0 : context.origin === 'right' ? spacing.s : undefined,
    margin: context.state === 'collapsed' ? 'auto' : 0, // to override the -8px margin for IconButton.Plain
    transform:
      context.state === 'collapsed' || context.state === 'collapsing'
        ? `scaleX(${context.origin === 'left' ? '1' : '-1'})`
        : `scaleX(${context.origin === 'left' ? '-1' : '1'})`,
  });

  // @ts-ignore aria-label type error here. The user will decide to use aria-label or aria-labelledby
  return <IconButton type="button" css={buttonStyle} icon={icon} variant={variant} {...rest} />;
};

SidePanel.ToggleButton = ToggleButton;
export default SidePanel;
