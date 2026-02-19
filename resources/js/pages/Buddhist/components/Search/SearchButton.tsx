import React from 'react';
import { styled } from 'styled-components';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

const SearchButton = () => {
  
  
  return (
    <StyledWrapper>
      <div className="input-wrapper">
        <Search className="icon" size={18} />
        <Input
          type="text"
          placeholder="Search..."
          name="text"
          className="input"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .input-wrapper .icon {
    position: absolute;
    left: 1rem;
    color: #8b262b;
    pointer-events: none;
  }

  .input-wrapper input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem; /* add left padding for icon */
    border: none;
    border-radius: 0.5rem;
    background-color: #eee;
    font-size: 1rem;
    color: #8b262b;
    box-shadow: 0 0.3rem #dfd9d9;
  }

  .input-wrapper input:focus {
    outline: 1px solid #8b262b;
  }
`;

export default SearchButton;
