import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, depth, type} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {createPortal} from 'react-dom';

type DropdownPopoverProps = {
  /**
   * The button element from which the dropdown is appearing.
   */
  buttonElement?: HTMLElement;
  /**
   * The next focusable element on the page after the dropdown options.
   */
  nextFocusableElement?: HTMLElement;
  /**
   * The currently active option.
   */
  activeOption: OptionProps;
  /**
   * A ref to the currently active option.
   */
  activeOptionEl: React.RefObject<HTMLDivElement>;
  /**
   * A ref tot he button element from which the dropdown is appearing.
   */
  buttonRef: React.RefObject<HTMLElement>;
  /**
   * Whether or not the dropdown is open.
   */
  isOpen: boolean;
  /**
   * The function to call when the option is changed.
   */
  onOptionChange: (option: OptionProps) => void;
  /**
   * Each option in the dropdown.
   */
  options: OptionProps[][];
  /**
   * The element on which to portal the dropdown.
   */
  portalElement: HTMLElement;
  /**
   * A function to set the currently active option.
   */
  setActiveOption: React.Dispatch<React.SetStateAction<OptionProps>>;
  /**
   * A function to set the current open state.
   */
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
};

const dropDownPadding = 5;

export type OptionProps = {
  icon?: CanvasSystemIcon;
  text: string;
  color?: string;
  createType?: string;
};

export const dummyOption = {
  text: `unfocusable`,
  color: `null`,
  icon: plusIcon,
  createType: `Workday.Folder`,
} as OptionProps;

type FocusProps = {
  isFocused: boolean;
};

export const Option = styled.div<FocusProps>(props => ({
  ...type.body,
  alignItems: `center`,
  cursor: `pointer`,
  display: `flex`,
  padding: `7px 14px`,
  backgroundColor: props.isFocused ? colors.blueberry400 : colors.frenchVanilla100,
  color: props.isFocused ? colors.frenchVanilla100 : colors.blackPepper300,
  outline: `none`,
  '&:hover': {
    backgroundColor: props.isFocused ? colors.blueberry400 : colors.soap300,
  },
}));

const BackDrop = styled.div({
  left: 0,
  top: 0,
  position: `fixed`,
  width: `100%`,
  height: `100%`,
  zIndex: 10000,
});

type OptionGroupWrapperProps = {
  isLast: boolean;
};

const OptionGroupWrapper = styled.div<OptionGroupWrapperProps>(props => ({
  borderBottom: props.isLast
    ? `1px solid ${colors.frenchVanilla100}`
    : `1px solid ${colors.soap400}`,
}));

const OptionText = styled.div({
  paddingLeft: `10px`,
});

type OptionsProps = {
  buttonRef: React.RefObject<HTMLElement>;
};

const Options = styled.div<OptionsProps>(props => ({
  borderRadius: `3px`,
  border: `1px solid ${colors.soap400}`,
  ...depth[1],
  left: props.buttonRef.current ? props.buttonRef.current.getBoundingClientRect().left : 0,
  minWidth: `132px`,
  padding: `${spacing.xxxs} ${spacing.zero}`,
  position: `absolute`,
  top: props.buttonRef.current
    ? props.buttonRef.current.getBoundingClientRect().bottom
      ? props.buttonRef.current.getBoundingClientRect().bottom + dropDownPadding
      : 0
    : 0,
  zIndex: 10001,
}));

export const DropdownPopover = (props: DropdownPopoverProps) => {
  const optionList = Array.prototype.concat.apply([], props.options);

  const handleUpdateActiveOption = (optionIndex: number, moveUp: boolean) => {
    const modifier = moveUp ? -1 : 1;
    // adding the length of the list and modulus by the length in order to wrap from top to bottom or bottom to top
    const index = (optionIndex + modifier + optionList.length) % optionList.length;
    props.setActiveOption(optionList[index]);
  };

  const handleOptionKeyUp = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    option: OptionProps,
    onOptionChange: (option: OptionProps) => void
  ) => {
    e.stopPropagation(); // use to keep event from bubbling up to the drag and drop key handler
    switch (e.key) {
      case `Enter`:
        props.setOpenState(false);
        props.setActiveOption(dummyOption);
        onOptionChange(option);
        break;

      case `ArrowUp`:
      case `ArrowLeft`:
      case `Up`:
        handleUpdateActiveOption(optionList.indexOf(option), true);
        break;

      case `ArrowDown`:
      case `Down`:
      case `ArrowRight`:
        handleUpdateActiveOption(optionList.indexOf(option), false);
        break;

      case `Escape`:
      case `Esc`:
        props.setOpenState(false);
        props.setActiveOption(dummyOption);
        break;

      case `Tab`:
        props.setOpenState(false);
        props.setActiveOption(dummyOption);
        e.preventDefault();
        if (props.nextFocusableElement) {
          props.nextFocusableElement.focus();
        }
        break;
      default:
        break;
    }
  };

  const getDropdownOptions = () => {
    return (
      <Options buttonRef={props.buttonRef} data-testid={`dropdown-menu`}>
        {props.options.map(function(group: OptionProps[], index: number) {
          return (
            <OptionGroupWrapper key={index} isLast={index === props.options.length - 1}>
              {group.map(option => {
                const isFocused = props.activeOption.text === option.text;
                return (
                  <Option
                    key={option.text}
                    onKeyUp={e => {
                      handleOptionKeyUp(e, option, props.onOptionChange);
                    }}
                    onKeyDown={e => {
                      if (e.key === `Tab` && e.shiftKey) {
                        props.setOpenState(false);
                        props.setActiveOption(dummyOption);
                        e.preventDefault();
                        if (props.buttonElement) {
                          props.buttonElement.focus();
                        }
                      }
                    }}
                    onClick={() => {
                      props.setOpenState(false);
                      props.onOptionChange(option);
                    }}
                    ref={isFocused ? props.activeOptionEl : null}
                    tabIndex={0}
                    isFocused={isFocused}
                    data-testid={`dropdown-option-${option.text}`}
                  >
                    {option.icon && option.color && (
                      <SystemIcon
                        icon={option.icon}
                        color={isFocused ? colors.soap100 : option.color}
                        colorHover={isFocused ? colors.soap100 : option.color}
                      />
                    )}
                    <OptionText>{option.text}</OptionText>
                  </Option>
                );
              })}
            </OptionGroupWrapper>
          );
        })}
      </Options>
    );
  };

  return (
    <>
      <div>{props.isOpen && createPortal(getDropdownOptions(), props.portalElement)}</div>
      {props.isOpen && (
        <BackDrop
          data-testid={`backdrop`}
          onMouseDown={() => {
            props.setActiveOption(dummyOption);
            props.setOpenState(false);
          }}
          onScroll={e => {
            e.preventDefault();
          }}
        />
      )}
    </>
  );
};

export default DropdownPopover;
