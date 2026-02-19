import { styled } from 'styled-components';

const ButtonClose = () => {
  
  
  return (
    <StyledWrapper>
      <button
        className="button hover:bg-transparent"
      >
        <span className="iconWrapper">
          <svg
            className="svgIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
           <path
              d="M7 17L17 7M17 7V15M17 7H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    color: #5e2b97;
    transition: background 0.3s, transform 0.2s;
  }

  .button:active {
    transform: scale(0.97);
  }

  .iconWrapper {
    background-color: #5e2b97;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .svgIcon {
    width: 22px;
    height: 22px;
    color: #f4b63f;
    transition: transform 0.4s ease;
  }

  .button:hover .svgIcon {
    transform: translate(2px, -2px); /* move up-right on hover */
  }
`;
export default ButtonClose;
