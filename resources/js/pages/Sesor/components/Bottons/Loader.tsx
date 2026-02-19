import React from 'react';
import { styled } from 'styled-components';

const Loader = () => {
  
  
  return (
    <StyledWrapper>
      <div className="container">
        <span />
        <span />
        <span />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    gap: 0.5em;
  }

  .container span {
    display: inline-block;
    border-radius: 50%;
    height: 0.75em; /* smaller size */
    width: 0.75em;
    background-color: #84cdfa;
    animation: ripple 1.5s ease-out infinite;
  }

  .container span:nth-of-type(2) {
    background-color: #5ad1cd;
    animation-delay: 0.2s;
  }

  .container span:nth-of-type(3) {
    background-color: #9b59b6;
    animation-delay: 0.4s;
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

export default Loader;
