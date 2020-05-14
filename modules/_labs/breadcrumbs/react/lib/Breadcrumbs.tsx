import * as React from 'react';
import styled from '@emotion/styled';
import {colors, type} from '@workday/canvas-kit-react-core';
import {chevronRightSmallIcon, relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {DropdownPopover, dummyOption, OptionProps} from './DropdownPopover';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {IconButton} from '@workday/canvas-kit-react-button';

export type BreadcrumbVariation = `large` | `medium`;

export type Breadcrumb = {
  /**
   * The text displayed for the Breadcrumb.
   */
  name: string;
  /**
   * The function called when the Breadcrumb is interacted with.
   */
  onAction: () => void;
};

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * A list of all the Breadcrumbs in order from root to current location.
   */
  breadcrumbs: Breadcrumb[];
  /**
   * The width of the breadcrumbs container, used to determine which breadcrumbs to hide.
   */
  containerWidth: number;
  /**
   * The size variation of the breadcrumbs.
   */
  variation?: BreadcrumbVariation;
}

type CrumbProps = {
  variation: BreadcrumbVariation;
};

const LinkedCrumb = styled.span((props: CrumbProps) => ({
  ...type.body,
  ...type.variant.link,
  fontSize: props.variation === `large` ? `16px` : `14px`,
}));

const CurrentCrumb = styled.span((props: CrumbProps) => ({
  ...type.body,
  ...type.variant.label,
  fontSize: props.variation === `large` ? `16px` : `14px`,
}));

const BreadcrumbsContainer = styled.div({
  display: `flex`,
  alignItems: `center`,
});

const breadcrumbOptionEquality = (breadcrumb: Breadcrumb, option: OptionProps) => {
  return breadcrumb.name === option.text;
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const [expanderOpen, setExpanderOpen] = React.useState<boolean>(false);
  const [breadcrumbsHidden, setBreadcrumbsHidden] = React.useState<number[]>([]);
  const [activeOption, setActiveOption] = React.useState(dummyOption);
  const expanderRef: React.RefObject<HTMLButtonElement> = React.useRef(null);
  const activeOptionEl: React.RefObject<HTMLDivElement> = React.useRef(null);
  const dividerWidth = 42;
  const breadcrumbsWidths: number[] = [];
  let context: CanvasRenderingContext2D | null | undefined;

  React.useLayoutEffect(() => {
    if (activeOptionEl.current) {
      activeOptionEl.current.focus();
    }
  });

  React.useLayoutEffect(() => {
    if (context) {
      context.font.fontsize(props.variation === `large` ? 16 : 14);
    }

    // Store widths of each breadcrumb and calculate total breadcrumb width
    let widthOfBreadcrumbNames = 0;
    props.breadcrumbs.forEach(breadcrumb => {
      const width = context ? context.measureText(breadcrumb.name).width : 0;
      breadcrumbsWidths.push(width ? width : 0);
      if (width) {
        widthOfBreadcrumbNames += width;
      }
    });

    // If too wide for container, hide breadcrumbs starting after root
    let totalWidth = widthOfBreadcrumbNames + dividerWidth * (props.breadcrumbs.length - 1);
    if (totalWidth > props.containerWidth) {
      const newHidden = [...breadcrumbsHidden];
      for (let i = 1; i < props.breadcrumbs.length; i++) {
        if (breadcrumbsHidden.indexOf(i) === -1) {
          newHidden.push(i);
        }
        totalWidth = totalWidth - breadcrumbsWidths[i] - dividerWidth;
        if (totalWidth <= props.containerWidth) {
          break;
        }
      }
      setBreadcrumbsHidden(newHidden);
    } else {
      // The container width is large enough to show all breadcrumbs
      setBreadcrumbsHidden([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.breadcrumbs, props.containerWidth]);

  let expanderRendered = false;

  const getHiddenDropdownOptions = () => {
    const hiddenSorted = breadcrumbsHidden.sort();
    return [
      hiddenSorted.map(crumb => {
        return {text: props.breadcrumbs[crumb].name};
      }),
    ];
  };

  const dropdownOptions = getHiddenDropdownOptions();

  const getExpanderDropdown = () => {
    return (
      <DropdownPopover
        isOpen={expanderOpen}
        buttonRef={expanderRef}
        options={dropdownOptions}
        activeOption={activeOption}
        activeOptionEl={activeOptionEl}
        setOpenState={setExpanderOpen}
        setActiveOption={setActiveOption}
        onOptionChange={option => {
          const crumb = props.breadcrumbs.find(breadcrumb =>
            breadcrumbOptionEquality(breadcrumb, option)
          );
          if (crumb) {
            crumb.onAction();
          }
        }}
        portalElement={document.body}
      />
    );
  };

  const handleExpanderKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveOption: React.Dispatch<React.SetStateAction<OptionProps>>,
    firstOption: OptionProps
  ) => {
    if (e.key === 'Enter') {
      setOpenState(true);
      setActiveOption(firstOption);
    }
  };

  const onLinkedCrumbKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    onOptionChange: () => void
  ) => {
    if (e.key === 'Enter') {
      onOptionChange();
    }
  };

  return (
    <BreadcrumbsContainer role={`navigation`}>
      <canvas
        ref={c => {
          if (c) {
            context = c.getContext(`2d`);
          }
        }}
        width={0}
        height={0}
      />
      {props.breadcrumbs.map((breadcrumb, index) => {
        if (breadcrumbsHidden.indexOf(index) === -1) {
          if (index < props.breadcrumbs.length - 1) {
            return (
              <BreadcrumbsContainer key={index}>
                <LinkedCrumb
                  title="Breadcrumb"
                  variation={props.variation || `medium`}
                  onClick={breadcrumb.onAction}
                  tabIndex={0}
                  onKeyDown={e => onLinkedCrumbKeyPress(e, breadcrumb.onAction)}
                >
                  {breadcrumb.name}
                </LinkedCrumb>
                <SystemIcon
                  icon={chevronRightSmallIcon}
                  color={colors.licorice200}
                  colorHover={colors.licorice200}
                  aria-hidden={true}
                />
              </BreadcrumbsContainer>
            );
          } else {
            return (
              <CurrentCrumb key={index} variation={props.variation || `medium`} title="Breadcrumb">
                {breadcrumb.name}
              </CurrentCrumb>
            );
          }
        } else if (!expanderRendered && breadcrumbsHidden.length > 0) {
          expanderRendered = true;
          return (
            <BreadcrumbsContainer key={index}>
              <IconButton
                icon={relatedActionsIcon}
                color={colors.licorice200}
                buttonRef={expanderRef}
                toggled={expanderOpen}
                onClick={() => {
                  if (activeOption !== dropdownOptions[0][0]) {
                    setExpanderOpen(!expanderOpen);
                  }
                }}
                onKeyUp={e => {
                  handleExpanderKeyPress(
                    e,
                    setExpanderOpen,
                    setActiveOption,
                    dropdownOptions[0][0]
                  );
                }}
                data-testid={`more-breadcrumbs`}
                aria-label={`more-breadcrumbs`}
              />
              {breadcrumbsHidden.indexOf(props.breadcrumbs.length - 1) === -1 && (
                <SystemIcon
                  icon={chevronRightSmallIcon}
                  color={colors.licorice200}
                  colorHover={colors.licorice200}
                  aria-hidden={true}
                />
              )}
            </BreadcrumbsContainer>
          );
        }
        return <div key={index}></div>;
      })}
      {expanderOpen && getExpanderDropdown()}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
