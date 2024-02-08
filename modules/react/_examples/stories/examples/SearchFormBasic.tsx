import React from 'react';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {searchIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';

const hideNativeClearStyles = createStyles({
  '&::-webkit-search-cancel-button': {
    display: 'none',
  },
});

export const SearchFormBasic = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target[1]);
  };
  return (
    <form role="search" action="." onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroup.InnerStart>
          <TertiaryButton size="small" aria-label="Search" icon={searchIcon} type="submit" />
        </InputGroup.InnerStart>
        <InputGroup.Input
          type="search"
          placeholder="Search for your favorite wine"
          cs={hideNativeClearStyles}
        />
        <InputGroup.InnerEnd>
          <InputGroup.ClearButton />
        </InputGroup.InnerEnd>
      </InputGroup>
    </form>
  );
};
