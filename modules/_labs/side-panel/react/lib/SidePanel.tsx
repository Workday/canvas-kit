/** @jsx jsx */
import * as React from 'react';
import {css, jsx, keyframes, CSSObject} from '@emotion/core';
import {useUniqueId} from '@workday/canvas-kit-react-common';
import {IconButton} from '@workday/canvas-kit-react-button';
import {spacing, colors, depth} from '@workday/canvas-kit-react-core';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';

import {useControllableState} from './hooks';

export type SidePanelVariant = 'standard' | 'alternate';
export type SidePanelInternalStates = 'collapsed' | 'collapsing' | 'expanded' | 'expanding';

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies the _controlled_ state the side panel is in. Leave undefined if you want to keep this an _uncontrolled_ component.
   *
   * @default false
   */
  collapsed?: boolean;
  /**
   * Specifies default state (collapsed or expanded) if the component is uncontrolled.
   *
   * @default false
   */
  defaultCollapsed?: boolean;
  /**
   * The height of the component (in `px` if it's a `number`).
   *
   * @default 400
   */
  height?: number | string;
  /**
   * The width of the component (in `px` if it's a `number`) when it is expanded.
   *
   * @default 320
   */
  width?: number | string;
  /**
   * The width of the component (in `px` if it's a `number`) when it is collapsed.
   *
   * @default 64
   */
  collapsedWidth?: number | string;
  /**
   * Specifies which side the side panel is meant to originate from.
   *
   * @default 'left'
   */
  origin?: 'left' | 'right';
  /**
   * Fired when the side panel state changes
   *
   * @param boolean
   */
  onCollapsedChange?: (collapsed?: boolean, animationState?: SidePanelInternalStates) => void;
  /**
   * Style variants of the side panel
   *
   * @default 'grey'
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

const containerVariantStyle: {[K in SidePanelVariant]: CSSObject} = {
  alternate: {
    backgroundColor: colors.frenchVanilla100,
    ...depth[3],
  },
  standard: {
    backgroundColor: colors.soap100,
  },
};

const SidePanel = ({
  id,
  children,
  collapsed: collapsedProp,
  collapsedWidth = 64,
  defaultCollapsed = false,
  height = '100%',
  onAnimationEnd,
  onAnimationStart,
  onCollapsedChange,
  origin = 'left',
  variant = 'standard',
  width = 320,
  ...elemProps
}: SidePanelProps) => {
  const mounted = React.useRef(false);
  const [collapsed, setCollapsed, isControlled] = useControllableState<typeof collapsedProp>(
    collapsedProp,
    defaultCollapsed
  );
  const [internalState, setInternalState] = React.useState<SidePanelInternalStates>(
    collapsed ? 'collapsed' : 'expanded'
  );
  // Optimization would be to only call uuid in a hook if this is an uncontrolled component
  const sidePanelId = useUniqueId(id);

  // This is meant to prevent animations when the component renders for the first time.
  // mounted.current will only be false on the first pass
  React.useEffect(() => {
    mounted.current = true;
  }, []);

  // TOTHINK: Do we change up the state depending on the whether it's controlled or not?
  // TOTHINK: Do we separate this into two callbacks?
  // Call our onCollapsedChange cb when either collapsed prop or internalState changes
  React.useEffect(() => {
    if (typeof onCollapsedChange !== 'undefined') {
      onCollapsedChange(collapsed, internalState);
    }
  }, [collapsed, internalState, onCollapsedChange]);

  const motion = {
    collapse: createKeyframes(collapsedWidth, width),
    expand: createKeyframes(width, collapsedWidth),
  };

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      if (
        event.animationName === motion.collapse.name ||
        event.animationName === motion.expand.name
      ) {
        setInternalState(collapsed ? 'collapsed' : 'expanded');
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
        setInternalState(collapsed ? 'collapsing' : 'expanding');
      }
    }

    if (typeof onAnimationStart !== 'undefined') {
      onAnimationStart(event);
    }
  };

  // Note: Depending on the collapsed width, the button could "jump" to it's final position.
  const buttonStyle = css({
    position: 'absolute',
    top: spacing.l,
    right: internalState === 'collapsed' ? 0 : origin === 'left' ? spacing.s : undefined,
    left: internalState === 'collapsed' ? 0 : origin === 'right' ? spacing.s : undefined,
    margin: internalState === 'collapsed' ? 'auto' : undefined,
    transform: collapsed
      ? `scaleX(${origin === 'left' ? '1' : '-1'})`
      : `scaleX(${origin === 'left' ? '-1' : '1'})`,
  });

  // TODO: if we're in controlled mode should we ship a hook that spreads aria-controls and aria-expanded
  return (
    <div
      id={isControlled ? id : sidePanelId}
      role="region"
      css={[
        {
          overflow: 'hidden',
          position: 'relative',
          boxSizing: 'border-box',
          width: collapsed ? collapsedWidth : width,
          maxWidth: collapsed ? collapsedWidth : width,
          minWidth: collapsed ? collapsedWidth : width,
          height: height,
          minHeight: height,
          maxHeight: height,
          // mounted.current will be false on the first render, thus you won't get an unwanted animation here
          animation: mounted.current
            ? `${collapsed ? motion.expand : motion.collapse} 200ms ease-out`
            : undefined,
        },
        containerVariantStyle[variant],
      ]}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
      {...elemProps}
    >
      {typeof collapsedProp === 'undefined' ? (
        <IconButton
          variant={IconButton.Variant.CircleFilled}
          icon={transformationImportIcon}
          aria-label={`expand or collapse side panel`}
          aria-expanded={!collapsed}
          aria-controls={sidePanelId}
          onClick={handleClick}
          css={buttonStyle}
        />
      ) : null}
      {children}
    </div>
  );
};

export default SidePanel;
