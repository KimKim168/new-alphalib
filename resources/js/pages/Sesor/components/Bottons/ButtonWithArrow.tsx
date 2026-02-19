import { Button } from '@/components/ui/button';
import { styled } from 'styled-components';

const ButtonWithArrow = ({ title = '' }) => {
  

  return (
    <StyledWrapper>
      <Button
        className="button w-[200px] bg-primary-two px-2 text-[15px]"
      >
        <span className="label">{title}</span>
        <span className="iconWrapper">
          <svg
            className="svgIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 7L17 17M17 17H9M17 17V9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Button>
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

  .button:hover {
    background-color: #f6c253;
  }

  .button:active {
    transform: scale(0.97);
  }

  .label {
    flex: 1;
    text-align: center;
  }

  .iconWrapper {
    background-color: #5e2b97;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .svgIcon {
    width: 18px;
    height: 18px;
    color: #f4b63f;
    transition: transform 0.4s ease;
  }

  .button:hover .svgIcon {
    transform: translate(2px, 2px);
  }
`;

export default ButtonWithArrow;
