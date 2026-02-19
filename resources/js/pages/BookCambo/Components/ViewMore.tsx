import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { styled } from 'styled-components';

const ViewMore = () => {
    
    
    const { t } = useTranslation();
    const { locale } = usePage().props;
    return (
        <StyledWrapper>
            <div className="btn-container">
                <a className="btn-content" href="/books_by_category">
                    <span className={`btn-title font-bold dark:text-[#ffffff]`}>{t('View More')}</span>
                    <span className="icon-arrow">
                        <svg width="30px" height="30px" viewBox="0 0 66 43" xmlns="http://www.w3.org/2000/svg">
                            <g id="arrow" fill="none" fillRule="evenodd">
                                <path
                                    id="arrow-icon-one"
                                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 Z"
                                    fill="#134571"
                                />
                                <path
                                    id="arrow-icon-two"
                                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 Z"
                                    fill="#134571"
                                />
                                <path
                                    id="arrow-icon-three"
                                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 Z"
                                    fill="#134571"
                                />
                            </g>
                        </svg>
                    </span>
                </a>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .btn-container {
        display: flex;
        justify-content: center;
        --color-text: #134571;
    }

    .btn-content {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0px 0px;
        border-radius: 50px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: var(--color-text);
        background: var(--color-background);
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 2px 6px var(--color-shadow);
    }

    .btn-content:hover {
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 4px 12px var(--color-shadow);
    }

    .icon-arrow {
        display: flex;
        align-items: center;
        transform: scale(0.5);
        transition:
            transform 0.3s ease,
            margin-left 0.3s ease;
    }

    .btn-content:hover .icon-arrow {
        transform: scale(0.55) translateX(3px);
    }

    /* SVG movement */
    #arrow-icon-one {
        transform: translateX(-60%);
        transition: transform 0.3s ease;
    }
    #arrow-icon-two {
        transform: translateX(-30%);
        transition: transform 0.3s ease;
    }
    .btn-content:hover #arrow-icon-one,
    .btn-content:hover #arrow-icon-two {
        transform: translateX(0%);
    }

    /* Flicker animation */
    .btn-content:hover #arrow-icon-three {
        animation: color_anim 1.2s infinite;
    }

    @keyframes color_anim {
        0%,
        100% {
            fill: white;
        }
        50% {
            fill: #134571;
        }
    }
`;

export default ViewMore;
