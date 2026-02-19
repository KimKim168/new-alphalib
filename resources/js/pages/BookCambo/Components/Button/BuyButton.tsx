import useTranslation from '@/hooks/use-translation';
import { styled } from 'styled-components';

const BuyButton = () => {
    
    
    const { t } = useTranslation();
    return (
        <StyledWrapper>
            <button className="button">
                <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    height="40"
                    width="40"
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 7h12l-1.1 12a2 2 0 0 1-2 1.8H9.1a2 2 0 0 1-2-1.8L6 7z" />
                    <path d="M9 7V6a3 3 0 0 1 6 0v1" />
                </svg>

                <span className="button__text">{t('Buy')}</span>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .button {
        line-height: 1;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.35em;
        padding: 0.75em 1em;
        padding-right: 1.25em;
        color: #fff;
        border: 1px solid transparent;
        font-weight: 700;
        border-radius: 2em;
        font-size: 14px;
        transition: transform 0.3s;
        background: linear-gradient(96deg, #114775, #10507c, #0f5a82, #0e6389, #0d6c90, #0c7596, #0b7f9d, #0a88a3, #0991aa);
    }

    .button__icon {
        width: 1.5em;
        height: 1.5em;
    }

    .button:hover {
        border-color: #f4f5f2;
    }

    .button:active {
        transform: scale(0.98);
        box-shadow: 0 0.5em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
    }
`;

export default BuyButton;
